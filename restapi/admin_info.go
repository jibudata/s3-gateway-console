// This file is part of MinIO Console Server
// Copyright (c) 2021 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

package restapi

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"net/url"
	"regexp"
	"strings"
	"time"

	"github.com/go-openapi/runtime/middleware"
	"github.com/minio/console/models"
	"github.com/minio/console/restapi/operations"
	"github.com/minio/console/restapi/operations/admin_api"
)

func registerAdminInfoHandlers(api *operations.ConsoleAPI) {
	// return usage stats
	api.AdminAPIAdminInfoHandler = admin_api.AdminInfoHandlerFunc(func(params admin_api.AdminInfoParams, session *models.Principal) middleware.Responder {
		infoResp, err := getAdminInfoResponse(session, params)
		if err != nil {
			return admin_api.NewAdminInfoDefault(int(err.Code)).WithPayload(err)
		}
		return admin_api.NewAdminInfoOK().WithPayload(infoResp)
	})

}

type usageInfo struct {
	Buckets    int64
	Objects    int64
	Usage      int64
	DisksUsage int64
}

// getAdminInfo invokes admin info and returns a parsed `usageInfo` structure
func getAdminInfo(ctx context.Context, client MinioAdmin) (*usageInfo, error) {
	serverInfo, err := client.serverInfo(ctx)
	if err != nil {
		return nil, err
	}
	// we are trimming uint64 to int64 this will report an incorrect measurement for numbers greater than
	// 9,223,372,036,854,775,807

	var usedSpace int64
	for _, serv := range serverInfo.Servers {
		for _, disk := range serv.Disks {
			usedSpace += int64(disk.UsedSpace)
		}
	}

	return &usageInfo{
		Buckets:    int64(serverInfo.Buckets.Count),
		Objects:    int64(serverInfo.Objects.Count),
		Usage:      int64(serverInfo.Usage.Size),
		DisksUsage: usedSpace,
	}, nil
}

type Target struct {
	Expr         string
	Interval     string
	LegendFormat string
	Step         int32
}

type ReduceOptions struct {
	Calcs []string
}

type MetricOptions struct {
	ReduceOptions ReduceOptions
}

type Metric struct {
	ID            int32
	Title         string
	Type          string
	Options       MetricOptions
	Targets       []Target
	GridPos       GridPos
	MaxDataPoints int32
}

type GridPos struct {
	H int32
	W int32
	X int32
	Y int32
}

type WidgetLabel struct {
	Name string
}

var labels = []WidgetLabel{
	{Name: "instance"},
	{Name: "disk"},
}

var widgets = []Metric{
	{
		ID:            1,
		Title:         "Uptime",
		Type:          "stat",
		MaxDataPoints: 100,
		GridPos: GridPos{
			H: 6,
			W: 3,
			X: 0,
			Y: 0,
		},
		Options: MetricOptions{
			ReduceOptions: ReduceOptions{
				Calcs: []string{
					"mean",
				},
			},
		},
		Targets: []Target{
			{
				Expr:         "time() - max(minio_node_process_starttime_seconds)",
				LegendFormat: "{{instance}}",
				Step:         60,
			},
		},
	},
	{
		ID:            65,
		Title:         "Total S3 Traffic Inbound",
		Type:          "stat",
		MaxDataPoints: 100,
		GridPos: GridPos{
			H: 3,
			W: 3,
			X: 3,
			Y: 0,
		},
		Options: MetricOptions{
			ReduceOptions: ReduceOptions{
				Calcs: []string{
					"last",
				},
			},
		},
		Targets: []Target{
			{
				Expr:         "sum by (instance) (minio_s3_traffic_received_bytes{job=\"minio-job\"})",
				LegendFormat: "{{instance}}",
				Step:         60,
			},
		},
	},
	{
		ID:            50,
		Title:         "Current Usable Capacity",
		Type:          "gauge",
		MaxDataPoints: 100,
		GridPos: GridPos{
			H: 6,
			W: 3,
			X: 6,
			Y: 0,
		},
		Options: MetricOptions{
			ReduceOptions: ReduceOptions{
				Calcs: []string{
					"lastNotNull",
				},
			},
		},
		Targets: []Target{
			{
				Expr:         "topk(1, sum(minio_cluster_capacity_usable_free_bytes) by (instance))",
				LegendFormat: "",
				Step:         300,
			},
		},
	},
	{
		ID:    68,
		Title: "Data Usage Growth",
		Type:  "graph",
		GridPos: GridPos{
			H: 6,
			W: 7,
			X: 9,
			Y: 0,
		},
		Targets: []Target{
			{
				Expr:         "sum(minio_bucket_usage_total_bytes) by (instance)",
				LegendFormat: "Used Capacity",
			},
		},
	},
	{
		ID:    52,
		Title: "Object size distribution",
		Type:  "bargauge",
		GridPos: GridPos{
			H: 6,
			W: 5,
			X: 16,
			Y: 0,
		},
		Options: MetricOptions{
			ReduceOptions: ReduceOptions{
				Calcs: []string{
					"mean",
				},
			},
		},
		Targets: []Target{
			{
				Expr:         "max by (range) (minio_bucket_objects_size_distribution)",
				LegendFormat: "{{range}}",
				Step:         300,
			},
		},
	},
	{
		ID:            61,
		Title:         "Total Open FDs",
		Type:          "stat",
		MaxDataPoints: 100,
		GridPos: GridPos{
			H: 3,
			W: 3,
			X: 21,
			Y: 0,
		},
		Options: MetricOptions{
			ReduceOptions: ReduceOptions{
				Calcs: []string{
					"last",
				},
			},
		},
		Targets: []Target{
			{
				Expr:         "sum (minio_node_file_descriptor_open_total)",
				LegendFormat: "",
				Step:         60,
			},
		},
	},
	{
		ID:            64,
		Title:         "Total S3 Traffic Outbound",
		Type:          "stat",
		MaxDataPoints: 100,
		GridPos: GridPos{
			H: 3,
			W: 3,
			X: 3,
			Y: 3,
		},
		Options: MetricOptions{
			ReduceOptions: ReduceOptions{
				Calcs: []string{
					"last",
				},
			},
		},
		Targets: []Target{
			{
				Expr:         "sum by (instance) (minio_s3_traffic_sent_bytes{job=\"minio-job\"})",
				LegendFormat: "",
				Step:         60,
			},
		},
	},
	{
		ID:            62,
		Title:         "Total Goroutines",
		Type:          "stat",
		MaxDataPoints: 100,
		GridPos: GridPos{
			H: 3,
			W: 3,
			X: 21,
			Y: 3,
		},
		Options: MetricOptions{
			ReduceOptions: ReduceOptions{
				Calcs: []string{
					"last",
				},
			},
		},
		Targets: []Target{
			{
				Expr:         "sum without (server,instance) (minio_node_go_routine_total)",
				LegendFormat: "",
				Step:         60,
			},
		},
	},
	{
		ID:            53,
		Title:         "Total Online Servers",
		Type:          "stat",
		MaxDataPoints: 100,
		GridPos: GridPos{
			H: 2,
			W: 3,
			X: 0,
			Y: 6,
		},
		Options: MetricOptions{
			ReduceOptions: ReduceOptions{
				Calcs: []string{
					"mean",
				},
			},
		},
		Targets: []Target{
			{
				Expr:         "minio_cluster_nodes_online_total",
				LegendFormat: "",
				Step:         60,
			},
		},
	},
	{
		ID:            9,
		Title:         "Total Online Disks",
		Type:          "stat",
		MaxDataPoints: 100,
		GridPos: GridPos{
			H: 2,
			W: 3,
			X: 3,
			Y: 6,
		},
		Options: MetricOptions{
			ReduceOptions: ReduceOptions{
				Calcs: []string{
					"mean",
				},
			},
		},
		Targets: []Target{
			{
				Expr:         "minio_cluster_disk_online_total",
				LegendFormat: "Total online disks in MinIO Cluster",
				Step:         60,
			},
		},
	},
	{
		ID:            66,
		Title:         "Number of Buckets",
		Type:          "stat",
		MaxDataPoints: 100,
		GridPos: GridPos{
			H: 3,
			W: 3,
			X: 6,
			Y: 6,
		},
		Options: MetricOptions{
			ReduceOptions: ReduceOptions{
				Calcs: []string{
					"lastNotNull",
				},
			},
		},
		Targets: []Target{
			{
				Expr:         "count(count by (bucket) (minio_bucket_usage_total_bytes))",
				LegendFormat: "",
			},
		},
	},
	{
		ID:    63,
		Title: "S3 API Data Received Rate ",
		Type:  "graph",
		GridPos: GridPos{
			H: 6,
			W: 7,
			X: 9,
			Y: 6,
		},
		Targets: []Target{
			{
				Expr:         "sum by (server) (rate(minio_s3_traffic_received_bytes[$__interval]))",
				LegendFormat: "Data Received [{{server}}]",
			},
		},
	},
	{
		ID:    70,
		Title: "S3 API Data Sent Rate ",
		Type:  "graph",
		GridPos: GridPos{
			H: 6,
			W: 8,
			X: 16,
			Y: 6,
		},
		Targets: []Target{
			{
				Expr:         "sum by (server) (rate(minio_s3_traffic_sent_bytes[$__interval]))",
				LegendFormat: "Data Sent [{{server}}]",
			},
		},
	},
	{
		ID:            69,
		Title:         "Total Offline Servers",
		Type:          "stat",
		MaxDataPoints: 100,
		GridPos: GridPos{
			H: 2,
			W: 3,
			X: 0,
			Y: 8,
		},
		Options: MetricOptions{
			ReduceOptions: ReduceOptions{
				Calcs: []string{
					"mean",
				},
			},
		},
		Targets: []Target{
			{
				Expr:         "minio_cluster_nodes_offline_total",
				LegendFormat: "",
				Step:         60,
			},
		},
	},
	{
		ID:            78,
		Title:         "Total Offline Disks",
		Type:          "stat",
		MaxDataPoints: 100,
		GridPos: GridPos{
			H: 2,
			W: 3,
			X: 3,
			Y: 8,
		},
		Options: MetricOptions{
			ReduceOptions: ReduceOptions{
				Calcs: []string{
					"mean",
				},
			},
		},
		Targets: []Target{
			{
				Expr:         "minio_cluster_disk_offline_total",
				LegendFormat: "",
				Step:         60,
			},
		},
	},
	{
		ID:            44,
		Title:         "Number of Objects",
		Type:          "stat",
		MaxDataPoints: 100,
		GridPos: GridPos{
			H: 3,
			W: 3,
			X: 6,
			Y: 9,
		},
		Options: MetricOptions{
			ReduceOptions: ReduceOptions{
				Calcs: []string{
					"lastNotNull",
				},
			},
		},
		Targets: []Target{
			{
				Expr:         "topk(1, sum(minio_bucket_usage_object_total) by (instance))",
				LegendFormat: "",
			},
		},
	},
	{
		ID:            80,
		Title:         "Time Since Last Heal Activity",
		Type:          "stat",
		MaxDataPoints: 100,
		GridPos: GridPos{
			H: 2,
			W: 3,
			X: 0,
			Y: 10,
		},
		Options: MetricOptions{
			ReduceOptions: ReduceOptions{
				Calcs: []string{
					"last",
				},
			},
		},
		Targets: []Target{
			{
				Expr:         "minio_heal_time_last_activity_nano_seconds",
				LegendFormat: "{{server}}",
				Step:         60,
			},
		},
	},
	{
		ID:            81,
		Title:         "Time Since Last Scan Activity",
		Type:          "stat",
		MaxDataPoints: 100,
		GridPos: GridPos{
			H: 2,
			W: 3,
			X: 3,
			Y: 10,
		},
		Options: MetricOptions{
			ReduceOptions: ReduceOptions{
				Calcs: []string{
					"last",
				},
			},
		},
		Targets: []Target{
			{
				Expr:         "minio_usage_last_activity_nano_seconds",
				LegendFormat: "{{server}}",
				Step:         60,
			},
		},
	},
	{
		ID:    60,
		Title: "S3 API Request Rate",
		Type:  "graph",
		GridPos: GridPos{
			H: 10,
			W: 12,
			X: 0,
			Y: 12,
		},
		Targets: []Target{
			{
				Expr:         "sum by (server,api) (rate(minio_s3_requests_total[$__interval]))",
				LegendFormat: "{{server,api}}",
			},
		},
	},
	{
		ID:    71,
		Title: "S3 API Request Error Rate",
		Type:  "graph",
		GridPos: GridPos{
			H: 10,
			W: 12,
			X: 12,
			Y: 12,
		},
		Targets: []Target{
			{
				Expr:         "rate(minio_s3_requests_errors_total[$__interval])",
				LegendFormat: "{{server,api}}",
			},
		},
	},
	{
		ID:    17,
		Title: "Internode Data Transfer",
		Type:  "graph",
		GridPos: GridPos{
			H: 8,
			W: 24,
			X: 0,
			Y: 22,
		},
		Targets: []Target{
			{
				Expr:         "rate(minio_inter_node_traffic_sent_bytes{job=\"minio-job\"}[$__interval])",
				LegendFormat: "Internode Bytes Received [{{server}}]",
				Step:         4,
			},

			{
				Expr:         "rate(minio_inter_node_traffic_sent_bytes{job=\"minio-job\"}[$__interval])",
				LegendFormat: "Internode Bytes Received [{{server}}]",
			},
		},
	},
	{
		ID:    77,
		Title: "Node CPU Usage",
		Type:  "graph",
		GridPos: GridPos{
			H: 9,
			W: 12,
			X: 0,
			Y: 30,
		},
		Targets: []Target{
			{
				Expr:         "rate(minio_node_process_cpu_total_seconds[$__interval])",
				LegendFormat: "CPU Usage Rate [{{server}}]",
			},
		},
	},
	{
		ID:    76,
		Title: "Node Memory Usage",
		Type:  "graph",
		GridPos: GridPos{
			H: 9,
			W: 12,
			X: 12,
			Y: 30,
		},
		Targets: []Target{
			{
				Expr:         "minio_node_process_resident_memory_bytes",
				LegendFormat: "Memory Used [{{server}}]",
			},
		},
	},
	{
		ID:    74,
		Title: "Drive Used Capacity",
		Type:  "graph",
		GridPos: GridPos{
			H: 8,
			W: 12,
			X: 0,
			Y: 39,
		},
		Targets: []Target{
			{
				Expr:         "minio_node_disk_used_bytes",
				LegendFormat: "Used Capacity [{{server}}:{{disk}}]",
			},
		},
	},
	{
		ID:    82,
		Title: "Drives Free Inodes",
		Type:  "graph",
		GridPos: GridPos{
			H: 8,
			W: 12,
			X: 12,
			Y: 39,
		},
		Targets: []Target{
			{
				Expr:         "minio_cluster_disk_free_inodes",
				LegendFormat: "Free Inodes [{{server}}:{{disk}}]",
			},
		},
	},
	{
		ID:    11,
		Title: "Node Syscalls",
		Type:  "graph",
		GridPos: GridPos{
			H: 9,
			W: 12,
			X: 0,
			Y: 47,
		},
		Targets: []Target{
			{
				Expr:         "rate(minio_node_syscall_read_total[$__interval])",
				LegendFormat: "Read Syscalls [{{server}}]",
				Step:         60,
			},

			{
				Expr:         "rate(minio_node_syscall_read_total[$__interval])",
				LegendFormat: "Read Syscalls [{{server}}]",
			},
		},
	},
	{
		ID:    8,
		Title: "Node File Descriptors",
		Type:  "graph",
		GridPos: GridPos{
			H: 9,
			W: 12,
			X: 12,
			Y: 47,
		},
		Targets: []Target{
			{
				Expr:         "minio_node_file_descriptor_open_total",
				LegendFormat: "Open FDs [{{server}}]",
			},
		},
	},
	{
		ID:    73,
		Title: "Node IO",
		Type:  "graph",
		GridPos: GridPos{
			H: 8,
			W: 24,
			X: 0,
			Y: 56,
		},
		Targets: []Target{
			{
				Expr:         "rate(minio_node_io_rchar_bytes[$__interval])",
				LegendFormat: "Node RChar [{{server}}]",
			},

			{
				Expr:         "rate(minio_node_io_rchar_bytes[$__interval])",
				LegendFormat: "Node RChar [{{server}}]",
			},
		},
	},
}

type Widget struct {
	Title string
	Type  string
}

type DataResult struct {
	Metric map[string]string `json:"metric"`
	Values []interface{}     `json:"values"`
}

type PromRespData struct {
	ResultType string       `json:"resultType"`
	Result     []DataResult `json:"result"`
}
type PromResp struct {
	Status string       `json:"status"`
	Data   PromRespData `json:"data"`
}

type LabelResponse struct {
	Status string   `json:"status"`
	Data   []string `json:"data"`
}
type LabelResults struct {
	Label    string
	Response LabelResponse
}

var jobRegex = regexp.MustCompile(`(?m)\{[a-z]+\=\".*?\"\}`)

// getAdminInfoResponse returns the response containing total buckets, objects and usage.
func getAdminInfoResponse(session *models.Principal, params admin_api.AdminInfoParams) (*models.AdminInfoResponse, *models.Error) {
	prometheusURL := getPrometheusURL()

	if prometheusURL == "" {
		mAdmin, err := newMAdminClient(session)
		if err != nil {
			return nil, prepareError(err)
		}
		// create a minioClient interface implementation
		// defining the client to be used
		adminClient := adminClient{client: mAdmin}
		// 20 seconds timeout
		ctx, cancel := context.WithTimeout(context.Background(), 20*time.Second)
		defer cancel()
		// serialize output
		usage, err := getAdminInfo(ctx, adminClient)
		if err != nil {
			return nil, prepareError(err)
		}
		sessionResp := &models.AdminInfoResponse{
			Buckets: usage.Buckets,
			Objects: usage.Objects,
			Usage:   usage.Usage,
		}
		return sessionResp, nil
	}

	labelResultsCh := make(chan LabelResults)

	for _, lbl := range labels {
		go func(lbl WidgetLabel) {
			endpoint := fmt.Sprintf("%s/api/v1/label/%s/values", prometheusURL, lbl.Name)

			resp, err := http.Get(endpoint)
			if err != nil {
				log.Println(err)
				return
			}
			defer func() {
				if err := resp.Body.Close(); err != nil {
					log.Println(err)
				}
			}()

			if resp.StatusCode != 200 {
				body, err := ioutil.ReadAll(resp.Body)
				if err != nil {
					log.Println(err)
					return
				}
				log.Println(endpoint)
				log.Println(resp.StatusCode)
				log.Println(string(body))
				return
			}

			var response LabelResponse
			jd := json.NewDecoder(resp.Body)
			if err = jd.Decode(&response); err != nil {
				log.Println(err)
				return
			}

			labelResultsCh <- LabelResults{Label: lbl.Name, Response: response}

		}(lbl)
	}

	labelMap := make(map[string][]string)

	// wait for as many goroutines that come back in less than 1 second
LabelsWaitLoop:
	for {
		select {
		case <-time.After(1 * time.Second):
			break LabelsWaitLoop
		case res := <-labelResultsCh:
			labelMap[res.Label] = res.Response.Data
			if len(labelMap) >= len(labels) {
				break LabelsWaitLoop
			}
		}
	}

	// launch a goroutines per widget

	results := make(chan models.Widget)
	for _, m := range widgets {
		go func(m Metric, params admin_api.AdminInfoParams) {
			targetResults := make(chan *models.ResultTarget)
			// for each target we will launch another goroutine to fetch the values
			for _, target := range m.Targets {
				go func(target Target, params admin_api.AdminInfoParams) {
					apiType := "query_range"
					now := time.Now()

					extraParamters := fmt.Sprintf("&start=%d&end=%d", now.Add(-15*time.Minute).Unix(), now.Unix())

					var step int32 = 60
					if target.Step > 0 {
						step = target.Step
					}
					if params.Step != nil && *params.Step > 0 {
						step = *params.Step
					}
					if step > 0 {
						extraParamters = fmt.Sprintf("%s&step=%d", extraParamters, step)
					}

					if params.Start != nil && params.End != nil {
						extraParamters = fmt.Sprintf("&start=%d&end=%d&step=%d", *params.Start, *params.End, *params.Step)
					}

					// replace the `$__interval` global for step with unit (s for seconds)
					queryExpr := strings.ReplaceAll(target.Expr, "$__interval", fmt.Sprintf("%ds", step))
					if strings.Contains(queryExpr, "$") {
						var re = regexp.MustCompile(`\$([a-z]+)`)

						for _, match := range re.FindAllStringSubmatch(queryExpr, -1) {
							if val, ok := labelMap[match[1]]; ok {
								queryExpr = strings.ReplaceAll(queryExpr, "$"+match[1], fmt.Sprintf("(%s)", strings.Join(val, "|")))
							}
						}
					}

					// replace the weird {job="asd"} in the exp
					if strings.Contains(queryExpr, "job=") {
						queryExpr = jobRegex.ReplaceAllString(queryExpr, "")
					}

					endpoint := fmt.Sprintf("%s/api/v1/%s?query=%s%s", getPrometheusURL(), apiType, url.QueryEscape(queryExpr), extraParamters)

					log.Printf("%s \t  - %d [%d] - %s\n\n", m.Title, target.Step, params.Step, endpoint)
					resp, err := http.Get(endpoint)
					if err != nil {
						log.Println(err)
						return
					}
					defer func() {
						if err := resp.Body.Close(); err != nil {
							log.Println(err)
						}
					}()

					if resp.StatusCode != 200 {
						body, err := ioutil.ReadAll(resp.Body)
						if err != nil {
							log.Println(err)
							return
						}
						log.Println(endpoint)
						log.Println(resp.StatusCode)
						log.Println(string(body))
						return
					}

					var response PromResp
					jd := json.NewDecoder(resp.Body)
					if err = jd.Decode(&response); err != nil {
						log.Println(err)
						return
					}
					//body, _ := ioutil.ReadAll(resp.Body)
					//err = json.Unmarshal(body, &response)
					//if err != nil {
					//	log.Println(err)
					//}

					targetResult := models.ResultTarget{
						LegendFormat: target.LegendFormat,
						ResultType:   response.Data.ResultType,
					}
					for _, r := range response.Data.Result {
						targetResult.Result = append(targetResult.Result, &models.WidgetResult{
							Metric: r.Metric,
							Values: r.Values,
						})
					}

					//xx, err := json.Marshal(response)
					//if err != nil {
					//	log.Println(err)
					//}
					//log.Println("----", m.Title)
					//log.Println(string(body))
					//log.Println(string(xx))
					//log.Println("=====")

					targetResults <- &targetResult

				}(target, params)
			}

			wdgtResult := models.Widget{
				Title: m.Title,
				Type:  m.Type,
			}
			if len(m.Options.ReduceOptions.Calcs) > 0 {
				wdgtResult.Options = &models.WidgetOptions{
					ReduceOptions: &models.WidgetOptionsReduceOptions{
						Calcs: m.Options.ReduceOptions.Calcs,
					},
				}
			}
			// count how many targets we have received
			targetsReceived := 0

			for res := range targetResults {
				wdgtResult.Targets = append(wdgtResult.Targets, res)
				targetsReceived++
				// upon receiving the total number of targets needed, we can close the channel to not lock the goroutine
				if targetsReceived >= len(m.Targets) {
					close(targetResults)
				}
			}

			results <- wdgtResult
		}(m, params)
	}

	// count the number of widgets that have completed calculating
	totalWidgets := 0
	sessionResp := &models.AdminInfoResponse{}

	var wdgts []*models.Widget
	// wait for as many goroutines that come back in less than 1 second
WaitLoop:
	for {
		select {
		case <-time.After(1 * time.Second):
			break WaitLoop
		case res := <-results:
			wdgts = append(wdgts, &res)
			totalWidgets++
			if totalWidgets >= len(widgets) {
				break WaitLoop
			}
		}
	}

	sessionResp.Widgets = wdgts

	return sessionResp, nil
}
