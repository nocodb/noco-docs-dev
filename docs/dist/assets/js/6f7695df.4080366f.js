"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[3988],{62572:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(74848),i=a(28453);const r={title:"Share base",description:"Procedures to share a base & generating embedded iframe",tags:["Bases","Share","Collaboration","Share base"],keywords:["NocoDB base","share base","base collaboration","Public share"]},t=void 0,l={id:"bases/share-base",title:"Share base",description:"Procedures to share a base & generating embedded iframe",source:"@site/docs/040.bases/060.share-base.md",sourceDirName:"040.bases",slug:"/bases/share-base",permalink:"/bases/share-base",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/040.bases/060.share-base.md",tags:[{label:"Bases",permalink:"/tags/bases"},{label:"Share",permalink:"/tags/share"},{label:"Collaboration",permalink:"/tags/collaboration"},{label:"Share base",permalink:"/tags/share-base"}],version:"current",sidebarPosition:60,frontMatter:{title:"Share base",description:"Procedures to share a base & generating embedded iframe",tags:["Bases","Share","Collaboration","Share base"],keywords:["NocoDB base","share base","base collaboration","Public share"]},sidebar:"tutorialSidebar",previous:{title:"Base collaboration",permalink:"/bases/base-collaboration"},next:{title:"Snapshots",permalink:"/bases/snapshots"}},o={},d=[{value:"Modify Share base",id:"modify-share-base",level:2},{value:"Disable Share base",id:"disable-share-base",level:2},{value:"Share base Access Permissions",id:"share-base-access-permissions",level:2},{value:"Embeddable Frame",id:"embeddable-frame",level:2},{value:"Embed into application&#39;s HTML Body",id:"embed-into-applications-html-body",level:3},{value:"Related articles",id:"related-articles",level:2}];function c(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"To share a base, follow the steps below:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Navigate to the top right corner of the top navigation bar and click on the ",(0,n.jsx)(s.code,{children:"Share"})," button."]}),"\n",(0,n.jsxs)(s.li,{children:["In the ",(0,n.jsx)(s.code,{children:"Shared base"})," section, toggle the switch to ",(0,n.jsx)(s.code,{children:"Enable public access"})," in order to activate the shared base feature."]}),"\n",(0,n.jsxs)(s.li,{children:["The generated link for the shared base will be displayed above and can be utilized to share this base with others. To copy the URL, simply click on the ",(0,n.jsx)(s.code,{children:"Copy Link"})," option."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Share base",src:a(52869).A+"",width:"2898",height:"1216"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Share base",src:a(81070).A+"",width:"2876",height:"1324"})}),"\n",(0,n.jsx)(s.h2,{id:"modify-share-base",children:"Modify Share base"}),"\n",(0,n.jsxs)(s.p,{children:["Amending the ",(0,n.jsx)(s.code,{children:"Share base"})," setting will render the previously generated ",(0,n.jsx)(s.code,{children:"Share base"})," link invalid and generate a new link in its place.\nHere are the steps to modify it:"]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Click on the ",(0,n.jsx)(s.code,{children:"Share"})," button located in the top right corner of the toolbar."]}),"\n",(0,n.jsxs)(s.li,{children:["Toggle the option labeled ",(0,n.jsx)(s.code,{children:"Enable public access"})," to deactivate the base share."]}),"\n",(0,n.jsxs)(s.li,{children:["Toggle the same option, ",(0,n.jsx)(s.code,{children:"Enable public access,"})," to reactivate the base share, subsequently generating a new link."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Enable public access",src:a(12594).A+"",width:"2874",height:"1790"})}),"\n",(0,n.jsx)(s.h2,{id:"disable-share-base",children:"Disable Share base"}),"\n",(0,n.jsxs)(s.p,{children:["Disabling ",(0,n.jsx)(s.code,{children:"Share base"})," will render the previously generated ",(0,n.jsx)(s.code,{children:"Share base"})," link invalid\nHere are the steps to disable it:"]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Click on the 'Share' button located in the top right corner of the toolbar."}),"\n",(0,n.jsxs)(s.li,{children:["Toggle the option labeled ",(0,n.jsx)(s.code,{children:"Enable public access"})," to deactivate the base share."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Enable public access",src:a(12594).A+"",width:"2874",height:"1790"})}),"\n",(0,n.jsx)(s.h2,{id:"share-base-access-permissions",children:"Share base Access Permissions"}),"\n",(0,n.jsx)(s.p,{children:'The "Shared base" can be configured in two modes:'}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Viewer"})," - Users with the provided link will have ",(0,n.jsx)(s.strong,{children:"read-only"})," access to the base data."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Editor"})," - Users with the provided link will have ",(0,n.jsx)(s.strong,{children:"read and write"})," access to the base data."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Toggle ",(0,n.jsx)(s.code,{children:"Enable Editor Access"})," button to configure permissions as desired\n",(0,n.jsx)(s.img,{alt:"Share base edit access",src:a(61623).A+"",width:"2874",height:"1790"})]}),"\n",(0,n.jsx)(s.h2,{id:"embeddable-frame",children:"Embeddable Frame"}),"\n",(0,n.jsxs)(s.p,{children:["The NocoDB interface can be seamlessly integrated into existing applications through the utilization of the ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe",children:"HTML IFRAME"})," attribute. This feature empowers users to embed the NocoDB interface into their applications, allowing for a unified user experience. To generate the embeddable HTML code, follow these steps:"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"To Generate Embeddable HTML Code:"})}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Click the ",(0,n.jsx)(s.code,{children:"Share"})," button located in the top right corner of the toolbar."]}),"\n",(0,n.jsxs)(s.li,{children:["Within the ",(0,n.jsx)(s.code,{children:"Shared base link"})," tab, select the button to copy the ",(0,n.jsx)(s.code,{children:"Embeddable HTML code"})," to your clipboard."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Share base iFrame",src:a(954).A+"",width:"2874",height:"1790"})}),"\n",(0,n.jsx)(s.p,{children:"Example:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-html",children:'<iframe\n    class="nc-embed"\n    src="https://nocodb-nocodb-rsyir.ondigitalocean.app/dashboard/#/nc/base/e3bba9df-4fc1-4d11-b7ce-41c4a3ad6810?embed"\n    frameBorder="0"\n    width="100%"\n    height="700"\n    style="background: transparent; border: 1px solid #ddd"\n>\n</iframe>\n'})}),"\n",(0,n.jsx)(s.h3,{id:"embed-into-applications-html-body",children:"Embed into application's HTML Body"}),"\n",(0,n.jsx)(s.p,{children:"Sample code with embedded iframe generated above"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-html",children:'<!DOCTYPE html>\n<html>\n<head>\n    <title>Sample iFrame Example</title>\n</head>\n<body style="height:100vh; margin:0">\n<iframe src="http://localhost:3000/#/base/035c5207-501a-48b8-8dbe-67742b78323e" width="100%" height="100%" style="border: none;"></iframe>\n</body>\n</html>\n'})}),"\n",(0,n.jsx)(s.h2,{id:"related-articles",children:"Related articles"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/bases/base-overview",children:"Base overview"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/bases/create-base",children:"Create an empty base"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/bases/import-base-from-airtable",children:"Import base from Airtable"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/bases/base-collaboration",children:"Invite team members to work on a base"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/bases/share-base",children:"Share base publicly"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/bases/actions-on-base#rename-base",children:"Rename base"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/bases/actions-on-base#duplicate-base",children:"Duplicate base"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/bases/actions-on-base#star-base",children:"Bookmark base"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/bases/actions-on-base#delete-base",children:"Delete base"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},52869:(e,s,a)=>{a.d(s,{A:()=>n});const n=a.p+"assets/images/share-base-1-b9c4bddb603c184a16da76c4e1e08edb.png"},81070:(e,s,a)=>{a.d(s,{A:()=>n});const n=a.p+"assets/images/share-base-2-07354533111aa13a608996b10640f468.png"},61623:(e,s,a)=>{a.d(s,{A:()=>n});const n=a.p+"assets/images/share-base-edit-access-b293bc0349998853d6de8a9784ae9e54.png"},12594:(e,s,a)=>{a.d(s,{A:()=>n});const n=a.p+"assets/images/share-base-enable-public-access-70567245aad03d619b620d838cbdb21a.png"},954:(e,s,a)=>{a.d(s,{A:()=>n});const n=a.p+"assets/images/share-base-iframe-5cf906c782389e1cf39b132cd1ab62ac.png"},28453:(e,s,a)=>{a.d(s,{R:()=>t,x:()=>l});var n=a(96540);const i={},r=n.createContext(i);function t(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);