"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[8455],{58455:function(e,n,l){l.r(n);var a=l(29439),t=l(1413),i=l(72791),s=l(56028),o=l(61889),c=l(29945),r=l(11135),d=l(25787),u=l(23814),x=l(90673),h=l(87995),p=l(81551),f=l(31776),m=l(82342),b=l(80184);n.default=(0,d.Z)((function(e){return(0,r.Z)((0,t.Z)((0,t.Z)({},u.ID),u.bK))}))((function(e){var n=e.modalOpen,l=e.onClose,t=e.classes,r=e.bucket,d=e.toEdit,u=e.initial,Z=(0,p.TL)(),v=(0,i.useState)(u),j=(0,a.Z)(v,2),g=j[0],C=j[1];return(0,b.jsx)(i.Fragment,{children:(0,b.jsx)(s.Z,{modalOpen:n,title:"Edit Anonymous Access Rule for ".concat("".concat(r,"/").concat(d||"")),onClose:l,titleIcon:(0,b.jsx)(c.sR0,{}),children:(0,b.jsxs)(o.ZP,{container:!0,children:[(0,b.jsx)(o.ZP,{item:!0,xs:12,className:t.spacerTop,children:(0,b.jsx)(x.Z,{id:"access",name:"Access",onChange:function(e){C(e.target.value)},label:"Access",value:g,options:[{label:"readonly",value:"readonly"},{label:"writeonly",value:"writeonly"},{label:"readwrite",value:"readwrite"}],disabled:!1})}),(0,b.jsxs)(o.ZP,{item:!0,xs:12,className:t.modalButtonBar,children:[(0,b.jsx)(c.zxk,{id:"clear",type:"button",variant:"regular",onClick:function(){C(u)},label:"Clear"}),(0,b.jsx)(c.zxk,{id:"save",type:"submit",variant:"callAction",onClick:function(){f.h.bucket.setAccessRuleWithBucket(r,{prefix:d,access:g}).then((function(){l()})).catch((function(e){Z((0,h.Ih)((0,m.g)(e.error))),l()}))},label:"Save"})]})]})})})}))},90673:function(e,n,l){var a=l(1413),t=l(72791),i=l(61889),s=l(886),o=l(30829),c=l(20068),r=l(68096),d=l(58406),u=l(77865),x=l(11135),h=l(25787),p=l(23814),f=l(29945),m=l(80184),b=(0,h.Z)((function(e){return(0,x.Z)({root:{height:38,lineHeight:1,"label + &":{marginTop:e.spacing(3)}},input:{height:38,position:"relative",color:"#07193E",fontSize:13,fontWeight:600,padding:"8px 20px 10px 10px",border:"#e5e5e5 1px solid",borderRadius:4,display:"flex",alignItems:"center","&:hover":{borderColor:"#393939"},"&:focus":{backgroundColor:"#fff"}}})}))(s.ZP);n.Z=(0,h.Z)((function(e){return(0,x.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},p.YI),p.Hr),{},{fieldContainer:{display:"flex","@media (max-width: 600px)":{flexFlow:"column"}}}))}))((function(e){var n=e.classes,l=e.id,a=e.name,s=e.onChange,x=e.options,h=e.label,p=e.tooltip,Z=void 0===p?"":p,v=e.value,j=e.disabled,g=void 0!==j&&j;return(0,m.jsx)(t.Fragment,{children:(0,m.jsxs)(i.ZP,{item:!0,xs:12,className:n.fieldContainer,children:[""!==h&&(0,m.jsxs)(o.Z,{htmlFor:l,className:n.inputLabel,children:[(0,m.jsx)("span",{children:h}),""!==Z&&(0,m.jsx)("div",{className:n.tooltipContainer,children:(0,m.jsx)(c.Z,{title:Z,placement:"top-start",children:(0,m.jsx)("div",{className:n.tooltip,children:(0,m.jsx)(f.byK,{})})})})]}),(0,m.jsx)(r.Z,{fullWidth:!0,children:(0,m.jsx)(d.Z,{id:l,name:a,value:v,onChange:s,input:(0,m.jsx)(b,{}),disabled:g,children:x.map((function(e){return(0,m.jsx)(u.Z,{value:e.value,children:e.label},"select-".concat(a,"-").concat(e.label))}))})})]})})}))}}]);
//# sourceMappingURL=8455.c65159aa.chunk.js.map