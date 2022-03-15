"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[7551],{53224:function(e,n,t){var i=t(18489),a=t(83738),r=(t(50390),t(70758)),s=t(62449),o=t(62559),c=["onClick","text","disabled","tooltip","icon"],l=(0,s.Z)((function(e){return{root:{padding:"7px",color:function(n){return function(n){var t=n.variant,i=n.color,a=e.palette.primary.main;return"primary"===i&&"contained"===t?a=e.palette.primary.contrastText:"primary"===i&&"outlined"===t?a=e.palette.primary.main:"secondary"===i&&(a=e.palette.secondary.main),a}(n)},borderColor:function(n){return"secondary"===n.color?e.palette.secondary.main:e.palette.primary.main},"& svg.min-icon":{width:12,marginLeft:function(e){return e.text?"5px":"0px"},"@media (max-width: 900px)":{width:16,marginLeft:"0px !important"}}}}}));n.Z=function(e){var n=l(e),t=e.onClick,s=e.text,u=void 0===s?"":s,d=e.disabled,m=void 0!==d&&d,x=e.tooltip,h=e.icon,p=void 0===h?null:h,f=(0,a.Z)(e,c);return(0,o.jsxs)(r.Z,(0,i.Z)((0,i.Z)({classes:n,tooltip:x||u,variant:"outlined",onClick:t,disabled:m,color:"secondary",size:"medium",sx:{border:"1px solid #f44336","& span":{fontSize:14,"@media (max-width: 900px)":{display:"none"}}}},f),{},{children:[(0,o.jsx)("span",{children:u})," ",p]}))}},57551:function(e,n,t){t.r(n),t.d(n,{default:function(){return ne}});var i=t(35531),a=t(23430),r=t(18489),s=t(50390),o=t(34424),c=t(86509),l=t(4285),u=t(81378),d=t(25594),m=t(86362),x=t(44149),h=t(72462),p=t(30324),f=t(35721),g=t(38342),j=t.n(g),Z=t(35477),v=t(56805),b=t(28948),y=t(54950),k=t(6369),C=t(49495),S=t(30140),N=t(53224),P=t(44977),w=t(62559),_=(0,l.Z)((function(e){return(0,c.Z)({root:{marginBottom:30,padding:20,color:e.palette.primary.main,border:"#E5E5E5 1px solid",borderRadius:2,"& .min-icon":{height:14,width:14,marginRight:4},"& .MuiTypography-body2":{fontSize:14},"& .MuiCardHeader-content":{wordWrap:"break-word",overflowWrap:"break-word",wordBreak:"break-all",font:"normal normal bold 24px/27px Lato",color:e.palette.primary.main,"& .MuiTypography-root":{fontSize:19,fontWeight:"bold","& .min-icon":{position:"relative",top:4,marginRight:4,height:"24px !important"}}},"& .MuiCardHeader-root":{background:"transparent linear-gradient(0deg, #EEF1F44E 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box"}},checkBoxElement:{width:32,height:32,float:"left",overflow:"hidden","& div":{position:"absolute"}},viewButton:{width:111,color:"white",marginLeft:8,fontSize:12,fontWeight:"normal",boxShadow:"unset",borderRadius:4},manageButton:{borderRadius:4,width:111,color:e.palette.grey[700],textTransform:"unset",fontSize:12,fontWeight:"normal","& .MuiButton-endIcon":{"& .min-icon":{fontSize:18}}},metric:{"& .min-icon":{color:"#000000",width:13,marginRight:5}},metricLabel:{fontSize:14,fontWeight:"bold",color:"#000000"},metricText:{fontSize:24,fontWeight:"bold"},unit:{fontSize:12,fontWeight:"normal"},bucketName:{padding:0,margin:0,fontSize:22},bucketIcon:{"& .min-icon":{height:48,width:48}},bucketInfo:{display:"flex","@media (max-width: 900px)":{flexFlow:"column-reverse"}},bucketStats:{marginTop:15,borderTop:"1px solid rgb(234,234,234, .7)",paddingTop:14},bucketActionButtons:{display:"flex",alignItems:"center",justifyContent:"flex-end","@media (max-width: 900px)":{marginTop:"-33px"}}})}))((function(e){var n=e.classes,t=e.bucket,i=e.onSelect,a=e.selected,r=e.bulkSelect,o=(0,b.ae)("".concat(t.size)||"0"),c=o.split(" ")[0],l=o.split(" ")[1],u=j()(t,"details.quota.quota","0"),x=(0,b.Am)(u);return(0,w.jsxs)(d.ZP,{container:!0,className:(0,P.Z)(n.root,"bucket-item"),children:[(0,w.jsx)(d.ZP,{item:!0,xs:12,children:(0,w.jsxs)(d.ZP,{container:!0,justifyContent:"space-between",children:[(0,w.jsx)(d.ZP,{item:!0,xs:12,sm:7,children:(0,w.jsxs)(d.ZP,{container:!0,children:[(0,w.jsxs)(d.ZP,{item:!0,xs:12,children:[r&&(0,w.jsx)("div",{className:n.checkBoxElement,onClick:function(e){e.stopPropagation()},children:(0,w.jsx)(y.Z,{checked:a,id:"select-".concat(t.name),label:"",name:"select-".concat(t.name),onChange:function(e){i(e)},value:t.name})}),(0,w.jsx)("h1",{className:n.bucketName,children:t.name})]}),(0,w.jsx)(d.ZP,{item:!0,xs:12,children:(0,w.jsxs)(d.ZP,{container:!0,className:n.bucketInfo,children:[(0,w.jsx)(d.ZP,{item:!0,xs:12,sm:!0,children:(0,w.jsxs)(Z.Z,{variant:"body2",children:["Created: ",t.creation_date]})}),(0,w.jsx)(d.ZP,{item:!0,xs:12,sm:!0,children:(0,w.jsxs)(Z.Z,{variant:"body2",children:["Access: ",function(e){var n,t,i,a,r,s;return null===(n=e.rw_access)||void 0===n||!n.read||null!==(t=e.rw_access)&&void 0!==t&&t.write?null!==(i=e.rw_access)&&void 0!==i&&i.read||null===(a=e.rw_access)||void 0===a||!a.write?null!==(r=e.rw_access)&&void 0!==r&&r.read&&null!==(s=e.rw_access)&&void 0!==s&&s.write?"R/W":"":"W":"R"}(t)]})})]})})]})}),(0,w.jsxs)(d.ZP,{item:!0,xs:12,sm:5,className:n.bucketActionButtons,children:[(0,w.jsx)(S.s,{scopes:C.D[C.EI.BUCKET_ADMIN],resource:t.name,children:(0,w.jsx)(k.rU,{to:"/buckets/".concat(t.name,"/admin"),style:{textDecoration:"none"},children:(0,w.jsx)(N.Z,{tooltip:"Manage",onClick:function(){},text:"Manage",icon:(0,w.jsx)(m.ew,{}),color:"primary",variant:"outlined"})})}),(0,w.jsx)(k.rU,{to:"/buckets/".concat(t.name,"/browse"),style:{textDecoration:"none"},children:(0,w.jsx)(N.Z,{tooltip:"Browse",onClick:function(){},text:"Browse",icon:(0,w.jsx)(m.LZ,{}),color:"primary",variant:"contained"})}),(0,w.jsx)(v.Z,{display:{xs:"none",sm:"block"},children:(0,w.jsx)("div",{style:{marginBottom:10}})})]})]})}),(0,w.jsx)(d.ZP,{item:!0,xs:12,className:n.bucketStats,children:(0,w.jsxs)(d.ZP,{container:!0,justifyContent:"flex-start",spacing:4,children:[(0,w.jsx)(d.ZP,{item:!0,className:n.bucketIcon,children:(0,w.jsx)(m.wN,{})}),(0,w.jsxs)(d.ZP,{item:!0,textAlign:"left",className:n.metric,children:[(0,w.jsx)(m.rH,{}),(0,w.jsx)("span",{className:n.metricLabel,children:"Usage"}),(0,w.jsxs)("div",{className:n.metricText,children:[c,(0,w.jsx)("span",{className:n.unit,children:l}),"0"!==u&&(0,w.jsxs)(s.Fragment,{children:[" ","/ ",x.total,(0,w.jsx)("span",{className:n.unit,children:x.unit})]})]})]}),(0,w.jsxs)(d.ZP,{item:!0,textAlign:"left",className:n.metric,children:[(0,w.jsx)(m.xp,{}),(0,w.jsx)("span",{className:n.metricLabel,children:"Objects"}),(0,w.jsx)("div",{className:n.metricText,children:t.objects?(0,b.CE)(t.objects):0})]})]})})]})})),T=t(94187),R=t(19538),F=t(99528),B=t(66964),I=t(51002),M=t(50280),E=t(76295),L=t(92440),A=t(67754),z=t(1365),U=(0,o.$j)(null,{setModalErrorSnackMessage:x.zb}),K=(0,l.Z)((function(e){return(0,c.Z)((0,r.Z)((0,r.Z)({remoteBucketList:{display:"grid",gridTemplateColumns:"auto auto 45px",alignItems:"center",justifyContent:"stretch"},errorIcon:{color:"#C72C48"},successIcon:{color:"#42C91A"},hide:{opacity:0,transitionDuration:"0.3s"}},h.oO),h.AK))}))(U((function(e){var n=e.open,t=e.closeModalAndRefresh,r=e.classes,o=e.buckets,c=e.setModalErrorSnackMessage,l=(0,s.useState)([]),u=(0,a.Z)(l,2),m=u[0],x=u[1],h=(0,s.useState)(!1),f=(0,a.Z)(h,2),g=f[0],Z=f[1],v=(0,s.useState)(!1),y=(0,a.Z)(v,2),k=y[0],C=y[1],S=(0,s.useState)(""),N=(0,a.Z)(S,2),P=N[0],_=N[1],U=(0,s.useState)(""),K=(0,a.Z)(U,2),D=K[0],O=K[1],W=(0,s.useState)(""),q=(0,a.Z)(W,2),G=q[0],H=q[1],Q=(0,s.useState)(""),V=(0,a.Z)(Q,2),$=V[0],Y=V[1],J=(0,s.useState)(!0),X=(0,a.Z)(J,2),ee=X[0],ne=X[1],te=(0,s.useState)("async"),ie=(0,a.Z)(te,2),ae=ie[0],re=ie[1],se=(0,s.useState)("100"),oe=(0,a.Z)(se,2),ce=oe[0],le=oe[1],ue=(0,s.useState)("Gi"),de=(0,a.Z)(ue,2),me=de[0],xe=de[1],he=(0,s.useState)("60"),pe=(0,a.Z)(he,2),fe=pe[0],ge=pe[1],je=(0,s.useState)([]),Ze=(0,a.Z)(je,2),ve=Ze[0],be=Ze[1],ye=(0,s.useState)([]),ke=(0,a.Z)(ye,2),Ce=ke[0],Se=ke[1],Ne=(0,s.useState)([]),Pe=(0,a.Z)(Ne,2),we=Pe[0],_e=Pe[1],Te=Ce.map((function(e){return{label:e,value:e}}));(0,s.useEffect)((function(){if(0===ve.length){var e=[],n=[];o.forEach((function(t){e.push(t),n.push("")})),be(n),x(e)}}),[o,ve.length]);var Re=function(e){var n=e.errString;switch(n){case"":return(0,w.jsx)("div",{className:r.successIcon,children:(0,w.jsx)(F.Z,{})});case"n/a":return null;default:if(n)return(0,w.jsx)("div",{className:r.errorIcon,children:(0,w.jsx)(T.Z,{title:n,placement:"top-start",children:(0,w.jsx)(R.Z,{})})})}return null},Fe=function(e,n){var t=(0,i.Z)(ve);t[e]=n,be(t)},Be=function(e){var n=(0,i.Z)(m),t=(0,i.Z)(ve);e.forEach((function(e){var i=j()(e,"errorString","");if(!i||""===i){var a=n.indexOf(e.originBucket);n.splice(a,1),t.splice(a,1)}})),x(n),be(t)};return(0,w.jsx)(I.Z,{modalOpen:n,onClose:function(){t(!1)},title:"Set Multiple Bucket Replication",children:(0,w.jsx)(E.Z,{loadingStep:g||k,wizardSteps:[{label:"Remote Configuration",componentRender:(0,w.jsxs)(s.Fragment,{children:[(0,w.jsx)(d.ZP,{item:!0,xs:12,children:(0,w.jsx)(M.Z,{label:"Local Buckets to replicate",content:m.join(", ")})}),(0,w.jsx)("h4",{children:"Remote Endpoint Configuration"}),(0,w.jsx)("span",{className:r.descriptionText,children:"Please avoid the use of root credentials for this feature"}),(0,w.jsx)("br",{}),(0,w.jsx)("br",{}),(0,w.jsx)(d.ZP,{item:!0,xs:12,children:(0,w.jsx)(B.Z,{id:"accessKey",name:"accessKey",onChange:function(e){_(e.target.value)},label:"Access Key",value:P})}),(0,w.jsx)(d.ZP,{item:!0,xs:12,children:(0,w.jsx)(B.Z,{id:"secretKey",name:"secretKey",onChange:function(e){O(e.target.value)},label:"Secret Key",value:D})}),(0,w.jsx)(d.ZP,{item:!0,xs:12,children:(0,w.jsx)(B.Z,{id:"targetURL",name:"targetURL",onChange:function(e){H(e.target.value)},placeholder:"play.min.io:9000",label:"Target URL",value:G})}),(0,w.jsx)(d.ZP,{item:!0,xs:12,children:(0,w.jsx)(L.Z,{checked:ee,id:"useTLS",name:"useTLS",label:"Use TLS",onChange:function(e){ne(e.target.checked)},value:"yes"})}),(0,w.jsx)(d.ZP,{item:!0,xs:12,children:(0,w.jsx)(B.Z,{id:"region",name:"region",onChange:function(e){Y(e.target.value)},label:"Region",value:$})}),(0,w.jsx)(d.ZP,{item:!0,xs:12,children:(0,w.jsx)(A.Z,{id:"replication_mode",name:"replication_mode",onChange:function(e){re(e.target.value)},label:"Replication Mode",value:ae,options:[{label:"Asynchronous",value:"async"},{label:"Synchronous",value:"sync"}]})}),"async"===ae&&(0,w.jsx)(d.ZP,{item:!0,xs:12,children:(0,w.jsx)(B.Z,{type:"number",id:"bandwidth_scalar",name:"bandwidth_scalar",onChange:function(e){e.target.validity.valid&&le(e.target.value)},label:"Bandwidth",value:ce,min:"0",pattern:"[0-9]*",overlayObject:(0,w.jsx)(z.Z,{id:"quota_unit",onUnitChange:function(e){xe(e)},unitSelected:me,unitsList:(0,b.zQ)(["Ki"]),disabled:!1})})}),(0,w.jsx)(d.ZP,{item:!0,xs:12,children:(0,w.jsx)(B.Z,{id:"healthCheck",name:"healthCheck",onChange:function(e){ge(e.target.value)},label:"Health Check Duration",value:fe})})]}),buttons:[{type:"custom",label:"Next",enabled:!k,action:function(e){var n={accessKey:P,secretKey:D,targetURL:G,useTLS:ee};C(!0),p.Z.invoke("POST","/api/v1/list-external-buckets",n).then((function(n){var t=j()(n,"buckets",[]);if(t&&t.length>0){var i=t.map((function(e){return e.name}));Se(i)}e("++"),C(!1)})).catch((function(e){C(!1),c(e)}))}}]},{label:"Bucket Assignments",componentRender:(0,w.jsxs)(s.Fragment,{children:[(0,w.jsx)("h3",{children:"Remote Bucket Assignments"}),(0,w.jsx)("span",{className:r.descriptionText,children:"Please select / type the desired remote bucket were you want the local data to be replicated."}),(0,w.jsx)("div",{className:r.remoteBucketList,children:m.map((function(e,n){var t,i=function(e){if(we.length>0){var n=we.find((function(n){return n.originBucket===e}));if(n)return j()(n,"errorString","")||""}return"n/a"}(e);return(0,w.jsxs)(s.Fragment,{children:[(0,w.jsx)("div",{className:""===i?r.hide:"",children:e}),(0,w.jsx)("div",{className:""===i?r.hide:"",children:(t=n,Ce.length>0?(0,w.jsx)(s.Fragment,{children:(0,w.jsx)(A.Z,{label:"",id:"assign-bucket-".concat(t),name:"assign-bucket-".concat(t),value:ve[t],onChange:function(e){Fe(t,e.target.value)},options:Te,disabled:g})}):(0,w.jsx)(s.Fragment,{children:(0,w.jsx)(B.Z,{id:"assign-bucket-".concat(t),name:"assign-bucket-".concat(t),label:"",onChange:function(e){Fe(t,e.target.value)},value:ve[t],disabled:g})}))}),(0,w.jsx)("div",{className:""===i?r.hide:"",children:we.length>0&&(0,w.jsx)(Re,{errString:i})})]},"buckets-assignation-".concat(n.toString(),"-").concat(e))}))})]}),buttons:[{type:"back",label:"Back",enabled:!0},{type:"next",label:"Create",enabled:!g,action:function(){Z(!0);var e=m.map((function(e,n){return{originBucket:e,destinationBucket:ve[n]}})),n="".concat(ee?"https://":"http://").concat(G),i=parseInt(fe),a={accessKey:P,secretKey:D,targetURL:n,region:$,bucketsRelation:e,syncMode:ae,bandwidth:"async"===ae?parseInt((0,b.Pw)(ce,me,!0)):0,healthCheckPeriod:i};p.Z.invoke("POST","/api/v1/buckets-replication",a).then((function(e){Z(!1);var n=e.replicationState;_e(n),0===n.filter((function(e){return e.errorString&&""!==e.errorString})).length?t(!0):setTimeout((function(){Be(n)}),500)})).catch((function(e){Z(!1),c(e)}))}}]}],forModal:!0})})}))),D=t(8235),O=t(18221),W=t(11835),q=t(71208),G=t(74524),H=t(25534),Q=t(23165),V=t(18572),$=t(27207),Y=t(65703),J=(0,o.$j)(null,{setModalErrorSnackMessage:x.zb}),X=(0,l.Z)((function(e){return(0,c.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({resultGrid:{display:"grid",gridTemplateColumns:"45px auto",alignItems:"center",justifyContent:"stretch"},errorIcon:{paddingTop:5,color:"#C72C48"},successIcon:{paddingTop:5,color:"#42C91A"},hide:{opacity:0,transitionDuration:"0.3s"}},h.bK),h.ID),h.DF),h.QV))}))(J((function(e){var n=e.open,t=e.closeModalAndRefresh,i=e.classes,o=e.buckets,c=e.setModalErrorSnackMessage,l=(0,s.useState)(!1),u=(0,a.Z)(l,2),m=u[0],x=u[1],h=(0,s.useState)(!0),f=(0,a.Z)(h,2),g=f[0],Z=f[1],v=(0,s.useState)([]),b=(0,a.Z)(v,2),y=b[0],k=b[1],C=(0,s.useState)(""),S=(0,a.Z)(C,2),N=S[0],P=S[1],_=(0,s.useState)(""),z=(0,a.Z)(_,2),U=z[0],K=z[1],D=(0,s.useState)(""),O=(0,a.Z)(D,2),W=O[0],q=O[1],G=(0,s.useState)(""),H=(0,a.Z)(G,2),Q=H[0],V=H[1],J=(0,s.useState)(!1),X=(0,a.Z)(J,2),ee=X[0],ne=X[1],te=(0,s.useState)("0"),ie=(0,a.Z)(te,2),ae=ie[0],re=ie[1],se=(0,s.useState)("0"),oe=(0,a.Z)(se,2),ce=oe[0],le=oe[1],ue=(0,s.useState)("expiry"),de=(0,a.Z)(ue,2),me=de[0],xe=de[1],he=(0,s.useState)("0"),pe=(0,a.Z)(he,2),fe=pe[0],ge=pe[1],je=(0,s.useState)("0"),Ze=(0,a.Z)(je,2),ve=Ze[0],be=Ze[1],ye=(0,s.useState)(!1),ke=(0,a.Z)(ye,2),Ce=ke[0],Se=ke[1],Ne=(0,s.useState)(null),Pe=(0,a.Z)(Ne,2),we=Pe[0],_e=Pe[1];(0,s.useEffect)((function(){g&&p.Z.invoke("GET","/api/v1/admin/tiers").then((function(e){var n=j()(e,"items",[]);if(null!==n&&n.length>=1){var t=n.map((function(e){var n=e.type,t=j()(e,"".concat(n,".name"),"");return{label:t,value:t}}));k(t),t.length>0&&q(t[0].value)}Z(!1)})).catch((function(e){Z(!1),c(e)}))}),[g,c]),(0,s.useEffect)((function(){var e=!0;"expiry"!==me&&""===W&&(e=!1),Se(e)}),[me,fe,ve,W]);var Te=function(e){var n=e.errString;switch(n){case"":return(0,w.jsx)("div",{className:i.successIcon,children:(0,w.jsx)(F.Z,{})});case"n/a":return null;default:if(n)return(0,w.jsx)("div",{className:i.errorIcon,children:(0,w.jsx)(T.Z,{title:n,placement:"top-start",children:(0,w.jsx)(R.Z,{})})})}return null};return(0,w.jsx)(I.Z,{modalOpen:n,onClose:function(){t(!1)},title:"Set Lifecycle to multiple buckets",children:(0,w.jsx)(E.Z,{loadingStep:m||g,wizardSteps:[{label:"Lifecycle Configuration",componentRender:(0,w.jsxs)(s.Fragment,{children:[(0,w.jsx)(d.ZP,{item:!0,xs:12,children:(0,w.jsx)(M.Z,{label:"Local Buckets to replicate",content:o.join(", ")})}),(0,w.jsx)("h4",{children:"Remote Endpoint Configuration"}),(0,w.jsx)(d.ZP,{container:!0,children:(0,w.jsxs)(d.ZP,{item:!0,xs:12,className:i.formScrollable,children:[(0,w.jsx)(d.ZP,{item:!0,xs:12,className:i.formFieldRow,children:(0,w.jsxs)("fieldset",{className:i.fieldGroup,children:[(0,w.jsx)("legend",{className:i.descriptionText,children:"Lifecycle Configuration"}),(0,w.jsx)(d.ZP,{item:!0,xs:12,children:(0,w.jsx)($.Z,{currentSelection:me,id:"quota_type",name:"quota_type",label:"ILM Rule",onChange:function(e){xe(e.target.value)},selectorOptions:[{value:"expiry",label:"Expiry"},{value:"transition",label:"Transition"}]})}),"expiry"===me?(0,w.jsxs)(s.Fragment,{children:[(0,w.jsx)(d.ZP,{item:!0,xs:12,className:i.formFieldRow,children:(0,w.jsx)(B.Z,{type:"number",id:"expiry_days",name:"expiry_days",onChange:function(e){ge(e.target.value)},label:"Expiry Days",value:fe,min:"0"})}),(0,w.jsx)(d.ZP,{item:!0,xs:12,className:i.formFieldRow,children:(0,w.jsx)(B.Z,{type:"number",id:"noncurrentversion_expiration_days",name:"noncurrentversion_expiration_days",onChange:function(e){re(e.target.value)},label:"Non-current Expiration Days",value:ae,min:"0"})})]}):(0,w.jsxs)(s.Fragment,{children:[(0,w.jsx)(d.ZP,{item:!0,xs:12,className:i.formFieldRow,children:(0,w.jsx)(B.Z,{type:"number",id:"transition_days",name:"transition_days",onChange:function(e){be(e.target.value)},label:"Transition Days",value:ve,min:"0"})}),(0,w.jsx)(d.ZP,{item:!0,xs:12,className:i.formFieldRow,children:(0,w.jsx)(B.Z,{type:"number",id:"noncurrentversion_transition_days",name:"noncurrentversion_transition_days",onChange:function(e){le(e.target.value)},label:"Non-current Transition Days",value:ce,min:"0"})}),(0,w.jsx)(d.ZP,{item:!0,xs:12,className:i.formFieldRow,children:(0,w.jsx)(B.Z,{id:"noncurrentversion_t_SC",name:"noncurrentversion_t_SC",onChange:function(e){V(e.target.value)},placeholder:"Set Non-current Version Transition Storage Class",label:"Non-current Version Transition Storage Class",value:Q})}),(0,w.jsx)(d.ZP,{item:!0,xs:12,className:i.formFieldRow,children:(0,w.jsx)(A.Z,{label:"Storage Class",id:"storage_class",name:"storage_class",value:W,onChange:function(e){q(e.target.value)},options:y})})]})]})}),(0,w.jsx)(d.ZP,{item:!0,xs:12,className:i.formFieldRow,children:(0,w.jsxs)("fieldset",{className:i.fieldGroup,children:[(0,w.jsx)("legend",{className:i.descriptionText,children:"File Configuration"}),(0,w.jsx)(d.ZP,{item:!0,xs:12,children:(0,w.jsx)(B.Z,{id:"prefix",name:"prefix",onChange:function(e){P(e.target.value)},label:"Prefix",value:N})}),(0,w.jsx)(d.ZP,{item:!0,xs:12,children:(0,w.jsx)(Y.Z,{name:"tags",label:"Tags",elements:U,onChange:function(e){K(e)},keyPlaceholder:"Tag Key",valuePlaceholder:"Tag Value",withBorder:!0})}),(0,w.jsx)(d.ZP,{item:!0,xs:12,children:(0,w.jsx)(L.Z,{value:"expired_delete_marker",id:"expired_delete_marker",name:"expired_delete_marker",checked:ee,onChange:function(e){ne(e.target.checked)},label:"Expired Object Delete Marker"})})]})})]})})]}),buttons:[{type:"custom",label:"Create Rules",enabled:!g&&!m&&Ce,action:function(e){var n={};if("expiry"===me){var t={expiry_days:parseInt(fe)};n=(0,r.Z)((0,r.Z)({},t),{},{noncurrentversion_expiration_days:parseInt(ae)})}else{var i={transition_days:parseInt(ve)};n=(0,r.Z)((0,r.Z)({},i),{},{noncurrentversion_transition_days:parseInt(ce),noncurrentversion_transition_storage_class:Q,storage_class:W})}var a=(0,r.Z)({buckets:o,type:me,prefix:N,tags:U,expired_object_delete_marker:ee},n);p.Z.invoke("POST","/api/v1/buckets/multi-lifecycle",a).then((function(n){x(!1),_e(n),e("++")})).catch((function(e){x(!1),c(e)}))}}]},{label:"Results",componentRender:(0,w.jsxs)(s.Fragment,{children:[(0,w.jsx)("h3",{children:"Multi Bucket lifecycle Assignments Results"}),(0,w.jsx)(d.ZP,{container:!0,children:(0,w.jsxs)(d.ZP,{item:!0,xs:12,className:i.formScrollable,children:[(0,w.jsx)("h4",{children:"Buckets Results"}),null===we||void 0===we?void 0:we.results.map((function(e){return(0,w.jsxs)("div",{className:i.resultGrid,children:[Te({errString:e.error||""}),(0,w.jsx)("span",{children:e.bucketName})]})}))]})})]}),buttons:[{type:"custom",label:"Done",enabled:!m,action:function(){return t(!0)}}]}],forModal:!0})})}))),ee=t(61317),ne=(0,o.$j)(null,{setErrorSnackMessage:x.Ih})((0,l.Z)((function(e){return(0,c.Z)((0,r.Z)({bulkSelect:{marginLeft:8,"&:hover":{backgroundColor:e.palette.primary.main},"&.MuiButton-contained":{backgroundColor:e.palette.primary.main}},addBucket:{marginLeft:8},bucketList:{marginTop:25,height:"calc(100vh - 210px)"},searchField:(0,r.Z)((0,r.Z)({},h.qg.searchField),{},{minWidth:380,"@media (max-width: 900px)":{minWidth:220}})},(0,h.Bz)(e.spacing(4))))}))((function(e){var n=e.classes,t=e.history,r=e.setErrorSnackMessage,o=(0,s.useState)([]),c=(0,a.Z)(o,2),l=c[0],x=c[1],h=(0,s.useState)(!0),g=(0,a.Z)(h,2),j=g[0],Z=g[1],v=(0,s.useState)(""),b=(0,a.Z)(v,2),y=b[0],k=b[1],P=(0,s.useState)([]),T=(0,a.Z)(P,2),R=T[0],F=T[1],B=(0,s.useState)(!1),I=(0,a.Z)(B,2),M=I[0],E=I[1],L=(0,s.useState)(!1),A=(0,a.Z)(L,2),z=A[0],U=A[1],$=(0,s.useState)(!1),Y=(0,a.Z)($,2),J=Y[0],ne=Y[1];(0,s.useEffect)((function(){if(j){Z(!0),p.Z.invoke("GET","/api/v1/buckets").then((function(e){Z(!1),x(e.buckets||[])})).catch((function(e){Z(!1),r(e)}))}}),[j,r]);var te=l.filter((function(e){return""===y||e.name.indexOf(y)>=0})),ie=function(e){var n=e.target,t=n.value,a=n.checked,r=(0,i.Z)(R);return a?r.push(t):r=r.filter((function(e){return e!==t})),F(r),r},ae=(0,ee.Z)("*",[C.Ft.S3_CREATE_BUCKET]);return(0,w.jsxs)(s.Fragment,{children:[M&&(0,w.jsx)(K,{open:M,buckets:R,closeModalAndRefresh:function(e){E(!1),e&&F([])}}),z&&(0,w.jsx)(X,{buckets:R,closeModalAndRefresh:function(e){U(!1),e&&F([])},open:z}),(0,w.jsx)(f.Z,{label:"Buckets"}),(0,w.jsxs)(H.Z,{children:[(0,w.jsxs)(d.ZP,{item:!0,xs:12,className:n.actionsTray,display:"flex",children:[(0,w.jsx)(Q.Z,{onChange:k,placeholder:"Search Buckets",overrideClass:n.searchField,value:y}),(0,w.jsxs)(d.ZP,{item:!0,xs:12,display:"flex",alignItems:"center",justifyContent:"flex-end",children:[(0,w.jsx)(N.Z,{tooltip:J?"Unselect Buckets":"Select Multiple Buckets",onClick:function(){ne(!J),F([])},text:"",icon:(0,w.jsx)(G.Z,{}),color:"primary",variant:J?"contained":"outlined"}),J&&(0,w.jsx)(N.Z,{tooltip:R.length===te.length?"Unselect All Buckets":"Select All Buckets",onClick:function(){if(R.length!==te.length){var e=te.map((function(e){return e.name}));F(e)}else F([])},text:"",icon:(0,w.jsx)(m.QQ,{}),color:"primary",variant:"outlined"}),(0,w.jsx)(N.Z,{tooltip:"Set Lifecycle",onClick:function(){U(!0)},text:"",icon:(0,w.jsx)(m.QI,{}),disabled:0===R.length,color:"primary",variant:"outlined"}),(0,w.jsx)(N.Z,{tooltip:"Set Replication",onClick:function(){E(!0)},text:"",icon:(0,w.jsx)(q.Z,{}),disabled:0===R.length,color:"primary",variant:"outlined"}),(0,w.jsx)(N.Z,{tooltip:"Refresh",onClick:function(){Z(!0)},text:"",icon:(0,w.jsx)(O.default,{}),color:"primary",variant:"outlined"}),(0,w.jsx)(N.Z,{tooltip:"Create Bucket",onClick:function(){t.push("/add-bucket")},text:"Create Bucket",icon:(0,w.jsx)(m.dt,{}),color:"primary",variant:"contained",disabled:!ae})]})]}),j&&(0,w.jsx)(u.Z,{}),!j&&(0,w.jsxs)(d.ZP,{item:!0,xs:12,className:n.bucketList,children:[0!==te.length&&(0,w.jsx)(V.Z,{rowRenderFunction:function(e){var n=te[e]||null;return n?(0,w.jsx)(_,{bucket:n,onSelect:ie,selected:R.includes(n.name),bulkSelect:J}):null},totalItems:te.length}),0===te.length&&""!==y&&(0,w.jsx)(d.ZP,{container:!0,justifyContent:"center",alignContent:"center",alignItems:"center",children:(0,w.jsx)(d.ZP,{item:!0,xs:8,children:(0,w.jsx)(D.Z,{iconComponent:(0,w.jsx)(m.wN,{}),title:"No Results",help:(0,w.jsx)(s.Fragment,{children:"No buckets match the filtering condition"})})})}),0===te.length&&""===y&&(0,w.jsx)(d.ZP,{container:!0,justifyContent:"center",alignContent:"center",alignItems:"center",children:(0,w.jsx)(d.ZP,{item:!0,xs:8,children:(0,w.jsx)(D.Z,{iconComponent:(0,w.jsx)(m.wN,{}),title:"Buckets",help:(0,w.jsxs)(s.Fragment,{children:["MinIO uses buckets to organize objects. A bucket is similar to a folder or directory in a filesystem, where each bucket can hold an arbitrary number of objects.",(0,w.jsxs)(S.s,{scopes:[C.Ft.S3_CREATE_BUCKET],resource:C.C3,children:[(0,w.jsx)("br",{}),(0,w.jsx)("br",{}),"To get started,\xa0",(0,w.jsx)(W.Z,{onClick:function(){t.push("/add-bucket")},children:"Create a Bucket."})]})]})})})})]})]})]})})))},11835:function(e,n,t){var i=t(18489),a=t(83738),r=(t(50390),t(86509)),s=t(4285),o=t(62559),c=["classes","children"];n.Z=(0,s.Z)((function(e){return(0,r.Z)({root:{padding:0,margin:0,border:0,backgroundColor:"transparent",textDecoration:"underline",cursor:"pointer",fontSize:"inherit",color:e.palette.info.main,fontFamily:"Lato, sans-serif"}})}))((function(e){var n=e.classes,t=e.children,r=(0,a.Z)(e,c);return(0,o.jsx)("button",(0,i.Z)((0,i.Z)({},r),{},{className:n.root,children:t}))}))},54950:function(e,n,t){var i=t(18489),a=t(50390),r=t(25594),s=t(74268),o=t(36554),c=t(94187),l=t(86509),u=t(4285),d=t(72462),m=t(97538),x=t(62559);n.Z=(0,u.Z)((function(e){return(0,l.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)({},d.YI),d.Hr),d.lM),{},{fieldContainer:(0,i.Z)((0,i.Z)({},d.YI.fieldContainer),{},{display:"flex",justifyContent:"flex-start",alignItems:"center",margin:"15px 0",marginBottom:0,flexBasis:"initial"}),noTopMargin:{marginTop:0}}))}))((function(e){var n=e.label,t=e.onChange,i=e.value,l=e.id,u=e.name,d=e.checked,h=void 0!==d&&d,p=e.disabled,f=void 0!==p&&p,g=e.noTopMargin,j=void 0!==g&&g,Z=e.tooltip,v=void 0===Z?"":Z,b=e.overrideLabelClasses,y=void 0===b?"":b,k=e.classes;return(0,x.jsx)(a.Fragment,{children:(0,x.jsxs)(r.ZP,{item:!0,xs:12,className:"".concat(k.fieldContainer," ").concat(j?k.noTopMargin:""),children:[(0,x.jsx)("div",{children:(0,x.jsx)(s.Z,{name:u,id:l,value:i,color:"primary",inputProps:{"aria-label":"secondary checkbox"},checked:h,onChange:t,checkedIcon:(0,x.jsx)("span",{className:k.checkedIcon}),icon:(0,x.jsx)("span",{className:k.unCheckedIcon}),disabled:f})}),""!==n&&(0,x.jsxs)(o.Z,{htmlFor:l,className:"".concat(k.noMinWidthLabel," ").concat(y),children:[(0,x.jsx)("span",{children:n}),""!==v&&(0,x.jsx)("div",{className:k.tooltipContainer,children:(0,x.jsx)(c.Z,{title:v,placement:"top-start",children:(0,x.jsx)("div",{className:k.tooltip,children:(0,x.jsx)(m.Z,{})})})})]})]})})}))},1365:function(e,n,t){var i=t(23430),a=t(50390),r=t(86509),s=t(4285),o=t(26936),c=t(31680),l=t(62559);n.Z=(0,s.Z)((function(e){return(0,r.Z)({buttonTrigger:{border:"#F0F2F2 1px solid",borderRadius:3,color:"#838383",backgroundColor:"#fff",fontSize:12}})}))((function(e){var n=e.classes,t=e.id,r=e.unitSelected,s=e.unitsList,u=e.disabled,d=void 0!==u&&u,m=e.onUnitChange,x=a.useState(null),h=(0,i.Z)(x,2),p=h[0],f=h[1],g=Boolean(p),j=function(e){f(null),""!==e&&m&&m(e)};return(0,l.jsxs)(a.Fragment,{children:[(0,l.jsx)("button",{id:"".concat(t,"-button"),"aria-controls":"".concat(t,"-menu"),"aria-haspopup":"true","aria-expanded":g?"true":void 0,onClick:function(e){f(e.currentTarget)},className:n.buttonTrigger,disabled:d,type:"button",children:r}),(0,l.jsx)(o.Z,{id:"".concat(t,"-menu"),"aria-labelledby":"".concat(t,"-button"),anchorEl:p,open:g,onClose:function(){j("")},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:s.map((function(e){return(0,l.jsx)(c.Z,{onClick:function(){return j(e.value)},children:e.label},"itemUnit-".concat(e.value,"-").concat(e.label))}))})]})}))},50280:function(e,n,t){var i=t(18489),a=t(50390),r=t(25594),s=t(86509),o=t(4285),c=t(72462),l=t(62559);n.Z=(0,o.Z)((function(e){return(0,s.Z)((0,i.Z)({},c.xx))}))((function(e){var n=e.classes,t=e.label,i=void 0===t?"":t,s=e.content,o=e.multiLine,c=void 0!==o&&o;return(0,l.jsx)(a.Fragment,{children:(0,l.jsxs)(r.ZP,{className:n.prefinedContainer,children:[""!==i&&(0,l.jsx)(r.ZP,{item:!0,xs:12,className:n.predefinedTitle,children:i}),(0,l.jsx)(r.ZP,{item:!0,xs:12,className:n.predefinedList,children:(0,l.jsx)(r.ZP,{item:!0,xs:12,className:c?n.innerContentMultiline:n.innerContent,children:s})})]})})}))},23165:function(e,n,t){var i=t(36222),a=t(18489),r=(t(50390),t(65771)),s=t(13336),o=t(12066),c=t(4285),l=t(86509),u=t(72462),d=t(62559);n.Z=(0,c.Z)((function(e){return(0,l.Z)({searchField:(0,a.Z)({},u.qg.searchField),adornment:{}})}))((function(e){var n=e.placeholder,t=void 0===n?"":n,a=e.classes,c=e.onChange,l=e.adornmentPosition,u=void 0===l?"end":l,m=e.overrideClass,x=e.value,h=(0,i.Z)({disableUnderline:!0},"".concat(u,"Adornment"),(0,d.jsx)(r.Z,{position:u,className:a.adornment,children:(0,d.jsx)(s.Z,{})}));return(0,d.jsx)(o.Z,{placeholder:t,className:m||a.searchField,id:"search-resource",label:"",InputProps:h,onChange:function(e){c(e.target.value)},variant:"standard",value:x})}))},18572:function(e,n,t){var i=t(50390),a=t(65742),r=t(10106),s=t(33690),o=t(62559),c={};n.Z=function(e){var n=e.rowRenderFunction,t=e.totalItems,l=e.defaultHeight,u=function(e){var t=e.index,i=e.style;return(0,o.jsx)("div",{style:i,children:n(t)})};return(0,o.jsx)(i.Fragment,{children:(0,o.jsx)(r.Z,{isItemLoaded:function(e){return!!c[e]},loadMoreItems:function(e,n){for(var t=e;t<=n;t++)c[t]=1;for(var i=e;i<=n;i++)c[i]=2},itemCount:t,children:function(e){var n=e.onItemsRendered,i=e.ref;return(0,o.jsx)(s.qj,{children:function(e){var r=e.width,s=e.height;return(0,o.jsx)(a.t7,{itemSize:l||220,height:s,itemCount:t,width:r,ref:i,onItemsRendered:n,children:u})}})}})})}}}]);
//# sourceMappingURL=7551.b8d5fd21.chunk.js.map