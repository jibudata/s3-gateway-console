"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[2032],{21435:function(e,n,t){var i=t(29439),o=t(1413),a=t(72791),l=t(27391),r=t(61889),s=t(30829),c=t(20068),d=t(13400),u=t(20165),p=t(3579),h=t(11135),v=t(72455),x=t(25787),m=t(23814),f=t(29945),b=t(28182),Z=t(80184),j=(0,v.Z)((function(e){return(0,h.Z)((0,o.Z)({},m.gM))}));function y(e){var n=j();return(0,Z.jsx)(l.Z,(0,o.Z)({InputProps:{classes:n}},e))}n.Z=(0,x.Z)((function(e){return(0,h.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},m.YI),m.Hr),{},{textBoxContainer:{flexGrow:1,position:"relative"},overlayAction:{position:"absolute",right:5,top:6,"& svg":{maxWidth:15,maxHeight:15},"&.withLabel":{top:5}}}))}))((function(e){var n=e.label,t=e.onChange,l=e.value,h=e.id,v=e.name,x=e.type,m=void 0===x?"text":x,j=e.autoComplete,C=void 0===j?"off":j,g=e.disabled,N=void 0!==g&&g,P=e.multiline,L=void 0!==P&&P,z=e.tooltip,I=void 0===z?"":z,R=e.index,k=void 0===R?0:R,w=e.error,M=void 0===w?"":w,T=e.required,F=void 0!==T&&T,A=e.placeholder,B=void 0===A?"":A,D=e.min,O=e.max,W=e.overlayId,E=e.overlayIcon,H=void 0===E?null:E,S=e.overlayObject,K=void 0===S?null:S,G=e.extraInputProps,_=void 0===G?{}:G,q=e.overlayAction,V=e.noLabelMinWidth,Y=void 0!==V&&V,J=e.pattern,Q=void 0===J?"":J,U=e.autoFocus,X=void 0!==U&&U,$=e.classes,ee=e.className,ne=void 0===ee?"":ee,te=e.onKeyPress,ie=e.onFocus,oe=e.onPaste,ae=(0,o.Z)({"data-index":k},_),le=(0,a.useState)(!1),re=(0,i.Z)(le,2),se=re[0],ce=re[1];"number"===m&&D&&(ae.min=D),"number"===m&&O&&(ae.max=O),""!==Q&&(ae.pattern=Q);var de=H,ue=m;return"password"===m&&null===H&&(de=se?(0,Z.jsx)(u.Z,{}):(0,Z.jsx)(p.Z,{}),ue=se?"text":"password"),(0,Z.jsx)(a.Fragment,{children:(0,Z.jsxs)(r.ZP,{container:!0,className:(0,b.Z)(""!==ne?ne:"",""!==M?$.errorInField:$.inputBoxContainer),children:[""!==n&&(0,Z.jsxs)(s.Z,{htmlFor:h,className:Y?$.noMinWidthLabel:$.inputLabel,children:[(0,Z.jsxs)("span",{children:[n,F?"*":""]}),""!==I&&(0,Z.jsx)("div",{className:$.tooltipContainer,children:(0,Z.jsx)(c.Z,{title:I,placement:"top-start",children:(0,Z.jsx)("div",{className:$.tooltip,children:(0,Z.jsx)(f.byK,{})})})})]}),(0,Z.jsxs)("div",{className:$.textBoxContainer,children:[(0,Z.jsx)(y,{id:h,name:v,fullWidth:!0,value:l,autoFocus:X,disabled:N,onChange:t,type:ue,multiline:L,autoComplete:C,inputProps:ae,error:""!==M,helperText:M,placeholder:B,className:$.inputRebase,onKeyPress:te,onFocus:ie,onPaste:oe}),de&&(0,Z.jsx)("div",{className:"".concat($.overlayAction," ").concat(""!==n?"withLabel":""),children:(0,Z.jsx)(d.Z,{onClick:q?function(){q()}:function(){return ce(!se)},id:W,size:"small",disableFocusRipple:!1,disableRipple:!1,disableTouchRipple:!1,children:de})}),K&&(0,Z.jsx)("div",{className:"".concat($.overlayAction," ").concat(""!==n?"withLabel":""),children:K})]})]})})}))},16502:function(e,n,t){t(72791);var i=t(11135),o=t(25787),a=t(80184);n.Z=(0,o.Z)((function(e){return(0,i.Z)({headerContainer:{backgroundColor:"#e78794",borderRadius:3,marginBottom:20,padding:1,paddingBottom:15},labelHeadline:{color:"#000000",fontSize:14,marginLeft:20},labelText:{color:"#000000",fontSize:14,marginLeft:20,marginRight:40}})}))((function(e){var n=e.classes,t=e.label,i=e.title;return(0,a.jsxs)("div",{className:n.headerContainer,children:[(0,a.jsx)("h4",{className:n.labelHeadline,children:i}),(0,a.jsx)("div",{className:n.labelText,children:t})]})}))},62032:function(e,n,t){t.r(n);var i=t(29439),o=t(72791),a=t(51691),l=t(61889),r=t(9505),s=t(23508),c=t(87995),d=t(81551),u=t(16502),p=t(21435),h=t(29945),v=t(80184);n.default=function(e){var n=e.closeDeleteModalAndRefresh,t=e.deleteOpen,x=e.selectedItem,m=e.endpoint,f=e.element,b=(0,d.TL)(),Z=(0,r.Z)((function(){return n(!0)}),(function(e){return b((0,c.Ih)(e))})),j=(0,i.Z)(Z,2),y=j[0],C=j[1],g=(0,o.useState)(""),N=(0,i.Z)(g,2),P=N[0],L=N[1];if(!x)return null;return(0,v.jsx)(s.Z,{title:"Delete ".concat(f),confirmText:"Delete",isOpen:t,titleIcon:(0,v.jsx)(h.NvT,{}),isLoading:y,onConfirm:function(){C("DELETE","".concat(m).concat(x))},onClose:function(){return n(!1)},confirmButtonProps:{disabled:P!==x||y},confirmationContent:(0,v.jsxs)(a.Z,{children:[(0,v.jsx)(l.ZP,{item:!0,xs:12,children:(0,v.jsx)(u.Z,{title:"WARNING",label:"Please note that this is a dangerous operation. Once a key has been deleted all data that has been encrypted with it cannot be decrypted anymore, and therefore, is lost."})}),"To continue please type ",(0,v.jsx)("b",{children:x})," in the box.",(0,v.jsx)(l.ZP,{item:!0,xs:12,children:(0,v.jsx)(p.Z,{id:"retype-key",name:"retype-key",onChange:function(e){L(e.target.value)},onPaste:function(e){return e.preventDefault()},label:"",value:P})})]})})}},3579:function(e,n,t){var i=t(64836);n.Z=void 0;var o=i(t(45649)),a=t(80184),l=(0,o.default)((0,a.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"RemoveRedEye");n.Z=l},20165:function(e,n,t){var i=t(64836);n.Z=void 0;var o=i(t(45649)),a=t(80184),l=(0,o.default)((0,a.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");n.Z=l}}]);
//# sourceMappingURL=2032.54dedb37.chunk.js.map