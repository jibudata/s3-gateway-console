"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[825],{8235:function(e,t,n){n(50390);var r=n(86509),o=n(4285),i=n(25594),a=n(62559);t.Z=(0,o.Z)((function(e){return(0,r.Z)({root:{border:"1px solid #E2E2E2",borderRadius:2,backgroundColor:"#FBFAFA",paddingLeft:25,paddingTop:31,paddingBottom:21,paddingRight:30},leftItems:{fontSize:16,fontWeight:"bold",marginBottom:15,display:"flex",alignItems:"center","& .min-icon":{marginRight:15,height:28,width:38}},helpText:{fontSize:16,paddingLeft:5}})}))((function(e){var t=e.classes,n=e.iconComponent,r=e.title,o=e.help;return(0,a.jsx)("div",{className:t.root,children:(0,a.jsxs)(i.ZP,{container:!0,children:[(0,a.jsxs)(i.ZP,{item:!0,xs:12,className:t.leftItems,children:[n,r]}),(0,a.jsx)(i.ZP,{item:!0,xs:12,className:t.helpText,children:o})]})})}))},94198:function(e,t,n){var r=n(23430),o=n(18489),i=n(50390),a=n(34424),l=n(66946),s=n(86509),c=n(4285),d=n(25594),u=n(72462),p=n(44149),m=n(30324),f=n(76352),h=n(85615),g=n(70014),x=n(62559);(0,s.Z)((0,o.Z)((0,o.Z)({},u.ID),u.bK));var b=(0,a.$j)(null,{setModalErrorSnackMessage:p.zb});t.Z=(0,c.Z)((function(e){return(0,s.Z)((0,o.Z)((0,o.Z)((0,o.Z)({codeMirrorContainer:{marginBottom:20,"& label":{marginBottom:".5rem"},"& label + div":{display:"none"}}},u.DF),u.ID),u.bK))}))(b((function(e){var t=e.classes,n=e.open,o=e.selectedAccessKey,a=e.closeModalAndRefresh,s=e.setModalErrorSnackMessage,c=(0,i.useState)(!0),u=(0,r.Z)(c,2),p=u[0],b=u[1],y=(0,i.useState)(""),v=(0,r.Z)(y,2),Z=v[0],C=v[1];(0,i.useEffect)((function(){p&&m.Z.invoke("GET","/api/v1/service-accounts/".concat(o,"/policy")).then((function(e){b(!1),C(e)})).catch((function(e){b(!1),s(e)}))}),[p,b,s,o]);return(0,x.jsx)(f.Z,{title:"Service Account Policy",modalOpen:n,onClose:function(){a()},titleIcon:(0,x.jsx)(h.QX,{}),children:(0,x.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){var t;t=Z,e.preventDefault(),m.Z.invoke("PUT","/api/v1/service-accounts/".concat(o,"/policy"),{policy:t}).then((function(e){a()})).catch((function(e){s(e)}))},children:(0,x.jsxs)(d.ZP,{container:!0,children:[(0,x.jsx)(d.ZP,{item:!0,xs:12,className:t.codeMirrorContainer,children:(0,x.jsx)(g.Z,{label:"Service Account Policy",value:Z,onBeforeChange:function(e,t,n){C(n)},editorHeight:"350px"})}),(0,x.jsxs)(d.ZP,{item:!0,xs:12,className:t.modalButtonBar,children:[(0,x.jsx)(l.Z,{type:"button",variant:"outlined",color:"primary",onClick:function(){a()},disabled:p,children:"Cancel"}),(0,x.jsx)(l.Z,{type:"submit",variant:"contained",color:"primary",disabled:p,children:"Set"})]})]})})})})))},53224:function(e,t,n){var r=n(18489),o=n(83738),i=(n(50390),n(70758)),a=n(62449),l=n(62559),s=["onClick","text","disabled","tooltip","icon"],c=(0,a.Z)((function(e){return{root:{padding:"7px",color:function(t){return function(t){var n=t.variant,r=t.color,o=e.palette.primary.main;return"primary"===r&&"contained"===n?o=e.palette.primary.contrastText:"primary"===r&&"outlined"===n?o=e.palette.primary.main:"secondary"===r&&(o=e.palette.secondary.main),o}(t)},borderColor:function(t){return"secondary"===t.color?e.palette.secondary.main:e.palette.primary.main},"& svg.min-icon":{width:12,marginLeft:function(e){return e.text?"5px":"0px"},"@media (max-width: 900px)":{width:16,marginLeft:"0px !important"}}}}}));t.Z=function(e){var t=c(e),n=e.onClick,a=e.text,d=void 0===a?"":a,u=e.disabled,p=void 0!==u&&u,m=e.tooltip,f=e.icon,h=void 0===f?null:f,g=(0,o.Z)(e,s);return(0,l.jsxs)(i.Z,(0,r.Z)((0,r.Z)({classes:t,tooltip:m||d,variant:"outlined",onClick:n,disabled:p,color:"secondary",size:"medium",sx:{border:"1px solid #f44336","& span":{fontSize:14,"@media (max-width: 900px)":{display:"none"}}}},g),{},{children:[(0,l.jsx)("span",{children:d})," ",h]}))}},70758:function(e,t,n){var r=n(18489),o=n(36222),i=n(83738),a=(n(50390),n(86509)),l=n(4285),s=n(95467),c=n(94187),d=n(44977),u=n(62559),p=["classes","children","variant","tooltip"];t.Z=(0,l.Z)((function(e){return(0,a.Z)({root:{padding:8,marginLeft:8,borderWidth:1,borderColor:"#696969",color:"#696969",borderStyle:"solid",borderRadius:3,"& .min-icon":{width:20},"& .MuiTouchRipple-root span":{backgroundColor:e.palette.primary.main,borderRadius:3,opacity:.3},"&:disabled":{color:"#EBEBEB",borderColor:"#EBEBEB"}},contained:{borderColor:e.palette.primary.main,background:e.palette.primary.main,color:"white","& .MuiTouchRipple-root span":{backgroundColor:e.palette.primary.dark,borderRadius:3,opacity:.3},"&:hover":{backgroundColor:e.palette.primary.light,color:"#FFF"}}})}))((function(e){var t=e.classes,n=e.children,a=e.variant,l=void 0===a?"outlined":a,m=e.tooltip,f=(0,i.Z)(e,p),h=(0,u.jsx)(s.Z,(0,r.Z)((0,r.Z)({},f),{},{className:(0,d.Z)(t.root,(0,o.Z)({},t.contained,"contained"===l)),children:n}));return m&&""!==m?(0,u.jsx)(c.Z,{title:m,children:(0,u.jsx)("span",{children:h})}):h}))},37882:function(e,t,n){var r=n(18489),o=n(50390),i=n(62559);t.Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;function n(n){return(0,i.jsx)(o.Suspense,{fallback:t,children:(0,i.jsx)(e,(0,r.Z)({},n))})}return n}},70014:function(e,t,n){var r=n(35531),o=n(23430),i=n(18489),a=n(50390),l=n(25594),s=(n(2574),n(20704)),c=n(54880),d=n(21563),u=n(36297),p=n(36554),m=n(94187),f=n(56805),h=n(86509),g=n(4285),x=n(97538),b=n(72462),y=n(85615),v=n(53224),Z=n(33034),C=n.n(Z),j=n(53357),k=n(62559),E={json:d.AV,yaml:function(){return c.i.define(u.r)}},S=j.tk.theme({"&":{backgroundColor:"#FBFAFA"},".cm-content":{caretColor:"#05122B"},"&.cm-focused .cm-cursor":{borderLeftColor:"#05122B"},".cm-gutters":{backgroundColor:"#FBFAFA",color:"#000000",border:"none"},".cm-gutter.cm-foldGutter":{borderRight:"1px solid #eaeaea"},".cm-gutterElement":{fontSize:"13px"},".cm-line":{fontSize:"13px",color:"#2781B0","& .\u037cc":{color:"#C83B51"}},"& .\u037cb":{color:"#2781B0"},".cm-activeLine":{backgroundColor:"#dde1f1"},".cm-matchingBracket":{backgroundColor:"#05122B",color:"#ffffff"},".cm-selectionMatch":{backgroundColor:"#ebe7f1"},".cm-selectionLayer":{fontWeight:500}," .cm-selectionBackground":{backgroundColor:"#a180c7",color:"#ffffff"}},{dark:!1}),w=j.tk.theme({"&":{backgroundColor:"#282a36",color:"#ffb86c"},".cm-gutter.cm-foldGutter":{borderRight:"1px solid #eaeaea"},".cm-gutterElement":{fontSize:"13px"},".cm-line":{fontSize:"13px","& .\u037cd, & .\u037cc":{color:"#8e6cef"}},"& .\u037cb":{color:"#2781B0"},".cm-activeLine":{backgroundColor:"#44475a"},".cm-matchingBracket":{backgroundColor:"#842de5",color:"#ff79c6"},".cm-selectionLayer .cm-selectionBackground":{backgroundColor:"green"}},{dark:!0});t.Z=(0,g.Z)((function(e){return(0,h.Z)((0,i.Z)((0,i.Z)({},b.YI),{},{inputLabel:(0,i.Z)((0,i.Z)({},b.YI.inputLabel),{},{fontWeight:"normal"})}))}))((function(e){var t=e.value,n=e.label,i=void 0===n?"":n,c=e.tooltip,d=void 0===c?"":c,u=e.mode,h=void 0===u?"json":u,g=e.classes,b=e.onBeforeChange,Z=e.readOnly,j=void 0!==Z&&Z,_=e.editorHeight,N=void 0===_?"250px":_,M=(0,a.useState)(!1),q=(0,o.Z)(M,2),L=q[0],B=q[1],P=[];return E[h]&&(P=[].concat((0,r.Z)(P),[E[h]()])),(0,k.jsxs)(a.Fragment,{children:[(0,k.jsxs)(p.Z,{className:g.inputLabel,children:[(0,k.jsx)("span",{children:i}),""!==d&&(0,k.jsx)("div",{className:g.tooltipContainer,children:(0,k.jsx)(m.Z,{title:d,placement:"top-start",children:(0,k.jsx)("div",{className:g.tooltip,children:(0,k.jsx)(x.Z,{})})})})]}),(0,k.jsx)(l.ZP,{item:!0,xs:12,children:(0,k.jsx)("br",{})}),(0,k.jsxs)(l.ZP,{item:!0,xs:12,sx:{border:"1px solid #eaeaea"},children:[(0,k.jsx)(l.ZP,{item:!0,xs:12,children:(0,k.jsx)(s.ZP,{value:t,theme:L?w:S,extensions:P,editable:!j,basicSetup:!0,height:N,onChange:function(e,t){b(null,null,e)}})}),(0,k.jsx)(l.ZP,{item:!0,xs:12,sx:{borderTop:"1px solid #eaeaea",background:L?"#282c34":"#f7f7f7"},children:(0,k.jsxs)(f.Z,{sx:{display:"flex",alignItems:"center",padding:"2px",paddingRight:"5px",justifyContent:"flex-end","& button":{height:"26px",width:"26px",padding:"2px"," .min-icon":{marginLeft:"0"}}},children:[(0,k.jsx)(v.Z,{tooltip:"Change theme",onClick:function(){B(!L)},text:"",icon:(0,k.jsx)(y.EO,{}),color:"primary",variant:"outlined"}),(0,k.jsx)(C(),{text:t,children:(0,k.jsx)(v.Z,{tooltip:"Copy to Clipboard",onClick:function(){},text:"",icon:(0,k.jsx)(y.TI,{}),color:"primary",variant:"outlined"})})]})})]})]})}))},66964:function(e,t,n){var r=n(18489),o=n(50390),i=n(12066),a=n(25594),l=n(36554),s=n(94187),c=n(95467),d=n(86509),u=n(62449),p=n(4285),m=n(72462),f=n(97538),h=n(44977),g=n(62559),x=(0,u.Z)((function(e){return(0,d.Z)((0,r.Z)({},m.gM))}));function b(e){var t=x();return(0,g.jsx)(i.Z,(0,r.Z)({InputProps:{classes:t}},e))}t.Z=(0,p.Z)((function(e){return(0,d.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},m.YI),m.Hr),{},{textBoxContainer:{flexGrow:1,position:"relative"},overlayAction:{position:"absolute",right:5,top:6,"& svg":{maxWidth:15,maxHeight:15},"&.withLabel":{top:5}},inputLabel:(0,r.Z)((0,r.Z)({},m.YI.inputLabel),{},{fontWeight:"normal"})}))}))((function(e){var t=e.label,n=e.onChange,i=e.value,d=e.id,u=e.name,p=e.type,m=void 0===p?"text":p,x=e.autoComplete,y=void 0===x?"off":x,v=e.disabled,Z=void 0!==v&&v,C=e.multiline,j=void 0!==C&&C,k=e.tooltip,E=void 0===k?"":k,S=e.index,w=void 0===S?0:S,_=e.error,N=void 0===_?"":_,M=e.required,q=void 0!==M&&M,L=e.placeholder,B=void 0===L?"":L,P=e.min,I=e.max,A=e.overlayIcon,D=void 0===A?null:A,T=e.overlayObject,F=void 0===T?null:T,R=e.extraInputProps,W=void 0===R?{}:R,O=e.overlayAction,z=e.noLabelMinWidth,U=void 0!==z&&z,H=e.pattern,K=void 0===H?"":H,G=e.autoFocus,Y=void 0!==G&&G,Q=e.classes,$=e.className,V=void 0===$?"":$,X=e.onKeyPress,J=(0,r.Z)({"data-index":w},W);return"number"===m&&P&&(J.min=P),"number"===m&&I&&(J.max=I),""!==K&&(J.pattern=K),(0,g.jsx)(o.Fragment,{children:(0,g.jsxs)(a.ZP,{container:!0,className:(0,h.Z)(""!==V?V:"",""!==N?Q.errorInField:Q.inputBoxContainer),children:[""!==t&&(0,g.jsxs)(l.Z,{htmlFor:d,className:U?Q.noMinWidthLabel:Q.inputLabel,children:[(0,g.jsxs)("span",{children:[t,q?"*":""]}),""!==E&&(0,g.jsx)("div",{className:Q.tooltipContainer,children:(0,g.jsx)(s.Z,{title:E,placement:"top-start",children:(0,g.jsx)("div",{className:Q.tooltip,children:(0,g.jsx)(f.Z,{})})})})]}),(0,g.jsxs)("div",{className:Q.textBoxContainer,children:[(0,g.jsx)(b,{id:d,name:u,fullWidth:!0,value:i,autoFocus:Y,disabled:Z,onChange:n,type:m,multiline:j,autoComplete:y,inputProps:J,error:""!==N,helperText:N,placeholder:B,className:Q.inputRebase,onKeyPress:X}),D&&(0,g.jsx)("div",{className:"".concat(Q.overlayAction," ").concat(""!==t?"withLabel":""),children:(0,g.jsx)(c.Z,{onClick:O?function(){O()}:function(){return null},size:"small",disableFocusRipple:!1,disableRipple:!1,disableTouchRipple:!1,children:D})}),F&&(0,g.jsx)("div",{className:"".concat(Q.overlayAction," ").concat(""!==t?"withLabel":""),children:F})]})]})})}))},21639:function(e,t,n){var r=n(23430),o=n(50390),i=n(30324);t.Z=function(e,t){var n=(0,o.useState)(!1),a=(0,r.Z)(n,2),l=a[0],s=a[1];return[l,function(n,r,o){s(!0),i.Z.invoke(n,r,o).then((function(t){s(!1),e(t)})).catch((function(e){s(!1),t(e)}))}]}},25534:function(e,t,n){var r=n(18489),o=(n(50390),n(25594)),i=n(86509),a=n(4285),l=n(72462),s=n(62559);t.Z=(0,a.Z)((function(e){return(0,i.Z)((0,r.Z)({},l.Bw))}))((function(e){var t=e.classes,n=e.className,r=void 0===n?"":n,i=e.children;return(0,s.jsx)("div",{className:t.contentSpacer,children:(0,s.jsx)(o.ZP,{container:!0,children:(0,s.jsx)(o.ZP,{item:!0,xs:12,className:r,children:i})})})}))},60656:function(e,t,n){var r=n(18489),o=n(50390),i=n(84402),a=n(78426),l=n(93085),s=n(7887),c=n(66946),d=n(14476),u=n(95467),p=n(21278),m=n(86509),f=n(4285),h=n(72462),g=n(62559);t.Z=(0,f.Z)((function(e){return(0,m.Z)((0,r.Z)({},h.Qw))}))((function(e){var t=e.isOpen,n=void 0!==t&&t,m=e.onClose,f=e.onCancel,h=e.onConfirm,x=e.classes,b=void 0===x?{}:x,y=e.title,v=void 0===y?"":y,Z=e.isLoading,C=e.confirmationContent,j=e.cancelText,k=void 0===j?"Cancel":j,E=e.confirmText,S=void 0===E?"Confirm":E,w=e.confirmButtonProps,_=void 0===w?{}:w,N=e.cancelButtonProps,M=void 0===N?{}:N,q=e.titleIcon,L=void 0===q?null:q;return(0,g.jsxs)(i.Z,{open:n,onClose:function(e,t){"backdropClick"!==t&&m()},className:b.root,sx:{"& .MuiPaper-root":{padding:"1rem 2rem 2rem 1rem"}},children:[(0,g.jsxs)(a.Z,{className:b.title,children:[(0,g.jsxs)("div",{className:b.titleText,children:[L," ",v]}),(0,g.jsx)("div",{className:b.closeContainer,children:(0,g.jsx)(u.Z,{"aria-label":"close",className:b.closeButton,onClick:m,disableRipple:!0,size:"small",children:(0,g.jsx)(p.Z,{})})})]}),(0,g.jsx)(l.Z,{className:b.content,children:C}),(0,g.jsxs)(s.Z,{className:b.actions,children:[(0,g.jsx)(c.Z,(0,r.Z)((0,r.Z)({className:b.cancelButton,onClick:f||m,disabled:Z,type:"button"},M),{},{variant:"outlined",color:"primary",children:k})),(0,g.jsx)(d.Z,(0,r.Z)((0,r.Z)({className:b.confirmButton,type:"button",onClick:h,loading:Z,disabled:Z,variant:"outlined",color:"secondary",loadingPosition:"start",startIcon:(0,g.jsx)(o.Fragment,{}),autoFocus:!0},_),{},{children:S}))]})]})}))},76352:function(e,t,n){n.d(t,{Z:function(){return w}});var r,o=n(23430),i=n(18489),a=n(50390),l=n(34424),s=n(95467),c=n(97771),d=n(84402),u=n(78426),p=n(93085),m=n(86509),f=n(4285),h=n(72462),g=n(44149),x=n(38342),b=n.n(x),y=n(92125),v=n(19538),Z=n(21278),C=n(62559),j=function(){clearInterval(r)},k={displayErrorMessage:g.zb},E=(0,l.$j)((function(e){return{modalSnackMessage:e.system.modalSnackBar}}),k)((0,f.Z)((function(e){return(0,m.Z)({modalErrorContainer:{position:"absolute",marginTop:10,width:"80%",backgroundColor:"#fff",border:"#C72C48 1px solid",borderLeftWidth:12,borderRadius:3,zIndex:1e3,padding:"10px 15px",left:"50%",transform:"translateX(-50%)",opacity:0,transitionDuration:"0.2s"},modalErrorShow:{opacity:1},closeButton:{position:"absolute",right:5,fontSize:"small",border:0,backgroundColor:"#fff",cursor:"pointer"},errorTitle:{display:"flex",alignItems:"center"},errorLabel:{color:"#000",fontSize:18,fontWeight:500,marginLeft:5,marginRight:25},messageIcon:{color:"#C72C48",display:"flex","& svg":{width:32,height:32}},detailsButton:{color:"#9C9C9C",display:"flex",alignItems:"center",border:0,backgroundColor:"transparent",paddingLeft:5,fontSize:14,transformDuration:"0.3s",cursor:"pointer"},extraDetailsContainer:{fontStyle:"italic",color:"#9C9C9C",lineHeight:0,padding:"0 10px",transition:"all .2s ease-in-out",overflow:"hidden"},extraDetailsOpen:{lineHeight:1,padding:"3px 10px"},arrowElement:{marginLeft:-5},arrowOpen:{transform:"rotateZ(90deg)",transformDuration:"0.3s"}})}))((function(e){var t=e.classes,n=e.modalSnackMessage,i=e.displayErrorMessage,l=e.customStyle,s=(0,a.useState)(!1),c=(0,o.Z)(s,2),d=c[0],u=c[1],p=(0,a.useState)(!1),m=(0,o.Z)(p,2),f=m[0],h=m[1],g=(0,a.useCallback)((function(){h(!1)}),[]);(0,a.useEffect)((function(){f||(i({detailedError:"",errorMessage:""}),u(!1))}),[i,f]),(0,a.useEffect)((function(){""!==n.message&&"error"===n.type&&h(!0)}),[g,n.message,n.type]);var x=b()(n,"message",""),k=b()(n,"detailedErrorMsg","");return"error"!==n.type||""===x?null:(0,C.jsx)(a.Fragment,{children:(0,C.jsxs)("div",{className:"".concat(t.modalErrorContainer," ").concat(f?t.modalErrorShow:""),style:l,onMouseOver:j,onMouseLeave:function(){r=setInterval(g,1e4)},children:[(0,C.jsx)("button",{className:t.closeButton,onClick:g,children:(0,C.jsx)(Z.Z,{})}),(0,C.jsxs)("div",{className:t.errorTitle,children:[(0,C.jsx)("span",{className:t.messageIcon,children:(0,C.jsx)(v.Z,{})}),(0,C.jsx)("span",{className:t.errorLabel,children:x})]}),""!==k&&(0,C.jsxs)(a.Fragment,{children:[(0,C.jsx)("div",{className:t.detailsContainerLink,children:(0,C.jsxs)("button",{className:t.detailsButton,onClick:function(){u(!d)},children:["Details",(0,C.jsx)(y.Z,{className:"".concat(t.arrowElement," ").concat(d?t.arrowOpen:"")})]})}),(0,C.jsx)("div",{className:"".concat(t.extraDetailsContainer," ").concat(d?t.extraDetailsOpen:""),children:k})]})]})})}))),S=(0,l.$j)((function(e){return{modalSnackMessage:e.system.modalSnackBar}}),{setModalSnackMessage:g.MK}),w=(0,f.Z)((function(e){return(0,m.Z)((0,i.Z)((0,i.Z)({},h.Qw),{},{root:{"& .MuiPaper-root":{padding:"0 2rem 2rem 1rem"}},content:{padding:25,paddingBottom:0},customDialogSize:{width:"100%",maxWidth:765}},h.sN))}))(S((function(e){var t=e.onClose,n=e.modalOpen,r=e.title,l=e.children,m=e.classes,f=e.wideLimit,h=void 0===f||f,g=e.modalSnackMessage,x=e.noContentPadding,b=e.setModalSnackMessage,y=e.titleIcon,v=void 0===y?null:y,j=(0,a.useState)(!1),k=(0,o.Z)(j,2),S=k[0],w=k[1];(0,a.useEffect)((function(){b("")}),[b]),(0,a.useEffect)((function(){if(g){if(""===g.message)return void w(!1);"error"!==g.type&&w(!0)}}),[g]);var _=h?{classes:{paper:m.customDialogSize}}:{maxWidth:"lg",fullWidth:!0},N="";return g&&(N=g.detailedErrorMsg,(""===g.detailedErrorMsg||g.detailedErrorMsg.length<5)&&(N=g.message)),(0,C.jsxs)(d.Z,(0,i.Z)((0,i.Z)({open:n,classes:m},_),{},{scroll:"paper",onClose:function(e,n){"backdropClick"!==n&&t()},className:m.root,children:[(0,C.jsxs)(u.Z,{className:m.title,children:[(0,C.jsxs)("div",{className:m.titleText,children:[v," ",r]}),(0,C.jsx)("div",{className:m.closeContainer,children:(0,C.jsx)(s.Z,{"aria-label":"close",className:m.closeButton,onClick:t,disableRipple:!0,size:"small",children:(0,C.jsx)(Z.Z,{})})})]}),(0,C.jsx)(E,{}),(0,C.jsx)(c.Z,{open:S,className:m.snackBarModal,onClose:function(){w(!1),b("")},message:N,ContentProps:{className:"".concat(m.snackBar," ").concat(g&&"error"===g.type?m.errorSnackBar:"")},autoHideDuration:g&&"error"===g.type?1e4:5e3}),(0,C.jsx)(p.Z,{className:x?"":m.content,children:l})]}))})))},35721:function(e,t,n){var r=n(50390),o=n(34424),i=n(25594),a=n(86509),l=n(4285),s=n(35477),c=n(95467),d=n(26805),u=n(44078),p=n(5265),m=n(85615),f=n(62559),h={toggleList:p.kQ},g=(0,o.$j)((function(e){return{sidebarOpen:e.system.sidebarOpen,operatorMode:e.system.operatorMode,managerObjects:e.objectBrowser.objectManager.objectsToManage,features:e.console.session.features}}),h);t.Z=g((0,l.Z)((function(e){return(0,a.Z)({headerContainer:{width:"100%",minHeight:79,display:"flex",backgroundColor:"#fff",left:0,boxShadow:"rgba(0,0,0,.08) 0 3px 10px"},label:{display:"flex",justifyContent:"flex-start",alignItems:"center"},labelStyle:{color:"#000",fontSize:18,fontWeight:700,marginLeft:34,marginTop:8},rightMenu:{textAlign:"right"},logo:{marginLeft:34,fill:e.palette.primary.main,"& .min-icon":{width:120}},middleComponent:{display:"flex",justifyContent:"center",alignItems:"center"}})}))((function(e){var t=e.classes,n=e.label,o=e.actions,a=e.sidebarOpen,l=e.operatorMode,p=e.managerObjects,h=e.toggleList,g=e.middleComponent;return e.features.includes("hide-menu")?(0,f.jsx)(r.Fragment,{}):(0,f.jsxs)(i.ZP,{container:!0,className:"".concat(t.headerContainer," page-header"),direction:"row",alignItems:"center",children:[(0,f.jsxs)(i.ZP,{item:!0,xs:12,sm:12,md:g?3:6,className:t.label,sx:{paddingTop:["15px","15px","0","0"]},children:[!a&&(0,f.jsx)("div",{className:t.logo,children:l?(0,f.jsx)(d.Z,{}):(0,f.jsx)(u.Z,{})}),(0,f.jsx)(s.Z,{variant:"h4",className:t.labelStyle,children:n})]}),g&&(0,f.jsx)(i.ZP,{item:!0,xs:12,sm:12,md:6,className:t.middleComponent,sx:{marginTop:["10px","10px","0","0"]},children:g}),(0,f.jsxs)(i.ZP,{item:!0,xs:12,sm:12,md:g?3:6,className:t.rightMenu,children:[o&&o,p&&p.length>0&&(0,f.jsx)(c.Z,{color:"primary","aria-label":"Refresh List",component:"span",onClick:function(){h()},size:"large",children:(0,f.jsx)(m.gx,{})})]})]})})))},23165:function(e,t,n){var r=n(36222),o=n(18489),i=(n(50390),n(65771)),a=n(13336),l=n(12066),s=n(4285),c=n(86509),d=n(72462),u=n(62559);t.Z=(0,s.Z)((function(e){return(0,c.Z)({searchField:(0,o.Z)({},d.qg.searchField),adornment:{}})}))((function(e){var t=e.placeholder,n=void 0===t?"":t,o=e.classes,s=e.onChange,c=e.adornmentPosition,d=void 0===c?"end":c,p=e.overrideClass,m=e.value,f=(0,r.Z)({disableUnderline:!0},"".concat(d,"Adornment"),(0,u.jsx)(i.Z,{position:d,className:o.adornment,children:(0,u.jsx)(a.Z,{})}));return(0,u.jsx)(l.Z,{placeholder:n,className:p||o.searchField,id:"search-resource",label:"",InputProps:f,onChange:function(e){s(e.target.value)},variant:"standard",value:m})}))},73726:function(e,t,n){n.d(t,{bx:function(){return g},DP:function(){return x},DD:function(){return b},_0:function(){return y}});var r=n(35531),o=(n(50390),n(75012)),i=n(58267),a=n(44229),l=n(30578),s=n(2494),c=n(41845),d=n(26068),u=n(89173),p=n(9639),m=n(84386),f=n(12720),h=n(62559),g=[{icon:(0,h.jsx)(o.Z,{}),configuration_id:"region",configuration_label:"Region"},{icon:(0,h.jsx)(i.Z,{}),configuration_id:"cache",configuration_label:"Cache"},{icon:(0,h.jsx)(a.Z,{}),configuration_id:"compression",configuration_label:"Compression"},{icon:(0,h.jsx)(l.Z,{}),configuration_id:"api",configuration_label:"API"},{icon:(0,h.jsx)(s.Z,{}),configuration_id:"heal",configuration_label:"Heal"},{icon:(0,h.jsx)(c.Z,{}),configuration_id:"scanner",configuration_label:"Scanner"},{icon:(0,h.jsx)(d.Z,{}),configuration_id:"etcd",configuration_label:"Etcd"},{icon:(0,h.jsx)(u.Z,{}),configuration_id:"identity_openid",configuration_label:"Identity Openid"},{icon:(0,h.jsx)(p.Z,{}),configuration_id:"identity_ldap",configuration_label:"Identity LDAP"},{icon:(0,h.jsx)(f.Z,{}),configuration_id:"logger_webhook",configuration_label:"Logger Webhook"},{icon:(0,h.jsx)(m.Z,{}),configuration_id:"audit_webhook",configuration_label:"Audit Webhook"}],x={region:[{name:"name",required:!0,label:"Server Location",tooltip:'Name of the location of the server e.g. "us-west-rack2"',type:"string",placeholder:"e.g. us-west-rack-2"},{name:"comment",required:!1,label:"Comment",tooltip:"You can add a comment to this setting",type:"comment",placeholder:"Enter Comment"}],cache:[{name:"drives",required:!0,label:"Drives",tooltip:'Mountpoints e.g. "/optane1" or "/optane2", you can write one per field',type:"csv",placeholder:"Enter Mount Point"},{name:"expiry",required:!1,label:"Expiry",tooltip:'Cache expiry duration in days e.g. "90"',type:"number",placeholder:"Enter Number of Days"},{name:"quota",required:!1,label:"Quota",tooltip:'Limit cache drive usage in percentage e.g. "90"',type:"number",placeholder:"Enter in %"},{name:"exclude",required:!1,label:"Exclude",tooltip:'Wildcard exclusion patterns e.g. "bucket/*.tmp" or "*.exe", you can write one per field',type:"csv",placeholder:"Enter Wildcard Exclusion Patterns"},{name:"after",required:!1,label:"After",tooltip:"Minimum number of access before caching an object",type:"number",placeholder:"Enter Number of Attempts"},{name:"watermark_low",required:!1,label:"Watermark Low",tooltip:"Watermark Low",type:"number",placeholder:"Enter Watermark Low"},{name:"watermark_high",required:!1,label:"Watermark High",tooltip:"Watermark High",type:"number",placeholder:"Enter Watermark High"},{name:"comment",required:!1,label:"Comment",tooltip:"You can add a comment to this setting",type:"comment",multiline:!0,placeholder:"Enter Comment"}],compression:[{name:"extensions",required:!1,label:"Extensions",tooltip:'Extensions to compress e.g. ".txt",".log" or ".csv", you can write one per field',type:"csv",placeholder:"Enter an Extension",withBorder:!0},{name:"mime_types",required:!1,label:"Mime Types",tooltip:'Mime types e.g. "text/*","application/json" or "application/xml", you can write one per field',type:"csv",placeholder:"Enter a Mime Type",withBorder:!0}],api:[{name:"requests_max",required:!1,label:"Requests Max",tooltip:"Maximum number of concurrent requests, e.g. '1600'",type:"number",placeholder:"Enter Requests Max"},{name:"cors_allow_origin",required:!1,label:"Cors Allow Origin",tooltip:"list of origins allowed for CORS requests",type:"csv",placeholder:"Enter allowed origin e.g. https://example.com"},{name:"replication_workers",required:!1,label:"Replication Workers",tooltip:"Number of replication workers, defaults to 100",type:"number",placeholder:"Enter Replication Workers"},{name:"replication_failed_workers",required:!1,label:"Replication Failed Workers",tooltip:"Number of replication workers for recently failed replicas, defaults to 4",type:"number",placeholder:"Enter Replication Failed Workers"}],heal:[{name:"bitrotscan",required:!1,label:"Bitrot Scan",tooltip:"Perform bitrot scan on disks when checking objects during scanner",type:"on|off"},{name:"max_sleep",required:!1,label:"Max Sleep",tooltip:"Maximum sleep duration between objects to slow down heal operation. eg. 2s",type:"duration",placeholder:"Enter Max Sleep duration"},{name:"max_io",required:!1,label:"Max IO",tooltip:"Maximum IO requests allowed between objects to slow down heal operation. eg. 3",type:"number",placeholder:"Enter Max IO"}],scanner:[{name:"delay",required:!1,label:"Delay multiplier",tooltip:"Scanner delay multiplier, defaults to '10.0'",type:"number",placeholder:"Enter Delay"},{name:"max_wait",required:!1,label:"Max Wait",tooltip:"Maximum wait time between operations, defaults to '15s'",type:"duration",placeholder:"Enter Max Wait"},{name:"cycle",required:!1,label:"Cycle",tooltip:"Time duration between scanner cycles, defaults to '1m'",type:"duration",placeholder:"Enter Cycle"}],etcd:[{name:"endpoints",required:!0,label:"Endpoints",tooltip:'List of etcd endpoints e.g. "http://localhost:2379", you can write one per field',type:"csv",placeholder:"Enter Endpoint"},{name:"path_prefix",required:!1,label:"Path Prefix",tooltip:'namespace prefix to isolate tenants e.g. "customer1/"',type:"string",placeholder:"Enter Path Prefix"},{name:"coredns_path",required:!1,label:"Coredns Path",tooltip:'Shared bucket DNS records, default is "/skydns"',type:"string",placeholder:"Enter Coredns Path"},{name:"client_cert",required:!1,label:"Client Cert",tooltip:"Client cert for mTLS authentication",type:"string",placeholder:"Enter Client Cert"},{name:"client_cert_key",required:!1,label:"Client Cert Key",tooltip:"Client cert key for mTLS authentication",type:"string",placeholder:"Enter Client Cert Key"},{name:"comment",required:!1,label:"Comment",tooltip:"You can add a comment to this setting",type:"comment",multiline:!0,placeholder:"Enter Comment"}],identity_openid:[{name:"config_url",required:!1,label:"Config URL",tooltip:"Config URL for identity provider configuration",type:"string",placeholder:"https://identity-provider-url/.well-known/openid-configuration"},{name:"client_id",required:!1,label:"Client ID",type:"string",placeholder:"Enter Client ID"},{name:"client_secret",required:!1,label:"Secret ID",type:"string",placeholder:"Enter Secret ID"},{name:"claim_name",required:!1,label:"Claim Name",tooltip:"Claim from which MinIO will read the policy or role to use",type:"string",placeholder:"Enter Claim Name"},{name:"claim_prefix",required:!1,label:"Claim Prefix",tooltip:"Claim Prefix",type:"string",placeholder:"Enter Claim Prefix"},{name:"claim_userinfo",required:!1,label:"Claim UserInfo",type:"on|off"},{name:"redirect_uri",required:!1,label:"Redirect URI",type:"string",placeholder:"https://console-endpoint-url/oauth_callback"},{name:"scopes",required:!1,label:"Scopes",type:"string",placeholder:"openid,profile,email"}],identity_ldap:[{name:"server_addr",required:!0,label:"Server Addr",tooltip:'AD/LDAP server address e.g. "myldapserver.com:636"',type:"string",placeholder:"Enter Server Address"},{name:"username_format",required:!0,label:"Username Format",tooltip:'List of username bind DNs e.g. "uid=%s","cn=accounts","dc=myldapserver" or "dc=com", you can write one per field',type:"csv",placeholder:"Enter Username Format"},{name:"username_search_filter",required:!0,label:"Username Search Filter",tooltip:'User search filter, for example "(cn=%s)" or "(sAMAccountName=%s)" or "(uid=%s)"',type:"string",placeholder:"Enter Username Search Filter"},{name:"group_search_filter",required:!0,label:"Group Search Filter",tooltip:'Search filter for groups e.g. "(&(objectclass=groupOfNames)(memberUid=%s))"',type:"string",placeholder:"Enter Group Search Filter"},{name:"username_search_base_dn",required:!1,label:"Username Search Base DN",tooltip:"List of username search DNs, you can write one per field",type:"csv",placeholder:"Enter Username Search Base DN"},{name:"group_name_attribute",required:!1,label:"Group Name Attribute",tooltip:'Search attribute for group name e.g. "cn"',type:"string",placeholder:"Enter Group Name Attribute"},{name:"sts_expiry",required:!1,label:"STS Expiry",tooltip:'temporary credentials validity duration in s,m,h,d. Default is "1h"',type:"string",placeholder:"Enter STS Expiry"},{name:"tls_skip_verify",required:!1,label:"TLS Skip Verify",tooltip:'Trust server TLS without verification, defaults to "off" (verify)',type:"on|off"},{name:"server_insecure",required:!1,label:"Server Insecure",tooltip:'Allow plain text connection to AD/LDAP server, defaults to "off"',type:"on|off"},{name:"comment",required:!1,label:"Comment",tooltip:"Optionally add a comment to this setting",type:"comment",placeholder:"Enter Comment"}],logger_webhook:[{name:"endpoint",required:!0,label:"Endpoint",type:"string",placeholder:"Enter Endpoint"},{name:"auth_token",required:!0,label:"Auth Token",type:"string",placeholder:"Enter Auth Token"}],audit_webhook:[{name:"endpoint",required:!0,label:"Endpoint",type:"string",placeholder:"Enter Endpoint"},{name:"auth_token",required:!0,label:"Auth Token",type:"string",placeholder:"Enter Auth Token"}]},b=function(e){return e.filter((function(e){return""!==e.value}))},y=function(e,t,n){var o=e.target,i=o.value,a=o.checked,l=(0,r.Z)(n);return a?l.push(i):l=l.filter((function(e){return e!==i})),t(l),l}},31529:function(e,t,n){var r=n(23430),o=(n(50390),n(34424)),i=n(23473),a=n(44149),l=n(21639),s=n(60656),c=n(85615),d=n(62559),u={setErrorSnackMessage:a.Ih},p=(0,o.$j)(null,u);t.Z=p((function(e){var t=e.closeDeleteModalAndRefresh,n=e.deleteOpen,o=e.selectedSAs,a=e.setErrorSnackMessage,u=(0,l.Z)((function(){return t(!0)}),(function(e){return a(e)})),p=(0,r.Z)(u,2),m=p[0],f=p[1];if(!o)return null;return(0,d.jsx)(s.Z,{title:"Delete Service Accounts",confirmText:"Delete",isOpen:n,titleIcon:(0,d.jsx)(c.Nv,{}),isLoading:m,onConfirm:function(){f("DELETE","/api/v1/service-accounts/delete-multi",o)},onClose:function(){return t(!1)},confirmationContent:(0,d.jsxs)(i.Z,{children:["Are you sure you want to delete the selected ",o.length," ","service accounts?"," "]})})}))},25233:function(e,t,n){n.d(t,{LQ:function(){return r},g4:function(){return o},V2:function(){return i}});var r=function(e,t){return e.accessKey>t.accessKey?1:e.accessKey<t.accessKey?-1:0},o=function(e,t){return e.name>t.name?1:e.name<t.name?-1:0},i=function(e,t){return e>t?1:e<t?-1:0}}}]);
//# sourceMappingURL=825.3a314578.chunk.js.map