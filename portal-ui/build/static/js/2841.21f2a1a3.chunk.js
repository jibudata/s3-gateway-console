"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[2841],{53224:function(e,t,n){var a=n(18489),i=n(83738),s=(n(50390),n(70758)),l=n(62449),r=n(62559),o=["onClick","text","disabled","tooltip","icon"],c=(0,l.Z)((function(e){return{root:{padding:"7px",color:function(t){return function(t){var n=t.variant,a=t.color,i=e.palette.primary.main;return"primary"===a&&"contained"===n?i=e.palette.primary.contrastText:"primary"===a&&"outlined"===n?i=e.palette.primary.main:"secondary"===a&&(i=e.palette.secondary.main),i}(t)},borderColor:function(t){return"secondary"===t.color?e.palette.secondary.main:e.palette.primary.main},"& svg.min-icon":{width:12,marginLeft:function(e){return e.text?"5px":"0px"},"@media (max-width: 900px)":{width:16,marginLeft:"0px !important"}}}}}));t.Z=function(e){var t=c(e),n=e.onClick,l=e.text,d=void 0===l?"":l,u=e.disabled,m=void 0!==u&&u,g=e.tooltip,h=e.icon,x=void 0===h?null:h,v=(0,i.Z)(e,o);return(0,r.jsxs)(s.Z,(0,a.Z)((0,a.Z)({classes:t,tooltip:g||d,variant:"outlined",onClick:n,disabled:m,color:"secondary",size:"medium",sx:{border:"1px solid #f44336","& span":{fontSize:14,"@media (max-width: 900px)":{display:"none"}}}},v),{},{children:[(0,r.jsx)("span",{children:d})," ",x]}))}},55572:function(e,t,n){var a=n(35531),i=n(18489),s=n(50390),l=n(86509),r=n(4285),o=n(72462),c=n(66964),d=n(94187),u=n(95467),m=n(96152),g=n(43615),h=n(84201),x=n(10369),v=n(62559);t.Z=(0,r.Z)((function(e){return(0,l.Z)((0,i.Z)({buttonContainer:{textAlign:"right"},multiContainer:{display:"flex",alignItems:"center",justifyContent:"flex-start"},sizeFactorContainer:{marginLeft:8},bottomContainer:{display:"flex",flexGrow:1,alignItems:"center","& div":{flexGrow:1,width:"100%"}},factorElements:{display:"flex",justifyContent:"flex-start"},sizeNumber:{fontSize:35,fontWeight:700,textAlign:"center"},sizeDescription:{fontSize:14,color:"#777",textAlign:"center"},shortened:{gridTemplateColumns:"auto auto 20px 20px",display:"grid",gridGap:20,paddingRight:20}},o.oO))}))((function(e){var t=e.classes,n=e.paramName,i=e.newValues,l=e.setNewValues,r=e.error,o=e.setError,p=function(e){o((0,x.h)(r,e))};(0,s.useEffect)((function(){for(var e=[],t=0;t<i.length;t++)e.push({fieldKey:"key-".concat(t.toString()),required:!1,value:i[t].key,pattern:/^[a-zA-Z0-9-_.]{1,63}$/,customPatternMessage:"Invalid key"}),e.push({fieldKey:"val-".concat(t.toString()),required:!1,value:i[t].value,pattern:/^[a-zA-Z0-9-_.]{1,63}$/,customPatternMessage:"Invalid value"});var n=(0,h.R)(e);o(n)}),[i,o]);var Z=i.map((function(e,o){return(0,v.jsx)(s.Fragment,{children:(0,v.jsxs)("div",{className:t.shortened,children:[(0,v.jsx)(c.Z,{id:"key-".concat(o.toString()),label:"",placeholder:"Key",name:"key-".concat(o.toString()),value:i[o].key,onChange:function(e){var t=(0,a.Z)(i);t[o].key=e.target.value,l(t),p("key-".concat(o.toString()))},index:o,error:r["key-".concat(o.toString())]||""},"csv-key-".concat(o.toString())),(0,v.jsx)(c.Z,{id:"val-".concat(o.toString()),label:"",placeholder:"Value",name:"val-".concat(o.toString()),value:i[o].value,onChange:function(e){var t=(0,a.Z)(i);t[o].value=e.target.value,l(t),p("val-".concat(o.toString()))},index:o,error:r["val-".concat(o.toString())]||""},"csv-val-".concat(o.toString())),(0,v.jsx)(d.Z,{title:"Add ".concat(n),"aria-label":"addlabel",children:(0,v.jsx)(u.Z,{size:"small",onClick:function(){var e=(0,a.Z)(i);e.push({key:"",value:""}),l(e)},children:(0,v.jsx)(m.Z,{})})}),(0,v.jsx)(d.Z,{title:"Remove","aria-label":"removeLabel",children:(0,v.jsx)(u.Z,{size:"small",style:{marginLeft:16},onClick:function(){if(1===i.length&&l([{key:"",value:""}]),i.length>1){var e=(0,a.Z)(i);e.splice(o,1),l(e)}},children:(0,v.jsx)(g.Z,{})})})]})},"keyvalue-".concat(o.toString()))}));return(0,v.jsx)(s.Fragment,{children:Z})}))},88370:function(e,t,n){var a=n(18489),i=n(50390),s=n(34424),l=n(38342),r=n.n(l),o=n(86509),c=n(4285),d=n(72462),u=n(17777),m=n(62559),g=(0,s.$j)((function(e){return{loadingTenant:e.tenants.tenantDetails.loadingTenant,selectedTenant:e.tenants.tenantDetails.currentTenant,tenant:e.tenants.tenantDetails.tenantInfo,logEnabled:r()(e.tenants.tenantDetails.tenantInfo,"logEnabled",!1),monitoringEnabled:r()(e.tenants.tenantDetails.tenantInfo,"monitoringEnabled",!1),encryptionEnabled:r()(e.tenants.tenantDetails.tenantInfo,"encryptionEnabled",!1),minioTLS:r()(e.tenants.tenantDetails.tenantInfo,"minioTLS",!1),consoleTLS:r()(e.tenants.tenantDetails.tenantInfo,"consoleTLS",!1),consoleEnabled:r()(e.tenants.tenantDetails.tenantInfo,"consoleEnabled",!1),adEnabled:r()(e.tenants.tenantDetails.tenantInfo,"idpAdEnabled",!1),oidcEnabled:r()(e.tenants.tenantDetails.tenantInfo,"idpOidcEnabled",!1)}}),null);t.Z=(0,c.Z)((function(e){return(0,o.Z)((0,a.Z)((0,a.Z)({},d.oZ),{},{centerAlign:{textAlign:"center"},listHeight:{height:"50"}},(0,d.Bz)(e.spacing(4))))}))(g((function(e){var t=e.classes,n=e.records,a=e.recordName;return(0,m.jsx)(i.Fragment,{children:(0,m.jsx)(u.Z,{columns:[{label:"Key",elementKey:"key"},{label:"Value",elementKey:"value"}],isLoading:!1,records:n,itemActions:[],entityName:a,idField:"name",customPaperHeight:t.listHeight})})})))},32841:function(e,t,n){n.r(t),n.d(t,{default:function(){return q}});var a=n(23430),i=n(18489),s=n(50390),l=n(34424),r=n(86509),o=n(4285),c=n(25594),d=n(72462),u=n(23473),m=n(18201),g=n(46981),h=n(44149),x=n(35531),v=n(76352),p=n(66946),Z=n(30324),f=n(55572),j=n(66964),b=n(84201),C=n(62559),y=(0,o.Z)((function(e){return(0,r.Z)((0,i.Z)((0,i.Z)((0,i.Z)({buttonContainer:{textAlign:"right"}},d.oO),d.ID),d.DF))}))((function(e){e.tenant;var t=e.classes,n=e.open,i=e.onClose,l=e.image,r=e.sidecarImage,o=e.initImage,d=e.labels,u=e.annotations,m=e.nodeSelector,g=e.diskCapacityGB,y=e.serviceAccountName,N=e.storageClassName,S=e.tenantName,I=e.tenantNamespace,A=e.cpuRequest,k=e.memRequest,R=(0,s.useState)({}),P=(0,a.Z)(R,2),z=P[0],q=P[1],w=(0,s.useState)(d.length>0?(0,x.Z)(d):[{key:"",value:""}]),E=(0,a.Z)(w,2),M=E[0],D=E[1],F=(0,s.useState)(u.length>0?(0,x.Z)(u):[{key:"",value:""}]),G=(0,a.Z)(F,2),L=G[0],T=G[1],B=(0,s.useState)(m.length>0?(0,x.Z)(m):[{key:"",value:""}]),K=(0,a.Z)(B,2),$=K[0],V=K[1],_=(0,s.useState)(l),O=(0,a.Z)(_,2),U=O[0],H=O[1],W=(0,s.useState)(r),Y=(0,a.Z)(W,2),J=Y[0],Q=Y[1],X=(0,s.useState)(o),ee=(0,a.Z)(X,2),te=ee[0],ne=ee[1],ae=(0,s.useState)(g.toString()),ie=(0,a.Z)(ae,2),se=ie[0],le=ie[1],re=(0,s.useState)(A),oe=(0,a.Z)(re,2),ce=oe[0],de=oe[1],ue=(0,s.useState)(Math.floor(parseInt(k,10)/1e9).toString()),me=(0,a.Z)(ue,2),ge=me[0],he=me[1],xe=(0,s.useState)(y),ve=(0,a.Z)(xe,2),pe=ve[0],Ze=ve[1],fe=(0,s.useState)(N),je=(0,a.Z)(fe,2),be=je[0],Ce=je[1],ye=(0,s.useState)({}),Ne=(0,a.Z)(ye,2),Se=Ne[0],Ie=Ne[1],Ae=(0,s.useState)({}),ke=(0,a.Z)(Ae,2),Re=ke[0],Pe=ke[1],ze=(0,s.useState)({}),qe=(0,a.Z)(ze,2),we=qe[0],Ee=qe[1],Me=function(e){for(var t=[],n=0;n<e.length;n++)""!==e[n].key&&t.push(e[n]);return t};(0,s.useEffect)((function(){var e=[];e.push({fieldKey:"image",required:!1,value:U,pattern:/^([a-zA-Z0-9])([a-zA-Z0-9-._])*([a-zA-Z0-9]?)+(\/(([a-zA-Z0-9])([a-zA-Z0-9-._])*([a-zA-Z0-9])?)+)*:([a-zA-Z0-9])[a-zA-Z0-9-.]{0,127}$/,customPatternMessage:"Invalid image"}),e.push({fieldKey:"sidecarImage",required:!1,value:J,pattern:/^([a-zA-Z0-9])([a-zA-Z0-9-._])*([a-zA-Z0-9]?)+(\/(([a-zA-Z0-9])([a-zA-Z0-9-._])*([a-zA-Z0-9])?)+)*:([a-zA-Z0-9])[a-zA-Z0-9-.]{0,127}$/,customPatternMessage:"Invalid image"}),e.push({fieldKey:"initImage",required:!1,value:te,pattern:/^([a-zA-Z0-9])([a-zA-Z0-9-._])*([a-zA-Z0-9]?)+(\/(([a-zA-Z0-9])([a-zA-Z0-9-._])*([a-zA-Z0-9])?)+)*:([a-zA-Z0-9])[a-zA-Z0-9-.]{0,127}$/,customPatternMessage:"Invalid image"}),e.push({fieldKey:"diskCapacityGB",required:!0,value:se,pattern:/^[0-9]*$/,customPatternMessage:"Must be an integer between 0 and 10"}),e.push({fieldKey:"newCPURequest",required:!1,value:ce,pattern:/^[0-9]*$/,customPatternMessage:"Must be an integer between 0 and 10"}),e.push({fieldKey:"newMemRequest",required:!1,value:ge,pattern:/^[0-9]*$/,customPatternMessage:"Must be an integer between 0 and 10"}),e.push({fieldKey:"serviceAccountName",required:!1,value:pe,pattern:/^[a-zA-Z0-9-.]{1,253}$/,customPatternMessage:"Invalid service account name"}),e.push({fieldKey:"storageClassName",required:!1,value:be,pattern:/^[a-zA-Z0-9-.]{1,253}$/,customPatternMessage:"Invalid storage class name"});var t=(0,b.R)(e);q(t)}),[U,J,te,se,pe,be,ce,ge,q]);return(0,C.jsx)(v.Z,{onClose:function(){return i(!0)},modalOpen:n,title:"Edit Monitoring Configuration",children:(0,C.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),Z.Z.invoke("PUT","/api/v1/namespaces/".concat(I,"/tenants/").concat(S,"/monitoring"),{labels:Me(M),annotations:Me(L),nodeSelector:Me($),image:U,sidecarImage:J,initImage:te,diskCapacityGB:se,serviceAccountName:pe,storageClassName:be,monitoringCPURequest:ce,monitoringMemRequest:ge+"Gi"}).then((function(){i(!0)})).catch((function(e){}))},children:(0,C.jsxs)(c.ZP,{container:!0,children:[(0,C.jsxs)(c.ZP,{xs:12,className:t.modalFormScrollable,children:[(0,C.jsx)(c.ZP,{item:!0,xs:12,className:t.formFieldRow,children:(0,C.jsx)(j.Z,{id:"image",label:"Image",placeholder:"Image",name:"image",value:U,onChange:function(e){H(e.target.value)},error:z.image||""},"image")}),(0,C.jsx)(c.ZP,{item:!0,xs:12,className:t.formFieldRow,children:(0,C.jsx)(j.Z,{id:"sidecarImage",label:"Sidecar Image",placeholder:"Sidecar Image",name:"sidecarImage",value:J,onChange:function(e){Q(e.target.value)},error:z.sidecarImage||""},"sidecarImage")}),(0,C.jsx)(c.ZP,{item:!0,xs:12,className:t.formFieldRow,children:(0,C.jsx)(j.Z,{id:"initImage",label:"Init Image",placeholder:"Init Image",name:"initImage",value:te,onChange:function(e){ne(e.target.value)},error:z.initImage||""},"initImage")}),(0,C.jsx)(c.ZP,{item:!0,xs:12,className:t.formFieldRow,children:(0,C.jsx)(j.Z,{id:"diskCapacityGB",label:"Disk Capacity (GB)",placeholder:"Disk Capacity (GB)",name:"diskCapacityGB",value:se,onChange:function(e){le(e.target.value)},error:z.diskCapacityGB||""},"diskCapacityGB")}),(0,C.jsx)(c.ZP,{item:!0,xs:12,className:t.formFieldRow,children:(0,C.jsx)(j.Z,{id:"cpuRequest",label:"CPU Request",placeholder:"CPU Request",name:"cpuRequest",value:ce,onChange:function(e){de(e.target.value)},error:z.cpuRequest||""},"cpuRequest")}),(0,C.jsx)(c.ZP,{item:!0,xs:12,className:t.formFieldRow,children:(0,C.jsx)(j.Z,{id:"memRequest",label:"Memory Request (Gi)",placeholder:"Memory request",name:"memRequest",value:ge,onChange:function(e){he(e.target.value)},error:z.memRequest||""},"memRequest")}),(0,C.jsx)(c.ZP,{item:!0,xs:12,className:t.formFieldRow,children:(0,C.jsx)(j.Z,{id:"serviceAccountName",label:"Service Account",placeholder:"Service Account Name",name:"serviceAccountName",value:pe,onChange:function(e){Ze(e.target.value)},error:z.serviceAccountName||""},"serviceAccountName")}),(0,C.jsx)(c.ZP,{item:!0,xs:12,className:t.formFieldRow,children:(0,C.jsx)(j.Z,{id:"storageClassName",label:"Storage Class",placeholder:"Storage Class Name",name:"storageClassName",value:be,onChange:function(e){Ce(e.target.value)},error:z.storageClassName||""},"storageClassName")}),(0,C.jsxs)(c.ZP,{item:!0,xs:12,className:t.formFieldRow,children:[(0,C.jsx)("span",{className:t.inputLabel,children:"Labels"}),(0,C.jsx)(f.Z,{newValues:M,setNewValues:D,paramName:"Labels",error:Se,setError:Ie})]}),(0,C.jsxs)(c.ZP,{item:!0,xs:12,className:t.formFieldRow,children:[(0,C.jsx)("span",{className:t.inputLabel,children:"Annotations"}),(0,C.jsx)(f.Z,{newValues:L,setNewValues:T,paramName:"Annotations",error:Re,setError:Pe})]}),(0,C.jsxs)(c.ZP,{item:!0,xs:12,className:t.formFieldRow,children:[(0,C.jsx)("span",{className:t.inputLabel,children:"Node Selector"}),(0,C.jsx)(f.Z,{newValues:$,setNewValues:V,paramName:"Node Selector",error:we,setError:Ee})]})]}),(0,C.jsx)(c.ZP,{xs:12,className:t.buttonContainer,children:(0,C.jsx)(p.Z,{type:"submit",variant:"contained",color:"primary",disabled:!function(){if(0!==Object.keys(z).length||0!==Object.keys(Se).length||0!==Object.keys(Re).length||0!==Object.keys(we).length){return(0,h.zb)({errorMessage:"Invalid entry",detailedError:""}),!1}return!0}(),children:"Save"})})]})})})})),N=n(77138),S=n(92440),I=n(88370),A=n(28948),k=n(60656),R=n(53224),P={setErrorSnackMessage:h.Ih},z=(0,l.$j)(null,P),q=(0,o.Z)((function(e){return(0,r.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)({},d.oZ),{},{headerLabel:{fontSize:22,fontWeight:600,color:"#000",marginTop:4},breadcrumLink:{textDecoration:"none",color:"black"},tableWrapper:{height:"calc(100vh - 267px)"},paperContainer:{padding:"15px 15px 15px 50px"}},d.OR),d.qg),(0,d.Bz)(e.spacing(4))))}))(z((function(e){var t=e.classes,n=e.match,i=e.tenant,l=e.loadingTenant,r=(0,s.useState)(!1),o=(0,a.Z)(r,2),d=o[0],x=o[1],v=(0,s.useState)(!1),p=(0,a.Z)(v,2),f=p[0],j=p[1],b=(0,s.useState)(),P=(0,a.Z)(b,2),z=P[0],q=P[1],w=(0,s.useState)(!1),E=(0,a.Z)(w,2),M=E[0],D=E[1],F=(0,s.useState)(!0),G=(0,a.Z)(F,2),L=G[0],T=G[1],B=n.params.tenantName,K=n.params.tenantNamespace;(0,s.useEffect)((function(){L&&Z.Z.invoke("GET","/api/v1/namespaces/".concat(K,"/tenants/").concat(B,"/monitoring")).then((function(e){x(e.prometheusEnabled),q(e),T(!1)})).catch((function(e){(0,h.Ih)(e),T(!1)}))}),[L]);return(0,C.jsxs)(s.Fragment,{children:[f&&null!==i&&d&&(0,C.jsx)(y,{classes:t,open:f,onClose:function(){j(!1),T(!0)},tenant:i,image:(null===z||void 0===z?void 0:z.image)||"",sidecarImage:(null===z||void 0===z?void 0:z.sidecarImage)||"",initImage:(null===z||void 0===z?void 0:z.initImage)||"",diskCapacityGB:null!==z&&void 0!==z&&z.diskCapacityGB?parseInt(null===z||void 0===z?void 0:z.diskCapacityGB):5,labels:(null===z||void 0===z?void 0:z.labels)||[],annotations:(null===z||void 0===z?void 0:z.annotations)||[],nodeSelector:(null===z||void 0===z?void 0:z.nodeSelector)||[],serviceAccountName:(null===z||void 0===z?void 0:z.serviceAccountName)||"",tenantName:B,tenantNamespace:K,storageClassName:(null===z||void 0===z?void 0:z.storageClassName)||"",cpuRequest:(null===z||void 0===z?void 0:z.monitoringCPURequest)||"",memRequest:(null===z||void 0===z?void 0:z.monitoringMemRequest)||""}),M&&(0,C.jsx)(k.Z,{isOpen:M,title:d?"Disable Prometheus monitoring?":"Enable Prometheus monitoring?",confirmText:d?"Disable":"Enable",cancelText:"Cancel",onClose:function(){return D(!1)},onConfirm:function(){var e={prometheusEnabled:d,toggle:!0};Z.Z.invoke("PUT","/api/v1/namespaces/".concat(K,"/tenants/").concat(B,"/monitoring"),e).then((function(){x(!d),T(!0),D(!1),T(!0)})).catch((function(e){(0,h.Ih)(e)}))},confirmationContent:(0,C.jsx)(u.Z,{children:d?"Disabling monitoring will erase any custom values you have used to configure Prometheus monitoring":"Prometheus monitoring will be enabled with default values"})}),(0,C.jsx)("h1",{className:t.sectionTitle,children:"Monitoring"}),(0,C.jsxs)("div",{className:t.actionsTray,children:[(0,C.jsx)(S.Z,{label:"Prometheus Monitoring",indicatorLabels:["Enabled","Disabled"],checked:d,value:"monitoring_status",id:"monitoring-status",name:"monitoring-status",onChange:function(e){D(!0)},description:""}),d&&(0,C.jsx)(R.Z,{tooltip:"Edit Monitoring configuration",text:"Edit",onClick:function(){j(!0)},icon:(0,C.jsx)(N.dY,{}),color:"primary",variant:"contained"})]}),d&&void 0!==z&&(0,C.jsx)(g.Z,{className:t.paperContainer,children:(0,C.jsx)(c.ZP,{container:!0,children:(0,C.jsx)(c.ZP,{item:!0,xs:12,children:(0,C.jsx)("table",{width:"100%",children:(0,C.jsx)("tbody",{children:l?(0,C.jsx)("tr",{children:(0,C.jsx)("td",{className:t.centerAlign,colSpan:4,children:(0,C.jsx)(m.Z,{})})}):(0,C.jsxs)(s.Fragment,{children:[null!=z.image&&(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{className:t.titleCol,children:"Image:"}),(0,C.jsx)("td",{children:z.image})]}),null!=z.sidecarImage&&(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{className:t.titleCol,children:"Sidecar Image:"}),(0,C.jsx)("td",{children:null===z||void 0===z?void 0:z.sidecarImage})]}),null!=z.initImage&&(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{className:t.titleCol,children:"Init Image:"}),(0,C.jsx)("td",{children:null===z||void 0===z?void 0:z.initImage})]}),null!=z.diskCapacityGB&&(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{className:t.titleCol,children:"Disk Capacity (GB):"}),(0,C.jsx)("td",{children:null===z||void 0===z?void 0:z.diskCapacityGB})]}),null!=z.serviceAccountName&&(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{className:t.titleCol,children:"Service Account Name:"}),(0,C.jsx)("td",{children:null===z||void 0===z?void 0:z.serviceAccountName})]}),null!=z.storageClassName&&(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{className:t.titleCol,children:"Storage Class Name:"}),(0,C.jsx)("td",{children:null===z||void 0===z?void 0:z.storageClassName})]}),null!=z.labels&&z.labels.length>0&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("tr",{children:(0,C.jsx)("td",{children:(0,C.jsx)("h4",{children:"Labels"})})}),(0,C.jsx)("tr",{children:(0,C.jsx)("td",{className:t.titleCol,children:(0,C.jsx)(I.Z,{records:z.labels,recordName:"Labels"})})})]}),null!=z.annotations&&z.annotations.length>0&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("tr",{children:(0,C.jsx)("td",{children:(0,C.jsx)("h4",{children:"Annotations"})})}),(0,C.jsx)("tr",{children:(0,C.jsx)("td",{className:t.titleCol,children:(0,C.jsx)(I.Z,{records:z.annotations,recordName:"Annotations"})})})]}),null!=z.monitoringCPURequest&&(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{className:t.titleCol,children:"CPU Request:"}),(0,C.jsx)("td",{children:null===z||void 0===z?void 0:z.monitoringCPURequest})]}),null!=z.monitoringMemRequest&&(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{className:t.titleCol,children:"Memory Request:"}),(0,C.jsx)("td",{children:(0,A.ae)(null===z||void 0===z?void 0:z.monitoringMemRequest,!0)})]}),null!=z.nodeSelector&&z.nodeSelector.length>0&&(0,C.jsxs)("tr",{children:[(0,C.jsx)("h4",{children:"Node Selector:"}),(0,C.jsx)("td",{className:t.titleCol,children:(0,C.jsx)(I.Z,{records:z.nodeSelector,recordName:"Node Selector"})})]})]})})})})})})]})})))}}]);
//# sourceMappingURL=2841.21f2a1a3.chunk.js.map