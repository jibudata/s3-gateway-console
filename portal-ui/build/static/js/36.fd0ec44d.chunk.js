(this["webpackJsonpportal-ui"]=this["webpackJsonpportal-ui"]||[]).push([[36,9,47,55,56,57,58,59,60],{391:function(t,e,a){"use strict";var n=a(2),o=Object(n.createContext)({});e.a=o},392:function(t,e,a){"use strict";a.d(e,"b",(function(){return r}));var n=a(95),o=a(118);function r(t){return Object(n.a)("MuiDialogTitle",t)}var i=Object(o.a)("MuiDialogTitle",["root"]);e.a=i},394:function(t,e,a){"use strict";a.d(e,"b",(function(){return r}));var n=a(95),o=a(118);function r(t){return Object(n.a)("MuiDialog",t)}var i=Object(o.a)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]);e.a=i},411:function(t,e,a){"use strict";var n=a(1),o=a(2),r=a.n(o),i=a(413),c=a(414),s=a(415),l=a(455),d=a(383),u=a(462),b=a(386),p=a(124),j=a.n(p),v=a(316),f=a(320),O=a(122),g=a(0);e.a=Object(f.a)((function(t){return Object(v.a)(Object(n.a)({},O.h))}))((function(t){var e=t.isOpen,a=void 0!==e&&e,o=t.onClose,p=t.onCancel,v=t.onConfirm,f=t.classes,O=void 0===f?{}:f,m=t.title,h=void 0===m?"":m,x=t.isLoading,S=t.confirmationContent,k=t.cancelText,w=void 0===k?"Cancel":k,y=t.confirmText,C=void 0===y?"Confirm":y,P=t.confirmButtonProps,M=void 0===P?{}:P,D=t.cancelButtonProps,I=void 0===D?{}:D,W=t.titleIcon,N=void 0===W?null:W;return Object(g.jsxs)(i.a,{open:a,onClose:function(t,e){"backdropClick"!==e&&o()},className:O.root,sx:{"& .MuiPaper-root":{padding:"1rem 2rem 2rem 1rem"}},children:[Object(g.jsxs)(c.a,{className:O.title,children:[Object(g.jsxs)("div",{className:O.titleText,children:[N," ",h]}),Object(g.jsx)("div",{className:O.closeContainer,children:Object(g.jsx)(b.a,{"aria-label":"close",className:O.closeButton,onClick:o,disableRipple:!0,size:"small",children:Object(g.jsx)(j.a,{})})})]}),Object(g.jsx)(s.a,{className:O.content,children:S}),Object(g.jsxs)(l.a,{className:O.actions,children:[Object(g.jsx)(d.a,Object(n.a)(Object(n.a)({className:O.cancelButton,onClick:p||o,disabled:x,type:"button"},I),{},{variant:"outlined",color:"primary",children:w})),Object(g.jsx)(u.a,Object(n.a)(Object(n.a)({className:O.confirmButton,type:"button",onClick:v,loading:x,disabled:x,variant:"outlined",color:"secondary",loadingPosition:"start",startIcon:Object(g.jsx)(r.a.Fragment,{}),autoFocus:!0},M),{},{children:C}))]})]})}))},413:function(t,e,a){"use strict";var n=a(5),o=a(4),r=a(3),i=a(2),c=(a(12),a(8)),s=a(117),l=a(312),d=a(11),u=a(379),b=a(368),p=a(28),j=a(387),v=a(14),f=a(9),O=a(394),g=a(391),m=a(382),h=a(0),x=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],S=Object(f.a)(m.a,{name:"MuiDialog",slot:"Backdrop",overrides:function(t,e){return e.backdrop}})({zIndex:-1}),k=Object(f.a)(u.a,{name:"MuiDialog",slot:"Root",overridesResolver:function(t,e){return e.root}})({"@media print":{position:"absolute !important"}}),w=Object(f.a)("div",{name:"MuiDialog",slot:"Container",overridesResolver:function(t,e){var a=t.ownerState;return[e.container,e["scroll".concat(Object(d.a)(a.scroll))]]}})((function(t){var e=t.ownerState;return Object(r.a)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===e.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===e.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})})),y=Object(f.a)(j.a,{name:"MuiDialog",slot:"Paper",overridesResolver:function(t,e){var a=t.ownerState;return[e.paper,e["scrollPaper".concat(Object(d.a)(a.scroll))],e["paperWidth".concat(Object(d.a)(String(a.maxWidth)))],a.fullWidth&&e.paperFullWidth,a.fullScreen&&e.paperFullScreen]}})((function(t){var e=t.theme,a=t.ownerState;return Object(r.a)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===a.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===a.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!a.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===a.maxWidth&&Object(n.a)({maxWidth:"px"===e.breakpoints.unit?Math.max(e.breakpoints.values.xs,444):"".concat(e.breakpoints.values.xs).concat(e.breakpoints.unit)},"&.".concat(O.a.paperScrollBody),Object(n.a)({},e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+64),{maxWidth:"calc(100% - 64px)"})),"xs"!==a.maxWidth&&Object(n.a)({maxWidth:"".concat(e.breakpoints.values[a.maxWidth]).concat(e.breakpoints.unit)},"&.".concat(O.a.paperScrollBody),Object(n.a)({},e.breakpoints.down(e.breakpoints.values[a.maxWidth]+64),{maxWidth:"calc(100% - 64px)"})),a.fullWidth&&{width:"calc(100% - 64px)"},a.fullScreen&&Object(n.a)({margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0},"&.".concat(O.a.paperScrollBody),{margin:0,maxWidth:"100%"}))})),C={enter:p.b.enteringScreen,exit:p.b.leavingScreen},P=i.forwardRef((function(t,e){var a=Object(v.a)({props:t,name:"MuiDialog"}),n=a["aria-describedby"],u=a["aria-labelledby"],p=a.BackdropComponent,f=a.BackdropProps,m=a.children,P=a.className,M=a.disableEscapeKeyDown,D=void 0!==M&&M,I=a.fullScreen,W=void 0!==I&&I,N=a.fullWidth,R=void 0!==N&&N,B=a.maxWidth,L=void 0===B?"sm":B,T=a.onBackdropClick,E=a.onClose,F=a.open,A=a.PaperComponent,z=void 0===A?j.a:A,K=a.PaperProps,Y=void 0===K?{}:K,X=a.scroll,H=void 0===X?"paper":X,J=a.TransitionComponent,q=void 0===J?b.a:J,G=a.transitionDuration,Q=void 0===G?C:G,U=a.TransitionProps,V=Object(o.a)(a,x),Z=Object(r.a)({},a,{disableEscapeKeyDown:D,fullScreen:W,fullWidth:R,maxWidth:L,scroll:H}),$=function(t){var e=t.classes,a=t.scroll,n=t.maxWidth,o=t.fullWidth,r=t.fullScreen,i={root:["root"],container:["container","scroll".concat(Object(d.a)(a))],paper:["paper","paperScroll".concat(Object(d.a)(a)),"paperWidth".concat(Object(d.a)(String(n))),o&&"paperFullWidth",r&&"paperFullScreen"]};return Object(s.a)(i,O.b,e)}(Z),_=i.useRef(),tt=Object(l.a)(u),et=i.useMemo((function(){return{titleId:tt}}),[tt]);return Object(h.jsx)(k,Object(r.a)({className:Object(c.a)($.root,P),BackdropProps:Object(r.a)({transitionDuration:Q,as:p},f),closeAfterTransition:!0,BackdropComponent:S,disableEscapeKeyDown:D,onClose:E,open:F,ref:e,onClick:function(t){_.current&&(_.current=null,T&&T(t),E&&E(t,"backdropClick"))},ownerState:Z},V,{children:Object(h.jsx)(q,Object(r.a)({appear:!0,in:F,timeout:Q,role:"presentation"},U,{children:Object(h.jsx)(w,{className:Object(c.a)($.container),onMouseDown:function(t){_.current=t.target===t.currentTarget},ownerState:Z,children:Object(h.jsx)(y,Object(r.a)({as:z,elevation:24,role:"dialog","aria-describedby":n,"aria-labelledby":tt},Y,{className:Object(c.a)($.paper,Y.className),ownerState:Z,children:Object(h.jsx)(g.a.Provider,{value:et,children:m})}))})}))}))}));e.a=P},414:function(t,e,a){"use strict";var n=a(3),o=a(4),r=a(2),i=(a(12),a(8)),c=a(117),s=a(96),l=a(9),d=a(14),u=a(392),b=a(391),p=a(0),j=["className","id"],v=Object(l.a)(s.a,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(t,e){return e.root}})({padding:"16px 24px",flex:"0 0 auto"}),f=r.forwardRef((function(t,e){var a=Object(d.a)({props:t,name:"MuiDialogTitle"}),s=a.className,l=a.id,f=Object(o.a)(a,j),O=a,g=function(t){var e=t.classes;return Object(c.a)({root:["root"]},u.b,e)}(O),m=r.useContext(b.a).titleId,h=void 0===m?l:m;return Object(p.jsx)(v,Object(n.a)({component:"h2",className:Object(i.a)(g.root,s),ownerState:O,ref:e,variant:"h6",id:h},f))}));e.a=f},415:function(t,e,a){"use strict";var n=a(5),o=a(4),r=a(3),i=a(2),c=(a(12),a(8)),s=a(117),l=a(9),d=a(14),u=a(95),b=a(118);function p(t){return Object(u.a)("MuiDialogContent",t)}Object(b.a)("MuiDialogContent",["root","dividers"]);var j=a(392),v=a(0),f=["className","dividers"],O=Object(l.a)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:function(t,e){var a=t.ownerState;return[e.root,a.dividers&&e.dividers]}})((function(t){var e=t.theme,a=t.ownerState;return Object(r.a)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},a.dividers?{padding:"16px 24px",borderTop:"1px solid ".concat(e.palette.divider),borderBottom:"1px solid ".concat(e.palette.divider)}:Object(n.a)({},".".concat(j.a.root," + &"),{paddingTop:0}))})),g=i.forwardRef((function(t,e){var a=Object(d.a)({props:t,name:"MuiDialogContent"}),n=a.className,i=a.dividers,l=void 0!==i&&i,u=Object(o.a)(a,f),b=Object(r.a)({},a,{dividers:l}),j=function(t){var e=t.classes,a={root:["root",t.dividers&&"dividers"]};return Object(s.a)(a,p,e)}(b);return Object(v.jsx)(O,Object(r.a)({className:Object(c.a)(j.root,n),ownerState:b,ref:e},u))}));e.a=g},432:function(t,e,a){"use strict";var n=a(16),o=a(2),r=a(53);e.a=function(t,e){var a=Object(o.useState)(!1),i=Object(n.a)(a,2),c=i[0],s=i[1];return[c,function(a,n,o){s(!0),r.a.invoke(a,n,o).then((function(e){s(!1),t(e)})).catch((function(t){s(!1),e(t)}))}]}},455:function(t,e,a){"use strict";var n=a(4),o=a(3),r=a(2),i=(a(12),a(8)),c=a(117),s=a(9),l=a(14),d=a(95),u=a(118);function b(t){return Object(d.a)("MuiDialogActions",t)}Object(u.a)("MuiDialogActions",["root","spacing"]);var p=a(0),j=["className","disableSpacing"],v=Object(s.a)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:function(t,e){var a=t.ownerState;return[e.root,!a.disableSpacing&&e.spacing]}})((function(t){var e=t.ownerState;return Object(o.a)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),f=r.forwardRef((function(t,e){var a=Object(l.a)({props:t,name:"MuiDialogActions"}),r=a.className,s=a.disableSpacing,d=void 0!==s&&s,u=Object(n.a)(a,j),f=Object(o.a)({},a,{disableSpacing:d}),O=function(t){var e=t.classes,a={root:["root",!t.disableSpacing&&"spacing"]};return Object(c.a)(a,b,e)}(f);return Object(p.jsx)(v,Object(o.a)({className:Object(i.a)(O.root,r),ownerState:f,ref:e},u))}));e.a=f},461:function(t,e,a){"use strict";var n=a(4),o=a(3),r=a(2),i=(a(12),a(117)),c=a(9),s=a(14),l=a(96),d=a(95),u=a(118);function b(t){return Object(d.a)("MuiDialogContentText",t)}Object(u.a)("MuiDialogContentText",["root"]);var p=a(0),j=["children"],v=Object(c.a)(l.a,{shouldForwardProp:function(t){return Object(c.b)(t)||"classes"===t},name:"MuiDialogContentText",slot:"Root",overridesResolver:function(t,e){return e.root}})({}),f=r.forwardRef((function(t,e){var a=Object(s.a)({props:t,name:"MuiDialogContentText"}),r=Object(n.a)(a,j),c=function(t){var e=t.classes,a=Object(i.a)({root:["root"]},b,e);return Object(o.a)({},e,a)}(r);return Object(p.jsx)(v,Object(o.a)({component:"p",variant:"body1",color:"text.secondary",ref:e,ownerState:r},a,{classes:c}))}));e.a=f},462:function(t,e,a){"use strict";var n=a(5),o=a(4),r=a(3),i=a(2),c=(a(12),a(11)),s=a(117),l=a(9),d=a(14),u=a(383),b=a(470),p=a(95),j=a(118);function v(t){return Object(p.a)("MuiLoadingButton",t)}var f=Object(j.a)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),O=a(0),g=["children","disabled","loading","loadingIndicator","loadingPosition","variant"],m=Object(l.a)(u.a,{shouldForwardProp:function(t){return function(t){return"ownerState"!==t&&"theme"!==t&&"sx"!==t&&"as"!==t&&"classes"!==t}(t)||"classes"===t},name:"MuiLoadingButton",slot:"Root",overridesResolver:function(t,e){return[e.root,e.startIconLoadingStart&&Object(n.a)({},"& .".concat(f.startIconLoadingStart),e.startIconLoadingStart),e.endIconLoadingEnd&&Object(n.a)({},"& .".concat(f.endIconLoadingEnd),e.endIconLoadingEnd)]}})((function(t){var e=t.ownerState,a=t.theme;return Object(r.a)(Object(n.a)({},"& .".concat(f.startIconLoadingStart,", & .").concat(f.endIconLoadingEnd),{transition:a.transitions.create(["opacity"],{duration:a.transitions.duration.short}),opacity:0}),"center"===e.loadingPosition&&Object(n.a)({transition:a.transitions.create(["background-color","box-shadow","border-color"],{duration:a.transitions.duration.short})},"&.".concat(f.loading),{color:"transparent"}),"start"===e.loadingPosition&&e.fullWidth&&Object(n.a)({},"& .".concat(f.startIconLoadingStart,", & .").concat(f.endIconLoadingEnd),{transition:a.transitions.create(["opacity"],{duration:a.transitions.duration.short}),opacity:0,marginRight:-8}),"end"===e.loadingPosition&&e.fullWidth&&Object(n.a)({},"& .".concat(f.startIconLoadingStart,", & .").concat(f.endIconLoadingEnd),{transition:a.transitions.create(["opacity"],{duration:a.transitions.duration.short}),opacity:0,marginLeft:-8}))})),h=Object(l.a)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:function(t,e){var a=t.ownerState;return[e.loadingIndicator,e["loadingIndicator".concat(Object(c.a)(a.loadingPosition))]]}})((function(t){var e=t.theme,a=t.ownerState;return Object(r.a)({position:"absolute",visibility:"visible",display:"flex"},"start"===a.loadingPosition&&("outlined"===a.variant||"contained"===a.variant)&&{left:14},"start"===a.loadingPosition&&"text"===a.variant&&{left:6},"center"===a.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:e.palette.action.disabled},"end"===a.loadingPosition&&("outlined"===a.variant||"contained"===a.variant)&&{right:14},"end"===a.loadingPosition&&"text"===a.variant&&{right:6},"start"===a.loadingPosition&&a.fullWidth&&{position:"relative",left:-10},"end"===a.loadingPosition&&a.fullWidth&&{position:"relative",right:-10})})),x=Object(O.jsx)(b.a,{color:"inherit",size:16}),S=i.forwardRef((function(t,e){var a=Object(d.a)({props:t,name:"MuiLoadingButton"}),n=a.children,l=a.disabled,u=void 0!==l&&l,b=a.loading,p=void 0!==b&&b,j=a.loadingIndicator,f=void 0===j?x:j,S=a.loadingPosition,k=void 0===S?"center":S,w=a.variant,y=void 0===w?"text":w,C=Object(o.a)(a,g),P=Object(r.a)({},a,{disabled:u,loading:p,loadingIndicator:f,loadingPosition:k,variant:y}),M=function(t){var e=t.loading,a=t.loadingPosition,n=t.classes,o={root:["root",e&&"loading"],startIcon:[e&&"startIconLoading".concat(Object(c.a)(a))],endIcon:[e&&"endIconLoading".concat(Object(c.a)(a))],loadingIndicator:["loadingIndicator",e&&"loadingIndicator".concat(Object(c.a)(a))]},i=Object(s.a)(o,v,n);return Object(r.a)({},n,i)}(P);return Object(O.jsx)(m,Object(r.a)({disabled:u||p,ref:e},C,{variant:y,classes:M,ownerState:P,children:"end"===P.loadingPosition?Object(O.jsxs)(i.Fragment,{children:[n,p&&Object(O.jsx)(h,{className:M.loadingIndicator,ownerState:P,children:f})]}):Object(O.jsxs)(i.Fragment,{children:[p&&Object(O.jsx)(h,{className:M.loadingIndicator,ownerState:P,children:f}),n]})}))}));e.a=S},470:function(t,e,a){"use strict";var n=a(37),o=a(4),r=a(3),i=a(2),c=(a(12),a(8)),s=a(117),l=a(33),d=a(11),u=a(14),b=a(9),p=a(95),j=a(118);function v(t){return Object(p.a)("MuiCircularProgress",t)}Object(j.a)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var f,O,g,m,h,x,S,k,w=a(0),y=["className","color","disableShrink","size","style","thickness","value","variant"],C=44,P=Object(l.c)(h||(h=f||(f=Object(n.a)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),M=Object(l.c)(x||(x=O||(O=Object(n.a)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),D=Object(b.a)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(t,e){var a=t.ownerState;return[e.root,e[a.variant],e["color".concat(Object(d.a)(a.color))]]}})((function(t){var e=t.ownerState,a=t.theme;return Object(r.a)({display:"inline-block"},"determinate"===e.variant&&{transition:a.transitions.create("transform")},"inherit"!==e.color&&{color:a.palette[e.color].main})}),(function(t){return"indeterminate"===t.ownerState.variant&&Object(l.b)(S||(S=g||(g=Object(n.a)(["\n      animation: "," 1.4s linear infinite;\n    "]))),P)})),I=Object(b.a)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(t,e){return e.svg}})({display:"block"}),W=Object(b.a)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(t,e){var a=t.ownerState;return[e.circle,e["circle".concat(Object(d.a)(a.variant))],a.disableShrink&&e.circleDisableShrink]}})((function(t){var e=t.ownerState,a=t.theme;return Object(r.a)({stroke:"currentColor"},"determinate"===e.variant&&{transition:a.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(t){var e=t.ownerState;return"indeterminate"===e.variant&&!e.disableShrink&&Object(l.b)(k||(k=m||(m=Object(n.a)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),M)})),N=i.forwardRef((function(t,e){var a=Object(u.a)({props:t,name:"MuiCircularProgress"}),n=a.className,i=a.color,l=void 0===i?"primary":i,b=a.disableShrink,p=void 0!==b&&b,j=a.size,f=void 0===j?40:j,O=a.style,g=a.thickness,m=void 0===g?3.6:g,h=a.value,x=void 0===h?0:h,S=a.variant,k=void 0===S?"indeterminate":S,P=Object(o.a)(a,y),M=Object(r.a)({},a,{color:l,disableShrink:p,size:f,thickness:m,value:x,variant:k}),N=function(t){var e=t.classes,a=t.variant,n=t.color,o=t.disableShrink,r={root:["root",a,"color".concat(Object(d.a)(n))],svg:["svg"],circle:["circle","circle".concat(Object(d.a)(a)),o&&"circleDisableShrink"]};return Object(s.a)(r,v,e)}(M),R={},B={},L={};if("determinate"===k){var T=2*Math.PI*((C-m)/2);R.strokeDasharray=T.toFixed(3),L["aria-valuenow"]=Math.round(x),R.strokeDashoffset="".concat(((100-x)/100*T).toFixed(3),"px"),B.transform="rotate(-90deg)"}return Object(w.jsx)(D,Object(r.a)({className:Object(c.a)(N.root,n),style:Object(r.a)({width:f,height:f},B,O),ownerState:M,ref:e,role:"progressbar"},L,P,{children:Object(w.jsx)(I,{className:N.svg,ownerState:M,viewBox:"".concat(22," ").concat(22," ").concat(C," ").concat(C),children:Object(w.jsx)(W,{className:N.circle,style:R,ownerState:M,cx:C,cy:C,r:(C-m)/2,fill:"none",strokeWidth:m})})}))}));e.a=N},816:function(t,e,a){"use strict";a.r(e);var n=a(16),o=(a(2),a(41)),r=a(461),i=a(32),c=a(432),s=a(411),l=a(23),d=a(0),u={setErrorSnackMessage:i.e},b=Object(o.b)(null,u);e.default=b((function(t){var e=t.closeDeleteModalAndRefresh,a=t.deleteOpen,o=t.selectedBucket,i=t.setErrorSnackMessage,u=Object(c.a)((function(){return e(!0)}),(function(t){return i(t)})),b=Object(n.a)(u,2),p=b[0],j=b[1];if(!o)return null;return Object(d.jsx)(s.a,{title:"Delete Bucket",confirmText:"Delete",isOpen:a,titleIcon:Object(d.jsx)(l.w,{}),isLoading:p,onConfirm:function(){j("DELETE","/api/v1/buckets/".concat(o),{name:o})},onClose:function(){return e(!1)},confirmationContent:Object(d.jsxs)(r.a,{children:["Are you sure you want to delete bucket ",Object(d.jsx)("b",{children:o}),"? ",Object(d.jsx)("br",{}),"A bucket can only be deleted if it's empty."]})})}))}}]);
//# sourceMappingURL=36.fd0ec44d.chunk.js.map