"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[5144],{5144:function(e,n,t){t.r(n);var s=t(23430),c=t(18489),o=t(50390),i=t(34424),r=t(86509),a=t(4285),l=t(46981),u=t(44149),d=t(17777),f=t(30324),m=t(14792),Z=t(25594),b=t(72462),k=t(49495),p=t(48122),g=t(15607),_=t(37882),h=t(53224),x=t(62559),C=(0,_.Z)(o.lazy((function(){return Promise.all([t.e(14),t.e(2066),t.e(5444),t.e(2892)]).then(t.bind(t,82892))}))),E=(0,_.Z)(o.lazy((function(){return Promise.all([t.e(5444),t.e(7926)]).then(t.bind(t,7926))}))),S=(0,_.Z)(o.lazy((function(){return Promise.all([t.e(14),t.e(5444),t.e(6145)]).then(t.bind(t,46145))}))),B=(0,i.$j)((function(e){return{session:e.console.session,loadingBucket:e.buckets.bucketDetails.loadingBucket,bucketInfo:e.buckets.bucketDetails.bucketInfo}}),{setErrorSnackMessage:u.Ih});n.default=(0,a.Z)((function(e){return(0,r.Z)((0,c.Z)((0,c.Z)((0,c.Z)((0,c.Z)((0,c.Z)({"@global":{".rowLine:hover  .iconFileElm":{backgroundImage:"url(/images/ob_file_filled.svg)"},".rowLine:hover  .iconFolderElm":{backgroundImage:"url(/images/ob_folder_filled.svg)"}},listButton:{marginLeft:"10px",align:"right"}},b.VX),b.OR),b.qg),b.cx),(0,b.Bz)(e.spacing(4))))}))(B((function(e){var n=e.classes,t=e.match,c=e.setErrorSnackMessage,i=e.loadingBucket,r=(e.bucketInfo,(0,o.useState)(!0)),a=(0,s.Z)(r,2),u=a[0],b=a[1],_=(0,o.useState)([]),B=(0,s.Z)(_,2),F=B[0],P=B[1],j=(0,o.useState)(!1),T=(0,s.Z)(j,2),v=T[0],I=T[1],L=(0,o.useState)(!1),y=(0,s.Z)(L,2),O=y[0],A=y[1],K=(0,o.useState)(""),U=(0,s.Z)(K,2),R=U[0],Y=U[1],w=(0,o.useState)(!1),z=(0,s.Z)(w,2),N=z[0],D=z[1],G=(0,o.useState)(""),M=(0,s.Z)(G,2),q=M[0],V=M[1],X=(0,o.useState)(""),$=(0,s.Z)(X,2),H=$[0],J=$[1],Q=t.params.bucketName,W=(0,g.F)(Q,[k.Ft.S3_GET_BUCKET_POLICY]),ee=(0,g.F)(Q,[k.Ft.S3_DELETE_BUCKET_POLICY]),ne=(0,g.F)(Q,[k.Ft.S3_PUT_BUCKET_POLICY]);(0,o.useEffect)((function(){i&&b(!0)}),[i,b]);var te=[{type:"delete",disableButtonFunction:function(){return!ee},onClick:function(e){A(!0),Y(e.prefix)}},{type:"view",disableButtonFunction:function(){return!ne},onClick:function(e){V(e.prefix),J(e.access),D(!0)}}];(0,o.useEffect)((function(){u&&(W?f.Z.invoke("GET","/api/v1/bucket/".concat(Q,"/access-rules")).then((function(e){P(e.accessRules),b(!1)})).catch((function(e){c(e),b(!1)})):b(!1))}),[u,c,W,Q]);return(0,x.jsxs)(o.Fragment,{children:[v&&(0,x.jsx)(C,{modalOpen:v,onClose:function(){I(!1),b(!0)},bucket:Q}),O&&(0,x.jsx)(E,{modalOpen:O,onClose:function(){A(!1),b(!0)},bucket:Q,toDelete:R}),N&&(0,x.jsx)(S,{modalOpen:N,onClose:function(){D(!1),b(!0)},bucket:Q,toEdit:q,initial:H}),(0,x.jsxs)(Z.ZP,{item:!0,xs:12,className:n.actionsTray,children:[(0,x.jsx)(p.Z,{children:"Access Rules"}),(0,x.jsx)(g.Z,{scopes:[k.Ft.S3_GET_BUCKET_POLICY,k.Ft.S3_PUT_BUCKET_POLICY],resource:Q,matchAll:!0,errorProps:{disabled:!0},children:(0,x.jsx)(h.Z,{tooltip:"Add Access Rule",onClick:function(){I(!0)},text:"Add Access Rule",icon:(0,x.jsx)(m.Z,{}),color:"primary",variant:"contained"})})]}),(0,x.jsx)(l.Z,{className:n.tableBlock,children:(0,x.jsx)(g.Z,{scopes:[k.Ft.S3_GET_BUCKET_POLICY],resource:Q,errorProps:{disabled:!0},children:(0,x.jsx)(d.Z,{noBackground:!0,itemActions:te,columns:[{label:"Prefix",elementKey:"prefix"},{label:"Access",elementKey:"access"}],isLoading:u,records:F,entityName:"Access Rules",idField:"prefix"})})})]})})))},48122:function(e,n,t){t(50390);var s=t(86509),c=t(4285),o=t(62559);n.Z=(0,c.Z)((function(e){return(0,s.Z)({root:{padding:0,margin:0,fontSize:".9rem"}})}))((function(e){var n=e.classes,t=e.children;return(0,o.jsx)("h1",{className:n.root,children:t})}))}}]);
//# sourceMappingURL=5144.f66d75af.chunk.js.map