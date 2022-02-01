"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[6173],{8235:function(e,t,n){n(50390);var i=n(86509),a=n(4285),r=n(25594),o=n(62559);t.Z=(0,a.Z)((function(e){return(0,i.Z)({root:{border:"1px solid #E2E2E2",borderRadius:2,backgroundColor:"#FBFAFA",paddingLeft:25,paddingTop:31,paddingBottom:21,paddingRight:30},leftItems:{fontSize:16,fontWeight:"bold",marginBottom:15,display:"flex",alignItems:"center","& .min-icon":{marginRight:15,height:28,width:38}},helpText:{fontSize:16,paddingLeft:5}})}))((function(e){var t=e.classes,n=e.iconComponent,i=e.title,a=e.help;return(0,o.jsx)("div",{className:t.root,children:(0,o.jsxs)(r.ZP,{container:!0,children:[(0,o.jsxs)(r.ZP,{item:!0,xs:12,className:t.leftItems,children:[n,i]}),(0,o.jsx)(r.ZP,{item:!0,xs:12,className:t.helpText,children:a})]})})}))},96173:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}});var i=n(23430),a=n(18489),r=n(50390),o=n(34424),s=n(86509),l=n(4285),c=n(25594),d=n(14792),u=n(56135),m=n(44149),p=n(72462),h=n(30324),x=n(17777),f=n(8235),g=n(48122),Z=n(15607),v=n(49495),b=n(37882),j=n(53224),C=n(66946),k=n(76352),N=n(66964),S=n(65703),y=n(77138),F=n(50280),P=n(92440),R=n(62559),E=(0,o.$j)(null,{setModalErrorSnackMessage:m.zb}),I=(0,l.Z)((function(e){return(0,s.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({buttonContainer:{textAlign:"right"},multiContainer:{display:"flex",alignItems:"center"},sizeFactorContainer:{"& label":{display:"none"},"& div:first-child":{marginBottom:0}}},p.bK),p.QV),p.DF),p.ID),{},{modalFormScrollable:(0,a.Z)((0,a.Z)({},p.ID.modalFormScrollable),{},{paddingRight:10})}))}))(E((function(e){var t=e.closeModalAndRefresh,n=e.open,a=e.classes,o=e.bucketName,s=e.ruleID,l=e.setModalErrorSnackMessage,d=(0,r.useState)(!0),u=(0,i.Z)(d,2),m=u[0],p=u[1],x=(0,r.useState)(!1),f=(0,i.Z)(x,2),g=f[0],Z=f[1],v=(0,r.useState)("1"),b=(0,i.Z)(v,2),j=b[0],E=b[1],I=(0,r.useState)(""),w=(0,i.Z)(I,2),M=w[0],D=w[1],T=(0,r.useState)(""),B=(0,i.Z)(T,2),A=B[0],L=B[1],O=(0,r.useState)(!1),_=(0,i.Z)(O,2),z=_[0],W=_[1],G=(0,r.useState)(!1),H=(0,i.Z)(G,2),U=H[0],K=H[1],Y=(0,r.useState)(""),$=(0,i.Z)(Y,2),V=$[0],q=$[1],Q=(0,r.useState)(""),X=(0,i.Z)(Q,2),J=X[0],ee=X[1],te=(0,r.useState)(""),ne=(0,i.Z)(te,2),ie=ne[0],ae=ne[1],re=(0,r.useState)(!1),oe=(0,i.Z)(re,2),se=oe[0],le=oe[1],ce=(0,r.useState)(!1),de=(0,i.Z)(ce,2),ue=de[0],me=de[1],pe=(0,r.useState)(!1),he=(0,i.Z)(pe,2),xe=he[0],fe=he[1];return(0,r.useEffect)((function(){m&&h.Z.invoke("GET","/api/v1/buckets/".concat(o,"/replication/").concat(s)).then((function(e){E(e.priority.toString());var t=e.prefix||"",n=e.tags||"";L(t),q(n),ee(n),D(e.destination.bucket),W(e.delete_marker_replication),ae(e.storageClass||""),le(!!e.existingObjects),me(!!e.deletes_replication),fe("Enabled"===e.status),K(!!e.metadata_replication),p(!1)})).catch((function(e){l(e),p(!1)}))}),[m,l,o,s]),(0,r.useEffect)((function(){if(g){var e={arn:M,ruleState:xe,prefix:A,tags:J,replicateDeleteMarkers:z,replicateDeletes:ue,replicateExistingObjects:se,replicateMetadata:U,priority:parseInt(j),storageClass:ie};h.Z.invoke("PUT","/api/v1/buckets/".concat(o,"/replication/").concat(s),e).then((function(){Z(!1),t(!0)})).catch((function(e){l(e),Z(!1)}))}}),[g,o,s,M,A,J,z,j,ue,se,xe,U,ie,t,l]),(0,R.jsx)(k.Z,{modalOpen:n,onClose:function(){t(!1)},title:"Edit Bucket Replication",titleIcon:(0,R.jsx)(y.xR,{}),children:(0,R.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),Z(!0)},children:(0,R.jsxs)(c.ZP,{container:!0,children:[(0,R.jsxs)(c.ZP,{item:!0,xs:12,className:a.modalFormScrollable,children:[(0,R.jsx)(c.ZP,{item:!0,xs:12,className:a.formFieldRow,children:(0,R.jsx)(P.Z,{checked:xe,id:"ruleState",name:"ruleState",label:"Rule State",onChange:function(e){fe(e.target.checked)},value:xe})}),(0,R.jsx)(c.ZP,{item:!0,xs:12,className:a.formFieldRow,children:(0,R.jsx)(F.Z,{label:"Destination",content:M})}),(0,R.jsx)(c.ZP,{item:!0,xs:12,className:a.formFieldRow,children:(0,R.jsx)(N.Z,{id:"priority",name:"priority",onChange:function(e){e.target.validity.valid&&E(e.target.value)},label:"Priority",value:j,pattern:"[0-9]*"})}),(0,R.jsx)(c.ZP,{item:!0,xs:12,className:"".concat(a.spacerTop," ").concat(a.formFieldRow),children:(0,R.jsx)(N.Z,{id:"storageClass",name:"storageClass",onChange:function(e){ae(e.target.value)},placeholder:"STANDARD_IA,REDUCED_REDUNDANCY etc",label:"Storage Class",value:ie})}),(0,R.jsx)(c.ZP,{item:!0,xs:12,children:(0,R.jsxs)("fieldset",{className:a.fieldGroup,children:[(0,R.jsx)("legend",{className:a.descriptionText,children:"Object Filters"}),(0,R.jsx)(c.ZP,{item:!0,xs:12,className:a.formFieldRow,children:(0,R.jsx)(N.Z,{id:"prefix",name:"prefix",onChange:function(e){L(e.target.value)},placeholder:"prefix",label:"Prefix",value:A})}),(0,R.jsx)(c.ZP,{item:!0,xs:12,className:a.formFieldRow,children:(0,R.jsx)(S.Z,{name:"tags",label:"Tags",elements:V,onChange:function(e){ee(e)},keyPlaceholder:"Tag Key",valuePlaceholder:"Tag Value",withBorder:!0})})]})}),(0,R.jsx)(c.ZP,{item:!0,xs:12,children:(0,R.jsxs)("fieldset",{className:a.fieldGroup,children:[(0,R.jsx)("legend",{className:a.descriptionText,children:"Replication Options"}),(0,R.jsx)(c.ZP,{item:!0,xs:12,className:a.formFieldRow,children:(0,R.jsx)(P.Z,{checked:se,id:"repExisting",name:"repExisting",label:"Existing Objects",onChange:function(e){le(e.target.checked)},value:se,description:"Replicate existing objects"})}),(0,R.jsx)(P.Z,{checked:U,id:"metadatataSync",name:"metadatataSync",label:"Metadata Sync",onChange:function(e){K(e.target.checked)},value:U,description:"Metadata Sync"}),(0,R.jsx)(c.ZP,{item:!0,xs:12,className:a.formFieldRow,children:(0,R.jsx)(P.Z,{checked:z,id:"deleteMarker",name:"deleteMarker",label:"Delete Marker",onChange:function(e){W(e.target.checked)},value:z,description:"Replicate soft deletes"})}),(0,R.jsx)(c.ZP,{item:!0,xs:12,className:a.formFieldRow,children:(0,R.jsx)(P.Z,{checked:ue,id:"repDelete",name:"repDelete",label:"Deletes",onChange:function(e){me(e.target.checked)},value:ue,description:"Replicate versioned deletes"})})]})})]}),(0,R.jsxs)(c.ZP,{item:!0,xs:12,className:a.modalButtonBar,children:[(0,R.jsx)(C.Z,{type:"button",variant:"outlined",color:"primary",disabled:m||g,onClick:function(){t(!1)},children:"Cancel"}),(0,R.jsx)(C.Z,{type:"submit",variant:"contained",color:"primary",disabled:m||g,children:"Save"})]})]})})})}))),w=(0,b.Z)(r.lazy((function(){return n.e(6866).then(n.bind(n,86866))}))),M=(0,b.Z)(r.lazy((function(){return n.e(8564).then(n.bind(n,98564))}))),D=(0,o.$j)((function(e){return{session:e.console.session,loadingBucket:e.buckets.bucketDetails.loadingBucket,bucketInfo:e.buckets.bucketDetails.bucketInfo}}),{setErrorSnackMessage:m.Ih}),T=(0,l.Z)((function(e){return(0,s.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},p.qg),p.OR),{},{twHeight:{minHeight:400}}))}))(D((function(e){var t=e.classes,n=e.match,a=e.setErrorSnackMessage,o=e.loadingBucket,s=(e.bucketInfo,(0,r.useState)(!0)),l=(0,i.Z)(s,2),m=l[0],p=l[1],b=(0,r.useState)([]),C=(0,i.Z)(b,2),k=C[0],N=C[1],S=(0,r.useState)(!1),y=(0,i.Z)(S,2),F=y[0],P=y[1],E=(0,r.useState)(!1),D=(0,i.Z)(E,2),T=D[0],B=D[1],A=(0,r.useState)(!1),L=(0,i.Z)(A,2),O=L[0],_=L[1],z=(0,r.useState)(""),W=(0,i.Z)(z,2),G=W[0],H=W[1],U=n.params.bucketName,K=(0,Z.F)(U,[v.Ft.S3_GET_REPLICATION_CONFIGURATION]);(0,r.useEffect)((function(){o&&p(!0)}),[o,p]),(0,r.useEffect)((function(){m&&(K?h.Z.invoke("GET","/api/v1/buckets/".concat(U,"/replication")).then((function(e){var t=e.rules?e.rules:[];t.sort((function(e,t){return e.priority-t.priority})),N(t),p(!1)})).catch((function(e){a(e),p(!1)})):p(!1))}),[m,a,U,K]);var Y=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];B(e)},$=[{type:"delete",onClick:function(e){H(e.id),P(!0)},disableButtonFunction:function(){return 1===k.length}},{type:"view",onClick:function(e){H(e.id),_(!0)},disableButtonFunction:!(0,Z.F)(U,[v.Ft.S3_PUT_REPLICATION_CONFIGURATION],!0)}];return(0,R.jsxs)(r.Fragment,{children:[T&&(0,R.jsx)(w,{closeModalAndRefresh:function(){Y(!1),p(!0)},open:T,bucketName:U,setReplicationRules:k}),F&&(0,R.jsx)(M,{deleteOpen:F,selectedBucket:U,closeDeleteModalAndRefresh:function(e){P(!1),e&&p(!0)},ruleToDelete:G}),O&&(0,R.jsx)(I,{closeModalAndRefresh:function(e){_(!1),e&&p(!0)},open:O,bucketName:U,ruleID:G}),(0,R.jsxs)(c.ZP,{container:!0,children:[(0,R.jsxs)(c.ZP,{item:!0,xs:12,className:t.actionsTray,children:[(0,R.jsx)(g.Z,{children:"Replication"}),(0,R.jsx)(Z.Z,{scopes:[v.Ft.S3_PUT_REPLICATION_CONFIGURATION],resource:U,matchAll:!0,errorProps:{disabled:!0},children:(0,R.jsx)(j.Z,{tooltip:"Add Replication Rule",onClick:function(){Y(!0)},text:"Add Replication Rule",icon:(0,R.jsx)(d.Z,{}),color:"primary",variant:"contained"})})]}),(0,R.jsx)(c.ZP,{item:!0,xs:12,children:(0,R.jsx)(Z.Z,{scopes:[v.Ft.S3_GET_REPLICATION_CONFIGURATION],resource:U,errorProps:{disabled:!0},children:(0,R.jsx)(x.Z,{itemActions:$,columns:[{label:"Priority",elementKey:"priority",width:55,contentTextAlign:"center"},{label:"Destination",elementKey:"destination",renderFunction:function(e){return(0,R.jsx)(r.Fragment,{children:e.bucket.replace("arn:aws:s3:::","")})}},{label:"Prefix",elementKey:"prefix",width:200},{label:"Tags",elementKey:"tags",renderFunction:function(e){return(0,R.jsx)(r.Fragment,{children:e&&""!==e.tags?"Yes":"No"})},width:60},{label:"Status",elementKey:"status",width:100}],isLoading:m,records:k,entityName:"Replication Rules",idField:"id",customPaperHeight:t.twHeight,textSelectable:!0})})}),(0,R.jsx)(c.ZP,{item:!0,xs:12,children:(0,R.jsx)(f.Z,{title:"Replication",iconComponent:(0,R.jsx)(u.default,{}),help:(0,R.jsxs)(r.Fragment,{children:["MinIO supports server-side and client-side replication of objects between source and destination buckets.",(0,R.jsx)("br",{}),(0,R.jsx)("br",{}),"You can learn more at our"," ",(0,R.jsx)("a",{href:"https://docs.min.io/minio/baremetal/replication/replication-overview.html?ref=con",target:"_blank",rel:"noreferrer",children:"documentation"}),"."]})})})]})]})})))},92440:function(e,t,n){var i=n(36222),a=n(18489),r=n(50390),o=n(86509),s=n(4285),l=n(49056),c=n(14602),d=n(94187),u=n(35477),m=n(25594),p=n(72462),h=n(97538),x=n(44977),f=n(62559),g=(0,s.Z)((function(e){return{root:{width:50,height:24,padding:0,margin:0},switchBase:{padding:1,"&$checked":{transform:"translateX(24px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#4CCB92",boxShadow:"inset 0px 1px 4px rgba(0,0,0,0.1)",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#4CCB92",border:"6px solid #fff"}},thumb:{width:22,height:22,backgroundColor:"#FAFAFA",border:"2px solid #FFFFFF",marginLeft:1},track:{borderRadius:12,backgroundColor:"#E2E2E2",boxShadow:"inset 0px 1px 4px rgba(0,0,0,0.1)",opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{},switchContainer:{display:"flex",alignItems:"center",justifyContent:"flex-end"}}}))(l.Z);t.Z=(0,s.Z)((function(e){return(0,o.Z)((0,a.Z)((0,a.Z)({divContainer:{marginBottom:20},indicatorLabelOn:{fontWeight:"bold",color:"#081C42 !important"},indicatorLabel:{fontSize:12,color:"#E2E2E2",margin:"0 8px 0 10px"},fieldDescription:{marginTop:4,color:"#999999"},tooltip:{fontSize:16}},p.OR),p.YI))}))((function(e){var t=e.label,n=void 0===t?"":t,a=e.onChange,o=e.value,s=e.id,l=e.name,p=e.checked,Z=void 0!==p&&p,v=e.disabled,b=void 0!==v&&v,j=e.switchOnly,C=void 0!==j&&j,k=e.tooltip,N=void 0===k?"":k,S=e.description,y=void 0===S?"":S,F=e.classes,P=e.indicatorLabels,R=(0,f.jsxs)(r.Fragment,{children:[!C&&(0,f.jsx)("span",{className:(0,x.Z)(F.indicatorLabel,(0,i.Z)({},F.indicatorLabelOn,!Z)),children:P&&P.length>1?P[1]:"OFF"}),(0,f.jsx)(g,{checked:Z,onChange:a,color:"primary",name:l,inputProps:{"aria-label":"primary checkbox"},disabled:b,disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0,value:o}),!C&&(0,f.jsx)("span",{className:(0,x.Z)(F.indicatorLabel,(0,i.Z)({},F.indicatorLabelOn,Z)),children:P?P[0]:"ON"})]});return C?R:(0,f.jsx)("div",{className:F.divContainer,children:(0,f.jsxs)(m.ZP,{container:!0,alignItems:"center",children:[(0,f.jsx)(m.ZP,{item:!0,xs:!0,children:(0,f.jsxs)(m.ZP,{container:!0,children:[(0,f.jsx)(m.ZP,{item:!0,xs:12,sm:4,md:3,children:""!==n&&(0,f.jsxs)(c.Z,{htmlFor:s,className:F.inputLabel,children:[(0,f.jsx)("span",{children:n}),""!==N&&(0,f.jsx)("div",{className:F.tooltipContainer,children:(0,f.jsx)(d.Z,{title:N,placement:"top-start",children:(0,f.jsx)("div",{className:F.tooltip,children:(0,f.jsx)(h.Z,{})})})})]})}),(0,f.jsx)(m.ZP,{item:!0,xs:12,sm:!0,textAlign:"left",children:""!==y&&(0,f.jsx)(u.Z,{component:"p",className:F.fieldDescription,children:y})})]})}),(0,f.jsx)(m.ZP,{item:!0,xs:12,sm:2,textAlign:"right",className:F.switchContainer,children:R})]})})}))},66964:function(e,t,n){var i=n(18489),a=n(50390),r=n(12066),o=n(25594),s=n(14602),l=n(94187),c=n(95467),d=n(86509),u=n(62449),m=n(4285),p=n(72462),h=n(97538),x=n(44977),f=n(62559),g=(0,u.Z)((function(e){return(0,d.Z)((0,i.Z)({},p.gM))}));function Z(e){var t=g();return(0,f.jsx)(r.Z,(0,i.Z)({InputProps:{classes:t}},e))}t.Z=(0,m.Z)((function(e){return(0,d.Z)((0,i.Z)((0,i.Z)((0,i.Z)({},p.YI),p.Hr),{},{textBoxContainer:{flexGrow:1,position:"relative"},overlayAction:{position:"absolute",right:5,top:6,"& svg":{maxWidth:15,maxHeight:15},"&.withLabel":{top:5}},inputLabel:(0,i.Z)((0,i.Z)({},p.YI.inputLabel),{},{fontWeight:"normal"})}))}))((function(e){var t=e.label,n=e.onChange,r=e.value,d=e.id,u=e.name,m=e.type,p=void 0===m?"text":m,g=e.autoComplete,v=void 0===g?"off":g,b=e.disabled,j=void 0!==b&&b,C=e.multiline,k=void 0!==C&&C,N=e.tooltip,S=void 0===N?"":N,y=e.index,F=void 0===y?0:y,P=e.error,R=void 0===P?"":P,E=e.required,I=void 0!==E&&E,w=e.placeholder,M=void 0===w?"":w,D=e.min,T=e.max,B=e.overlayIcon,A=void 0===B?null:B,L=e.overlayObject,O=void 0===L?null:L,_=e.extraInputProps,z=void 0===_?{}:_,W=e.overlayAction,G=e.noLabelMinWidth,H=void 0!==G&&G,U=e.pattern,K=void 0===U?"":U,Y=e.autoFocus,$=void 0!==Y&&Y,V=e.classes,q=e.className,Q=void 0===q?"":q,X=(0,i.Z)({"data-index":F},z);return"number"===p&&D&&(X.min=D),"number"===p&&T&&(X.max=T),""!==K&&(X.pattern=K),(0,f.jsx)(a.Fragment,{children:(0,f.jsxs)(o.ZP,{container:!0,className:(0,x.Z)(""!==Q?Q:"",""!==R?V.errorInField:V.inputBoxContainer),children:[""!==t&&(0,f.jsxs)(s.Z,{htmlFor:d,className:H?V.noMinWidthLabel:V.inputLabel,children:[(0,f.jsxs)("span",{children:[t,I?"*":""]}),""!==S&&(0,f.jsx)("div",{className:V.tooltipContainer,children:(0,f.jsx)(l.Z,{title:S,placement:"top-start",children:(0,f.jsx)("div",{className:V.tooltip,children:(0,f.jsx)(h.Z,{})})})})]}),(0,f.jsxs)("div",{className:V.textBoxContainer,children:[(0,f.jsx)(Z,{id:d,name:u,fullWidth:!0,value:r,autoFocus:$,disabled:j,onChange:n,type:p,multiline:k,autoComplete:v,inputProps:X,error:""!==R,helperText:R,placeholder:M,className:V.inputRebase}),A&&(0,f.jsx)("div",{className:"".concat(V.overlayAction," ").concat(""!==t?"withLabel":""),children:(0,f.jsx)(c.Z,{onClick:W?function(){W()}:function(){return null},size:"small",disableFocusRipple:!1,disableRipple:!1,disableTouchRipple:!1,children:A})}),O&&(0,f.jsx)("div",{className:"".concat(V.overlayAction," ").concat(""!==t?"withLabel":""),children:O})]})]})})}))},50280:function(e,t,n){var i=n(18489),a=n(50390),r=n(25594),o=n(86509),s=n(4285),l=n(72462),c=n(62559);t.Z=(0,s.Z)((function(e){return(0,o.Z)((0,i.Z)({},l.xx))}))((function(e){var t=e.classes,n=e.label,i=void 0===n?"":n,o=e.content,s=e.multiLine,l=void 0!==s&&s;return(0,c.jsx)(a.Fragment,{children:(0,c.jsxs)(r.ZP,{className:t.prefinedContainer,children:[""!==i&&(0,c.jsx)(r.ZP,{item:!0,xs:12,className:t.predefinedTitle,children:i}),(0,c.jsx)(r.ZP,{item:!0,xs:12,className:t.predefinedList,children:(0,c.jsx)(r.ZP,{item:!0,xs:12,className:l?t.innerContentMultiline:t.innerContent,children:o})})]})})}))},65703:function(e,t,n){var i=n(35531),a=n(23430),r=n(18489),o=n(50390),s=n(38342),l=n.n(s),c=n(3143),d=n.n(c),u=n(86509),m=n(4285),p=n(25594),h=n(12843),x=n(14602),f=n(94187),g=n(72462),Z=n(66964),v=n(14792),b=n(62559);t.Z=(0,m.Z)((function(e){return(0,u.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},g.YI),g.Hr),{},{inputWithBorder:{border:"1px solid #EAEAEA",padding:15,height:150,overflowY:"auto",position:"relative",marginTop:15},lineInputBoxes:{display:"flex",marginBottom:10},queryDiv:{alignSelf:"center",margin:"0 4px",fontWeight:600}}))}))((function(e){var t=e.elements,n=e.name,r=e.label,s=e.tooltip,c=void 0===s?"":s,u=e.keyPlaceholder,m=void 0===u?"":u,g=e.valuePlaceholder,j=void 0===g?"":g,C=e.onChange,k=e.withBorder,N=void 0!==k&&k,S=e.classes,y=(0,o.useState)([""]),F=(0,a.Z)(y,2),P=F[0],R=F[1],E=(0,o.useState)([""]),I=(0,a.Z)(E,2),w=I[0],M=I[1],D=(0,o.createRef)();(0,o.useEffect)((function(){if(1===P.length&&""===P[0]&&1===w.length&&""===w[0]&&t&&""!==t){var e=t.split("&"),n=[],i=[];e.forEach((function(e){var t=e.split("=");2===t.length&&(n.push(t[0]),i.push(t[1]))})),n.push(""),i.push(""),R(n),M(i)}}),[P,w,t]),(0,o.useEffect)((function(){var e=D.current;e&&P.length>1&&e.scrollIntoView(!1)}),[P]);var T=(0,o.useRef)(!0);(0,o.useLayoutEffect)((function(){T.current?T.current=!1:L()}),[P,w]);var B=function(e){e.persist();var t=(0,i.Z)(P);t[l()(e.target,"dataset.index",0)]=e.target.value,R(t)},A=function(e){e.persist();var t=(0,i.Z)(w);t[l()(e.target,"dataset.index",0)]=e.target.value,M(t)},L=d()((function(){var e="";P.forEach((function(t,n){if(P[n]&&w[n]){var i="".concat(t,"=").concat(w[n]);0!==n&&(i="&".concat(i)),e="".concat(e).concat(i)}})),C(e)}),500),O=w.map((function(e,t){return(0,b.jsxs)(p.ZP,{item:!0,xs:12,className:S.lineInputBoxes,children:[(0,b.jsx)(Z.Z,{id:"".concat(n,"-key-").concat(t.toString()),label:"",name:"".concat(n,"-").concat(t.toString()),value:P[t],onChange:B,index:t,placeholder:m}),(0,b.jsx)("span",{className:S.queryDiv,children:":"}),(0,b.jsx)(Z.Z,{id:"".concat(n,"-value-").concat(t.toString()),label:"",name:"".concat(n,"-").concat(t.toString()),value:w[t],onChange:A,index:t,placeholder:j,overlayIcon:t===w.length-1?(0,b.jsx)(v.Z,{}):null,overlayAction:function(){!function(){if(""!==P[P.length-1].trim()&&""!==w[w.length-1].trim()){var e=(0,i.Z)(P),t=(0,i.Z)(w);e.push(""),t.push(""),R(e),M(t)}}()}})]},"query-pair-".concat(n,"-").concat(t.toString()))}));return(0,b.jsx)(o.Fragment,{children:(0,b.jsxs)(p.ZP,{item:!0,xs:12,className:S.fieldContainer,children:[(0,b.jsxs)(x.Z,{className:S.inputLabel,children:[(0,b.jsx)("span",{children:r}),""!==c&&(0,b.jsx)("div",{className:S.tooltipContainer,children:(0,b.jsx)(f.Z,{title:c,placement:"top-start",children:(0,b.jsx)(h.Z,{className:S.tooltip})})})]}),(0,b.jsxs)(p.ZP,{item:!0,xs:12,className:"".concat(N?S.inputWithBorder:""),children:[O,(0,b.jsx)("div",{ref:D})]})]})})}))},76352:function(e,t,n){n.d(t,{Z:function(){return F}});var i,a=n(23430),r=n(18489),o=n(50390),s=n(34424),l=n(95467),c=n(97771),d=n(84402),u=n(78426),m=n(93085),p=n(86509),h=n(4285),x=n(72462),f=n(44149),g=n(38342),Z=n.n(g),v=n(92125),b=n(19538),j=n(21278),C=n(62559),k=function(){clearInterval(i)},N={displayErrorMessage:f.zb},S=(0,s.$j)((function(e){return{modalSnackMessage:e.system.modalSnackBar}}),N)((0,h.Z)((function(e){return(0,p.Z)({modalErrorContainer:{position:"absolute",marginTop:10,width:"80%",backgroundColor:"#fff",border:"#C72C48 1px solid",borderLeftWidth:12,borderRadius:3,zIndex:1e3,padding:"10px 15px",left:"50%",transform:"translateX(-50%)",opacity:0,transitionDuration:"0.2s"},modalErrorShow:{opacity:1},closeButton:{position:"absolute",right:5,fontSize:"small",border:0,backgroundColor:"#fff",cursor:"pointer"},errorTitle:{display:"flex",alignItems:"center"},errorLabel:{color:"#000",fontSize:18,fontWeight:500,marginLeft:5,marginRight:25},messageIcon:{color:"#C72C48",display:"flex","& svg":{width:32,height:32}},detailsButton:{color:"#9C9C9C",display:"flex",alignItems:"center",border:0,backgroundColor:"transparent",paddingLeft:5,fontSize:14,transformDuration:"0.3s",cursor:"pointer"},extraDetailsContainer:{fontStyle:"italic",color:"#9C9C9C",lineHeight:0,padding:"0 10px",transition:"all .2s ease-in-out",overflow:"hidden"},extraDetailsOpen:{lineHeight:1,padding:"3px 10px"},arrowElement:{marginLeft:-5},arrowOpen:{transform:"rotateZ(90deg)",transformDuration:"0.3s"}})}))((function(e){var t=e.classes,n=e.modalSnackMessage,r=e.displayErrorMessage,s=e.customStyle,l=(0,o.useState)(!1),c=(0,a.Z)(l,2),d=c[0],u=c[1],m=(0,o.useState)(!1),p=(0,a.Z)(m,2),h=p[0],x=p[1],f=(0,o.useCallback)((function(){x(!1)}),[]);(0,o.useEffect)((function(){h||(r({detailedError:"",errorMessage:""}),u(!1))}),[r,h]),(0,o.useEffect)((function(){""!==n.message&&"error"===n.type&&x(!0)}),[f,n.message,n.type]);var g=Z()(n,"message",""),N=Z()(n,"detailedErrorMsg","");return"error"!==n.type||""===g?null:(0,C.jsx)(o.Fragment,{children:(0,C.jsxs)("div",{className:"".concat(t.modalErrorContainer," ").concat(h?t.modalErrorShow:""),style:s,onMouseOver:k,onMouseLeave:function(){i=setInterval(f,1e4)},children:[(0,C.jsx)("button",{className:t.closeButton,onClick:f,children:(0,C.jsx)(j.Z,{})}),(0,C.jsxs)("div",{className:t.errorTitle,children:[(0,C.jsx)("span",{className:t.messageIcon,children:(0,C.jsx)(b.Z,{})}),(0,C.jsx)("span",{className:t.errorLabel,children:g})]}),""!==N&&(0,C.jsxs)(o.Fragment,{children:[(0,C.jsx)("div",{className:t.detailsContainerLink,children:(0,C.jsxs)("button",{className:t.detailsButton,onClick:function(){u(!d)},children:["Details",(0,C.jsx)(v.Z,{className:"".concat(t.arrowElement," ").concat(d?t.arrowOpen:"")})]})}),(0,C.jsx)("div",{className:"".concat(t.extraDetailsContainer," ").concat(d?t.extraDetailsOpen:""),children:N})]})]})})}))),y=(0,s.$j)((function(e){return{modalSnackMessage:e.system.modalSnackBar}}),{setModalSnackMessage:f.MK}),F=(0,h.Z)((function(e){return(0,p.Z)((0,r.Z)((0,r.Z)({},x.Qw),{},{root:{"& .MuiPaper-root":{padding:"1rem 2rem 2rem 1rem"}},content:{padding:25,paddingBottom:0},customDialogSize:{width:"100%",maxWidth:765}},x.sN))}))(y((function(e){var t=e.onClose,n=e.modalOpen,i=e.title,s=e.children,p=e.classes,h=e.wideLimit,x=void 0===h||h,f=e.modalSnackMessage,g=e.noContentPadding,Z=e.setModalSnackMessage,v=e.titleIcon,b=void 0===v?null:v,k=(0,o.useState)(!1),N=(0,a.Z)(k,2),y=N[0],F=N[1];(0,o.useEffect)((function(){Z("")}),[Z]),(0,o.useEffect)((function(){if(f){if(""===f.message)return void F(!1);"error"!==f.type&&F(!0)}}),[f]);var P=x?{classes:{paper:p.customDialogSize}}:{maxWidth:"lg",fullWidth:!0},R="";return f&&(R=f.detailedErrorMsg,(""===f.detailedErrorMsg||f.detailedErrorMsg.length<5)&&(R=f.message)),(0,C.jsxs)(d.Z,(0,r.Z)((0,r.Z)({open:n,classes:p},P),{},{scroll:"paper",onClose:function(e,n){"backdropClick"!==n&&t()},className:p.root,children:[(0,C.jsxs)(u.Z,{className:p.title,children:[(0,C.jsxs)("div",{className:p.titleText,children:[b," ",i]}),(0,C.jsx)("div",{className:p.closeContainer,children:(0,C.jsx)(l.Z,{"aria-label":"close",className:p.closeButton,onClick:t,disableRipple:!0,size:"small",children:(0,C.jsx)(j.Z,{})})})]}),(0,C.jsx)(S,{}),(0,C.jsx)(c.Z,{open:y,className:p.snackBarModal,onClose:function(){F(!1),Z("")},message:R,ContentProps:{className:"".concat(p.snackBar," ").concat(f&&"error"===f.type?p.errorSnackBar:"")},autoHideDuration:f&&"error"===f.type?1e4:5e3}),(0,C.jsx)(m.Z,{className:g?"":p.content,children:s})]}))})))},48122:function(e,t,n){n(50390);var i=n(86509),a=n(4285),r=n(62559);t.Z=(0,a.Z)((function(e){return(0,i.Z)({root:{padding:0,margin:0,fontSize:".9rem"}})}))((function(e){var t=e.classes,n=e.children;return(0,r.jsx)("h1",{className:t.root,children:n})}))}}]);
//# sourceMappingURL=6173.ef152b76.chunk.js.map