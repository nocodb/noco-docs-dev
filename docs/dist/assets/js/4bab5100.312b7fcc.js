"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[5207],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>d});var r=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),b=function(e){var a=r.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):n(n({},a),e)),t},c=function(e){var a=b(e.components);return r.createElement(i.Provider,{value:a},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=b(t),u=o,d=p["".concat(i,".").concat(u)]||p[u]||m[u]||s;return t?r.createElement(d,n(n({ref:a},c),{},{components:t})):r.createElement(d,n({ref:a},c))}));function d(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var s=t.length,n=new Array(s);n[0]=u;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l[p]="string"==typeof e?e:o,n[1]=l;for(var b=2;b<s;b++)n[b]=t[b];return r.createElement.apply(null,n)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},73414:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>n,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>b});var r=t(87462),o=(t(67294),t(3905));const s={title:"Base collaboration",description:"Invite team members to work on a base",tags:["Bases","Collaboration","Members","Invite","Roles","Permissions"],keywords:["NocoDB base","base collaboration"]},n=void 0,l={unversionedId:"bases/base-collaboration",id:"bases/base-collaboration",title:"Base collaboration",description:"Invite team members to work on a base",source:"@site/docs/040.bases/050.base-collaboration.md",sourceDirName:"040.bases",slug:"/bases/base-collaboration",permalink:"/bases/base-collaboration",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/040.bases/050.base-collaboration.md",tags:[{label:"Bases",permalink:"/tags/bases"},{label:"Collaboration",permalink:"/tags/collaboration"},{label:"Members",permalink:"/tags/members"},{label:"Invite",permalink:"/tags/invite"},{label:"Roles",permalink:"/tags/roles"},{label:"Permissions",permalink:"/tags/permissions"}],version:"current",sidebarPosition:50,frontMatter:{title:"Base collaboration",description:"Invite team members to work on a base",tags:["Bases","Collaboration","Members","Invite","Roles","Permissions"],keywords:["NocoDB base","base collaboration"]},sidebar:"tutorialSidebar",previous:{title:"Import Airtable to NocoDB",permalink:"/bases/import-base-from-airtable"},next:{title:"Share base",permalink:"/bases/share-base"}},i={},b=[{value:"Related articles",id:"related-articles",level:2}],c={toc:b},p="wrapper";function m(e){let{components:a,...s}=e;return(0,o.kt)(p,(0,r.Z)({},c,s,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A member added to a workspace will carry his assigned role specific permissions to all the base with in workspace. To override member permissions to your base, please follow steps outlined below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the left sidebar and select ",(0,o.kt)("inlineCode",{parentName:"li"},"Base name")," to access the ",(0,o.kt)("inlineCode",{parentName:"li"},"Base Dashboard.")),(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("inlineCode",{parentName:"li"},"Members")," tab."),(0,o.kt)("li",{parentName:"ol"},"Use the dropdown menu to specify the access permissions for the member you wish to collaborate."),(0,o.kt)("li",{parentName:"ol"},"Finalize the process by assigning the desired role to the user.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:t(8788).Z,width:"2880",height:"1800"})),(0,o.kt)("p",null,"More details about roles & permissions can be found ",(0,o.kt)("a",{parentName:"p",href:"/roles-and-permissions/roles-permissions-overview"},"here"),"."),(0,o.kt)("h2",{id:"related-articles"},"Related articles"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/bases/base-overview"},"Base overview")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/bases/create-base"},"Create an empty base")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/bases/import-base-from-airtable"},"Import base from Airtable")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/bases/base-collaboration"},"Invite team members to work on a base")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/bases/share-base"},"Share base publicly")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/bases/actions-on-base#rename-base"},"Rename base")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/bases/actions-on-base#duplicate-base"},"Duplicate base")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/bases/actions-on-base#star-base"},"Bookmark base")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/bases/actions-on-base#delete-base"},"Delete base"))))}m.isMDXComponent=!0},8788:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/base-collaboration-7c992951b09e76dec15cd8d15c04fece.png"}}]);