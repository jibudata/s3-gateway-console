"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[4121,609],{21639:function(n,o,t){var i=t(23430),a=t(50390),r=t(30324);o.Z=function(n,o){var t=(0,a.useState)(!1),e=(0,i.Z)(t,2),c=e[0],s=e[1];return[c,function(t,i,a){s(!0),r.Z.invoke(t,i,a).then((function(o){s(!1),n(o)})).catch((function(n){s(!1),o(n)}))}]}},60656:function(n,o,t){var i=t(18489),a=t(50390),r=t(84402),e=t(78426),c=t(93085),s=t(7887),d=t(66946),l=t(14476),u=t(95467),g=t(21278),f=t(86509),v=t(4285),Z=t(72462),p=t(62559);o.Z=(0,v.Z)((function(n){return(0,f.Z)((0,i.Z)({},Z.Qw))}))((function(n){var o=n.isOpen,t=void 0!==o&&o,f=n.onClose,v=n.onCancel,Z=n.onConfirm,m=n.classes,h=void 0===m?{}:m,x=n.title,I=void 0===x?"":x,b=n.isLoading,j=n.confirmationContent,P=n.cancelText,y=void 0===P?"Cancel":P,S=n.confirmText,L=void 0===S?"Confirm":S,C=n.confirmButtonProps,w=void 0===C?{}:C,M=n.cancelButtonProps,k=void 0===M?{}:M,N=n.titleIcon,E=void 0===N?null:N;return(0,p.jsxs)(r.Z,{open:t,onClose:function(n,o){"backdropClick"!==o&&f()},className:h.root,sx:{"& .MuiPaper-root":{padding:"1rem 2rem 2rem 1rem"}},children:[(0,p.jsxs)(e.Z,{className:h.title,children:[(0,p.jsxs)("div",{className:h.titleText,children:[E," ",I]}),(0,p.jsx)("div",{className:h.closeContainer,children:(0,p.jsx)(u.Z,{"aria-label":"close",className:h.closeButton,onClick:f,disableRipple:!0,size:"small",children:(0,p.jsx)(g.Z,{})})})]}),(0,p.jsx)(c.Z,{className:h.content,children:j}),(0,p.jsxs)(s.Z,{className:h.actions,children:[(0,p.jsx)(d.Z,(0,i.Z)((0,i.Z)({className:h.cancelButton,onClick:v||f,disabled:b,type:"button"},k),{},{variant:"outlined",color:"primary",id:"confirm-cancel",children:y})),(0,p.jsx)(l.Z,(0,i.Z)((0,i.Z)({className:h.confirmButton,type:"button",onClick:Z,loading:b,disabled:b,variant:"outlined",color:"secondary",loadingPosition:"start",startIcon:(0,p.jsx)(a.Fragment,{}),autoFocus:!0,id:"confirm-ok"},w),{},{children:L}))]})]})}))},24121:function(n,o,t){t.r(o);var i=t(23430),a=(t(50390),t(34424)),r=t(23473),e=t(44149),c=t(21639),s=t(60656),d=t(86362),l=t(62559),u={setErrorSnackMessage:e.Ih},g=(0,a.$j)(null,u);o.default=g((function(n){var o=n.closeDeleteModalAndRefresh,t=n.deleteOpen,a=n.selectedPolicy,e=n.setErrorSnackMessage,u=(0,c.Z)((function(){return o(!0)}),(function(n){return e(n)})),g=(0,i.Z)(u,2),f=g[0],v=g[1];if(!a)return null;return(0,l.jsx)(s.Z,{title:"Delete Policy",confirmText:"Delete",isOpen:t,titleIcon:(0,l.jsx)(d.Nv,{}),isLoading:f,onConfirm:function(){v("DELETE","/api/v1/policy?name=".concat(a))},onClose:function(){return o(!1)},confirmationContent:(0,l.jsxs)(r.Z,{children:["Are you sure you want to delete policy ",(0,l.jsx)("br",{}),(0,l.jsx)("b",{children:a}),"?"]})})}))},21278:function(n,o,t){var i=t(64119);o.Z=void 0;var a=i(t(66830)),r=t(62559),e=(0,a.default)((0,r.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");o.Z=e},14476:function(n,o,t){t.d(o,{Z:function(){return b}});var i=t(36222),a=t(46633),r=t(18207),e=t(50390),c=t(91442),s=t(4733),d=t(50076),l=t(8208),u=t(15573),g=t(66946),f=t(18201),v=t(10594);function Z(n){return(0,v.Z)("MuiLoadingButton",n)}var p=(0,t(43349).Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),m=t(62559),h=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],x=(0,l.ZP)(g.Z,{shouldForwardProp:function(n){return function(n){return"ownerState"!==n&&"theme"!==n&&"sx"!==n&&"as"!==n&&"classes"!==n}(n)||"classes"===n},name:"MuiLoadingButton",slot:"Root",overridesResolver:function(n,o){return[o.root,o.startIconLoadingStart&&(0,i.Z)({},"& .".concat(p.startIconLoadingStart),o.startIconLoadingStart),o.endIconLoadingEnd&&(0,i.Z)({},"& .".concat(p.endIconLoadingEnd),o.endIconLoadingEnd)]}})((function(n){var o=n.ownerState,t=n.theme;return(0,r.Z)((0,i.Z)({},"& .".concat(p.startIconLoadingStart,", & .").concat(p.endIconLoadingEnd),{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0}),"center"===o.loadingPosition&&(0,i.Z)({transition:t.transitions.create(["background-color","box-shadow","border-color"],{duration:t.transitions.duration.short})},"&.".concat(p.loading),{color:"transparent"}),"start"===o.loadingPosition&&o.fullWidth&&(0,i.Z)({},"& .".concat(p.startIconLoadingStart,", & .").concat(p.endIconLoadingEnd),{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0,marginRight:-8}),"end"===o.loadingPosition&&o.fullWidth&&(0,i.Z)({},"& .".concat(p.startIconLoadingStart,", & .").concat(p.endIconLoadingEnd),{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0,marginLeft:-8}))})),I=(0,l.ZP)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:function(n,o){var t=n.ownerState;return[o.loadingIndicator,o["loadingIndicator".concat((0,c.Z)(t.loadingPosition))]]}})((function(n){var o=n.theme,t=n.ownerState;return(0,r.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===t.loadingPosition&&("outlined"===t.variant||"contained"===t.variant)&&{left:14},"start"===t.loadingPosition&&"text"===t.variant&&{left:6},"center"===t.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:o.palette.action.disabled},"end"===t.loadingPosition&&("outlined"===t.variant||"contained"===t.variant)&&{right:14},"end"===t.loadingPosition&&"text"===t.variant&&{right:6},"start"===t.loadingPosition&&t.fullWidth&&{position:"relative",left:-10},"end"===t.loadingPosition&&t.fullWidth&&{position:"relative",right:-10})})),b=e.forwardRef((function(n,o){var t=(0,u.Z)({props:n,name:"MuiLoadingButton"}),i=t.children,l=t.disabled,g=void 0!==l&&l,v=t.id,p=t.loading,b=void 0!==p&&p,j=t.loadingIndicator,P=t.loadingPosition,y=void 0===P?"center":P,S=t.variant,L=void 0===S?"text":S,C=(0,a.Z)(t,h),w=(0,s.Z)(v),M=null!=j?j:(0,m.jsx)(f.Z,{"aria-labelledby":w,color:"inherit",size:16}),k=(0,r.Z)({},t,{disabled:g,loading:b,loadingIndicator:M,loadingPosition:y,variant:L}),N=function(n){var o=n.loading,t=n.loadingPosition,i=n.classes,a={root:["root",o&&"loading"],startIcon:[o&&"startIconLoading".concat((0,c.Z)(t))],endIcon:[o&&"endIconLoading".concat((0,c.Z)(t))],loadingIndicator:["loadingIndicator",o&&"loadingIndicator".concat((0,c.Z)(t))]},e=(0,d.Z)(a,Z,i);return(0,r.Z)({},i,e)}(k);return(0,m.jsx)(x,(0,r.Z)({disabled:g||b,id:w,ref:o},C,{variant:L,classes:N,ownerState:k,children:"end"===k.loadingPosition?(0,m.jsxs)(e.Fragment,{children:[i,b&&(0,m.jsx)(I,{className:N.loadingIndicator,ownerState:k,children:M})]}):(0,m.jsxs)(e.Fragment,{children:[b&&(0,m.jsx)(I,{className:N.loadingIndicator,ownerState:k,children:M}),i]})}))}))},7887:function(n,o,t){t.d(o,{Z:function(){return Z}});var i=t(1048),a=t(32793),r=t(50390),e=t(44977),c=t(50076),s=t(8208),d=t(15573),l=t(10594);function u(n){return(0,l.Z)("MuiDialogActions",n)}(0,t(43349).Z)("MuiDialogActions",["root","spacing"]);var g=t(62559),f=["className","disableSpacing"],v=(0,s.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:function(n,o){var t=n.ownerState;return[o.root,!t.disableSpacing&&o.spacing]}})((function(n){var o=n.ownerState;return(0,a.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!o.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),Z=r.forwardRef((function(n,o){var t=(0,d.Z)({props:n,name:"MuiDialogActions"}),r=t.className,s=t.disableSpacing,l=void 0!==s&&s,Z=(0,i.Z)(t,f),p=(0,a.Z)({},t,{disableSpacing:l}),m=function(n){var o=n.classes,t={root:["root",!n.disableSpacing&&"spacing"]};return(0,c.Z)(t,u,o)}(p);return(0,g.jsx)(v,(0,a.Z)({className:(0,e.Z)(m.root,r),ownerState:p,ref:o},Z))}))},23473:function(n,o,t){t.d(o,{Z:function(){return Z}});var i=t(1048),a=t(32793),r=t(50390),e=t(50076),c=t(8208),s=t(15573),d=t(35477),l=t(10594);function u(n){return(0,l.Z)("MuiDialogContentText",n)}(0,t(43349).Z)("MuiDialogContentText",["root"]);var g=t(62559),f=["children"],v=(0,c.ZP)(d.Z,{shouldForwardProp:function(n){return(0,c.FO)(n)||"classes"===n},name:"MuiDialogContentText",slot:"Root",overridesResolver:function(n,o){return o.root}})({}),Z=r.forwardRef((function(n,o){var t=(0,s.Z)({props:n,name:"MuiDialogContentText"}),r=(0,i.Z)(t,f),c=function(n){var o=n.classes,t=(0,e.Z)({root:["root"]},u,o);return(0,a.Z)({},o,t)}(r);return(0,g.jsx)(v,(0,a.Z)({component:"p",variant:"body1",color:"text.secondary",ref:o,ownerState:r},t,{classes:c}))}))},18207:function(n,o,t){function i(){return i=Object.assign||function(n){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},i.apply(this,arguments)}t.d(o,{Z:function(){return i}})},46633:function(n,o,t){function i(n,o){if(null==n)return{};var t,i,a={},r=Object.keys(n);for(i=0;i<r.length;i++)t=r[i],o.indexOf(t)>=0||(a[t]=n[t]);return a}t.d(o,{Z:function(){return i}})}}]);
//# sourceMappingURL=4121.ccb4caf8.chunk.js.map