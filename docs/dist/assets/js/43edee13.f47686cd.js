"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[3413],{95413:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var t=i(74848),o=i(28453);const s={title:"Auth0",description:"Learn how to configure Auth0 as an identity provider for NocoDB.",tags:["SSO","Auth0","OIDC"],keywords:["SSO","Auth0","OIDC","Authentication","Identity Provider"]},c=void 0,r={id:"account-settings/authentication/OIDC-SSO/auth0",title:"Auth0",description:"Learn how to configure Auth0 as an identity provider for NocoDB.",source:"@site/docs/140.account-settings/030.authentication/040.OIDC-SSO/020.auth0.md",sourceDirName:"140.account-settings/030.authentication/040.OIDC-SSO",slug:"/account-settings/authentication/OIDC-SSO/auth0",permalink:"/account-settings/authentication/OIDC-SSO/auth0",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/140.account-settings/030.authentication/040.OIDC-SSO/020.auth0.md",tags:[{label:"SSO",permalink:"/tags/sso"},{label:"Auth0",permalink:"/tags/auth-0"},{label:"OIDC",permalink:"/tags/oidc"}],version:"current",sidebarPosition:20,frontMatter:{title:"Auth0",description:"Learn how to configure Auth0 as an identity provider for NocoDB.",tags:["SSO","Auth0","OIDC"],keywords:["SSO","Auth0","OIDC","Authentication","Identity Provider"]},sidebar:"tutorialSidebar",previous:{title:"Okta",permalink:"/account-settings/authentication/OIDC-SSO/okta"},next:{title:"Ping Identity",permalink:"/account-settings/authentication/OIDC-SSO/ping-identity"}},d={},l=[{value:"NocoDB, Retrieve <code>Redirect URL</code>",id:"nocodb-retrieve-redirect-url",level:3},{value:"Auth0, Configure NocoDB as an Application",id:"auth0-configure-nocodb-as-an-application",level:3},{value:"NocoDB, Configure Auth0 as an Identity Provider",id:"nocodb-configure-auth0-as-an-identity-provider",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["For SSO Access - please reach ",(0,t.jsx)(n.a,{href:"https://cal.com/nocodb",children:(0,t.jsx)(n.strong,{children:"out to sales team"})}),"."]})}),"\n",(0,t.jsx)(n.p,{children:"This article briefs about the steps to configure Auth0 as Identity service provider for NocoDB"}),"\n",(0,t.jsxs)(n.h3,{id:"nocodb-retrieve-redirect-url",children:["NocoDB, Retrieve ",(0,t.jsx)(n.code,{children:"Redirect URL"})]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to ",(0,t.jsx)(n.code,{children:"Account Settings"})]}),"\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.code,{children:"Authentication (SSO)"})]}),"\n",(0,t.jsxs)(n.li,{children:["Click on ",(0,t.jsx)(n.code,{children:"New Provider"})," button"]}),"\n",(0,t.jsxs)(n.li,{children:["On the Popup modal, Specify a ",(0,t.jsx)(n.code,{children:"Display name"})," for the provider; note that, this name will be used to display the provider on the login page"]}),"\n",(0,t.jsxs)(n.li,{children:["Retrieve ",(0,t.jsx)(n.code,{children:"Redirect URL"}),"; this information will be required to be configured later with the Identity Provider"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"OIDC SSO Configuration",src:i(21861).A+"",width:"2420",height:"1306"}),"\n",(0,t.jsx)(n.img,{alt:"OIDC SSO Configuration",src:i(14770).A+"",width:"2162",height:"1446"}),"\n",(0,t.jsx)(n.img,{alt:"OIDC SSO Configuration",src:i(63771).A+"",width:"1446",height:"1636"})]}),"\n",(0,t.jsx)(n.h3,{id:"auth0-configure-nocodb-as-an-application",children:"Auth0, Configure NocoDB as an Application"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Access your ",(0,t.jsx)(n.a,{href:"https://auth0.com/",children:"Auth0 account"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["navigate to ",(0,t.jsx)(n.code,{children:"Applications"})," > ",(0,t.jsx)(n.code,{children:"Create Application"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["In the ",(0,t.jsx)(n.code,{children:"Create Application"})," modal,","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["choose ",(0,t.jsx)(n.code,{children:"Regular Web Application"})]}),"\n",(0,t.jsxs)(n.li,{children:["click ",(0,t.jsx)(n.code,{children:"Create"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["On Quick start screen, go to ",(0,t.jsx)(n.code,{children:"Settings"})," tab","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Copy the ",(0,t.jsx)(n.code,{children:"Client ID"})," and ",(0,t.jsx)(n.code,{children:"Client Secret"})," from the ",(0,t.jsx)(n.code,{children:"Basic Information"})," section."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Goto ",(0,t.jsx)(n.code,{children:"Application URIs"})," section","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Add the ",(0,t.jsx)(n.code,{children:"Redirect URL"})," copied from step(2) under ",(0,t.jsx)(n.code,{children:"Allowed Callback URLs"}),"."]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Save Changes"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["On the ",(0,t.jsx)(n.code,{children:"Settings"})," tab, go to the ",(0,t.jsx)(n.code,{children:"Advanced Settings"})," section and click on the ",(0,t.jsx)(n.code,{children:"Endpoints"})," tab.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Copy the ",(0,t.jsx)(n.code,{children:"OAuth Authorization URL"}),", ",(0,t.jsx)(n.code,{children:"OAuth Token URL"}),", ",(0,t.jsx)(n.code,{children:"OAuth User Info URL"})," & ",(0,t.jsx)(n.code,{children:"JSON Web Key Set URL"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"nocodb-configure-auth0-as-an-identity-provider",children:"NocoDB, Configure Auth0 as an Identity Provider"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["In NocoDB, open ",(0,t.jsx)(n.code,{children:"Account Settings"})," > ",(0,t.jsx)(n.code,{children:"Authentication"})," > ",(0,t.jsx)(n.code,{children:"OIDC"}),'. On the "Register OIDC Identity Provider" modal, insert the following information:',"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Insert ",(0,t.jsx)(n.code,{children:"Client ID"})," retrieved in step (5) above as ",(0,t.jsx)(n.code,{children:"Client ID"})]}),"\n",(0,t.jsxs)(n.li,{children:["Insert ",(0,t.jsx)(n.code,{children:"Client Secret"})," retrieved in step (5) above as ",(0,t.jsx)(n.code,{children:"Client Secret"})]}),"\n",(0,t.jsxs)(n.li,{children:["Insert ",(0,t.jsx)(n.code,{children:"OAuth Authorization URL"})," retrieved in step (7) above as ",(0,t.jsx)(n.code,{children:"Authorization URL"})]}),"\n",(0,t.jsxs)(n.li,{children:["Insert ",(0,t.jsx)(n.code,{children:"OAuth Token URL"})," retrieved in step (7) above as ",(0,t.jsx)(n.code,{children:"Token URL"})]}),"\n",(0,t.jsxs)(n.li,{children:["Insert ",(0,t.jsx)(n.code,{children:"OAuth User Info URL"})," retrieved in step (7) above as ",(0,t.jsx)(n.code,{children:"Userinfo URL"})]}),"\n",(0,t.jsxs)(n.li,{children:["Insert ",(0,t.jsx)(n.code,{children:"JSON Web Key Set URL"})," retrieved in step (7) above as ",(0,t.jsx)(n.code,{children:"JWK Set URL"})]}),"\n",(0,t.jsxs)(n.li,{children:["Set ",(0,t.jsx)(n.code,{children:"Scope"})," as ",(0,t.jsx)(n.code,{children:"openid"})," ",(0,t.jsx)(n.code,{children:"profile"})," ",(0,t.jsx)(n.code,{children:"email"})," ",(0,t.jsx)(n.code,{children:"offline_access"})]}),"\n",(0,t.jsx)(n.li,{children:'In the Username Attribute field, indicate the name of the claim that represents the user\'s email. The default value is set to "email."'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For Sign-in's, user should be able to now see ",(0,t.jsx)(n.code,{children:"Sign in with <SSO>"})," option."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"SAML SSO Configuration",src:i(95652).A+"",width:"1712",height:"1442"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Post sign-out, refresh page (for the first time) if you do not see ",(0,t.jsx)(n.code,{children:"Sign in with <SSO>"})," option"]})}),"\n",(0,t.jsxs)(n.p,{children:["For information about Auth0 API Scopes, refer ",(0,t.jsx)(n.a,{href:"https://auth0.com/docs/secure/tokens/refresh-tokens",children:"here"})]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},14770:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/OIDC-2-9ca271e8b627eaa9e44eaf8b34c010d1.png"},63771:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/OIDC-3-71b373c47b6affa93db2d447c52c77d6.png"},21861:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SSO-1-aa9135167c7a7cfb680e4fa5e50c86a4.png"},95652:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SSO-SignIn-1221ec860763be25257e0e80e24891ec.png"},28453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>r});var t=i(96540);const o={},s=t.createContext(o);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);