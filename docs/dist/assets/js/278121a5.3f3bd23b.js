"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[2556],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},d=Object.keys(e);for(o=0;o<d.length;o++)n=d[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(o=0;o<d.length;o++)n=d[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,d=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=l(n),u=r,h=s["".concat(c,".").concat(u)]||s[u]||m[u]||d;return n?o.createElement(h,a(a({ref:t},p),{},{components:n})):o.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var d=n.length,a=new Array(d);a[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:r,a[1]=i;for(var l=2;l<d;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>d,metadata:()=>i,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const d={title:"Expanded record",tags:["Records","Expanded record","Audit","Comments"],description:"Learn how to expand a record & work with it in NocoDB.",keywords:["NocoDB expanded form","expanded form","expanded record","expanded record view"]},a=void 0,i={unversionedId:"records/expand-record",id:"records/expand-record",title:"Expanded record",description:"Learn how to expand a record & work with it in NocoDB.",source:"@site/docs/080.records/030.expand-record.md",sourceDirName:"080.records",slug:"/records/expand-record",permalink:"/records/expand-record",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/080.records/030.expand-record.md",tags:[{label:"Records",permalink:"/tags/records"},{label:"Expanded record",permalink:"/tags/expanded-record"},{label:"Audit",permalink:"/tags/audit"},{label:"Comments",permalink:"/tags/comments"}],version:"current",sidebarPosition:30,frontMatter:{title:"Expanded record",tags:["Records","Expanded record","Audit","Comments"],description:"Learn how to expand a record & work with it in NocoDB.",keywords:["NocoDB expanded form","expanded form","expanded record","expanded record view"]},sidebar:"tutorialSidebar",previous:{title:"Create record",permalink:"/records/create-record"},next:{title:"Actions on record",permalink:"/records/actions-on-record"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Expanding a Record",id:"expanding-a-record",level:2},{value:"Edit record",id:"edit-record",level:3},{value:"Record Audit",id:"record-audit",level:2},{value:"Record Comment",id:"record-comment",level:2},{value:"Add Comment",id:"add-comment",level:3},{value:"Edit Comment",id:"edit-comment",level:3},{value:"Record Actions",id:"record-actions",level:2},{value:"Copy Record URL",id:"copy-record-url",level:3},{value:"Duplicate record",id:"duplicate-record",level:3},{value:"Delete record",id:"delete-record",level:3}],p={toc:l},s="wrapper";function m(e){let{components:t,...d}=e;return(0,r.kt)(s,(0,o.Z)({},p,d,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Expanded record")," allows you to edit a record data using a form layout. Apart from record information, it also consists of the activity feed such as user comments or record revision history (audit). "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"expanded record",src:n(41236).Z,width:"2878",height:"1800"})),(0,r.kt)("h2",{id:"expanding-a-record"},"Expanding a Record"),(0,r.kt)("p",null,"To expand a record in a grid view, click on ",(0,r.kt)("inlineCode",{parentName:"p"},"expand")," icon that appears on the first column (index column) on hover over a record.  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"expand record icon",src:n(72335).Z,width:"2878",height:"1442"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Shortcut : Use space bar on any cell to expand associated record.")),(0,r.kt)("h3",{id:"edit-record"},"Edit record"),(0,r.kt)("p",null,"Expanded form displays all the fields of a record enabled for display in a form layout. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You can edit the record data by clicking on the field and entering the value."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Show hidden fields"),": Click on ",(0,r.kt)("inlineCode",{parentName:"li"},"Show hidden fields")," button to display all the fields of a record."),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("inlineCode",{parentName:"li"},"Save")," button to save the changes. Close the expanded form by clicking on ",(0,r.kt)("inlineCode",{parentName:"li"},"X")," button in the top right corner of the form to discard the changes."),(0,r.kt)("li",{parentName:"ol"},"Navigate to next/previous record using ",(0,r.kt)("inlineCode",{parentName:"li"},"Next"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"Previous")," button in the top left corner of the form.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Any changes made to the links field (link/unlink) will be saved automatically.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"edit record",src:n(52147).Z,width:"2876",height:"1800"})),(0,r.kt)("h2",{id:"record-audit"},"Record Audit"),(0,r.kt)("p",null,"In an expanded form, "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("inlineCode",{parentName:"li"},"Audit")," tab "),(0,r.kt)("li",{parentName:"ol"},"A list of all the changes made to the record will be displayed")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"You can only view the audit log. You cannot edit or delete the audit log."),(0,r.kt)("li",{parentName:"ul"},"Audit log is only available in Self-hosted version currently "))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"expand record activity feed",src:n(75418).Z,width:"2878",height:"1800"})),(0,r.kt)("h2",{id:"record-comment"},"Record Comment"),(0,r.kt)("h3",{id:"add-comment"},"Add Comment"),(0,r.kt)("p",null,"In an expanded form,"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("inlineCode",{parentName:"li"},"Comments")," tab"),(0,r.kt)("li",{parentName:"ol"},"A list of all the comments made to the record will be displayed"),(0,r.kt)("li",{parentName:"ol"},"Click on input box at the bottom to add a new comment, and press ",(0,r.kt)("inlineCode",{parentName:"li"},"Enter")," to save")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"expand record comment",src:n(79536).Z,width:"2878",height:"1800"})),(0,r.kt)("h3",{id:"edit-comment"},"Edit Comment"),(0,r.kt)("p",null,"In comments list of an expanded form,"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("inlineCode",{parentName:"li"},"Edit")," icon on the right side of the comment"),(0,r.kt)("li",{parentName:"ol"},"Edit the comment and "),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("inlineCode",{parentName:"li"},"Save")," icon  OR Press ",(0,r.kt)("inlineCode",{parentName:"li"},"Enter")," to save the changes")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"expand record comment",src:n(27581).Z,width:"2876",height:"1800"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"expand record comment",src:n(18222).Z,width:"2876",height:"1800"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"expand record comment",src:n(35293).Z,width:"2876",height:"1800"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can only edit your own comments. You cannot delete a comment, but can edit it to remove the content.\nChanges to comments are also recorded in the audit log.")),(0,r.kt)("h2",{id:"record-actions"},"Record Actions"),(0,r.kt)("h3",{id:"copy-record-url"},"Copy Record URL"),(0,r.kt)("p",null,"In an expanded form, click ",(0,r.kt)("inlineCode",{parentName:"p"},"Copy Record URL")," to share the record form to other authorized users."),(0,r.kt)("h3",{id:"duplicate-record"},"Duplicate record"),(0,r.kt)("p",null,"Using context menu (",(0,r.kt)("inlineCode",{parentName:"p"},"..."),") in the top right corner of the expanded form, you can duplicate the record. Duplicated record will not be saved by default. You can edit the record and save it."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"delete record",src:n(88889).Z,width:"2876",height:"1800"})),(0,r.kt)("h3",{id:"delete-record"},"Delete record"),(0,r.kt)("p",null,"Using context menu (",(0,r.kt)("inlineCode",{parentName:"p"},"..."),") in the top right corner of the expanded form, you can delete the record."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"delete record",src:n(88889).Z,width:"2876",height:"1800"})),(0,r.kt)("p",null,"On the confirmation dialog, click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Delete")," button to delete the record."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"delete record",src:n(65205).Z,width:"2874",height:"1440"})))}m.isMDXComponent=!0},75418:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/expand-record-audits-bf292e9a7cdbe5bf190de009938e4c6e.png"},27581:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/expand-record-comments-edit-1-e662dc5437f594d10d70d8486d36d28e.png"},18222:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/expand-record-comments-edit-2-e7b2e2de1b7f8fcba6a9397f45ff25bf.png"},35293:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/expand-record-comments-edit-3-19a3dc35ed057a0a5366787dfd0c62d9.png"},79536:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/expand-record-comments-12f3520bc08a1a26617b4818151c2ea3.png"},88889:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/expand-record-context-menu-2-168bebb2555d7a38bfb2057537d0f419.png"},65205:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/expand-record-delete-confirmation-8bff11568a9cb49f91ebc282f7406b17.png"},52147:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/expand-record-edit-detailed-6f19acb8858b217ee834670b8deeee44.png"},72335:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/expand-record-from-grid-1eaf2b31021fe85c6163aa234db48f1f.png"},41236:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/expand-record-a6994cfda6583e45767dc6b555c4955d.png"}}]);