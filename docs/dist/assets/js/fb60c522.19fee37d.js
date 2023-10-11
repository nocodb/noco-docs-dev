"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[5407],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>m});var l=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,l)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function d(e,t){if(null==e)return{};var i,l,n=function(e,t){if(null==e)return{};var i,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)i=a[l],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)i=a[l],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var r=l.createContext({}),s=function(e){var t=l.useContext(r),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=s(e.components);return l.createElement(r.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,r=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=s(i),u=n,m=c["".concat(r,".").concat(u)]||c[u]||f[u]||a;return i?l.createElement(m,o(o({ref:t},p),{},{components:i})):l.createElement(m,o({ref:t},p))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=u;var d={};for(var r in t)hasOwnProperty.call(t,r)&&(d[r]=t[r]);d.originalType=e,d[c]="string"==typeof e?e:n,o[1]=d;for(var s=2;s<a;s++)o[s]=i[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,i)}u.displayName="MDXCreateElement"},94065:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>d,toc:()=>s});var l=i(87462),n=(i(67294),i(3905));const a={title:"Actions on field",description:"This article explains how to perform various actions on a field- like rename, change field type, default, field width, record height, show/hide.",tags:["Fields","Rename","Delete","Duplicate","Hide","Display value","Sort","Record Height","Field Width"],keywords:["NocoDB fields","fields overview","field administration","field organization"]},o=void 0,d={unversionedId:"fields/actions-on-field",id:"fields/actions-on-field",title:"Actions on field",description:"This article explains how to perform various actions on a field- like rename, change field type, default, field width, record height, show/hide.",source:"@site/docs/070.fields/060.actions-on-field.md",sourceDirName:"070.fields",slug:"/fields/actions-on-field",permalink:"/fields/actions-on-field",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/070.fields/060.actions-on-field.md",tags:[{label:"Fields",permalink:"/tags/fields"},{label:"Rename",permalink:"/tags/rename"},{label:"Delete",permalink:"/tags/delete"},{label:"Duplicate",permalink:"/tags/duplicate"},{label:"Hide",permalink:"/tags/hide"},{label:"Display value",permalink:"/tags/display-value"},{label:"Sort",permalink:"/tags/sort"},{label:"Record Height",permalink:"/tags/record-height"},{label:"Field Width",permalink:"/tags/field-width"}],version:"current",sidebarPosition:60,frontMatter:{title:"Actions on field",description:"This article explains how to perform various actions on a field- like rename, change field type, default, field width, record height, show/hide.",tags:["Fields","Rename","Delete","Duplicate","Hide","Display value","Sort","Record Height","Field Width"],keywords:["NocoDB fields","fields overview","field administration","field organization"]},sidebar:"tutorialSidebar",previous:{title:"Multi-field editor",permalink:"/fields/multi-fields-editor"},next:{title:"Records overview",permalink:"/records/records-overview"}},r={},s=[{value:"Fields context menu",id:"fields-context-menu",level:2},{value:"Edit",id:"edit",level:3},{value:"Rename field",id:"rename-field",level:4},{value:"Change field type",id:"change-field-type",level:4},{value:"Change default value",id:"change-default-value",level:4},{value:"Change field width",id:"change-field-width",level:3},{value:"Hide field",id:"hide-field",level:3},{value:"Set as Display value",id:"set-as-display-value",level:3},{value:"Sort Ascending",id:"sort-ascending",level:3},{value:"Sort Descending",id:"sort-descending",level:3},{value:"Duplicate field",id:"duplicate-field",level:3},{value:"Insert after a field",id:"insert-after-a-field",level:3},{value:"Insert before a field",id:"insert-before-a-field",level:3},{value:"Delete field",id:"delete-field",level:3}],p={toc:s},c="wrapper";function f(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"fields-context-menu"},"Fields context menu"),(0,n.kt)("p",null,"Fields context menu can be accessed by clicking on the dropdown icon (\ud83d\udd3d) next to the field name.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{alt:"Fields context menu",src:i(5231).Z,width:"2880",height:"1800"})),(0,n.kt)("h3",{id:"edit"},"Edit"),(0,n.kt)("h4",{id:"rename-field"},"Rename field"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open the field context menu"),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Edit")," option."),(0,n.kt)("li",{parentName:"ol"},"Enter new field name as required in the ",(0,n.kt)("inlineCode",{parentName:"li"},"Field Name")," field."),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Save Field")," button.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Rename field",src:i(5741).Z,width:"2876",height:"1348"})),(0,n.kt)("h4",{id:"change-field-type"},"Change field type"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open the field context menu"),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Edit")," option."),(0,n.kt)("li",{parentName:"ol"},"Select new field type from the ",(0,n.kt)("inlineCode",{parentName:"li"},"Field Type")," dropdown."),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Save Field")," button.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Change field type",src:i(9841).Z,width:"2876",height:"1348"})),(0,n.kt)("h4",{id:"change-default-value"},"Change default value"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open the field context menu"),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Edit")," option."),(0,n.kt)("li",{parentName:"ol"},"Enter new default value in the ",(0,n.kt)("inlineCode",{parentName:"li"},"Default Value")," field. To disable, click on ",(0,n.kt)("inlineCode",{parentName:"li"},"x")," icon."),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Save Field")," button.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Change default value",src:i(25281).Z,width:"2876",height:"1348"})),(0,n.kt)("h3",{id:"change-field-width"},"Change field width"),(0,n.kt)("p",null,"To adjust the width of the field, hover over the field edge and drag to adjust the width."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Change field width",src:i(9556).Z,width:"2360",height:"860"})),(0,n.kt)("h3",{id:"hide-field"},"Hide field"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open the field context menu"),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Hide Field")," option ")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Hidden fields are not visible in the table view, but will still be accessible for Formulas, Sort, Filter, etc."),(0,n.kt)("li",{parentName:"ul"},"To un hide a field, use ",(0,n.kt)("inlineCode",{parentName:"li"},"Toolbar > Fields")," menu"),(0,n.kt)("li",{parentName:"ul"},"Fields can also be marked as hidden from ",(0,n.kt)("inlineCode",{parentName:"li"},"Toolbar > Fields")," menu"))),(0,n.kt)("h3",{id:"set-as-display-value"},"Set as Display value"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open the field context menu"),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Set as Display Value")," option.")),(0,n.kt)("p",null,"Refer to ",(0,n.kt)("a",{parentName:"p",href:"/fields/display-value"},"Display Value")," for more details."),(0,n.kt)("h3",{id:"sort-ascending"},"Sort Ascending"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open the field context menu"),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Sort Ascending")," option.")),(0,n.kt)("h3",{id:"sort-descending"},"Sort Descending"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open the field context menu"),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Sort Descending")," option.")),(0,n.kt)("h3",{id:"duplicate-field"},"Duplicate field"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open the field context menu"),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Duplicate")," option.")),(0,n.kt)("p",null,"Duplicated field sans the data will be created with suffix ",(0,n.kt)("inlineCode",{parentName:"p"},"_copy")," in its name & will be placed to the right of the original field."),(0,n.kt)("h3",{id:"insert-after-a-field"},"Insert after a field"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open the field context menu"),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Insert after")," option.")),(0,n.kt)("p",null,"New field will be created to the right of the original field."),(0,n.kt)("h3",{id:"insert-before-a-field"},"Insert before a field"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open the field context menu"),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Insert before")," option.")),(0,n.kt)("p",null,"New field will be created to the left of the original field."),(0,n.kt)("h3",{id:"delete-field"},"Delete field"),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"This action cannot be undone."))),(0,n.kt)("p",null,"To delete a field, follow the steps below:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open the field context menu by clicking on dropdown icon (\ud83d\udd3d) ."),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Delete"),"."),(0,n.kt)("li",{parentName:"ol"},"Confirm the deletion by clicking on ",(0,n.kt)("strong",{parentName:"li"},"Delete Field")," on the confirmation modal.")))}f.isMDXComponent=!0},5231:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/fields-context-menu-bdaf40426dd6cee3e064967ef9c0e1bd.png"},5741:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/fields-edit-2-565e86f68e89b2c0d5a009e26825586b.png"},9841:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/fields-edit-3-9f36d47020d18da0b1f30c893bc62b73.png"},25281:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/fields-edit-4-5eb8140cd39f4ee2364081b214612861.png"},9556:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/fields-width-b843c90fee1c762db57dd39a37c931cf.png"}}]);