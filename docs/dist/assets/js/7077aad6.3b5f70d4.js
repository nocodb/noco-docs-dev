"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[5971],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var r=n.createContext({}),c=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(r.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),p=i,k=u["".concat(r,".").concat(p)]||u[p]||m[p]||o;return a?n.createElement(k,l(l({ref:t},d),{},{components:a})):n.createElement(k,l({ref:t},d))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,l=new Array(o);l[0]=p;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s[u]="string"==typeof e?e:i,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},49437:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const o={title:"Actions on Data sources",description:"Learn more about actions that can be performed on data sources in NocoDB.",tags:["Data sources","UI ACL","Audit","Relations","Edit","Remove","Visibility"],keywords:["NocoDB data source","UI ACL","Audit logs","Relations","Edit","Unlink","Visibility"]},l=void 0,s={unversionedId:"data-sources/actions-on-data-sources",id:"data-sources/actions-on-data-sources",title:"Actions on Data sources",description:"Learn more about actions that can be performed on data sources in NocoDB.",source:"@site/docs/100.data-sources/040.actions-on-data-sources.md",sourceDirName:"100.data-sources",slug:"/data-sources/actions-on-data-sources",permalink:"/data-sources/actions-on-data-sources",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/100.data-sources/040.actions-on-data-sources.md",tags:[{label:"Data sources",permalink:"/tags/data-sources"},{label:"UI ACL",permalink:"/tags/ui-acl"},{label:"Audit",permalink:"/tags/audit"},{label:"Relations",permalink:"/tags/relations"},{label:"Edit",permalink:"/tags/edit"},{label:"Remove",permalink:"/tags/remove"},{label:"Visibility",permalink:"/tags/visibility"}],version:"current",sidebarPosition:40,frontMatter:{title:"Actions on Data sources",description:"Learn more about actions that can be performed on data sources in NocoDB.",tags:["Data sources","UI ACL","Audit","Relations","Edit","Remove","Visibility"],keywords:["NocoDB data source","UI ACL","Audit logs","Relations","Edit","Unlink","Visibility"]},sidebar:"tutorialSidebar",previous:{title:"Sync with Data source",permalink:"/data-sources/sync-with-data-source"},next:{title:"Roles & permissions overview",permalink:"/roles-and-permissions/roles-permissions-overview"}},r={},c=[{value:"Edit external database configuration parameters",id:"edit-external-database-configuration-parameters",level:2},{value:"Remove data source",id:"remove-data-source",level:2},{value:"Data source visibility",id:"data-source-visibility",level:2},{value:"UI Access Control",id:"ui-access-control",level:2},{value:"Audit logs",id:"audit-logs",level:2},{value:"Relations",id:"relations",level:2},{value:"Junction table names within Relations",id:"junction-table-names-within-relations",level:3}],d={toc:c},u="wrapper";function m(e){let{components:t,...o}=e;return(0,i.kt)(u,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"edit-external-database-configuration-parameters"},"Edit external database configuration parameters"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Access Base context menu by clicking on the ",(0,i.kt)("inlineCode",{parentName:"li"},"Base")," name in the left sidebar"),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Data Sources")," tab"),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Edit")," icon listed under ",(0,i.kt)("inlineCode",{parentName:"li"},"Actions")," column for the data source that you wish to access ERD (Relations view) for\nGo to ",(0,i.kt)("inlineCode",{parentName:"li"},"Data Sources"),", click ",(0,i.kt)("inlineCode",{parentName:"li"},"Edit")," icon, you can re-configure database credentials.",(0,i.kt)("br",{parentName:"li"}),"Please make sure database configuration parameters are valid. Any incorrect parameters could lead to schema loss!")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"relations",src:a(52233).Z,width:"2876",height:"928"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"edit db config",src:a(63089).Z,width:"2880",height:"1800"})),(0,i.kt)("h2",{id:"remove-data-source"},"Remove data source"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Access Base context menu by clicking on the ",(0,i.kt)("inlineCode",{parentName:"li"},"Base")," name in the left sidebar"),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Data Sources")," tab"),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Delete")," icon listed under ",(0,i.kt)("inlineCode",{parentName:"li"},"Actions")," column for the data source that you wish to Unlink")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"datasource unlink",src:a(21775).Z,width:"2876",height:"928"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Unlinking a data source will not delete the external data source. It will only remove the data source from the current project.")),(0,i.kt)("h2",{id:"data-source-visibility"},"Data source visibility"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Access Base context menu by clicking on the ",(0,i.kt)("inlineCode",{parentName:"li"},"Base")," name in the left sidebar"),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Data Sources")," tab"),(0,i.kt)("li",{parentName:"ol"},"Toggle radio button listed under ",(0,i.kt)("inlineCode",{parentName:"li"},"Visibility")," column for the data source that you wish to hide/un-hide")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"datasource visibility",src:a(24923).Z,width:"2876",height:"928"})),(0,i.kt)("h2",{id:"ui-access-control"},"UI Access Control"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"UI Access Control is available only in Open Source version of NocoDB.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Access Base context menu by clicking on the ",(0,i.kt)("inlineCode",{parentName:"li"},"Base")," name in the left sidebar"),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Data Sources")," tab"),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"UI ACL")," button listed under ",(0,i.kt)("inlineCode",{parentName:"li"},"Actions")," column for the data source that you wish to manage UI access control for"),(0,i.kt)("li",{parentName:"ol"},"On the UI ACL modal, you can see the list of tables available in the data source as rows & roles available as columns. Toggle checkboxes to enable/disable access to tables for specific roles."),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Save")," button to save the changes")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ui acl",src:a(35389).Z,width:"2876",height:"928"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ui acl",src:a(21124).Z,width:"2880",height:"1800"})),(0,i.kt)("h2",{id:"audit-logs"},"Audit logs"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Access Base context menu by clicking on the ",(0,i.kt)("inlineCode",{parentName:"li"},"Base")," name in the left sidebar"),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Data Sources")," tab"),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Audit")," button listed under ",(0,i.kt)("inlineCode",{parentName:"li"},"Actions")," column for the data source that you wish to access Audit logs for")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"audit",src:a(28632).Z,width:"2876",height:"928"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"audit logs",src:a(16367).Z,width:"2880",height:"1800"})),(0,i.kt)("h2",{id:"relations"},"Relations"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Access Base context menu by clicking on the ",(0,i.kt)("inlineCode",{parentName:"li"},"Base")," name in the left sidebar"),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Data Sources")," tab"),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Relations")," button listed under ",(0,i.kt)("inlineCode",{parentName:"li"},"Actions")," column for the data source that you wish to access ERD (Relations view) for")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"relations",src:a(56177).Z,width:"2876",height:"928"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/nocodb/nocodb/assets/86527202/c3775d27-f75d-4263-8903-dd66427de4b4",alt:"relations"})),(0,i.kt)("h3",{id:"junction-table-names-within-relations"},"Junction table names within Relations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enable ",(0,i.kt)("inlineCode",{parentName:"li"},"Show M2M Tables")," within ",(0,i.kt)("inlineCode",{parentName:"li"},"Project Settings")," menu"),(0,i.kt)("li",{parentName:"ul"},"Double-click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Show Fields")," to see additional checkboxes get enabled.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Enabling which you should be able to see junction tables and their table names.")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:a(2504).Z,width:"2880",height:"1800"})))}m.isMDXComponent=!0},16367:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/audit-logs-c781137e1b06c22923d2da20ca02fcf0.png"},28632:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/audit-8486b02fd5d59268886ab05c697bd747.png"},35389:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/data-source-3-702f8672d11868999be1db2082089c6d.png"},56177:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/data-source-4-0d1aded7e8c2f19c54cbd3b1ae404194.png"},52233:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/data-source-edit-c8839805c570f2eaef08012a94f31246.png"},21775:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/data-source-unlink-517f290e2d4be67315dd4336bd699ce4.png"},24923:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/data-source-visibility-4c2aa0d95c0280597aac2754392abaae.png"},63089:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/edit-base-9071d099ef7f2dcb99604c31f0ab60f8.png"},2504:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/junction-table-28270cb936c6107d21e68edaaed04913.png"},21124:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ui-acl-52e141d26e976acba3a9e8591c59ea18.png"}}]);