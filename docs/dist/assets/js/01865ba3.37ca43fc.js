"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[43],{55346:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>d});var a=o(85893),s=o(11151);const i={title:"Quick start",keywords:["NocoDB","quick start","getting started"]},r=void 0,n={id:"getting-started/quick-start",title:"Quick start",description:"NocoDB offers you the flexibility of two distinct variants: self-hosted and SaaS (cloud-hosted). In this section, we'll walk you through the initial steps to embark on your NocoDB journey, whether you choose to set it up on your own infrastructure or opt for the convenience of our cloud-hosted service. Let's dive in and unlock the potential of NocoDB for your data management needs.",source:"@site/docs/020.getting-started/020.quick-start.md",sourceDirName:"020.getting-started",slug:"/getting-started/quick-start",permalink:"/getting-started/quick-start",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/020.getting-started/020.quick-start.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Quick start",keywords:["NocoDB","quick start","getting started"]},sidebar:"tutorialSidebar",previous:{title:"Welcome",permalink:"/"},next:{title:"NocoDB terminologies",permalink:"/getting-started/terminologies"}},l={},d=[{value:"Self Hosted",id:"self-hosted",level:2},{value:"SaaS (Cloud Hosted)",id:"saas-cloud-hosted",level:2},{value:"Sign up for a NocoDB account",id:"sign-up-for-a-nocodb-account",level:3},{value:"Create another workspace",id:"create-another-workspace",level:3},{value:"Build a Base",id:"build-a-base",level:3},{value:"Create Tables",id:"create-tables",level:4},{value:"Add Fields",id:"add-fields",level:4},{value:"Establish Relationships with Links",id:"establish-relationships-with-links",level:4},{value:"Add Records",id:"add-records",level:4},{value:"Create views",id:"create-views",level:4},{value:"Connect your data sources",id:"connect-your-data-sources",level:4},{value:"Collaborate with your team",id:"collaborate-with-your-team",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"NocoDB offers you the flexibility of two distinct variants: self-hosted and SaaS (cloud-hosted). In this section, we'll walk you through the initial steps to embark on your NocoDB journey, whether you choose to set it up on your own infrastructure or opt for the convenience of our cloud-hosted service. Let's dive in and unlock the potential of NocoDB for your data management needs."}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"For this introductory guide, we suggest utilizing the hosted (SaaS) option. New users can take advantage of a complimentary trial period to explore the platform's features."})}),"\n",(0,a.jsx)(t.h2,{id:"self-hosted",children:"Self Hosted"}),"\n",(0,a.jsx)(t.p,{children:"When you opt for self-hosting, you gain the advantage of running an application on a server that you have direct control over. This grants you the flexibility to choose whether to host the database on your premises or within a server leased from a data center. In this self-administered arrangement, typically found on-premises, you assume full responsibility for the management and upkeep of your server. This level of control ensures that you have complete authority over all aspects of your data and services, eliminating any reliance on third-party service providers. This option is ideal for organizations that require a high degree of control over their data and services, but it does necessitate a higher level of technical expertise."}),"\n",(0,a.jsx)(t.p,{children:"Setting up NocoDB on your own server is a straightforward process & the articles below will guide you through the steps to get started."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/getting-started/self-hosted/installation",children:"Installation"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/getting-started/self-hosted/environment-variables",children:"Environment Variables"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/getting-started/self-hosted/upgrading",children:"Upgrading"})}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"saas-cloud-hosted",children:"SaaS (Cloud Hosted)"}),"\n",(0,a.jsx)(t.h3,{id:"sign-up-for-a-nocodb-account",children:"Sign up for a NocoDB account"}),"\n",(0,a.jsx)(t.p,{children:"To get started with NocoDB's cloud-hosted service, follow these steps to sign up for an account:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Visit the ",(0,a.jsx)(t.a,{href:"https://www.nocodb.com",children:"NocoDB website"}),"."]}),"\n",(0,a.jsx)(t.li,{children:'Click on the "Start For Free" button located in the top right corner.'}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"Sign Up"})," using Google account. Alternatively, you can also sign up using your email address."]}),"\n",(0,a.jsx)(t.li,{children:"Check your email for a verification link and follow the instructions to verify your account."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Once you've successfully signed up, you will land on the NocoDB dashboard with a default workspace created for you."}),"\n",(0,a.jsx)(t.h3,{id:"create-another-workspace",children:"Create another workspace"}),"\n",(0,a.jsxs)(t.p,{children:["After signing up and logging in to your NocoDB account, a default workspace is automatically created for you. You can use this workspace or ",(0,a.jsx)(t.a,{href:"/workspaces/create-workspace",children:"create a new one"})]}),"\n",(0,a.jsx)(t.p,{children:"Your new workspace is now ready, and you can start building your base within it."}),"\n",(0,a.jsx)(t.h3,{id:"build-a-base",children:"Build a Base"}),"\n",(0,a.jsxs)(t.p,{children:["Building a base in NocoDB is where you define the structure of your database, create tables to store your data, add fields to those tables, and establish relationships between tables using Links. This relational approach helps you organize and manage your data effectively, making it easier to work with complex datasets and build powerful applications. Add a ",(0,a.jsx)(t.a,{href:"/bases/create-base",children:"new Base"}),". Alternatively, you can also ",(0,a.jsx)(t.a,{href:"/bases/import-base-from-airtable",children:"import existing base from Airtable"})," as a NocoDB project in minutes."]}),"\n",(0,a.jsx)(t.h4,{id:"create-tables",children:"Create Tables"}),"\n",(0,a.jsxs)(t.p,{children:["Tables are where you store your data like a spreadsheet grid, with data arranged in rows & columns. Once the base is created, you can start ",(0,a.jsx)(t.a,{href:"/tables/create-table",children:"adding new tables"})," to it. You can also ",(0,a.jsx)(t.a,{href:"/tables/create-table-via-import",children:"import existing structure data from a CSV, Excel, or JSON file"})," to populate your tables."]}),"\n",(0,a.jsx)(t.h4,{id:"add-fields",children:"Add Fields"}),"\n",(0,a.jsxs)(t.p,{children:["Within each table, ",(0,a.jsx)(t.a,{href:"/fields/fields-overview",children:"define the fields"})," that will hold your data. Fields are columnar data containers that hold a specific type of data. Fields can represent various types of information, such as text, numbers, dates, and more. You can find complete list of supported field types ",(0,a.jsx)(t.a,{href:"/fields/fields-overview",children:"here"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Use multi-fields editor to manage fields in bulk quickly - add fields, edit them, reorder, change visibility, reconfigure - all from one single window. ",(0,a.jsx)(t.a,{href:"/fields/multi-fields-editor",children:"Read more"}),"."]}),"\n",(0,a.jsx)(t.h4,{id:"establish-relationships-with-links",children:"Establish Relationships with Links"}),"\n",(0,a.jsxs)(t.p,{children:["One of NocoDB's powerful features is the ability to establish relationships between tables using ",(0,a.jsx)(t.a,{href:"/fields/field-types/links-based/links",children:"Links"}),'. Links enable you to connect related data across tables. For example, you can link "Tasks" to a specific "Project" by creating a Link field in the "Projects" table that points to the "Tasks" table.']}),"\n",(0,a.jsx)(t.h4,{id:"add-records",children:"Add Records"}),"\n",(0,a.jsxs)(t.p,{children:["Once you have created tables and defined the necessary fields, it's time to start adding records to your base tables. Records are individual entries or rows within your tables, and they contain the actual data you want to store and manage. You can ",(0,a.jsx)(t.a,{href:"/records/create-record",children:"add records manually"})," or ",(0,a.jsx)(t.a,{href:"/tables/import-data-into-existing-table",children:"upload existing data sets from CSV"})," files."]}),"\n",(0,a.jsx)(t.h4,{id:"create-views",children:"Create views"}),"\n",(0,a.jsxs)(t.p,{children:["Views are customized ways of displaying your data. You can ",(0,a.jsx)(t.a,{href:"/views/create-view",children:"create multiple views"})," for each table in your base, and each view can have its own set of fields, filters, and layouts. NocoDB offers a variety of view types for custom display, including ",(0,a.jsx)(t.a,{href:"/views/view-types/grid",children:"Grid"}),", ",(0,a.jsx)(t.a,{href:"/views/view-types/kanban",children:"Kanban"}),", and ",(0,a.jsx)(t.a,{href:"/views/view-types/gallery",children:"Gallery"}),". If you are collecting data from a form, you can also create a ",(0,a.jsx)(t.a,{href:"/views/view-types/form",children:"Form view"})," to display the data in a form format."]}),"\n",(0,a.jsx)(t.h4,{id:"connect-your-data-sources",children:"Connect your data sources"}),"\n",(0,a.jsxs)(t.p,{children:["Not just creating base & tables from the scratch, NocoDB also allows you to get started quickly by ",(0,a.jsx)(t.a,{href:"/data-sources/data-source-overview",children:"connecting to your existing data sources"})," & bring the comfort of spreadsheet UI to your data source."]}),"\n",(0,a.jsx)(t.h3,{id:"collaborate-with-your-team",children:"Collaborate with your team"}),"\n",(0,a.jsxs)(t.p,{children:["NocoDB makes it easy to collaborate with your team members on your workspaces and bases. You can ",(0,a.jsx)(t.a,{href:"/collaboration/workspace-collaboration",children:"invite team members to your workspace"})," and ",(0,a.jsx)(t.a,{href:"/collaboration/base-collaboration",children:"share your bases with them"}),". You can also ",(0,a.jsx)(t.a,{href:"/roles-and-permissions/roles-permissions-overview",children:"assign roles and permissions"})," to your team members to control their access to your bases."]}),"\n",(0,a.jsxs)(t.p,{children:["Want to share information publicly? You can ",(0,a.jsx)(t.a,{href:"/collaboration/share-base",children:"create a public link to your base"})," and share it with anyone. You can also ",(0,a.jsx)(t.a,{href:"/collaboration/share-base#embeddable-frame",children:"embed your base"})," on your website or blog."]}),"\n",(0,a.jsx)(t.p,{children:"That's it! You're now ready to harness the power of NocoDB for your data management needs."})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>n,a:()=>r});var a=o(67294);const s={},i=a.createContext(s);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);