(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[9661],{25534:function(e,t,n){"use strict";var i=n(18489),a=(n(50390),n(25594)),o=n(86509),r=n(4285),s=n(72462),c=n(62559);t.Z=(0,r.Z)((function(e){return(0,o.Z)((0,i.Z)({},s.Bw))}))((function(e){var t=e.classes,n=e.className,i=void 0===n?"":n,o=e.children;return(0,c.jsx)("div",{className:t.contentSpacer,children:(0,c.jsx)(a.ZP,{container:!0,children:(0,c.jsx)(a.ZP,{item:!0,xs:12,className:i,children:o})})})}))},35721:function(e,t,n){"use strict";var i=n(50390),a=n(34424),o=n(25594),r=n(86509),s=n(4285),c=n(35477),l=n(95467),d=n(26805),u=n(44078),f=n(5265),p=n(86362),m=n(62559),g={toggleList:f.kQ},b=(0,a.$j)((function(e){return{sidebarOpen:e.system.sidebarOpen,operatorMode:e.system.operatorMode,managerObjects:e.objectBrowser.objectManager.objectsToManage,features:e.console.session.features}}),g);t.Z=b((0,s.Z)((function(e){return(0,r.Z)({headerContainer:{width:"100%",minHeight:79,display:"flex",backgroundColor:"#fff",left:0,boxShadow:"rgba(0,0,0,.08) 0 3px 10px"},label:{display:"flex",justifyContent:"flex-start",alignItems:"center"},labelStyle:{color:"#000",fontSize:18,fontWeight:700,marginLeft:34,marginTop:8},rightMenu:{textAlign:"right"},logo:{marginLeft:34,fill:e.palette.primary.main,"& .min-icon":{width:120}},middleComponent:{display:"flex",justifyContent:"center",alignItems:"center"}})}))((function(e){var t=e.classes,n=e.label,a=e.actions,r=e.sidebarOpen,s=e.operatorMode,f=e.managerObjects,g=e.toggleList,b=e.middleComponent;return e.features.includes("hide-menu")?(0,m.jsx)(i.Fragment,{}):(0,m.jsxs)(o.ZP,{container:!0,className:"".concat(t.headerContainer," page-header"),direction:"row",alignItems:"center",children:[(0,m.jsxs)(o.ZP,{item:!0,xs:12,sm:12,md:b?3:6,className:t.label,sx:{paddingTop:["15px","15px","0","0"]},children:[!r&&(0,m.jsx)("div",{className:t.logo,children:s?(0,m.jsx)(d.Z,{}):(0,m.jsx)(u.Z,{})}),(0,m.jsx)(c.Z,{variant:"h4",className:t.labelStyle,children:n})]}),b&&(0,m.jsx)(o.ZP,{item:!0,xs:12,sm:12,md:6,className:t.middleComponent,sx:{marginTop:["10px","10px","0","0"]},children:b}),(0,m.jsxs)(o.ZP,{item:!0,xs:12,sm:12,md:b?3:6,className:t.rightMenu,children:[a&&a,f&&f.length>0&&(0,m.jsx)(l.Z,{color:"primary","aria-label":"Refresh List",component:"span",onClick:function(){g()},size:"large",children:(0,m.jsx)(p.gx,{})})]})]})})))},79661:function(e,t,n){"use strict";n.r(t);var i=n(23430),a=n(18489),o=n(50390),r=n(46413),s=n(25594),c=n(47554),l=n(43965),d=n(31680),u=n(12066),f=n(66946),p=n(69686),m=n(34424),g=n(86509),b=n(4285),h=n(49255),x=n(28948),v=n(51774),Z=n(72462),w=n(8174),y=n(35721),j=n(30324),k=n(25534),C=n(62559),S=(0,b.Z)((function(e){return(0,g.Z)({root:{lineHeight:"50px","label + &":{marginTop:e.spacing(3)},"& .MuiSelect-select:focus":{backgroundColor:"transparent"}},input:{height:50,fontSize:13,lineHeight:"50px"}})}))(r.ZP),N=(0,m.$j)((function(e){return{messages:e.watch.messages}}),{watchMessageReceived:h.pG,watchResetMessages:h.uE});t.default=N((0,b.Z)((function(e){return(0,g.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({searchPrefix:{flexGrow:1,marginLeft:15},watchTableHeight:{height:"calc(100vh - 270px)"},bucketField:{flexGrow:2,minWidth:200}},Z.VX),Z.OR),Z.qg),(0,Z.Bz)(e.spacing(4))))}))((function(e){var t=e.classes,n=e.watchMessageReceived,a=e.watchResetMessages,r=e.messages,m=(0,o.useState)(!1),g=(0,i.Z)(m,2),b=g[0],h=g[1],Z=(0,o.useState)("Select Bucket"),N=(0,i.Z)(Z,2),M=N[0],T=N[1],P=(0,o.useState)(""),O=(0,i.Z)(P,2),I=O[0],F=O[1],_=(0,o.useState)(""),L=(0,i.Z)(_,2),G=L[0],R=L[1],E=(0,o.useState)([]),V=(0,i.Z)(E,2),B=V[0],z=V[1];(0,o.useEffect)((function(){j.Z.invoke("GET","/api/v1/buckets").then((function(e){var t=[];null!==e.buckets&&(t=e.buckets),z(t)})).catch((function(e){console.log(e)}))}),[]),(0,o.useEffect)((function(){if(a(),b&&B.some((function(e){return e.name===M}))){var e=new URL(window.location.toString()),t=e.port,i=(0,v.x2)(e.protocol),o=new p.w3cwebsocket("".concat(i,"://").concat(e.hostname,":").concat(t,"/ws/watch/").concat(M,"?prefix=").concat(I,"&suffix=").concat(G)),r=null;if(null!==o)return o.onopen=function(){console.log("WebSocket Client Connected"),o.send("ok"),r=setInterval((function(){o.send("ok")}),1e4)},o.onmessage=function(e){var t=JSON.parse(e.data.toString());t.Time=new Date(t.Time.toString()),t.key=Math.random(),n(t)},o.onclose=function(){clearInterval(r),console.log("connection closed by server"),h(!1)},function(){o.close(1e3),clearInterval(r),console.log("closing websockets")}}else h(!1)}),[n,b,B,M,I,G,a]);var H=B.map((function(e){return{label:e.name,value:e.name}}));return(0,C.jsxs)(o.Fragment,{children:[(0,C.jsx)(y.Z,{label:"Watch"}),(0,C.jsx)(k.Z,{children:(0,C.jsxs)(s.ZP,{item:!0,xs:12,children:[(0,C.jsxs)(s.ZP,{item:!0,xs:12,className:t.actionsTray,children:[(0,C.jsx)(c.Z,{variant:"outlined",className:t.bucketField,children:(0,C.jsxs)(l.Z,{id:"bucket-name",name:"bucket-name",value:M,onChange:function(e){T(e.target.value)},className:t.searchField,disabled:b,input:(0,C.jsx)(S,{}),children:[(0,C.jsx)(d.Z,{value:M,disabled:!0,children:"Select Bucket"},"select-bucket-name-default"),H.map((function(e){return(0,C.jsx)(d.Z,{value:e.value,children:e.label},"select-bucket-name-".concat(e.label))}))]})}),(0,C.jsx)(u.Z,{className:"".concat(t.searchField," ").concat(t.searchPrefix),id:"prefix-resource",label:"Prefix",disabled:b,InputProps:{disableUnderline:!0},onChange:function(e){F(e.target.value)},variant:"standard"}),(0,C.jsx)(u.Z,{className:"".concat(t.searchField," ").concat(t.searchPrefix),id:"suffix-resource",label:"Suffix",disabled:b,InputProps:{disableUnderline:!0},onChange:function(e){R(e.target.value)},variant:"standard"}),(0,C.jsx)(f.Z,{type:"submit",variant:"contained",color:"primary",disabled:b,onClick:function(){return h(!0)},children:"Start"})]}),(0,C.jsx)("div",{className:t.tableBlock,children:(0,C.jsx)(w.Z,{columns:[{label:"Time",elementKey:"Time",renderFunction:x.zk},{label:"Size",elementKey:"Size",renderFunction:x.ae},{label:"Type",elementKey:"Type"},{label:"Path",elementKey:"Path"}],records:r,entityName:"Watch",customEmptyMessage:"No Changes at this time",idField:"watch_table",isLoading:!1,customPaperHeight:t.watchTableHeight})})]})})]})})))},51774:function(e,t,n){"use strict";n.d(t,{V9:function(){return i},ci:function(){return a},HE:function(){return o},x2:function(){return r}});var i=1006,a=1008,o=1011,r=function(e){var t="ws";return"https:"===e&&(t="wss"),t}},4247:function(e,t,n){"use strict";n.d(t,{V:function(){return a}});var i=n(10594);function a(e){return(0,i.Z)("MuiDivider",e)}var o=(0,n(43349).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=o},31680:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var i=n(36222),a=n(1048),o=n(32793),r=n(50390),s=n(44977),c=n(50076),l=n(36128),d=n(8208),u=n(15573),f=n(57308),p=n(86875),m=n(40839),g=n(3299),b=n(4247),h=n(2198),x=n(23586),v=n(10594);function Z(e){return(0,v.Z)("MuiMenuItem",e)}var w=(0,n(43349).Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),y=n(62559),j=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],k=(0,d.ZP)(p.Z,{shouldForwardProp:function(e){return(0,d.FO)(e)||"classes"===e},name:"MuiMenuItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]}})((function(e){var t,n=e.theme,a=e.ownerState;return(0,o.Z)({},n.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!a.disableGutters&&{paddingLeft:16,paddingRight:16},a.divider&&{borderBottom:"1px solid ".concat(n.palette.divider),backgroundClip:"padding-box"},(t={"&:hover":{textDecoration:"none",backgroundColor:n.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,i.Z)(t,"&.".concat(w.selected),(0,i.Z)({backgroundColor:(0,l.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(w.focusVisible),{backgroundColor:(0,l.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,i.Z)(t,"&.".concat(w.selected,":hover"),{backgroundColor:(0,l.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(0,l.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),(0,i.Z)(t,"&.".concat(w.focusVisible),{backgroundColor:n.palette.action.focus}),(0,i.Z)(t,"&.".concat(w.disabled),{opacity:n.palette.action.disabledOpacity}),(0,i.Z)(t,"& + .".concat(b.Z.root),{marginTop:n.spacing(1),marginBottom:n.spacing(1)}),(0,i.Z)(t,"& + .".concat(b.Z.inset),{marginLeft:52}),(0,i.Z)(t,"& .".concat(x.Z.root),{marginTop:0,marginBottom:0}),(0,i.Z)(t,"& .".concat(x.Z.inset),{paddingLeft:36}),(0,i.Z)(t,"& .".concat(h.Z.root),{minWidth:36}),t),!a.dense&&(0,i.Z)({},n.breakpoints.up("sm"),{minHeight:"auto"}),a.dense&&(0,o.Z)({minHeight:32,paddingTop:4,paddingBottom:4},n.typography.body2,(0,i.Z)({},"& .".concat(h.Z.root," svg"),{fontSize:"1.25rem"})))})),C=r.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiMenuItem"}),i=n.autoFocus,l=void 0!==i&&i,d=n.component,p=void 0===d?"li":d,b=n.dense,h=void 0!==b&&b,x=n.divider,v=void 0!==x&&x,w=n.disableGutters,C=void 0!==w&&w,S=n.focusVisibleClassName,N=n.role,M=void 0===N?"menuitem":N,T=n.tabIndex,P=(0,a.Z)(n,j),O=r.useContext(f.Z),I={dense:h||O.dense||!1,disableGutters:C},F=r.useRef(null);(0,m.Z)((function(){l&&F.current&&F.current.focus()}),[l]);var _,L=(0,o.Z)({},n,{dense:I.dense,divider:v,disableGutters:C}),G=function(e){var t=e.disabled,n=e.dense,i=e.divider,a=e.disableGutters,r=e.selected,s=e.classes,l={root:["root",n&&"dense",t&&"disabled",!a&&"gutters",i&&"divider",r&&"selected"]},d=(0,c.Z)(l,Z,s);return(0,o.Z)({},s,d)}(n),R=(0,g.Z)(F,t);return n.disabled||(_=void 0!==T?T:-1),(0,y.jsx)(f.Z.Provider,{value:I,children:(0,y.jsx)(k,(0,o.Z)({ref:R,role:M,tabIndex:_,component:p,focusVisibleClassName:(0,s.Z)(G.focusVisible,S)},P,{ownerState:L,classes:G}))})}))},3930:function(e){var t=function(){if("object"===typeof self&&self)return self;if("object"===typeof window&&window)return window;throw new Error("Unable to resolve global `this`")};e.exports=function(){if(this)return this;if("object"===typeof globalThis&&globalThis)return globalThis;try{Object.defineProperty(Object.prototype,"__global__",{get:function(){return this},configurable:!0})}catch(e){return t()}try{return __global__||t()}finally{delete Object.prototype.__global__}}()},69686:function(e,t,n){var i;if("object"===typeof globalThis)i=globalThis;else try{i=n(3930)}catch(s){}finally{if(i||"undefined"===typeof window||(i=window),!i)throw new Error("Could not determine global this")}var a=i.WebSocket||i.MozWebSocket,o=n(84994);function r(e,t){return t?new a(e,t):new a(e)}a&&["CONNECTING","OPEN","CLOSING","CLOSED"].forEach((function(e){Object.defineProperty(r,e,{get:function(){return a[e]}})})),e.exports={w3cwebsocket:a?r:null,version:o}},84994:function(e,t,n){e.exports=n(19794).version},19794:function(e){"use strict";e.exports={version:"1.0.34"}}}]);
//# sourceMappingURL=9661.92a4e63a.chunk.js.map