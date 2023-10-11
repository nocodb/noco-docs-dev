"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[6907],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>m});var l=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,l)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,l,n=function(e,t){if(null==e)return{};var i,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)i=a[l],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)i=a[l],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var o=l.createContext({}),d=function(e){var t=l.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=d(e.components);return l.createElement(o.Provider,{value:t},e.children)},f="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=d(i),u=n,m=f["".concat(o,".").concat(u)]||f[u]||c[u]||a;return i?l.createElement(m,r(r({ref:t},p),{},{components:i})):l.createElement(m,r({ref:t},p))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,r=new Array(a);r[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[f]="string"==typeof e?e:n,r[1]=s;for(var d=2;d<a;d++)r[d]=i[d];return l.createElement.apply(null,r)}return l.createElement.apply(null,i)}u.displayName="MDXCreateElement"},82255:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var l=i(87462),n=(i(67294),i(3905));const a={title:"Single line text",description:"This article explains how to create & work with a Single line text field.",tags:["Fields","Field types","Text based types","Single line text"],keywords:["Fields","Field types","Text based types","Single line text","Create single line text field"]},r=void 0,s={unversionedId:"fields/field-types/text-based/single-line-text",id:"fields/field-types/text-based/single-line-text",title:"Single line text",description:"This article explains how to create & work with a Single line text field.",source:"@site/docs/070.fields/040.field-types/010.text-based/010.single-line-text.md",sourceDirName:"070.fields/040.field-types/010.text-based",slug:"/fields/field-types/text-based/single-line-text",permalink:"/fields/field-types/text-based/single-line-text",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/070.fields/040.field-types/010.text-based/010.single-line-text.md",tags:[{label:"Fields",permalink:"/tags/fields"},{label:"Field types",permalink:"/tags/field-types"},{label:"Text based types",permalink:"/tags/text-based-types"},{label:"Single line text",permalink:"/tags/single-line-text"}],version:"current",sidebarPosition:10,frontMatter:{title:"Single line text",description:"This article explains how to create & work with a Single line text field.",tags:["Fields","Field types","Text based types","Single line text"],keywords:["Fields","Field types","Text based types","Single line text","Create single line text field"]},sidebar:"tutorialSidebar",previous:{title:"Display value",permalink:"/fields/display-value"},next:{title:"Long text",permalink:"/fields/field-types/text-based/long-text"}},o={},d=[{value:"Create a single line text field",id:"create-a-single-line-text-field",level:2},{value:"Similar text based fields",id:"similar-text-based-fields",level:2}],p={toc:d},f="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(f,(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Single line text")," field is a simple text based field. It can hold any text value. It is generally used for storing short text values like name, email, phone number, etc. For storing text values with multiple lines, use ",(0,n.kt)("a",{parentName:"p",href:"/fields/field-types/text-based/long-text"},"Long text")," field. "),(0,n.kt)("h2",{id:"create-a-single-line-text-field"},"Create a single line text field"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"+")," icon to the right of ",(0,n.kt)("inlineCode",{parentName:"li"},"Fields header")),(0,n.kt)("li",{parentName:"ol"},"On the dropdown modal, enter the field name (Optional)."),(0,n.kt)("li",{parentName:"ol"},"Select the field type as ",(0,n.kt)("inlineCode",{parentName:"li"},"Single line text")," from the dropdown."),(0,n.kt)("li",{parentName:"ol"},"Set default value for the field (Optional)."),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Save Field")," button.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:i(85199).Z,width:"2878",height:"1226"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Specify default value without quotes.")),(0,n.kt)("h2",{id:"similar-text-based-fields"},"Similar text based fields"),(0,n.kt)("p",null,"Following are the other text based fields available in NocoDB, custom-built for specific use cases."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/fields/field-types/text-based/long-text"},"Long text")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/fields/field-types/text-based/url"},"URL")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/fields/field-types/text-based/email"},"Email")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/fields/field-types/text-based/phonenumber"},"Phone"))))}c.isMDXComponent=!0},85199:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/singlelinetext-b709b2cd21a07ff6f36b149d47091ca0.png"}}]);