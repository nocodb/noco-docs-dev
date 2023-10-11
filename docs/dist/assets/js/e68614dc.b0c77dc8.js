"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[771],{3905:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>u});var n=l(67294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function i(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?i(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function r(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var d=n.createContext({}),p=function(e){var t=n.useContext(d),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},c=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),s=p(l),f=a,u=s["".concat(d,".").concat(f)]||s[f]||m[f]||i;return l?n.createElement(u,o(o({ref:t},c),{},{components:l})):n.createElement(u,o({ref:t},c))}));function u(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=l.length,o=new Array(i);o[0]=f;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r[s]="string"==typeof e?e:a,o[1]=r;for(var p=2;p<i;p++)o[p]=l[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}f.displayName="MDXCreateElement"},19809:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var n=l(87462),a=(l(67294),l(3905));const i={title:"Attachment",description:"This article explains how to create & work with an Attachment field.",tags:["Fields","Field types","Custom types","Attachment"],keywords:["Fields","Field types","Custom types","Attachment","Create attachment field"]},o=void 0,r={unversionedId:"fields/field-types/custom-types/attachment",id:"fields/field-types/custom-types/attachment",title:"Attachment",description:"This article explains how to create & work with an Attachment field.",source:"@site/docs/070.fields/040.field-types/050.custom-types/010.attachment.md",sourceDirName:"070.fields/040.field-types/050.custom-types",slug:"/fields/field-types/custom-types/attachment",permalink:"/fields/field-types/custom-types/attachment",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/070.fields/040.field-types/050.custom-types/010.attachment.md",tags:[{label:"Fields",permalink:"/tags/fields"},{label:"Field types",permalink:"/tags/field-types"},{label:"Custom types",permalink:"/tags/custom-types"},{label:"Attachment",permalink:"/tags/attachment"}],version:"current",sidebarPosition:10,frontMatter:{title:"Attachment",description:"This article explains how to create & work with an Attachment field.",tags:["Fields","Field types","Custom types","Attachment"],keywords:["Fields","Field types","Custom types","Attachment","Create attachment field"]},sidebar:"tutorialSidebar",previous:{title:"Rollup",permalink:"/fields/field-types/links-based/rollup"},next:{title:"QR code",permalink:"/fields/field-types/custom-types/QR-code"}},d={},p=[{value:"Create an Attachment field",id:"create-an-attachment-field",level:2},{value:"Cell display",id:"cell-display",level:3},{value:"Upload files",id:"upload-files",level:3},{value:"Expand modal",id:"expand-modal",level:2},{value:"Attach file(s)",id:"attach-files",level:3},{value:"Delete file",id:"delete-file",level:3},{value:"Download file",id:"download-file",level:3},{value:"Bulk Download file(s)",id:"bulk-download-files",level:3},{value:"Rename file",id:"rename-file",level:3}],c={toc:p},s="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(s,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Attachment")," fields allow you to upload files to your records. You can upload any file type, and the file will be linked to the record. You can also upload multiple files to a single ",(0,a.kt)("inlineCode",{parentName:"p"},"Attachment")," field record."),(0,a.kt)("h2",{id:"create-an-attachment-field"},"Create an Attachment field"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"+")," icon to the right of ",(0,a.kt)("inlineCode",{parentName:"li"},"Fields header")),(0,a.kt)("li",{parentName:"ol"},"On the dropdown modal, enter the field name (Optional)."),(0,a.kt)("li",{parentName:"ol"},"Select the field type as ",(0,a.kt)("inlineCode",{parentName:"li"},"Attachment")," from the dropdown."),(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Save Field")," button.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:l(66343).Z,width:"2878",height:"1110"})),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Max size for an attachment file is currently limited to 5 MB")),(0,a.kt)("h3",{id:"cell-display"},"Cell display"),(0,a.kt)("p",null,"The cell display for ",(0,a.kt)("inlineCode",{parentName:"p"},"Attachment")," field is either a clickable preview if file is an image in recognizable format or a file-type icon.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{alt:"image",src:l(78904).Z,width:"1266",height:"687"})),(0,a.kt)("h3",{id:"upload-files"},"Upload files"),(0,a.kt)("p",null,"To upload files to an ",(0,a.kt)("inlineCode",{parentName:"p"},"Attachment")," field, "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click on the ",(0,a.kt)("inlineCode",{parentName:"li"},"+")," icon in the cell, choose the file to upload and click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Upload")," button. OR"),(0,a.kt)("li",{parentName:"ul"},"Drag drop the file to the cell. OR"),(0,a.kt)("li",{parentName:"ul"},"Click on expand icon ",(0,a.kt)("inlineCode",{parentName:"li"},"<>"),", choose the file to upload or drag-drop file; click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Upload")," button.")),(0,a.kt)("h2",{id:"expand-modal"},"Expand modal"),(0,a.kt)("p",null,"Expand modal for ",(0,a.kt)("inlineCode",{parentName:"p"},"Attachment")," field displays the list of files uploaded to the field. You can also upload files from the expand modal. To access expand modal, click on the expand icon ",(0,a.kt)("inlineCode",{parentName:"p"},"<>")," in the cell."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:l(73101).Z,width:"1527",height:"638"})),(0,a.kt)("p",null,"Expand modal supports the following actions:"),(0,a.kt)("h3",{id:"attach-files"},"Attach file(s)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Attach file(s)")," button <1>"),(0,a.kt)("li",{parentName:"ul"},"Choose the file(s) to upload")),(0,a.kt)("h3",{id:"delete-file"},"Delete file"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"x")," icon <2> to the top left of the image card to delete the file")),(0,a.kt)("h3",{id:"download-file"},"Download file"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Download")," button <5> to download the file")),(0,a.kt)("h3",{id:"bulk-download-files"},"Bulk Download file(s)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Select the files by clicking on the checkbox <3> to the top left of the image card"),(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Bulk Download")," button <4> to download the selected files")),(0,a.kt)("h3",{id:"rename-file"},"Rename file"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Rename")," button <5> to rename the file"),(0,a.kt)("li",{parentName:"ul"},"Enter the new name in the input field"),(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Rename")," button to save the new name")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Rename file only renames the file in NocoDB display (expand record & tool tip on hover). It does not rename the file in the storage.")))}m.isMDXComponent=!0},78904:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/attachment-cell-63aeff518251334ef9ebdd018c752b1b.png"},73101:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/attachment-expand-bf0a44f3b002a3efa120b55211ac4d3c.png"},66343:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/attachment-68efc9fbeb85c49731a9d441cd90bda8.png"}}]);