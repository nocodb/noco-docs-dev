"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[256],{31049:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=d(74848),l=d(28453);const r={title:"Actions on record",description:"Learn how to perform actions (edit, duplicate, delete, etc) on a record in NocoDB.",tags:["Records","Delete","Edit","Duplicate","Shortcuts"],keywords:["NocoDB delete record","delete record","delete row","delete rows"]},i=void 0,s={id:"records/actions-on-record",title:"Actions on record",description:"Learn how to perform actions (edit, duplicate, delete, etc) on a record in NocoDB.",source:"@site/docs/080.records/070.actions-on-record.md",sourceDirName:"080.records",slug:"/records/actions-on-record",permalink:"/records/actions-on-record",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/080.records/070.actions-on-record.md",tags:[{label:"Records",permalink:"/tags/records"},{label:"Delete",permalink:"/tags/delete"},{label:"Edit",permalink:"/tags/edit"},{label:"Duplicate",permalink:"/tags/duplicate"},{label:"Shortcuts",permalink:"/tags/shortcuts"}],version:"current",sidebarPosition:70,frontMatter:{title:"Actions on record",description:"Learn how to perform actions (edit, duplicate, delete, etc) on a record in NocoDB.",tags:["Records","Delete","Edit","Duplicate","Shortcuts"],keywords:["NocoDB delete record","delete record","delete row","delete rows"]},sidebar:"tutorialSidebar",previous:{title:"Expanded record",permalink:"/records/expand-record"},next:{title:"Views",permalink:"/category/views"}},o={},c=[{value:"Keyboard navigation within Grid view",id:"keyboard-navigation-within-grid-view",level:2},{value:"Keyboard shortcuts for cell navigation",id:"keyboard-shortcuts-for-cell-navigation",level:3},{value:"Update Record",id:"update-record",level:3},{value:"Bulk Update Records  \u2601",id:"bulk-update-records--",level:3},{value:"Delete Record (Single)",id:"delete-record-single",level:3},{value:"Delete Record (Bulk)",id:"delete-record-bulk",level:3},{value:"Drag and Drop to reorder records",id:"drag-and-drop-to-reorder-records",level:3}];function a(e){const t={admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"keyboard-navigation-within-grid-view",children:"Keyboard navigation within Grid view"}),"\n",(0,n.jsx)(t.p,{children:"A selected cell can be in one of the following states:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Select"})," state : A single click on the cell selects the cell. When in this state, arrow keys can be used to navigate to adjacent cells."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Edit"})," state : A double click on the cell puts the cell in edit state. Cursor can be moved within the cell using arrow keys."]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Double-click on a cell to put it in edit state directly."}),"\n",(0,n.jsxs)(t.li,{children:["From Select state, press ",(0,n.jsx)(t.code,{children:"Enter"})," key to enter edit state."]}),"\n",(0,n.jsxs)(t.li,{children:["Press ",(0,n.jsx)(t.code,{children:"Esc"})," key to exit edit state."]}),"\n",(0,n.jsxs)(t.li,{children:["From Edit state, press ",(0,n.jsx)(t.code,{children:"Enter"})," key to save the changes."]}),"\n"]})}),"\n",(0,n.jsxs)(t.p,{children:["Edit state for some cells will be a picker. For example, a cell with ",(0,n.jsx)(t.code,{children:"Single Select"})," field type will have a picker with options to choose from. In such cases, arrow keys can be used to navigate between options."]}),"\n",(0,n.jsx)(t.h3,{id:"keyboard-shortcuts-for-cell-navigation",children:"Keyboard shortcuts for cell navigation"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Key"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Behaviour"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{style:{textAlign:"right"},children:[(0,n.jsx)(t.code,{children:"\u2318"})," ",(0,n.jsx)(t.code,{children:"\u2191"})]}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Jump to first record in this field (in same page)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{style:{textAlign:"right"},children:[(0,n.jsx)(t.code,{children:"\u2318"})," ",(0,n.jsx)(t.code,{children:"\u2193"})]}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Jump to last record in this field (in same page)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{style:{textAlign:"right"},children:[(0,n.jsx)(t.code,{children:"\u2318"})," ",(0,n.jsx)(t.code,{children:"C"})]}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Copy cell contents to clipboard"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{style:{textAlign:"right"},children:[(0,n.jsx)(t.code,{children:"\u2318"})," ",(0,n.jsx)(t.code,{children:"V"})]}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Paste clipboard contents to cell"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.code,{children:"Enter"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Switch cell in focus to EDIT mode; opens modal/picker if cell is associated with one"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.code,{children:"Esc"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Exit cell EDIT mode"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.code,{children:"Delete"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Clear cell"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.code,{children:"Space"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Expand current record"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{style:{textAlign:"right"},children:[(0,n.jsx)(t.code,{children:"\u2190"})," ",(0,n.jsx)(t.code,{children:"\u2192"})," ",(0,n.jsx)(t.code,{children:"\u2191"})," ",(0,n.jsx)(t.code,{children:"\u2193"})]}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"General cell navigation : left, right, top, bottom"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.code,{children:"Tab"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Move to next cell horizontally; if on last cell, move to beginning of next record"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"update-record",children:"Update Record"}),"\n",(0,n.jsx)(t.p,{children:"You can start editing by any of the following methods"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Double-click on cell to edit"}),"\n",(0,n.jsx)(t.li,{children:"Click on cell and start typing (this way it will clear the previous content)"}),"\n",(0,n.jsx)(t.li,{children:"Click on cell and press enter to start editing"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"And it will automatically save on blur event or if inactive."}),"\n",(0,n.jsx)(t.h3,{id:"bulk-update-records--",children:"Bulk Update Records  \u2601"}),"\n",(0,n.jsx)(t.p,{children:"You can bulk update records by"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Selecting multiple records that you wish to update together and then"}),"\n",(0,n.jsxs)(t.li,{children:["Right-click on the index field area (first column on the grid view) and then select ",(0,n.jsx)(t.code,{children:"Bulk Update records"})," option from the context menu. This will open ",(0,n.jsx)(t.code,{children:"Bulk update"})," modal.\nOn the bulk update modal,"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Fields area"})," : Select the fields that you want to update."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Selected fields area"})," : Enter the new value for the selected fields."]}),"\n",(0,n.jsxs)(t.li,{children:["Click on the ",(0,n.jsx)(t.code,{children:"Bulk Update all"})," button"]}),"\n",(0,n.jsxs)(t.li,{children:["A confirmation dialog will be displayed. Click on ",(0,n.jsx)(t.code,{children:"Confirm"})," to update the records."]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"This action cannot be undone."})})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Bulk Update",src:d(94259).A+"",width:"2876",height:"1108"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Bulk Update",src:d(19768).A+"",width:"2878",height:"1024"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Bulk Update",src:d(92481).A+"",width:"2876",height:"954"})}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["You can drag drop required fields from the ",(0,n.jsx)(t.code,{children:"Fields area"})," to the ",(0,n.jsx)(t.code,{children:"Selected fields area"})," & vice versa.",(0,n.jsx)(t.br,{}),"\n","You can update multiple fields at a time."]})}),"\n",(0,n.jsx)(t.h3,{id:"delete-record-single",children:"Delete Record (Single)"}),"\n",(0,n.jsxs)(t.p,{children:["Right-click on record and then from the cell context menu, select ",(0,n.jsx)(t.code,{children:"Delete Record"})," option."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"delete row -1",src:d(90773).A+"",width:"2308",height:"940"})}),"\n",(0,n.jsx)(t.h3,{id:"delete-record-bulk",children:"Delete Record (Bulk)"}),"\n",(0,n.jsxs)(t.p,{children:["Select multiple records by using the checkbox in first column and then ",(0,n.jsx)(t.code,{children:"Delete Selected Records"})," options from the right click context menu."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"delete row 2",src:d(30124).A+"",width:"2306",height:"858"})}),"\n",(0,n.jsx)(t.h3,{id:"drag-and-drop-to-reorder-records",children:"Drag and Drop to reorder records"}),"\n",(0,n.jsx)(t.p,{children:"You can reorder records by dragging and dropping them to the desired position. Use the drag icon on the left side of the record to drag and drop."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"drag drop",src:d(16339).A+"",width:"2092",height:"1236"})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Bulk record drag-drop reordering is not supported currently."}),"\n",(0,n.jsx)(t.li,{children:"Drag-drop is not supported in Group-by view currently."}),"\n"]})})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},94259:(e,t,d)=>{d.d(t,{A:()=>n});const n=d.p+"assets/images/bulk-update-1-abf0bea8ffcee3689a6b4c7bc912a92b.png"},19768:(e,t,d)=>{d.d(t,{A:()=>n});const n=d.p+"assets/images/bulk-update-2-8ad8314489b9cb76d57cdddddcf2ab85.png"},92481:(e,t,d)=>{d.d(t,{A:()=>n});const n=d.p+"assets/images/bulk-update-3-e8c66d72a7fdbe1247482ba2021aa0f5.png"},30124:(e,t,d)=>{d.d(t,{A:()=>n});const n=d.p+"assets/images/delete-row-bulk-70240cbb8e8a5e84e368e9ff11b6e5c0.png"},90773:(e,t,d)=>{d.d(t,{A:()=>n});const n=d.p+"assets/images/delete-row-2ef2b7c113b757dabf1542106e79f2db.png"},16339:(e,t,d)=>{d.d(t,{A:()=>n});const n=d.p+"assets/images/drag-drop-e9f02cf505c9e6d1c7487720d4d0501a.png"},28453:(e,t,d)=>{d.d(t,{R:()=>i,x:()=>s});var n=d(96540);const l={},r=n.createContext(l);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);