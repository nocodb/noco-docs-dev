"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[4021],{22910:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>i});var s=n(85893),o=n(11151);const c={title:"Connect to a Data source",description:"Learn how to connect to an external data-source (PG/MySQL) in NocoDB.",tags:["Data Sources","Connect","External","PG","MySQL"],keywords:["NocoDB data source","connect data source","external data source","PG data source","MySQL data source"]},a=void 0,r={id:"data-sources/connect-to-data-source",title:"Connect to a Data source",description:"Learn how to connect to an external data-source (PG/MySQL) in NocoDB.",source:"@site/docs/100.data-sources/020.connect-to-data-source.md",sourceDirName:"100.data-sources",slug:"/data-sources/connect-to-data-source",permalink:"/data-sources/connect-to-data-source",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/100.data-sources/020.connect-to-data-source.md",tags:[{label:"Data Sources",permalink:"/tags/data-sources"},{label:"Connect",permalink:"/tags/connect"},{label:"External",permalink:"/tags/external"},{label:"PG",permalink:"/tags/pg"},{label:"MySQL",permalink:"/tags/my-sql"}],version:"current",sidebarPosition:20,frontMatter:{title:"Connect to a Data source",description:"Learn how to connect to an external data-source (PG/MySQL) in NocoDB.",tags:["Data Sources","Connect","External","PG","MySQL"],keywords:["NocoDB data source","connect data source","external data source","PG data source","MySQL data source"]},sidebar:"tutorialSidebar",previous:{title:"Data sources overview",permalink:"/data-sources/data-source-overview"},next:{title:"Sync with Data source",permalink:"/data-sources/sync-with-data-source"}},d={},i=[];function l(e){const t={code:"code",img:"img",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"To connect to an external data source, follow the steps below:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Access Base context menu by clicking on the ",(0,s.jsx)(t.code,{children:"Base"})," name in the left sidebar"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Select ",(0,s.jsx)(t.code,{children:"Data Sources"})," tab"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Click on ",(0,s.jsx)(t.code,{children:"+ New Data Source"})," button"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"On the pop-up modal, provide the following details:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Source Name"}),(0,s.jsx)(t.td,{children:"Name for this data source for display on NocoDB UI"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Database Type"}),(0,s.jsx)(t.td,{children:"Type of the data source. Currently, NocoDB supports PostgreSQL & MySQL data sources."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Host Address"}),(0,s.jsx)(t.td,{children:"Hostname of the data source"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Port Number"}),(0,s.jsx)(t.td,{children:"Port number of the data source"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Username"}),(0,s.jsx)(t.td,{children:"Username to connect to the database"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Password"}),(0,s.jsx)(t.td,{children:"Password to connect to the database"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Database"}),(0,s.jsx)(t.td,{children:"Name of the database to connect to"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Schema name"}),(0,s.jsx)(t.td,{children:"Name of the schema to connect to"})]})]})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Click on ",(0,s.jsx)(t.code,{children:"Test Database Connection"})," button to verify the connection"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Wait for the connection to be verified."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["After connection is successful, ",(0,s.jsx)(t.code,{children:"Submit"})," button will be enabled."]}),"\n",(0,s.jsxs)(t.li,{children:["Click on ",(0,s.jsx)(t.code,{children:"Submit"})," button to save the data source."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"data source-1",src:n(74574).Z+"",width:"2876",height:"984"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"data source-2",src:n(81263).Z+"",width:"2880",height:"1800"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"data source-3",src:n(50290).Z+"",width:"2880",height:"1800"})})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},74574:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/data-source-connect-1-e1cd8c562d3d3db9699aba4395d8a800.png"},81263:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/data-source-connect-2-5eaa0a1ab29767749a9ea725e28ad47c.png"},50290:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/data-source-connect-3-48b79f4e92d396e681c0ede769e990d9.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var s=n(67294);const o={},c=s.createContext(o);function a(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);