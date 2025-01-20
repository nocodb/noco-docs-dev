"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[8637],{81852:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var t=i(74848),s=i(28453);const o={title:"Auth0",description:"Learn how to configure Auth0 as an identity provider for NocoDB.",tags:["SSO","Auth0","SAML"],keywords:["SSO","Auth0","SAML","Authentication","Identity Provider"]},c=void 0,r={id:"account-settings/authentication/SAML-SSO/auth0",title:"Auth0",description:"Learn how to configure Auth0 as an identity provider for NocoDB.",source:"@site/docs/140.account-settings/030.authentication/030.SAML-SSO/020.auth0.md",sourceDirName:"140.account-settings/030.authentication/030.SAML-SSO",slug:"/account-settings/authentication/SAML-SSO/auth0",permalink:"/account-settings/authentication/SAML-SSO/auth0",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/140.account-settings/030.authentication/030.SAML-SSO/020.auth0.md",tags:[{label:"SSO",permalink:"/tags/sso"},{label:"Auth0",permalink:"/tags/auth-0"},{label:"SAML",permalink:"/tags/saml"}],version:"current",sidebarPosition:20,frontMatter:{title:"Auth0",description:"Learn how to configure Auth0 as an identity provider for NocoDB.",tags:["SSO","Auth0","SAML"],keywords:["SSO","Auth0","SAML","Authentication","Identity Provider"]},sidebar:"tutorialSidebar",previous:{title:"Okta",permalink:"/account-settings/authentication/SAML-SSO/okta"},next:{title:"Ping Identity",permalink:"/account-settings/authentication/SAML-SSO/ping-identity"}},d={},a=[{value:"NocoDB, Retrieve <code>SAML SSO</code> Configuration details",id:"nocodb-retrieve-saml-sso-configuration-details",level:3},{value:"Auth0, Configure NocoDB as an Application",id:"auth0-configure-nocodb-as-an-application",level:3},{value:"NocoDB, Configure Auth0 as an Identity Provider",id:"nocodb-configure-auth0-as-an-identity-provider",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["For SSO Access - please reach ",(0,t.jsx)(n.a,{href:"https://cal.com/nocodb",children:(0,t.jsx)(n.strong,{children:"out to sales team"})}),"."]})}),"\n",(0,t.jsx)(n.p,{children:"This article briefs about the steps to configure Auth0 as Identity service provider for NocoDB"}),"\n",(0,t.jsxs)(n.h3,{id:"nocodb-retrieve-saml-sso-configuration-details",children:["NocoDB, Retrieve ",(0,t.jsx)(n.code,{children:"SAML SSO"})," Configuration details"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to ",(0,t.jsx)(n.code,{children:"Account Settings"})]}),"\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.code,{children:"Authentication (SSO)"})]}),"\n",(0,t.jsxs)(n.li,{children:["Click on ",(0,t.jsx)(n.code,{children:"New Provider"})," button"]}),"\n",(0,t.jsxs)(n.li,{children:["On the Popup modal, Specify a ",(0,t.jsx)(n.code,{children:"Display name"})," for the provider; note that, this name will be used to display the provider on the login page"]}),"\n",(0,t.jsxs)(n.li,{children:["Retrieve ",(0,t.jsx)(n.code,{children:"Redirect URL"})," & ",(0,t.jsx)(n.code,{children:"Audience / Entity ID"}),"; these information will be required to be configured later with the Identity Provider"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"SAML SSO Configuration",src:i(21861).A+"",width:"2420",height:"1306"}),"\n",(0,t.jsx)(n.img,{alt:"SAML SSO Configuration",src:i(88546).A+"",width:"2162",height:"1446"}),"\n",(0,t.jsx)(n.img,{alt:"SAML SSO Configuration",src:i(79051).A+"",width:"1366",height:"1614"})]}),"\n",(0,t.jsx)(n.h3,{id:"auth0-configure-nocodb-as-an-application",children:"Auth0, Configure NocoDB as an Application"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Access your ",(0,t.jsx)(n.a,{href:"https://auth0.com/",children:"Auth0 account"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["navigate to ",(0,t.jsx)(n.code,{children:"Applications"})," > ",(0,t.jsx)(n.code,{children:"Create Application"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"Create Application"})," modal,"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["choose ",(0,t.jsx)(n.code,{children:"Regular Web Application"})]}),"\n",(0,t.jsxs)(n.li,{children:["click ",(0,t.jsx)(n.code,{children:"Create"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Upon successful creation, you will be directed to the ",(0,t.jsx)(n.code,{children:"Quick Start"})," screen."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to the ",(0,t.jsx)(n.code,{children:"Addons"})," tab."]}),"\n",(0,t.jsxs)(n.li,{children:["Enable ",(0,t.jsx)(n.code,{children:"SAML2 Web App"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["On the ",(0,t.jsx)(n.code,{children:"SAML2 Web App"})," modal,"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Paste ",(0,t.jsx)(n.code,{children:"Redirect URL"})," copied in step above into ",(0,t.jsx)(n.code,{children:"Application Callback URL"})," field"]}),"\n",(0,t.jsxs)(n.li,{children:["In Settings, retain ",(0,t.jsx)(n.code,{children:"nameIdentifierProbes"})," as ",(0,t.jsx)(n.code,{children:'["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"]'}),"; remove other probes if any"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "nameIdentifierProbes": [\n    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"\n  ]\n}\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.code,{children:"Enable"})," to save the settings"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["On the ",(0,t.jsx)(n.code,{children:"Settings"})," tab,"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["move to ",(0,t.jsx)(n.code,{children:"Advanced Settings"})," > ",(0,t.jsx)(n.code,{children:"Endpoints"})," > ",(0,t.jsx)(n.code,{children:"SAML"})," section,"]}),"\n",(0,t.jsxs)(n.li,{children:["copy the SAML ",(0,t.jsx)(n.code,{children:"Metadata URL"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"nocodb-configure-auth0-as-an-identity-provider",children:"NocoDB, Configure Auth0 as an Identity Provider"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to ",(0,t.jsx)(n.code,{children:"Account Settings"})," > ",(0,t.jsx)(n.code,{children:"Authentication"})," > ",(0,t.jsx)(n.code,{children:"SAML"})]}),"\n",(0,t.jsxs)(n.li,{children:["Insert ",(0,t.jsx)(n.code,{children:"Metadata URL"})," retrieved in step above; alternatively you can configure XML directly as well"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Save"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"SAML SSO Configuration",src:i(12788).A+"",width:"1366",height:"1614"})}),"\n",(0,t.jsxs)(n.p,{children:["For Sign-in's, user should be able to now see ",(0,t.jsx)(n.code,{children:"Sign in with <SSO>"})," option."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"SAML SSO Configuration",src:i(95652).A+"",width:"1712",height:"1442"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Post sign-out, refresh page (for the first time) if you do not see ",(0,t.jsx)(n.code,{children:"Sign in with <SSO>"})," option"]})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},88546:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SAML-2-9ad2e18f3eb498cd699d0f627fb2bb65.png"},79051:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SAML-3-3f208fb861d8e91cb30ecba18c9d7ae8.png"},12788:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SAML-4-f2e6f8c1cb091f01fbc7c0901bf1fc84.png"},21861:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SSO-1-aa9135167c7a7cfb680e4fa5e50c86a4.png"},95652:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SSO-SignIn-1221ec860763be25257e0e80e24891ec.png"},28453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>r});var t=i(96540);const s={},o=t.createContext(s);function c(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);