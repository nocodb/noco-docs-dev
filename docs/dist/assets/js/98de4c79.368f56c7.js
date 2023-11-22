"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[9893],{95911:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>n,toc:()=>c});var d=r(85893),l=r(11151);const s={title:"Numeric and Logical Operators",description:"This article explains various numeric and logical operators that can be used in formula fields.",tags:["Fields","Field types","Formula"],keywords:["Fields","Field types","Formula","Create formula field","Numeric operators","Logical operators","String operators"]},t=void 0,n={id:"fields/field-types/formula/operators",title:"Numeric and Logical Operators",description:"This article explains various numeric and logical operators that can be used in formula fields.",source:"@site/docs/070.fields/040.field-types/060.formula/015.operators.md",sourceDirName:"070.fields/040.field-types/060.formula",slug:"/fields/field-types/formula/operators",permalink:"/fields/field-types/formula/operators",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/070.fields/040.field-types/060.formula/015.operators.md",tags:[{label:"Fields",permalink:"/tags/fields"},{label:"Field types",permalink:"/tags/field-types"},{label:"Formula",permalink:"/tags/formula"}],version:"current",sidebarPosition:15,frontMatter:{title:"Numeric and Logical Operators",description:"This article explains various numeric and logical operators that can be used in formula fields.",tags:["Fields","Field types","Formula"],keywords:["Fields","Field types","Formula","Create formula field","Numeric operators","Logical operators","String operators"]},sidebar:"tutorialSidebar",previous:{title:"Formula",permalink:"/fields/field-types/formula/formula"},next:{title:"Numeric functions",permalink:"/fields/field-types/formula/numeric-functions"}},o={},c=[{value:"Numeric operators",id:"numeric-operators",level:3},{value:"Logical operators",id:"logical-operators",level:3},{value:"String operators",id:"string-operators",level:3},{value:"Related Articles",id:"related-articles",level:2}];function a(e){const i={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.h3,{id:"numeric-operators",children:"Numeric operators"}),"\n",(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{children:"Operator"}),(0,d.jsx)(i.th,{children:"Sample"}),(0,d.jsx)(i.th,{children:"Description"})]})}),(0,d.jsxs)(i.tbody,{children:[(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"+"})}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"{field1} + {field2} + 2"})}),(0,d.jsx)(i.td,{children:"Addition of numeric values"})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"-"})}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"{field1} - {field2}"})}),(0,d.jsx)(i.td,{children:"Subtraction of numeric values"})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"*"})}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"{field1} * {field2}"})}),(0,d.jsx)(i.td,{children:"Multiplication of numeric values"})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"/"})}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"{field1} / {field2}"})}),(0,d.jsx)(i.td,{children:"Division of numeric values"})]})]})]}),"\n",(0,d.jsx)(i.admonition,{type:"tip",children:(0,d.jsxs)(i.p,{children:["To change the order of arithmetic operation, you can use round bracket parenthesis ().",(0,d.jsx)(i.br,{}),"\n","Example: ",(0,d.jsx)(i.code,{children:"({field1} + ({field2} * {field3}) / (3 - {field4} ))"})]})}),"\n",(0,d.jsx)(i.h3,{id:"logical-operators",children:"Logical operators"}),"\n",(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{children:"Operator"}),(0,d.jsx)(i.th,{children:"Sample"}),(0,d.jsx)(i.th,{children:"Description"})]})}),(0,d.jsxs)(i.tbody,{children:[(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"<"})}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"{field1} < {field2}"})}),(0,d.jsx)(i.td,{children:"Less than"})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:">"})}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"{field1} > {field2}"})}),(0,d.jsx)(i.td,{children:"Greater than"})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"<="})}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"{field1} <= {field2}"})}),(0,d.jsx)(i.td,{children:"Less than or equal to"})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:">="})}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"{field1} >= {field2}"})}),(0,d.jsx)(i.td,{children:"Greater than or equal to"})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"=="})}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"{field1} == {field2}"})}),(0,d.jsx)(i.td,{children:"Equal to"})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"!="})}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"{field1} != {field2}"})}),(0,d.jsx)(i.td,{children:"Not equal to"})]})]})]}),"\n",(0,d.jsx)(i.h3,{id:"string-operators",children:"String operators"}),"\n",(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{children:"Operator"}),(0,d.jsx)(i.th,{children:"Sample"}),(0,d.jsx)(i.th,{children:"Description"})]})}),(0,d.jsx)(i.tbody,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"&"})}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"{field1} & {field2}"})}),(0,d.jsx)(i.td,{children:"String concatenation"})]})})]}),"\n",(0,d.jsx)(i.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsx)(i.li,{children:(0,d.jsx)(i.a,{href:"/fields/field-types/formula/numeric-functions",children:"Numeric Functions"})}),"\n",(0,d.jsx)(i.li,{children:(0,d.jsx)(i.a,{href:"/fields/field-types/formula/string-functions",children:"String Functions"})}),"\n",(0,d.jsx)(i.li,{children:(0,d.jsx)(i.a,{href:"/fields/field-types/formula/date-functions",children:"Date Functions"})}),"\n",(0,d.jsx)(i.li,{children:(0,d.jsx)(i.a,{href:"/fields/field-types/formula/conditional-expressions",children:"Conditional Expressions"})}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,d.jsx)(i,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},11151:(e,i,r)=>{r.d(i,{Z:()=>n,a:()=>t});var d=r(67294);const l={},s=d.createContext(l);function t(e){const i=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function n(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),d.createElement(s.Provider,{value:i},e.children)}}}]);