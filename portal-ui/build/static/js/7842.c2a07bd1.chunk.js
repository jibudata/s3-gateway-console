"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[7842],{8235:function(e,n,t){t(50390);var r=t(86509),i=t(4285),o=t(25594),a=t(62559);n.Z=(0,i.Z)((function(e){return(0,r.Z)({root:{border:"1px solid #E2E2E2",borderRadius:2,backgroundColor:"#FBFAFA",paddingLeft:25,paddingTop:31,paddingBottom:21,paddingRight:30},leftItems:{fontSize:16,fontWeight:"bold",marginBottom:15,display:"flex",alignItems:"center","& .min-icon":{marginRight:15,height:28,width:38}},helpText:{fontSize:16,paddingLeft:5}})}))((function(e){var n=e.classes,t=e.iconComponent,r=e.title,i=e.help;return(0,a.jsx)("div",{className:n.root,children:(0,a.jsxs)(o.ZP,{container:!0,children:[(0,a.jsxs)(o.ZP,{item:!0,xs:12,className:n.leftItems,children:[t,r]}),(0,a.jsx)(o.ZP,{item:!0,xs:12,className:n.helpText,children:i})]})})}))},53224:function(e,n,t){var r=t(18489),i=t(83738),o=(t(50390),t(70758)),a=t(62449),s=t(62559),l=["onClick","text","disabled","tooltip","icon"],c=(0,a.Z)((function(e){return{root:{padding:"7px",color:function(n){return function(n){var t=n.variant,r=n.color,i=e.palette.primary.main;return"primary"===r&&"contained"===t?i=e.palette.primary.contrastText:"primary"===r&&"outlined"===t?i=e.palette.primary.main:"secondary"===r&&(i=e.palette.secondary.main),i}(n)},borderColor:function(n){return"secondary"===n.color?e.palette.secondary.main:e.palette.primary.main},"& svg.min-icon":{width:12,marginLeft:function(e){return e.text?"5px":"0px"},"@media (max-width: 900px)":{width:16,marginLeft:"0px !important"}}}}}));n.Z=function(e){var n=c(e),t=e.onClick,a=e.text,d=void 0===a?"":a,u=e.disabled,m=void 0!==u&&u,p=e.tooltip,h=e.icon,f=void 0===h?null:h,x=(0,i.Z)(e,l);return(0,s.jsxs)(o.Z,(0,r.Z)((0,r.Z)({classes:n,tooltip:p||d,variant:"outlined",onClick:t,disabled:m,color:"secondary",size:"medium",sx:{border:"1px solid #f44336","& span":{fontSize:14,"@media (max-width: 900px)":{display:"none"}}}},x),{},{children:[(0,s.jsx)("span",{children:d})," ",f]}))}},11835:function(e,n,t){var r=t(18489),i=t(83738),o=(t(50390),t(86509)),a=t(4285),s=t(62559),l=["classes","children"];n.Z=(0,a.Z)((function(e){return(0,o.Z)({root:{padding:0,margin:0,border:0,backgroundColor:"transparent",textDecoration:"underline",cursor:"pointer",fontSize:"inherit",color:e.palette.info.main,fontFamily:"Lato, sans-serif"}})}))((function(e){var n=e.classes,t=e.children,o=(0,i.Z)(e,l);return(0,s.jsx)("button",(0,r.Z)((0,r.Z)({},o),{},{className:n.root,children:t}))}))},70758:function(e,n,t){var r=t(18489),i=t(36222),o=t(83738),a=(t(50390),t(86509)),s=t(4285),l=t(95467),c=t(94187),d=t(44977),u=t(62559),m=["classes","children","variant","tooltip"];n.Z=(0,s.Z)((function(e){return(0,a.Z)({root:{padding:8,marginLeft:8,borderWidth:1,borderColor:"#696969",color:"#696969",borderStyle:"solid",borderRadius:3,"& .min-icon":{width:20},"& .MuiTouchRipple-root span":{backgroundColor:e.palette.primary.main,borderRadius:3,opacity:.3},"&:disabled":{color:"#EBEBEB",borderColor:"#EBEBEB"}},contained:{borderColor:e.palette.primary.main,background:e.palette.primary.main,color:"white","& .MuiTouchRipple-root span":{backgroundColor:e.palette.primary.dark,borderRadius:3,opacity:.3},"&:hover":{backgroundColor:e.palette.primary.light,color:"#FFF"}}})}))((function(e){var n=e.classes,t=e.children,a=e.variant,s=void 0===a?"outlined":a,p=e.tooltip,h=(0,o.Z)(e,m),f=(0,u.jsx)(l.Z,(0,r.Z)((0,r.Z)({},h),{},{className:(0,d.Z)(n.root,(0,i.Z)({},n.contained,"contained"===s)),children:t}));return p&&""!==p?(0,u.jsx)(c.Z,{title:p,children:(0,u.jsx)("span",{children:f})}):f}))},37882:function(e,n,t){var r=t(18489),i=t(50390),o=t(62559);n.Z=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;function t(t){return(0,o.jsx)(i.Suspense,{fallback:n,children:(0,o.jsx)(e,(0,r.Z)({},t))})}return t}},10660:function(e,n,t){t(50390);var r=t(25594),i=t(56805),o=t(8235),a=t(62559);n.Z=function(e){var n=e.iconComponent,t=e.entity;return(0,a.jsx)(r.ZP,{container:!0,alignItems:"center",children:(0,a.jsx)(r.ZP,{item:!0,xs:12,children:(0,a.jsx)(o.Z,{title:"".concat(t," not available"),iconComponent:n,help:(0,a.jsxs)(i.Z,{sx:{fontSize:"14px",display:"flex",border:"none",flexFlow:{xs:"column",md:"row"},"& a":{color:function(e){return e.colors.link},textDecoration:"underline"}},children:[(0,a.jsx)("div",{children:"This feature is not available for a single-disk setup. "}),(0,a.jsxs)("div",{children:["Please deploy a server in"," ",(0,a.jsx)("a",{href:"https://docs.min.io/minio/baremetal/installation/deploy-minio-distributed.html?ref=con",target:"_blank",rel:"noreferrer",children:"Distributed Mode"})," ","to use this feature."]})]})})})})}},25534:function(e,n,t){var r=t(18489),i=(t(50390),t(25594)),o=t(86509),a=t(4285),s=t(72462),l=t(62559);n.Z=(0,a.Z)((function(e){return(0,o.Z)((0,r.Z)({},s.Bw))}))((function(e){var n=e.classes,t=e.className,r=void 0===t?"":t,o=e.children;return(0,l.jsx)("div",{className:n.contentSpacer,children:(0,l.jsx)(i.ZP,{container:!0,children:(0,l.jsx)(i.ZP,{item:!0,xs:12,className:r,children:o})})})}))},35721:function(e,n,t){t(50390);var r=t(34424),i=t(25594),o=t(86509),a=t(4285),s=t(35477),l=t(95467),c=t(26805),d=t(44078),u=t(5265),m=t(77138),p=t(62559),h={toggleList:u.kQ},f=(0,r.$j)((function(e){return{sidebarOpen:e.system.sidebarOpen,operatorMode:e.system.operatorMode,managerObjects:e.objectBrowser.objectManager.objectsToManage}}),h);n.Z=f((0,a.Z)((function(e){return(0,o.Z)({headerContainer:{width:"100%",minHeight:79,display:"flex",backgroundColor:"#fff",left:0,boxShadow:"rgba(0,0,0,.08) 0 3px 10px"},label:{display:"flex",justifyContent:"flex-start",alignItems:"center"},labelStyle:{color:"#000",fontSize:18,fontWeight:700,marginLeft:34,marginTop:8},rightMenu:{textAlign:"right"},logo:{marginLeft:34,fill:e.palette.primary.main,"& .min-icon":{width:120}},middleComponent:{display:"flex",justifyContent:"center",alignItems:"center"}})}))((function(e){var n=e.classes,t=e.label,r=e.actions,o=e.sidebarOpen,a=e.operatorMode,u=e.managerObjects,h=e.toggleList,f=e.middleComponent;return(0,p.jsxs)(i.ZP,{container:!0,className:"".concat(n.headerContainer," page-header"),direction:"row",alignItems:"center",children:[(0,p.jsxs)(i.ZP,{item:!0,xs:12,sm:12,md:f?3:6,className:n.label,sx:{paddingTop:["15px","15px","0","0"]},children:[!o&&(0,p.jsx)("div",{className:n.logo,children:a?(0,p.jsx)(c.Z,{}):(0,p.jsx)(d.Z,{})}),(0,p.jsx)(s.Z,{variant:"h4",className:n.labelStyle,children:t})]}),f&&(0,p.jsx)(i.ZP,{item:!0,xs:12,sm:12,md:6,className:n.middleComponent,sx:{marginTop:["10px","10px","0","0"]},children:f}),(0,p.jsxs)(i.ZP,{item:!0,xs:12,sm:12,md:f?3:6,className:n.rightMenu,children:[r&&r,u&&u.length>0&&(0,p.jsx)(l.Z,{color:"primary","aria-label":"Refresh List",component:"span",onClick:function(){h()},size:"large",children:(0,p.jsx)(m.gx,{})})]})]})})))},23165:function(e,n,t){var r=t(36222),i=t(18489),o=(t(50390),t(65771)),a=t(13336),s=t(12066),l=t(4285),c=t(86509),d=t(72462),u=t(62559);n.Z=(0,l.Z)((function(e){return(0,c.Z)({searchField:(0,i.Z)({},d.qg.searchField),adornment:{}})}))((function(e){var n=e.placeholder,t=void 0===n?"":n,i=e.classes,l=e.onChange,c=e.adornmentPosition,d=void 0===c?"end":c,m=e.overrideClass,p=e.value,h=(0,r.Z)({disableUnderline:!0},"".concat(d,"Adornment"),(0,u.jsx)(o.Z,{position:d,className:i.adornment,children:(0,u.jsx)(a.Z,{})}));return(0,u.jsx)(s.Z,{placeholder:t,className:m||i.searchField,id:"search-resource",label:"",InputProps:h,onChange:function(e){l(e.target.value)},variant:"standard",value:p})}))},57842:function(e,n,t){t.r(n);var r=t(23430),i=t(18489),o=t(50390),a=t(38342),s=t.n(a),l=t(34424),c=t(86509),d=t(4285),u=t(56805),m=t(81378),p=t(25594),h=t(72462),f=t(77138),x=t(44149),g=t(30324),b=t(17777),Z=t(18221),j=t(35721),v=t(8235),y=t(11835),C=t(25534),S=t(23165),T=t(37882),P=t(10660),F=t(49495),w=t(15607),k=t(51444),E=t(53224),N=t(62559),I=(0,T.Z)(o.lazy((function(){return Promise.all([t.e(5444),t.e(1069)]).then(t.bind(t,81069))}))),O={setErrorSnackMessage:x.Ih},M=(0,l.$j)((function(e){return{distributedSetup:e.system.distributedSetup}}),O);n.default=(0,d.Z)((function(e){return(0,c.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)({},h.OR),h.qg),h.Je),h.fc),(0,h.Bz)(e.spacing(4))),{},{customConfigurationPage:{minHeight:400},actionsTray:(0,i.Z)({},h.OR.actionsTray),searchField:(0,i.Z)((0,i.Z)({},h.qg.searchField),{},{marginRight:"auto",maxWidth:380}),rightActionButtons:{display:"flex","& button":{whiteSpace:"nowrap"}}},h.VX))}))(M((function(e){var n=e.classes,t=e.history,i=e.setErrorSnackMessage,a=e.distributedSetup,l=(0,o.useState)([]),c=(0,r.Z)(l,2),d=c[0],h=c[1],x=(0,o.useState)(""),T=(0,r.Z)(x,2),O=T[0],M=T[1],L=(0,o.useState)(!0),R=(0,r.Z)(L,2),A=R[0],B=R[1],z=(0,o.useState)(!1),_=(0,r.Z)(z,2),D=_[0],X=_[1],K=(0,o.useState)({type:"unsupported"}),H=(0,r.Z)(K,2),W=H[0],q=H[1];(0,o.useEffect)((function(){if(A)if(a){g.Z.invoke("GET","/api/v1/admin/tiers").then((function(e){h(e.items||[]),B(!1)})).catch((function(e){i(e),B(!1)}))}else B(!1)}),[A,i,a]);var $=d.filter((function(e){if(""===O)return!0;var n=s()(e,"".concat(e.type,".name"),""),t=s()(e,"type","");return n.indexOf(O)>=0||t.indexOf(O)>=0})),G=function(){t.push(F.gA.TIERS_ADD)};return(0,N.jsxs)(o.Fragment,{children:[D&&(0,N.jsx)(I,{open:D,tierData:W,closeModalAndRefresh:function(){X(!1)}}),(0,N.jsx)(j.Z,{label:"Tiers"}),(0,N.jsx)(C.Z,{children:a?(0,N.jsxs)(o.Fragment,{children:[(0,N.jsxs)(p.ZP,{item:!0,xs:12,className:n.actionsTray,children:[(0,N.jsx)(S.Z,{placeholder:"Filter",onChange:M,overrideClass:n.searchField,value:O}),(0,N.jsxs)("div",{className:n.rightActionButtons,children:[(0,N.jsx)(E.Z,{icon:(0,N.jsx)(Z.default,{}),color:"primary",text:"Refresh List",onClick:function(){B(!0)}}),(0,N.jsx)(w.Z,{scopes:[F.Ft.ADMIN_SET_TIER],resource:F.C3,errorProps:{disabled:!0},children:(0,N.jsx)(E.Z,{icon:(0,N.jsx)(f.dt,{}),color:"primary",text:"Create Tier",onClick:G,variant:"contained"})})]})]}),A&&(0,N.jsx)(m.Z,{}),!A&&(0,N.jsxs)(o.Fragment,{children:[d.length>0&&(0,N.jsxs)(o.Fragment,{children:[(0,N.jsx)(p.ZP,{item:!0,xs:12,className:n.tableBlock,children:(0,N.jsx)(w.Z,{scopes:[F.Ft.ADMIN_LIST_TIERS],resource:F.C3,errorProps:{disabled:!0},children:(0,N.jsx)(b.Z,{itemActions:[{type:"edit",onClick:function(e){q(e),X(!0)}}],columns:[{label:"Tier Name",elementKey:"type",renderFunction:function(e){var n=s()(e,"".concat(e.type,".name"),"");return null!==n?(0,N.jsx)("b",{children:n}):""},renderFullObject:!0},{label:"Type",elementKey:"type",renderFunction:function(e){var n=(k.Bh.find((function(n){return n.serviceName===e}))||{}).logoXs;return e?(0,N.jsx)(u.Z,{sx:{display:"flex",alignItems:"center","& .min-icon":{width:"18px",height:"22px"}},children:n}):""},width:50},{label:"Endpoint",elementKey:"type",renderFunction:function(e){var n=s()(e,"".concat(e.type,".endpoint"),"");return null!==n?n:""},renderFullObject:!0},{label:"Bucket",elementKey:"type",renderFunction:function(e){var n=s()(e,"".concat(e.type,".bucket"),"");return null!==n?n:""},renderFullObject:!0},{label:"Prefix",elementKey:"type",renderFunction:function(e){var n=s()(e,"".concat(e.type,".prefix"),"");return null!==n?n:""},renderFullObject:!0},{label:"Region",elementKey:"type",renderFunction:function(e){var n=s()(e,"".concat(e.type,".region"),"");return null!==n?n:""},renderFullObject:!0}],isLoading:A,records:$,entityName:"Tiers",idField:"service_name",customPaperHeight:n.customConfigurationPage})})}),(0,N.jsx)(p.ZP,{item:!0,xs:12,sx:{marginTop:"15px"},children:(0,N.jsx)(v.Z,{title:"Learn more about TIERS",iconComponent:(0,N.jsx)(f.y2,{}),help:(0,N.jsxs)(o.Fragment,{children:["Tiers are used by the MinIO Object Lifecycle Management which allows creating rules for time or date based automatic transition or expiry of objects. For object transition, MinIO automatically moves the object to a configured remote storage tier.",(0,N.jsx)("br",{}),(0,N.jsx)("br",{}),"You can learn more at our"," ",(0,N.jsx)("a",{href:"https://docs.min.io/minio/baremetal/lifecycle-management/lifecycle-management-overview.html?ref=con",target:"_blank",rel:"noreferrer",children:"documentation"}),"."]})})})]}),0===d.length&&(0,N.jsx)(p.ZP,{container:!0,justifyContent:"center",alignContent:"center",alignItems:"center",children:(0,N.jsx)(p.ZP,{item:!0,xs:8,children:(0,N.jsx)(v.Z,{title:"Tiers",iconComponent:(0,N.jsx)(f.y2,{}),help:(0,N.jsxs)(o.Fragment,{children:["Tiers are used by the MinIO Object Lifecycle Management which allows creating rules for time or date based automatic transition or expiry of objects. For object transition, MinIO automatically moves the object to a configured remote storage tier.",(0,N.jsx)("br",{}),(0,N.jsx)("br",{}),"To get started,"," ",(0,N.jsx)(y.Z,{onClick:G,children:"Add A Tier"}),"."]})})})})]})]}):(0,N.jsx)(P.Z,{entity:"Tiers",iconComponent:(0,N.jsx)(f.gX,{})})})]})})))},51444:function(e,n,t){t.d(n,{Pp:function(){return o},f0:function(){return a},b2:function(){return s},vB:function(){return l},Bh:function(){return c}});var r=t(77138),i=t(62559),o="minio",a="gcs",s="s3",l="azure",c=[{serviceName:o,targetTitle:"MinIO",logo:(0,i.jsx)(r.$E,{}),logoXs:(0,i.jsx)(r.YE,{})},{serviceName:a,targetTitle:"Google Cloud Storage",logo:(0,i.jsx)(r.UQ,{}),logoXs:(0,i.jsx)(r.Vw,{})},{serviceName:s,targetTitle:"AWS S3",logo:(0,i.jsx)(r.fe,{}),logoXs:(0,i.jsx)(r.Xj,{})},{serviceName:l,targetTitle:"Azure",logo:(0,i.jsx)(r.jz,{}),logoXs:(0,i.jsx)(r.nA,{})}]},65771:function(e,n,t){t.d(n,{Z:function(){return v}});var r=t(36222),i=t(1048),o=t(32793),a=t(50390),s=t(44977),l=t(50076),c=t(91442),d=t(35477),u=t(14478),m=t(23060),p=t(8208),h=t(10594);function f(e){return(0,h.Z)("MuiInputAdornment",e)}var x=(0,t(43349).Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),g=t(15573),b=t(62559),Z=["children","className","component","disablePointerEvents","disableTypography","position","variant"],j=(0,p.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["position".concat((0,c.Z)(t.position))],!0===t.disablePointerEvents&&n.disablePointerEvents,n[t.variant]]}})((function(e){var n=e.theme,t=e.ownerState;return(0,o.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:n.palette.action.active},"filled"===t.variant&&(0,r.Z)({},"&.".concat(x.positionStart,"&:not(.").concat(x.hiddenLabel,")"),{marginTop:16}),"start"===t.position&&{marginRight:8},"end"===t.position&&{marginLeft:8},!0===t.disablePointerEvents&&{pointerEvents:"none"})})),v=a.forwardRef((function(e,n){var t=(0,g.Z)({props:e,name:"MuiInputAdornment"}),r=t.children,p=t.className,h=t.component,x=void 0===h?"div":h,v=t.disablePointerEvents,y=void 0!==v&&v,C=t.disableTypography,S=void 0!==C&&C,T=t.position,P=t.variant,F=(0,i.Z)(t,Z),w=(0,m.Z)()||{},k=P;P&&w.variant,w&&!k&&(k=w.variant);var E=(0,o.Z)({},t,{hiddenLabel:w.hiddenLabel,size:w.size,disablePointerEvents:y,position:T,variant:k}),N=function(e){var n=e.classes,t=e.disablePointerEvents,r=e.hiddenLabel,i=e.position,o=e.size,a=e.variant,s={root:["root",t&&"disablePointerEvents",i&&"position".concat((0,c.Z)(i)),a,r&&"hiddenLabel",o&&"size".concat((0,c.Z)(o))]};return(0,l.Z)(s,f,n)}(E);return(0,b.jsx)(u.Z.Provider,{value:null,children:(0,b.jsx)(j,(0,o.Z)({as:x,ownerState:E,className:(0,s.Z)(N.root,p),ref:n},F,{children:"string"!==typeof r||S?(0,b.jsxs)(a.Fragment,{children:["start"===T?(0,b.jsx)("span",{className:"notranslate",dangerouslySetInnerHTML:{__html:"&#8203;"}}):null,r]}):(0,b.jsx)(d.Z,{color:"text.secondary",children:r})}))})}))},83738:function(e,n,t){function r(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}t.d(n,{Z:function(){return r}})}}]);
//# sourceMappingURL=7842.c2a07bd1.chunk.js.map