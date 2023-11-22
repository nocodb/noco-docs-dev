"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[1179],{23622:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>r});var l=i(85893),o=i(11151);const s={title:"Multi Select",description:"This article explains how to create & work with a Multi select field.",tags:["Fields","Field types","Select based types","Multi select"],keywords:["Fields","Field types","Select based types","Multi select","Create multi select field"]},n=void 0,d={id:"fields/field-types/select-based/multi-select",title:"Multi Select",description:"This article explains how to create & work with a Multi select field.",source:"@site/docs/070.fields/040.field-types/030.select-based/020.multi-select.md",sourceDirName:"070.fields/040.field-types/030.select-based",slug:"/fields/field-types/select-based/multi-select",permalink:"/fields/field-types/select-based/multi-select",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/070.fields/040.field-types/030.select-based/020.multi-select.md",tags:[{label:"Fields",permalink:"/tags/fields"},{label:"Field types",permalink:"/tags/field-types"},{label:"Select based types",permalink:"/tags/select-based-types"},{label:"Multi select",permalink:"/tags/multi-select"}],version:"current",sidebarPosition:20,frontMatter:{title:"Multi Select",description:"This article explains how to create & work with a Multi select field.",tags:["Fields","Field types","Select based types","Multi select"],keywords:["Fields","Field types","Select based types","Multi select","Create multi select field"]},sidebar:"tutorialSidebar",previous:{title:"Checkbox",permalink:"/fields/field-types/select-based/checkbox"},next:{title:"Rating",permalink:"/fields/field-types/select-based/rating"}},c={},r=[{value:"Create a multi select field",id:"create-a-multi-select-field",level:2},{value:"Configure color for options",id:"configure-color-for-options",level:3},{value:"Re-order options",id:"re-order-options",level:3},{value:"Edit options",id:"edit-options",level:3},{value:"Delete options",id:"delete-options",level:3},{value:"Similar select based fields",id:"similar-select-based-fields",level:2}];function a(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"Multi Select"})," fields allow you to select multiple options from a list of options. The options can be defined in the field configuration."]}),"\n",(0,l.jsx)(t.h2,{id:"create-a-multi-select-field",children:"Create a multi select field"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsxs)(t.li,{children:["Click on ",(0,l.jsx)(t.code,{children:"+"})," icon to the right of ",(0,l.jsx)(t.code,{children:"Fields header"})]}),"\n",(0,l.jsx)(t.li,{children:"On the dropdown modal, enter the field name (Optional)."}),"\n",(0,l.jsxs)(t.li,{children:["Select the field type as ",(0,l.jsx)(t.code,{children:"MultiSelect"})," from the dropdown."]}),"\n",(0,l.jsxs)(t.li,{children:["Click on ",(0,l.jsx)(t.code,{children:"Add option"})," button to add options."]}),"\n",(0,l.jsx)(t.li,{children:"Set default value for the field. The options are populated in the dropdown. Since its multi select, you can select multiple options as default value (Optional)."}),"\n",(0,l.jsxs)(t.li,{children:["Click on ",(0,l.jsx)(t.code,{children:"Save Field"})," button."]}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"image",src:i(47469).Z+"",width:"2874",height:"1554"})}),"\n",(0,l.jsx)(t.admonition,{type:"note",children:(0,l.jsxs)(t.p,{children:["Use of ",(0,l.jsx)(t.code,{children:","})," is not allowed for option values."]})}),"\n",(0,l.jsx)(t.h3,{id:"configure-color-for-options",children:"Configure color for options"}),"\n",(0,l.jsxs)(t.p,{children:["You can re-configure background color for each option. This is useful when you want to highlight certain options. For example, you can configure ",(0,l.jsx)(t.code,{children:"High"})," option to have ",(0,l.jsx)(t.code,{children:"red"})," background color.\nTo configure, click on the ",(0,l.jsx)(t.code,{children:"color"})," icon next to the option. Select the color from the color picker and click on ",(0,l.jsx)(t.code,{children:"Save Field"})," button."]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"image",src:i(76256).Z+"",width:"2876",height:"1506"})}),"\n",(0,l.jsx)(t.h3,{id:"re-order-options",children:"Re-order options"}),"\n",(0,l.jsxs)(t.p,{children:["You can re-order options by dragging and dropping the options. To re-order, click on the ",(0,l.jsx)(t.code,{children:"drag"})," icon next to the option and drag it to the desired position. Click on ",(0,l.jsx)(t.code,{children:"Save Field"})," button to save the order."]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"image",src:i(54982).Z+"",width:"2874",height:"1554"})}),"\n",(0,l.jsx)(t.admonition,{type:"info",children:(0,l.jsx)(t.p,{children:"The order defined for the options will be used in cells dropdown as well."})}),"\n",(0,l.jsx)(t.h3,{id:"edit-options",children:"Edit options"}),"\n",(0,l.jsxs)(t.p,{children:["You can rename options by clicking on the associated option text box. Click on ",(0,l.jsx)(t.code,{children:"Save Field"})," button to save the changes."]}),"\n",(0,l.jsx)(t.h3,{id:"delete-options",children:"Delete options"}),"\n",(0,l.jsxs)(t.p,{children:["You can delete options by clicking on the ",(0,l.jsx)(t.code,{children:"x"})," icon next to the option. You can undo the delete by clicking on the ",(0,l.jsx)(t.code,{children:"undo"})," icon next to the option. Click on ",(0,l.jsx)(t.code,{children:"Save Field"})," button to save the changes."]}),"\n",(0,l.jsx)(t.admonition,{type:"info",children:(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"On removing an option, the option value will be removed from all the cells."}),"\n",(0,l.jsx)(t.li,{children:"If the option value is set as default value for the field, then the default value will be removed."}),"\n"]})}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"image",src:i(81983).Z+"",width:"2878",height:"1550"})}),"\n",(0,l.jsx)(t.h2,{id:"similar-select-based-fields",children:"Similar select based fields"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"/fields/field-types/select-based/single-select",children:"Single select"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},47469:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/multiselect-d61aaaf3d7f5175b899af60f0ecd6225.png"},76256:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/options-change-colour-08270506854710a13f2945a006fd3779.png"},81983:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/options-remove-9e5b6dcf0682be419ac34c21db0b5716.png"},54982:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/options-reorder-1ee3cf6240593e4055bd781a0c116949.png"},11151:(e,t,i)=>{i.d(t,{Z:()=>d,a:()=>n});var l=i(67294);const o={},s=l.createContext(o);function n(e){const t=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),l.createElement(s.Provider,{value:t},e.children)}}}]);