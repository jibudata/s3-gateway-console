"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[5947],{66964:function(e,n,t){var a=t(18489),i=t(50390),s=t(12066),o=t(25594),l=t(36554),r=t(94187),c=t(95467),d=t(86509),u=t(62449),m=t(4285),p=t(72462),h=t(97538),v=t(44977),x=t(62559),Z=(0,u.Z)((function(e){return(0,d.Z)((0,a.Z)({},p.gM))}));function f(e){var n=Z();return(0,x.jsx)(s.Z,(0,a.Z)({InputProps:{classes:n}},e))}n.Z=(0,m.Z)((function(e){return(0,d.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},p.YI),p.Hr),{},{textBoxContainer:{flexGrow:1,position:"relative"},overlayAction:{position:"absolute",right:5,top:6,"& svg":{maxWidth:15,maxHeight:15},"&.withLabel":{top:5}},inputLabel:(0,a.Z)((0,a.Z)({},p.YI.inputLabel),{},{fontWeight:"normal"})}))}))((function(e){var n=e.label,t=e.onChange,s=e.value,d=e.id,u=e.name,m=e.type,p=void 0===m?"text":m,Z=e.autoComplete,j=void 0===Z?"off":Z,b=e.disabled,C=void 0!==b&&b,g=e.multiline,y=void 0!==g&&g,P=e.tooltip,N=void 0===P?"":P,k=e.index,L=void 0===k?0:k,S=e.error,w=void 0===S?"":S,F=e.required,I=void 0!==F&&F,T=e.placeholder,M=void 0===T?"":T,B=e.min,E=e.max,V=e.overlayIcon,A=void 0===V?null:V,R=e.overlayObject,K=void 0===R?null:R,O=e.extraInputProps,W=void 0===O?{}:O,D=e.overlayAction,z=e.noLabelMinWidth,H=void 0!==z&&z,q=e.pattern,G=void 0===q?"":q,Y=e.autoFocus,$=void 0!==Y&&Y,_=e.classes,Q=e.className,U=void 0===Q?"":Q,J=e.onKeyPress,X=(0,a.Z)({"data-index":L},W);return"number"===p&&B&&(X.min=B),"number"===p&&E&&(X.max=E),""!==G&&(X.pattern=G),(0,x.jsx)(i.Fragment,{children:(0,x.jsxs)(o.ZP,{container:!0,className:(0,v.Z)(""!==U?U:"",""!==w?_.errorInField:_.inputBoxContainer),children:[""!==n&&(0,x.jsxs)(l.Z,{htmlFor:d,className:H?_.noMinWidthLabel:_.inputLabel,children:[(0,x.jsxs)("span",{children:[n,I?"*":""]}),""!==N&&(0,x.jsx)("div",{className:_.tooltipContainer,children:(0,x.jsx)(r.Z,{title:N,placement:"top-start",children:(0,x.jsx)("div",{className:_.tooltip,children:(0,x.jsx)(h.Z,{})})})})]}),(0,x.jsxs)("div",{className:_.textBoxContainer,children:[(0,x.jsx)(f,{id:d,name:u,fullWidth:!0,value:s,autoFocus:$,disabled:C,onChange:t,type:p,multiline:y,autoComplete:j,inputProps:X,error:""!==w,helperText:w,placeholder:M,className:_.inputRebase,onKeyPress:J}),A&&(0,x.jsx)("div",{className:"".concat(_.overlayAction," ").concat(""!==n?"withLabel":""),children:(0,x.jsx)(c.Z,{onClick:D?function(){D()}:function(){return null},size:"small",disableFocusRipple:!1,disableRipple:!1,disableTouchRipple:!1,children:A})}),K&&(0,x.jsx)("div",{className:"".concat(_.overlayAction," ").concat(""!==n?"withLabel":""),children:K})]})]})})}))},21639:function(e,n,t){var a=t(23430),i=t(50390),s=t(30324);n.Z=function(e,n){var t=(0,i.useState)(!1),o=(0,a.Z)(t,2),l=o[0],r=o[1];return[l,function(t,a,i){r(!0),s.Z.invoke(t,a,i).then((function(n){r(!1),e(n)})).catch((function(e){r(!1),n(e)}))}]}},60656:function(e,n,t){var a=t(18489),i=t(50390),s=t(84402),o=t(78426),l=t(93085),r=t(7887),c=t(66946),d=t(14476),u=t(95467),m=t(21278),p=t(86509),h=t(4285),v=t(72462),x=t(62559);n.Z=(0,h.Z)((function(e){return(0,p.Z)((0,a.Z)({},v.Qw))}))((function(e){var n=e.isOpen,t=void 0!==n&&n,p=e.onClose,h=e.onCancel,v=e.onConfirm,Z=e.classes,f=void 0===Z?{}:Z,j=e.title,b=void 0===j?"":j,C=e.isLoading,g=e.confirmationContent,y=e.cancelText,P=void 0===y?"Cancel":y,N=e.confirmText,k=void 0===N?"Confirm":N,L=e.confirmButtonProps,S=void 0===L?{}:L,w=e.cancelButtonProps,F=void 0===w?{}:w,I=e.titleIcon,T=void 0===I?null:I;return(0,x.jsxs)(s.Z,{open:t,onClose:function(e,n){"backdropClick"!==n&&p()},className:f.root,sx:{"& .MuiPaper-root":{padding:"1rem 2rem 2rem 1rem"}},children:[(0,x.jsxs)(o.Z,{className:f.title,children:[(0,x.jsxs)("div",{className:f.titleText,children:[T," ",b]}),(0,x.jsx)("div",{className:f.closeContainer,children:(0,x.jsx)(u.Z,{"aria-label":"close",className:f.closeButton,onClick:p,disableRipple:!0,size:"small",children:(0,x.jsx)(m.Z,{})})})]}),(0,x.jsx)(l.Z,{className:f.content,children:g}),(0,x.jsxs)(r.Z,{className:f.actions,children:[(0,x.jsx)(c.Z,(0,a.Z)((0,a.Z)({className:f.cancelButton,onClick:h||p,disabled:C,type:"button"},F),{},{variant:"outlined",color:"primary",children:P})),(0,x.jsx)(d.Z,(0,a.Z)((0,a.Z)({className:f.confirmButton,type:"button",onClick:v,loading:C,disabled:C,variant:"outlined",color:"secondary",loadingPosition:"start",startIcon:(0,x.jsx)(i.Fragment,{}),autoFocus:!0},S),{},{children:k}))]})]})}))},75947:function(e,n,t){t.r(n);var a=t(23430),i=t(18489),s=t(50390),o=t(38342),l=t.n(o),r=t(34424),c=t(86509),d=t(4285),u=t(25594),m=t(12066),p=t(65771),h=t(24442),v=t(72462),x=t(44149),Z=t(30324),f=t(8174),j=t(13336),b=t(53421),C=t(62559),g={setErrorSnackMessage:x.Ih},y=(0,r.$j)(null,g);n.default=(0,d.Z)((function(e){return(0,c.Z)((0,i.Z)((0,i.Z)((0,i.Z)({tableWrapper:{height:"calc(100vh - 267px)"}},v.OR),v.qg),(0,v.Bz)(e.spacing(4))))}))(y((function(e){var n=e.classes,t=e.setErrorSnackMessage,o=(0,s.useState)([]),r=(0,a.Z)(o,2),c=r[0],d=r[1],v=(0,s.useState)(""),x=(0,a.Z)(v,2),g=x[0],y=x[1],P=(0,s.useState)(!0),N=(0,a.Z)(P,2),k=N[0],L=N[1],S=(0,s.useState)(null),w=(0,a.Z)(S,2),F=w[0],I=w[1],T=(0,s.useState)(!1),M=(0,a.Z)(T,2),B=M[0],E=M[1];(0,s.useEffect)((function(){k&&Z.Z.invoke("GET","/api/v1/list-pvcs").then((function(e){var n=l()(e,"pvcs",[]);d(n||[]),L(!1)})).catch((function(e){L(!1),t(e)}))}),[k,t]);var V=c.filter((function(e){return e.name.toLowerCase().includes(g.toLowerCase())})),A=[{type:"view",onClick:function(e){h.Z.push("/namespaces/".concat(e.namespace,"/tenants/").concat(e.tenant))}},{type:"delete",onClick:function(e){var n=(0,i.Z)((0,i.Z)({},e),{},{tenant:e.tenant,namespace:e.namespace});I(n),E(!0)}}];return(0,C.jsxs)(s.Fragment,{children:[B&&(0,C.jsx)(b.default,{deleteOpen:B,selectedPVC:F,closeDeleteModalAndRefresh:function(e){E(!1),L(!0)}}),(0,C.jsx)("h1",{className:n.sectionTitle,children:"Persistent Volumes Claims"}),(0,C.jsx)(u.ZP,{item:!0,xs:12,className:n.actionsTray,children:(0,C.jsx)(m.Z,{placeholder:"Search Volumes (PVCs)",className:n.searchField,id:"search-resource",label:"",InputProps:{disableUnderline:!0,startAdornment:(0,C.jsx)(p.Z,{position:"start",children:(0,C.jsx)(j.Z,{})})},onChange:function(e){y(e.target.value)},variant:"standard"})}),(0,C.jsx)(u.ZP,{item:!0,xs:12,children:(0,C.jsx)("br",{})}),(0,C.jsx)(u.ZP,{item:!0,xs:12,children:(0,C.jsx)(f.Z,{itemActions:A,columns:[{label:"Name",elementKey:"name"},{label:"Namespace",elementKey:"namespace",width:90},{label:"Status",elementKey:"status",width:120},{label:"Tenant",renderFullObject:!0,renderFunction:function(e){return"".concat(e.namespace,"/").concat(e.tenant)}},{label:"Capacity",elementKey:"capacity",width:90},{label:"Storage Class",elementKey:"storageClass"}],isLoading:k,records:V,entityName:"PVCs",idField:"name",customPaperHeight:n.tableWrapper})})]})})))},53421:function(e,n,t){t.r(n);var a=t(23430),i=t(50390),s=t(23473),o=t(66964),l=t(25594),r=t(34424),c=t(44149),d=t(21639),u=t(60656),m=t(85615),p=t(62559),h=(0,r.$j)(null,{setErrorSnackMessage:c.Ih});n.default=h((function(e){var n=e.deleteOpen,t=e.selectedPVC,r=e.closeDeleteModalAndRefresh,c=e.setErrorSnackMessage,h=(0,i.useState)(""),v=(0,a.Z)(h,2),x=v[0],Z=v[1],f=(0,d.Z)((function(){return r(!0)}),(function(e){return c(e)})),j=(0,a.Z)(f,2),b=j[0],C=j[1];return(0,p.jsx)(u.Z,{title:"Delete PVC",confirmText:"Delete",isOpen:n,titleIcon:(0,p.jsx)(m.Nv,{}),isLoading:b,onConfirm:function(){x===t.name?C("DELETE","/api/v1/namespaces/".concat(t.namespace,"/tenants/").concat(t.tenant,"/pvc/").concat(t.name)):c({errorMessage:"PVC name is incorrect",detailedError:""})},onClose:function(){return r(!1)},confirmButtonProps:{disabled:x!==t.name||b},confirmationContent:(0,p.jsxs)(s.Z,{children:["To continue please type ",(0,p.jsx)("b",{children:t.name})," in the box.",(0,p.jsx)(l.ZP,{item:!0,xs:12,children:(0,p.jsx)(o.Z,{id:"retype-PVC",name:"retype-PVC",onChange:function(e){Z(e.target.value)},label:"",value:x})})]})})}))}}]);
//# sourceMappingURL=5947.dda226b6.chunk.js.map