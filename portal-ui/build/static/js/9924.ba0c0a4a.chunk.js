"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[9924],{39924:function(e,n,a){a.r(n);var t=a(23430),r=a(18489),o=a(50390),l=a(76352),s=a(25594),c=a(66946),i=a(66964),d=a(86509),u=a(4285),h=a(72462),f=a(34424),m=a(5265),x=a(24442),Z=a(28948),p=a(44149),b=a(85615),j=a(62559),v={setFileModeEnabled:m.WA,setModalErrorSnackMessage:p.zb},C=(0,f.$j)(null,v);n.default=C((0,u.Z)((function(e){return(0,d.Z)((0,r.Z)((0,r.Z)({},h.ID),h.DF))}))((function(e){var n=e.modalOpen,a=e.folderName,r=e.bucketName,d=e.onClose,u=e.setFileModeEnabled,h=e.setModalErrorSnackMessage,f=e.classes,m=e.existingFiles,p=(0,o.useState)(""),v=(0,t.Z)(p,2),C=v[0],g=v[1],k=(0,o.useState)(!1),F=(0,t.Z)(k,2),P=F[0],w=F[1],E="".concat(r,"/").concat((0,Z.le)(a)),M=function(){var e="";if(""!==a){var n=(0,Z.le)(a);e=n.endsWith("/")?n:"".concat(n,"/")}if(-1===m.findIndex((function(n){return n.name===e+C}))){var t="/buckets/".concat(r,"/browse/").concat((0,Z.ug)("".concat(e).concat(C)),"/");x.Z.push(t),u(!1),d()}else h({errorMessage:"Folder cannot have the same name as an existing file",detailedError:""})};(0,o.useEffect)((function(){var e=!0;0===C.trim().length&&(e=!1),w(e)}),[C]);return(0,j.jsx)(o.Fragment,{children:(0,j.jsx)(l.Z,{modalOpen:n,title:"Choose or create a new path",onClose:d,titleIcon:(0,j.jsx)(b.Z9,{}),children:(0,j.jsxs)(s.ZP,{container:!0,children:[(0,j.jsxs)(s.ZP,{item:!0,xs:12,className:f.formFieldRow,children:["Current Path: ",E]}),(0,j.jsx)(s.ZP,{item:!0,xs:12,className:f.formFieldRow,children:(0,j.jsx)(i.Z,{value:C,label:"New Folder Path",id:"folderPath",name:"folderPath",placeholder:"Enter the new Folder Path",onChange:function(e){g(e.target.value)},onKeyPress:function(e){"Enter"===e.code&&""!==C&&M()},required:!0})}),(0,j.jsxs)(s.ZP,{item:!0,xs:12,className:f.modalButtonBar,children:[(0,j.jsx)(c.Z,{type:"button",color:"primary",variant:"outlined",onClick:function(){g("")},children:"Clear"}),(0,j.jsx)(c.Z,{type:"submit",variant:"contained",color:"primary",disabled:!P,onClick:M,children:"Create"})]})]})})})})))}}]);
//# sourceMappingURL=9924.ba0c0a4a.chunk.js.map