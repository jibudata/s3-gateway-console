(this["webpackJsonpportal-ui"]=this["webpackJsonpportal-ui"]||[]).push([[144],{482:function(e,t,n){"use strict";var a=n(36),i=n(4),c=n(3),r=n(2),o=(n(12),n(8)),s=n(94),l=n(33),b=n(11),d=n(14),u=n(9),j=n(70),m=n(95);function f(e){return Object(j.a)("MuiCircularProgress",e)}Object(m.a)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var v,O,h,p,x,g,k,y,F=n(0),S=["className","color","disableShrink","size","style","thickness","value","variant"],N=44,I=Object(l.c)(x||(x=v||(v=Object(a.a)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),B=Object(l.c)(g||(g=O||(O=Object(a.a)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),w=Object(u.a)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],t["color".concat(Object(b.a)(n.color))]]}})((function(e){var t=e.ownerState,n=e.theme;return Object(c.a)({display:"inline-block"},"determinate"===t.variant&&{transition:n.transitions.create("transform")},"inherit"!==t.color&&{color:n.palette[t.color].main})}),(function(e){return"indeterminate"===e.ownerState.variant&&Object(l.b)(k||(k=h||(h=Object(a.a)(["\n      animation: "," 1.4s linear infinite;\n    "]))),I)})),C=Object(u.a)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(e,t){return t.svg}})({display:"block"}),D=Object(u.a)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(e,t){var n=e.ownerState;return[t.circle,t["circle".concat(Object(b.a)(n.variant))],n.disableShrink&&t.circleDisableShrink]}})((function(e){var t=e.ownerState,n=e.theme;return Object(c.a)({stroke:"currentColor"},"determinate"===t.variant&&{transition:n.transitions.create("stroke-dashoffset")},"indeterminate"===t.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(e){var t=e.ownerState;return"indeterminate"===t.variant&&!t.disableShrink&&Object(l.b)(y||(y=p||(p=Object(a.a)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),B)})),T=r.forwardRef((function(e,t){var n=Object(d.a)({props:e,name:"MuiCircularProgress"}),a=n.className,r=n.color,l=void 0===r?"primary":r,u=n.disableShrink,j=void 0!==u&&u,m=n.size,v=void 0===m?40:m,O=n.style,h=n.thickness,p=void 0===h?3.6:h,x=n.value,g=void 0===x?0:x,k=n.variant,y=void 0===k?"indeterminate":k,I=Object(i.a)(n,S),B=Object(c.a)({},n,{color:l,disableShrink:j,size:v,thickness:p,value:g,variant:y}),T=function(e){var t=e.classes,n=e.variant,a=e.color,i=e.disableShrink,c={root:["root",n,"color".concat(Object(b.a)(a))],svg:["svg"],circle:["circle","circle".concat(Object(b.a)(n)),i&&"circleDisableShrink"]};return Object(s.a)(c,f,t)}(B),P={},M={},L={};if("determinate"===y){var _=2*Math.PI*((N-p)/2);P.strokeDasharray=_.toFixed(3),L["aria-valuenow"]=Math.round(g),P.strokeDashoffset="".concat(((100-g)/100*_).toFixed(3),"px"),M.transform="rotate(-90deg)"}return Object(F.jsx)(w,Object(c.a)({className:Object(o.a)(T.root,a),style:Object(c.a)({width:v,height:v},M,O),ownerState:B,ref:t,role:"progressbar"},L,I,{children:Object(F.jsx)(C,{className:T.svg,ownerState:B,viewBox:"".concat(22," ").concat(22," ").concat(N," ").concat(N),children:Object(F.jsx)(D,{className:T.circle,style:P,ownerState:B,cx:N,cy:N,r:(N-p)/2,fill:"none",strokeWidth:p})})}))}));t.a=T},920:function(e,t,n){"use strict";n.r(t);var a=n(16),i=n(1),c=n(2),r=n.n(c),o=n(41),s=n(307),l=n(319),b=n(482),d=n(443),u=n(122),j=n(32),m=n(479),f=n(96),v=n(385),O=n(58),h=n(551),p=n.n(h),x=n(20),g=n(386),k=n(0),y=Object(l.a)((function(e){return Object(s.a)(Object(i.a)({paperContainer:{padding:"15px 15px 15px 50px"},licenseInfoValue:{textTransform:"none",fontSize:14,fontWeight:"bold"},licenseContainer:{position:"relative",padding:"20px 52px 0px 28px",background:"#032F51",boxShadow:"0px 3px 7px #00000014","& h2":{color:"#FFF",marginBottom:67},"& a":{textDecoration:"none"},"& h3":{color:"#FFFFFF",marginBottom:"30px",fontWeight:"bold"},"& h6":{color:"#FFFFFF !important"}},licenseInfo:{color:"#FFFFFF",position:"relative"},licenseInfoTitle:{textTransform:"none",color:"#BFBFBF",fontSize:11},verifiedIcon:{width:96,position:"absolute",right:0,bottom:29},noUnderLine:{textDecoration:"none"}},Object(u.f)(e.spacing(4))))}))((function(e){var t=e.classes,n=e.tenant,a=e.loadingActivateProduct,i=e.loadingLicenseInfo,c=e.licenseInfo,o=e.activateProduct;return Object(k.jsx)(g.a,{className:n&&n.subnet_license?t.licenseContainer:"",children:n&&n.subnet_license?Object(k.jsx)(r.a.Fragment,{children:Object(k.jsxs)(d.a,{container:!0,className:t.licenseInfo,children:[Object(k.jsxs)(d.a,{item:!0,xs:6,children:[Object(k.jsx)(f.a,{variant:"button",display:"block",gutterBottom:!0,className:t.licenseInfoTitle,children:"License"}),Object(k.jsx)(f.a,{variant:"overline",display:"block",gutterBottom:!0,className:t.licenseInfoValue,children:"Commercial License"}),Object(k.jsx)(f.a,{variant:"button",display:"block",gutterBottom:!0,className:t.licenseInfoTitle,children:"Organization"}),Object(k.jsx)(f.a,{variant:"overline",display:"block",gutterBottom:!0,className:t.licenseInfoValue,children:n.subnet_license.organization}),Object(k.jsx)(f.a,{variant:"button",display:"block",gutterBottom:!0,className:t.licenseInfoTitle,children:"Registered Capacity"}),Object(k.jsx)(f.a,{variant:"overline",display:"block",gutterBottom:!0,className:t.licenseInfoValue,children:Object(O.l)((1099511627776*n.subnet_license.storage_capacity).toString(10))}),Object(k.jsx)(f.a,{variant:"button",display:"block",gutterBottom:!0,className:t.licenseInfoTitle,children:"Expiry Date"}),Object(k.jsx)(f.a,{variant:"overline",display:"block",gutterBottom:!0,className:t.licenseInfoValue,children:Object(k.jsx)(p.a,{format:"YYYY-MM-DD",children:n.subnet_license.expires_at})})]}),Object(k.jsxs)(d.a,{item:!0,xs:6,children:[Object(k.jsx)(f.a,{variant:"button",display:"block",gutterBottom:!0,className:t.licenseInfoTitle,children:"Subscription Plan"}),Object(k.jsx)(f.a,{variant:"overline",display:"block",gutterBottom:!0,className:t.licenseInfoValue,children:n.subnet_license.plan}),Object(k.jsx)(f.a,{variant:"button",display:"block",gutterBottom:!0,className:t.licenseInfoTitle,children:"Requestor"}),Object(k.jsx)(f.a,{variant:"overline",display:"block",gutterBottom:!0,className:t.licenseInfoValue,children:n.subnet_license.email})]}),Object(k.jsx)("img",{className:t.verifiedIcon,src:"/verified.svg",alt:"verified"})]})}):!i&&Object(k.jsxs)(d.a,{className:t.paperContainer,children:[!c&&Object(k.jsx)(x.a,{to:"/license",onClick:function(e){e.stopPropagation()},className:t.noUnderLine,children:Object(k.jsx)(v.a,{className:t.licenseButton,variant:"contained",color:"primary",children:"Activate Product"})}),c&&n&&Object(k.jsx)(v.a,{disabled:a,className:t.licenseButton,variant:"contained",color:"primary",onClick:function(){return o(n.namespace,n.name)},children:"Attach License"})]})})})),F=n(52),S=Object(o.b)((function(e){return{loadingTenant:e.tenants.tenantDetails.loadingTenant,tenant:e.tenants.tenantDetails.tenantInfo}}),{setErrorSnackMessage:j.e,setTenantDetailsLoad:m.p});t.default=Object(l.a)((function(e){return Object(s.a)(Object(i.a)(Object(i.a)({},u.C),{},{loaderAlign:{textAlign:"center"}},Object(u.f)(e.spacing(4))))}))(S((function(e){var t=e.classes,n=e.tenant,i=e.loadingTenant,r=e.setTenantDetailsLoad,o=Object(c.useState)(),s=Object(a.a)(o,2),l=s[0],u=s[1],m=Object(c.useState)(!0),f=Object(a.a)(m,2),v=f[0],O=f[1],h=Object(c.useState)(!1),p=Object(a.a)(h,2),x=p[0],g=p[1];return Object(c.useEffect)((function(){v&&F.a.invoke("GET","/api/v1/subscription/info").then((function(e){u(e),O(!1)})).catch((function(e){O(!1)}))}),[v]),Object(k.jsxs)(c.Fragment,{children:[Object(k.jsx)("h1",{className:t.sectionTitle,children:"License"}),i?Object(k.jsx)("div",{className:t.loaderAlign,children:Object(k.jsx)(b.a,{})}):Object(k.jsx)(c.Fragment,{children:n&&Object(k.jsx)(d.a,{container:!0,children:Object(k.jsx)(d.a,{item:!0,xs:12,children:Object(k.jsx)(y,{tenant:n,loadingLicenseInfo:v,loadingActivateProduct:x,licenseInfo:l,activateProduct:function(e,t){x||(g(!0),F.a.invoke("POST","/api/v1/subscription/namespaces/".concat(e,"/tenants/").concat(t,"/activate"),{}).then((function(){g(!1),r(!0),O(!0)})).catch((function(e){g(!1),Object(j.e)(e)})))}})})})})]})})))}}]);
//# sourceMappingURL=144.48a07121.chunk.js.map