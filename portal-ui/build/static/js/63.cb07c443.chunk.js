(this["webpackJsonpportal-ui"]=this["webpackJsonpportal-ui"]||[]).push([[63],{402:function(e,t,n){"use strict";n(2);var a=n(41),r=n(441),o=n(443),i=n(307),c=n(319),l=n(96),s=n(387),d=n(74),p=n(75),u=n(42),m=n(23),g=n(0),b={toggleList:u.q},f=Object(a.b)((function(e){return{sidebarOpen:e.system.sidebarOpen,operatorMode:e.system.operatorMode,managerObjects:e.objectBrowser.objectManager.objectsToManage}}),b);t.a=f(Object(c.a)((function(e){return Object(i.a)({headerContainer:{width:"100%",minHeight:79,display:"flex",backgroundColor:"#fff",left:0,boxShadow:"rgba(0,0,0,.08) 0 3px 10px"},label:{display:"flex",justifyContent:"flex-start",alignItems:"center"},labelStyle:{color:"#000",fontSize:18,fontWeight:700,marginLeft:34,marginTop:8},rightMenu:{textAlign:"right"},logo:{marginLeft:34,fill:e.palette.primary.main,"& .min-icon":{width:120}}})}))((function(e){var t=e.classes,n=e.label,a=e.actions,i=e.sidebarOpen,c=e.operatorMode,u=e.managerObjects,b=e.toggleList;return Object(g.jsxs)(o.a,{container:!0,className:"".concat(t.headerContainer," page-header"),direction:"row",alignItems:"center",children:[Object(g.jsx)(r.a,{display:{xs:"block",sm:"block",md:"none"},children:Object(g.jsx)(o.a,{item:!0,xs:12,style:{height:10},children:"\xa0"})}),Object(g.jsxs)(o.a,{item:!0,xs:12,sm:12,md:6,className:t.label,children:[!i&&Object(g.jsx)("div",{className:t.logo,children:c?Object(g.jsx)(d.a,{}):Object(g.jsx)(p.a,{})}),Object(g.jsx)(l.a,{variant:"h4",className:t.labelStyle,children:n})]}),Object(g.jsxs)(o.a,{item:!0,xs:12,sm:12,md:6,className:t.rightMenu,children:[a&&a,u&&u.length>0&&Object(g.jsx)(s.a,{color:"primary","aria-label":"Refresh List",component:"span",onClick:function(){b()},size:"large",children:Object(g.jsx)(m.pb,{})})]})]})})))},404:function(e,t,n){"use strict";var a=n(1),r=(n(2),n(443)),o=n(307),i=n(319),c=n(122),l=n(0);t.a=Object(i.a)((function(e){return Object(o.a)(Object(a.a)({},c.s))}))((function(e){var t=e.classes,n=e.className,a=void 0===n?"":n,o=e.children;return Object(l.jsx)("div",{className:t.contentSpacer,children:Object(l.jsx)(r.a,{container:!0,children:Object(l.jsx)(r.a,{item:!0,xs:12,className:a,children:o})})})}))},426:function(e,t,n){"use strict";n(2);var a=n(20),r=n(307),o=n(319),i=n(23),c=n(0);t.a=Object(o.a)((function(e){return Object(r.a)({link:{display:"flex",alignItems:"center",textDecoration:"none",maxWidth:"250px",padding:"2rem 2rem 0rem 2rem",color:e.palette.primary.light,fontSize:".8rem","&:hover":{textDecoration:"underline"}},icon:{marginRight:".3rem",display:"flex",alignItems:"center",justifyContent:"center"}})}))((function(e){var t=e.to,n=e.label,r=e.classes,o=e.className;return Object(c.jsxs)(a.a,{to:t,className:"".concat(r.link," ").concat(o||""),children:[Object(c.jsx)("div",{className:r.icon,children:Object(c.jsx)(i.g,{})}),Object(c.jsx)("div",{className:r.label,children:n})]})}))},432:function(e,t,n){"use strict";var a=n(1),r=n(2),o=n(0);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;function n(n){return Object(o.jsx)(r.Suspense,{fallback:t,children:Object(o.jsx)(e,Object(a.a)({},n))})}return n}},441:function(e,t,n){"use strict";var a=n(3),r=n(4),o=n(2),i=(n(12),n(8)),c=n(100),l=n(362),s=n(372),d=n(59),p=n(0),u=["className","component"];var m=n(204),g=n(213),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.defaultTheme,n=e.defaultClassName,m=void 0===n?"MuiBox-root":n,g=e.generateClassName,b=Object(c.a)("div")(l.a),f=o.forwardRef((function(e,n){var o=Object(d.a)(t),c=Object(s.a)(e),l=c.className,f=c.component,h=void 0===f?"div":f,j=Object(r.a)(c,u);return Object(p.jsx)(b,Object(a.a)({as:h,ref:n,className:Object(i.a)(l,g?g(m):m),theme:o},j))}));return f}({defaultTheme:Object(g.a)(),defaultClassName:"MuiBox-root",generateClassName:m.a.generate});t.a=b},443:function(e,t,n){"use strict";var a=n(13),r=n(5),o=n(4),i=n(3),c=n(2),l=(n(12),n(8)),s=n(25),d=n(372),p=n(94),u=n(9),m=n(14);var g=c.createContext(),b=n(70),f=n(95);function h(e){return Object(b.a)("MuiGrid",e)}var j=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],v=Object(f.a)("MuiGrid",["root","container","item","zeroMinWidth"].concat(Object(a.a)([0,1,2,3,4,5,6,7,8,9,10].map((function(e){return"spacing-xs-".concat(e)}))),Object(a.a)(["column-reverse","column","row-reverse","row"].map((function(e){return"direction-xs-".concat(e)}))),Object(a.a)(["nowrap","wrap-reverse","wrap"].map((function(e){return"wrap-xs-".concat(e)}))),Object(a.a)(j.map((function(e){return"grid-xs-".concat(e)}))),Object(a.a)(j.map((function(e){return"grid-sm-".concat(e)}))),Object(a.a)(j.map((function(e){return"grid-md-".concat(e)}))),Object(a.a)(j.map((function(e){return"grid-lg-".concat(e)}))),Object(a.a)(j.map((function(e){return"grid-xl-".concat(e)}))))),y=n(0),S=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function x(e){var t=parseFloat(e);return"".concat(t).concat(String(e).replace(String(t),"")||"px")}function O(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t||!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return[n["spacing-xs-".concat(String(e))]||"spacing-xs-".concat(String(e))];var a=e.xs,r=e.sm,o=e.md,i=e.lg,c=e.xl;return[Number(a)>0&&(n["spacing-xs-".concat(String(a))]||"spacing-xs-".concat(String(a))),Number(r)>0&&(n["spacing-sm-".concat(String(r))]||"spacing-sm-".concat(String(r))),Number(o)>0&&(n["spacing-md-".concat(String(o))]||"spacing-md-".concat(String(o))),Number(i)>0&&(n["spacing-lg-".concat(String(i))]||"spacing-lg-".concat(String(i))),Number(c)>0&&(n["spacing-xl-".concat(String(c))]||"spacing-xl-".concat(String(c)))]}var T=Object(u.a)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState,r=n.container,o=n.direction,i=n.item,c=n.lg,l=n.md,s=n.sm,d=n.spacing,p=n.wrap,u=n.xl,m=n.xs,g=n.zeroMinWidth;return[t.root,r&&t.container,i&&t.item,g&&t.zeroMinWidth].concat(Object(a.a)(O(d,r,t)),["row"!==o&&t["direction-xs-".concat(String(o))],"wrap"!==p&&t["wrap-xs-".concat(String(p))],!1!==m&&t["grid-xs-".concat(String(m))],!1!==s&&t["grid-sm-".concat(String(s))],!1!==l&&t["grid-md-".concat(String(l))],!1!==c&&t["grid-lg-".concat(String(c))],!1!==u&&t["grid-xl-".concat(String(u))]])}})((function(e){var t=e.ownerState;return Object(i.a)({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},"nowrap"===t.wrap&&{flexWrap:"nowrap"},"reverse"===t.wrap&&{flexWrap:"wrap-reverse"})}),(function(e){var t=e.theme,n=e.ownerState,a=Object(s.d)({values:n.direction,breakpoints:t.breakpoints.values});return Object(s.b)({theme:t},a,(function(e){var t={flexDirection:e};return 0===e.indexOf("column")&&(t["& > .".concat(v.item)]={maxWidth:"none"}),t}))}),(function(e){var t=e.theme,n=e.ownerState,a=n.container,o=n.rowSpacing,i={};if(a&&0!==o){var c=Object(s.d)({values:o,breakpoints:t.breakpoints.values});i=Object(s.b)({theme:t},c,(function(e){var n=t.spacing(e);return"0px"!==n?Object(r.a)({marginTop:"-".concat(x(n))},"& > .".concat(v.item),{paddingTop:x(n)}):{}}))}return i}),(function(e){var t=e.theme,n=e.ownerState,a=n.container,o=n.columnSpacing,i={};if(a&&0!==o){var c=Object(s.d)({values:o,breakpoints:t.breakpoints.values});i=Object(s.b)({theme:t},c,(function(e){var n=t.spacing(e);return"0px"!==n?Object(r.a)({width:"calc(100% + ".concat(x(n),")"),marginLeft:"-".concat(x(n))},"& > .".concat(v.item),{paddingLeft:x(n)}):{}}))}return i}),(function(e){var t=e.theme,n=e.ownerState;return t.breakpoints.keys.reduce((function(e,a){return function(e,t,n,a){var r=a[n];if(r){var o={};if(!0===r)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===r)o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var c=Object(s.d)({values:a.columns,breakpoints:t.breakpoints.values}),l="object"===typeof c?c[n]:c,d="".concat(Math.round(r/l*1e8)/1e6,"%"),p={};if(a.container&&a.item&&0!==a.columnSpacing){var u=t.spacing(a.columnSpacing);if("0px"!==u){var m="calc(".concat(d," + ").concat(x(u),")");p={flexBasis:m,maxWidth:m}}}o=Object(i.a)({flexBasis:d,flexGrow:0,maxWidth:d},p)}0===t.breakpoints.values[n]?Object.assign(e,o):e[t.breakpoints.up(n)]=o}}(e,t,a,n),e}),{})})),w=c.forwardRef((function(e,t){var n,r=Object(m.a)({props:e,name:"MuiGrid"}),s=Object(d.a)(r),u=s.className,b=s.columns,f=s.columnSpacing,j=s.component,v=void 0===j?"div":j,x=s.container,w=void 0!==x&&x,k=s.direction,N=void 0===k?"row":k,E=s.item,A=void 0!==E&&E,L=s.lg,_=void 0!==L&&L,C=s.md,M=void 0!==C&&C,q=s.rowSpacing,P=s.sm,R=void 0!==P&&P,W=s.spacing,I=void 0===W?0:W,Q=s.wrap,z=void 0===Q?"wrap":Q,K=s.xl,B=void 0!==K&&K,D=s.xs,U=void 0!==D&&D,F=s.zeroMinWidth,G=void 0!==F&&F,V=Object(o.a)(s,S),J=q||I,H=f||I,X=c.useContext(g),Y=b||X||12,Z=Object(i.a)({},s,{columns:Y,container:w,direction:N,item:A,lg:_,md:M,sm:R,rowSpacing:J,columnSpacing:H,wrap:z,xl:B,xs:U,zeroMinWidth:G}),$=function(e){var t=e.classes,n=e.container,r=e.direction,o=e.item,i=e.lg,c=e.md,l=e.sm,s=e.spacing,d=e.wrap,u=e.xl,m=e.xs,g={root:["root",n&&"container",o&&"item",e.zeroMinWidth&&"zeroMinWidth"].concat(Object(a.a)(O(s,n)),["row"!==r&&"direction-xs-".concat(String(r)),"wrap"!==d&&"wrap-xs-".concat(String(d)),!1!==m&&"grid-xs-".concat(String(m)),!1!==l&&"grid-sm-".concat(String(l)),!1!==c&&"grid-md-".concat(String(c)),!1!==i&&"grid-lg-".concat(String(i)),!1!==u&&"grid-xl-".concat(String(u))])};return Object(p.a)(g,h,t)}(Z);return n=Object(y.jsx)(T,Object(i.a)({ownerState:Z,className:Object(l.a)($.root,u),as:v,ref:t},V)),12!==Y?Object(y.jsx)(g.Provider,{value:Y,children:n}):n}));t.a=w},650:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return b})),n.d(t,"f",(function(){return f})),n.d(t,"e",(function(){return j})),n.d(t,"a",(function(){return v}));var a,r=n(5),o="notify_postgres",i="notify_mysql",c="notify_kafka",l="notify_amqp",s="notify_mqtt",d="notify_redis",p="notify_nats",u="notify_elasticsearch",m="notify_webhook",g="notify_nsq",b=function(e){return e.map((function(e){return{service_name:"".concat(e.service,":").concat(e.account_id),status:e.status}}))},f=[{actionTrigger:o,targetTitle:"Postgres SQL",logo:"/postgres-logo.svg"},{actionTrigger:c,targetTitle:"Kafka",logo:"/kafka-logo.svg"},{actionTrigger:l,targetTitle:"AMQP",logo:"/amqp-logo.svg"},{actionTrigger:s,targetTitle:"MQTT",logo:"/mqtt-logo.svg"},{actionTrigger:d,targetTitle:"Redis",logo:"/redis-logo.svg"},{actionTrigger:p,targetTitle:"NATS",logo:"/nats-logo.svg"},{actionTrigger:i,targetTitle:"Mysql",logo:"/mysql-logo.svg"},{actionTrigger:u,targetTitle:"Elastic Search",logo:"/elasticsearch-logo.svg"},{actionTrigger:m,targetTitle:"Webhook",logo:"/webhooks-logo.svg"},{actionTrigger:g,targetTitle:"NSQ",logo:"/nsq-logo.svg"}],h=[{name:"queue-dir",label:"Queue Directory",required:!0,tooltip:"staging dir for undelivered messages e.g. '/home/events'",type:"string",placeholder:"Enter Queue Directory"},{name:"queue-limit",label:"Queue Limit",required:!1,tooltip:"maximum limit for undelivered messages, defaults to '10000'",type:"number",placeholder:"Enter Queue Limit"},{name:"comment",label:"Comment",required:!1,type:"comment",placeholder:"Enter Comment"}],j=function(e){return e.filter((function(e){return""!==e.value}))},v=(a={},Object(r.a)(a,c,[{name:"brokers",label:"Brokers",required:!0,tooltip:"Comma separated list of Kafka broker addresses",type:"string",placeholder:"Enter Brokers"},{name:"topic",label:"Topic",tooltip:"Kafka topic used for bucket notifications",type:"string",placeholder:"Enter Topic"},{name:"sasl_username",label:"SASL Username",tooltip:"Username for SASL/PLAIN or SASL/SCRAM authentication",type:"string",placeholder:"Enter SASL Username"},{name:"sasl_password",label:"SASL Password",tooltip:"Password for SASL/PLAIN or SASL/SCRAM authentication",type:"string",placeholder:"Enter SASL Password"},{name:"sasl_mechanism",label:"SASL Mechanism",tooltip:"SASL authentication mechanism, default 'PLAIN'",type:"string"},{name:"tls_client_auth",label:"TLS Client Auth",tooltip:"Client Auth determines the Kafka server's policy for TLS client auth",type:"string",placeholder:"Enter TLS Client Auth"},{name:"sasl",label:"SASL",tooltip:"Set to 'on' to enable SASL authentication",type:"on|off"},{name:"tls",label:"TLS",tooltip:"Set to 'on' to enable TLS",type:"on|off"},{name:"tls_skip_verify",label:"TLS skip verify",tooltip:'Trust server TLS without verification, defaults to "on" (verify)',type:"on|off"},{name:"client_tls_cert",label:"client TLS cert",tooltip:"Path to client certificate for mTLS auth",type:"path",placeholder:"Enter TLS Client Cert"},{name:"client_tls_key",label:"client TLS key",tooltip:"Path to client key for mTLS auth",type:"path",placeholder:"Enter TLS Client Key"},{name:"version",label:"Version",tooltip:"Specify the version of the Kafka cluster e.g '2.2.0'",type:"string",placeholder:"Enter Kafka Version"}].concat(h)),Object(r.a)(a,l,[{name:"url",required:!0,label:"URL",tooltip:"AMQP server endpoint e.g. `amqp://myuser:mypassword@localhost:5672`",type:"url"},{name:"exchange",label:"Exchange",tooltip:"Name of the AMQP exchange",type:"string",placeholder:"Enter Exchange"},{name:"exchange_type",label:"Exchange Type",tooltip:"AMQP exchange type",type:"string",placeholder:"Enter Exchange Type"},{name:"routing_key",label:"Routing Key",tooltip:"Routing key for publishing",type:"string",placeholder:"Enter Routing Key"},{name:"mandatory",label:"Mandatory",tooltip:"Quietly ignore undelivered messages when set to 'off', default is 'on'",type:"on|off"},{name:"durable",label:"Durable",tooltip:"Persist queue across broker restarts when set to 'on', default is 'off'",type:"on|off"},{name:"no_wait",label:"No Wait",tooltip:"Non-blocking message delivery when set to 'on', default is 'off'",type:"on|off"},{name:"internal",label:"Internal",tooltip:"Set to 'on' for exchange to be not used directly by publishers, but only when bound to other exchanges",type:"on|off"},{name:"auto_deleted",label:"Auto Deleted",tooltip:"Auto delete queue when set to 'on', when there are no consumers",type:"on|off"},{name:"delivery_mode",label:"Delivery Mode",tooltip:"Set to '1' for non-persistent or '2' for persistent queue",type:"number",placeholder:"Enter Delivery Mode"}].concat(h)),Object(r.a)(a,d,[{name:"address",required:!0,label:"Address",tooltip:"Redis server's address. For example: `localhost:6379`",type:"address",placeholder:"Enter Address"},{name:"key",required:!0,label:"Key",tooltip:"Redis key to store/update events, key is auto-created",type:"string",placeholder:"Enter Key"},{name:"password",label:"Password",tooltip:"Redis server password",type:"string",placeholder:"Enter Password"}].concat(h)),Object(r.a)(a,s,[{name:"broker",required:!0,label:"Broker",tooltip:"MQTT server endpoint e.g. `tcp://localhost:1883`",type:"uri",placeholder:"Enter Brokers"},{name:"topic",required:!0,label:"Topic",tooltip:"name of the MQTT topic to publish",type:"string",placeholder:"Enter Topic"},{name:"username",label:"Username",tooltip:"MQTT username",type:"string",placeholder:"Enter Username"},{name:"password",label:"Password",tooltip:"MQTT password",type:"string",placeholder:"Enter Password"},{name:"qos",label:"QOS",tooltip:"Set the quality of service priority, defaults to '0'",type:"number",placeholder:"Enter QOS"},{name:"keep_alive_interval",label:"Keep Alive Interval",tooltip:"Keep-alive interval for MQTT connections in s,m,h,d",type:"duration",placeholder:"Enter Keep Alive Internal"},{name:"reconnect_interval",label:"Reconnect Interval",tooltip:"Reconnect interval for MQTT connections in s,m,h,d",type:"duration",placeholder:"Enter Reconnect Interval"}].concat(h)),Object(r.a)(a,p,[{name:"address",required:!0,label:"Address",tooltip:"NATS server address e.g. '0.0.0.0:4222'",type:"address",placeholder:"Enter Address"},{name:"subject",required:!0,label:"Subject",tooltip:"NATS subscription subject",type:"string",placeholder:"Enter NATS Subject"},{name:"username",label:"Username",tooltip:"NATS username",type:"string",placeholder:"Enter NATS Username"},{name:"password",label:"Password",tooltip:"NATS password",type:"string",placeholder:"Enter NATS password"},{name:"token",label:"Token",tooltip:"NATS token",type:"string",placeholder:"Enter NATS token"},{name:"tls",label:"TLS",tooltip:"Set to 'on' to enable TLS",type:"on|off"},{name:"tls_skip_verify",label:"TLS Skip Verify",tooltip:'Trust server TLS without verification, defaults to "on" (verify)',type:"on|off"},{name:"ping_interval",label:"Ping Interval",tooltip:"Client ping commands interval in s,m,h,d. Disabled by default",type:"duration",placeholder:"Enter Ping Interval"},{name:"streaming",label:"Streaming",tooltip:"Set to 'on', to use streaming NATS server",type:"on|off"},{name:"streaming_async",label:"Streaming async",tooltip:"Set to 'on', to enable asynchronous publish",type:"on|off"},{name:"streaming_max_pub_acks_in_flight",label:"Streaming max publish ACKS in flight",tooltip:"Number of messages to publish without waiting for ACKs",type:"number",placeholder:"Enter Streaming in flight value"},{name:"streaming_cluster_id",label:"Streaming Cluster ID",tooltip:"Unique ID for NATS streaming cluster",type:"string",placeholder:"Enter Streaming Cluster ID"},{name:"cert_authority",label:"Cert Authority",tooltip:"Path to certificate chain of the target NATS server",type:"string",placeholder:"Enter Cert Authority"},{name:"client_cert",label:"Client Cert",tooltip:"Client cert for NATS mTLS auth",type:"string",placeholder:"Enter Client Cert"},{name:"client_key",label:"Client Key",tooltip:"Client cert key for NATS mTLS auth",type:"string",placeholder:"Enter Client Key"}].concat(h)),Object(r.a)(a,u,[{name:"url",required:!0,label:"URL",tooltip:"Elasticsearch server's address, with optional authentication info",type:"url",placeholder:"Enter URL"},{name:"index",required:!0,label:"Index",tooltip:"Elasticsearch index to store/update events, index is auto-created",type:"string",placeholder:"Enter Index"},{name:"format",required:!0,label:"Format",tooltip:"'namespace' reflects current bucket/object list and 'access' reflects a journal of object operations, defaults to 'namespace'",type:"enum",placeholder:"Enter Format"}].concat(h)),Object(r.a)(a,m,[{name:"endpoint",required:!0,label:"Endpoint",tooltip:"webhook server endpoint e.g. http://localhost:8080/minio/events",type:"url",placeholder:"Enter Endpoint"},{name:"auth_token",label:"Auth Token",tooltip:"opaque string or JWT authorization token",type:"string",placeholder:"Enter auth_token"}].concat(h)),Object(r.a)(a,g,[{name:"nsqd_address",required:!0,label:"NSQD Address",tooltip:"NSQ server address e.g. '127.0.0.1:4150'",type:"address",placeholder:"Enter nsqd_address"},{name:"topic",required:!0,label:"Topic",tooltip:"NSQ topic",type:"string",placeholder:"Enter Topic"},{name:"tls",label:"TLS",tooltip:"set to 'on' to enable TLS",type:"on|off"},{name:"tls_skip_verify",label:"TLS Skip Verify",tooltip:'trust server TLS without verification, defaults to "on" (verify)',type:"on|off"}].concat(h)),a)},944:function(e,t,n){"use strict";n.r(t);var a=n(16),r=n(1),o=n(2),i=n.n(o),c=n(41),l=n(39),s=n.n(l),d=n(443),p=n(307),u=n(319),m=n(385),g=n(52),b=n(32),f=n(650),h=n(122),j=n(402),v=n(53),y=n(432),S=n(426),x=n(404),O=n(0),T=Object(y.a)(i.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(5),n.e(66)]).then(n.bind(null,875))}))),w=Object(y.a)(i.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(10),n.e(116)]).then(n.bind(null,792))}))),k=Object(y.a)(i.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(5),n.e(109),n.e(81)]).then(n.bind(null,876))}))),N={serverNeedsRestart:b.c,setErrorSnackMessage:b.e},E=Object(c.b)(null,N);t.default=E(Object(u.a)((function(e){return Object(p.a)(Object(r.a)(Object(r.a)(Object(r.a)({},h.p),h.y),{},{lambdaNotif:{background:"linear-gradient(90deg, rgba(249,249,250,1) 0%, rgba(250,250,251,1) 68%, rgba(254,254,254,1) 100%)",border:"#E5E5E5 1px solid",borderRadius:5,height:80,display:"flex",alignItems:"center",justifyContent:"start",marginBottom:16,cursor:"pointer",padding:0,overflow:"hidden"},lambdaNotifIcon:{backgroundColor:"#FEFEFE",display:"flex",alignItems:"center",justifyContent:"center",width:80,height:80,"& img":{maxWidth:46,maxHeight:46}},lambdaNotifTitle:{color:"#07193E",fontSize:16,fontFamily:"Lato,sans-serif",paddingLeft:18},formBox:{border:"1px solid #EAEAEA",padding:15}}))}))((function(e){var t=e.match,n=e.saveAndRefresh,r=e.serverNeedsRestart,i=e.classes,c=e.setErrorSnackMessage,l=Object(o.useState)([]),p=Object(a.a)(l,2),u=p[0],b=p[1],h=Object(o.useState)(!1),y=Object(a.a)(h,2),N=y[0],E=y[1],A=t.params.service;Object(o.useEffect)((function(){if(N){var e={key_values:Object(f.e)(u)};g.a.invoke("PUT","/api/v1/configs/".concat(A),e).then((function(){E(!1),r(!0),v.a.push("/notification-endpoints")})).catch((function(e){E(!1),c(e)}))}}),[N,r,A,u,n,c]);var L,_=Object(o.useCallback)((function(e){b(e)}),[b]);switch(A){case f.d:L=Object(O.jsx)(k,{onChange:_});break;case f.c:L=Object(O.jsx)(T,{onChange:_});break;default:var C=s()(f.a,A,[]);L=Object(O.jsx)(w,{fields:C,onChange:_})}var M=f.f.find((function(e){return e.actionTrigger===A}));return Object(O.jsxs)(o.Fragment,{children:[Object(O.jsx)(j.a,{label:"Notification Endpoints"}),Object(O.jsx)(S.a,{to:"/notification-endpoints/add",label:" Back To Supported Services"}),Object(O.jsx)(x.a,{children:Object(O.jsx)("form",{noValidate:!0,onSubmit:function(e){e.preventDefault(),E(!0)},children:""!==A&&Object(O.jsxs)(o.Fragment,{children:[Object(O.jsx)(d.a,{item:!0,xs:12,children:M&&Object(O.jsxs)("div",{className:i.lambdaNotif,children:[Object(O.jsx)("div",{className:i.lambdaNotifIcon,children:Object(O.jsx)("img",{src:M.logo,className:i.logoButton,alt:M.targetTitle})}),Object(O.jsx)("div",{className:i.lambdaNotifTitle,children:Object(O.jsxs)("b",{children:[M?M.targetTitle:"","Notification Endpoint"]})})]},"icon-".concat(M.targetTitle))}),Object(O.jsxs)("div",{className:i.formBox,children:[Object(O.jsx)(d.a,{item:!0,xs:12,className:i.configForm,children:L}),Object(O.jsx)(d.a,{item:!0,xs:12,className:i.settingsButtonContainer,children:Object(O.jsx)(m.a,{type:"submit",variant:"contained",color:"primary",disabled:N,children:"Save Notification Target"})})]})]})})})]})})))}}]);
//# sourceMappingURL=63.cb07c443.chunk.js.map