"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[6147],{8235:function(e,t,n){n(50390);var o=n(86509),r=n(4285),i=n(25594),a=n(62559);t.Z=(0,r.Z)((function(e){return(0,o.Z)({root:{border:"1px solid #E2E2E2",borderRadius:2,backgroundColor:"#FBFAFA",paddingLeft:25,paddingTop:31,paddingBottom:21,paddingRight:30},leftItems:{fontSize:16,fontWeight:"bold",marginBottom:15,display:"flex",alignItems:"center","& .min-icon":{marginRight:15,height:28,width:38}},helpText:{fontSize:16,paddingLeft:5}})}))((function(e){var t=e.classes,n=e.iconComponent,o=e.title,r=e.help;return(0,a.jsx)("div",{className:t.root,children:(0,a.jsxs)(i.ZP,{container:!0,children:[(0,a.jsxs)(i.ZP,{item:!0,xs:12,className:t.leftItems,children:[n,o]}),(0,a.jsx)(i.ZP,{item:!0,xs:12,className:t.helpText,children:r})]})})}))},53224:function(e,t,n){var o=n(18489),r=n(83738),i=(n(50390),n(70758)),a=n(62449),l=n(62559),s=["onClick","text","disabled","tooltip","icon"],c=(0,a.Z)((function(e){return{root:{padding:"7px",color:function(t){return function(t){var n=t.variant,o=t.color,r=e.palette.primary.main;return"primary"===o&&"contained"===n?r=e.palette.primary.contrastText:"primary"===o&&"outlined"===n?r=e.palette.primary.main:"secondary"===o&&(r=e.palette.secondary.main),r}(t)},borderColor:function(t){return"secondary"===t.color?e.palette.secondary.main:e.palette.primary.main},"& svg.min-icon":{width:12,marginLeft:function(e){return e.text?"5px":"0px"},"@media (max-width: 900px)":{width:16,marginLeft:"0px !important"}}}}}));t.Z=function(e){var t=c(e),n=e.onClick,a=e.text,d=void 0===a?"":a,p=e.disabled,u=void 0!==p&&p,m=e.tooltip,h=e.icon,f=void 0===h?null:h,g=(0,r.Z)(e,s);return(0,l.jsxs)(i.Z,(0,o.Z)((0,o.Z)({classes:t,tooltip:m||d,variant:"outlined",onClick:n,disabled:u,color:"secondary",size:"medium",sx:{border:"1px solid #f44336","& span":{fontSize:14,"@media (max-width: 900px)":{display:"none"}}}},g),{},{children:[(0,l.jsx)("span",{children:d})," ",f]}))}},11835:function(e,t,n){var o=n(18489),r=n(83738),i=(n(50390),n(86509)),a=n(4285),l=n(62559),s=["classes","children"];t.Z=(0,a.Z)((function(e){return(0,i.Z)({root:{padding:0,margin:0,border:0,backgroundColor:"transparent",textDecoration:"underline",cursor:"pointer",fontSize:"inherit",color:e.palette.info.main,fontFamily:"Lato, sans-serif"}})}))((function(e){var t=e.classes,n=e.children,i=(0,r.Z)(e,s);return(0,l.jsx)("button",(0,o.Z)((0,o.Z)({},i),{},{className:t.root,children:n}))}))},70758:function(e,t,n){var o=n(18489),r=n(36222),i=n(83738),a=(n(50390),n(86509)),l=n(4285),s=n(95467),c=n(94187),d=n(44977),p=n(62559),u=["classes","children","variant","tooltip"];t.Z=(0,l.Z)((function(e){return(0,a.Z)({root:{padding:8,marginLeft:8,borderWidth:1,borderColor:"#696969",color:"#696969",borderStyle:"solid",borderRadius:3,"& .min-icon":{width:20},"& .MuiTouchRipple-root span":{backgroundColor:e.palette.primary.main,borderRadius:3,opacity:.3},"&:disabled":{color:"#EBEBEB",borderColor:"#EBEBEB"}},contained:{borderColor:e.palette.primary.main,background:e.palette.primary.main,color:"white","& .MuiTouchRipple-root span":{backgroundColor:e.palette.primary.dark,borderRadius:3,opacity:.3},"&:hover":{backgroundColor:e.palette.primary.light,color:"#FFF"}}})}))((function(e){var t=e.classes,n=e.children,a=e.variant,l=void 0===a?"outlined":a,m=e.tooltip,h=(0,i.Z)(e,u),f=(0,p.jsx)(s.Z,(0,o.Z)((0,o.Z)({},h),{},{className:(0,d.Z)(t.root,(0,r.Z)({},t.contained,"contained"===l)),children:n}));return m&&""!==m?(0,p.jsx)(c.Z,{title:m,children:(0,p.jsx)("span",{children:f})}):f}))},25534:function(e,t,n){var o=n(18489),r=(n(50390),n(25594)),i=n(86509),a=n(4285),l=n(72462),s=n(62559);t.Z=(0,a.Z)((function(e){return(0,i.Z)((0,o.Z)({},l.Bw))}))((function(e){var t=e.classes,n=e.className,o=void 0===n?"":n,i=e.children;return(0,s.jsx)("div",{className:t.contentSpacer,children:(0,s.jsx)(r.ZP,{container:!0,children:(0,s.jsx)(r.ZP,{item:!0,xs:12,className:o,children:i})})})}))},23165:function(e,t,n){var o=n(36222),r=n(18489),i=(n(50390),n(65771)),a=n(13336),l=n(12066),s=n(4285),c=n(86509),d=n(72462),p=n(62559);t.Z=(0,s.Z)((function(e){return(0,c.Z)({searchField:(0,r.Z)({},d.qg.searchField),adornment:{}})}))((function(e){var t=e.placeholder,n=void 0===t?"":t,r=e.classes,s=e.onChange,c=e.adornmentPosition,d=void 0===c?"end":c,u=e.overrideClass,m=e.value,h=(0,o.Z)({disableUnderline:!0},"".concat(d,"Adornment"),(0,p.jsx)(i.Z,{position:d,className:r.adornment,children:(0,p.jsx)(a.Z,{})}));return(0,p.jsx)(l.Z,{placeholder:n,className:u||r.searchField,id:"search-resource",label:"",InputProps:h,onChange:function(e){s(e.target.value)},variant:"standard",value:m})}))},66147:function(e,t,n){n.r(t);var o=n(23430),r=n(18489),i=n(50390),a=n(34424),l=n(86509),s=n(4285),c=n(81378),d=n(83310),p=n(25594),u=n(60654),m=n(65433),h=n(77138),f=n(17777),g=n(44149),b=n(72462),y=n(30324),v=n(18221),S=n(24442),x=n(8235),T=n(11835),Z=n(25534),k=n(23165),E=n(53224),A=n(49495),j=n(62559),_={setErrorSnackMessage:g.Ih},L=(0,a.$j)(null,_);t.default=(0,s.Z)((function(e){return(0,l.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},b.OR),b.Je),(0,b.Bz)(e.spacing(4))),{},{twHeight:{minHeight:400},tableBlock:(0,r.Z)({},b.VX.tableBlock),rightActionItems:{display:"flex",alignItems:"center","& button":{whiteSpace:"nowrap"}},searchField:(0,r.Z)((0,r.Z)({},b.qg.searchField),{},{maxWidth:380})}))}))(L((function(e){var t=e.classes,n=e.setErrorSnackMessage,r=(0,i.useState)([]),a=(0,o.Z)(r,2),l=a[0],s=a[1],g=(0,i.useState)(""),b=(0,o.Z)(g,2),_=b[0],L=b[1],N=(0,i.useState)(!1),w=(0,o.Z)(N,2),C=w[0],P=w[1];(0,i.useEffect)((function(){if(C){y.Z.invoke("GET","/api/v1/admin/notification_endpoints").then((function(e){var t=[];null!==e.notification_endpoints&&(t=e.notification_endpoints),s((0,m.fk)(t)),P(!1)})).catch((function(e){n(e),P(!1)}))}}),[C,n]),(0,i.useEffect)((function(){P(!0)}),[]);var I=l.filter((function(e){return""===_||e.service_name.indexOf(_)>=0}));return(0,j.jsx)(i.Fragment,{children:(0,j.jsxs)(Z.Z,{children:[(0,j.jsxs)(p.ZP,{item:!0,xs:12,className:t.actionsTray,children:[(0,j.jsx)(k.Z,{placeholder:"Search target",onChange:L,overrideClass:t.searchField,value:_}),(0,j.jsxs)("div",{className:t.rightActionItems,children:[(0,j.jsx)(E.Z,{tooltip:"Refresh List",text:"Refresh",variant:"outlined",color:"primary",icon:(0,j.jsx)(v.default,{}),onClick:function(){P(!0)}}),(0,j.jsx)(E.Z,{tooltip:"Add Notification Target",text:" Add Notification Target",variant:"contained",color:"primary",icon:(0,j.jsx)(h.dt,{}),onClick:function(){S.Z.push(A.gA.NOTIFICATIONS_ENDPOINTS_ADD)}})]})]}),C&&(0,j.jsx)(c.Z,{}),!C&&(0,j.jsxs)(i.Fragment,{children:[l.length>0&&(0,j.jsxs)(i.Fragment,{children:[(0,j.jsx)(p.ZP,{item:!0,xs:12,className:t.tableBlock,children:(0,j.jsx)(f.Z,{itemActions:[],columns:[{label:"Status",elementKey:"status",renderFunction:function(e){return(0,j.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,j.jsx)(u.Z,{style:"Offline"===e?{color:d.Z[500]}:{}}),e]})},width:150},{label:"Service",elementKey:"service_name"}],isLoading:C,records:I,entityName:"Notification Endpoints",idField:"service_name",customPaperHeight:t.twHeight})}),(0,j.jsx)(p.ZP,{item:!0,xs:12,children:(0,j.jsx)(x.Z,{title:"Notification Endpoints",iconComponent:(0,j.jsx)(h.cC,{}),help:(0,j.jsxs)(i.Fragment,{children:["MinIO bucket notifications allow administrators to send notifications to supported external services on certain object or bucket events. MinIO supports bucket and object-level S3 events similar to the Amazon S3 Event Notifications.",(0,j.jsx)("br",{}),(0,j.jsx)("br",{}),"You can learn more at our"," ",(0,j.jsx)("a",{href:"https://docs.min.io/minio/baremetal/monitoring/bucket-notifications/bucket-notifications.html?ref=con",target:"_blank",rel:"noreferrer",children:"documentation"}),"."]})})})]}),0===l.length&&(0,j.jsx)(p.ZP,{container:!0,justifyContent:"center",alignContent:"center",alignItems:"center",children:(0,j.jsx)(p.ZP,{item:!0,xs:8,children:(0,j.jsx)(x.Z,{title:"Notification Targets",iconComponent:(0,j.jsx)(h.cC,{}),help:(0,j.jsxs)(i.Fragment,{children:["MinIO bucket notifications allow administrators to send notifications to supported external services on certain object or bucket events. MinIO supports bucket and object-level S3 events similar to the Amazon S3 Event Notifications.",(0,j.jsx)("br",{}),(0,j.jsx)("br",{}),"To get started,"," ",(0,j.jsx)(T.Z,{onClick:function(){S.Z.push(A.gA.NOTIFICATIONS_ENDPOINTS_ADD)},children:"Add a Notification Target"}),"."]})})})})]})]})})})))},65433:function(e,t,n){n.d(t,{ee:function(){return i},dM:function(){return a},fk:function(){return f},BR:function(){return g},DD:function(){return y},oj:function(){return v}});var o,r=n(36222),i="notify_postgres",a="notify_mysql",l="notify_kafka",s="notify_amqp",c="notify_mqtt",d="notify_redis",p="notify_nats",u="notify_elasticsearch",m="notify_webhook",h="notify_nsq",f=function(e){return e.map((function(e){return{service_name:"".concat(e.service,":").concat(e.account_id),status:e.status}}))},g=[{actionTrigger:i,targetTitle:"Postgres SQL",logo:"/postgres-logo.svg"},{actionTrigger:l,targetTitle:"Kafka",logo:"/kafka-logo.svg"},{actionTrigger:s,targetTitle:"AMQP",logo:"/amqp-logo.svg"},{actionTrigger:c,targetTitle:"MQTT",logo:"/mqtt-logo.svg"},{actionTrigger:d,targetTitle:"Redis",logo:"/redis-logo.svg"},{actionTrigger:p,targetTitle:"NATS",logo:"/nats-logo.svg"},{actionTrigger:a,targetTitle:"Mysql",logo:"/mysql-logo.svg"},{actionTrigger:u,targetTitle:"Elastic Search",logo:"/elasticsearch-logo.svg"},{actionTrigger:m,targetTitle:"Webhook",logo:"/webhooks-logo.svg"},{actionTrigger:h,targetTitle:"NSQ",logo:"/nsq-logo.svg"}],b=[{name:"queue-dir",label:"Queue Directory",required:!0,tooltip:"staging dir for undelivered messages e.g. '/home/events'",type:"string",placeholder:"Enter Queue Directory"},{name:"queue-limit",label:"Queue Limit",required:!1,tooltip:"maximum limit for undelivered messages, defaults to '10000'",type:"number",placeholder:"Enter Queue Limit"},{name:"comment",label:"Comment",required:!1,type:"comment",placeholder:"Enter Comment"}],y=function(e){return e.filter((function(e){return""!==e.value}))},v=(o={},(0,r.Z)(o,l,[{name:"brokers",label:"Brokers",required:!0,tooltip:"Comma separated list of Kafka broker addresses",type:"string",placeholder:"Enter Brokers"},{name:"topic",label:"Topic",tooltip:"Kafka topic used for bucket notifications",type:"string",placeholder:"Enter Topic"},{name:"sasl_username",label:"SASL Username",tooltip:"Username for SASL/PLAIN or SASL/SCRAM authentication",type:"string",placeholder:"Enter SASL Username"},{name:"sasl_password",label:"SASL Password",tooltip:"Password for SASL/PLAIN or SASL/SCRAM authentication",type:"string",placeholder:"Enter SASL Password"},{name:"sasl_mechanism",label:"SASL Mechanism",tooltip:"SASL authentication mechanism, default 'PLAIN'",type:"string"},{name:"tls_client_auth",label:"TLS Client Auth",tooltip:"Client Auth determines the Kafka server's policy for TLS client auth",type:"string",placeholder:"Enter TLS Client Auth"},{name:"sasl",label:"SASL",tooltip:"Set to 'on' to enable SASL authentication",type:"on|off"},{name:"tls",label:"TLS",tooltip:"Set to 'on' to enable TLS",type:"on|off"},{name:"tls_skip_verify",label:"TLS skip verify",tooltip:'Trust server TLS without verification, defaults to "on" (verify)',type:"on|off"},{name:"client_tls_cert",label:"client TLS cert",tooltip:"Path to client certificate for mTLS auth",type:"path",placeholder:"Enter TLS Client Cert"},{name:"client_tls_key",label:"client TLS key",tooltip:"Path to client key for mTLS auth",type:"path",placeholder:"Enter TLS Client Key"},{name:"version",label:"Version",tooltip:"Specify the version of the Kafka cluster e.g '2.2.0'",type:"string",placeholder:"Enter Kafka Version"}].concat(b)),(0,r.Z)(o,s,[{name:"url",required:!0,label:"URL",tooltip:"AMQP server endpoint e.g. `amqp://myuser:mypassword@localhost:5672`",type:"url"},{name:"exchange",label:"Exchange",tooltip:"Name of the AMQP exchange",type:"string",placeholder:"Enter Exchange"},{name:"exchange_type",label:"Exchange Type",tooltip:"AMQP exchange type",type:"string",placeholder:"Enter Exchange Type"},{name:"routing_key",label:"Routing Key",tooltip:"Routing key for publishing",type:"string",placeholder:"Enter Routing Key"},{name:"mandatory",label:"Mandatory",tooltip:"Quietly ignore undelivered messages when set to 'off', default is 'on'",type:"on|off"},{name:"durable",label:"Durable",tooltip:"Persist queue across broker restarts when set to 'on', default is 'off'",type:"on|off"},{name:"no_wait",label:"No Wait",tooltip:"Non-blocking message delivery when set to 'on', default is 'off'",type:"on|off"},{name:"internal",label:"Internal",tooltip:"Set to 'on' for exchange to be not used directly by publishers, but only when bound to other exchanges",type:"on|off"},{name:"auto_deleted",label:"Auto Deleted",tooltip:"Auto delete queue when set to 'on', when there are no consumers",type:"on|off"},{name:"delivery_mode",label:"Delivery Mode",tooltip:"Set to '1' for non-persistent or '2' for persistent queue",type:"number",placeholder:"Enter Delivery Mode"}].concat(b)),(0,r.Z)(o,d,[{name:"address",required:!0,label:"Address",tooltip:"Redis server's address. For example: `localhost:6379`",type:"address",placeholder:"Enter Address"},{name:"key",required:!0,label:"Key",tooltip:"Redis key to store/update events, key is auto-created",type:"string",placeholder:"Enter Key"},{name:"password",label:"Password",tooltip:"Redis server password",type:"string",placeholder:"Enter Password"}].concat(b)),(0,r.Z)(o,c,[{name:"broker",required:!0,label:"Broker",tooltip:"MQTT server endpoint e.g. `tcp://localhost:1883`",type:"uri",placeholder:"Enter Brokers"},{name:"topic",required:!0,label:"Topic",tooltip:"name of the MQTT topic to publish",type:"string",placeholder:"Enter Topic"},{name:"username",label:"Username",tooltip:"MQTT username",type:"string",placeholder:"Enter Username"},{name:"password",label:"Password",tooltip:"MQTT password",type:"string",placeholder:"Enter Password"},{name:"qos",label:"QOS",tooltip:"Set the quality of service priority, defaults to '0'",type:"number",placeholder:"Enter QOS"},{name:"keep_alive_interval",label:"Keep Alive Interval",tooltip:"Keep-alive interval for MQTT connections in s,m,h,d",type:"duration",placeholder:"Enter Keep Alive Internal"},{name:"reconnect_interval",label:"Reconnect Interval",tooltip:"Reconnect interval for MQTT connections in s,m,h,d",type:"duration",placeholder:"Enter Reconnect Interval"}].concat(b)),(0,r.Z)(o,p,[{name:"address",required:!0,label:"Address",tooltip:"NATS server address e.g. '0.0.0.0:4222'",type:"address",placeholder:"Enter Address"},{name:"subject",required:!0,label:"Subject",tooltip:"NATS subscription subject",type:"string",placeholder:"Enter NATS Subject"},{name:"username",label:"Username",tooltip:"NATS username",type:"string",placeholder:"Enter NATS Username"},{name:"password",label:"Password",tooltip:"NATS password",type:"string",placeholder:"Enter NATS password"},{name:"token",label:"Token",tooltip:"NATS token",type:"string",placeholder:"Enter NATS token"},{name:"tls",label:"TLS",tooltip:"Set to 'on' to enable TLS",type:"on|off"},{name:"tls_skip_verify",label:"TLS Skip Verify",tooltip:'Trust server TLS without verification, defaults to "on" (verify)',type:"on|off"},{name:"ping_interval",label:"Ping Interval",tooltip:"Client ping commands interval in s,m,h,d. Disabled by default",type:"duration",placeholder:"Enter Ping Interval"},{name:"streaming",label:"Streaming",tooltip:"Set to 'on', to use streaming NATS server",type:"on|off"},{name:"streaming_async",label:"Streaming async",tooltip:"Set to 'on', to enable asynchronous publish",type:"on|off"},{name:"streaming_max_pub_acks_in_flight",label:"Streaming max publish ACKS in flight",tooltip:"Number of messages to publish without waiting for ACKs",type:"number",placeholder:"Enter Streaming in flight value"},{name:"streaming_cluster_id",label:"Streaming Cluster ID",tooltip:"Unique ID for NATS streaming cluster",type:"string",placeholder:"Enter Streaming Cluster ID"},{name:"cert_authority",label:"Cert Authority",tooltip:"Path to certificate chain of the target NATS server",type:"string",placeholder:"Enter Cert Authority"},{name:"client_cert",label:"Client Cert",tooltip:"Client cert for NATS mTLS auth",type:"string",placeholder:"Enter Client Cert"},{name:"client_key",label:"Client Key",tooltip:"Client cert key for NATS mTLS auth",type:"string",placeholder:"Enter Client Key"}].concat(b)),(0,r.Z)(o,u,[{name:"url",required:!0,label:"URL",tooltip:"Elasticsearch server's address, with optional authentication info",type:"url",placeholder:"Enter URL"},{name:"index",required:!0,label:"Index",tooltip:"Elasticsearch index to store/update events, index is auto-created",type:"string",placeholder:"Enter Index"},{name:"format",required:!0,label:"Format",tooltip:"'namespace' reflects current bucket/object list and 'access' reflects a journal of object operations, defaults to 'namespace'",type:"enum",placeholder:"Enter Format"}].concat(b)),(0,r.Z)(o,m,[{name:"endpoint",required:!0,label:"Endpoint",tooltip:"webhook server endpoint e.g. http://localhost:8080/minio/events",type:"url",placeholder:"Enter Endpoint"},{name:"auth_token",label:"Auth Token",tooltip:"opaque string or JWT authorization token",type:"string",placeholder:"Enter auth_token"}].concat(b)),(0,r.Z)(o,h,[{name:"nsqd_address",required:!0,label:"NSQD Address",tooltip:"NSQ server address e.g. '127.0.0.1:4150'",type:"address",placeholder:"Enter nsqd_address"},{name:"topic",required:!0,label:"Topic",tooltip:"NSQ topic",type:"string",placeholder:"Enter Topic"},{name:"tls",label:"TLS",tooltip:"set to 'on' to enable TLS",type:"on|off"},{name:"tls_skip_verify",label:"TLS Skip Verify",tooltip:'trust server TLS without verification, defaults to "on" (verify)',type:"on|off"}].concat(b)),o)},60654:function(e,t,n){var o=n(64119);t.Z=void 0;var r=o(n(66830)),i=n(62559),a=(0,r.default)((0,i.jsx)("circle",{cx:"12",cy:"12",r:"8"}),"FiberManualRecord");t.Z=a},65771:function(e,t,n){n.d(t,{Z:function(){return x}});var o=n(36222),r=n(1048),i=n(32793),a=n(50390),l=n(44977),s=n(50076),c=n(91442),d=n(35477),p=n(14478),u=n(23060),m=n(8208),h=n(10594);function f(e){return(0,h.Z)("MuiInputAdornment",e)}var g=(0,n(43349).Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),b=n(15573),y=n(62559),v=["children","className","component","disablePointerEvents","disableTypography","position","variant"],S=(0,m.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["position".concat((0,c.Z)(n.position))],!0===n.disablePointerEvents&&t.disablePointerEvents,t[n.variant]]}})((function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:t.palette.action.active},"filled"===n.variant&&(0,o.Z)({},"&.".concat(g.positionStart,"&:not(.").concat(g.hiddenLabel,")"),{marginTop:16}),"start"===n.position&&{marginRight:8},"end"===n.position&&{marginLeft:8},!0===n.disablePointerEvents&&{pointerEvents:"none"})})),x=a.forwardRef((function(e,t){var n=(0,b.Z)({props:e,name:"MuiInputAdornment"}),o=n.children,m=n.className,h=n.component,g=void 0===h?"div":h,x=n.disablePointerEvents,T=void 0!==x&&x,Z=n.disableTypography,k=void 0!==Z&&Z,E=n.position,A=n.variant,j=(0,r.Z)(n,v),_=(0,u.Z)()||{},L=A;A&&_.variant,_&&!L&&(L=_.variant);var N=(0,i.Z)({},n,{hiddenLabel:_.hiddenLabel,size:_.size,disablePointerEvents:T,position:E,variant:L}),w=function(e){var t=e.classes,n=e.disablePointerEvents,o=e.hiddenLabel,r=e.position,i=e.size,a=e.variant,l={root:["root",n&&"disablePointerEvents",r&&"position".concat((0,c.Z)(r)),a,o&&"hiddenLabel",i&&"size".concat((0,c.Z)(i))]};return(0,s.Z)(l,f,t)}(N);return(0,y.jsx)(p.Z.Provider,{value:null,children:(0,y.jsx)(S,(0,i.Z)({as:g,ownerState:N,className:(0,l.Z)(w.root,m),ref:t},j,{children:"string"!==typeof o||k?(0,y.jsxs)(a.Fragment,{children:["start"===E?(0,y.jsx)("span",{className:"notranslate",dangerouslySetInnerHTML:{__html:"&#8203;"}}):null,o]}):(0,y.jsx)(d.Z,{color:"text.secondary",children:o})}))})}))},83738:function(e,t,n){function o(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return o}})}}]);
//# sourceMappingURL=6147.fa1f52fb.chunk.js.map