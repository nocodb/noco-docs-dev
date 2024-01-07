"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[6111],{64220:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>o,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>n,toc:()=>r});var d=t(85893),s=t(11151);const l={title:"Last Modified Time",description:"This article explains how to create & work with a last modified time field.",tags:["Fields","Field types","Date & Time","System fields"],keywords:["Fields","Field types","Date & Time","System fields","Last Modified Time"]},a=void 0,n={id:"fields/field-types/date-time-based/last-modified-time",title:"Last Modified Time",description:"This article explains how to create & work with a last modified time field.",source:"@site/docs/070.fields/040.field-types/070.date-time-based/060.last-modified-time.md",sourceDirName:"070.fields/040.field-types/070.date-time-based",slug:"/fields/field-types/date-time-based/last-modified-time",permalink:"/fields/field-types/date-time-based/last-modified-time",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/070.fields/040.field-types/070.date-time-based/060.last-modified-time.md",tags:[{label:"Fields",permalink:"/tags/fields"},{label:"Field types",permalink:"/tags/field-types"},{label:"Date & Time",permalink:"/tags/date-time"},{label:"System fields",permalink:"/tags/system-fields"}],version:"current",sidebarPosition:60,frontMatter:{title:"Last Modified Time",description:"This article explains how to create & work with a last modified time field.",tags:["Fields","Field types","Date & Time","System fields"],keywords:["Fields","Field types","Date & Time","System fields","Last Modified Time"]},sidebar:"tutorialSidebar",previous:{title:"Created Time",permalink:"/fields/field-types/date-time-based/created-time"},next:{title:"User based",permalink:"/category/user-based"}},o={},r=[{value:"Create a <code>LastModifiedTime</code> field",id:"create-a-lastmodifiedtime-field",level:2},{value:"Cell display",id:"cell-display",level:2},{value:"Related fields",id:"related-fields",level:2}];function c(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(i.p,{children:["Since version v0.204.0 (Jan 2024), NocoDB internally captures the time when record was modified. This information is stored as a system field in the database & is hidden in the table by default. To view this information on the UI, you can either enable ",(0,d.jsx)(i.code,{children:"Show System Fields"})," OR create a ",(0,d.jsx)(i.code,{children:"Last Modified Time"})," field manually by following the steps below."]}),"\n",(0,d.jsx)(i.p,{children:"Default system field can be only hidden from UI. It cannot be modified, duplicated or deleted."}),"\n",(0,d.jsx)(i.admonition,{type:"note",children:(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsxs)(i.li,{children:["When connected to an external database, ",(0,d.jsx)(i.code,{children:"LastModifiedTime"})," field is not created automatically. You can create a ",(0,d.jsx)(i.code,{children:"LastModifiedTime"})," field manually by following the steps below."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"LastModifiedTime"})," field is empty indicates","\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsxs)(i.li,{children:["the record predates the ",(0,d.jsx)(i.code,{children:"LastModifiedTime"})," feature (v0.204.0, Jan 2024). Prior to this feature release, it was possible to remove the ",(0,d.jsx)(i.code,{children:"LastModifiedTime"})," field from the table."]}),"\n",(0,d.jsx)(i.li,{children:"the record was never modified."}),"\n",(0,d.jsx)(i.li,{children:"external database connection : information is captured only after the field is explicitly created."}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,d.jsxs)(i.h2,{id:"create-a-lastmodifiedtime-field",children:["Create a ",(0,d.jsx)(i.code,{children:"LastModifiedTime"})," field"]}),"\n",(0,d.jsxs)(i.ol,{children:["\n",(0,d.jsxs)(i.li,{children:["Click on ",(0,d.jsx)(i.code,{children:"+"})," icon to the right of ",(0,d.jsx)(i.code,{children:"Fields header"})]}),"\n",(0,d.jsx)(i.li,{children:"On the dropdown modal, enter the field name (Optional)."}),"\n",(0,d.jsxs)(i.li,{children:["Select the field type as ",(0,d.jsx)(i.code,{children:"LastModifiedTime"})," from the dropdown."]}),"\n",(0,d.jsxs)(i.li,{children:["Click on ",(0,d.jsx)(i.code,{children:"Save Field"})," button."]}),"\n"]}),"\n",(0,d.jsx)(i.p,{children:(0,d.jsx)(i.img,{alt:"image",src:t(58659).Z+"",width:"2296",height:"910"})}),"\n",(0,d.jsx)(i.h2,{id:"cell-display",children:"Cell display"}),"\n",(0,d.jsxs)(i.p,{children:[(0,d.jsx)(i.code,{children:"LastModifiedTime"})," field is displayed as a read-only field in the table view. It is displayed as a date & time string in the format ",(0,d.jsx)(i.code,{children:"DD MMM YYYY, HH:mm"}),"."]}),"\n",(0,d.jsx)(i.h2,{id:"related-fields",children:"Related fields"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsx)(i.li,{children:(0,d.jsx)(i.a,{href:"/fields/field-types/date-time-based/created-time",children:"Created Time"})}),"\n"]})]})}function m(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,d.jsx)(i,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},58659:(e,i,t)=>{t.d(i,{Z:()=>d});const d=t.p+"assets/images/last-modified-time-3c8c3e56b372f9ec22a98d8cf54a6072.png"},11151:(e,i,t)=>{t.d(i,{Z:()=>n,a:()=>a});var d=t(67294);const s={},l=d.createContext(s);function a(e){const i=d.useContext(l);return d.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function n(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),d.createElement(l.Provider,{value:i},e.children)}}}]);