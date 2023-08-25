"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[2773],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(o),m=n,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return o?a.createElement(h,i(i({ref:t},u),{},{components:o})):a.createElement(h,i({ref:t},u))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<r;c++)i[c]=o[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},2244:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=o(7462),n=(o(7294),o(3905));const r={title:"Welcome",description:"NocoDB Documentation",slug:"/"},i=void 0,l={unversionedId:"index",id:"index",title:"Welcome",description:"NocoDB Documentation",source:"@site/docs/010.index.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/010.index.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Welcome",description:"NocoDB Documentation",slug:"/"},sidebar:"tutorialSidebar",next:{title:"Installation",permalink:"/getting-started/installation"}},s={},c=[{value:"Welcome!",id:"welcome",level:2},{value:"Features",id:"features",level:2},{value:"Rich Spreadsheet Interface",id:"rich-spreadsheet-interface",level:3},{value:"App Store for Workflow Automations",id:"app-store-for-workflow-automations",level:3},{value:"Programmatic Access",id:"programmatic-access",level:3},{value:"Sync Schema",id:"sync-schema",level:3},{value:"Audit",id:"audit",level:3},{value:"Why are we building this?",id:"why-are-we-building-this",level:2},{value:"Our Mission",id:"our-mission",level:2},{value:"How can I contribute to NocoDB&#39;s development ?",id:"how-can-i-contribute-to-nocodbs-development-",level:2},{value:"Where can I join the NocoDB community?",id:"where-can-i-join-the-nocodb-community",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"welcome"},"Welcome!"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:o(4944).Z,width:"1584",height:"396"})),(0,n.kt)("p",null,"NocoDB is a no-code database platform that allows teams to collaborate and build applications with ease of a familiar and intuitive spreadsheet interface. This allows even non-developers or business users to become software creators."),(0,n.kt)("p",null,"NocoDB works by connecting to any relational database and transforming them into a smart spreadsheet interface! This allows you to build no-code applications collaboratively with teams. NocoDB currently works with MySQL, PostgreSQL, Microsoft SQL Server, SQLite, Amazon Aurora & MariaDB databases."),(0,n.kt)("p",null,"Also NocoDB's app store allows you to build business workflows on views with combination of Slack, Microsoft Teams, Discord, Twilio, Whatsapp, Email & any 3rd party APIs too. Plus NocoDB provides programmatic access to APIs so that you can build integrations with Zapier / Integromat and custom applications too."),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("h3",{id:"rich-spreadsheet-interface"},"Rich Spreadsheet Interface"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u26a1 ","\xa0","Basic Operations: Create, Read, Update and Delete on Tables, Columns, and Rows"),(0,n.kt)("li",{parentName:"ul"},"\u26a1 ","\xa0","Fields Operations: Sort, Filter, Hide / Unhide Columns"),(0,n.kt)("li",{parentName:"ul"},"\u26a1 ","\xa0","Multiple Views Types: Grid (By default), Gallery, Form View and Kanban View"),(0,n.kt)("li",{parentName:"ul"},"\u26a1 ","\xa0","View Permissions Types: Collaborative Views, & Locked Views "),(0,n.kt)("li",{parentName:"ul"},"\u26a1 ","\xa0","Share Bases / Views: either Public or Private (with Password Protected)"),(0,n.kt)("li",{parentName:"ul"},"\u26a1 ","\xa0","Variant Cell Types: ID, LinkToAnotherRecord, Lookup, Rollup, SingleLineText, Attachement, Currency, Formula and etc"),(0,n.kt)("li",{parentName:"ul"},"\u26a1 ","\xa0","Access Control with Roles : Fine-grained Access Control at different levels"),(0,n.kt)("li",{parentName:"ul"},"\u26a1 ","\xa0","and more ...")),(0,n.kt)("h3",{id:"app-store-for-workflow-automations"},"App Store for Workflow Automations"),(0,n.kt)("p",null,"We provide different integrations in three main categories. See ",(0,n.kt)("a",{href:"/setup-and-usages/account-settings#app-store",target:"_blank"},"App Store")," for details."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u26a1 ","\xa0","Chat : Slack, Discord, Mattermost, and etc"),(0,n.kt)("li",{parentName:"ul"},"\u26a1 ","\xa0","Email : AWS SES, SMTP, MailerSend, and etc"),(0,n.kt)("li",{parentName:"ul"},"\u26a1 ","\xa0","Storage : AWS S3, Google Cloud Storage, Minio, and etc")),(0,n.kt)("h3",{id:"programmatic-access"},"Programmatic Access"),(0,n.kt)("p",null,"We provide the following ways to let users to invoke actions in a programmatic way. You can use a token (either JWT or Social Auth) to sign your requests for authorization to NocoDB. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u26a1 ","\xa0","REST APIs"),(0,n.kt)("li",{parentName:"ul"},"\u26a1 ","\xa0","NocoDB SDK")),(0,n.kt)("h3",{id:"sync-schema"},"Sync Schema"),(0,n.kt)("p",null,"We allow you to sync schema changes if you have made changes outside NocoDB GUI. However, it has to be noted then you will have to bring your own schema migrations for moving from environment to others. See ",(0,n.kt)("a",{href:"/setup-and-usages/sync-schema",target:"_blank"},"Sync Schema")," for details."),(0,n.kt)("h3",{id:"audit"},"Audit"),(0,n.kt)("p",null,"We are keeping all the user operation logs under one place. See ",(0,n.kt)("a",{href:"/setup-and-usages/audit",target:"_blank"},"Audit")," for details."),(0,n.kt)("h2",{id:"why-are-we-building-this"},"Why are we building this?"),(0,n.kt)("p",null,"Most internet businesses equip themselves with either spreadsheet or a database to solve their business needs. Spreadsheets are used by a Billion+ humans collaboratively every single day. However, we are way off working at similar speeds on databases which are way more powerful tools when it comes to computing. Attempts to solve this with SaaS offerings has meant horrible access controls, vendor lockin, data lockin, abrupt price changes & most importantly a glass ceiling on what's possible in future."),(0,n.kt)("h2",{id:"our-mission"},"Our Mission"),(0,n.kt)("p",null,"Our mission is to provide the most powerful no-code interface for databases which is open source to every single internet business in the world. This would not only democratise access to a powerful computing tool but also bring forth a billion+ people who will have radical tinkering-and-building abilities on internet. "),(0,n.kt)("h2",{id:"how-can-i-contribute-to-nocodbs-development-"},"How can I contribute to NocoDB's development ?"),(0,n.kt)("p",null,"Please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/nocodb/nocodb/blob/develop/.github/CONTRIBUTING.md"},"here")," for the contribution guidelines."),(0,n.kt)("img",{src:"https://static.scarf.sh/a.png?x-pxid=c12a77cc-855e-4602-8a0f-614b2d0da56a",style:{margin:"0px"}}),(0,n.kt)("h2",{id:"where-can-i-join-the-nocodb-community"},"Where can I join the NocoDB community?"),(0,n.kt)("p",null,"Follow us for daily updates, content, and other activities with our community:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/@nocodb"},"Youtube")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/nocodb"},"Twitter")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://discord.nocodb.com/"},"Discord")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/nocodb/nocodb"},"GitHub")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://community.nocodb.com/"},"Community Forums")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.linkedin.com/company/nocodb"},"LinkedIn")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/NocoDB/"},"Reddit"))))}p.isMDXComponent=!0},4944:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/banner-0a7a485798fc16881259280a1227725d.png"}}]);