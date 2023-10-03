"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[6698],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),g=o,m=u["".concat(c,".").concat(g)]||u[g]||d[g]||a;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7766:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={title:"Accessing APIs",description:"How to access NocoDB APIs with Auth or API token?"},s=void 0,i={unversionedId:"developer-resources/accessing-apis",id:"developer-resources/accessing-apis",title:"Accessing APIs",description:"How to access NocoDB APIs with Auth or API token?",source:"@site/docs/040.developer-resources/010.accessing-apis.md",sourceDirName:"040.developer-resources",slug:"/developer-resources/accessing-apis",permalink:"/developer-resources/accessing-apis",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/040.developer-resources/010.accessing-apis.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Accessing APIs",description:"How to access NocoDB APIs with Auth or API token?"},sidebar:"tutorialSidebar",previous:{title:"Team & Settings > Project settings",permalink:"/setup-and-usages/project-settings"},next:{title:"REST APIs",permalink:"/developer-resources/rest-apis"}},c={},l=[{value:"Auth Token",id:"auth-token",level:2},{value:"API Token",id:"api-token",level:2},{value:"Swagger UI",id:"swagger-ui",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"NocoDB APIs can be authorized by either Auth Token or API Token."),(0,o.kt)("h2",{id:"auth-token"},"Auth Token"),(0,o.kt)("p",null,"Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"NC_JWT_EXPIRES_IN"),". If you are passing Auth Token, make sure that the header is called ",(0,o.kt)("inlineCode",{parentName:"p"},"xc-auth"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Go to NocoDB Project, click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Nocodb")," on top left, ",(0,o.kt)("inlineCode",{parentName:"li"},"Copy Auth Token"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/nocodb/nocodb/assets/86527202/d7e2810b-4268-43b3-8163-dfe1541fbf68",alt:"copy auth token"})),(0,o.kt)("h2",{id:"api-token"},"API Token"),(0,o.kt)("p",null,"API tokens allows us to integrate seamlessly with 3rd party apps. See ",(0,o.kt)("a",{parentName:"p",href:"../setup-and-usages/team-and-auth#api-tokens-management"},"API Tokens Management")," for more."),(0,o.kt)("h2",{id:"swagger-ui"},"Swagger UI"),(0,o.kt)("p",null,"You can interact with the API's resources via Swagger UI."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open project context menu, select ",(0,o.kt)("inlineCode",{parentName:"li"},"Swagger: REST APIs"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/nocodb/nocodb/assets/86527202/218f1286-775b-466b-b6d1-f8bd9c74f9ee",alt:"swagger"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Authorize"),", paste the token you copied in above steps and click ",(0,o.kt)("inlineCode",{parentName:"li"},"Authorize")," to save.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/35857179/164874471-29fc1630-ab99-4c25-8ce2-b41e5415e4be.png",alt:"image"})))}d.isMDXComponent=!0}}]);