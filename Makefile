PWD := $(shell pwd)
GOPATH := $(shell go env GOPATH)
# Sets the build version based on the output of the following command, if we are building for a tag, that's the build else it uses the current git branch as the build
BUILD_VERSION:=$(shell git describe --exact-match --tags $(git log -n1 --pretty='%h') 2>/dev/null || git rev-parse --abbrev-ref HEAD 2>/dev/null)
BUILD_TIME:=$(shell date 2>/dev/null)
TAG ?= "minio/console:$(BUILD_VERSION)-dev"
MINIO_VERSION ?= "quay.io/minio/minio:latest"
TARGET_BUCKET ?= "target"
NODE_VERSION := $(shell cat .nvmrc)

default: console

.PHONY: console
console:
	@echo "Building Console binary to './console'"
	@(GO111MODULE=on CGO_ENABLED=0 go build -trimpath --tags=kqueue,operator --ldflags "-s -w" -o console ./cmd/console)

k8sdev:
	@docker build -t $(TAG) --build-arg build_version=$(BUILD_VERSION) --build-arg build_time='$(BUILD_TIME)' --build-arg NODE_VERSION='$(NODE_VERSION)' .
	@kind load docker-image $(TAG)
	@echo "Done, now restart your console deployment"

getdeps:
	@mkdir -p ${GOPATH}/bin
	@echo "Installing golangci-lint" && curl -sSfL https://raw.githubusercontent.com/golangci/golangci-lint/master/install.sh | sh -s -- -b $(GOPATH)/bin

verifiers: getdeps fmt lint

fmt:
	@echo "Running $@ check"
	@GO111MODULE=on gofmt -d restapi/
	@GO111MODULE=on gofmt -d pkg/
	@GO111MODULE=on gofmt -d cmd/
	@GO111MODULE=on gofmt -d cluster/

crosscompile:
	@(env bash $(PWD)/cross-compile.sh $(arg1))

lint:
	@echo "Running $@ check"
	@GO111MODULE=on ${GOPATH}/bin/golangci-lint cache clean
	@GO111MODULE=on ${GOPATH}/bin/golangci-lint run --timeout=5m --config ./.golangci.yml

install: console
	@echo "Installing console binary to '$(GOPATH)/bin/console'"
	@mkdir -p $(GOPATH)/bin && cp -f $(PWD)/console $(GOPATH)/bin/console
	@echo "Installation successful. To learn more, try \"console --help\"."

swagger-gen: clean-swagger swagger-console swagger-operator apply-gofmt
	@echo "Done Generating swagger server code from yaml"

apply-gofmt:
	@echo "Applying gofmt to all generated an existing files"
	@GO111MODULE=on gofmt -w .

clean-swagger:
	@echo "cleaning"
	@rm -rf models
	@rm -rf restapi/operations
	@rm -rf operatorapi/operations

swagger-console:
	@echo "Generating swagger server code from yaml"
	@swagger generate server -A console --main-package=management --server-package=restapi --exclude-main -P models.Principal -f ./swagger-console.yml -r NOTICE

swagger-operator:
	@echo "Generating swagger server code from yaml"
	@swagger generate server -A operator --main-package=operator --server-package=operatorapi --exclude-main -P models.Principal -f ./swagger-operator.yml -r NOTICE

assets:
	@(if [ -f "${NVM_DIR}/nvm.sh" ]; then \. "${NVM_DIR}/nvm.sh" && nvm install && nvm use && npm install -g yarn ; fi &&\
	  cd portal-ui; yarn install --prefer-offline; make build-static; yarn prettier --write . --loglevel warn; cd ..)

test-integration:
	@(docker stop pgsqlcontainer || true)
	@(docker stop minio || true)
	@(docker network rm mynet123 || true)
	@echo "create docker network to communicate containers MinIO & PostgreSQL"
	@(docker network create --subnet=173.18.0.0/29 mynet123)
	@echo "docker run with MinIO Version below:"
	@echo $(MINIO_VERSION)
	@(docker run -v /data1 -v /data2 -v /data3 -v /data4 --net=mynet123 -d --name minio --rm -p 9000:9000 -p 9001:9001 -e MINIO_KMS_SECRET_KEY=my-minio-key:OSMM+vkKUTCvQs9YL/CVMIMt43HFhkUpqJxTmGl6rYw= $(MINIO_VERSION) server /data{1...4} --console-address ':9001' && sleep 5)
	@(docker run --net=mynet123 --ip=173.18.0.3 --name pgsqlcontainer --rm -p 5432:5432 -e POSTGRES_PASSWORD=password -d postgres && sleep 5)
	@echo "execute test and get coverage for test-integration:"
	@(cd integration && go test -coverpkg=../restapi -c -tags testrunmain . && mkdir -p coverage && export THETARGET=$(TARGET_BUCKET) && echo "THETARGET: ${THETARGET}" && ./integration.test -test.v -test.run "^Test*" -test.coverprofile=coverage/system.out)
	@(docker stop pgsqlcontainer)
	@(docker stop minio)
	@(docker network rm mynet123)

test-replication:
	@(docker stop minio || true)
	@(docker stop minio1 || true)
	@(docker stop minio2 || true)
	@(docker network rm mynet123 || true)
	@(docker network create mynet123)
	@(docker run -v /data1 -v /data2 -v /data3 -v /data4 \
	  --net=mynet123 -d \
	  --name minio \
	  --rm \
	  -p 9000:9000 \
	  -p 6000:6000 \
	  -e MINIO_KMS_SECRET_KEY=my-minio-key:OSMM+vkKUTCvQs9YL/CVMIMt43HFhkUpqJxTmGl6rYw= \
	  -e MINIO_ROOT_USER="minioadmin" \
	  -e MINIO_ROOT_PASSWORD="minioadmin" \
	  $(MINIO_VERSION) server /data{1...4} \
	  --address :9000 \
	  --console-address :6000)
	@(docker run -v /data1 -v /data2 -v /data3 -v /data4 \
	  --net=mynet123 -d \
	  --name minio1 \
	  --rm \
	  -p 9001:9001 \
	  -p 6001:6001 \
	  -e MINIO_KMS_SECRET_KEY=my-minio-key:OSMM+vkKUTCvQs9YL/CVMIMt43HFhkUpqJxTmGl6rYw= \
	  -e MINIO_ROOT_USER="minioadmin" \
	  -e MINIO_ROOT_PASSWORD="minioadmin" \
	  $(MINIO_VERSION) server /data{1...4} \
	  --address :9001 \
	  --console-address :6001)
	@(docker run -v /data1 -v /data2 -v /data3 -v /data4 \
	  --net=mynet123 -d \
	  --name minio2 \
	  --rm \
	  -p 9002:9002 \
	  -p 6002:6002 \
	  -e MINIO_KMS_SECRET_KEY=my-minio-key:OSMM+vkKUTCvQs9YL/CVMIMt43HFhkUpqJxTmGl6rYw= \
	  -e MINIO_ROOT_USER="minioadmin" \
	  -e MINIO_ROOT_PASSWORD="minioadmin" \
	  $(MINIO_VERSION) server /data{1...4} \
	  --address :9002 \
	  --console-address :6002)
	@(cd replication && go test -coverpkg=../restapi -c -tags testrunmain . && mkdir -p coverage && ./replication.test -test.v -test.run "^Test*" -test.coverprofile=coverage/replication.out)
	@(docker stop minio || true)
	@(docker stop minio1 || true)
	@(docker stop minio2 || true)
	@(docker network rm mynet123 || true)

test-sso-integration:
	@echo "create the network in bridge mode to communicate all containers"
	@(docker network create my-net)
	@echo "run openldap container using MinIO Image: quay.io/minio/openldap:latest"
	@(docker run \
		-e LDAP_ORGANIZATION="MinIO Inc" \
		-e LDAP_DOMAIN="min.io" \
		-e LDAP_ADMIN_PASSWORD="admin" \
		--network my-net \
		-p 389:389 \
		-p 636:636 \
		--name openldap \
		--detach quay.io/minio/openldap:latest)
	@echo "Run Dex container using MinIO Image: quay.io/minio/dex:latest"
	@(docker run \
		-e DEX_ISSUER=http://dex:5556/dex \
		-e DEX_CLIENT_REDIRECT_URI=http://127.0.0.1:9090/oauth_callback \
		-e DEX_LDAP_SERVER=openldap:389 \
		--network my-net \
		-p 5556:5556 \
		--name dex \
		--detach quay.io/minio/dex:latest)
	@echo "running minio server"
	@(docker run \
	-v /data1 -v /data2 -v /data3 -v /data4 \
	--network my-net \
	-d \
	--name minio \
	--rm \
	-p 9000:9000 \
	-p 9001:9001 \
	-e MINIO_IDENTITY_OPENID_CLIENT_ID="minio-client-app" \
	-e MINIO_IDENTITY_OPENID_CLIENT_SECRET="minio-client-app-secret" \
	-e MINIO_IDENTITY_OPENID_CLAIM_NAME=name \
	-e MINIO_IDENTITY_OPENID_CONFIG_URL=http://dex:5556/dex/.well-known/openid-configuration \
	-e MINIO_IDENTITY_OPENID_REDIRECT_URI=http://127.0.0.1:9090/oauth_callback \
	-e MINIO_ROOT_USER=minio \
	-e MINIO_ROOT_PASSWORD=minio123 $(MINIO_VERSION) server /data{1...4} --address :9000 --console-address :9001)
	@echo "run mc commands to set the policy"
	@(docker run --name minio-client --network my-net -dit --entrypoint=/bin/sh minio/mc)
	@(docker exec minio-client mc alias set myminio/ http://minio:9000 minio minio123)
	@echo "adding policy to Dillon Harper to be able to login:"
	@(cd sso-integration && docker cp allaccess.json minio-client:/ && docker exec minio-client mc admin policy add myminio "Dillon Harper" allaccess.json)
	@echo "starting bash script"
	@(env bash $(PWD)/sso-integration/set-sso.sh)
	@echo "add python module"
	@(pip3 install bs4)
	@echo "Executing the test:"
	@(cd sso-integration && go test -coverpkg=../restapi -c -tags testrunmain . && mkdir -p coverage && ./sso-integration.test -test.v -test.run "^Test*" -test.coverprofile=coverage/sso-system.out)

test-operator-integration:
	@(echo "Start cd operator-integration && go test:")
	@(pwd)
	@(cd operator-integration && go test -coverpkg=../operatorapi -c -tags testrunmain . && mkdir -p coverage && ./operator-integration.test -test.v -test.run "^Test*" -test.coverprofile=coverage/operator-api.out)

test-operator:
	@(env bash $(PWD)/portal-ui/tests/scripts/operator.sh)
	@(docker stop minio)

test-permissions-1:
	@(docker run -v /data1 -v /data2 -v /data3 -v /data4 -d --name minio --rm -p 9000:9000 quay.io/minio/minio:latest server /data{1...4})
	@(env bash $(PWD)/portal-ui/tests/scripts/permissions.sh "portal-ui/tests/permissions-1/")
	@(docker stop minio)

test-permissions-2:
	@(docker run -v /data1 -v /data2 -v /data3 -v /data4 -d --name minio --rm -p 9000:9000 quay.io/minio/minio:latest server /data{1...4})
	@(env bash $(PWD)/portal-ui/tests/scripts/permissions.sh "portal-ui/tests/permissions-2/")
	@(docker stop minio)

test-permissions-3:
	@(docker run -v /data1 -v /data2 -v /data3 -v /data4 -d --name minio --rm -p 9000:9000 quay.io/minio/minio:latest server /data{1...4})
	@(env bash $(PWD)/portal-ui/tests/scripts/permissions.sh "portal-ui/tests/permissions-3/")
	@(docker stop minio)

test-permissions-4:
	@(docker run -v /data1 -v /data2 -v /data3 -v /data4 -d --name minio --rm -p 9000:9000 quay.io/minio/minio:latest server /data{1...4})
	@(env bash $(PWD)/portal-ui/tests/scripts/permissions.sh "portal-ui/tests/permissions-4/")
	@(docker stop minio)

test-permissions-5:
	@(docker run -v /data1 -v /data2 -v /data3 -v /data4 -d --name minio --rm -p 9000:9000 quay.io/minio/minio:latest server /data{1...4})
	@(env bash $(PWD)/portal-ui/tests/scripts/permissions.sh "portal-ui/tests/permissions-5/")
	@(docker stop minio)

test-permissions-6:
	@(docker run -v /data1 -v /data2 -v /data3 -v /data4 -d --name minio --rm -p 9000:9000 quay.io/minio/minio:latest server /data{1...4})
	@(env bash $(PWD)/portal-ui/tests/scripts/permissions.sh "portal-ui/tests/permissions-6/")
	@(docker stop minio)

test-permissions-7:
	@(docker run -v /data1 -v /data2 -v /data3 -v /data4 -d --name minio --rm -p 9000:9000 quay.io/minio/minio:latest server /data{1...4})
	@(env bash $(PWD)/portal-ui/tests/scripts/permissions.sh "portal-ui/tests/permissions-7/")
	@(docker stop minio)

test-apply-permissions:
	@(env bash $(PWD)/portal-ui/tests/scripts/initialize-env.sh)

test-start-docker-minio:
	@(docker run -v /data1 -v /data2 -v /data3 -v /data4 -d --name minio --rm -p 9000:9000 quay.io/minio/minio:latest server /data{1...4})

initialize-operator:
	@echo "Done initializing operator test"

initialize-permissions: test-start-docker-minio test-apply-permissions
	@echo "Done initializing permissions test"

cleanup-permissions:
	@(env bash $(PWD)/portal-ui/tests/scripts/cleanup-env.sh)
	@(docker stop minio)

test:
	@echo "execute test and get coverage"
	@(cd restapi && mkdir coverage && GO111MODULE=on go test -test.v -coverprofile=coverage/coverage.out)

test-unit-test-operator:
	@echo "execute unit test and get coverage for operatorapi"
	@(cd operatorapi && mkdir coverage && GO111MODULE=on go test -test.v -coverprofile=coverage/coverage-unit-test-operatorapi.out)

test-pkg:
	@echo "execute test and get coverage"
	@(cd pkg && mkdir coverage && GO111MODULE=on go test -test.v -coverprofile=coverage/coverage-pkg.out)

coverage:
	@(GO111MODULE=on go test -v -coverprofile=coverage.out github.com/minio/console/restapi/... && go tool cover -html=coverage.out && open coverage.html)

clean:
	@echo "Cleaning up all the generated files"
	@find . -name '*.test' | xargs rm -fv
	@find . -name '*~' | xargs rm -fv
	@rm -vf console

docker:
	@docker buildx build --output=type=docker --platform linux/amd64 -t $(TAG) --build-arg build_version=$(BUILD_VERSION) --build-arg build_time='$(BUILD_TIME)' --build-arg NODE_VERSION='$(NODE_VERSION)' .

release: swagger-gen
	@echo "Generating Release: $(RELEASE)"
	@make assets
	@yq -i e '.spec.template.spec.containers[0].image |= "minio/console:$(RELEASE)"' k8s/operator-console/base/console-deployment.yaml
	@yq -i e 'select(.kind == "Deployment").spec.template.spec.containers[0].image |= "minio/console:$(RELEASE)"' k8s/operator-console/standalone/console-deployment.yaml
	@git add -u .
	@git add portal-ui/build/
