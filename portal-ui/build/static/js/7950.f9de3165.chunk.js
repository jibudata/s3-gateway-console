"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[7950],{29316:function(e,t,n){n(50390);var a=n(6369),i=n(86509),r=n(4285),o=n(14549),l=n(56805),c=n(62559);t.Z=(0,r.Z)((function(e){return(0,i.Z)({link:{display:"inline-block",alignItems:"center",justifyContent:"center",textDecoration:"none",maxWidth:"40px","&:active":{color:e.palette.primary.light}},icon:{marginRight:"11px",display:"flex",alignItems:"center",justifyContent:"center",height:"35px",width:"35px",borderRadius:"2px","&:hover":{background:"rgba(234,237,238)"},"& svg.min-icon":{width:"18px",height:"12px"}},label:{display:"flex",alignItems:"center",height:"35px",padding:"0 0px 0 5px",fontSize:"18px",fontWeight:600,color:e.palette.primary.light}})}))((function(e){var t=e.to,n=e.label,i=e.classes,r=e.className,s=e.executeOnClick;return(0,c.jsxs)(l.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,c.jsx)(a.rU,{to:t,className:"".concat(i.link," ").concat(r||""),onClick:function(){s&&s()},children:(0,c.jsx)("div",{className:i.icon,children:(0,c.jsx)(o.xC,{})})}),(0,c.jsx)("div",{className:i.label,children:n})]})}))},57950:function(e,t,n){n.r(t);var a=n(23430),i=n(18489),r=n(50390),o=n(6369),l=n(70971),c=n(34424),s=n(86509),u=n(4285),d=n(25594),m=n(30324),p=n(72462),f=n(44149),x=n(77130),h=n(35721),b=n(62702),g=n(94187),v=n(95467),Z=n(56805),j=n(18221),y=n(49495),C=n(25534),k=n(57647),T=n(29316),E=n(30140),N=n(37882),I=n(53224),w=n(14549),S=n(62559),P=r.lazy((function(){return Promise.resolve().then(n.bind(n,56135))})),B=r.lazy((function(){return Promise.resolve().then(n.bind(n,18342))})),F=(0,N.Z)(r.lazy((function(){return Promise.all([n.e(5444),n.e(875),n.e(7346)]).then(n.bind(n,47346))}))),_=(0,N.Z)(r.lazy((function(){return Promise.all([n.e(3152),n.e(3690),n.e(5399),n.e(8174),n.e(5144)]).then(n.bind(n,5144))}))),O=(0,N.Z)(r.lazy((function(){return Promise.all([n.e(3152),n.e(3690),n.e(5399),n.e(8174),n.e(5125)]).then(n.bind(n,5125))}))),A=(0,N.Z)(r.lazy((function(){return n.e(528).then(n.bind(n,40528))}))),R=(0,N.Z)(r.lazy((function(){return Promise.all([n.e(3152),n.e(3690),n.e(5399),n.e(8174),n.e(7187)]).then(n.bind(n,67187))}))),M=(0,N.Z)(r.lazy((function(){return Promise.all([n.e(14),n.e(3152),n.e(2066),n.e(5444),n.e(3690),n.e(5399),n.e(195),n.e(8174),n.e(6430),n.e(6173)]).then(n.bind(n,96173))}))),L=(0,N.Z)(r.lazy((function(){return Promise.all([n.e(14),n.e(3152),n.e(2066),n.e(5444),n.e(3690),n.e(875),n.e(5399),n.e(606),n.e(9769),n.e(7248),n.e(195),n.e(8174),n.e(6430),n.e(953)]).then(n.bind(n,40953))}))),U=(0,c.$j)((function(e){return{session:e.console.session,selectedTab:e.buckets.bucketDetails.selectedTab,distributedSetup:e.system.distributedSetup,loadingBucket:e.buckets.bucketDetails.loadingBucket,bucketInfo:e.buckets.bucketDetails.bucketInfo}}),{setErrorSnackMessage:f.Ih,setBucketDetailsLoad:x.d5,setBucketInfo:x.f4});t.default=(0,u.Z)((function(e){return(0,s.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)({pageContainer:{height:"100%"},screenTitle:{border:0,paddingTop:0}},p.Bw),{},{breadcrumLink:{textDecoration:"none",color:"black"}},p.qg),{},{capitalize:{textTransform:"capitalize"},deleteBtn:{color:"#f44336",border:"1px solid rgba(244, 67, 54, 0.5)",maxWidth:140}},p.bp),p.Si),(0,p.Bz)(e.spacing(4))))}))(U((function(e){var t=e.classes,n=e.match,i=e.history,c=e.setErrorSnackMessage,s=e.distributedSetup,u=e.setBucketDetailsLoad,p=e.loadingBucket,f=e.setBucketInfo,x=e.bucketInfo,N=(0,r.useState)(!1),U=(0,a.Z)(N,2),z=U[0],D=U[1],W=(0,r.useState)(!1),G=(0,a.Z)(W,2),H=G[0],K=G[1],Y=n.params.bucketName,Q=null===n||void 0===n?void 0:n.params[0];Q=Q||"summary";var $=(0,r.useState)(Q),q=(0,a.Z)($,2),V=q[0],X=q[1];(0,r.useEffect)((function(){X(Q)}),[Q]),(0,r.useEffect)((function(){z||(u(!0),D(!0))}),[z,u,D]),(0,r.useEffect)((function(){p&&m.Z.invoke("GET","/api/v1/buckets/".concat(Y)).then((function(e){u(!1),f(e)})).catch((function(e){u(!1),c(e)}))}),[Y,p,u,f,c]);var J="/buckets/".concat(Y),ee={events:"/admin/events",replication:"/admin/replication",lifecycle:"/admin/lifecycle",access:"/admin/access",prefix:"/admin/prefix"},te=function(e){var t=ee[e];return t=t?"".concat(J).concat(t):"".concat(J).concat("/admin/summary")};return(0,S.jsxs)(r.Fragment,{children:[H&&(0,S.jsx)(F,{deleteOpen:H,selectedBucket:Y,closeDeleteModalAndRefresh:function(e){!function(e){K(!1),e&&i.push("/buckets")}(e)}}),(0,S.jsx)(h.Z,{label:(0,S.jsx)(r.Fragment,{children:(0,S.jsx)(o.rU,{to:"/buckets",className:t.breadcrumLink,children:"Buckets"})}),actions:(0,S.jsx)(r.Fragment,{children:(0,S.jsx)(g.Z,{title:"Browse Bucket",children:(0,S.jsx)(v.Z,{color:"primary","aria-label":"Browse Bucket",component:"span",onClick:function(){i.push("/buckets/".concat(Y,"/browse"))},size:"large",children:(0,S.jsx)(B,{})})})})}),(0,S.jsx)(T.Z,{to:"/buckets",label:"Back to Buckets"}),(0,S.jsxs)(C.Z,{className:t.pageContainer,children:[(0,S.jsx)(d.ZP,{item:!0,xs:12,children:(0,S.jsx)(b.Z,{classes:{screenTitle:t.screenTitle},icon:(0,S.jsx)(r.Fragment,{children:(0,S.jsx)(P,{width:40})}),title:Y,subTitle:(0,S.jsxs)(E.s,{scopes:[y.Ft.S3_GET_BUCKET_POLICY],resource:Y,children:[(0,S.jsx)("span",{style:{fontSize:15},children:"Access: "}),(0,S.jsx)("span",{className:t.capitalize,style:{fontWeight:600,fontSize:15},children:null===x||void 0===x?void 0:x.access.toLowerCase()})]}),actions:(0,S.jsxs)(r.Fragment,{children:[(0,S.jsx)(E.s,{scopes:[y.Ft.S3_DELETE_BUCKET,y.Ft.S3_FORCE_DELETE_BUCKET],resource:Y,errorProps:{disabled:!0},children:(0,S.jsx)(I.Z,{tooltip:"Delete Bucket",onClick:function(){K(!0)},text:"Delete Bucket",icon:(0,S.jsx)(w.XH,{}),color:"secondary",variant:"outlined"})}),(0,S.jsx)(I.Z,{onClick:function(){u(!0)},text:"Refresh",icon:(0,S.jsx)(j.default,{}),color:"primary"})]})})}),(0,S.jsx)(Z.Z,{sx:{border:"1px solid #eaeaea"},children:(0,S.jsxs)(k.Z,{selectedTab:V,isRouteTabs:!0,routes:(0,S.jsx)("div",{className:t.contentSpacer,children:(0,S.jsx)(l.F0,{history:i,children:(0,S.jsxs)(l.rs,{children:[(0,S.jsx)(l.AW,{exact:!0,path:"/buckets/:bucketName/admin/summary",component:A}),(0,S.jsx)(l.AW,{exact:!0,path:"/buckets/:bucketName/admin/events",component:R}),s&&(0,S.jsx)(l.AW,{exact:!0,path:"/buckets/:bucketName/admin/replication",component:M}),s&&(0,S.jsx)(l.AW,{exact:!0,path:"/buckets/:bucketName/admin/lifecycle",component:L}),(0,S.jsx)(l.AW,{exact:!0,path:"/buckets/:bucketName/admin/access",component:O}),(0,S.jsx)(l.AW,{exact:!0,path:"/buckets/:bucketName/admin/prefix",component:_}),(0,S.jsx)(l.AW,{path:"/buckets/:bucketName",component:function(){return(0,S.jsx)(l.l_,{to:"/buckets/".concat(Y,"/admin/summary")})}})]})})}),children:[{tabConfig:{label:"Summary",value:"summary",component:o.rU,to:te("summary")}},{tabConfig:{label:"Events",value:"events",component:o.rU,disabled:!(0,E.F)(Y,[y.Ft.S3_GET_BUCKET_NOTIFICATIONS,y.Ft.S3_PUT_BUCKET_NOTIFICATIONS]),to:te("events")}},{tabConfig:{label:"Replication",value:"replication",component:o.rU,disabled:!s||!(0,E.F)(Y,[y.Ft.S3_GET_REPLICATION_CONFIGURATION,y.Ft.S3_PUT_REPLICATION_CONFIGURATION]),to:te("replication")}},{tabConfig:{label:"Lifecycle",value:"lifecycle",component:o.rU,disabled:!s||!(0,E.F)(Y,[y.Ft.S3_GET_LIFECYCLE_CONFIGURATION,y.Ft.S3_PUT_LIFECYCLE_CONFIGURATION]),to:te("lifecycle")}},{tabConfig:{label:"Access Audit",value:"access",component:o.rU,disabled:!(0,E.F)(Y,[y.Ft.ADMIN_GET_POLICY,y.Ft.ADMIN_LIST_USER_POLICIES,y.Ft.ADMIN_LIST_USERS]),to:te("access")}},{tabConfig:{label:"Access Rules",value:"prefix",component:o.rU,disabled:!(0,E.F)(Y,[y.Ft.S3_GET_BUCKET_POLICY]),to:te("prefix")}}]})})]})]})})))},53224:function(e,t,n){var a=n(18489),i=n(83738),r=(n(50390),n(70758)),o=n(62449),l=n(62559),c=["onClick","text","disabled","tooltip","icon"],s=(0,o.Z)((function(e){return{root:{padding:"7px",color:function(t){return function(t){var n=t.variant,a=t.color,i=e.palette.primary.main;return"primary"===a&&"contained"===n?i=e.palette.primary.contrastText:"primary"===a&&"outlined"===n?i=e.palette.primary.main:"secondary"===a&&(i=e.palette.secondary.main),i}(t)},borderColor:function(t){return"secondary"===t.color?e.palette.secondary.main:e.palette.primary.main},"& svg.min-icon":{width:12,marginLeft:function(e){return e.text?"5px":"0px"},"@media (max-width: 900px)":{width:16,marginLeft:"0px !important"}}}}}));t.Z=function(e){var t=s(e),n=e.onClick,o=e.text,u=void 0===o?"":o,d=e.disabled,m=void 0!==d&&d,p=e.tooltip,f=e.icon,x=void 0===f?null:f,h=(0,i.Z)(e,c);return(0,l.jsxs)(r.Z,(0,a.Z)((0,a.Z)({classes:t,tooltip:p||u,variant:"outlined",onClick:n,disabled:m,color:"secondary",size:"medium",sx:{border:"1px solid #f44336","& span":{fontSize:14,"@media (max-width: 900px)":{display:"none"}}}},h),{},{children:[(0,l.jsx)("span",{children:u})," ",x]}))}},70758:function(e,t,n){var a=n(18489),i=n(36222),r=n(83738),o=(n(50390),n(86509)),l=n(4285),c=n(95467),s=n(94187),u=n(44977),d=n(62559),m=["classes","children","variant","tooltip"];t.Z=(0,l.Z)((function(e){return(0,o.Z)({root:{padding:8,marginLeft:8,borderWidth:1,borderColor:"#696969",color:"#696969",borderStyle:"solid",borderRadius:3,"& .min-icon":{width:20},"& .MuiTouchRipple-root span":{backgroundColor:e.palette.primary.main,borderRadius:3,opacity:.3},"&:disabled":{color:"#EBEBEB",borderColor:"#EBEBEB"}},contained:{borderColor:e.palette.primary.main,background:e.palette.primary.main,color:"white","& .MuiTouchRipple-root span":{backgroundColor:e.palette.primary.dark,borderRadius:3,opacity:.3},"&:hover":{backgroundColor:e.palette.primary.light,color:"#FFF"}}})}))((function(e){var t=e.classes,n=e.children,o=e.variant,l=void 0===o?"outlined":o,p=e.tooltip,f=(0,r.Z)(e,m),x=(0,d.jsx)(c.Z,(0,a.Z)((0,a.Z)({},f),{},{className:(0,u.Z)(t.root,(0,i.Z)({},t.contained,"contained"===l)),children:n}));return p&&""!==p?(0,d.jsx)(s.Z,{title:p,children:(0,d.jsx)("span",{children:x})}):x}))},37882:function(e,t,n){var a=n(18489),i=n(50390),r=n(62559);t.Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;function n(n){return(0,r.jsx)(i.Suspense,{fallback:t,children:(0,r.jsx)(e,(0,a.Z)({},n))})}return n}},35721:function(e,t,n){var a=n(50390),i=n(34424),r=n(25594),o=n(86509),l=n(4285),c=n(35477),s=n(95467),u=n(26805),d=n(44078),m=n(5265),p=n(14549),f=n(62559),x={toggleList:m.kQ},h=(0,i.$j)((function(e){return{sidebarOpen:e.system.sidebarOpen,operatorMode:e.system.operatorMode,managerObjects:e.objectBrowser.objectManager.objectsToManage,features:e.console.session.features}}),x);t.Z=h((0,l.Z)((function(e){return(0,o.Z)({headerContainer:{width:"100%",minHeight:79,display:"flex",backgroundColor:"#fff",left:0,boxShadow:"rgba(0,0,0,.08) 0 3px 10px"},label:{display:"flex",justifyContent:"flex-start",alignItems:"center"},labelStyle:{color:"#000",fontSize:18,fontWeight:700,marginLeft:21,marginTop:8},rightMenu:{textAlign:"right"},logo:{marginLeft:34,fill:e.palette.primary.main,"& .min-icon":{width:120}},middleComponent:{display:"flex",justifyContent:"center",alignItems:"center"}})}))((function(e){var t=e.classes,n=e.label,i=e.actions,o=e.sidebarOpen,l=e.operatorMode,m=e.managerObjects,x=e.toggleList,h=e.middleComponent;return e.features.includes("hide-menu")?(0,f.jsx)(a.Fragment,{}):(0,f.jsxs)(r.ZP,{container:!0,className:"".concat(t.headerContainer," page-header"),direction:"row",alignItems:"center",children:[(0,f.jsxs)(r.ZP,{item:!0,xs:12,sm:12,md:h?3:6,className:t.label,sx:{paddingTop:["15px","15px","0","0"]},children:[!o&&(0,f.jsx)("div",{className:t.logo,children:l?(0,f.jsx)(u.Z,{}):(0,f.jsx)(d.Z,{})}),(0,f.jsx)(c.Z,{variant:"h4",className:t.labelStyle,children:n})]}),h&&(0,f.jsx)(r.ZP,{item:!0,xs:12,sm:12,md:6,className:t.middleComponent,sx:{marginTop:["10px","10px","0","0"]},children:h}),(0,f.jsxs)(r.ZP,{item:!0,xs:12,sm:12,md:h?3:6,className:t.rightMenu,children:[i&&i,m&&m.length>0&&(0,f.jsx)(s.Z,{color:"primary","aria-label":"Refresh List",component:"span",onClick:function(){x()},id:"object-manager-toggle",size:"large",children:(0,f.jsx)(p.gx,{})})]})]})})))},62702:function(e,t,n){n(50390);var a=n(25594),i=n(86509),r=n(4285),o=n(62559);t.Z=(0,r.Z)((function(e){return(0,i.Z)({headerBarIcon:{marginRight:".7rem",color:e.palette.primary.main,"& .min-icon":{width:44,height:44}},headerBarSubheader:{color:"grey","@media (max-width: 900px)":{maxWidth:200}},screenTitle:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"1rem",borderBottom:"1px solid #EAEAEA","@media (max-width: 600px)":{flexFlow:"column"}},titleColumn:{height:"auto",justifyContent:"center",display:"flex",flexFlow:"column",alignItems:"flex-start","& h1":{fontSize:19}},leftItems:{display:"flex",alignItems:"center","@media (max-width: 600px)":{flexFlow:"column"}},rightItems:{display:"flex",alignItems:"center"}})}))((function(e){var t=e.classes,n=e.icon,i=e.title,r=e.subTitle,l=e.actions,c=e.className;return(0,o.jsx)(a.ZP,{container:!0,children:(0,o.jsxs)(a.ZP,{item:!0,xs:12,className:"".concat(t.screenTitle," ").concat(c||""),children:[(0,o.jsxs)("div",{className:t.leftItems,children:[n?(0,o.jsx)("div",{className:t.headerBarIcon,children:n}):null,(0,o.jsxs)("div",{className:t.titleColumn,children:[(0,o.jsx)("h1",{style:{margin:0},children:i}),(0,o.jsx)("span",{className:t.headerBarSubheader,children:r})]})]}),(0,o.jsx)("div",{className:t.rightItems,children:l})]})})}))},57647:function(e,t,n){var a=n(18489),i=n(23430),r=n(50390),o=n(56805),l=n(49044),c=n(97227),s=n(74564),u=n(669),d=n(4285),m=n(88669),p=n(86509),f=n(13512),x=n(62559),h={minHeight:60};t.Z=(0,d.Z)((function(e){return(0,p.Z)({tabsContainer:{display:"flex",height:"100%",width:"100%"},tabsHeaderContainer:{width:"300px",background:"#F8F8F8",borderRight:"1px solid #EAEAEA","& .MuiTabs-root":{"& .MuiTabs-indicator":{display:"none"},"& .MuiTab-root":{display:"flex",flexFlow:"row",alignItems:"center",justifyContent:"flex-start",borderBottom:"1px solid #EAEAEA","& .MuiSvgIcon-root":{marginRight:8,marginBottom:0},"&.Mui-selected":{background:"#E5E5E5",fontWeight:600}},"&. MuiTabs-scroller":{display:"none"}}},tabContentContainer:{width:"100%","& .MuiTabPanel-root":{height:"100%"}},tabPanel:{height:"100%"},"@media (max-width: 900px)":{tabsContainer:{flexFlow:"column",flexDirection:"column"},tabsHeaderContainer:{width:"100%",borderBottom:" 1px solid #EAEAEA","& .MuiTabs-root .MuiTabs-scroller .MuiButtonBase-root":{borderBottom:" 0px"}}}})}))((function(e){var t=e.children,n=e.classes,d=e.selectedTab,p=void 0===d?"0":d,b=e.routes,g=e.isRouteTabs,v=r.useState(p),Z=(0,i.Z)(v,2),j=Z[0],y=Z[1],C=(0,m.Z)(),k=(0,f.Z)(C.breakpoints.down("md")),T=[],E=[];return t?(t.forEach((function(e){T.push(e.tabConfig),E.push(e.content)})),(0,x.jsx)(c.ZP,{value:"".concat(j),children:(0,x.jsxs)(o.Z,{className:n.tabsContainer,children:[(0,x.jsx)(o.Z,{className:n.tabsHeaderContainer,children:(0,x.jsx)(s.Z,{onChange:function(e,t){y(t)},orientation:k?"horizontal":"vertical",variant:k?"scrollable":"standard",scrollButtons:"auto",className:n.tabList,children:T.map((function(e,t){return e?(0,x.jsx)(l.Z,(0,a.Z)((0,a.Z)({className:n.tabHeader,value:"".concat(t),style:h},e),{},{disableRipple:!0,disableTouchRipple:!0,focusRipple:!0}),"v-tab-".concat(t)):null}))})}),(0,x.jsxs)(o.Z,{className:n.tabContentContainer,children:[g?null:E.map((function(e,t){return(0,x.jsx)(u.Z,{classes:(0,a.Z)({},n.tabPanel),value:"".concat(t),children:e||null},"v-tab-p-".concat(t))})),g?(0,x.jsx)("div",{className:n.tabPanel,children:b}):null]})]})})):null}))},97227:function(e,t,n){n.d(t,{ZP:function(){return l},_i:function(){return c},uU:function(){return s},pQ:function(){return u}});var a=n(23430),i=n(50390),r=n(62559),o=i.createContext(null);function l(e){var t=e.children,n=e.value,l=function(){var e=i.useState(null),t=(0,a.Z)(e,2),n=t[0],r=t[1];return i.useEffect((function(){r("mui-p-".concat(Math.round(1e5*Math.random())))}),[]),n}(),c=i.useMemo((function(){return{idPrefix:l,value:n}}),[l,n]);return(0,r.jsx)(o.Provider,{value:c,children:t})}function c(){return i.useContext(o)}function s(e,t){return null===e.idPrefix?null:"".concat(e.idPrefix,"-P-").concat(t)}function u(e,t){return null===e.idPrefix?null:"".concat(e.idPrefix,"-T-").concat(t)}},74564:function(e,t,n){var a=n(18207),i=n(46633),r=n(50390),o=n(98247),l=n(97227),c=n(62559),s=["children"],u=r.forwardRef((function(e,t){var n=e.children,u=(0,i.Z)(e,s),d=(0,l._i)();if(null===d)throw new TypeError("No TabContext provided");var m=r.Children.map(n,(function(e){return r.isValidElement(e)?r.cloneElement(e,{"aria-controls":(0,l.uU)(d,e.props.value),id:(0,l.pQ)(d,e.props.value)}):null}));return(0,c.jsx)(o.Z,(0,a.Z)({},u,{ref:t,value:d.value,children:m}))}));t.Z=u},669:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(18207),i=n(46633),r=n(50390),o=n(44977),l=n(8208),c=n(15573),s=n(50076),u=n(10594);function d(e){return(0,u.Z)("MuiTabPanel",e)}(0,n(43349).Z)("MuiTabPanel",["root"]);var m=n(97227),p=n(62559),f=["children","className","value"],x=(0,l.ZP)("div",{name:"MuiTabPanel",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){return{padding:e.theme.spacing(3)}})),h=r.forwardRef((function(e,t){var n=(0,c.Z)({props:e,name:"MuiTabPanel"}),r=n.children,l=n.className,u=n.value,h=(0,i.Z)(n,f),b=(0,a.Z)({},n),g=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},d,t)}(b),v=(0,m._i)();if(null===v)throw new TypeError("No TabContext provided");var Z=(0,m.uU)(v,u),j=(0,m.pQ)(v,u);return(0,p.jsx)(x,(0,a.Z)({"aria-labelledby":j,className:(0,o.Z)(g.root,l),hidden:u!==v.value,id:Z,ref:t,role:"tabpanel",ownerState:b},h,{children:u===v.value&&r}))}))},18207:function(e,t,n){function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{Z:function(){return a}})},46633:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}n.d(t,{Z:function(){return a}})},83738:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=7950.f9de3165.chunk.js.map