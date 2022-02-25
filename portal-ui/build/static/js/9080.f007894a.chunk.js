(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[9080,1140],{39080:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(18489),o=n(35531),a=n(50390),i=n(38342),s=n.n(i),l=n(86509),c=n(4285),u=n(66946),d=n(76352),p=n(25594),f=n(58217),m=n(65771),y=n(70758),g=n(33034),h=n.n(g),b=n(85615),x=n(72462),v=n(62559),C=(0,c.Z)((function(e){return(0,l.Z)({container:{display:"flex",flexFlow:"column",padding:"20px 0 8px 0"},inputWithCopy:{"& .MuiInputBase-root ":{width:"100%",background:"#FBFAFA","& .MuiInputBase-input":{height:".8rem"},"& .MuiInputAdornment-positionEnd":{marginRight:".5rem","& .MuiButtonBase-root":{height:"2rem"}}},"& .MuiButtonBase-root .min-icon":{width:".8rem",height:".8rem"}},inputLabel:(0,r.Z)((0,r.Z)({},x.YI.inputLabel),{},{fontSize:".8rem"})})}))((function(e){var t=e.label,n=void 0===t?"":t,r=e.value,o=void 0===r?"":r,a=e.classes,i=void 0===a?{}:a;return(0,v.jsxs)("div",{className:i.container,children:[(0,v.jsxs)("div",{className:i.inputLabel,children:[n,":"]}),(0,v.jsx)("div",{className:i.inputWithCopy,children:(0,v.jsx)(f.Z,{value:o,readOnly:!0,endAdornment:(0,v.jsx)(m.Z,{position:"end",children:(0,v.jsx)(h(),{text:o,children:(0,v.jsx)(y.Z,{"aria-label":"copy",tooltip:"Copy",onClick:function(){},onMouseDown:function(){},edge:"end",children:(0,v.jsx)(b.TI,{})})})})})})]})})),j=n(47424),w=(0,c.Z)((function(e){return(0,l.Z)({warningBlock:{color:"red",fontSize:".85rem",margin:".5rem 0 .5rem 0",display:"flex",alignItems:"center","& svg ":{marginRight:".3rem",height:16,width:16}},credentialTitle:{padding:".8rem 0 0 0",fontWeight:600,fontSize:".9rem"},buttonContainer:{textAlign:"right",marginTop:"1rem"},credentialsPanel:{overflowY:"auto",maxHeight:350},promptTitle:{display:"flex",alignItems:"center"},buttonSpacer:{marginRight:".9rem"},promptIcon:{marginRight:".1rem",display:"flex",alignItems:"center",height:"2rem",width:"2rem"}})}))((function(e){var t=e.classes,n=e.newServiceAccount,i=e.open,l=e.closeModal,c=e.entity;if(!n)return null;var f=s()(n,"console",null),m=s()(n,"idp",!1);return(0,v.jsx)(d.Z,{modalOpen:i,onClose:function(){l()},title:(0,v.jsx)("div",{className:t.promptTitle,children:(0,v.jsxs)("div",{children:["New ",c," Created"]})}),titleIcon:(0,v.jsx)(b.tV,{}),children:(0,v.jsxs)(p.ZP,{container:!0,children:[(0,v.jsxs)(p.ZP,{item:!0,xs:12,className:t.formScrollable,children:["A new ",c," has been created with the following details:",!m&&f&&(0,v.jsx)(a.Fragment,{children:(0,v.jsxs)(p.ZP,{item:!0,xs:12,className:t.credentialsPanel,children:[(0,v.jsx)("div",{className:t.credentialTitle,children:"Console Credentials"}),Array.isArray(f)&&f.map((function(e,t){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(C,{label:"Access Key",value:e.accessKey}),(0,v.jsx)(C,{label:"Secret Key",value:e.secretKey})]})})),!Array.isArray(f)&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(C,{label:"Access Key",value:f.accessKey}),(0,v.jsx)(C,{label:"Secret Key",value:f.secretKey})]})]})}),m?(0,v.jsx)("div",{className:t.warningBlock,children:"Please Login via the configured external identity provider."}):(0,v.jsxs)("div",{className:t.warningBlock,children:[(0,v.jsx)(j.Z,{}),(0,v.jsx)("span",{children:"Write these down, as this is the only time the secret will be displayed."})]})]}),(0,v.jsxs)(p.ZP,{item:!0,xs:12,className:t.buttonContainer,children:[(0,v.jsx)(u.Z,{id:"done-button",variant:"outlined",className:t.buttonSpacer,onClick:function(){l()},color:"primary",children:"Done"}),!m&&(0,v.jsx)(u.Z,{id:"download-button",onClick:function(){var e={};if(f)if(Array.isArray(f)){var t=f.map((function(e){return{url:e.url,access_key:e.accessKey,secret_key:e.secretKey,api:"s3v4",path:"auto"}}));e={console:(0,o.Z)(t)}}else e={console:[{url:f.url,access_key:f.accessKey,secret_key:f.secretKey,api:"s3v4",path:"auto"}]};!function(e,t){var n=document.createElement("a");n.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),n.setAttribute("download",e),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)}("credentials.json",JSON.stringify((0,r.Z)({},e)))},endIcon:(0,v.jsx)(b._8,{}),variant:"contained",color:"primary",children:"Download"})]})]})})}))},76352:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var r,o=n(23430),a=n(18489),i=n(50390),s=n(34424),l=n(95467),c=n(97771),u=n(84402),d=n(78426),p=n(93085),f=n(86509),m=n(4285),y=n(72462),g=n(44149),h=n(38342),b=n.n(h),x=n(92125),v=n(19538),C=n(21278),j=n(62559),w=function(){clearInterval(r)},k={displayErrorMessage:g.zb},S=(0,s.$j)((function(e){return{modalSnackMessage:e.system.modalSnackBar}}),k)((0,m.Z)((function(e){return(0,f.Z)({modalErrorContainer:{position:"absolute",marginTop:10,width:"80%",backgroundColor:"#fff",border:"#C72C48 1px solid",borderLeftWidth:12,borderRadius:3,zIndex:1e3,padding:"10px 15px",left:"50%",transform:"translateX(-50%)",opacity:0,transitionDuration:"0.2s"},modalErrorShow:{opacity:1},closeButton:{position:"absolute",right:5,fontSize:"small",border:0,backgroundColor:"#fff",cursor:"pointer"},errorTitle:{display:"flex",alignItems:"center"},errorLabel:{color:"#000",fontSize:18,fontWeight:500,marginLeft:5,marginRight:25},messageIcon:{color:"#C72C48",display:"flex","& svg":{width:32,height:32}},detailsButton:{color:"#9C9C9C",display:"flex",alignItems:"center",border:0,backgroundColor:"transparent",paddingLeft:5,fontSize:14,transformDuration:"0.3s",cursor:"pointer"},extraDetailsContainer:{fontStyle:"italic",color:"#9C9C9C",lineHeight:0,padding:"0 10px",transition:"all .2s ease-in-out",overflow:"hidden"},extraDetailsOpen:{lineHeight:1,padding:"3px 10px"},arrowElement:{marginLeft:-5},arrowOpen:{transform:"rotateZ(90deg)",transformDuration:"0.3s"}})}))((function(e){var t=e.classes,n=e.modalSnackMessage,a=e.displayErrorMessage,s=e.customStyle,l=(0,i.useState)(!1),c=(0,o.Z)(l,2),u=c[0],d=c[1],p=(0,i.useState)(!1),f=(0,o.Z)(p,2),m=f[0],y=f[1],g=(0,i.useCallback)((function(){y(!1)}),[]);(0,i.useEffect)((function(){m||(a({detailedError:"",errorMessage:""}),d(!1))}),[a,m]),(0,i.useEffect)((function(){""!==n.message&&"error"===n.type&&y(!0)}),[g,n.message,n.type]);var h=b()(n,"message",""),k=b()(n,"detailedErrorMsg","");return"error"!==n.type||""===h?null:(0,j.jsx)(i.Fragment,{children:(0,j.jsxs)("div",{className:"".concat(t.modalErrorContainer," ").concat(m?t.modalErrorShow:""),style:s,onMouseOver:w,onMouseLeave:function(){r=setInterval(g,1e4)},children:[(0,j.jsx)("button",{className:t.closeButton,onClick:g,children:(0,j.jsx)(C.Z,{})}),(0,j.jsxs)("div",{className:t.errorTitle,children:[(0,j.jsx)("span",{className:t.messageIcon,children:(0,j.jsx)(v.Z,{})}),(0,j.jsx)("span",{className:t.errorLabel,children:h})]}),""!==k&&(0,j.jsxs)(i.Fragment,{children:[(0,j.jsx)("div",{className:t.detailsContainerLink,children:(0,j.jsxs)("button",{className:t.detailsButton,onClick:function(){d(!u)},children:["Details",(0,j.jsx)(x.Z,{className:"".concat(t.arrowElement," ").concat(u?t.arrowOpen:"")})]})}),(0,j.jsx)("div",{className:"".concat(t.extraDetailsContainer," ").concat(u?t.extraDetailsOpen:""),children:k})]})]})})}))),O=(0,s.$j)((function(e){return{modalSnackMessage:e.system.modalSnackBar}}),{setModalSnackMessage:g.MK}),Z=(0,m.Z)((function(e){return(0,f.Z)((0,a.Z)((0,a.Z)({},y.Qw),{},{root:{"& .MuiPaper-root":{padding:"0 2rem 2rem 1rem"}},content:{padding:25,paddingBottom:0},customDialogSize:{width:"100%",maxWidth:765}},y.sN))}))(O((function(e){var t=e.onClose,n=e.modalOpen,r=e.title,s=e.children,f=e.classes,m=e.wideLimit,y=void 0===m||m,g=e.modalSnackMessage,h=e.noContentPadding,b=e.setModalSnackMessage,x=e.titleIcon,v=void 0===x?null:x,w=(0,i.useState)(!1),k=(0,o.Z)(w,2),O=k[0],Z=k[1];(0,i.useEffect)((function(){b("")}),[b]),(0,i.useEffect)((function(){if(g){if(""===g.message)return void Z(!1);"error"!==g.type&&Z(!0)}}),[g]);var E=y?{classes:{paper:f.customDialogSize}}:{maxWidth:"lg",fullWidth:!0},D="";return g&&(D=g.detailedErrorMsg,(""===g.detailedErrorMsg||g.detailedErrorMsg.length<5)&&(D=g.message)),(0,j.jsxs)(u.Z,(0,a.Z)((0,a.Z)({open:n,classes:f},E),{},{scroll:"paper",onClose:function(e,n){"backdropClick"!==n&&t()},className:f.root,children:[(0,j.jsxs)(d.Z,{className:f.title,children:[(0,j.jsxs)("div",{className:f.titleText,children:[v," ",r]}),(0,j.jsx)("div",{className:f.closeContainer,children:(0,j.jsx)(l.Z,{"aria-label":"close",className:f.closeButton,onClick:t,disableRipple:!0,size:"small",children:(0,j.jsx)(C.Z,{})})})]}),(0,j.jsx)(S,{}),(0,j.jsx)(c.Z,{open:O,className:f.snackBarModal,onClose:function(){Z(!1),b("")},message:D,ContentProps:{className:"".concat(f.snackBar," ").concat(g&&"error"===g.type?f.errorSnackBar:"")},autoHideDuration:g&&"error"===g.type?1e4:5e3}),(0,j.jsx)(p.Z,{className:h?"":f.content,children:s})]}))})))},20409:function(e,t,n){"use strict";var r=n(61498),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,i,s,l,c,u=!1;t||(t={}),n=t.debug||!1;try{if(i=r(),s=document.createRange(),l=document.getSelection(),(c=document.createElement("span")).textContent=e,c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=o[t.format]||o.default;window.clipboardData.setData(a,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(c),s.selectNodeContents(c),l.addRange(s),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(d){n&&console.error("unable to copy using execCommand: ",d),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(d){n&&console.error("unable to copy using clipboardData: ",d),n&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(s):l.removeAllRanges()),c&&document.body.removeChild(c),i()}return u}},12900:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var r=a(n(50390)),o=a(n(20409));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?f(e):t}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e){function t(){var e,n;c(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return y(f(n=d(this,(e=p(t)).call.apply(e,[this].concat(i)))),"onClick",(function(e){var t=n.props,a=t.text,i=t.onCopy,s=t.children,l=t.options,c=r.default.Children.only(s),u=(0,o.default)(a,l);i&&i(a,u),c&&c.props&&"function"===typeof c.props.onClick&&c.props.onClick(e)})),n}var n,a,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,a=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=l(e,["text","onCopy","options","children"]),o=r.default.Children.only(t);return r.default.cloneElement(o,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{onClick:this.onClick}))}}],a&&u(n.prototype,a),i&&u(n,i),t}(r.default.PureComponent);t.CopyToClipboard=g,y(g,"defaultProps",{onCopy:void 0,options:void 0})},33034:function(e,t,n){"use strict";var r=n(12900).CopyToClipboard;r.CopyToClipboard=r,e.exports=r},61498:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);
//# sourceMappingURL=9080.f007894a.chunk.js.map