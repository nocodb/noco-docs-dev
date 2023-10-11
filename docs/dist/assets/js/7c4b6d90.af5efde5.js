"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[5580],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),g=i,m=u["".concat(s,".").concat(g)]||u[g]||p[g]||a;return n?r.createElement(m,l(l({ref:t},d),{},{components:n})):r.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2891:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={title:"Writing docs",description:"Overview to writing docs",tags:["Engineering"]},l=void 0,o={unversionedId:"engineering/writing-docs",id:"engineering/writing-docs",title:"Writing docs",description:"Overview to writing docs",source:"@site/docs/150.engineering/080.writing-docs.md",sourceDirName:"150.engineering",slug:"/engineering/writing-docs",permalink:"/engineering/writing-docs",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/150.engineering/080.writing-docs.md",tags:[{label:"Engineering",permalink:"/tags/engineering"}],version:"current",sidebarPosition:80,frontMatter:{title:"Writing docs",description:"Overview to writing docs",tags:["Engineering"]},sidebar:"tutorialSidebar",previous:{title:"i18n translation",permalink:"/engineering/translation"},next:{title:"FAQs",permalink:"/FAQs"}},s={},c=[{value:"Folder Structure",id:"folder-structure",level:2},{value:"File Structure",id:"file-structure",level:2},{value:"Nomenclature",id:"nomenclature",level:2},{value:"Tags",id:"tags",level:2},{value:"Active Tags",id:"active-tags",level:3},{value:"Description",id:"description",level:2},{value:"Images",id:"images",level:2},{value:"Before you commit",id:"before-you-commit",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This article discusses some of the protocol and conventions to be followed while writing docs."),(0,i.kt)("h2",{id:"folder-structure"},"Folder Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Docs follow object-oriented approach. Each folder represents an object and each file represents procedures associated with that object."),(0,i.kt)("li",{parentName:"ul"},"Each folder contains an ",(0,i.kt)("inlineCode",{parentName:"li"},"_category_.json")," file which contains the metadata for that object.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "label": "Engineering",\n  "collapsible": true,\n  "collapsed": true\n}\n')),(0,i.kt)("h2",{id:"file-structure"},"File Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add following metadata to the top of each file.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"---\ntitle: \"Writing docs\"\ndescription: \"Overview to writing docs\"\ntags: ['Engineering']\nkeywords: ['Engineering', Writing docs', 'Docs conventions']\n---\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"title")," is the title of the article that appears on the sidebar and on the top of the article."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description")," is the description of the article that appears in search results."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tags")," are the tags associated with the article. Tags are used to group articles together. For example, all articles with the tag ",(0,i.kt)("inlineCode",{parentName:"li"},"Workspaces")," will be grouped together."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"keywords")," are the keywords associated with the article. Keywords are used to improve search results. For example, if the user searches for ",(0,i.kt)("inlineCode",{parentName:"li"},"Create workspace"),", then the article with the keyword ",(0,i.kt)("inlineCode",{parentName:"li"},"Create workspace")," will be displayed in the search results.")),(0,i.kt)("h2",{id:"nomenclature"},"Nomenclature"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Folder names & file name are ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"in kebab-case."),(0,i.kt)("li",{parentName:"ul"},"prefix with a number that represents the order in which the folder/file should be displayed in the sidebar."),(0,i.kt)("li",{parentName:"ul"},"prefix number is always a 3-digit number. "),(0,i.kt)("li",{parentName:"ul"},"For example, ",(0,i.kt)("inlineCode",{parentName:"li"},"010.account-settings"),"."))),(0,i.kt)("li",{parentName:"ul"},"Only first letter of the folder/file name is capitalized. Second letter onwards, first letter is capitalized only if it is a proper noun.")),(0,i.kt)("h2",{id:"tags"},"Tags"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"First letter of each tag is capitalized."),(0,i.kt)("li",{parentName:"ul"},"Tags usually are Objects or Actions. Add a tag only if we are sure that the tag will be used in multiple places. Example: 'Create' - we can have ",(0,i.kt)("inlineCode",{parentName:"li"},"Create project"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Create user"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Create API token")," etc.")),(0,i.kt)("h3",{id:"active-tags"},"Active Tags"),(0,i.kt)("p",null,"Tags that are currently being used in the docs are listed below. See if you can reuse any of these tags before adding a new tag."),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Description should be crisp and to the point. Preferably one line."),(0,i.kt)("li",{parentName:"ul"},"Refer to the description associated with the tag to get an idea of how the description should be."),(0,i.kt)("li",{parentName:"ul"},"Descriptions appear in the search results (when searched by tags). So, it should be descriptive enough to give the user an idea of what the article is about.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Search by tags",src:n(68161).Z,width:"2850",height:"1796"})),(0,i.kt)("h2",{id:"images"},"Images"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Annotated images should be placed in ",(0,i.kt)("inlineCode",{parentName:"li"},"img/v2")," folder."),(0,i.kt)("li",{parentName:"ul"},"For every annotated image, there should be a corresponding unannotated image in the ",(0,i.kt)("inlineCode",{parentName:"li"},"img/v2-unannotated")," folder."),(0,i.kt)("li",{parentName:"ul"},"Images are kept in the same folder structure as the docs."),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"Skitch")," for annotations.")),(0,i.kt)("h2",{id:"before-you-commit"},"Before you commit"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"npm run build")," to build the docs."),(0,i.kt)("li",{parentName:"ul"},"Ensure that the build is successful & there are no errors/warnings related to missing links, images, etc.")))}p.isMDXComponent=!0},68161:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/engineering-search-by-tags-9453d5cf2d1534c2f812c7aee697fe43.png"}}]);