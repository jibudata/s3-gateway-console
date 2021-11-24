(this["webpackJsonpportal-ui"]=this["webpackJsonpportal-ui"]||[]).push([[43],{376:function(e,t,n){"use strict";n(1);var a=n(549),i=n(290),c=n(299),r=n(94),o=n(38),l=n(71),s=n(72),d=n(402),u=n(0),b=Object(o.b)((function(e){return{sidebarOpen:e.system.sidebarOpen,operatorMode:e.system.operatorMode}}),null);t.a=b(Object(c.a)((function(e){return Object(i.a)({headerContainer:{width:"100%",minHeight:79,display:"flex",backgroundColor:"#fff",left:0,boxShadow:"rgba(0,0,0,.08) 0 3px 10px"},label:{display:"flex",justifyContent:"flex-start",alignItems:"center"},labelStyle:{color:"#000",fontSize:18,fontWeight:700,marginLeft:34,marginTop:8},rightMenu:{textAlign:"right"},logo:{marginLeft:34,fill:e.palette.primary.main,"& .min-icon":{width:120}}})}))((function(e){var t=e.classes,n=e.label,i=e.actions,c=e.sidebarOpen,o=e.operatorMode;return Object(u.jsxs)(a.a,{container:!0,className:"".concat(t.headerContainer," page-header"),direction:"row",alignItems:"center",children:[Object(u.jsx)(d.a,{display:{xs:"block",sm:"block",md:"none"},children:Object(u.jsx)(a.a,{item:!0,xs:12,style:{height:10},children:"\xa0"})}),Object(u.jsxs)(a.a,{item:!0,xs:12,sm:12,md:6,className:t.label,children:[!c&&Object(u.jsx)("div",{className:t.logo,children:o?Object(u.jsx)(l.a,{}):Object(u.jsx)(s.a,{})}),Object(u.jsx)(r.a,{variant:"h4",className:t.labelStyle,children:n})]}),i&&Object(u.jsx)(a.a,{item:!0,xs:12,sm:12,md:6,className:t.rightMenu,children:i})]})})))},378:function(e,t,n){"use strict";var a=n(2),i=n(1),c=n.n(i),r=n(882),o=n(549),l=n(883),s=n(365),d=n(367),u=n(290),b=n(358),j=n(299),h=n(120),p=n(122),m=n(0),O=Object(b.a)((function(e){return Object(u.a)(Object(a.a)({},h.k))}));function x(e){var t=O();return Object(m.jsx)(r.a,Object(a.a)({InputProps:{classes:t}},e))}t.a=Object(j.a)((function(e){return Object(u.a)(Object(a.a)(Object(a.a)(Object(a.a)({},h.g),h.A),{},{textBoxContainer:{flexGrow:1,position:"relative"},textBoxWithIcon:{position:"relative",paddingRight:25},errorState:{color:"#b53b4b",fontSize:14,position:"absolute",top:7,right:7},overlayAction:{position:"absolute",right:5,top:6,"& svg":{maxWidth:15,maxHeight:15},"&.withLabel":{top:5}}}))}))((function(e){var t=e.label,n=e.onChange,i=e.value,r=e.id,u=e.name,b=e.type,j=void 0===b?"text":b,h=e.autoComplete,O=void 0===h?"off":h,f=e.disabled,g=void 0!==f&&f,v=e.multiline,k=void 0!==v&&v,C=e.tooltip,y=void 0===C?"":C,B=e.index,N=void 0===B?0:B,S=e.error,R=void 0===S?"":S,F=e.required,w=void 0!==F&&F,L=e.placeholder,q=void 0===L?"":L,E=e.min,I=e.max,T=e.overlayIcon,M=void 0===T?null:T,z=e.overlayObject,A=void 0===z?null:z,W=e.extraInputProps,_=void 0===W?{}:W,Q=e.overlayAction,V=e.noLabelMinWidth,U=void 0!==V&&V,D=e.classes,P=Object(a.a)({"data-index":N},_);return"number"===j&&E&&(P.min=E),"number"===j&&I&&(P.max=I),Object(m.jsx)(c.a.Fragment,{children:Object(m.jsxs)(o.a,{container:!0,className:" ".concat(""!==R?D.errorInField:D.inputBoxContainer),children:[""!==t&&Object(m.jsxs)(l.a,{htmlFor:r,className:U?D.noMinWidthLabel:D.inputLabel,children:[Object(m.jsxs)("span",{children:[t,w?"*":""]}),""!==y&&Object(m.jsx)("div",{className:D.tooltipContainer,children:Object(m.jsx)(s.a,{title:y,placement:"top-start",children:Object(m.jsx)("div",{className:D.tooltip,children:Object(m.jsx)(p.a,{})})})})]}),Object(m.jsxs)("div",{className:D.textBoxContainer,children:[Object(m.jsx)(x,{id:r,name:u,fullWidth:!0,value:i,disabled:g,onChange:n,type:j,multiline:k,autoComplete:O,inputProps:P,error:""!==R,helperText:R,placeholder:q,className:D.inputRebase}),M&&Object(m.jsx)("div",{className:"".concat(D.overlayAction," ").concat(""!==t?"withLabel":""),children:Object(m.jsx)(d.a,{onClick:Q?function(){Q()}:function(){return null},size:"small",disableFocusRipple:!1,disableRipple:!1,disableTouchRipple:!1,children:M})}),A&&Object(m.jsx)("div",{className:"".concat(D.overlayAction," ").concat(""!==t?"withLabel":""),children:A})]})]})})}))},382:function(e,t,n){"use strict";var a=n(5),i=n(2),c=n(1),r=n.n(c),o=n(290),l=n(299),s=n(526),d=n(883),u=n(365),b=n(94),j=n(549),h=n(120),p=n(122),m=n(7),O=n(0),x=Object(l.a)((function(e){return{root:{width:50,height:24,padding:0,margin:0},switchBase:{padding:1,"&$checked":{transform:"translateX(24px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#4CCB92",boxShadow:"inset 0px 1px 4px rgba(0,0,0,0.1)",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#4CCB92",border:"6px solid #fff"}},thumb:{width:22,height:22,backgroundColor:"#FAFAFA",border:"2px solid #FFFFFF",marginLeft:1},track:{borderRadius:12,backgroundColor:"#E2E2E2",boxShadow:"inset 0px 1px 4px rgba(0,0,0,0.1)",opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{}}}))(s.a);t.a=Object(l.a)((function(e){return Object(o.a)(Object(i.a)(Object(i.a)({seeMore:{marginTop:e.spacing(3)},paper:{display:"flex",overflow:"auto",flexDirection:"column",paddingTop:15,boxShadow:"none"},addSideBar:{width:"320px",padding:"20px"},tableToolbar:{paddingLeft:e.spacing(2),paddingRight:e.spacing(0)},wrapCell:{maxWidth:"200px",whiteSpace:"normal",wordWrap:"break-word"},minTableHeader:{color:"#393939","& tr":{"& th":{fontWeight:"bold"}}},noFound:{textAlign:"center",padding:"10px 0"},tableContainer:{maxHeight:200},stickyHeader:{backgroundColor:"#fff"},actionsTitle:{fontWeight:600,color:"#081C42",fontSize:16,alignSelf:"center"},tableBlock:{marginTop:15},filterField:{width:375,fontWeight:600,"& .input":{"&::placeholder":{fontWeight:600,color:"#081C42"}}},divContainer:{marginBottom:20},indicatorLabelOn:{fontWeight:"bold",color:"#081C42 !important"},indicatorLabel:{fontSize:12,color:"#E2E2E2",margin:"0 8px 0 10px"},fieldDescription:{marginTop:4,color:"#999999"},tooltip:{fontSize:16}},h.a),h.g))}))((function(e){var t=e.label,n=void 0===t?"":t,i=e.onChange,c=e.value,o=e.id,l=e.name,s=e.checked,h=void 0!==s&&s,f=e.disabled,g=void 0!==f&&f,v=e.switchOnly,k=void 0!==v&&v,C=e.tooltip,y=void 0===C?"":C,B=e.description,N=void 0===B?"":B,S=e.classes,R=e.indicatorLabels,F=Object(O.jsxs)(r.a.Fragment,{children:[!k&&Object(O.jsx)("span",{className:Object(m.a)(S.indicatorLabel,Object(a.a)({},S.indicatorLabelOn,!h)),children:R&&R.length>1?R[1]:"OFF"}),Object(O.jsx)(x,{checked:h,onChange:i,color:"primary",name:l,inputProps:{"aria-label":"primary checkbox"},disabled:g,disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0,value:c}),!k&&Object(O.jsx)("span",{className:Object(m.a)(S.indicatorLabel,Object(a.a)({},S.indicatorLabelOn,h)),children:R?R[0]:"ON"})]});return k?F:Object(O.jsx)("div",{className:S.divContainer,children:Object(O.jsxs)(j.a,{container:!0,alignItems:"center",children:[Object(O.jsx)(j.a,{item:!0,xs:!0,children:Object(O.jsxs)(j.a,{container:!0,children:[Object(O.jsx)(j.a,{item:!0,xs:12,sm:4,md:3,children:""!==n&&Object(O.jsxs)(d.a,{htmlFor:o,className:S.inputLabel,children:[Object(O.jsx)("span",{children:n}),""!==y&&Object(O.jsx)("div",{className:S.tooltipContainer,children:Object(O.jsx)(u.a,{title:y,placement:"top-start",children:Object(O.jsx)("div",{className:S.tooltip,children:Object(O.jsx)(p.a,{})})})})]})}),Object(O.jsx)(j.a,{item:!0,xs:12,sm:!0,textAlign:"left",children:""!==N&&Object(O.jsx)(b.a,{component:"p",className:S.fieldDescription,children:N})})]})}),Object(O.jsx)(j.a,{item:!0,xs:12,sm:2,textAlign:"right",className:S.switchContainer,children:F})]})})}))},392:function(e,t,n){"use strict";n(1);var a=n(19),i=n(290),c=n(299),r=n(121),o=n(0);t.a=Object(c.a)((function(e){return Object(i.a)({link:{display:"flex",alignItems:"center",textDecoration:"none",maxWidth:"250px",padding:"2rem 2rem 0rem 2rem",color:e.palette.primary.light,fontSize:".8rem","&:hover":{textDecoration:"underline"}},icon:{marginRight:".3rem",display:"flex",alignItems:"center",justifyContent:"center"}})}))((function(e){var t=e.to,n=e.label,i=e.classes;return Object(o.jsxs)(a.a,{to:t,className:i.link,children:[Object(o.jsx)("div",{className:i.icon,children:Object(o.jsx)(r.f,{})}),Object(o.jsx)("div",{children:n})]})}))},406:function(e,t,n){"use strict";var a=n(14),i=n(4),c=n(3),r=n(1),o=(n(11),n(7)),l=n(92),s=n(9),d=n(8),u=n(73),b=n(396),j=n(359),h=n(67),p=n(93);function m(e){return Object(h.a)("PrivateSwitchBase",e)}Object(p.a)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var O=n(0),x=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],f=Object(d.a)(j.a,{skipSx:!0})((function(e){var t=e.ownerState;return Object(c.a)({padding:9,borderRadius:"50%"},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})})),g=Object(d.a)("input",{skipSx:!0})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),v=r.forwardRef((function(e,t){var n=e.autoFocus,r=e.checked,d=e.checkedIcon,j=e.className,h=e.defaultChecked,p=e.disabled,v=e.disableFocusRipple,k=void 0!==v&&v,C=e.edge,y=void 0!==C&&C,B=e.icon,N=e.id,S=e.inputProps,R=e.inputRef,F=e.name,w=e.onBlur,L=e.onChange,q=e.onFocus,E=e.readOnly,I=e.required,T=e.tabIndex,M=e.type,z=e.value,A=Object(i.a)(e,x),W=Object(u.a)({controlled:r,default:Boolean(h),name:"SwitchBase",state:"checked"}),_=Object(a.a)(W,2),Q=_[0],V=_[1],U=Object(b.a)(),D=p;U&&"undefined"===typeof D&&(D=U.disabled);var P="checkbox"===M||"radio"===M,H=Object(c.a)({},e,{checked:Q,disabled:D,disableFocusRipple:k,edge:y}),G=function(e){var t=e.classes,n=e.checked,a=e.disabled,i=e.edge,c={root:["root",n&&"checked",a&&"disabled",i&&"edge".concat(Object(s.a)(i))],input:["input"]};return Object(l.a)(c,m,t)}(H);return Object(O.jsxs)(f,Object(c.a)({component:"span",className:Object(o.a)(G.root,j),centerRipple:!0,focusRipple:!k,disabled:D,tabIndex:null,role:void 0,onFocus:function(e){q&&q(e),U&&U.onFocus&&U.onFocus(e)},onBlur:function(e){w&&w(e),U&&U.onBlur&&U.onBlur(e)},ownerState:H,ref:t},A,{children:[Object(O.jsx)(g,Object(c.a)({autoFocus:n,checked:r,defaultChecked:h,className:G.input,disabled:D,id:P&&N,name:F,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var t=e.target.checked;V(t),L&&L(e,t)}},readOnly:E,ref:R,required:I,ownerState:H,tabIndex:T,type:M},"checkbox"===M&&void 0===z?{}:{value:z},S)),Q?d:B]}))}));t.a=v},411:function(e,t,n){"use strict";var a=n(2),i=n(1),c=n.n(i),r=n(549),o=n(706),l=n(883),s=n(365),d=n(896),u=n(879),b=n(551),j=n(290),h=n(299),p=n(120),m=n(122),O=n(0),x=Object(h.a)((function(e){return Object(j.a)({root:{height:38,lineHeight:1,"label + &":{marginTop:e.spacing(3)}},input:{height:38,position:"relative",color:"#07193E",fontSize:13,fontWeight:600,padding:"8px 20px 10px 10px",border:"#e5e5e5 1px solid",borderRadius:4,display:"flex",alignItems:"center","&:hover":{borderColor:"#393939"},"&:focus":{backgroundColor:"#fff"}}})}))(o.c);t.a=Object(h.a)((function(e){return Object(j.a)(Object(a.a)(Object(a.a)({},p.g),p.A))}))((function(e){var t=e.classes,n=e.id,a=e.name,i=e.onChange,o=e.options,j=e.label,h=e.tooltip,p=void 0===h?"":h,f=e.value,g=e.disabled,v=void 0!==g&&g;return Object(O.jsx)(c.a.Fragment,{children:Object(O.jsxs)(r.a,{item:!0,xs:12,className:t.fieldContainer,children:[""!==j&&Object(O.jsxs)(l.a,{htmlFor:n,className:t.inputLabel,children:[Object(O.jsx)("span",{children:j}),""!==p&&Object(O.jsx)("div",{className:t.tooltipContainer,children:Object(O.jsx)(s.a,{title:p,placement:"top-start",children:Object(O.jsx)("div",{className:t.tooltip,children:Object(O.jsx)(m.a,{})})})})]}),Object(O.jsx)(d.a,{fullWidth:!0,children:Object(O.jsx)(u.a,{id:n,name:a,value:f,onChange:i,input:Object(O.jsx)(x,{}),disabled:v,children:o.map((function(e){return Object(O.jsx)(b.a,{value:e.value,children:e.label},"select-".concat(a,"-").concat(e.label))}))})})]})})}))},442:function(e,t,n){"use strict";var a=n(5),i=n(2),c=(n(1),n(7)),r=n(549),o=n(733),l=n(739),s=n(732),d=n(883),u=n(365),b=n(290),j=n(299),h=n(358),p=n(120),m=n(122),O=n(0),x=Object(h.a)(Object(i.a)({root:{"&:hover":{backgroundColor:"transparent"}}},p.q)),f=function(e){var t=x();return Object(O.jsx)(s.a,Object(i.a)({className:t.root,disableRipple:!0,color:"default",checkedIcon:Object(O.jsx)("span",{className:t.radioSelectedIcon}),icon:Object(O.jsx)("span",{className:t.radioUnselectedIcon})},e))};t.a=Object(j.a)((function(e){return Object(b.a)(Object(i.a)(Object(i.a)(Object(i.a)({},p.g),p.A),{},{radioBoxContainer:{},optionLabel:{"&.Mui-disabled":{"& .MuiFormControlLabel-label":{color:"#9c9c9c"}},"&:last-child":{marginRight:0},"& .MuiFormControlLabel-label":{fontSize:12,color:"#07193E"}},checkedOption:{"& .MuiFormControlLabel-label":{fontSize:12,color:"#07193E",fontWeight:700}}}))}))((function(e){var t=e.selectorOptions,n=void 0===t?[]:t,i=e.currentSelection,s=e.label,b=e.id,j=e.name,h=e.onChange,p=e.tooltip,x=void 0===p?"":p,g=e.disableOptions,v=void 0!==g&&g,k=e.classes,C=e.displayInColumn,y=void 0!==C&&C;return Object(O.jsxs)(r.a,{container:!0,alignItems:"center",children:[Object(O.jsx)(r.a,{item:!0,xs:!0,children:Object(O.jsxs)(d.a,{htmlFor:b,className:k.inputLabel,children:[Object(O.jsx)("span",{children:s}),""!==x&&Object(O.jsx)("div",{className:k.tooltipContainer,children:Object(O.jsx)(u.a,{title:x,placement:"top-start",children:Object(O.jsx)("div",{children:Object(O.jsx)(m.a,{})})})})]})}),Object(O.jsx)(r.a,{item:!0,xs:!0,children:Object(O.jsx)(o.a,{"aria-label":b,id:b,name:j,value:i,onChange:h,row:!y,style:{display:"block",textAlign:"right"},children:n.map((function(e){return Object(O.jsx)(l.a,{value:e.value,control:Object(O.jsx)(f,{}),label:e.label,disabled:v,className:Object(c.a)(k.optionLabel,Object(a.a)({},k.checkedOption,e.value===i))},"rd-".concat(j,"-").concat(e.value))}))})})]})}))},838:function(e,t,n){"use strict";n.r(t);var a=n(14),i=n(2),c=n(1),r=n.n(c),o=n(549),l=n(369),s=n(355),d=n(290),u=n(299),b=n(120),j=n(49),h=n(378),p=n(411),m=n(442),O=n(55),x=n(50),f=n(38),g=n(24);function v(e,t){return e===t}function k(e){return"function"===typeof e?function(){return e}:e}function C(e,t,n){var a=n&&n.equalityFn||v,i=function(e){var t=Object(c.useState)(k(e)),n=t[0],a=t[1];return[n,Object(c.useCallback)((function(e){return a(k(e))}),[])]}(e),r=i[0],o=i[1],l=function(e,t,n){var a=this,i=Object(c.useRef)(null),r=Object(c.useRef)(0),o=Object(c.useRef)(null),l=Object(c.useRef)([]),s=Object(c.useRef)(),d=Object(c.useRef)(),u=Object(c.useRef)(e),b=Object(c.useRef)(!0);u.current=e;var j=!t&&0!==t&&"undefined"!==typeof window;if("function"!==typeof e)throw new TypeError("Expected a function");t=+t||0;var h=!!(n=n||{}).leading,p=!("trailing"in n)||!!n.trailing,m="maxWait"in n,O=m?Math.max(+n.maxWait||0,t):null,x=Object(c.useCallback)((function(e){var t=l.current,n=s.current;return l.current=s.current=null,r.current=e,d.current=u.current.apply(n,t)}),[]),f=Object(c.useCallback)((function(e,t){j&&cancelAnimationFrame(o.current),o.current=j?requestAnimationFrame(e):setTimeout(e,t)}),[j]),g=Object(c.useCallback)((function(e){if(!b.current)return!1;var n=e-i.current,a=e-r.current;return!i.current||n>=t||n<0||m&&a>=O}),[O,m,t]),v=Object(c.useCallback)((function(e){return o.current=null,p&&l.current?x(e):(l.current=s.current=null,d.current)}),[x,p]),k=Object(c.useCallback)((function(){var e=Date.now();if(g(e))return v(e);if(b.current){var n=e-i.current,a=e-r.current,c=t-n,o=m?Math.min(c,O-a):c;f(k,o)}}),[O,m,g,f,v,t]),C=Object(c.useCallback)((function(){o.current&&(j?cancelAnimationFrame(o.current):clearTimeout(o.current)),r.current=0,l.current=i.current=s.current=o.current=null}),[j]),y=Object(c.useCallback)((function(){return o.current?v(Date.now()):d.current}),[v]);Object(c.useEffect)((function(){return b.current=!0,function(){b.current=!1}}),[]);var B=Object(c.useCallback)((function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var c=Date.now(),u=g(c);if(l.current=e,s.current=a,i.current=c,u){if(!o.current&&b.current)return r.current=i.current,f(k,t),h?x(i.current):d.current;if(m)return f(k,t),x(i.current)}return o.current||f(k,t),d.current}),[x,h,m,g,f,k,t]),N=Object(c.useCallback)((function(){return!!o.current}),[]);return Object(c.useMemo)((function(){return{callback:B,cancel:C,flush:y,pending:N}}),[B,C,y,N])}(Object(c.useCallback)((function(e){return o(e)}),[o]),t,n),s=Object(c.useRef)(e);return Object(c.useEffect)((function(){a(s.current,e)||(l.callback(e),s.current=e)}),[e,l,a]),[r,{cancel:l.cancel,pending:l.pending,flush:l.flush}]}var y=n(382),B=n(376),N=n(392),S=n(121),R=n(30),F=n(0),w=Object(f.b)((function(e){return{addBucketModalOpen:e.buckets.open,bucketName:e.buckets.addBucketName,versioningEnabled:e.buckets.addBucketVersioningEnabled,lockingEnabled:e.buckets.addBucketLockingEnabled,quotaEnabled:e.buckets.addBucketQuotaEnabled,quotaType:e.buckets.addBucketQuotaType,quotaSize:e.buckets.addBucketQuotaSize,quotaUnit:e.buckets.addBucketQuotaUnit,retentionEnabled:e.buckets.addBucketRetentionEnabled,retentionMode:e.buckets.addBucketRetentionMode,retentionUnit:e.buckets.addBucketRetentionUnit,retentionValidity:e.buckets.addBucketRetentionValidity,distributedSetup:e.system.distributedSetup}}),{addBucketName:g.r,addBucketVersioned:g.A,enableObjectLocking:g.q,addBucketQuota:g.s,addBucketQuotaType:g.u,addBucketQuotaSize:g.t,addBucketQuotaUnit:g.v,addBucketRetention:g.w,addBucketRetentionMode:g.x,addBucketRetentionUnit:g.y,addBucketRetentionValidity:g.z,setErrorSnackMessage:R.e});t.default=w(Object(u.a)((function(e){return Object(d.a)(Object(i.a)({buttonContainer:{marginTop:24,textAlign:"right","& .MuiButton-root":{marginLeft:8}},multiContainer:{display:"flex",alignItems:"center",justifyContent:"flex-start"},quotaSizeContainer:{flexGrow:1},sizeFactorContainer:{flexGrow:0,maxWidth:80,marginLeft:8,alignSelf:"flex-start"},error:{color:"#b53b4b",border:"1px solid #b53b4b",padding:8,borderRadius:3},title:{marginBottom:8},headTitle:{fontWeight:"bold",fontSize:16,paddingLeft:8},h6title:{fontWeight:"bold",color:"#000000",fontSize:20,paddingBottom:8}},Object(b.e)(e.spacing(4))))}))((function(e){var t=e.classes,n=e.addBucketName,i=e.addBucketVersioned,d=e.enableObjectLocking,u=e.addBucketQuota,b=e.addBucketQuotaType,f=e.addBucketQuotaSize,g=e.addBucketQuotaUnit,v=e.addBucketRetention,k=e.addBucketRetentionMode,R=e.addBucketRetentionUnit,w=e.addBucketRetentionValidity,L=e.setErrorSnackMessage,q=e.bucketName,E=e.versioningEnabled,I=e.lockingEnabled,T=e.quotaEnabled,M=e.quotaType,z=e.quotaSize,A=e.quotaUnit,W=e.retentionEnabled,_=e.retentionMode,Q=e.retentionUnit,V=e.retentionValidity,U=e.distributedSetup,D=Object(c.useState)(!1),P=Object(a.a)(D,2),H=P[0],G=P[1],$=Object(c.useState)(!1),J=Object(a.a)($,2),X=J[0],Y=J[1],K=Object(c.useState)(!1),Z=Object(a.a)(K,2),ee=Z[0],te=Z[1],ne=C(q,1e3),ae=Object(a.a)(ne,1)[0];Object(c.useEffect)((function(){n(ae)}),[ae,n]);var ie=function(){n(""),i(!1),d(!1),u(!1),b("hard"),f("1"),g("TiB"),v(!1),k("compliance"),R("days"),w(1)};return Object(c.useEffect)((function(){var e=!1;""!==q.trim()&&(e=!0),T&&e&&(""!==z.trim()&&0!==parseInt(z)||(e=!1)),E&&W||(v(!1),k("compliance"),R("days"),w(1)),W?(d(!0),te(!0)):te(!1),W&&(Number.isNaN(V)||V<1)&&(e=!1),Y(e)}),[q,W,I,M,z,A,T,v,k,R,w,V,E,d]),Object(F.jsxs)(c.Fragment,{children:[Object(F.jsx)(B.a,{label:"Create a Bucket"}),Object(F.jsxs)(o.a,{container:!0,className:t.container,children:[Object(F.jsx)(o.a,{item:!0,xs:12,children:Object(F.jsx)(N.a,{to:"/buckets",label:"Return to Buckets"})}),Object(F.jsx)(o.a,{item:!0,xs:12,className:t.boxy,children:Object(F.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){!function(e){if(e.preventDefault(),!H){G(!0);var t={name:q,versioning:!!U&&E,locking:!!U&&I};if(U){if(T){var n=Object(O.i)(z,A,!1);t.quota={enabled:!0,quota_type:M,amount:parseInt(n)}}W&&(t.retention={mode:_,unit:Q,validity:V})}j.a.invoke("POST","/api/v1/buckets",t).then((function(e){G(!1);var t="".concat(q);ie(),x.a.push("/buckets/".concat(t,"/browse"))})).catch((function(e){G(!1),L(e)}))}}(e)},children:Object(F.jsxs)(o.a,{container:!0,children:[Object(F.jsxs)(o.a,{item:!0,xs:12,container:!0,className:t.title,children:[Object(F.jsx)(o.a,{item:!0,xs:"auto",children:Object(F.jsx)(S.g,{})}),Object(F.jsx)(o.a,{item:!0,xs:!0,className:t.headTitle,children:"Create Bucket"})]}),Object(F.jsxs)(o.a,{item:!0,xs:12,container:!0,children:[Object(F.jsx)(o.a,{item:!0,xs:12,children:Object(F.jsx)(h.a,{id:"bucket-name",name:"bucket-name",onChange:function(e){n(e.target.value)},label:"Bucket Name",value:q})}),Object(F.jsxs)(o.a,{item:!0,xs:12,children:[Object(F.jsx)("div",{className:t.h6title,children:"Features"}),Object(F.jsx)("br",{}),!U&&Object(F.jsxs)(c.Fragment,{children:[Object(F.jsxs)("div",{className:t.error,children:["These features are unavailable in a single-disk setup.",Object(F.jsx)("br",{}),"Please deploy a server in"," ",Object(F.jsx)("a",{href:"https://docs.min.io/minio/baremetal/installation/deploy-minio-distributed.html?ref=con",target:"_blank",rel:"noreferrer",children:"Distributed Mode"})," ","to use these features."]}),Object(F.jsx)("br",{}),Object(F.jsx)("br",{})]})]}),Object(F.jsx)(o.a,{item:!0,xs:12,children:Object(F.jsx)(y.a,{value:"versioned",id:"versioned",name:"versioned",checked:E,onChange:function(e){i(e.target.checked)},description:"Allows to keep multiple versions of the same object under the same key.",label:"Versioning",disabled:!U})}),Object(F.jsx)(o.a,{item:!0,xs:12,children:Object(F.jsx)(y.a,{value:"locking",id:"locking",name:"locking",disabled:ee||!U,checked:I,onChange:function(e){d(e.target.checked)},label:"Object Locking",description:"Required to support retention and legal hold. Can only be enabled at bucket creation."})}),Object(F.jsx)(o.a,{item:!0,xs:12,children:Object(F.jsx)(y.a,{value:"bucket_quota",id:"bucket_quota",name:"bucket_quota",checked:T,onChange:function(e){u(e.target.checked)},label:"Quota",description:"Limit the amount of data in the bucket.",disabled:!U})}),T&&U&&Object(F.jsxs)(r.a.Fragment,{children:[Object(F.jsx)(o.a,{item:!0,xs:12,children:Object(F.jsx)(m.a,{currentSelection:M,id:"quota_type",name:"quota_type",label:"Quota Type",onChange:function(e){b(e.target.value)},selectorOptions:[{value:"hard",label:"Hard"},{value:"fifo",label:"FIFO"}]})}),Object(F.jsx)(o.a,{item:!0,xs:12,children:Object(F.jsxs)(o.a,{container:!0,children:[Object(F.jsx)(o.a,{item:!0,xs:10,children:Object(F.jsx)(h.a,{type:"number",id:"quota_size",name:"quota_size",onChange:function(e){f(e.target.value)},label:"Quota",value:z,required:!0,min:"1"})}),Object(F.jsx)(o.a,{item:!0,xs:2,children:Object(F.jsx)("div",{style:{width:100},children:Object(F.jsx)(p.a,{label:"",id:"quota_unit",name:"quota_unit",value:A,onChange:function(e){g(e.target.value)},options:Object(O.g)()})})})]})})]}),E&&U&&Object(F.jsx)(o.a,{item:!0,xs:12,children:Object(F.jsx)(y.a,{value:"bucket_retention",id:"bucket_retention",name:"bucket_retention",checked:W,onChange:function(e){v(e.target.checked)},label:"Retention",description:"Impose rules to prevent object deletion for a period of time."})}),W&&U&&Object(F.jsxs)(r.a.Fragment,{children:[Object(F.jsx)(o.a,{item:!0,xs:12,children:Object(F.jsx)(m.a,{currentSelection:_,id:"retention_mode",name:"retention_mode",label:"Retention Mode",onChange:function(e){k(e.target.value)},selectorOptions:[{value:"compliance",label:"Compliance"},{value:"governance",label:"Governance"}]})}),Object(F.jsx)(o.a,{item:!0,xs:12,children:Object(F.jsx)(m.a,{currentSelection:Q,id:"retention_unit",name:"retention_unit",label:"Retention Unit",onChange:function(e){R(e.target.value)},selectorOptions:[{value:"days",label:"Days"},{value:"years",label:"Years"}]})}),Object(F.jsx)(o.a,{item:!0,xs:12,children:Object(F.jsx)(h.a,{type:"number",id:"retention_validity",name:"retention_validity",onChange:function(e){w(e.target.valueAsNumber)},label:"Retention Validity",value:String(V),required:!0,min:"1"})})]})]}),Object(F.jsxs)(o.a,{item:!0,xs:12,className:t.buttonContainer,children:[Object(F.jsx)(l.a,{type:"button",variant:"outlined",className:t.clearButton,onClick:ie,children:"Clear"}),Object(F.jsx)(l.a,{type:"submit",variant:"contained",color:"primary",disabled:H||!X,children:"Create Bucket"})]}),H&&Object(F.jsx)(o.a,{item:!0,xs:12,children:Object(F.jsx)(s.a,{})})]})})})]})]})})))}}]);
//# sourceMappingURL=43.fc3b9aa0.chunk.js.map