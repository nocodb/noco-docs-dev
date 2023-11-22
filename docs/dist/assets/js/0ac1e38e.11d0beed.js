"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[5305],{21164:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var n=s(85893),i=s(11151);const t={title:"String functions",description:"This article explains various string functions that can be used in formula fields.",tags:["Fields","Field types","Formula"],keywords:["Fields","Field types","Formula","Create formula field","String functions"]},d=void 0,l={id:"fields/field-types/formula/string-functions",title:"String functions",description:"This article explains various string functions that can be used in formula fields.",source:"@site/docs/070.fields/040.field-types/060.formula/030.string-functions.md",sourceDirName:"070.fields/040.field-types/060.formula",slug:"/fields/field-types/formula/string-functions",permalink:"/fields/field-types/formula/string-functions",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/070.fields/040.field-types/060.formula/030.string-functions.md",tags:[{label:"Fields",permalink:"/tags/fields"},{label:"Field types",permalink:"/tags/field-types"},{label:"Formula",permalink:"/tags/formula"}],version:"current",sidebarPosition:30,frontMatter:{title:"String functions",description:"This article explains various string functions that can be used in formula fields.",tags:["Fields","Field types","Formula"],keywords:["Fields","Field types","Formula","Create formula field","String functions"]},sidebar:"tutorialSidebar",previous:{title:"Numeric functions",permalink:"/fields/field-types/formula/numeric-functions"},next:{title:"Date functions",permalink:"/fields/field-types/formula/date-functions"}},c={},o=[{value:"String functions",id:"string-functions",level:3},{value:"Related Articles",id:"related-articles",level:2}];function h(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h3,{id:"string-functions",children:"String functions"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Syntax"}),(0,n.jsx)(r.th,{children:"Sample"}),(0,n.jsx)(r.th,{children:"Output"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"CONCAT"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"CONCAT(str1, [str2,...])"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"CONCAT({field1}, ' ', {field2})"})}),(0,n.jsx)(r.td,{children:"Concatenated string of input parameters"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"LEFT"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"LEFT(str1, n)"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"LEFT({field}, 3)"})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:"n"})," characters from the beginning of input parameter"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"LEN"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"LEN(str)"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"LEN({field})"})}),(0,n.jsx)(r.td,{children:"Input parameter character length"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"LOWER"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"LOWER(str)"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"LOWER({field})"})}),(0,n.jsx)(r.td,{children:"Lower case converted string of input parameter"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"MID"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"MID(str, position, [count])"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"MID({field}, 3, 2)"})}),(0,n.jsxs)(r.td,{children:["Alias for ",(0,n.jsx)(r.code,{children:"SUBSTR"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"REPEAT"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"REPEAT(str, count)"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"REPEAT({field}, 2)"})}),(0,n.jsx)(r.td,{children:"Specified copies of the input parameter string concatenated together"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"REPLACE"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"REPLACE(str, srchStr, rplcStr)"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"REPLACE({field}, 'int', 'num')"})}),(0,n.jsxs)(r.td,{children:["String, after replacing all occurrences of ",(0,n.jsx)(r.code,{children:"srchStr"})," with ",(0,n.jsx)(r.code,{children:"rplcStr"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"RIGHT"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"RIGHT(str, n)"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"RIGHT({field}, 3)"})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:"n"})," characters from the end of input parameter"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"SEARCH"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"SEARCH(str, srchStr)"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"SEARCH({field}, 'str')"})}),(0,n.jsxs)(r.td,{children:["Index of ",(0,n.jsx)(r.code,{children:"srchStr"})," specified if found, 0 otherwise"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"SUBSTR"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"SUBTR(str, position, [count])"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"SUBSTR({field}, 3, 2)"})}),(0,n.jsx)(r.td,{children:"Substring of length 'count' of input string, from the postition specified"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"TRIM"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"TRIM(str)"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"TRIM({field})"})}),(0,n.jsx)(r.td,{children:"Remove trailing and leading whitespaces from input parameter"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"UPPER"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"UPPER(str)"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"UPPER({field})"})}),(0,n.jsx)(r.td,{children:"Upper case converted string of input parameter"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"URL"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"URL(str)"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"URL({field})"})}),(0,n.jsx)(r.td,{children:"Convert to a hyperlink if it is a valid URL"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"REGEX_MATCH"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"REGEX_MATCH(str, pattern)"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"REGEX_MATCH({field}, 'a.*')"})}),(0,n.jsx)(r.td,{children:"Returns 1 if the input text matches a regular expression or 0 if it does not"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"REGEX_EXTRACT"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"REGEX_EXTRACT(str, pattern)"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"REGEX_MATCH({field}, 'a.*')"})}),(0,n.jsx)(r.td,{children:"Returns the first match of a regular expression in a string"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"REGEX_REPLACE"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"REGEX_REPLACE(str, pattern, replacer)"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"REGEX_MATCH({field}, 'a.*', '---')"})}),(0,n.jsx)(r.td,{children:"Replaces all matches of a regular expression in a string with a replacement string"})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/fields/field-types/formula/operators",children:"Numeric and Logical Operators"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/fields/field-types/formula/numeric-functions",children:"Numeric Functions"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/fields/field-types/formula/date-functions",children:"Date Functions"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/fields/field-types/formula/conditional-expressions",children:"Conditional Expressions"})}),"\n"]})]})}function a(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,r,s)=>{s.d(r,{Z:()=>l,a:()=>d});var n=s(67294);const i={},t=n.createContext(i);function d(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);