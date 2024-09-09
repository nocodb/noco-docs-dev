"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[9845],{96581:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=t(74848),i=t(28453);const o={title:"Auto-Upstall",description:"Automatically install NocoDB with SSL in under 2 Minutes \u2014 The Ultimate Guide.",tags:["Open Source"],keywords:["NocoDB installation","NocoDB one command installation","NocoDB prerequisites"]},l="Auto-Upstall",a={id:"getting-started/self-hosted/installation/auto-upstall",title:"Auto-Upstall",description:"Automatically install NocoDB with SSL in under 2 Minutes \u2014 The Ultimate Guide.",source:"@site/docs/020.getting-started/050.self-hosted/010.installation/010.auto-upstall.md",sourceDirName:"020.getting-started/050.self-hosted/010.installation",slug:"/getting-started/self-hosted/installation/auto-upstall",permalink:"/getting-started/self-hosted/installation/auto-upstall",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/020.getting-started/050.self-hosted/010.installation/010.auto-upstall.md",tags:[{label:"Open Source",permalink:"/tags/open-source"}],version:"current",sidebarPosition:10,frontMatter:{title:"Auto-Upstall",description:"Automatically install NocoDB with SSL in under 2 Minutes \u2014 The Ultimate Guide.",tags:["Open Source"],keywords:["NocoDB installation","NocoDB one command installation","NocoDB prerequisites"]},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/category/installation"},next:{title:"Docker",permalink:"/getting-started/self-hosted/installation/docker-install"}},r={},c=[{value:"Notes on Auto-Upstall",id:"notes-on-auto-upstall",level:2},{value:"Quick installation guide",id:"quick-installation-guide",level:2},{value:"Detailed installation guide",id:"detailed-installation-guide",level:2},{value:"Installation management menu",id:"installation-management-menu",level:2},{value:"Additional Notes",id:"additional-notes",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"auto-upstall",children:"Auto-Upstall"}),"\n",(0,s.jsx)(e.p,{children:"Auto-upstall is the fastest way to install NocoDB with SSL, auto-upgrades with every release, and auto-renews your SSL \u2014 all within just 2 minutes!"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"bash <(curl -sSL http://install.nocodb.com/noco.sh) <(mktemp)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"notes-on-auto-upstall",children:"Notes on Auto-Upstall"}),"\n",(0,s.jsx)(e.p,{children:"Auto-upstall is a single command that : \ud83d\udd4a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\ud83d\udc33 First Automatically installs all pre-requisites on your linux based server (docker, docker-compose)"}),"\n",(0,s.jsxs)(e.li,{children:["\ud83d\ude80 Then automatically installs","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\ud83c\uddf3 NocoDB,"}),"\n",(0,s.jsx)(e.li,{children:"\ud83d\udc18 PostgreSQL,"}),"\n",(0,s.jsx)(e.li,{children:"\u26a1 Redis,"}),"\n",(0,s.jsx)(e.li,{children:"\ud83d\uddc4 Minio,"}),"\n",(0,s.jsx)(e.li,{children:"\ud83c\udf10 Traefik gateway."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"\ud83d\udd04 Also automatically upgrades NocoDB when new versions are available."}),"\n",(0,s.jsx)(e.li,{children:"\ud83d\udd12 And finally automatically sets up SSL that auto-renews!"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"quick-installation-guide",children:"Quick installation guide"}),"\n",(0,s.jsx)(e.p,{children:"This is quick walkthrough of how to install NocoDB using auto-upstall script."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Step 1"})," :  \ud83d\udd10 SSH into your server (Linux-based system - Ubuntu, Debian, CentOS etc.)"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Step 2"})," :  \ud83d\ude80 Run the below command  :","\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"bash <(curl -sSL http://install.nocodb.com/noco.sh) <(mktemp)\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Step 3"})," :  \ud83c\udf10 Open your browser and go to URL","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["For \ud83c\udf0d HTTP: ",(0,s.jsx)(e.code,{children:"http://<your-domain-or-ip>"})]}),"\n",(0,s.jsxs)(e.li,{children:["For \ud83d\udd12 HTTPS: ",(0,s.jsx)(e.code,{children:"https://<your-domain-or-ip>"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Step 4"})," :  \ud83d\udc26 Don't keep the command a secret. Tweet how easy it is. This step is a must!"]}),"\n"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["install.nocodb.com/noco.sh script can be found ",(0,s.jsx)(e.a,{href:"https://raw.githubusercontent.com/nocodb/nocodb/develop/docker-compose/1_Auto_Upstall/noco.sh",children:"here in our github"})]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"detailed-installation-guide",children:"Detailed installation guide"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Run the following command in your terminal:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"bash <(curl -sSL http://install.nocodb.com/noco.sh) <(mktemp)\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Follow the installation prompts"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Domain name"}),": Enter the IP address or domain name for your NocoDB instance."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"SSL configuration"}),": If you entered a valid domain name, you'll be asked if you want to configure SSL."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Advanced options"}),": You can choose to show advanced options or use default settings."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Advanced options (if chosen):"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Choose between community (CE) or enterprise edition (EE)"}),"\n",(0,s.jsx)(e.li,{children:"Enter license key (for EE)"}),"\n",(0,s.jsx)(e.li,{children:"Enable/disable Redis for caching"}),"\n",(0,s.jsx)(e.li,{children:"Enable/disable Minio for file storage"}),"\n",(0,s.jsx)(e.li,{children:"Configure Minio domain and SSL"}),"\n",(0,s.jsx)(e.li,{children:"Enable/disable Watchtower for automatic updates"}),"\n",(0,s.jsx)(e.li,{children:"Set the number of NocoDB instances to run"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Wait for installation to complete  - takes about 2-5 minutes.\nOnce done, you'll see a success message with the URL to access your NocoDB instance."}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Access NocoDB",(0,s.jsx)(e.br,{}),"\n","Open the URL provided in your browser to access NocoDB."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Congratulations! You should now have a working installation of NocoDB. Enjoy using your new no-code database platform!"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"installation-management-menu",children:"Installation management menu"}),"\n",(0,s.jsx)(e.p,{children:"After installation, you'll be asked if you want to start the management menu. This menu allows you to:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Start NocoDB"}),"\n",(0,s.jsx)(e.li,{children:"Stop NocoDB"}),"\n",(0,s.jsx)(e.li,{children:"View logs"}),"\n",(0,s.jsx)(e.li,{children:"Restart NocoDB"}),"\n",(0,s.jsx)(e.li,{children:"Upgrade NocoDB"}),"\n",(0,s.jsx)(e.li,{children:"Scale NocoDB (change the number of running instances)"}),"\n",(0,s.jsx)(e.li,{children:"Monitor NocoDB (view Docker stats)"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"additional-notes",children:"Additional Notes"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"The script creates an update.sh file in the installation directory. You can use this to update NocoDB in the future."}),"\n",(0,s.jsx)(e.li,{children:"If you encounter any issues during installation, check the logs for error messages."}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>a});var s=t(96540);const i={},o=s.createContext(i);function l(n){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);