(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[9816],{33690:function(e,t,r){"use strict";r.r(t);var n=r(29439),o=r(1413),a=r(72791),i=r(29945),l=r(11135),s=r(25787),c=r(61889),u=r(23814),d=r(56028),f=r(90673),p=r(92217),m=r(87995),b=r(81551),y=r(19859),v=r(31776),h=r(66315),x=r(82342),Z=r(80184);(0,l.Z)((0,o.Z)((0,o.Z)({},u.ID),u.bK));t.default=(0,s.Z)((function(e){return(0,l.Z)((0,o.Z)((0,o.Z)((0,o.Z)({codeMirrorContainer:{marginBottom:20,"& label":{marginBottom:".5rem"},"& label + div":{display:"none"}}},u.DF),u.ID),u.bK))}))((function(e){var t=e.classes,r=e.open,o=e.bucketName,l=e.actualPolicy,s=e.actualDefinition,u=e.closeModalAndRefresh,g=(0,b.TL)(),C=(0,a.useState)(!1),w=(0,n.Z)(C,2),j=w[0],O=w[1],k=(0,a.useState)(""),S=(0,n.Z)(k,2),P=S[0],E=S[1],D=(0,a.useState)(y.L),R=(0,n.Z)(D,2),A=R[0],z=R[1];return(0,a.useEffect)((function(){E(l),z(s?JSON.stringify(JSON.parse(s),null,4):y.L)}),[E,l,z,s]),(0,Z.jsx)(d.Z,{title:"Change Access Policy",modalOpen:r,onClose:function(){u()},titleIcon:(0,Z.jsx)(i.QXQ,{}),children:(0,Z.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),!j&&P&&(O(!0),v.h.buckets.bucketSetPolicy(o,{access:P,definition:A}).then((function(e){O(!1),u()})).catch((function(e){O(!1),g((0,m.zb)((0,x.g)(e.error)))})))},children:(0,Z.jsxs)(c.ZP,{container:!0,children:[(0,Z.jsxs)(c.ZP,{item:!0,xs:12,className:t.modalFormScrollable,children:[(0,Z.jsx)(c.ZP,{item:!0,xs:12,className:t.formFieldRow,children:(0,Z.jsx)(f.Z,{value:P,label:"Access Policy",id:"select-access-policy",name:"select-access-policy",onChange:function(e){E(e.target.value)},options:[{value:h.cv.PRIVATE,label:"Private"},{value:h.cv.PUBLIC,label:"Public"},{value:h.cv.CUSTOM,label:"Custom"}]})}),"PUBLIC"===P&&(0,Z.jsx)("div",{style:{marginTop:"25px",fontSize:"14px",fontStyle:"italic",color:"#5E5E5E"},children:"* Warning: With Public access anyone will be able to upload, download and delete files from this Bucket *"}),"CUSTOM"===P&&(0,Z.jsx)(c.ZP,{item:!0,xs:12,children:(0,Z.jsx)(p.Z,{label:"Write Policy",value:A,onChange:function(e){z(e)},editorHeight:"300px"})})]}),(0,Z.jsxs)(c.ZP,{item:!0,xs:12,className:t.modalButtonBar,children:[(0,Z.jsx)(i.zxk,{id:"cancel",type:"button",variant:"regular",onClick:function(){u()},disabled:j,label:"Cancel"}),(0,Z.jsx)(i.zxk,{id:"set",type:"submit",variant:"callAction",disabled:j||"CUSTOM"===P&&!A,label:"Set"})]})]})})})}))},92217:function(e,t,r){"use strict";var n=r(72791),o=r(29945),a=r(78029),i=r.n(a),l=r(27454),s=r(80184);t.Z=function(e){var t=e.value,r=e.label,a=void 0===r?"":r,c=e.tooltip,u=void 0===c?"":c,d=e.mode,f=void 0===d?"json":d,p=e.onChange,m=e.editorHeight,b=void 0===m?250:m;return(0,s.jsx)(o.pq4,{value:t,onChange:function(e){return p(e)},mode:f,tooltip:u,editorHeight:b,label:a,helpTools:(0,s.jsx)(n.Fragment,{children:(0,s.jsx)(l.Z,{tooltip:"Copy to Clipboard",children:(0,s.jsx)(i(),{text:t,children:(0,s.jsx)(o.zxk,{type:"button",id:"copy-code-mirror",icon:(0,s.jsx)(o.TIy,{}),color:"primary",variant:"regular"})})})})})}},90673:function(e,t,r){"use strict";var n=r(1413),o=r(72791),a=r(61889),i=r(886),l=r(30829),s=r(20068),c=r(68096),u=r(58406),d=r(77865),f=r(11135),p=r(25787),m=r(23814),b=r(29945),y=r(80184),v=(0,p.Z)((function(e){return(0,f.Z)({root:{height:38,lineHeight:1,"label + &":{marginTop:e.spacing(3)}},input:{height:38,position:"relative",color:"#07193E",fontSize:13,fontWeight:600,padding:"8px 20px 10px 10px",border:"#e5e5e5 1px solid",borderRadius:4,display:"flex",alignItems:"center","&:hover":{borderColor:"#393939"},"&:focus":{backgroundColor:"#fff"}}})}))(i.ZP);t.Z=(0,p.Z)((function(e){return(0,f.Z)((0,n.Z)((0,n.Z)((0,n.Z)({},m.YI),m.Hr),{},{fieldContainer:{display:"flex","@media (max-width: 600px)":{flexFlow:"column"}}}))}))((function(e){var t=e.classes,r=e.id,n=e.name,i=e.onChange,f=e.options,p=e.label,m=e.tooltip,h=void 0===m?"":m,x=e.value,Z=e.disabled,g=void 0!==Z&&Z;return(0,y.jsx)(o.Fragment,{children:(0,y.jsxs)(a.ZP,{item:!0,xs:12,className:t.fieldContainer,children:[""!==p&&(0,y.jsxs)(l.Z,{htmlFor:r,className:t.inputLabel,children:[(0,y.jsx)("span",{children:p}),""!==h&&(0,y.jsx)("div",{className:t.tooltipContainer,children:(0,y.jsx)(s.Z,{title:h,placement:"top-start",children:(0,y.jsx)("div",{className:t.tooltip,children:(0,y.jsx)(b.byK,{})})})})]}),(0,y.jsx)(c.Z,{fullWidth:!0,children:(0,y.jsx)(u.Z,{id:r,name:n,value:x,onChange:i,input:(0,y.jsx)(v,{}),disabled:g,children:f.map((function(e){return(0,y.jsx)(d.Z,{value:e.value,children:e.label},"select-".concat(n,"-").concat(e.label))}))})})]})})}))},19859:function(e,t,r){"use strict";r.d(t,{L:function(){return n}});var n='{\n    "Version": "2012-10-17",\n    "Statement": [\n        \n    ]\n}'},93840:function(e,t,r){"use strict";var n=r(72791).createContext(void 0);t.Z=n},76147:function(e,t,r){"use strict";function n(e){var t=e.props,r=e.states,n=e.muiFormControl;return r.reduce((function(e,r){return e[r]=t[r],n&&"undefined"===typeof t[r]&&(e[r]=n[r]),e}),{})}r.d(t,{Z:function(){return n}})},52930:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(72791),o=r(93840);function a(){return n.useContext(o.Z)}},17133:function(e,t,r){"use strict";var n=r(4942),o=r(63366),a=r(87462),i=r(72791),l=r(28182),s=r(94419),c=r(76147),u=r(52930),d=r(14036),f=r(31402),p=r(66934),m=r(10843),b=r(80184),y=["children","className","color","component","disabled","error","filled","focused","required"],v=(0,p.ZP)("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return(0,a.Z)({},t.root,"secondary"===r.color&&t.colorSecondary,r.filled&&t.filled)}})((function(e){var t,r=e.theme,o=e.ownerState;return(0,a.Z)({color:(r.vars||r).palette.text.secondary},r.typography.body1,(t={lineHeight:"1.4375em",padding:0,position:"relative"},(0,n.Z)(t,"&.".concat(m.Z.focused),{color:(r.vars||r).palette[o.color].main}),(0,n.Z)(t,"&.".concat(m.Z.disabled),{color:(r.vars||r).palette.text.disabled}),(0,n.Z)(t,"&.".concat(m.Z.error),{color:(r.vars||r).palette.error.main}),t))})),h=(0,p.ZP)("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:function(e,t){return t.asterisk}})((function(e){var t=e.theme;return(0,n.Z)({},"&.".concat(m.Z.error),{color:(t.vars||t).palette.error.main})})),x=i.forwardRef((function(e,t){var r=(0,f.Z)({props:e,name:"MuiFormLabel"}),n=r.children,i=r.className,p=r.component,x=void 0===p?"label":p,Z=(0,o.Z)(r,y),g=(0,u.Z)(),C=(0,c.Z)({props:r,muiFormControl:g,states:["color","required","focused","disabled","error","filled"]}),w=(0,a.Z)({},r,{color:C.color||"primary",component:x,disabled:C.disabled,error:C.error,filled:C.filled,focused:C.focused,required:C.required}),j=function(e){var t=e.classes,r=e.color,n=e.focused,o=e.disabled,a=e.error,i=e.filled,l=e.required,c={root:["root","color".concat((0,d.Z)(r)),o&&"disabled",a&&"error",i&&"filled",n&&"focused",l&&"required"],asterisk:["asterisk",a&&"error"]};return(0,s.Z)(c,m.M,t)}(w);return(0,b.jsxs)(v,(0,a.Z)({as:x,ownerState:w,className:(0,l.Z)(j.root,i),ref:t},Z,{children:[n,C.required&&(0,b.jsxs)(h,{ownerState:w,"aria-hidden":!0,className:j.asterisk,children:["\u2009","*"]})]}))}));t.Z=x},10843:function(e,t,r){"use strict";r.d(t,{M:function(){return a}});var n=r(75878),o=r(21217);function a(e){return(0,o.Z)("MuiFormLabel",e)}var i=(0,n.Z)("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]);t.Z=i},30829:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var n=r(4942),o=r(63366),a=r(87462),i=r(72791),l=r(94419),s=r(28182),c=r(76147),u=r(52930),d=r(17133),f=r(10843),p=r(31402),m=r(66934),b=r(75878),y=r(21217);function v(e){return(0,y.Z)("MuiInputLabel",e)}(0,b.Z)("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);var h=r(80184),x=["disableAnimation","margin","shrink","variant","className"],Z=(0,m.ZP)(d.Z,{shouldForwardProp:function(e){return(0,m.FO)(e)||"classes"===e},name:"MuiInputLabel",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[(0,n.Z)({},"& .".concat(f.Z.asterisk),t.asterisk),t.root,r.formControl&&t.formControl,"small"===r.size&&t.sizeSmall,r.shrink&&t.shrink,!r.disableAnimation&&t.animated,t[r.variant]]}})((function(e){var t=e.theme,r=e.ownerState;return(0,a.Z)({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},r.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},"small"===r.size&&{transform:"translate(0, 17px) scale(1)"},r.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},!r.disableAnimation&&{transition:t.transitions.create(["color","transform","max-width"],{duration:t.transitions.duration.shorter,easing:t.transitions.easing.easeOut})},"filled"===r.variant&&(0,a.Z)({zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},"small"===r.size&&{transform:"translate(12px, 13px) scale(1)"},r.shrink&&(0,a.Z)({userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"},"small"===r.size&&{transform:"translate(12px, 4px) scale(0.75)"})),"outlined"===r.variant&&(0,a.Z)({zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},"small"===r.size&&{transform:"translate(14px, 9px) scale(1)"},r.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 32px)",transform:"translate(14px, -9px) scale(0.75)"}))})),g=i.forwardRef((function(e,t){var r=(0,p.Z)({name:"MuiInputLabel",props:e}),n=r.disableAnimation,i=void 0!==n&&n,d=r.shrink,f=r.className,m=(0,o.Z)(r,x),b=(0,u.Z)(),y=d;"undefined"===typeof y&&b&&(y=b.filled||b.focused||b.adornedStart);var g=(0,c.Z)({props:r,muiFormControl:b,states:["size","variant","required"]}),C=(0,a.Z)({},r,{disableAnimation:i,formControl:b,shrink:y,size:g.size,variant:g.variant,required:g.required}),w=function(e){var t=e.classes,r=e.formControl,n=e.size,o=e.shrink,i={root:["root",r&&"formControl",!e.disableAnimation&&"animated",o&&"shrink","small"===n&&"sizeSmall",e.variant],asterisk:[e.required&&"asterisk"]},s=(0,l.Z)(i,v,t);return(0,a.Z)({},t,s)}(C);return(0,h.jsx)(Z,(0,a.Z)({"data-shrink":y,ownerState:C,ref:t,className:(0,s.Z)(w.root,f)},m,{classes:w}))}))},19103:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(72791);var o=function(e,t){return n.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}},78949:function(e,t,r){"use strict";function n(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.reduce((function(e,t){return null==t?e:function(){for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];e.apply(this,n),t.apply(this,n)}}),(function(){}))}r.d(t,{Z:function(){return n}})},76998:function(e,t,r){"use strict";var n=r(42458),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var r,a,i,l,s,c,u=!1;t||(t={}),r=t.debug||!1;try{if(i=n(),l=document.createRange(),s=document.getSelection(),(c=document.createElement("span")).textContent=e,c.ariaHidden="true",c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),"undefined"===typeof n.clipboardData){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=o[t.format]||o.default;window.clipboardData.setData(a,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))})),document.body.appendChild(c),l.selectNodeContents(c),s.addRange(l),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(d){r&&console.error("unable to copy using execCommand: ",d),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(d){r&&console.error("unable to copy using clipboardData: ",d),r&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(l):s.removeAllRanges()),c&&document.body.removeChild(c),i()}return u}},568:function(e,t,r){"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var o=l(r(72791)),a=l(r(76998)),i=["text","onCopy","options","children"];function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=b(e);if(t){var a=b(this).constructor;r=Reflect.construct(o,arguments,a)}else r=o.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}(this,r)}}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(s,e);var t,r,n,l=p(s);function s(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return y(m(e=l.call.apply(l,[this].concat(r))),"onClick",(function(t){var r=e.props,n=r.text,i=r.onCopy,l=r.children,s=r.options,c=o.default.Children.only(l),u=(0,a.default)(n,s);i&&i(n,u),c&&c.props&&"function"===typeof c.props.onClick&&c.props.onClick(t)})),e}return t=s,(r=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),r=u(e,i),n=o.default.Children.only(t);return o.default.cloneElement(n,c(c({},r),{},{onClick:this.onClick}))}}])&&d(t.prototype,r),n&&d(t,n),Object.defineProperty(t,"prototype",{writable:!1}),s}(o.default.PureComponent);t.CopyToClipboard=v,y(v,"defaultProps",{onCopy:void 0,options:void 0})},78029:function(e,t,r){"use strict";var n=r(568).CopyToClipboard;n.CopyToClipboard=n,e.exports=n},42458:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],n=0;n<e.rangeCount;n++)r.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);
//# sourceMappingURL=9816.9d5974a5.chunk.js.map