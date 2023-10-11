"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[2606],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,a[1]=o;for(var d=2;d<l;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33872:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=n(87462),i=(n(67294),n(3905));const l={title:"Phone Number",description:"This article explains how to create & work with a Phone number field.",tags:["Fields","Field types","Text based types","Phone number"],keywords:["Fields","Field types","Text based types","Phone number","Create phone number field"]},a=void 0,o={unversionedId:"fields/field-types/text-based/phonenumber",id:"fields/field-types/text-based/phonenumber",title:"Phone Number",description:"This article explains how to create & work with a Phone number field.",source:"@site/docs/070.fields/040.field-types/010.text-based/040.phonenumber.md",sourceDirName:"070.fields/040.field-types/010.text-based",slug:"/fields/field-types/text-based/phonenumber",permalink:"/fields/field-types/text-based/phonenumber",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/070.fields/040.field-types/010.text-based/040.phonenumber.md",tags:[{label:"Fields",permalink:"/tags/fields"},{label:"Field types",permalink:"/tags/field-types"},{label:"Text based types",permalink:"/tags/text-based-types"},{label:"Phone number",permalink:"/tags/phone-number"}],version:"current",sidebarPosition:40,frontMatter:{title:"Phone Number",description:"This article explains how to create & work with a Phone number field.",tags:["Fields","Field types","Text based types","Phone number"],keywords:["Fields","Field types","Text based types","Phone number","Create phone number field"]},sidebar:"tutorialSidebar",previous:{title:"Email",permalink:"/fields/field-types/text-based/email"},next:{title:"URL",permalink:"/fields/field-types/text-based/url"}},s={},d=[{value:"Create a <code>Phone number</code> field",id:"create-a-phone-number-field",level:2},{value:"Similar text based fields",id:"similar-text-based-fields",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...l}=e;return(0,i.kt)(u,(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Phone number")," field is text based field that allows you to store phone numbers. It also allows you to validate the phone number."),(0,i.kt)("h2",{id:"create-a-phone-number-field"},"Create a ",(0,i.kt)("inlineCode",{parentName:"h2"},"Phone number")," field"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"+")," icon to the right of ",(0,i.kt)("inlineCode",{parentName:"li"},"Fields header")),(0,i.kt)("li",{parentName:"ol"},"On the dropdown modal, enter the field name (Optional)."),(0,i.kt)("li",{parentName:"ol"},"Select the field type as ",(0,i.kt)("inlineCode",{parentName:"li"},"Phonenumber")," from the dropdown."),(0,i.kt)("li",{parentName:"ol"},"Enable validation by toggling the ",(0,i.kt)("inlineCode",{parentName:"li"},"Validate Phonenumber")," checkbox (Optional)."),(0,i.kt)("li",{parentName:"ol"},"Set default value for the field (Optional)."),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Save Field")," button.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(53229).Z,width:"2876",height:"1230"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Specify default value without quotes."),(0,i.kt)("li",{parentName:"ul"},"Validation only ensures that the value entered is a valid phone number. It does not check if the phone number exists."))),(0,i.kt)("h2",{id:"similar-text-based-fields"},"Similar text based fields"),(0,i.kt)("p",null,"Following are the other text based fields available in NocoDB, custom-built for specific use cases."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/fields/field-types/text-based/single-line-text"},"Single line text")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/fields/field-types/text-based/long-text"},"Long text")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/fields/field-types/text-based/url"},"URL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/fields/field-types/text-based/email"},"Email"))))}c.isMDXComponent=!0},53229:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/phonenumber-1913eec12ec23e7b62e8c83ca69c7627.png"}}]);