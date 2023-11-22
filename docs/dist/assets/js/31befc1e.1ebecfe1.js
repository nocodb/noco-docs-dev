"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[6799],{97101:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var d=t(85893),i=t(11151);const n={title:"Date functions",description:"This article explains various date functions that can be used in formula fields.",tags:["Fields","Field types","Formula","Date & Time"],keywords:["Fields","Field types","Formula","Date & Time","Create formula field","Date functions"]},r=void 0,l={id:"fields/field-types/formula/date-functions",title:"Date functions",description:"This article explains various date functions that can be used in formula fields.",source:"@site/docs/070.fields/040.field-types/060.formula/040.date-functions.md",sourceDirName:"070.fields/040.field-types/060.formula",slug:"/fields/field-types/formula/date-functions",permalink:"/fields/field-types/formula/date-functions",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/070.fields/040.field-types/060.formula/040.date-functions.md",tags:[{label:"Fields",permalink:"/tags/fields"},{label:"Field types",permalink:"/tags/field-types"},{label:"Formula",permalink:"/tags/formula"},{label:"Date & Time",permalink:"/tags/date-time"}],version:"current",sidebarPosition:40,frontMatter:{title:"Date functions",description:"This article explains various date functions that can be used in formula fields.",tags:["Fields","Field types","Formula","Date & Time"],keywords:["Fields","Field types","Formula","Date & Time","Create formula field","Date functions"]},sidebar:"tutorialSidebar",previous:{title:"String functions",permalink:"/fields/field-types/formula/string-functions"},next:{title:"Conditional expressions",permalink:"/fields/field-types/formula/conditional-expressions"}},a={},c=[{value:"Related Articles",id:"related-articles",level:2}];function o(e){const s={a:"a",code:"code",h2:"h2",li:"li",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Name"}),(0,d.jsx)(s.th,{children:"Syntax"}),(0,d.jsx)(s.th,{children:"Sample"}),(0,d.jsx)(s.th,{children:"Output"}),(0,d.jsx)(s.th,{children:"Remark"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"NOW"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NOW()"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NOW()"})}),(0,d.jsx)(s.td,{children:"2022-05-19 17:20:43"}),(0,d.jsx)(s.td,{children:"Returns the current time and day"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:"IF(NOW() < {DATE_COL}"}),', "true", "false")`']}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:'IF(NOW() < date, "true", "false")'})}),(0,d.jsxs)(s.td,{children:["If current date is less than ",(0,d.jsx)(s.code,{children:"{DATE_COL}"}),", it returns true. Otherwise, it returns false."]}),(0,d.jsx)(s.td,{children:"DateTime fields and negative values are supported."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"DATEADD"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:'DATEADD(date | datetime, value, ["day" | "week" | "month" | "year"])'})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"DATEADD(date, 1, 'day')"})}),(0,d.jsxs)(s.td,{children:["Supposing ",(0,d.jsx)(s.code,{children:"{DATE_COL}"})," is 2022-03-14. The result is 2022-03-15."]}),(0,d.jsxs)(s.td,{children:["DateTime fields and negative values are supported. Example: ",(0,d.jsx)(s.code,{children:"DATEADD(DATE_TIME_COL, -1, 'day')"})]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"DATEADD(date, 1, 'week')"})}),(0,d.jsxs)(s.td,{children:["Supposing ",(0,d.jsx)(s.code,{children:"{DATE_COL}"})," is 2022-03-14 03:14. The result is 2022-03-21 03:14."]}),(0,d.jsxs)(s.td,{children:["DateTime fields and negative values are supported. Example: ",(0,d.jsx)(s.code,{children:"DATEADD(DATE_TIME_COL, -1, 'week')"})]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"DATEADD(date, 1, 'month')"})}),(0,d.jsxs)(s.td,{children:["Supposing ",(0,d.jsx)(s.code,{children:"{DATE_COL}"})," is 2022-03-14 03:14. The result is 2022-04-14 03:14."]}),(0,d.jsxs)(s.td,{children:["DateTime fields and negative values are supported. Example: ",(0,d.jsx)(s.code,{children:"DATEADD(DATE_TIME_COL, -1, 'month')"})]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"DATEADD(date, 1, 'year')"})}),(0,d.jsxs)(s.td,{children:["Supposing ",(0,d.jsx)(s.code,{children:"{DATE_COL}"})," is 2022-03-14 03:14. The result is 2023-03-14 03:14."]}),(0,d.jsxs)(s.td,{children:["DateTime fields and negative values are supported. Example: ",(0,d.jsx)(s.code,{children:"DATEADD(DATE_TIME_COL, -1, 'year')"})]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:'IF(NOW() < DATEADD(date,10,\'day\'), "true", "false")'})}),(0,d.jsxs)(s.td,{children:["If the current date is less than ",(0,d.jsx)(s.code,{children:"{DATE_COL}"})," plus 10 days, it returns true. Otherwise, it returns false."]}),(0,d.jsx)(s.td,{children:"DateTime fields and negative values are supported."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:'IF(NOW() < DATEADD(date,10,\'day\'), "true", "false")'})}),(0,d.jsxs)(s.td,{children:["If the current date is less than ",(0,d.jsx)(s.code,{children:"{DATE_COL}"})," plus 10 days, it returns true. Otherwise, it returns false."]}),(0,d.jsx)(s.td,{children:"DateTime fields and negative values are supported."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"DATETIME_DIFF"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:'DATETIME_DIFF(date, date, ["milliseconds" | "ms" | "seconds" | "s" | "minutes" | "m" | "hours" | "h" | "days" | "d" | "weeks" | "w" | "months" | "M" | "quarters" | "Q" | "years" | "y"])'})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:'DATETIME_DIFF("2022/10/14", "2022/10/15", "second")'})}),(0,d.jsxs)(s.td,{children:["Supposing ",(0,d.jsx)(s.code,{children:"{DATE_COL_1}"})," is 2017-08-25 and ",(0,d.jsx)(s.code,{children:"{DATE_COL_2}"})," is 2011-08-25. The result is 86400."]}),(0,d.jsx)(s.td,{children:"Compares two dates and returns the difference in the unit specified. Positive integers indicate the second date being in the past compared to the first and vice versa for negative ones."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:'WEEKDAY(NOW(), "sunday")'})}),(0,d.jsx)(s.td,{children:"If today is Monday, it returns 1"}),(0,d.jsx)(s.td,{children:"Get the week day of NOW() with the first day set as sunday"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"WEEKDAY"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"WEEKDAY(date, [startDayOfWeek])"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"WEEKDAY(NOW())"})}),(0,d.jsx)(s.td,{children:"If today is Monday, it returns 0"}),(0,d.jsx)(s.td,{children:"Returns the day of the week as an integer between 0 and 6 inclusive starting from Monday by default. You can optionally change the start day of the week by specifying in the second argument"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:'WEEKDAY(NOW(), "sunday")'})}),(0,d.jsx)(s.td,{children:"If today is Monday, it returns 1"}),(0,d.jsx)(s.td,{children:"Get the week day of NOW() with the first day set as sunday"})]})]})]}),"\n",(0,d.jsx)(s.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.a,{href:"/fields/field-types/formula/operators",children:"Numeric and Logical Operators"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.a,{href:"/fields/field-types/formula/numeric-functions",children:"Numeric Functions"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.a,{href:"/fields/field-types/formula/string-functions",children:"String Functions"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.a,{href:"/fields/field-types/formula/conditional-expressions",children:"Conditional Expressions"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>l,a:()=>r});var d=t(67294);const i={},n=d.createContext(i);function r(e){const s=d.useContext(n);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),d.createElement(n.Provider,{value:s},e.children)}}}]);