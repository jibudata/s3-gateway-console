"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[2074,8896,9134],{88896:function(e,n,t){t.r(n);var s=t(37762),i=t(29439),r=t(72791),o=t(29945),l=t(45248),c=t(87995),a=t(81551),u=t(23508),d=t(9505),f=t(80184);n.default=function(e){var n=e.selectedGroups,t=e.deleteOpen,x=e.closeDeleteModalAndRefresh,h=(0,a.TL)(),p=(0,d.Z)((function(){return x(!0)}),(function(e){h((0,c.Ih)(e)),x(!1)})),m=(0,i.Z)(p,2),j=m[0],v=m[1];if(!n)return null;var g=n.map((function(e){return(0,f.jsx)("div",{children:(0,f.jsx)("b",{children:e})},e)}));return(0,f.jsx)(u.Z,{title:"Delete Group".concat(n.length>1?"s":""),confirmText:"Delete",isOpen:t,titleIcon:(0,f.jsx)(o.NvT,{}),isLoading:j,onConfirm:function(){var e,t=(0,s.Z)(n);try{for(t.s();!(e=t.n()).done;){var i=e.value;v("DELETE","/api/v1/group/".concat((0,l.LL)(i)))}}catch(r){t.e(r)}finally{t.f()}},onClose:function(){return x(!1)},confirmationContent:(0,f.jsxs)(r.Fragment,{children:["Are you sure you want to delete the following"," ",1===n.length?"":n.length," group",n.length>1?"s?":"?",g]})})}},22074:function(e,n,t){t.r(n),t.d(n,{default:function(){return L},formatPolicy:function(){return k}});var s=t(29439),i=t(72791),r=t(57689),o=t(29945),l=t(31776),c=t(82342),a=t(56087),u=t(38442),d=t(45248),f=t(87995),x=t(81551),h=t(74616),p=t(39134),m=t(23814),j=t(40228),v=t(56028),g=t(80184),b=function(e){var n=e.title,t=void 0===n?"":n,r=e.groupStatus,a=void 0===r?"enabled":r,u=e.preSelectedUsers,h=void 0===u?[]:u,p=e.selectedGroup,b=void 0===p?"":p,Z=e.open,y=e.onClose,S=(0,x.TL)(),C=(0,i.useState)(h),P=(0,s.Z)(C,2),k=P[0],L=P[1];return(0,g.jsxs)(v.Z,{modalOpen:Z,onClose:y,title:t,titleIcon:(0,g.jsx)(o.ZmA,{}),children:[(0,g.jsxs)(o.ltY,{withBorders:!1,containerPadding:!1,children:[(0,g.jsx)(o.bSr,{label:"Selected Group",sx:{width:"100%"},children:b}),(0,g.jsx)(j.Z,{selectedUsers:k,setSelectedUsers:L,editMode:!b})]}),(0,g.jsxs)(o.rjZ,{item:!0,xs:12,sx:m.ID.modalButtonBar,children:[(0,g.jsx)(o.zxk,{id:"reset-add-group-member",type:"button",variant:"regular",onClick:function(){L(h)},label:"Reset"}),(0,g.jsx)(o.zxk,{id:"save-add-group-member",type:"button",variant:"callAction",onClick:function(){l.h.group.updateGroup((0,d.LL)(b),{members:k,status:a}).then((function(){y()})).catch((function(e){y(),S((0,f.zb)((0,c.g)(e.error)))}))},label:"Save"})]})]})},Z=t(88896),y=t(59114),S=t(27454),C=t(99670),P=t(47974),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.length<=0?[]:e.split(",")},L=function(){var e=(0,x.TL)(),n=(0,r.s0)(),t=(0,r.UO)(),m=(0,i.useState)({}),j=(0,s.Z)(m,2),v=j[0],L=j[1],A=(0,i.useState)(!1),U=(0,s.Z)(A,2),w=U[0],F=U[1],G=(0,i.useState)(!1),K=(0,s.Z)(G,2),M=K[0],E=K[1],I=(0,i.useState)(!1),z=(0,s.Z)(I,2),N=z[0],T=z[1],B=(0,i.useState)(""),D=(0,s.Z)(B,2),O=D[0],R=D[1],Q=(0,i.useState)("members"),_=(0,s.Z)(Q,2),H=_[0],W=_[1],X=(0,d.IO)(t.groupName||""),Y=v.members,J=void 0===Y?[]:Y,V=v.policy,q=void 0===V?"":V,$=v.status,ee=J.filter((function(e){return e.includes(O)})),ne=(0,u.F)(a.C3,a.iw,!0);(0,i.useEffect)((function(){e((0,f.Sc)("group_details"))}),[]),(0,i.useEffect)((function(){X&&ae()}),[X]);var te=k(q),se="enabled"===$,ie=J.length>0?"Edit Members":"Add Members",re=(0,u.F)(a.C3,a.k_),oe=(0,u.F)(a.C3,a.kt,!0),le=(0,u.F)(a.C3,a.UA,!0),ce=(0,u.F)(a.C3,a.GD,!0);function ae(){re&&l.h.group.groupInfo((0,d.LL)(X)).then((function(e){L(e.data)})).catch((function(n){e((0,f.zb)((0,c.g)(n.error))),L({})}))}var ue=(0,g.jsxs)(o.xuv,{onMouseMove:function(){e((0,f.Sc)("groups_members"))},children:[(0,g.jsx)(o.NZf,{separator:!0,sx:{marginBottom:15},actions:(0,g.jsxs)(o.xuv,{sx:{display:"flex",gap:10},children:[(0,g.jsx)(y.Z,{placeholder:"Search members",onChange:function(e){R(e)},value:O,sx:{maxWidth:280}}),(0,g.jsx)(u.s,{resource:a.C3,scopes:a.uH,errorProps:{disabled:!0},children:(0,g.jsx)(S.Z,{tooltip:oe?ie:(0,a.MK)(a.vN,"edit Group membership"),children:(0,g.jsx)(o.zxk,{id:"add-user-group",label:ie,variant:"callAction",icon:(0,g.jsx)(o.dtP,{}),onClick:function(){E(!0)},disabled:!oe})})})]}),children:"Members"}),(0,g.jsx)(o.rjZ,{item:!0,xs:12,children:(0,g.jsx)(u.s,{resource:a.C3,scopes:a.Rs,errorProps:{disabled:!0},children:(0,g.jsx)(S.Z,{tooltip:ne?"":(0,a.MK)(a.iw,"view User details"),children:(0,g.jsx)(o.wQF,{itemActions:[{type:"view",onClick:function(e){n("".concat(a.gA.USERS,"/").concat((0,d.LL)(e)))},disableButtonFunction:function(){return!ne}}],columns:[{label:"Access Key"}],selectedItems:[],isLoading:!1,records:ee,entityName:"Users"})})})})]}),de=(0,g.jsxs)(i.Fragment,{children:[(0,g.jsx)(o.xuv,{onMouseMove:function(){e((0,f.Sc)("groups_policies"))},children:(0,g.jsx)(o.NZf,{separator:!0,sx:{marginBottom:15},actions:(0,g.jsx)(S.Z,{tooltip:le?"Set Policies":(0,a.MK)(a.UA,"assign Policies"),children:(0,g.jsx)(o.zxk,{id:"set-policies",label:"Set Policies",variant:"callAction",icon:(0,g.jsx)(o.v42,{}),onClick:function(){F(!0)},disabled:!le})}),children:"Policies"})}),(0,g.jsx)(o.rjZ,{item:!0,xs:12,children:(0,g.jsx)(S.Z,{tooltip:ce?"":(0,a.MK)(a.GD,"view Policy details"),children:(0,g.jsx)(o.wQF,{itemActions:[{type:"view",onClick:function(e){n("".concat(a.gA.POLICIES,"/").concat((0,d.LL)(e)))},disableButtonFunction:function(){return!ce}}],columns:[{label:"Policy"}],isLoading:!1,records:te,entityName:"Policies"})})})]});return(0,g.jsxs)(i.Fragment,{children:[w?(0,g.jsx)(p.default,{open:w,selectedGroups:[X],selectedUser:null,closeModalAndRefresh:function(){F(!1),ae(),e((0,h.ue)([]))}}):null,M?(0,g.jsx)(b,{selectedGroup:X,onSaveClick:function(){},title:ie,groupStatus:$,preSelectedUsers:J,open:M,onClose:function(){E(!1),ae()}}):null,N&&(0,g.jsx)(Z.default,{deleteOpen:N,selectedGroups:[X],closeDeleteModalAndRefresh:function(e){T(!1),e&&n(a.gA.GROUPS)}}),(0,g.jsx)(P.Z,{label:(0,g.jsx)(i.Fragment,{children:(0,g.jsx)(o.hbI,{label:"Groups",onClick:function(){return n(a.gA.GROUPS)}})}),actions:(0,g.jsx)(C.Z,{})}),(0,g.jsxs)(o.Xgh,{children:[(0,g.jsx)(o.rjZ,{item:!0,xs:12,children:(0,g.jsx)(o.UHn,{icon:(0,g.jsx)(i.Fragment,{children:(0,g.jsx)(o.wws,{width:40})}),title:X,subTitle:null,bottomBorder:!0,actions:(0,g.jsxs)(o.xuv,{sx:{display:"flex",fontSize:14,alignItems:"center",gap:15},children:[(0,g.jsx)("span",{children:"Group Status:"}),(0,g.jsx)("span",{id:"group-status-label",style:{fontWeight:"bold"},children:se?"Enabled":"Disabled"}),(0,g.jsx)(S.Z,{tooltip:(0,u.F)(a.C3,a.xh,!0)?"":(0,a.MK)(a.xh,"enable or disable Groups"),children:(0,g.jsx)(u.s,{resource:a.C3,scopes:a.xh,errorProps:{disabled:!0},matchAll:!0,children:(0,g.jsx)(o.rsf,{indicatorLabels:["Enabled","Disabled"],checked:se,value:"group_enabled",id:"group-status",name:"group-status",onChange:function(){var n;n=!se,l.h.group.updateGroup((0,d.LL)(X),{members:J,status:n?"enabled":"disabled"}).then((function(){ae()})).catch((function(n){e((0,f.zb)((0,c.g)(n.error)))}))},switchOnly:!0})})}),(0,g.jsx)(S.Z,{tooltip:"Delete Group",children:(0,g.jsx)(o.zxk,{id:"delete-user-group",variant:"secondary",icon:(0,g.jsx)(o.XHJ,{}),onClick:function(){T(!0)}})})]}),sx:{marginBottom:15}})}),(0,g.jsx)(o.rjZ,{item:!0,xs:12,children:(0,g.jsx)(o.mQc,{options:[{tabConfig:{id:"members",label:"Members"},content:ue},{tabConfig:{id:"policies",label:"Policies"},content:de}],currentTabOrPath:H,onTabClick:W})})]})]})}},40228:function(e,n,t){var s=t(93433),i=t(29439),r=t(72791),o=t(26181),l=t.n(o),c=t(31776),a=t(82342),u=t(29945),d=t(40986),f=t(21639),x=t(87995),h=t(81551),p=t(59114),m=t(80184);n.Z=function(e){var n=e.selectedUsers,t=e.setSelectedUsers,o=e.editMode,j=void 0!==o&&o,v=(0,h.TL)(),g=(0,r.useState)([]),b=(0,i.Z)(g,2),Z=b[0],y=b[1],S=(0,r.useState)(!1),C=(0,i.Z)(S,2),P=C[0],k=C[1],L=(0,r.useState)(""),A=(0,i.Z)(L,2),U=A[0],w=A[1],F=(0,r.useCallback)((function(){c.h.users.listUsers().then((function(e){var n=l()(e.data,"users",[]);n||(n=[]),y(n.sort(f.LQ)),k(!1)})).catch((function(e){v((0,x.zb)((0,a.g)(e.error))),k(!1)}))}),[v]);(0,r.useEffect)((function(){k(!0)}),[]),(0,r.useEffect)((function(){P&&F()}),[P,F]);var G=n||[],K=Z.filter((function(e){return e.accessKey.includes(U)}));return(0,m.jsx)(u.rjZ,{item:!0,xs:12,className:"inputItem",children:(0,m.jsxs)(u.xuv,{children:[P&&(0,m.jsx)(d.Z,{}),(null===Z||void 0===Z?void 0:Z.length)>0?(0,m.jsxs)(r.Fragment,{children:[(0,m.jsx)(u.rjZ,{item:!0,xs:12,className:"inputItem",children:(0,m.jsx)(p.Z,{label:j?"Edit Members":"Assign Users",placeholder:"Filter Users",onChange:w,value:U})}),(0,m.jsx)(u.wQF,{columns:[{label:"Access Key",elementKey:"accessKey"}],onSelect:function(e){var n=e.target,i=n.value,r=n.checked,o=(0,s.Z)(G);return r?o.push(i):o=o.filter((function(e){return e!==i})),t(o),o},selectedItems:G,isLoading:P,records:K,entityName:"Users",idField:"accessKey",customPaperHeight:"200px"})]}):(0,m.jsx)(u.xuv,{sx:{textAlign:"center",padding:"10px 0"},children:"No Users to display"})]})})}},58400:function(e,n,t){var s=t(93433),i=t(29439),r=t(72791),o=t(40986),l=t(29945),c=t(21639),a=t(59114),u=t(87995),d=t(81551),f=t(74616),x=t(78687),h=t(31776),p=t(80184);n.Z=function(e){var n=e.noTitle,t=void 0!==n&&n,m=(0,d.TL)(),j=(0,r.useState)([]),v=(0,i.Z)(j,2),g=v[0],b=v[1],Z=(0,r.useState)(!1),y=(0,i.Z)(Z,2),S=y[0],C=y[1],P=(0,r.useState)(""),k=(0,i.Z)(P,2),L=k[0],A=k[1],U=(0,x.v9)((function(e){return e.createUser.selectedPolicies})),w=(0,r.useCallback)((function(){C(!0),h.h.policies.listPolicies().then((function(e){var n,t=null!==(n=e.data.policies)&&void 0!==n?n:[];C(!1),b(t.sort(c.g4))})).catch((function(e){C(!1),m((0,u.zb)(e))}))}),[m]);(0,r.useEffect)((function(){C(!0)}),[]),(0,r.useEffect)((function(){S&&w()}),[S,w]);var F=g.filter((function(e){return e.name.includes(L)}));return(0,p.jsxs)(l.rjZ,{item:!0,xs:12,className:"inputItem",children:[S&&(0,p.jsx)(o.Z,{}),g.length>0?(0,p.jsxs)(r.Fragment,{children:[(0,p.jsx)(l.rjZ,{item:!0,xs:12,className:"inputItem",children:(0,p.jsx)(a.Z,{placeholder:"Start typing to search for a Policy",onChange:function(e){A(e)},value:L,label:t?"":"Assign Policies"})}),(0,p.jsx)(l.wQF,{columns:[{label:"Policy",elementKey:"name"}],onSelect:function(e){var n=e.target,t=n.value,i=n.checked,r=(0,s.Z)(U);i?r.push(t):r=r.filter((function(e){return e!==t})),r=r.filter((function(e){return""!==e})),m((0,f.ue)(r))},selectedItems:U,isLoading:S,records:F,entityName:"Policies",idField:"name",customPaperHeight:"200px"})]}):(0,p.jsx)(l.xuv,{sx:{textAlign:"center",padding:"10px 0"},children:"No Policies Available"})]})}},39134:function(e,n,t){t.r(n);var s=t(29439),i=t(72791),r=t(26181),o=t.n(r),l=t(78687),c=t(29945),a=t(40986),u=t(45248),d=t(87995),f=t(81551),x=t(23814),h=t(74616),p=t(56028),m=t(58400),j=t(81207),v=t(80184);n.default=function(e){var n=e.closeModalAndRefresh,t=e.selectedUser,r=e.selectedGroups,g=e.open,b=(0,f.TL)(),Z=(0,i.useState)(!1),y=(0,s.Z)(Z,2),S=y[0],C=y[1],P=(0,i.useState)([]),k=(0,s.Z)(P,2),L=k[0],A=k[1],U=(0,i.useState)([]),w=(0,s.Z)(U,2),F=w[0],G=w[1],K=(0,l.v9)((function(e){return e.createUser.selectedPolicies}));(0,i.useEffect)((function(){if(g){if(1===(null===r||void 0===r?void 0:r.length))return void(1===(null===r||void 0===r?void 0:r.length)&&j.Z.invoke("GET","/api/v1/group/".concat((0,u.LL)(r[0]))).then((function(e){var n=o()(e,"policy","");A(n.split(",")),G(n.split(",")),b((0,h.ue)(n.split(",")))})).catch((function(e){b((0,d.zb)(e)),C(!1)})));var e=o()(t,"policy",[]);A(e),G(e),b((0,h.ue)(e))}}),[g,null===r||void 0===r?void 0:r.length,t]);var M=o()(t,"accessKey","");return(0,v.jsxs)(p.Z,{onClose:function(){n()},modalOpen:g,title:"Set Policies",children:[(0,v.jsxs)(c.ltY,{withBorders:!1,containerPadding:!1,children:[(1===(null===r||void 0===r?void 0:r.length)||null!=t)&&(0,v.jsxs)(i.Fragment,{children:[(0,v.jsx)(c.bSr,{label:"Selected ".concat(null!==r?"Group":"User"),sx:{width:"100%"},children:null!==r?r[0]:M}),(0,v.jsx)(c.bSr,{label:"Current Policy",sx:{width:"100%"},children:L.join(", ")})]}),r&&(null===r||void 0===r?void 0:r.length)>1&&(0,v.jsx)(c.bSr,{label:"Selected Groups",sx:{width:"100%"},children:r.join(", ")}),(0,v.jsx)(c.rjZ,{item:!0,xs:12,children:(0,v.jsx)(m.Z,{selectedPolicy:F})})]}),(0,v.jsxs)(c.rjZ,{item:!0,xs:12,sx:x.ID.modalButtonBar,children:[(0,v.jsx)(c.zxk,{id:"reset",type:"button",variant:"regular",onClick:function(){G(L),b((0,h.ue)(L))},label:"Reset"}),(0,v.jsx)(c.zxk,{id:"save",type:"button",variant:"callAction",color:"primary",disabled:S,onClick:function(){var e=null,s=null;null!==r?s=r:null!==t&&(e=[t.accessKey]||0),C(!0),j.Z.invoke("PUT","/api/v1/set-policy-multi",{name:K,groups:s,users:e}).then((function(){C(!1),n()})).catch((function(e){C(!1),b((0,d.zb)(e))}))},label:"Save"})]}),S&&(0,v.jsx)(c.rjZ,{item:!0,xs:12,children:(0,v.jsx)(a.Z,{})})]})}},21639:function(e,n,t){t.d(n,{KE:function(){return o},LQ:function(){return s},V2:function(){return r},g4:function(){return i}});var s=function(e,n){if(e.accessKey&&n.accessKey){if(e.accessKey>n.accessKey)return 1;if(e.accessKey<n.accessKey)return-1}return 0},i=function(e,n){return e.name>n.name?1:e.name<n.name?-1:0},r=function(e,n){return e>n?1:e<n?-1:0},o=function(e,n){return e.policy>n.policy?1:e.policy<n.policy?-1:0}}}]);
//# sourceMappingURL=2074.307a0b66.chunk.js.map