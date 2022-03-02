"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[6873],{70887:function(e,n,t){var i=t(18489),a=t(50390),o=t(25594),l=t(36554),r=t(94187),s=t(12066),c=t(86509),d=t(4285),u=t(72462),p=t(97538),h=t(62559);n.Z=(0,d.Z)((function(e){return(0,c.Z)((0,i.Z)((0,i.Z)((0,i.Z)({},u.YI),u.Hr),{},{inputLabel:(0,i.Z)((0,i.Z)({},u.YI.inputLabel),{},{fontSize:14,margin:0,alignItems:"flex-start",paddingTop:"20px",flexWrap:"wrap",display:"flex"}),textBoxContainer:{flexGrow:1,position:"relative"},cssOutlinedInput:{borderColor:"#EAEAEA",padding:16},rootContainer:{"& .MuiOutlinedInput-inputMultiline":(0,i.Z)((0,i.Z)({},u.YI.inputLabel),{},{fontSize:13,minHeight:150}),"&.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"#07193E",borderWidth:1},"& textarea":{color:"#07193E",fontSize:13,fontWeight:600,"&:placeholder":{color:"#858585",opacity:1,fontWeight:400}}}}))}))((function(e){var n=e.label,t=e.onChange,i=e.value,c=e.id,d=e.name,u=e.disabled,m=void 0!==u&&u,x=e.tooltip,f=void 0===x?"":x,v=e.index,Z=void 0===v?0:v,b=e.error,g=void 0===b?"":b,j=e.required,C=void 0!==j&&j,N=e.placeholder,F=void 0===N?"":N,w=e.classes,y={"data-index":Z};return(0,h.jsx)(a.Fragment,{children:(0,h.jsxs)(o.ZP,{item:!0,xs:12,className:"".concat(w.fieldContainer," ").concat(""!==g?w.errorInField:""),children:[""!==n&&(0,h.jsxs)(l.Z,{htmlFor:c,className:w.inputLabel,children:[(0,h.jsxs)("span",{children:[n,C?"*":""]}),""!==f&&(0,h.jsx)("div",{className:w.tooltipContainer,children:(0,h.jsx)(r.Z,{title:f,placement:"top-start",children:(0,h.jsx)("div",{className:w.tooltip,children:(0,h.jsx)(p.Z,{})})})})]}),(0,h.jsx)("div",{className:w.textBoxContainer,children:(0,h.jsx)(s.Z,{id:c,name:d,fullWidth:!0,value:i,disabled:m,onChange:t,multiline:!0,rows:5,inputProps:y,error:""!==g,helperText:g,placeholder:F,InputLabelProps:{shrink:!0},InputProps:{classes:{notchedOutline:w.cssOutlinedInput,root:w.rootContainer}},variant:"outlined"})})]})})}))},92440:function(e,n,t){var i=t(36222),a=t(18489),o=t(50390),l=t(86509),r=t(4285),s=t(49056),c=t(36554),d=t(94187),u=t(35477),p=t(25594),h=t(72462),m=t(97538),x=t(44977),f=t(62559),v=(0,r.Z)((function(e){return{root:{width:50,height:24,padding:0,margin:0},switchBase:{padding:1,"&$checked":{transform:"translateX(24px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#4CCB92",boxShadow:"inset 0px 1px 4px rgba(0,0,0,0.1)",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#4CCB92",border:"6px solid #fff"}},thumb:{width:22,height:22,backgroundColor:"#FAFAFA",border:"2px solid #FFFFFF",marginLeft:1},track:{borderRadius:12,backgroundColor:"#E2E2E2",boxShadow:"inset 0px 1px 4px rgba(0,0,0,0.1)",opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{},switchContainer:{display:"flex",alignItems:"center",justifyContent:"flex-end"}}}))(s.Z);n.Z=(0,r.Z)((function(e){return(0,l.Z)((0,a.Z)((0,a.Z)({divContainer:{marginBottom:20},indicatorLabelOn:{fontWeight:"bold",color:"#081C42 !important"},indicatorLabel:{fontSize:12,color:"#E2E2E2",margin:"0 8px 0 10px"},fieldDescription:{marginTop:4,color:"#999999"},tooltip:{fontSize:16}},h.OR),h.YI))}))((function(e){var n=e.label,t=void 0===n?"":n,l=e.onChange,r=e.value,s=e.id,h=e.name,Z=e.checked,b=void 0!==Z&&Z,g=e.disabled,j=void 0!==g&&g,C=e.switchOnly,N=void 0!==C&&C,F=e.tooltip,w=void 0===F?"":F,y=e.description,I=void 0===y?"":y,L=e.classes,P=e.indicatorLabels,k=e.extraInputProps,E=void 0===k?{}:k,B=(0,f.jsxs)(o.Fragment,{children:[!N&&(0,f.jsx)("span",{className:(0,x.Z)(L.indicatorLabel,(0,i.Z)({},L.indicatorLabelOn,!b)),children:P&&P.length>1?P[1]:"OFF"}),(0,f.jsx)(v,{checked:b,onChange:l,color:"primary",name:h,inputProps:(0,a.Z)({"aria-label":"primary checkbox"},E),disabled:j,disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0,value:r}),!N&&(0,f.jsx)("span",{className:(0,x.Z)(L.indicatorLabel,(0,i.Z)({},L.indicatorLabelOn,b)),children:P?P[0]:"ON"})]});return N?B:(0,f.jsx)("div",{className:L.divContainer,children:(0,f.jsxs)(p.ZP,{container:!0,alignItems:"center",children:[(0,f.jsx)(p.ZP,{item:!0,xs:!0,children:(0,f.jsxs)(p.ZP,{container:!0,children:[(0,f.jsx)(p.ZP,{item:!0,xs:12,sm:""!==I?4:10,md:""!==I?3:9,children:""!==t&&(0,f.jsxs)(c.Z,{htmlFor:s,className:L.inputLabel,children:[(0,f.jsx)("span",{children:t}),""!==w&&(0,f.jsx)("div",{className:L.tooltipContainer,children:(0,f.jsx)(d.Z,{title:w,placement:"top-start",children:(0,f.jsx)("div",{className:L.tooltip,children:(0,f.jsx)(m.Z,{})})})})]})}),(0,f.jsx)(p.ZP,{item:!0,xs:12,sm:!0,textAlign:"left",children:""!==I&&(0,f.jsx)(u.Z,{component:"p",className:L.fieldDescription,children:I})})]})}),(0,f.jsx)(p.ZP,{item:!0,xs:12,sm:2,textAlign:"right",className:L.switchContainer,children:B})]})})}))},66964:function(e,n,t){var i=t(18489),a=t(50390),o=t(12066),l=t(25594),r=t(36554),s=t(94187),c=t(95467),d=t(86509),u=t(62449),p=t(4285),h=t(72462),m=t(97538),x=t(44977),f=t(62559),v=(0,u.Z)((function(e){return(0,d.Z)((0,i.Z)({},h.gM))}));function Z(e){var n=v();return(0,f.jsx)(o.Z,(0,i.Z)({InputProps:{classes:n}},e))}n.Z=(0,p.Z)((function(e){return(0,d.Z)((0,i.Z)((0,i.Z)((0,i.Z)({},h.YI),h.Hr),{},{textBoxContainer:{flexGrow:1,position:"relative"},overlayAction:{position:"absolute",right:5,top:6,"& svg":{maxWidth:15,maxHeight:15},"&.withLabel":{top:5}},inputLabel:(0,i.Z)((0,i.Z)({},h.YI.inputLabel),{},{fontWeight:"normal"})}))}))((function(e){var n=e.label,t=e.onChange,o=e.value,d=e.id,u=e.name,p=e.type,h=void 0===p?"text":p,v=e.autoComplete,b=void 0===v?"off":v,g=e.disabled,j=void 0!==g&&g,C=e.multiline,N=void 0!==C&&C,F=e.tooltip,w=void 0===F?"":F,y=e.index,I=void 0===y?0:y,L=e.error,P=void 0===L?"":L,k=e.required,E=void 0!==k&&k,B=e.placeholder,A=void 0===B?"":B,O=e.min,R=e.max,S=e.overlayIcon,W=void 0===S?null:S,Y=e.overlayObject,T=void 0===Y?null:Y,M=e.extraInputProps,z=void 0===M?{}:M,D=e.overlayAction,H=e.noLabelMinWidth,V=void 0!==H&&H,$=e.pattern,_=void 0===$?"":$,q=e.autoFocus,G=void 0!==q&&q,K=e.classes,X=e.className,J=void 0===X?"":X,Q=e.onKeyPress,U=(0,i.Z)({"data-index":I},z);return"number"===h&&O&&(U.min=O),"number"===h&&R&&(U.max=R),""!==_&&(U.pattern=_),(0,f.jsx)(a.Fragment,{children:(0,f.jsxs)(l.ZP,{container:!0,className:(0,x.Z)(""!==J?J:"",""!==P?K.errorInField:K.inputBoxContainer),children:[""!==n&&(0,f.jsxs)(r.Z,{htmlFor:d,className:V?K.noMinWidthLabel:K.inputLabel,children:[(0,f.jsxs)("span",{children:[n,E?"*":""]}),""!==w&&(0,f.jsx)("div",{className:K.tooltipContainer,children:(0,f.jsx)(s.Z,{title:w,placement:"top-start",children:(0,f.jsx)("div",{className:K.tooltip,children:(0,f.jsx)(m.Z,{})})})})]}),(0,f.jsxs)("div",{className:K.textBoxContainer,children:[(0,f.jsx)(Z,{id:d,name:u,fullWidth:!0,value:o,autoFocus:G,disabled:j,onChange:t,type:h,multiline:N,autoComplete:b,inputProps:U,error:""!==P,helperText:P,placeholder:A,className:K.inputRebase,onKeyPress:Q}),W&&(0,f.jsx)("div",{className:"".concat(K.overlayAction," ").concat(""!==n?"withLabel":""),children:(0,f.jsx)(c.Z,{onClick:D?function(){D()}:function(){return null},size:"small",disableFocusRipple:!1,disableRipple:!1,disableTouchRipple:!1,children:W})}),T&&(0,f.jsx)("div",{className:"".concat(K.overlayAction," ").concat(""!==n?"withLabel":""),children:T})]})]})})}))},96873:function(e,n,t){t.r(n),t.d(n,{default:function(){return w},valueDef:function(){return F}});var i=t(35531),a=t(23430),o=t(18489),l=t(50390),r=t(86509),s=t(4285),c=t(25594),d=t(72462),u=t(66964),p=t(38342),h=t.n(p),m=t(3143),x=t.n(m),f=t(36554),v=t(94187),Z=t(97538),b=t(14792),g=t(62559),j=(0,s.Z)((function(e){return(0,r.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},d.YI),d.Hr),{},{inputWithBorder:{border:"1px solid #EAEAEA",padding:15,height:150,overflowY:"auto",position:"relative",marginTop:15,flex:1},inputBoxSpacer:{marginBottom:7},inputLabel:(0,o.Z)((0,o.Z)({},d.YI.inputLabel),{},{margin:0,alignItems:"flex-start",paddingTop:"20px",minWidth:162})}))}))((function(e){var n=e.elements,t=e.name,o=e.label,r=e.tooltip,s=void 0===r?"":r,d=e.commonPlaceholder,p=void 0===d?"":d,m=e.onChange,j=e.withBorder,C=void 0!==j&&j,N=e.classes,F=(0,l.useState)([""]),w=(0,a.Z)(F,2),y=w[0],I=w[1],L=(0,l.createRef)();(0,l.useEffect)((function(){if(1===y.length&&""===y[0]&&n&&""!==n){var e=n.split(",");e.push(""),I(e)}}),[n,y]),(0,l.useEffect)((function(){if(y.length>1){var e=L.current;e&&e.scrollIntoView(!1)}}),[y,L]);var P=(0,l.useRef)(!0);(0,l.useLayoutEffect)((function(){P.current?P.current=!1:E()}),[y]);var k=function(e){e.persist();var n=(0,i.Z)(y);n[h()(e.target,"dataset.index",0)]=e.target.value,I(n)},E=x()((function(){var e=y.filter((function(e){return""!==e.trim()})).join(",");m(e)}),500),B=y.map((function(e,n){return(0,g.jsx)("div",{className:N.inputBoxSpacer,children:(0,g.jsx)(u.Z,{id:"".concat(t,"-").concat(n.toString()),label:"",name:"".concat(t,"-").concat(n.toString()),value:y[n],onChange:k,index:n,placeholder:p,overlayIcon:n===y.length-1?(0,g.jsx)(b.Z,{}):null,overlayAction:function(){!function(e){if(""!==e[e.length-1].trim()){var n=(0,i.Z)(e);n.push(""),I(n)}}(y)}},"csv-".concat(t,"-").concat(n.toString()))})}));return(0,g.jsx)(l.Fragment,{children:(0,g.jsxs)(c.ZP,{item:!0,xs:12,className:N.fieldContainer,children:[(0,g.jsxs)(f.Z,{className:N.inputLabel,children:[(0,g.jsx)("span",{children:o}),""!==s&&(0,g.jsx)("div",{className:N.tooltipContainer,children:(0,g.jsx)(v.Z,{title:s,placement:"top-start",children:(0,g.jsx)("div",{className:N.tooltip,children:(0,g.jsx)(Z.Z,{})})})})]}),(0,g.jsxs)(c.ZP,{item:!0,xs:12,className:"".concat(C?N.inputWithBorder:""),children:[B,(0,g.jsx)("div",{ref:L})]})]})})})),C=t(70887),N=t(92440),F=function(e,n,t){var i="on|off"===n?"false":"";if(t.length>0){var a=t.find((function(n){return n.key===e}));a&&(i=a.value)}return i},w=(0,s.Z)((function(e){return(0,r.Z)((0,o.Z)((0,o.Z)({},d.DF),{},{formFieldRow:(0,o.Z)({},d.DF.formFieldRow)},d.oO))}))((function(e){var n=e.onChange,t=e.fields,o=e.defaultVals,r=e.classes,s=(0,l.useState)([]),d=(0,a.Z)(s,2),p=d[0],h=d[1],m=t||[],x=o||[];(0,l.useEffect)((function(){var e=[];t.forEach((function(n){var t={key:n.name,value:F(n.name,n.type,x)};e.push(t)})),h(e)}),[t,o]),(0,l.useEffect)((function(){n(p)}),[p]);var f=function(e,n,t){var a=(0,i.Z)(p);a[t]={key:e,value:n},h(a)},v=function(e,n){switch(e.type){case"on|off":var t=p[n]?p[n].value:"false";return(0,g.jsx)(N.Z,{onChange:function(t){var i=t.target.checked?"true":"false";f(e.name,i,n)},id:e.name,name:e.name,label:e.label,value:"switch_on",tooltip:e.tooltip,checked:"true"===t});case"csv":return(0,g.jsx)(j,{elements:p[n]?p[n].value:"",label:e.label,name:e.name,onChange:function(t){return f(e.name,t,n)},tooltip:e.tooltip,commonPlaceholder:e.placeholder,withBorder:!0});case"comment":return(0,g.jsx)(C.Z,{id:e.name,name:e.name,label:e.label,tooltip:e.tooltip,value:p[n]?p[n].value:"",onChange:function(t){return f(e.name,t.target.value,n)},placeholder:e.placeholder});default:return(0,g.jsx)(u.Z,{id:e.name,name:e.name,label:e.label,tooltip:e.tooltip,value:p[n]?p[n].value:"",onChange:function(t){return f(e.name,t.target.value,n)},multiline:!!e.multiline,placeholder:e.placeholder})}};return(0,g.jsx)(c.ZP,{container:!0,children:(0,g.jsx)(c.ZP,{xs:12,item:!0,className:r.fieldBox,children:m.map((function(e,n){return(0,g.jsx)(c.ZP,{item:!0,xs:12,className:r.formFieldRow,children:v(e,n)},e.name)}))})})}))}}]);
//# sourceMappingURL=6873.24e34528.chunk.js.map