"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[1666],{23152:function(e,a,n){n.r(a);var t=n(23430),o=n(18489),r=n(50390),s=n(38342),i=n.n(s),l=n(34424),c=n(25594),d=n(66946),u=n(86509),m=n(4285),p=n(72462),x=n(44149),f=n(66964),h=n(76352),g=n(30324),v=n(85615),Z=n(62559),b={setModalErrorSnackMessage:x.zb},j=(0,l.$j)((function(e){var a=e.system;return{distributedSetup:i()(a,"distributedSetup",!1)}}),b);a.default=(0,m.Z)((function(e){return(0,u.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},p.DF),p.ID),p.bK))}))(j((function(e){var a=e.modalOpen,n=e.currentTags,s=e.onCloseAndUpdate,i=e.bucketName,l=e.setModalErrorSnackMessage,u=e.classes,m=(0,r.useState)(""),p=(0,t.Z)(m,2),x=p[0],b=p[1],j=(0,r.useState)(""),C=(0,t.Z)(j,2),y=C[0],N=C[1],k=(0,r.useState)(!1),w=(0,t.Z)(k,2),S=w[0],M=w[1];return(0,Z.jsx)(h.Z,{modalOpen:a,title:"Add New Tag ",onClose:function(){s(!1)},titleIcon:(0,Z.jsx)(v.OC,{}),children:(0,Z.jsxs)(c.ZP,{container:!0,children:[(0,Z.jsxs)("div",{className:u.spacerBottom,children:[(0,Z.jsx)("strong",{children:"Bucket"}),": ",i]}),(0,Z.jsx)(c.ZP,{item:!0,xs:12,className:u.formFieldRow,children:(0,Z.jsx)(f.Z,{value:x,label:"New Tag Key",id:"newTagKey",name:"newTagKey",placeholder:"Enter New Tag Key",onChange:function(e){b(e.target.value)}})}),(0,Z.jsx)(c.ZP,{item:!0,xs:12,className:u.formFieldRow,children:(0,Z.jsx)(f.Z,{value:y,label:"New Tag Label",id:"newTagLabel",name:"newTagLabel",placeholder:"Enter New Tag Label",onChange:function(e){N(e.target.value)}})}),(0,Z.jsxs)(c.ZP,{item:!0,xs:12,className:u.modalButtonBar,children:[(0,Z.jsx)(d.Z,{type:"button",variant:"outlined",color:"primary",onClick:function(){N(""),b("")},children:"Clear"}),(0,Z.jsx)(d.Z,{type:"submit",variant:"contained",color:"primary",disabled:""===y.trim()||""===x.trim()||S,onClick:function(){M(!0);var e={};e[x]=y;var a=(0,o.Z)((0,o.Z)({},n),e);g.Z.invoke("PUT","/api/v1/buckets/".concat(i,"/tags"),{tags:a}).then((function(e){M(!1),s(!0)})).catch((function(e){l(e),M(!1)}))},children:"Save"})]})]})})})))},66964:function(e,a,n){var t=n(18489),o=n(50390),r=n(12066),s=n(25594),i=n(36554),l=n(94187),c=n(95467),d=n(86509),u=n(62449),m=n(4285),p=n(72462),x=n(97538),f=n(44977),h=n(62559),g=(0,u.Z)((function(e){return(0,d.Z)((0,t.Z)({},p.gM))}));function v(e){var a=g();return(0,h.jsx)(r.Z,(0,t.Z)({InputProps:{classes:a}},e))}a.Z=(0,m.Z)((function(e){return(0,d.Z)((0,t.Z)((0,t.Z)((0,t.Z)({},p.YI),p.Hr),{},{textBoxContainer:{flexGrow:1,position:"relative"},overlayAction:{position:"absolute",right:5,top:6,"& svg":{maxWidth:15,maxHeight:15},"&.withLabel":{top:5}},inputLabel:(0,t.Z)((0,t.Z)({},p.YI.inputLabel),{},{fontWeight:"normal"})}))}))((function(e){var a=e.label,n=e.onChange,r=e.value,d=e.id,u=e.name,m=e.type,p=void 0===m?"text":m,g=e.autoComplete,Z=void 0===g?"off":g,b=e.disabled,j=void 0!==b&&b,C=e.multiline,y=void 0!==C&&C,N=e.tooltip,k=void 0===N?"":N,w=e.index,S=void 0===w?0:w,M=e.error,E=void 0===M?"":M,L=e.required,B=void 0!==L&&L,T=e.placeholder,I=void 0===T?"":T,P=e.min,D=e.max,F=e.overlayIcon,z=void 0===F?null:F,O=e.overlayObject,W=void 0===O?null:O,R=e.extraInputProps,K=void 0===R?{}:R,A=e.overlayAction,H=e.noLabelMinWidth,$=void 0!==H&&H,U=e.pattern,Y=void 0===U?"":U,_=e.autoFocus,q=void 0!==_&&_,G=e.classes,Q=e.className,X=void 0===Q?"":Q,J=e.onKeyPress,V=(0,t.Z)({"data-index":S},K);return"number"===p&&P&&(V.min=P),"number"===p&&D&&(V.max=D),""!==Y&&(V.pattern=Y),(0,h.jsx)(o.Fragment,{children:(0,h.jsxs)(s.ZP,{container:!0,className:(0,f.Z)(""!==X?X:"",""!==E?G.errorInField:G.inputBoxContainer),children:[""!==a&&(0,h.jsxs)(i.Z,{htmlFor:d,className:$?G.noMinWidthLabel:G.inputLabel,children:[(0,h.jsxs)("span",{children:[a,B?"*":""]}),""!==k&&(0,h.jsx)("div",{className:G.tooltipContainer,children:(0,h.jsx)(l.Z,{title:k,placement:"top-start",children:(0,h.jsx)("div",{className:G.tooltip,children:(0,h.jsx)(x.Z,{})})})})]}),(0,h.jsxs)("div",{className:G.textBoxContainer,children:[(0,h.jsx)(v,{id:d,name:u,fullWidth:!0,value:r,autoFocus:q,disabled:j,onChange:n,type:p,multiline:y,autoComplete:Z,inputProps:V,error:""!==E,helperText:E,placeholder:I,className:G.inputRebase,onKeyPress:J}),z&&(0,h.jsx)("div",{className:"".concat(G.overlayAction," ").concat(""!==a?"withLabel":""),children:(0,h.jsx)(c.Z,{onClick:A?function(){A()}:function(){return null},size:"small",disableFocusRipple:!1,disableRipple:!1,disableTouchRipple:!1,children:z})}),W&&(0,h.jsx)("div",{className:"".concat(G.overlayAction," ").concat(""!==a?"withLabel":""),children:W})]})]})})}))},76352:function(e,a,n){n.d(a,{Z:function(){return S}});var t,o=n(23430),r=n(18489),s=n(50390),i=n(34424),l=n(95467),c=n(97771),d=n(84402),u=n(78426),m=n(93085),p=n(86509),x=n(4285),f=n(72462),h=n(44149),g=n(38342),v=n.n(g),Z=n(92125),b=n(19538),j=n(21278),C=n(62559),y=function(){clearInterval(t)},N={displayErrorMessage:h.zb},k=(0,i.$j)((function(e){return{modalSnackMessage:e.system.modalSnackBar}}),N)((0,x.Z)((function(e){return(0,p.Z)({modalErrorContainer:{position:"absolute",marginTop:10,width:"80%",backgroundColor:"#fff",border:"#C72C48 1px solid",borderLeftWidth:12,borderRadius:3,zIndex:1e3,padding:"10px 15px",left:"50%",transform:"translateX(-50%)",opacity:0,transitionDuration:"0.2s"},modalErrorShow:{opacity:1},closeButton:{position:"absolute",right:5,fontSize:"small",border:0,backgroundColor:"#fff",cursor:"pointer"},errorTitle:{display:"flex",alignItems:"center"},errorLabel:{color:"#000",fontSize:18,fontWeight:500,marginLeft:5,marginRight:25},messageIcon:{color:"#C72C48",display:"flex","& svg":{width:32,height:32}},detailsButton:{color:"#9C9C9C",display:"flex",alignItems:"center",border:0,backgroundColor:"transparent",paddingLeft:5,fontSize:14,transformDuration:"0.3s",cursor:"pointer"},extraDetailsContainer:{fontStyle:"italic",color:"#9C9C9C",lineHeight:0,padding:"0 10px",transition:"all .2s ease-in-out",overflow:"hidden"},extraDetailsOpen:{lineHeight:1,padding:"3px 10px"},arrowElement:{marginLeft:-5},arrowOpen:{transform:"rotateZ(90deg)",transformDuration:"0.3s"}})}))((function(e){var a=e.classes,n=e.modalSnackMessage,r=e.displayErrorMessage,i=e.customStyle,l=(0,s.useState)(!1),c=(0,o.Z)(l,2),d=c[0],u=c[1],m=(0,s.useState)(!1),p=(0,o.Z)(m,2),x=p[0],f=p[1],h=(0,s.useCallback)((function(){f(!1)}),[]);(0,s.useEffect)((function(){x||(r({detailedError:"",errorMessage:""}),u(!1))}),[r,x]),(0,s.useEffect)((function(){""!==n.message&&"error"===n.type&&f(!0)}),[h,n.message,n.type]);var g=v()(n,"message",""),N=v()(n,"detailedErrorMsg","");return"error"!==n.type||""===g?null:(0,C.jsx)(s.Fragment,{children:(0,C.jsxs)("div",{className:"".concat(a.modalErrorContainer," ").concat(x?a.modalErrorShow:""),style:i,onMouseOver:y,onMouseLeave:function(){t=setInterval(h,1e4)},children:[(0,C.jsx)("button",{className:a.closeButton,onClick:h,children:(0,C.jsx)(j.Z,{})}),(0,C.jsxs)("div",{className:a.errorTitle,children:[(0,C.jsx)("span",{className:a.messageIcon,children:(0,C.jsx)(b.Z,{})}),(0,C.jsx)("span",{className:a.errorLabel,children:g})]}),""!==N&&(0,C.jsxs)(s.Fragment,{children:[(0,C.jsx)("div",{className:a.detailsContainerLink,children:(0,C.jsxs)("button",{className:a.detailsButton,onClick:function(){u(!d)},children:["Details",(0,C.jsx)(Z.Z,{className:"".concat(a.arrowElement," ").concat(d?a.arrowOpen:"")})]})}),(0,C.jsx)("div",{className:"".concat(a.extraDetailsContainer," ").concat(d?a.extraDetailsOpen:""),children:N})]})]})})}))),w=(0,i.$j)((function(e){return{modalSnackMessage:e.system.modalSnackBar}}),{setModalSnackMessage:h.MK}),S=(0,x.Z)((function(e){return(0,p.Z)((0,r.Z)((0,r.Z)({},f.Qw),{},{root:{"& .MuiPaper-root":{padding:"0 2rem 2rem 1rem"}},content:{padding:25,paddingBottom:0},customDialogSize:{width:"100%",maxWidth:765}},f.sN))}))(w((function(e){var a=e.onClose,n=e.modalOpen,t=e.title,i=e.children,p=e.classes,x=e.wideLimit,f=void 0===x||x,h=e.modalSnackMessage,g=e.noContentPadding,v=e.setModalSnackMessage,Z=e.titleIcon,b=void 0===Z?null:Z,y=(0,s.useState)(!1),N=(0,o.Z)(y,2),w=N[0],S=N[1];(0,s.useEffect)((function(){v("")}),[v]),(0,s.useEffect)((function(){if(h){if(""===h.message)return void S(!1);"error"!==h.type&&S(!0)}}),[h]);var M=f?{classes:{paper:p.customDialogSize}}:{maxWidth:"lg",fullWidth:!0},E="";return h&&(E=h.detailedErrorMsg,(""===h.detailedErrorMsg||h.detailedErrorMsg.length<5)&&(E=h.message)),(0,C.jsxs)(d.Z,(0,r.Z)((0,r.Z)({open:n,classes:p},M),{},{scroll:"paper",onClose:function(e,n){"backdropClick"!==n&&a()},className:p.root,children:[(0,C.jsxs)(u.Z,{className:p.title,children:[(0,C.jsxs)("div",{className:p.titleText,children:[b," ",t]}),(0,C.jsx)("div",{className:p.closeContainer,children:(0,C.jsx)(l.Z,{"aria-label":"close",className:p.closeButton,onClick:a,disableRipple:!0,size:"small",children:(0,C.jsx)(j.Z,{})})})]}),(0,C.jsx)(k,{}),(0,C.jsx)(c.Z,{open:w,className:p.snackBarModal,onClose:function(){S(!1),v("")},message:E,ContentProps:{className:"".concat(p.snackBar," ").concat(h&&"error"===h.type?p.errorSnackBar:"")},autoHideDuration:h&&"error"===h.type?1e4:5e3}),(0,C.jsx)(m.Z,{className:g?"":p.content,children:i})]}))})))}}]);
//# sourceMappingURL=1666.29b376af.chunk.js.map