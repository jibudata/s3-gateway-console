"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[528],{40528:function(e,n,t){t.r(n),t.d(n,{default:function(){return Y}});var s=t(23430),i=t(18489),o=t(50390),r=t(34424),a=t(86509),l=t(4285),c=t(56805),u=t(38342),d=t.n(u),f=t(25594),x=t(44149),p=t(72462),m=t(30324),h=t(77130),Z=t(49495),g=t(30140),v=t(37882),j=t(29308),b=t(62559),E=function(e){var n=e.icon,t=void 0===n?null:n,s=e.label,i=void 0===s?null:s;return(0,b.jsxs)(c.Z,{sx:{display:"flex"},children:[(0,b.jsx)("div",{style:{height:16,width:16,display:"flex",alignItems:"center",marginTop:5},children:t}),(0,b.jsx)("div",{style:{marginLeft:t?5:"none"},children:i})]})},T=t(86362),k=t(83738),S=t(66946),y=t(18201),C=["isLoading","onClick","label"],_=function(e){var n=e.isLoading,t=e.onClick,s=e.label,o=(0,k.Z)(e,C);return(0,b.jsx)(S.Z,(0,i.Z)((0,i.Z)({color:"primary",onClick:t,variant:"text",sx:{padding:0,margin:0,alignItems:"flex-start",justifyContent:"flex-start",display:"inline-flex",height:"auto",textDecoration:"underline",color:"#2781B0","&:hover":{background:"#ffffff",textDecoration:"underline"}},disableRipple:!0,disableFocusRipple:!0},o),{},{children:n?(0,b.jsx)(y.Z,{color:"primary",size:16,variant:"indeterminate"}):s}))},N=t(95467),I=t(59078),P=["disabled","onClick"],B=(0,l.Z)((function(e){return(0,a.Z)({root:{"&:hover":{backgroundColor:"#E2E2E2"}}})}))((function(e){var n=e.disabled,t=e.onClick,s=(0,k.Z)(e,P);return(0,b.jsx)(N.Z,(0,i.Z)((0,i.Z)({size:"small",disabled:n,onClick:t},s),{},{children:(0,b.jsx)(I.Z,{})}))})),O=function(e){var n=e.resourceName,t=e.iamScopes,s=e.secureCmpProps,o=void 0===s?{}:s,r=e.children;return(0,b.jsx)(g.s,(0,i.Z)((0,i.Z)({scopes:t,resource:n,errorProps:{disabled:!0}},o),{},{children:r}))},R=function(e){var n=e.isLoading,t=void 0===n||n,s=e.resourceName,i=void 0===s?"":s,o=e.iamScopes,r=e.secureCmpProps,a=void 0===r?{}:r,l=e.property,u=void 0===l?null:l,d=e.value,f=void 0===d?null:d,x=e.onEdit;return(0,b.jsxs)(c.Z,{sx:{display:"flex",alignItems:"baseline",justifyContent:"flex-start"},children:[(0,b.jsx)(j.Z,{label:u,value:(0,b.jsx)(O,{resourceName:i,iamScopes:o,secureCmpProps:a,children:(0,b.jsx)(_,{isLoading:t,onClick:x,label:f})})}),(0,b.jsx)(O,{resourceName:i,iamScopes:o,secureCmpProps:a,children:(0,b.jsx)(B,{onClick:x,sx:{background:"#f8f8f8",marginLeft:"3px",top:3,"& .min-icon":{width:"16px",height:"16px"}}})})]})},F=t(28948),U=function(e){var n=e.bucketSize;return(0,b.jsxs)(c.Z,{sx:{display:"flex",alignItems:"center","& .min-icon":{height:37,width:37}},children:[(0,b.jsx)(T.Mh,{}),(0,b.jsxs)(c.Z,{sx:{display:"flex",alignItems:"flex-start",justifyContent:"center",flexFlow:"column",marginLeft:"20px",fontSize:"19px"},children:[(0,b.jsx)("label",{style:{fontWeight:600},children:"Reported Usage:"}),(0,b.jsx)("label",{children:(0,F.ae)(n)})]})]})},G=function(e){var n=e.quota;return(0,b.jsxs)(c.Z,{sx:{display:"flex",alignItems:"center","& .min-icon":{height:37,width:37}},children:[(0,b.jsx)(T.sj,{}),(0,b.jsxs)(c.Z,{sx:{display:"flex",alignItems:"flex-start",justifyContent:"center",flexFlow:"column",marginLeft:"20px",fontSize:"19px"},children:[(0,b.jsxs)("label",{style:{fontWeight:600,textTransform:"capitalize"},children:[null===n||void 0===n?void 0:n.type," Quota"]}),(0,b.jsxs)("label",{children:[" ",(0,F.ae)("".concat(null===n||void 0===n?void 0:n.quota))]})]})]})},A=(0,v.Z)(o.lazy((function(){return Promise.all([t.e(14),t.e(3152),t.e(5444),t.e(8954),t.e(3816)]).then(t.bind(t,95239))}))),L=(0,v.Z)(o.lazy((function(){return Promise.all([t.e(14),t.e(3152),t.e(2066),t.e(5444),t.e(9769),t.e(2966)]).then(t.bind(t,82825))}))),w=(0,v.Z)(o.lazy((function(){return Promise.all([t.e(14),t.e(3152),t.e(2066),t.e(5444),t.e(4177)]).then(t.bind(t,44177))}))),M=(0,v.Z)(o.lazy((function(){return Promise.all([t.e(5444),t.e(9679)]).then(t.bind(t,39679))}))),D=(0,v.Z)(o.lazy((function(){return Promise.all([t.e(3360),t.e(8333)]).then(t.bind(t,28333))}))),z=(0,v.Z)(o.lazy((function(){return Promise.all([t.e(14),t.e(3152),t.e(2066),t.e(5444),t.e(6554),t.e(1711)]).then(t.bind(t,31711))}))),K={display:"grid",gridTemplateColumns:{xs:"1fr",sm:"2fr 1fr"},gridAutoFlow:{xs:"dense",sm:"row"},gap:2},V=(0,r.$j)((function(e){return{session:e.console.session,distributedSetup:e.system.distributedSetup,loadingBucket:e.buckets.bucketDetails.loadingBucket,bucketInfo:e.buckets.bucketDetails.bucketInfo}}),{setErrorSnackMessage:x.Ih,setBucketDetailsLoad:h.d5}),Y=(0,l.Z)((function(e){return(0,a.Z)((0,i.Z)((0,i.Z)({},p.bK),p.VI))}))(V((function(e){var n=e.classes,t=e.match,r=e.distributedSetup,a=e.setErrorSnackMessage,l=e.loadingBucket,u=e.bucketInfo,x=e.setBucketDetailsLoad,p=(0,o.useState)(null),h=(0,s.Z)(p,2),v=h[0],k=h[1],S=(0,o.useState)("0"),y=(0,s.Z)(S,2),C=y[0],_=y[1],N=(0,o.useState)(!1),I=(0,s.Z)(N,2),P=I[0],B=I[1],O=(0,o.useState)(!1),F=(0,s.Z)(O,2),V=F[0],Y=F[1],q=(0,o.useState)(!1),Q=(0,s.Z)(q,2),W=Q[0],$=Q[1],J=(0,o.useState)(!0),H=(0,s.Z)(J,2),X=H[0],ee=H[1],ne=(0,o.useState)(!0),te=(0,s.Z)(ne,2),se=te[0],ie=te[1],oe=(0,o.useState)(!0),re=(0,s.Z)(oe,2),ae=re[0],le=re[1],ce=(0,o.useState)(!0),ue=(0,s.Z)(ce,2),de=ue[0],fe=ue[1],xe=(0,o.useState)(!0),pe=(0,s.Z)(xe,2),me=pe[0],he=pe[1],Ze=(0,o.useState)(!0),ge=(0,s.Z)(Ze,2),ve=ge[0],je=ge[1],be=(0,o.useState)(!0),Ee=(0,s.Z)(be,2),Te=Ee[0],ke=Ee[1],Se=(0,o.useState)(!0),ye=(0,s.Z)(Se,2),Ce=ye[0],_e=ye[1],Ne=(0,o.useState)(!1),Ie=(0,s.Z)(Ne,2),Pe=Ie[0],Be=Ie[1],Oe=(0,o.useState)(!1),Re=(0,s.Z)(Oe,2),Fe=Re[0],Ue=Re[1],Ge=(0,o.useState)(null),Ae=(0,s.Z)(Ge,2),Le=Ae[0],we=Ae[1],Me=(0,o.useState)(!1),De=(0,s.Z)(Me,2),ze=De[0],Ke=De[1],Ve=(0,o.useState)(!1),Ye=(0,s.Z)(Ve,2),qe=Ye[0],Qe=Ye[1],We=(0,o.useState)(null),$e=(0,s.Z)(We,2),Je=$e[0],He=$e[1],Xe=(0,o.useState)(!1),en=(0,s.Z)(Xe,2),nn=en[0],tn=en[1],sn=(0,o.useState)(!1),on=(0,s.Z)(sn,2),rn=on[0],an=on[1],ln=(0,o.useState)(!1),cn=(0,s.Z)(ln,2),un=cn[0],dn=cn[1],fn=(0,o.useState)(!1),xn=(0,s.Z)(fn,2),pn=xn[0],mn=xn[1],hn=t.params.bucketName,Zn="n/a",gn="";null!==u&&(Zn=u.access,gn=u.definition);var vn=(0,g.F)(hn,[Z.Ft.S3_GET_BUCKET_OBJECT_LOCK_CONFIGURATION]),jn=(0,g.F)(hn,[Z.Ft.S3_GET_BUCKET_ENCRYPTION_CONFIGURATION]),bn=(0,g.F)(hn,[Z.Ft.ADMIN_GET_BUCKET_QUOTA]);(0,o.useEffect)((function(){le(!!l)}),[l,le]),(0,o.useEffect)((function(){de&&(jn?m.Z.invoke("GET","/api/v1/buckets/".concat(hn,"/encryption/info")).then((function(e){e.algorithm&&(Ke(!0),k(e)),fe(!1)})).catch((function(e){"The server side encryption configuration was not found"===e.errorMessage&&(Ke(!1),k(null)),fe(!1)})):(Ke(!1),k(null),fe(!1)))}),[de,hn,jn]),(0,o.useEffect)((function(){me&&r&&m.Z.invoke("GET","/api/v1/buckets/".concat(hn,"/versioning")).then((function(e){Be(e.is_versioned),he(!1)})).catch((function(e){a(e),he(!1)}))}),[me,a,hn,r]),(0,o.useEffect)((function(){ve&&r&&(bn?m.Z.invoke("GET","/api/v1/buckets/".concat(hn,"/quota")).then((function(e){we(e),e.quota?Ue(!0):Ue(!1),je(!1)})).catch((function(e){a(e),Ue(!1),je(!1)})):(Ue(!1),je(!1)))}),[ve,he,a,hn,r,bn]),(0,o.useEffect)((function(){me&&r&&(vn?m.Z.invoke("GET","/api/v1/buckets/".concat(hn,"/object-locking")).then((function(e){B(e.object_locking_enabled),ee(!1)})).catch((function(e){a(e),ee(!1)})):ee(!1))}),[X,a,hn,me,r,vn]),(0,o.useEffect)((function(){se&&m.Z.invoke("GET","/api/v1/buckets").then((function(e){var n=d()(e,"buckets",[]).find((function(e){return e.name===hn})),t=d()(n,"size","0");ie(!1),_(t)})).catch((function(e){ie(!1),a(e)}))}),[se,a,hn]),(0,o.useEffect)((function(){Te&&r&&m.Z.invoke("GET","/api/v1/buckets/".concat(hn,"/replication")).then((function(e){var n=e.rules?e.rules:[];$(n.length>0),ke(!1)})).catch((function(e){a(e),ke(!1)}))}),[Te,a,hn,r]),(0,o.useEffect)((function(){Ce&&P&&m.Z.invoke("GET","/api/v1/buckets/".concat(hn,"/retention")).then((function(e){_e(!1),Qe(!0),He(e)})).catch((function(e){Qe(!1),_e(!1),He(null)}))}),[Ce,P,hn]);var En=function(){x(!0),le(!0),ie(!0),he(!0),fe(!0),_e(!0)};return(0,b.jsxs)(o.Fragment,{children:[rn&&(0,b.jsx)(w,{open:rn,selectedBucket:hn,encryptionEnabled:ze,encryptionCfg:v,closeModalAndRefresh:function(){an(!1),fe(!0)}}),un&&(0,b.jsx)(z,{open:un,selectedBucket:hn,enabled:Fe,cfg:Le,closeModalAndRefresh:function(){dn(!1),je(!0)}}),V&&(0,b.jsx)(A,{bucketName:hn,open:V,actualPolicy:Zn,actualDefinition:gn,closeModalAndRefresh:function(){Y(!1),En()}}),nn&&(0,b.jsx)(L,{bucketName:hn,open:nn,closeModalAndRefresh:function(){tn(!1),En()}}),pn&&(0,b.jsx)(M,{closeVersioningModalAndRefresh:function(e){mn(!1),e&&En()},modalOpen:pn,selectedBucket:hn,versioningCurrentState:Pe}),(0,b.jsx)(f.ZP,{container:!0,children:(0,b.jsx)(f.ZP,{item:!0,xs:12,className:n.spacerBottom,children:(0,b.jsx)("h3",{style:{marginTop:"0",marginBottom:"0"},children:"Summary"})})}),(0,b.jsx)(g.s,{scopes:[Z.Ft.S3_GET_BUCKET_POLICY],resource:hn,children:(0,b.jsxs)(c.Z,{sx:(0,i.Z)({},K),children:[(0,b.jsxs)(c.Z,{sx:(0,i.Z)({},K),children:[(0,b.jsx)(g.s,{scopes:[Z.Ft.S3_GET_BUCKET_POLICY],resource:hn,children:(0,b.jsx)(R,{iamScopes:[Z.Ft.S3_PUT_BUCKET_POLICY],resourceName:hn,property:"Access Policy:",value:Zn.toLowerCase(),onEdit:function(){Y(!0)},isLoading:ae})}),(0,b.jsx)(g.s,{scopes:[Z.Ft.S3_GET_BUCKET_ENCRYPTION_CONFIGURATION],resource:hn,children:(0,b.jsx)(R,{iamScopes:[Z.Ft.S3_PUT_BUCKET_ENCRYPTION_CONFIGURATION],resourceName:hn,property:"Encryption:",value:ze?"Enabled":"Disabled",onEdit:function(){an(!0)},isLoading:de})}),(0,b.jsx)(g.s,{scopes:[Z.Ft.S3_GET_REPLICATION_CONFIGURATION],resource:hn,children:(0,b.jsx)(j.Z,{label:"Replication:",value:(0,b.jsx)(E,{icon:W?(0,b.jsx)(T.E3,{}):(0,b.jsx)(T.dR,{}),label:(0,b.jsx)("label",{className:n.textMuted,children:W?"Enabled":"Disabled"})})})}),(0,b.jsx)(g.s,{scopes:[Z.Ft.S3_GET_BUCKET_OBJECT_LOCK_CONFIGURATION],resource:hn,children:(0,b.jsx)(j.Z,{label:"Object Locking:",value:(0,b.jsx)(E,{icon:P?(0,b.jsx)(T.E3,{}):(0,b.jsx)(T.dR,{}),label:(0,b.jsx)("label",{className:n.textMuted,children:P?"Enabled":"Disabled"})})})}),(0,b.jsx)(c.Z,{className:n.spacerTop,children:(0,b.jsx)(j.Z,{label:"Tags:",value:(0,b.jsx)(D,{setErrorSnackMessage:a,bucketName:hn})})})]}),(0,b.jsx)(c.Z,{sx:{display:"grid",gridTemplateColumns:"1fr",alignItems:"flex-start"},children:(0,b.jsx)(U,{bucketSize:C})})]})}),r&&(0,b.jsxs)(g.s,{scopes:[Z.Ft.S3_GET_BUCKET_VERSIONING],resource:hn,children:[(0,b.jsx)(f.ZP,{container:!0,children:(0,b.jsx)(f.ZP,{item:!0,xs:12,className:n.spacerBottom,children:(0,b.jsx)("h3",{style:{marginTop:"25px",marginBottom:"0"},children:"Versioning"})})}),(0,b.jsxs)(c.Z,{sx:(0,i.Z)({},K),children:[(0,b.jsxs)(c.Z,{sx:(0,i.Z)({},K),children:[(0,b.jsx)(R,{iamScopes:[Z.Ft.S3_PUT_BUCKET_VERSIONING],resourceName:hn,property:"Versioning:",value:Pe?"Enabled":"Disabled",onEdit:function(){mn(!0)},isLoading:me}),(0,b.jsx)(R,{iamScopes:[Z.Ft.ADMIN_SET_BUCKET_QUOTA],resourceName:hn,property:"Quota:",value:Fe?"Enabled":"Disabled",onEdit:function(){dn(!0)},isLoading:ve})]}),(0,b.jsx)(c.Z,{sx:{display:"grid",gridTemplateColumns:"1fr",alignItems:"flex-start"},children:Fe&&Le?(0,b.jsx)(G,{quota:Le}):null})]})]}),P&&(0,b.jsxs)(g.s,{scopes:[Z.Ft.S3_GET_OBJECT_RETENTION],resource:hn,children:[(0,b.jsx)(f.ZP,{container:!0,children:(0,b.jsx)(f.ZP,{item:!0,xs:12,className:n.spacerBottom,children:(0,b.jsx)("h3",{style:{marginTop:"25px",marginBottom:"0"},children:"Retention"})})}),(0,b.jsxs)(c.Z,{sx:{display:"grid",gridTemplateColumns:{xs:"1fr",sm:"2fr 1fr"},gridAutoFlow:{xs:"dense",sm:"row"},gap:2},children:[(0,b.jsxs)(c.Z,{sx:{display:"grid",gridTemplateColumns:{xs:"1fr",sm:"2fr 1fr"},gridAutoFlow:{xs:"dense",sm:"row"},gap:2},children:[(0,b.jsx)(R,{iamScopes:[Z.Ft.ADMIN_SET_BUCKET_QUOTA],resourceName:hn,property:"Retention:",value:qe?"Enabled":"Disabled",onEdit:function(){tn(!0)},isLoading:Ce}),(0,b.jsx)(j.Z,{label:"Mode:",value:(0,b.jsx)("label",{className:n.textMuted,style:{textTransform:"capitalize"},children:Je&&Je.mode?Je.mode:"-"})}),(0,b.jsx)(j.Z,{label:"Validity:",value:(0,b.jsxs)("label",{className:n.textMuted,style:{textTransform:"capitalize"},children:[Je&&Je.validity," ",Je&&(1===Je.validity?Je.unit.slice(0,-1):Je.unit)]})})]}),(0,b.jsx)(c.Z,{sx:{display:"grid",gridTemplateColumns:"1fr",alignItems:"flex-start"}})]})]})]})})))},29308:function(e,n,t){var s=t(18489),i=(t(50390),t(19787)),o=t(62559);n.Z=function(e){var n=e.label,t=void 0===n?null:n,r=e.value,a=void 0===r?"-":r,l=e.orientation,c=void 0===l?"column":l,u=e.stkProps,d=void 0===u?{}:u,f=e.lblProps,x=void 0===f?{}:f,p=e.valProps,m=void 0===p?{}:p;return(0,o.jsxs)(i.Z,(0,s.Z)((0,s.Z)({direction:{xs:"column",sm:c}},d),{},{children:[(0,o.jsx)("label",(0,s.Z)((0,s.Z)({style:{marginRight:5,fontWeight:600}},x),{},{children:t})),(0,o.jsx)("label",(0,s.Z)((0,s.Z)({style:{marginRight:5,fontWeight:500}},m),{},{children:a}))]}))}},19787:function(e,n,t){var s=t(36222),i=t(1048),o=t(32793),r=t(50390),a=t(11188),l=t(88646),c=t(99301),u=t(64487),d=t(8208),f=t(15573),x=t(62559),p=["component","direction","spacing","divider","children"];function m(e,n){var t=r.Children.toArray(e).filter(Boolean);return t.reduce((function(e,s,i){return e.push(s),i<t.length-1&&e.push(r.cloneElement(n,{key:"separator-".concat(i)})),e}),[])}var h=(0,d.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,n){return[n.root]}})((function(e){var n=e.ownerState,t=e.theme,i=(0,o.Z)({display:"flex"},(0,a.k9)({theme:t},(0,a.P$)({values:n.direction,breakpoints:t.breakpoints.values}),(function(e){return{flexDirection:e}})));if(n.spacing){var r=(0,l.hB)(t),c=Object.keys(t.breakpoints.values).reduce((function(e,t){return null==n.spacing[t]&&null==n.direction[t]||(e[t]=!0),e}),{}),d=(0,a.P$)({values:n.direction,base:c}),f=(0,a.P$)({values:n.spacing,base:c});i=(0,u.Z)(i,(0,a.k9)({theme:t},f,(function(e,t){return{"& > :not(style) + :not(style)":(0,s.Z)({margin:0},"margin".concat((i=t?d[t]:n.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[i])),(0,l.NA)(r,e))};var i})))}return i})),Z=r.forwardRef((function(e,n){var t=(0,f.Z)({props:e,name:"MuiStack"}),s=(0,c.Z)(t),r=s.component,a=void 0===r?"div":r,l=s.direction,u=void 0===l?"column":l,d=s.spacing,Z=void 0===d?0:d,g=s.divider,v=s.children,j=(0,i.Z)(s,p),b={direction:u,spacing:Z};return(0,x.jsx)(h,(0,o.Z)({as:a,ownerState:b,ref:n},j,{children:g?m(v,g):v}))}));n.Z=Z}}]);
//# sourceMappingURL=528.d625c2f7.chunk.js.map