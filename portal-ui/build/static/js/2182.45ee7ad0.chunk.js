"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[2182],{53224:function(e,n,t){var a=t(18489),i=t(83738),o=(t(50390),t(70758)),l=t(62449),r=t(62559),s=["onClick","text","disabled","tooltip","icon"],c=(0,l.Z)((function(e){return{root:{padding:"7px",color:function(n){return function(n){var t=n.variant,a=n.color,i=e.palette.primary.main;return"primary"===a&&"contained"===t?i=e.palette.primary.contrastText:"primary"===a&&"outlined"===t?i=e.palette.primary.main:"secondary"===a&&(i=e.palette.secondary.main),i}(n)},borderColor:function(n){return"secondary"===n.color?e.palette.secondary.main:e.palette.primary.main},"& svg.min-icon":{width:12,marginLeft:function(e){return e.text?"5px":"0px"},"@media (max-width: 900px)":{width:16,marginLeft:"0px !important"}}}}}));n.Z=function(e){var n=c(e),t=e.onClick,l=e.text,d=void 0===l?"":l,u=e.disabled,m=void 0!==u&&u,h=e.tooltip,x=e.icon,p=void 0===x?null:x,v=(0,i.Z)(e,s);return(0,r.jsxs)(o.Z,(0,a.Z)((0,a.Z)({classes:n,tooltip:h||d,variant:"outlined",onClick:t,disabled:m,color:"secondary",size:"medium",sx:{border:"1px solid #f44336","& span":{fontSize:14,"@media (max-width: 900px)":{display:"none"}}}},v),{},{children:[(0,r.jsx)("span",{children:d})," ",p]}))}},11835:function(e,n,t){var a=t(18489),i=t(83738),o=(t(50390),t(86509)),l=t(4285),r=t(62559),s=["classes","children"];n.Z=(0,l.Z)((function(e){return(0,o.Z)({root:{padding:0,margin:0,border:0,backgroundColor:"transparent",textDecoration:"underline",cursor:"pointer",fontSize:"inherit",color:e.palette.info.main,fontFamily:"Lato, sans-serif"}})}))((function(e){var n=e.classes,t=e.children,o=(0,i.Z)(e,s);return(0,r.jsx)("button",(0,a.Z)((0,a.Z)({},o),{},{className:n.root,children:t}))}))},92440:function(e,n,t){var a=t(36222),i=t(18489),o=t(50390),l=t(86509),r=t(4285),s=t(49056),c=t(36554),d=t(94187),u=t(35477),m=t(25594),h=t(72462),x=t(97538),p=t(44977),v=t(62559),g=(0,r.Z)((function(e){return{root:{width:50,height:24,padding:0,margin:0},switchBase:{padding:1,"&$checked":{transform:"translateX(24px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#4CCB92",boxShadow:"inset 0px 1px 4px rgba(0,0,0,0.1)",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#4CCB92",border:"6px solid #fff"}},thumb:{width:22,height:22,backgroundColor:"#FAFAFA",border:"2px solid #FFFFFF",marginLeft:1},track:{borderRadius:12,backgroundColor:"#E2E2E2",boxShadow:"inset 0px 1px 4px rgba(0,0,0,0.1)",opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{},switchContainer:{display:"flex",alignItems:"center",justifyContent:"flex-end"}}}))(s.Z);n.Z=(0,r.Z)((function(e){return(0,l.Z)((0,i.Z)((0,i.Z)({divContainer:{marginBottom:20},indicatorLabelOn:{fontWeight:"bold",color:"#081C42 !important"},indicatorLabel:{fontSize:12,color:"#E2E2E2",margin:"0 8px 0 10px"},fieldDescription:{marginTop:4,color:"#999999"},tooltip:{fontSize:16}},h.OR),h.YI))}))((function(e){var n=e.label,t=void 0===n?"":n,l=e.onChange,r=e.value,s=e.id,h=e.name,Z=e.checked,f=void 0!==Z&&Z,b=e.disabled,j=void 0!==b&&b,y=e.switchOnly,w=void 0!==y&&y,k=e.tooltip,C=void 0===k?"":k,S=e.description,P=void 0===S?"":S,E=e.classes,N=e.indicatorLabels,R=e.extraInputProps,I=void 0===R?{}:R,F=(0,v.jsxs)(o.Fragment,{children:[!w&&(0,v.jsx)("span",{className:(0,p.Z)(E.indicatorLabel,(0,a.Z)({},E.indicatorLabelOn,!f)),children:N&&N.length>1?N[1]:"OFF"}),(0,v.jsx)(g,{checked:f,onChange:l,color:"primary",name:h,inputProps:(0,i.Z)({"aria-label":"primary checkbox"},I),disabled:j,disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0,value:r,id:s}),!w&&(0,v.jsx)("span",{className:(0,p.Z)(E.indicatorLabel,(0,a.Z)({},E.indicatorLabelOn,f)),children:N?N[0]:"ON"})]});return w?F:(0,v.jsx)("div",{className:E.divContainer,children:(0,v.jsxs)(m.ZP,{container:!0,alignItems:"center",children:[(0,v.jsx)(m.ZP,{item:!0,xs:!0,children:(0,v.jsxs)(m.ZP,{container:!0,children:[(0,v.jsx)(m.ZP,{item:!0,xs:12,sm:""!==P?4:10,md:""!==P?3:9,children:""!==t&&(0,v.jsxs)(c.Z,{htmlFor:s,className:E.inputLabel,children:[(0,v.jsx)("span",{children:t}),""!==C&&(0,v.jsx)("div",{className:E.tooltipContainer,children:(0,v.jsx)(d.Z,{title:C,placement:"top-start",children:(0,v.jsx)("div",{className:E.tooltip,children:(0,v.jsx)(x.Z,{})})})})]})}),(0,v.jsx)(m.ZP,{item:!0,xs:12,sm:!0,textAlign:"left",children:""!==P&&(0,v.jsx)(u.Z,{component:"p",className:E.fieldDescription,children:P})})]})}),(0,v.jsx)(m.ZP,{item:!0,xs:12,sm:2,textAlign:"right",className:E.switchContainer,children:F})]})})}))},66964:function(e,n,t){var a=t(18489),i=t(50390),o=t(12066),l=t(25594),r=t(36554),s=t(94187),c=t(95467),d=t(86509),u=t(62449),m=t(4285),h=t(72462),x=t(97538),p=t(44977),v=t(62559),g=(0,u.Z)((function(e){return(0,d.Z)((0,a.Z)({},h.gM))}));function Z(e){var n=g();return(0,v.jsx)(o.Z,(0,a.Z)({InputProps:{classes:n}},e))}n.Z=(0,m.Z)((function(e){return(0,d.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},h.YI),h.Hr),{},{textBoxContainer:{flexGrow:1,position:"relative"},overlayAction:{position:"absolute",right:5,top:6,"& svg":{maxWidth:15,maxHeight:15},"&.withLabel":{top:5}},inputLabel:(0,a.Z)((0,a.Z)({},h.YI.inputLabel),{},{fontWeight:"normal"})}))}))((function(e){var n=e.label,t=e.onChange,o=e.value,d=e.id,u=e.name,m=e.type,h=void 0===m?"text":m,g=e.autoComplete,f=void 0===g?"off":g,b=e.disabled,j=void 0!==b&&b,y=e.multiline,w=void 0!==y&&y,k=e.tooltip,C=void 0===k?"":k,S=e.index,P=void 0===S?0:S,E=e.error,N=void 0===E?"":E,R=e.required,I=void 0!==R&&R,F=e.placeholder,L=void 0===F?"":F,M=e.min,T=e.max,D=e.overlayId,B=e.overlayIcon,O=void 0===B?null:B,_=e.overlayObject,A=void 0===_?null:_,W=e.extraInputProps,z=void 0===W?{}:W,$=e.overlayAction,U=e.noLabelMinWidth,V=void 0!==U&&U,Y=e.pattern,q=void 0===Y?"":Y,H=e.autoFocus,K=void 0!==H&&H,Q=e.classes,G=e.className,J=void 0===G?"":G,X=e.onKeyPress,ee=(0,a.Z)({"data-index":P},z);return"number"===h&&M&&(ee.min=M),"number"===h&&T&&(ee.max=T),""!==q&&(ee.pattern=q),(0,v.jsx)(i.Fragment,{children:(0,v.jsxs)(l.ZP,{container:!0,className:(0,p.Z)(""!==J?J:"",""!==N?Q.errorInField:Q.inputBoxContainer),children:[""!==n&&(0,v.jsxs)(r.Z,{htmlFor:d,className:V?Q.noMinWidthLabel:Q.inputLabel,children:[(0,v.jsxs)("span",{children:[n,I?"*":""]}),""!==C&&(0,v.jsx)("div",{className:Q.tooltipContainer,children:(0,v.jsx)(s.Z,{title:C,placement:"top-start",children:(0,v.jsx)("div",{className:Q.tooltip,children:(0,v.jsx)(x.Z,{})})})})]}),(0,v.jsxs)("div",{className:Q.textBoxContainer,children:[(0,v.jsx)(Z,{id:d,name:u,fullWidth:!0,value:o,autoFocus:K,disabled:j,onChange:t,type:h,multiline:w,autoComplete:f,inputProps:ee,error:""!==N,helperText:N,placeholder:L,className:Q.inputRebase,onKeyPress:X}),O&&(0,v.jsx)("div",{className:"".concat(Q.overlayAction," ").concat(""!==n?"withLabel":""),children:(0,v.jsx)(c.Z,{onClick:$?function(){$()}:function(){return null},id:D,size:"small",disableFocusRipple:!1,disableRipple:!1,disableTouchRipple:!1,children:O})}),A&&(0,v.jsx)("div",{className:"".concat(Q.overlayAction," ").concat(""!==n?"withLabel":""),children:A})]})]})})}))},51002:function(e,n,t){var a=t(23430),i=t(18489),o=t(50390),l=t(34424),r=t(95467),s=t(97771),c=t(84402),d=t(78426),u=t(93085),m=t(86509),h=t(4285),x=t(72462),p=t(44149),v=t(21278),g=t(45980),Z=t(62559),f=(0,l.$j)((function(e){return{modalSnackMessage:e.system.modalSnackBar}}),{setModalSnackMessage:p.MK});n.Z=(0,h.Z)((function(e){return(0,m.Z)((0,i.Z)((0,i.Z)({},x.Qw),{},{root:{"& .MuiPaper-root":{padding:"0 2rem 2rem 1rem"}},content:{padding:25,paddingBottom:0},customDialogSize:{width:"100%",maxWidth:765}},x.sN))}))(f((function(e){var n=e.onClose,t=e.modalOpen,l=e.title,m=e.children,h=e.classes,x=e.wideLimit,p=void 0===x||x,f=e.modalSnackMessage,b=e.noContentPadding,j=e.setModalSnackMessage,y=e.titleIcon,w=void 0===y?null:y,k=(0,o.useState)(!1),C=(0,a.Z)(k,2),S=C[0],P=C[1];(0,o.useEffect)((function(){j("")}),[j]),(0,o.useEffect)((function(){if(f){if(""===f.message)return void P(!1);"error"!==f.type&&P(!0)}}),[f]);var E=p?{classes:{paper:h.customDialogSize}}:{maxWidth:"lg",fullWidth:!0},N="";return f&&(N=f.detailedErrorMsg,(""===f.detailedErrorMsg||f.detailedErrorMsg.length<5)&&(N=f.message)),(0,Z.jsxs)(c.Z,(0,i.Z)((0,i.Z)({open:t,classes:h},E),{},{scroll:"paper",onClose:function(e,t){"backdropClick"!==t&&n()},className:h.root,children:[(0,Z.jsxs)(d.Z,{className:h.title,children:[(0,Z.jsxs)("div",{className:h.titleText,children:[w," ",l]}),(0,Z.jsx)("div",{className:h.closeContainer,children:(0,Z.jsx)(r.Z,{"aria-label":"close",className:h.closeButton,onClick:n,disableRipple:!0,size:"small",children:(0,Z.jsx)(v.Z,{})})})]}),(0,Z.jsx)(g.Z,{isModal:!0}),(0,Z.jsx)(s.Z,{open:S,className:h.snackBarModal,onClose:function(){P(!1),j("")},message:N,ContentProps:{className:"".concat(h.snackBar," ").concat(f&&"error"===f.type?h.errorSnackBar:"")},autoHideDuration:f&&"error"===f.type?1e4:5e3}),(0,Z.jsx)(u.Z,{className:b?"":h.content,children:m})]}))})))},29308:function(e,n,t){var a=t(18489),i=(t(50390),t(19787)),o=t(62559);n.Z=function(e){var n=e.label,t=void 0===n?null:n,l=e.value,r=void 0===l?"-":l,s=e.orientation,c=void 0===s?"column":s,d=e.stkProps,u=void 0===d?{}:d,m=e.lblProps,h=void 0===m?{}:m,x=e.valProps,p=void 0===x?{}:x;return(0,o.jsxs)(i.Z,(0,a.Z)((0,a.Z)({direction:{xs:"column",sm:c}},u),{},{children:[(0,o.jsx)("label",(0,a.Z)((0,a.Z)({style:{marginRight:5,fontWeight:600}},h),{},{children:t})),(0,o.jsx)("label",(0,a.Z)((0,a.Z)({style:{marginRight:5,fontWeight:500}},p),{},{children:r}))]}))}},32120:function(e,n,t){t.d(n,{dv:function(){return o},OU:function(){return l},Yk:function(){return r}});var a=t(38342),i=t.n(a),o=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.map((function(e){var t=e;return""!==n&&e===n&&(t="".concat(e," (Default)")),{label:t,value:e}}))},l=function(e){var n=i()(e,"elements",[]),t={};return n.forEach((function(e){var n=e.name.split(".storageclass.storage.k8s.io/requests.storage")[0],a=i()(e,"hard",0),o=i()(e,"used",0);t[n]=a-o})),t},r=function(e){return""!==e.currentState&&(!(!e.status&&"green"!==e.health_status&&"yellow"!==e.health_status)&&(!e.status||"green"===e.status.health_status||"yellow"===e.status.health_status))}},48330:function(e,n,t){t.r(n),t.d(n,{default:function(){return H}});var a=t(23430),i=t(18489),o=t(50390),l=t(34424),r=t(38342),s=t.n(r),c=t(86509),d=t(4285),u=t(72462),m=t(19787),h=t(25594),x=t(56805),p=t(46981),v=t(66946),g=t(44149),Z=t(51002),f=t(66964),b=t(92440),j=t(30324),y=t(62559),w=(0,l.$j)(null,{setModalErrorSnackMessage:g.zb}),k=(0,d.Z)((function(e){return(0,c.Z)((0,i.Z)((0,i.Z)({buttonContainer:{textAlign:"right"},infoText:{fontSize:14}},u.DF),u.ID))}))(w((function(e){var n=e.open,t=e.closeModalAndRefresh,l=e.namespace,r=e.idTenant,s=e.setModalErrorSnackMessage,c=e.classes,d=(0,o.useState)(!1),u=(0,a.Z)(d,2),m=u[0],x=u[1],p=(0,o.useState)(""),g=(0,a.Z)(p,2),w=g[0],k=g[1],C=(0,o.useState)(!1),S=(0,a.Z)(C,2),P=S[0],E=S[1],N=(0,o.useState)(""),R=(0,a.Z)(N,2),I=R[0],F=R[1],L=(0,o.useState)(""),M=(0,a.Z)(L,2),T=M[0],D=M[1],B=(0,o.useState)(""),O=(0,a.Z)(B,2),_=O[0],A=O[1],W=(0,o.useState)(!0),z=(0,a.Z)(W,2),$=z[0],U=z[1],V=(0,o.useCallback)((function(e){var n=new RegExp("^$|^((.*?)/(.*?):(.+))$");if("minioImage"===e)U(n.test(w))}),[w]);(0,o.useEffect)((function(){V("minioImage")}),[w,V]);return(0,y.jsx)(Z.Z,{title:"Update MinIO Version",modalOpen:n,onClose:function(){t(!1)},children:(0,y.jsxs)(h.ZP,{container:!0,children:[(0,y.jsxs)(h.ZP,{item:!0,xs:12,className:c.modalFormScrollable,children:[(0,y.jsx)("div",{className:c.infoText,children:"Please enter the MinIO image from dockerhub to use. If blank, then latest build will be used."}),(0,y.jsx)("br",{}),(0,y.jsx)("br",{}),(0,y.jsx)(h.ZP,{item:!0,xs:12,className:c.formFieldRow,children:(0,y.jsx)(f.Z,{value:w,label:"MinIO's Image",id:"minioImage",name:"minioImage",placeholder:"E.g. minio/minio:RELEASE.2022-02-26T02-54-46Z",onChange:function(e){k(e.target.value)}})}),(0,y.jsx)(h.ZP,{item:!0,xs:12,className:c.formFieldRow,children:(0,y.jsx)(b.Z,{value:"imageRegistry",id:"setImageRegistry",name:"setImageRegistry",checked:P,onChange:function(e){E(!P)},label:"Set Custom Image Registry",indicatorLabels:["Yes","No"]})}),P&&(0,y.jsxs)(o.Fragment,{children:[(0,y.jsx)(h.ZP,{item:!0,xs:12,className:c.formFieldRow,children:(0,y.jsx)(f.Z,{value:I,label:"Endpoint",id:"imageRegistry",name:"imageRegistry",placeholder:"E.g. https://index.docker.io/v1/",onChange:function(e){F(e.target.value)}})}),(0,y.jsx)(h.ZP,{item:!0,xs:12,className:c.formFieldRow,children:(0,y.jsx)(f.Z,{value:T,label:"Username",id:"imageRegistryUsername",name:"imageRegistryUsername",placeholder:"Enter image registry username",onChange:function(e){D(e.target.value)}})}),(0,y.jsx)(h.ZP,{item:!0,xs:12,className:c.formFieldRow,children:(0,y.jsx)(f.Z,{value:_,label:"Password",id:"imageRegistryPassword",name:"imageRegistryPassword",placeholder:"Enter image registry password",onChange:function(e){A(e.target.value)}})})]})]}),(0,y.jsxs)(h.ZP,{item:!0,xs:12,className:c.modalButtonBar,children:[(0,y.jsx)(v.Z,{type:"button",color:"primary",variant:"outlined",onClick:function(){k(""),E(!1),F(""),D(""),A("")},children:"Clear"}),(0,y.jsx)(v.Z,{type:"submit",variant:"contained",color:"primary",disabled:!$||P&&(""===I.trim()||""===T.trim()||""===_.trim())||m,onClick:function(){x(!0);var e={image:w,enable_prometheus:!0};if(P){var n={image_registry:{registry:I,username:T,password:_}};e=(0,i.Z)((0,i.Z)({},e),n)}j.Z.invoke("PUT","/api/v1/namespaces/".concat(l,"/tenants/").concat(r),e).then((function(){x(!1),t(!0)})).catch((function(e){s(e),x(!1)}))},children:"Save"})]})]})})}))),C=t(24442),S=t(32120),P=t(11835),E=t(7689),N=t(81378),R=t(82981),I=t(86362),F=t(29308),L=t(28948),M=t(41227),T=(0,d.Z)((function(e){return{root:{height:10,borderRadius:5},colorPrimary:{backgroundColor:"#F4F4F4"},bar:{borderRadius:5,backgroundColor:"#081C42"},padChart:{padding:"5px"}}}))(N.Z),D=(0,d.Z)((function(e){return(0,c.Z)({allValue:{fontSize:16,fontWeight:700,marginBottom:8},currentUsage:{fontSize:12,marginTop:8},centerItem:{textAlign:"center"}})}))((function(e){var n=e.classes,t=e.maxValue,a=e.currValue,i=e.healthStatus,l=e.loading,r=e.error,s={value:"n/a",unit:""},c={value:"n/a",unit:""};if(t){var d=(0,L.ae)("".concat(t),!0).split(" ");s.value=d[0],s.unit=d[1]}if(a){var u=(0,L.ae)("".concat(a),!0).split(" ");c.value=u[0],c.unit=u[1]}var x=0;a&&t&&(x=100*a/t);return(0,y.jsxs)(o.Fragment,{children:[l&&(0,y.jsx)("div",{className:n.padChart,children:(0,y.jsx)(h.ZP,{item:!0,xs:12,className:n.centerItem,children:(0,y.jsx)(M.Z,{style:{width:40,height:40}})})}),l?null:""!==r?(0,y.jsx)(R.Z,{errorMessage:r,withBreak:!1}):(0,y.jsxs)(h.ZP,{item:!0,xs:12,children:[(0,y.jsx)(T,{variant:"determinate",value:x}),(0,y.jsxs)(m.Z,{direction:{xs:"column",sm:"row"},spacing:{xs:1,sm:2,md:4},alignItems:"stretch",margin:"15px 0 15px 0",children:[(0,y.jsx)(F.Z,{label:"Storage Capacity:",orientation:"row",value:"".concat(s.value," ").concat(s.unit)}),(0,y.jsx)(F.Z,{label:"Used:",orientation:"row",value:"".concat(c.value," ").concat(c.unit)}),i&&(0,y.jsx)(F.Z,{orientation:"row",label:"Health:",value:(0,y.jsx)("span",{className:i,children:(0,y.jsx)(I.J$,{})})})]})]})]})})),B=t(83738),O=["children"],_=function(e){var n=e.children,t=void 0===n?null:n,a=(0,B.Z)(e,O);return(0,y.jsx)(m.Z,(0,i.Z)((0,i.Z)({direction:{xs:"column",sm:"row"},justifyContent:"space-between",margin:"5px 0 5px 0",spacing:{xs:1,sm:2,md:4}},a),{},{children:t}))},A=t(53224),W=(0,E.Z)(p.Z)((function(e){e.theme;return{border:0}})),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"red",n=arguments.length>1?arguments[1]:void 0;return"red"===e?n.redState:"yellow"===e?n.yellowState:"green"===e?n.greenState:n.greyState},$=function(e){var n,t,a,i,o,l=e.tenant,r=e.classes;return(0,y.jsx)(D,{currValue:null===l||void 0===l||null===(n=l.status)||void 0===n||null===(t=n.usage)||void 0===t?void 0:t.raw_usage,maxValue:null===l||void 0===l||null===(a=l.status)||void 0===a||null===(i=a.usage)||void 0===i?void 0:i.raw,label:"Storage",error:"",loading:!1,healthStatus:z(null===l||void 0===l||null===(o=l.status)||void 0===o?void 0:o.health_status,r)})},U=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return(0,y.jsx)(b.Z,{indicatorLabels:["Enabled","Disabled"],checked:e,value:e,id:"".concat(n,"-status"),name:"".concat(n,"-status"),onChange:function(){},switchOnly:!0})},V={display:"flex",justifyContent:"space-between",marginTop:"10px","@media (max-width: 600px)":{flexFlow:"column"}},Y={stkProps:{sx:{flex:1,marginRight:10,display:"flex",alignItems:"center",justifyContent:"space-between","@media (max-width: 900px)":{marginRight:"25px"}}},lblProps:{style:{minWidth:100}}},q=(0,l.$j)((function(e){return{loadingTenant:e.tenants.tenantDetails.loadingTenant,selectedTenant:e.tenants.tenantDetails.currentTenant,tenant:e.tenants.tenantDetails.tenantInfo,logEnabled:s()(e.tenants.tenantDetails.tenantInfo,"logEnabled",!1),monitoringEnabled:s()(e.tenants.tenantDetails.tenantInfo,"monitoringEnabled",!1),encryptionEnabled:s()(e.tenants.tenantDetails.tenantInfo,"encryptionEnabled",!1),minioTLS:s()(e.tenants.tenantDetails.tenantInfo,"minioTLS",!1),consoleTLS:s()(e.tenants.tenantDetails.tenantInfo,"consoleTLS",!1),consoleEnabled:s()(e.tenants.tenantDetails.tenantInfo,"consoleEnabled",!1),adEnabled:s()(e.tenants.tenantDetails.tenantInfo,"idpAdEnabled",!1),oidcEnabled:s()(e.tenants.tenantDetails.tenantInfo,"idpOidcEnabled",!1)}}),null),H=(0,d.Z)((function(e){return(0,c.Z)((0,i.Z)((0,i.Z)({},u.oZ),{},{redState:{color:e.palette.error.main,"& .min-icon":{width:16,height:16,marginRight:4}},yellowState:{color:e.palette.warning.main,"& .min-icon":{width:16,height:16,marginRight:4}},greenState:{color:e.palette.success.main,"& .min-icon":{width:16,height:16,marginRight:4}},greyState:{color:"grey","& .min-icon":{width:16,height:16,marginRight:4}},centerAlign:{textAlign:"center"},detailSection:{"& div":{"& b,i":{minWidth:80,display:"block",float:"left"},"& i":{fontStyle:"normal",wordWrap:"break-word",overflowWrap:"break-word"},"& div":{clear:"both"},clear:"both",marginBottom:2}},linkedSection:{color:e.palette.info.main}},(0,u.Bz)(e.spacing(4))))}))(q((function(e){var n,t,l,r,s,c,d,u,p,v,g=e.classes,Z=e.match,f=e.tenant,b=e.logEnabled,j=e.monitoringEnabled,w=e.encryptionEnabled,E=e.minioTLS,N=(e.consoleTLS,e.consoleEnabled,e.adEnabled),R=e.oidcEnabled,L=(e.loadingTenant,(0,o.useState)(0)),M=(0,a.Z)(L,2),T=M[0],D=M[1],B=(0,o.useState)(0),O=(0,a.Z)(B,2),z=O[0],q=O[1],H=(0,o.useState)(0),K=(0,a.Z)(H,2),Q=K[0],G=K[1],J=(0,o.useState)(!1),X=(0,a.Z)(J,2),ee=X[0],ne=X[1],te=Z.params.tenantName,ae=Z.params.tenantNamespace;return(0,o.useEffect)((function(){f&&(D(f.pools.length),G(f.total_volumes||0),q(f.total_instances||0))}),[f]),(0,y.jsxs)(o.Fragment,{children:[ee&&(0,y.jsx)(k,{open:ee,closeModalAndRefresh:function(){ne(!1)},idTenant:te,namespace:ae}),(0,y.jsxs)(m.Z,{direction:{xs:"column-reverse",sm:"row"},justifyContent:"space-between",children:[(0,y.jsx)(W,{children:(0,y.jsx)("h3",{children:"Details"})}),(0,y.jsx)(W,{children:(0,y.jsx)(A.Z,{tooltip:"Manage Tenant",text:"Manage Tenant",onClick:function(){C.Z.push("/namespaces/".concat(ae,"/tenants/").concat(te,"/hop"))},disabled:!f||!(0,S.Yk)(f),icon:(0,y.jsx)(I.ew,{}),color:"primary",variant:"contained"})})]}),(0,y.jsx)($,{tenant:f,classes:g}),(0,y.jsxs)(h.ZP,{container:!0,children:[(0,y.jsxs)(h.ZP,{item:!0,xs:12,sm:12,md:8,children:[(0,y.jsx)(h.ZP,{item:!0,xs:12,children:(0,y.jsx)(F.Z,{label:"State:",value:null===f||void 0===f?void 0:f.currentState})}),(0,y.jsx)(h.ZP,{item:!0,xs:12,children:(0,y.jsx)(F.Z,{label:"MinIO:",value:(0,y.jsx)(P.Z,{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"normal",wordBreak:"break-all"},onClick:function(){ne(!0)},children:f?f.image:""})})}),(0,y.jsx)(h.ZP,{item:!0,xs:12,children:(0,y.jsx)(F.Z,{label:"Endpoint:",value:(0,y.jsx)("a",{href:null===f||void 0===f||null===(n=f.endpoints)||void 0===n?void 0:n.minio,target:"_blank",rel:"noopener noreferrer",className:g.linkedSection,children:(null===f||void 0===f||null===(t=f.endpoints)||void 0===t?void 0:t.minio)||"-"})})}),(0,y.jsx)(h.ZP,{item:!0,xs:12,children:(0,y.jsx)(F.Z,{label:"Console:",value:(0,y.jsx)("a",{href:null===f||void 0===f||null===(l=f.endpoints)||void 0===l?void 0:l.console,target:"_blank",rel:"noopener noreferrer",className:g.linkedSection,children:(null===f||void 0===f||null===(r=f.endpoints)||void 0===r?void 0:r.console)||"-"})})})]}),(0,y.jsxs)(h.ZP,{item:!0,xs:12,sm:12,md:4,children:[(0,y.jsx)(h.ZP,{item:!0,xs:12,children:(0,y.jsx)(F.Z,{label:"Instances:",value:z})}),(0,y.jsx)(h.ZP,{item:!0,xs:12,children:(0,y.jsx)(F.Z,{label:"Clusters:",value:T,stkProps:{style:{marginRight:47}}})}),(0,y.jsx)(h.ZP,{item:!0,xs:12,children:(0,y.jsx)(F.Z,{label:"Total Drives:",value:Q,stkProps:{style:{marginRight:43}}})}),(0,y.jsx)(h.ZP,{item:!0,xs:12,children:(0,y.jsx)(F.Z,{label:"Write Quorum:",value:null!==f&&void 0!==f&&null!==(s=f.status)&&void 0!==s&&s.write_quorum?null===f||void 0===f||null===(c=f.status)||void 0===c?void 0:c.write_quorum:0})}),(0,y.jsx)(h.ZP,{item:!0,xs:12,children:(0,y.jsx)(F.Z,{label:"Drives Online:",value:null!==f&&void 0!==f&&null!==(d=f.status)&&void 0!==d&&d.drives_online?null===f||void 0===f||null===(u=f.status)||void 0===u?void 0:u.drives_online:0,stkProps:{style:{marginRight:8}}})}),(0,y.jsx)(h.ZP,{item:!0,xs:12,children:(0,y.jsx)(F.Z,{label:"Drives Offline:",value:null!==f&&void 0!==f&&null!==(p=f.status)&&void 0!==p&&p.drives_offline?null===f||void 0===f||null===(v=f.status)||void 0===v?void 0:v.drives_offline:0,stkProps:{style:{marginRight:7}}})})]})]}),(0,y.jsxs)(m.Z,{children:[(0,y.jsx)(_,{sx:{borderBottom:"1px solid #eaeaea",margin:0},children:(0,y.jsx)("h3",{style:{marginBottom:10},children:"Features"})}),(0,y.jsxs)(x.Z,{sx:(0,i.Z)({},V),children:[(0,y.jsx)(F.Z,(0,i.Z)({orientation:"row",label:"Logs:",value:U(b,"tenant-log")},Y)),(0,y.jsx)(F.Z,(0,i.Z)({orientation:"row",label:"AD/LDAP:",value:U(N,"tenant-sts")},Y)),(0,y.jsx)(F.Z,(0,i.Z)({orientation:"row",label:"Encryption:",value:U(w,"tenant-enc")},Y))]}),(0,y.jsxs)(x.Z,{sx:(0,i.Z)({},V),children:[(0,y.jsx)(F.Z,(0,i.Z)({orientation:"row",label:"MinIO TLS:",value:U(E,"tenant-tls")},Y)),(0,y.jsx)(F.Z,(0,i.Z)({orientation:"row",label:"Monitoring:",value:U(j,"tenant-monitor")},Y)),(0,y.jsx)(F.Z,(0,i.Z)({orientation:"row",label:"OpenID:",value:U(R,"tenant-oidc")},Y))]})]})]})})))},82981:function(e,n,t){var a=t(50390),i=t(35477),o=t(86509),l=t(4285),r=t(62559);n.Z=(0,l.Z)((function(e){var n;return(0,o.Z)({errorBlock:{color:(null===(n=e.palette)||void 0===n?void 0:n.error.main)||"#C83B51"}})}))((function(e){var n=e.classes,t=e.errorMessage,o=e.withBreak,l=void 0===o||o;return(0,r.jsxs)(a.Fragment,{children:[l&&(0,r.jsx)("br",{}),(0,r.jsx)(i.Z,{component:"p",variant:"body1",className:n.errorBlock,children:t})]})}))}}]);
//# sourceMappingURL=2182.45ee7ad0.chunk.js.map