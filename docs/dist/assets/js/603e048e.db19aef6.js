"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[7700],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var i=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,l=function(e,t){if(null==e)return{};var a,i,l={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=i.createContext({}),p=function(e){var t=i.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return i.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},y=i.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(a),y=l,f=u["".concat(o,".").concat(y)]||u[y]||c[y]||n;return a?i.createElement(f,r(r({ref:t},d),{},{components:a})):i.createElement(f,r({ref:t},d))}));function f(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,r=new Array(n);r[0]=y;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:l,r[1]=s;for(var p=2;p<n;p++)r[p]=a[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}y.displayName="MDXCreateElement"},57742:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var i=a(87462),l=(a(67294),a(3905));const n={title:"Display value",description:"This article explains how to set display value for a table & its use.",tags:["Fields","Display Value"],keywords:["display value","display value in nocoDB","display value in nocoDB"]},r="Display Value",s={unversionedId:"fields/display-value",id:"fields/display-value",title:"Display value",description:"This article explains how to set display value for a table & its use.",source:"@site/docs/070.fields/030.display-value.md",sourceDirName:"070.fields",slug:"/fields/display-value",permalink:"/fields/display-value",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/070.fields/030.display-value.md",tags:[{label:"Fields",permalink:"/tags/fields"},{label:"Display Value",permalink:"/tags/display-value"}],version:"current",sidebarPosition:30,frontMatter:{title:"Display value",description:"This article explains how to set display value for a table & its use.",tags:["Fields","Display Value"],keywords:["display value","display value in nocoDB","display value in nocoDB"]},sidebar:"tutorialSidebar",previous:{title:"Primary key",permalink:"/fields/primary-key"},next:{title:"Single line text",permalink:"/fields/field-types/text-based/single-line-text"}},o={},p=[{value:"Use of Display Value",id:"use-of-display-value",level:2},{value:"Set Display Value",id:"set-display-value",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"display-value"},"Display Value"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Display Value"),", as its name suggests, serves as the primary or main value within a record of a table, and it is typically the attribute by which we identify or associate that specific record. While it is advisable for the display value to be linked to a field with unique identifiers, such as a primary key, it's important to note that this uniqueness is not always enforced at the database level."),(0,l.kt)("h2",{id:"use-of-display-value"},"Use of Display Value"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Within a spreadsheet, ",(0,l.kt)("inlineCode",{parentName:"li"},"Display Value")," are always highlighted so that it is easier to recognise what record we are working with."),(0,l.kt)("li",{parentName:"ul"},"And when ",(0,l.kt)("inlineCode",{parentName:"li"},"Links")," are created between two tables - it is the Display Value that appears in ",(0,l.kt)("inlineCode",{parentName:"li"},"Linked records")," modal.")),(0,l.kt)("p",null,"Example:\nDisplay Value highlighted in Actor table\n",(0,l.kt)("img",{alt:"display value",src:a(31219).Z,width:"2880",height:"1800"})),(0,l.kt)("p",null,"Display Value associated when Links field",(0,l.kt)("br",{parentName:"p"}),"\n","The value shown in ",(0,l.kt)("inlineCode",{parentName:"p"},"Link Records")," modal when adding a new link is associated records ",(0,l.kt)("inlineCode",{parentName:"p"},"Display value"),"  "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"display value- links field",src:a(25721).Z,width:"2878",height:"1800"})),(0,l.kt)("h2",{id:"set-display-value"},"Set Display Value"),(0,l.kt)("p",null,"Click dropdown icon (\ud83d\udd3d) in the target field. Click ",(0,l.kt)("inlineCode",{parentName:"p"},"Set as Display Value"),".  "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"display value set",src:a(27592).Z,width:"2880",height:"1800"})),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"How is Display Value identified for existing database tables ?"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"It is usually the first field after the primary key which is not a number."),(0,l.kt)("li",{parentName:"ul"},"If there is no field which is not a number then the field adjacent to primary key is chosen.")),(0,l.kt)("p",{parentName:"admonition"},"Can I change the Display Value to another field within tables ?"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"Yes, you can use the same way mentioned above to set Display Value."))))}c.isMDXComponent=!0},25721:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/display-value-in-linked-record-a2d5ae449c2be23c1b31d60beb97d063.png"},31219:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/display-value-90a8f4b70e88e428acbff6e49a339325.png"},27592:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/set-as-display-value-dcd56ac34c7d3e79a72b2abcab08f1f8.png"}}]);