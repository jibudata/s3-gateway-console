"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[7007],{37007:function(e,n,t){t.r(n);var o=t(23430),s=t(18489),i=(t(50390),t(38342)),r=t.n(i),a=t(34424),c=t(23473),l=t(86509),u=t(4285),d=t(72462),m=t(44149),f=t(21639),Z=t(60656),p=t(86362),x=t(62559),v={setErrorSnackMessage:m.Ih},C=(0,a.$j)((function(e){var n=e.system;return{distributedSetup:r()(n,"distributedSetup",!1)}}),v);n.default=(0,u.Z)((function(e){return(0,l.Z)((0,s.Z)({},d.oO))}))(C((function(e){var n=e.deleteOpen,t=e.currentTags,i=e.selectedTag,r=e.onCloseAndUpdate,a=e.bucketName,l=e.setErrorSnackMessage,u=e.classes,d=(0,o.Z)(i,2),m=d[0],v=d[1],C=(0,f.Z)((function(){return r(!0)}),(function(e){return l(e)})),h=(0,o.Z)(C,2),j=h[0],b=h[1];if(!i)return null;return(0,x.jsx)(Z.Z,{title:"Delete Tag",confirmText:"Delete",isOpen:n,titleIcon:(0,x.jsx)(p.Nv,{}),isLoading:j,onConfirm:function(){var e=(0,s.Z)({},t);delete e[m],b("PUT","/api/v1/buckets/".concat(a,"/tags"),{tags:e})},onClose:function(){return r(!1)},confirmationContent:(0,x.jsxs)(c.Z,{children:["Are you sure you want to delete the tag"," ",(0,x.jsxs)("b",{className:u.wrapText,children:[m," : ",v]})," ","?"]})})})))},60656:function(e,n,t){var o=t(18489),s=t(50390),i=t(84402),r=t(78426),a=t(93085),c=t(7887),l=t(66946),u=t(7521),d=t(95467),m=t(21278),f=t(86509),Z=t(4285),p=t(72462),x=t(62559);n.Z=(0,Z.Z)((function(e){return(0,f.Z)((0,o.Z)({},p.Qw))}))((function(e){var n=e.isOpen,t=void 0!==n&&n,f=e.onClose,Z=e.onCancel,p=e.onConfirm,v=e.classes,C=void 0===v?{}:v,h=e.title,j=void 0===h?"":h,b=e.isLoading,g=e.confirmationContent,k=e.cancelText,N=void 0===k?"Cancel":k,T=e.confirmText,y=void 0===T?"Confirm":T,w=e.confirmButtonProps,B=void 0===w?{}:w,P=e.cancelButtonProps,I=void 0===P?{}:P,O=e.titleIcon,S=void 0===O?null:O;return(0,x.jsxs)(i.Z,{open:t,onClose:function(e,n){"backdropClick"!==n&&f()},className:C.root,sx:{"& .MuiPaper-root":{padding:"1rem 2rem 2rem 1rem"}},children:[(0,x.jsxs)(r.Z,{className:C.title,children:[(0,x.jsxs)("div",{className:C.titleText,children:[S," ",j]}),(0,x.jsx)("div",{className:C.closeContainer,children:(0,x.jsx)(d.Z,{"aria-label":"close",className:C.closeButton,onClick:f,disableRipple:!0,size:"small",children:(0,x.jsx)(m.Z,{})})})]}),(0,x.jsx)(a.Z,{className:C.content,children:g}),(0,x.jsxs)(c.Z,{className:C.actions,children:[(0,x.jsx)(l.Z,(0,o.Z)((0,o.Z)({className:C.cancelButton,onClick:Z||f,disabled:b,type:"button"},I),{},{variant:"outlined",color:"primary",id:"confirm-cancel",children:N})),(0,x.jsx)(u.Z,(0,o.Z)((0,o.Z)({className:C.confirmButton,type:"button",onClick:p,loading:b,disabled:b,variant:"outlined",color:"secondary",loadingPosition:"start",startIcon:(0,x.jsx)(s.Fragment,{}),autoFocus:!0,id:"confirm-ok"},B),{},{children:y}))]})]})}))}}]);
//# sourceMappingURL=7007.d9ef3b97.chunk.js.map