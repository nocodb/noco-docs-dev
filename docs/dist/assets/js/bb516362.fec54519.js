"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[7188],{24359:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>w,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=n(74848),t=n(28453);const o={title:"View overview",description:"Understanding Views in NocoDB!",tags:["Views","Overview"],keywords:["NocoDB view","Overview"]},r=void 0,a={id:"views/views-overview",title:"View overview",description:"Understanding Views in NocoDB!",source:"@site/docs/090.views/010.views-overview.md",sourceDirName:"090.views",slug:"/views/views-overview",permalink:"/views/views-overview",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/090.views/010.views-overview.md",tags:[{label:"Views",permalink:"/tags/views"},{label:"Overview",permalink:"/tags/overview"}],version:"current",sidebarPosition:10,frontMatter:{title:"View overview",description:"Understanding Views in NocoDB!",tags:["Views","Overview"],keywords:["NocoDB view","Overview"]},sidebar:"tutorialSidebar",previous:{title:"Views",permalink:"/category/views"},next:{title:"Create view",permalink:"/views/create-view"}},l={},d=[{value:"View Types Supported",id:"view-types-supported",level:2},{value:"View Permission Types",id:"view-permission-types",level:2},{value:"Collaborative Views (default)",id:"collaborative-views-default",level:3},{value:"Locked Views",id:"locked-views",level:3},{value:"Personal Views \u2601",id:"personal-views-",level:3}];function c(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.p,{children:"Views within NocoDB not only allow you to tailor the visual presentation to your liking but also provide independent\ncontrol over sorting and filtering of records within each view. Each view maintains its unique configuration for\nfilters, data display, and enabled fields, ensuring that modifications of these configuration does not impact any other view.\nThis feature empowers users to efficiently personalize their data visualization while\nmaintaining the integrity of other views."}),"\n",(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsx)(i.p,{children:"View represents data from a table. Any updates to records in a view will be reflected in all other views of the same table."})}),"\n",(0,s.jsx)(i.h2,{id:"view-types-supported",children:"View Types Supported"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/views/view-types/grid",children:"Grid View"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/views/view-types/form",children:"Form View"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/views/view-types/gallery",children:"Gallery View"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/views/view-types/kanban",children:"Kanban View"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/views/view-types/calendar",children:"Calendar View"})}),"\n"]}),"\n",(0,s.jsx)("center",{children:(0,s.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/gVk5ZwMwANU?si=JcUazOp0SFWyJ6a-&start=24",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),"\n",(0,s.jsx)(i.h2,{id:"view-permission-types",children:"View Permission Types"}),"\n",(0,s.jsxs)(i.p,{children:["We can apply permission to each View. By default, views are ",(0,s.jsx)(i.code,{children:"Collaborative"}),". To see or change the view type, expand ",(0,s.jsx)(i.code,{children:"view-tool-bar-menu"})," as shown below."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"locked view",src:n(4655).A+"",width:"2320",height:"864"})}),"\n",(0,s.jsx)(i.h3,{id:"collaborative-views-default",children:"Collaborative Views (default)"}),"\n",(0,s.jsx)(i.p,{children:'By default, views are set to "Collaborative," allowing members with edit permissions or higher to modify view configurations. In this mode, all members can read and write data to the view. This is the default mode for all views.'}),"\n",(0,s.jsx)(i.h3,{id:"locked-views",children:"Locked Views"}),"\n",(0,s.jsx)(i.p,{children:'With "Locked Views," no one can edit the view configurations until they are unlocked. In this mode, all members are restricted to reading data from the view and are unable to make any changes to its settings or content. This mode is useful when you want to share a view with others but don\'t want them to make any changes to it.'}),"\n",(0,s.jsx)(i.h3,{id:"personal-views-",children:"Personal Views \u2601"}),"\n",(0,s.jsx)(i.admonition,{type:"note",children:(0,s.jsx)(i.p,{children:"Personal view are currently available exclusively on Cloud-hosted plans."})}),"\n",(0,s.jsx)(i.p,{children:'With "Personal Views" only the view owner can edit view configurations, while all other members have read-only access. This mode is similar to "Locked Views" but provides exclusive control to the owner. Only the view owner can set a view as "Personal" and they can reassign the view to another user if necessary. The base owner or creator also has the authority to reassign the view to another user and change the view\u2019s lock status, switching it back to "Collaborative" or "Locked" as needed. If no specific owner is assigned(older views), the base owner automatically assumes ownership of the view.'})]})}function w(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},4655:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/locked-view-98e409b4c0859f73d2d59b6e418d338b.png"},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>a});var s=n(96540);const t={},o=s.createContext(t);function r(e){const i=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:i},e.children)}}}]);