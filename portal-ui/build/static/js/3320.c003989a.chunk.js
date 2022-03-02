"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[3320],{23320:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var a=n(23430),s=n(18489),l=n(50390),i=n(34424),r=n(86509),o=n(4285),c=n(72462),d=n(25594),u=n(23473),m=n(18201),h=n(46981),g=n(30324),x=n(85204),b=n(44149),v=n(35531),j=n(76352),p=n(66946),Z=n(55572),f=n(66964),N=n(84201),C=n(10369),S=n(1365),R=n(62559),q=(0,o.Z)((function(e){return(0,r.Z)((0,s.Z)((0,s.Z)((0,s.Z)({buttonContainer:{textAlign:"right"},multiContainer:{display:"flex",alignItems:"center",justifyContent:"flex-start"},sizeFactorContainer:{marginLeft:8},bottomContainer:{display:"flex",flexGrow:1,alignItems:"center","& div":{flexGrow:1,width:"100%"}},factorElements:{display:"flex",justifyContent:"flex-start"},sizeNumber:{fontSize:35,fontWeight:700,textAlign:"center"},sizeDescription:{fontSize:14,color:"#777",textAlign:"center"},shortened:{gridTemplateColumns:"auto auto 20px 20px",display:"grid",gridGap:20}},c.oO),c.ID),c.DF))}))((function(e){var t=e.tenant,n=e.classes,s=e.open,i=e.onClose,r=e.image,o=e.labels,c=e.annotations,u=e.nodeSelector,m=e.diskCapacityGB,h=e.serviceAccountName,x=e.dbLabels,q=e.dbAnnotations,A=e.dbNodeSelector,y=e.dbImage,P=e.dbServiceAccountName,k=e.cpuRequest,w=e.memRequest,D=e.dbCPURequest,L=e.dbMemRequest,M=(0,l.useState)({}),I=(0,a.Z)(M,2),B=I[0],G=I[1],z=(0,l.useState)(o.length>0?(0,v.Z)(o):[{key:"",value:""}]),F=(0,a.Z)(z,2),E=F[0],U=F[1],O=(0,l.useState)(c.length>0?(0,v.Z)(c):[{key:"",value:""}]),T=(0,a.Z)(O,2),V=T[0],$=T[1],K=(0,l.useState)(u.length>0?(0,v.Z)(u):[{key:"",value:""}]),_=(0,a.Z)(K,2),W=_[0],Y=_[1],H=(0,l.useState)(r),J=(0,a.Z)(H,2),Q=J[0],X=J[1],ee=(0,l.useState)(m),te=(0,a.Z)(ee,2),ne=te[0],ae=te[1],se=(0,l.useState)(null!=h?h:""),le=(0,a.Z)(se,2),ie=le[0],re=le[1],oe=(0,l.useState)(x.length>0?(0,v.Z)(x):[{key:"",value:""}]),ce=(0,a.Z)(oe,2),de=ce[0],ue=ce[1],me=(0,l.useState)(q.length>0?(0,v.Z)(q):[{key:"",value:""}]),he=(0,a.Z)(me,2),ge=he[0],xe=he[1],be=(0,l.useState)(A.length>0?(0,v.Z)(A):[{key:"",value:""}]),ve=(0,a.Z)(be,2),je=ve[0],pe=ve[1],Ze=(0,l.useState)(y),fe=(0,a.Z)(Ze,2),Ne=fe[0],Ce=fe[1],Se=(0,l.useState)(null!=P?P:""),Re=(0,a.Z)(Se,2),qe=Re[0],Ae=Re[1],ye=(0,l.useState)({}),Pe=(0,a.Z)(ye,2),ke=Pe[0],we=Pe[1],De=(0,l.useState)({}),Le=(0,a.Z)(De,2),Me=Le[0],Ie=Le[1],Be=(0,l.useState)({}),Ge=(0,a.Z)(Be,2),ze=Ge[0],Fe=Ge[1],Ee=(0,l.useState)({}),Ue=(0,a.Z)(Ee,2),Oe=Ue[0],Te=Ue[1],Ve=(0,l.useState)({}),$e=(0,a.Z)(Ve,2),Ke=$e[0],_e=$e[1],We=(0,l.useState)({}),Ye=(0,a.Z)(We,2),He=Ye[0],Je=Ye[1],Qe=(0,l.useState)(k),Xe=(0,a.Z)(Qe,2),et=Xe[0],tt=Xe[1],nt=(0,l.useState)(w?Math.floor(parseInt(w,10)/1e9).toString():"0"),at=(0,a.Z)(nt,2),st=at[0],lt=at[1],it=(0,l.useState)(D),rt=(0,a.Z)(it,2),ot=rt[0],ct=rt[1],dt=(0,l.useState)(L?Math.floor(parseInt(L,10)/1e9).toString():"0"),ut=(0,a.Z)(dt,2),mt=ut[0],ht=ut[1],gt=function(e){for(var t=[],n=0;n<e.length;n++)""!==e[n].key&&t.push(e[n]);return t},xt=function(e){G((0,C.h)(B,e))};(0,l.useEffect)((function(){var e=[];e.push({fieldKey:"image",required:!1,value:Q,pattern:/^([a-zA-Z0-9])([a-zA-Z0-9-._])*([a-zA-Z0-9]?)+(\/(([a-zA-Z0-9])([a-zA-Z0-9-._])*([a-zA-Z0-9])?)+)*:([a-zA-Z0-9])[a-zA-Z0-9-.]{0,127}$/,customPatternMessage:"Invalid image"}),e.push({fieldKey:"dbImage",required:!1,value:Ne,pattern:/^([a-zA-Z0-9])([a-zA-Z0-9-._])*([a-zA-Z0-9]?)+(\/(([a-zA-Z0-9])([a-zA-Z0-9-._])*([a-zA-Z0-9])?)+)*:([a-zA-Z0-9])[a-zA-Z0-9-.]{0,127}$/,customPatternMessage:"Invalid image"}),e.push({fieldKey:"diskCapacityGB",required:!0,value:ne,pattern:/^[0-9]*$/,customPatternMessage:"Must be an integer between 0 and 10"}),e.push({fieldKey:"serviceAccountName",required:!1,value:ie,pattern:/^[a-zA-Z0-9-.]{1,253}$/,customPatternMessage:"Invalid service account name"}),e.push({fieldKey:"dbServiceAccountName",required:!1,value:qe,pattern:/^[a-zA-Z0-9-.]{1,253}$/,customPatternMessage:"Invalid service account name"}),e.push({fieldKey:"cpuRequest",required:!0,value:et,pattern:/^[0-9]*$/,customPatternMessage:"Please enter an integer value for number of CPUs requested"}),e.push({fieldKey:"memRequest",required:!0,value:st,pattern:/^[0-9]*$/,customPatternMessage:"Please enter an integer value (Gi) for memory requested"}),e.push({fieldKey:"dbCPURequest",required:!0,value:ot,pattern:/^[0-9]*$/,customPatternMessage:"Please enter an integer value for number of  DB CPUs requested"}),e.push({fieldKey:"dbMemRequest",required:!0,value:mt,pattern:/^[0-9]*$/,customPatternMessage:"Please enter an integer value (Gi) for DB memory requested"});var t=(0,N.R)(e);G(t)}),[Q,Ne,ne,ie,qe,et,st,ot,mt,G]);var bt=function(){return 0===Object.keys(B).length&&0===Object.keys(ke).length&&0===Object.keys(Me).length&&0===Object.keys(ze).length&&0===Object.keys(Oe).length&&0===Object.keys(Ke).length&&0===Object.keys(He).length};return(0,R.jsx)(j.Z,{onClose:function(){return i(!0)},modalOpen:s,title:"Edit Logging",children:(0,R.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),bt()?g.Z.invoke("PUT","/api/v1/namespaces/".concat(t.namespace,"/tenants/").concat(t.name,"/log"),{labels:gt(E),annotations:gt(V),nodeSelector:gt(W),image:Q,diskCapacityGB:ne,serviceAccountName:ie,dbLabels:gt(de),dbAnnotations:gt(ge),dbNodeSelector:gt(je),dbImage:Ne,dbServiceAccountName:qe,logCPURequest:et,logMemRequest:st+"Gi",logDBCPURequest:ot,logDBMemRequest:mt+"Gi"}).then((function(){i(!0)})).catch((function(e){})):(0,b.zb)({errorMessage:"Some fields have invalid values",detailedError:""})},children:(0,R.jsxs)(d.ZP,{container:!0,children:[(0,R.jsxs)(d.ZP,{xs:12,className:n.modalFormScrollable,children:[(0,R.jsx)(d.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,R.jsx)("h4",{children:"Logging API "})}),(0,R.jsx)(d.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,R.jsx)(f.Z,{id:"image",label:"Image",placeholder:"Image",name:"image",value:Q,onChange:function(e){X(e.target.value),xt("image")},error:B.image||""},"image")}),(0,R.jsx)(d.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,R.jsx)(f.Z,{id:"diskCapacityGB",label:"Disk Capacity",placeholder:"Disk Capacity",name:"diskCapacityGB",value:ne,onChange:function(e){ae(e.target.value),xt("diskCapacityGB")},error:B.diskCapacityGB||"",overlayObject:(0,R.jsx)(S.Z,{id:"size-unit",onUnitChange:function(){},unitSelected:"Gi",unitsList:[{label:"Gi",value:"Gi"}],disabled:!0})},"diskCapacityGB")}),(0,R.jsx)(d.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,R.jsx)(f.Z,{id:"serviceAccountName",label:"Service Account",placeholder:"Service Account Name",name:"serviceAccountName",value:ie,onChange:function(e){re(e.target.value),xt("serviceAccountName")},error:B.serviceAccountName||""},"serviceAccountName")}),(0,R.jsx)(d.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,R.jsx)(f.Z,{id:"cpuRequest",label:"CPU Request",placeholder:"CPU Request",name:"cpuRequest",value:et,onChange:function(e){tt(e.target.value),xt("cpuRequest")},error:B.cpuRequest||""},"cpuRequest")}),(0,R.jsx)(d.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,R.jsx)(f.Z,{id:"memRequest",label:"Memory request",placeholder:"Memory request",name:"memRequest",value:st,onChange:function(e){lt(e.target.value),xt("memRequest")},error:B.memRequest||"",overlayObject:(0,R.jsx)(S.Z,{id:"size-unit",onUnitChange:function(){},unitSelected:"Gi",unitsList:[{label:"Gi",value:"Gi"}],disabled:!0})},"memRequest")}),(0,R.jsxs)(d.ZP,{item:!0,xs:12,className:n.formFieldRow,children:[(0,R.jsx)("span",{className:n.inputLabel,children:"Labels"}),(0,R.jsx)(Z.Z,{newValues:E,setNewValues:U,paramName:"Labels",error:ke,setError:we})]}),(0,R.jsxs)(d.ZP,{item:!0,xs:12,className:n.formFieldRow,children:[(0,R.jsx)("span",{className:n.inputLabel,children:"Annotations"}),(0,R.jsx)(Z.Z,{newValues:V,setNewValues:$,paramName:"Annotations",error:Me,setError:Ie})]}),(0,R.jsxs)(d.ZP,{item:!0,xs:12,className:n.formFieldRow,children:[(0,R.jsx)("span",{className:n.inputLabel,children:"Node Selector"}),(0,R.jsx)(Z.Z,{newValues:W,setNewValues:Y,paramName:"Node Selector",error:ze,setError:Fe})]}),(0,R.jsx)(d.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,R.jsx)("h4",{children:"Database Configuration "})}),(0,R.jsx)(d.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,R.jsx)(f.Z,{id:"dbImage",label:"Postgres Image",placeholder:"Db Image",name:"dbImage",value:Ne,onChange:function(e){Ce(e.target.value),xt("dbImage")},error:B.dbImage||""},"dbImage")}),(0,R.jsx)(d.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,R.jsx)(f.Z,{id:"dbServiceAccountName",label:"Service Account",placeholder:"Db Service Account Name",name:"dbServiceAccountName",value:qe,onChange:function(e){Ae(e.target.value),xt("dbServiceAccountName")},error:B.dbServiceAccountName||""},"dbServiceAccountName")}),(0,R.jsx)(d.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,R.jsx)(f.Z,{id:"dbCpuRequest",label:"DB CPU Request",placeholder:"DB CPU Request",name:"dbCpuRequest",value:ot,onChange:function(e){ct(e.target.value),xt("dbCpuRequest")},error:B.dbCpuRequest||""},"dbCpuRequest")}),(0,R.jsx)(d.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,R.jsx)(f.Z,{id:"dbMemRequest",label:"DB Memory request",placeholder:"DB Memory request",name:"dbMemRequest",value:mt,onChange:function(e){ht(e.target.value),xt("dbMemRequest")},error:B.dbMemRequest||"",overlayObject:(0,R.jsx)(S.Z,{id:"size-unit",onUnitChange:function(){},unitSelected:"Gi",unitsList:[{label:"Gi",value:"Gi"}],disabled:!0})},"dbMemRequest")}),(0,R.jsxs)(d.ZP,{item:!0,xs:12,className:n.formFieldRow,children:[(0,R.jsx)("span",{className:n.inputLabel,children:"Labels"}),(0,R.jsx)(Z.Z,{newValues:de,setNewValues:ue,paramName:"Db Labels",error:Oe,setError:Te})]}),(0,R.jsxs)(d.ZP,{item:!0,xs:12,className:n.formFieldRow,children:[(0,R.jsx)("span",{className:n.inputLabel,children:"Annotations"}),(0,R.jsx)(Z.Z,{newValues:ge,setNewValues:xe,paramName:"Db Annotations",error:Ke,setError:_e})]}),(0,R.jsxs)(d.ZP,{item:!0,xs:12,className:n.formFieldRow,children:[(0,R.jsx)("span",{className:n.inputLabel,children:"Node Selector"}),(0,R.jsx)(Z.Z,{newValues:je,setNewValues:pe,paramName:"DbNode Selector",error:He,setError:Je})]})]}),(0,R.jsx)(d.ZP,{xs:12,className:n.buttonContainer,children:(0,R.jsx)(p.Z,{type:"submit",variant:"contained",color:"primary",disabled:!bt(),children:"Save"})})]})})})})),A=n(88370),y=n(60656),P=n(92440),k=n(53224),w=n(28948),D=(0,i.$j)((function(e){return{loadingTenant:e.tenants.tenantDetails.loadingTenant,selectedTenant:e.tenants.tenantDetails.currentTenant,tenant:e.tenants.tenantDetails.tenantInfo}}),null),L=(0,o.Z)((function(e){return(0,r.Z)((0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)({},c.oZ),{},{headerLabel:{fontSize:22,fontWeight:600,color:"#000",marginTop:4},breadcrumLink:{textDecoration:"none",color:"black"},tableWrapper:{height:"calc(100vh - 267px)"},paperContainer:{padding:"15px 15px 15px 50px"}},c.OR),c.qg),(0,c.Bz)(e.spacing(4))))}))(D((function(e){var t,n,s,i=e.classes,r=e.match,o=e.tenant,c=e.loadingTenant,v=(0,l.useState)(!0),j=(0,a.Z)(v,2),p=j[0],Z=j[1],f=(0,l.useState)(),N=(0,a.Z)(f,2),C=N[0],S=N[1],D=(0,l.useState)(!1),L=(0,a.Z)(D,2),M=L[0],I=L[1],B=(0,l.useState)(!1),G=(0,a.Z)(B,2),z=G[0],F=G[1],E=(0,l.useState)(!1),U=(0,a.Z)(E,2),O=U[0],T=U[1],V=(0,l.useState)(!1),$=(0,a.Z)(V,2),K=$[0],_=$[1],W=(0,l.useState)(!1),Y=(0,a.Z)(W,2),H=Y[0],J=Y[1],Q=r.params.tenantName,X=r.params.tenantNamespace;(0,l.useEffect)((function(){p&&g.Z.invoke("GET","/api/v1/namespaces/".concat(X,"/tenants/").concat(Q,"/log")).then((function(e){S(e),T(e.disabled),F(e.disabled),Z(!1)})).catch((function(e){(0,b.Ih)({errorMessage:"Error getting tenant logs",detailedError:e.detailedError})}))}),[Q,X,p,F,z]);var ee=function(){_(!1),I(!1),Z(!0)};return(0,R.jsxs)(l.Fragment,{children:[(0,R.jsx)(y.Z,{title:"Disable Logging?",confirmText:"Disable",isOpen:K,onConfirm:function(){g.Z.invoke("POST","/api/v1/namespaces/".concat(X,"/tenants/").concat(Q,"/disable-logging")).then((function(){T(!0),F(!0)})).catch((function(e){(0,b.Ih)({errorMessage:"Error disabling logging",detailedError:e.detailedError})})),ee()},onClose:function(){return _(!1)},confirmationContent:(0,R.jsx)(u.Z,{children:"Disabling logging will erase any custom values you have used to configure logging"})}),(0,R.jsx)(y.Z,{title:"Enable Logging?",confirmText:"Enable",isOpen:H,onConfirm:function(){g.Z.invoke("POST","/api/v1/namespaces/".concat(X,"/tenants/").concat(Q,"/enable-logging")).then((function(){T(!1)})).catch((function(e){(0,b.Ih)({errorMessage:"Error enabling logging",detailedError:e.detailedError})})),J(!1),F(!1),Z(!0)},onClose:function(){return J(!1)},confirmationContent:(0,R.jsx)(u.Z,{children:"Logging will be enabled with default values"})}),M&&null!==o&&null!=C&&!z&&(0,R.jsx)(q,{open:M,onClose:ee,tenant:o,image:C.image,labels:C.labels,annotations:C.annotations,nodeSelector:C.nodeSelector,diskCapacityGB:C.diskCapacityGB,serviceAccountName:C.serviceAccountName,dbImage:C.dbImage,dbLabels:C.dbLabels,dbAnnotations:C.dbAnnotations,dbNodeSelector:C.dbNodeSelector,dbServiceAccountName:C.dbServiceAccountName,cpuRequest:C.logCPURequest,memRequest:C.logMemRequest,dbCPURequest:C.logDBCPURequest,dbMemRequest:C.logDBMemRequest}),(0,R.jsx)("h1",{className:i.sectionTitle,children:"Logging"}),(0,R.jsxs)("div",{className:i.actionsTray,children:[(0,R.jsx)(P.Z,{value:"enableLogging",id:"enableLogging",name:"enableLogging",checked:!O,onChange:function(e){e.target.checked?J(!0):_(!0)},label:"Logging",indicatorLabels:["Enabled","Disabled"]}),!z&&!p&&(0,R.jsx)(k.Z,{tooltip:"Edit Logging configuration",text:"Edit",onClick:function(){I(!0)},icon:(0,R.jsx)(x.dY,{}),color:"primary",variant:"contained"})]}),!z&&!p&&(0,R.jsx)(h.Z,{className:i.paperContainer,children:(0,R.jsx)(d.ZP,{container:!0,children:(0,R.jsxs)(d.ZP,{item:!0,xs:12,children:[(0,R.jsx)("h2",{children:"Logging API Service Details"}),(0,R.jsx)("hr",{className:i.hrClass}),(0,R.jsx)("table",{width:"100%",children:(0,R.jsx)("tbody",{children:c?(0,R.jsx)("tr",{children:(0,R.jsx)("td",{className:i.centerAlign,colSpan:4,children:(0,R.jsx)(m.Z,{})})}):(0,R.jsxs)(l.Fragment,{children:[null!=(null===C||void 0===C?void 0:C.logCPURequest)&&(0,R.jsxs)("tr",{children:[(0,R.jsx)("td",{className:i.titleCol,children:"CPU Request:"}),(0,R.jsx)("td",{children:null===C||void 0===C?void 0:C.logCPURequest})]}),null!=(null===C||void 0===C?void 0:C.logMemRequest)&&(0,R.jsxs)("tr",{children:[(0,R.jsx)("td",{className:i.titleCol,children:"Memory Request:"}),(0,R.jsx)("td",{children:(0,w.ae)(null===C||void 0===C?void 0:C.logMemRequest,!0)})]}),null!=(null===C||void 0===C?void 0:C.image)&&(0,R.jsxs)("tr",{children:[(0,R.jsx)("td",{className:i.titleCol,children:"Image:"}),(0,R.jsx)("td",{children:null===C||void 0===C?void 0:C.image})]}),null!=(null===C||void 0===C?void 0:C.diskCapacityGB)&&(0,R.jsxs)("tr",{children:[(0,R.jsx)("td",{className:i.titleCol,children:"Disk Capacity (GB):"}),(0,R.jsx)("td",{children:null===C||void 0===C?void 0:C.diskCapacityGB})]}),null!=(null===C||void 0===C?void 0:C.serviceAccountName)&&(0,R.jsxs)("tr",{children:[(0,R.jsx)("td",{className:i.titleCol,children:"Service Account:"}),(0,R.jsx)("td",{children:null===C||void 0===C?void 0:C.serviceAccountName})]}),null!=(null===C||void 0===C?void 0:C.labels)&&C.labels.length>0&&(0,R.jsxs)(l.Fragment,{children:[(0,R.jsx)("tr",{children:(0,R.jsx)("td",{children:(0,R.jsx)("h4",{children:"Labels"})})}),(0,R.jsx)("tr",{children:(0,R.jsx)("td",{children:(0,R.jsx)(A.Z,{records:null!=C&&C.labels.length>0?C.labels:[],recordName:"Labels"})})})]}),null!=(null===C||void 0===C?void 0:C.annotations)&&C.annotations.length>0&&(0,R.jsxs)(l.Fragment,{children:[(0,R.jsx)("tr",{children:(0,R.jsx)("td",{children:(0,R.jsx)("h4",{children:"Annotations"})})}),(0,R.jsx)("tr",{children:(0,R.jsx)("td",{children:(0,R.jsx)(A.Z,{records:null!=C&&C.annotations.length>0?C.annotations:[],recordName:"Annotations"})})})]}),null!=(null===C||void 0===C?void 0:C.nodeSelector)&&C.nodeSelector.length>0&&(0,R.jsxs)(l.Fragment,{children:[(0,R.jsx)("tr",{children:(0,R.jsx)("td",{children:(0,R.jsx)("h4",{children:"Node Selector"})})}),(0,R.jsx)("tr",{children:(0,R.jsx)("td",{children:(0,R.jsx)(A.Z,{records:null!=C&&C.nodeSelector.length>0?C.nodeSelector:[],recordName:"Node Selector"})})})]})]})})}),(0,R.jsx)("h2",{children:"Database Details"}),(0,R.jsx)("hr",{className:i.hrClass}),(0,R.jsx)("table",{width:"100%",children:(0,R.jsx)("tbody",{children:c?(0,R.jsx)("tr",{children:(0,R.jsx)("td",{className:i.centerAlign,colSpan:4,children:(0,R.jsx)(m.Z,{})})}):(0,R.jsxs)(l.Fragment,{children:[null!=(null===C||void 0===C?void 0:C.logDBCPURequest)&&(0,R.jsxs)("tr",{children:[(0,R.jsx)("td",{className:i.titleCol,children:"DB CPU Request:"}),(0,R.jsx)("td",{children:null===C||void 0===C?void 0:C.logDBCPURequest})]}),null!=(null===C||void 0===C?void 0:C.logDBMemRequest)&&(0,R.jsxs)("tr",{children:[(0,R.jsx)("td",{className:i.titleCol,children:"DB Memory Request:"}),(0,R.jsx)("td",{children:(0,w.ae)(null===C||void 0===C?void 0:C.logDBMemRequest,!0)})]}),null!=(null===C||void 0===C?void 0:C.dbImage)&&(0,R.jsxs)("tr",{children:[(0,R.jsx)("td",{className:i.titleCol,children:"Postgres Image:"}),(0,R.jsx)("td",{children:null===C||void 0===C?void 0:C.dbImage})]}),null!=(null===C||void 0===C?void 0:C.dbServiceAccountName)&&(0,R.jsxs)("tr",{children:[(0,R.jsx)("td",{className:i.titleCol,children:"Service Account:"}),(0,R.jsx)("td",{children:null===C||void 0===C?void 0:C.dbServiceAccountName})]}),null!=(null===C||void 0===C?void 0:C.dbLabels)&&C.dbLabels.length>0&&(0,R.jsxs)(l.Fragment,{children:[(0,R.jsx)("tr",{children:(0,R.jsx)("td",{children:(0,R.jsx)("h4",{children:"Labels"})})}),(0,R.jsx)("tr",{children:(0,R.jsx)("td",{children:(0,R.jsx)(A.Z,{records:null!=C&&(null===(t=C.dbLabels)||void 0===t?void 0:t.length)>0?C.dbLabels:[],recordName:"labels"})})})]}),null!=(null===C||void 0===C?void 0:C.annotations)&&C.dbAnnotations.length>0&&(0,R.jsxs)(l.Fragment,{children:[(0,R.jsx)("tr",{children:(0,R.jsx)("td",{children:(0,R.jsx)("h4",{children:"Annotations"})})}),(0,R.jsx)("tr",{children:(0,R.jsx)("td",{children:(0,R.jsx)(A.Z,{records:null!=C&&(null===(n=C.dbAnnotations)||void 0===n?void 0:n.length)>0?C.dbAnnotations:[],recordName:"annotations"})})})]}),null!=(null===C||void 0===C?void 0:C.nodeSelector)&&C.dbNodeSelector.length>0&&(0,R.jsxs)(l.Fragment,{children:[(0,R.jsx)("tr",{children:(0,R.jsx)("td",{children:(0,R.jsx)("h4",{children:"Node Selector "})})}),(0,R.jsx)("tr",{children:(0,R.jsx)("td",{children:(0,R.jsx)(A.Z,{records:null!=C&&(null===(s=C.dbNodeSelector)||void 0===s?void 0:s.length)>0?C.dbNodeSelector:[],recordName:"node selectors"})})})]})]})})})]})})})]})})))}}]);
//# sourceMappingURL=3320.c003989a.chunk.js.map