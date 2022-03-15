"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[4966],{92440:function(e,n,i){var o=i(36222),t=i(18489),a=i(50390),r=i(86509),l=i(4285),s=i(49056),c=i(36554),d=i(94187),u=i(35477),m=i(25594),p=i(72462),h=i(97538),x=i(44977),v=i(62559),f=(0,l.Z)((function(e){return{root:{width:50,height:24,padding:0,margin:0},switchBase:{padding:1,"&$checked":{transform:"translateX(24px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#4CCB92",boxShadow:"inset 0px 1px 4px rgba(0,0,0,0.1)",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#4CCB92",border:"6px solid #fff"}},thumb:{width:22,height:22,backgroundColor:"#FAFAFA",border:"2px solid #FFFFFF",marginLeft:1},track:{borderRadius:12,backgroundColor:"#E2E2E2",boxShadow:"inset 0px 1px 4px rgba(0,0,0,0.1)",opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{},switchContainer:{display:"flex",alignItems:"center",justifyContent:"flex-end"}}}))(s.Z);n.Z=(0,l.Z)((function(e){return(0,r.Z)((0,t.Z)((0,t.Z)({divContainer:{marginBottom:20},indicatorLabelOn:{fontWeight:"bold",color:"#081C42 !important"},indicatorLabel:{fontSize:12,color:"#E2E2E2",margin:"0 8px 0 10px"},fieldDescription:{marginTop:4,color:"#999999"},tooltip:{fontSize:16}},p.OR),p.YI))}))((function(e){var n=e.label,i=void 0===n?"":n,r=e.onChange,l=e.value,s=e.id,p=e.name,b=e.checked,Z=void 0!==b&&b,g=e.disabled,j=void 0!==g&&g,C=e.switchOnly,N=void 0!==C&&C,k=e.tooltip,y=void 0===k?"":k,F=e.description,P=void 0===F?"":F,M=e.classes,w=e.indicatorLabels,L=e.extraInputProps,B=void 0===L?{}:L,S=(0,v.jsxs)(a.Fragment,{children:[!N&&(0,v.jsx)("span",{className:(0,x.Z)(M.indicatorLabel,(0,o.Z)({},M.indicatorLabelOn,!Z)),children:w&&w.length>1?w[1]:"OFF"}),(0,v.jsx)(f,{checked:Z,onChange:r,color:"primary",name:p,inputProps:(0,t.Z)({"aria-label":"primary checkbox"},B),disabled:j,disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0,value:l,id:s}),!N&&(0,v.jsx)("span",{className:(0,x.Z)(M.indicatorLabel,(0,o.Z)({},M.indicatorLabelOn,Z)),children:w?w[0]:"ON"})]});return N?S:(0,v.jsx)("div",{className:M.divContainer,children:(0,v.jsxs)(m.ZP,{container:!0,alignItems:"center",children:[(0,v.jsx)(m.ZP,{item:!0,xs:!0,children:(0,v.jsxs)(m.ZP,{container:!0,children:[(0,v.jsx)(m.ZP,{item:!0,xs:12,sm:""!==P?4:10,md:""!==P?3:9,children:""!==i&&(0,v.jsxs)(c.Z,{htmlFor:s,className:M.inputLabel,children:[(0,v.jsx)("span",{children:i}),""!==y&&(0,v.jsx)("div",{className:M.tooltipContainer,children:(0,v.jsx)(d.Z,{title:y,placement:"top-start",children:(0,v.jsx)("div",{className:M.tooltip,children:(0,v.jsx)(h.Z,{})})})})]})}),(0,v.jsx)(m.ZP,{item:!0,xs:12,sm:!0,textAlign:"left",children:""!==P&&(0,v.jsx)(u.Z,{component:"p",className:M.fieldDescription,children:P})})]})}),(0,v.jsx)(m.ZP,{item:!0,xs:12,sm:2,textAlign:"right",className:M.switchContainer,children:S})]})})}))},66964:function(e,n,i){var o=i(18489),t=i(50390),a=i(12066),r=i(25594),l=i(36554),s=i(94187),c=i(95467),d=i(86509),u=i(62449),m=i(4285),p=i(72462),h=i(97538),x=i(44977),v=i(62559),f=(0,u.Z)((function(e){return(0,d.Z)((0,o.Z)({},p.gM))}));function b(e){var n=f();return(0,v.jsx)(a.Z,(0,o.Z)({InputProps:{classes:n}},e))}n.Z=(0,m.Z)((function(e){return(0,d.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},p.YI),p.Hr),{},{textBoxContainer:{flexGrow:1,position:"relative"},overlayAction:{position:"absolute",right:5,top:6,"& svg":{maxWidth:15,maxHeight:15},"&.withLabel":{top:5}},inputLabel:(0,o.Z)((0,o.Z)({},p.YI.inputLabel),{},{fontWeight:"normal"})}))}))((function(e){var n=e.label,i=e.onChange,a=e.value,d=e.id,u=e.name,m=e.type,p=void 0===m?"text":m,f=e.autoComplete,Z=void 0===f?"off":f,g=e.disabled,j=void 0!==g&&g,C=e.multiline,N=void 0!==C&&C,k=e.tooltip,y=void 0===k?"":k,F=e.index,P=void 0===F?0:F,M=e.error,w=void 0===M?"":M,L=e.required,B=void 0!==L&&L,S=e.placeholder,E=void 0===S?"":S,I=e.min,R=e.max,O=e.overlayId,T=e.overlayIcon,z=void 0===T?null:T,A=e.overlayObject,W=void 0===A?null:A,K=e.extraInputProps,D=void 0===K?{}:K,V=e.overlayAction,$=e.noLabelMinWidth,q=void 0!==$&&$,H=e.pattern,Y=void 0===H?"":H,Q=e.autoFocus,U=void 0!==Q&&Q,_=e.classes,G=e.className,X=void 0===G?"":G,J=e.onKeyPress,ee=(0,o.Z)({"data-index":P},D);return"number"===p&&I&&(ee.min=I),"number"===p&&R&&(ee.max=R),""!==Y&&(ee.pattern=Y),(0,v.jsx)(t.Fragment,{children:(0,v.jsxs)(r.ZP,{container:!0,className:(0,x.Z)(""!==X?X:"",""!==w?_.errorInField:_.inputBoxContainer),children:[""!==n&&(0,v.jsxs)(l.Z,{htmlFor:d,className:q?_.noMinWidthLabel:_.inputLabel,children:[(0,v.jsxs)("span",{children:[n,B?"*":""]}),""!==y&&(0,v.jsx)("div",{className:_.tooltipContainer,children:(0,v.jsx)(s.Z,{title:y,placement:"top-start",children:(0,v.jsx)("div",{className:_.tooltip,children:(0,v.jsx)(h.Z,{})})})})]}),(0,v.jsxs)("div",{className:_.textBoxContainer,children:[(0,v.jsx)(b,{id:d,name:u,fullWidth:!0,value:a,autoFocus:U,disabled:j,onChange:i,type:p,multiline:N,autoComplete:Z,inputProps:ee,error:""!==w,helperText:w,placeholder:E,className:_.inputRebase,onKeyPress:J}),z&&(0,v.jsx)("div",{className:"".concat(_.overlayAction," ").concat(""!==n?"withLabel":""),children:(0,v.jsx)(c.Z,{onClick:V?function(){V()}:function(){return null},id:O,size:"small",disableFocusRipple:!1,disableRipple:!1,disableTouchRipple:!1,children:z})}),W&&(0,v.jsx)("div",{className:"".concat(_.overlayAction," ").concat(""!==n?"withLabel":""),children:W})]})]})})}))},1365:function(e,n,i){var o=i(23430),t=i(50390),a=i(86509),r=i(4285),l=i(26936),s=i(31680),c=i(62559);n.Z=(0,r.Z)((function(e){return(0,a.Z)({buttonTrigger:{border:"#F0F2F2 1px solid",borderRadius:3,color:"#838383",backgroundColor:"#fff",fontSize:12}})}))((function(e){var n=e.classes,i=e.id,a=e.unitSelected,r=e.unitsList,d=e.disabled,u=void 0!==d&&d,m=e.onUnitChange,p=t.useState(null),h=(0,o.Z)(p,2),x=h[0],v=h[1],f=Boolean(x),b=function(e){v(null),""!==e&&m&&m(e)};return(0,c.jsxs)(t.Fragment,{children:[(0,c.jsx)("button",{id:"".concat(i,"-button"),"aria-controls":"".concat(i,"-menu"),"aria-haspopup":"true","aria-expanded":f?"true":void 0,onClick:function(e){v(e.currentTarget)},className:n.buttonTrigger,disabled:u,type:"button",children:a}),(0,c.jsx)(l.Z,{id:"".concat(i,"-menu"),"aria-labelledby":"".concat(i,"-button"),anchorEl:x,open:f,onClose:function(){b("")},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:r.map((function(e){return(0,c.jsx)(s.Z,{onClick:function(){return b(e.value)},children:e.label},"itemUnit-".concat(e.value,"-").concat(e.label))}))})]})}))},60656:function(e,n,i){var o=i(18489),t=i(50390),a=i(84402),r=i(78426),l=i(93085),s=i(7887),c=i(66946),d=i(7521),u=i(95467),m=i(21278),p=i(86509),h=i(4285),x=i(72462),v=i(62559);n.Z=(0,h.Z)((function(e){return(0,p.Z)((0,o.Z)({},x.Qw))}))((function(e){var n=e.isOpen,i=void 0!==n&&n,p=e.onClose,h=e.onCancel,x=e.onConfirm,f=e.classes,b=void 0===f?{}:f,Z=e.title,g=void 0===Z?"":Z,j=e.isLoading,C=e.confirmationContent,N=e.cancelText,k=void 0===N?"Cancel":N,y=e.confirmText,F=void 0===y?"Confirm":y,P=e.confirmButtonProps,M=void 0===P?{}:P,w=e.cancelButtonProps,L=void 0===w?{}:w,B=e.titleIcon,S=void 0===B?null:B;return(0,v.jsxs)(a.Z,{open:i,onClose:function(e,n){"backdropClick"!==n&&p()},className:b.root,sx:{"& .MuiPaper-root":{padding:"1rem 2rem 2rem 1rem"}},children:[(0,v.jsxs)(r.Z,{className:b.title,children:[(0,v.jsxs)("div",{className:b.titleText,children:[S," ",g]}),(0,v.jsx)("div",{className:b.closeContainer,children:(0,v.jsx)(u.Z,{"aria-label":"close",className:b.closeButton,onClick:p,disableRipple:!0,size:"small",children:(0,v.jsx)(m.Z,{})})})]}),(0,v.jsx)(l.Z,{className:b.content,children:C}),(0,v.jsxs)(s.Z,{className:b.actions,children:[(0,v.jsx)(c.Z,(0,o.Z)((0,o.Z)({className:b.cancelButton,onClick:h||p,disabled:j,type:"button"},L),{},{variant:"outlined",color:"primary",id:"confirm-cancel",children:k})),(0,v.jsx)(d.Z,(0,o.Z)((0,o.Z)({className:b.confirmButton,type:"button",onClick:x,loading:j,disabled:j,variant:"outlined",color:"secondary",loadingPosition:"start",startIcon:(0,v.jsx)(t.Fragment,{}),autoFocus:!0,id:"confirm-ok"},M),{},{children:F}))]})]})}))},51002:function(e,n,i){var o=i(23430),t=i(18489),a=i(50390),r=i(34424),l=i(95467),s=i(97771),c=i(84402),d=i(78426),u=i(93085),m=i(86509),p=i(4285),h=i(72462),x=i(44149),v=i(21278),f=i(45980),b=i(62559),Z=(0,r.$j)((function(e){return{modalSnackMessage:e.system.modalSnackBar}}),{setModalSnackMessage:x.MK});n.Z=(0,p.Z)((function(e){return(0,m.Z)((0,t.Z)((0,t.Z)({},h.Qw),{},{root:{"& .MuiPaper-root":{padding:"0 2rem 2rem 1rem"}},content:{padding:25,paddingBottom:0},customDialogSize:{width:"100%",maxWidth:765}},h.sN))}))(Z((function(e){var n=e.onClose,i=e.modalOpen,r=e.title,m=e.children,p=e.classes,h=e.wideLimit,x=void 0===h||h,Z=e.modalSnackMessage,g=e.noContentPadding,j=e.setModalSnackMessage,C=e.titleIcon,N=void 0===C?null:C,k=(0,a.useState)(!1),y=(0,o.Z)(k,2),F=y[0],P=y[1];(0,a.useEffect)((function(){j("")}),[j]),(0,a.useEffect)((function(){if(Z){if(""===Z.message)return void P(!1);"error"!==Z.type&&P(!0)}}),[Z]);var M=x?{classes:{paper:p.customDialogSize}}:{maxWidth:"lg",fullWidth:!0},w="";return Z&&(w=Z.detailedErrorMsg,(""===Z.detailedErrorMsg||Z.detailedErrorMsg.length<5)&&(w=Z.message)),(0,b.jsxs)(c.Z,(0,t.Z)((0,t.Z)({open:i,classes:p},M),{},{scroll:"paper",onClose:function(e,i){"backdropClick"!==i&&n()},className:p.root,children:[(0,b.jsxs)(d.Z,{className:p.title,children:[(0,b.jsxs)("div",{className:p.titleText,children:[N," ",r]}),(0,b.jsx)("div",{className:p.closeContainer,children:(0,b.jsx)(l.Z,{"aria-label":"close",className:p.closeButton,onClick:n,disableRipple:!0,size:"small",children:(0,b.jsx)(v.Z,{})})})]}),(0,b.jsx)(f.Z,{isModal:!0}),(0,b.jsx)(s.Z,{open:F,className:p.snackBarModal,onClose:function(){P(!1),j("")},message:w,ContentProps:{className:"".concat(p.snackBar," ").concat(Z&&"error"===Z.type?p.errorSnackBar:"")},autoHideDuration:Z&&"error"===Z.type?1e4:5e3}),(0,b.jsx)(u.Z,{className:g?"":p.content,children:m})]}))})))},84201:function(e,n,i){i.d(n,{R:function(){return o}});var o=function(e){var n={};return e.forEach((function(e){if(e.required&&"undefined"!==typeof e.value&&e.value.trim&&""===e.value.trim())n[e.fieldKey]="Field cannot be empty";else if(e.required||"undefined"===typeof e.value||!e.value.trim||""!==e.value.trim())if(e.customValidation&&e.customValidationMessage)n[e.fieldKey]=e.customValidationMessage;else if(e.pattern&&e.customPatternMessage){var i=new RegExp(e.pattern,"g");e.value&&""!==e.value.trim()&&!e.value.match(i)&&"undefined"!==typeof e.value&&(n[e.fieldKey]=e.customPatternMessage)}else;})),n}}}]);
//# sourceMappingURL=4966.c825dc1c.chunk.js.map