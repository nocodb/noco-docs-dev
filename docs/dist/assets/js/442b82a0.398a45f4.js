"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[8650],{16609:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(74848),s=n(28453);const i={title:"Docker",description:"Docker installation - takes about three minutes!",tags:["Open Source"],keywords:["NocoDB installation","NocoDB docker installation","NocoDB prerequisites"]},r=void 0,l={id:"getting-started/self-hosted/installation/docker-install",title:"Docker",description:"Docker installation - takes about three minutes!",source:"@site/docs/020.getting-started/050.self-hosted/010.installation/020.docker-install.md",sourceDirName:"020.getting-started/050.self-hosted/010.installation",slug:"/getting-started/self-hosted/installation/docker-install",permalink:"/getting-started/self-hosted/installation/docker-install",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/020.getting-started/050.self-hosted/010.installation/020.docker-install.md",tags:[{label:"Open Source",permalink:"/tags/open-source"}],version:"current",sidebarPosition:20,frontMatter:{title:"Docker",description:"Docker installation - takes about three minutes!",tags:["Open Source"],keywords:["NocoDB installation","NocoDB docker installation","NocoDB prerequisites"]},sidebar:"tutorialSidebar",previous:{title:"Auto-Upstall",permalink:"/getting-started/self-hosted/installation/auto-upstall"},next:{title:"Docker Compose",permalink:"/getting-started/self-hosted/installation/docker-compose"}},a={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation Steps",id:"installation-steps",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Installation Video",id:"installation-video",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components},{TabItem:n,Tabs:i}=t;return n||p("TabItem",!0),i||p("Tabs",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Docker installation - takes about three minutes!"}),"\n",(0,o.jsx)(t.p,{children:"Docker provides an easy way to install and run NocoDB. Follow these steps to get NocoDB up and running using Docker."}),"\n",(0,o.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://www.docker.com/get-started",children:"Docker"})}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"installation-steps",children:"Installation Steps"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Choose your preferred database:"}),"\n"]}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsx)(n,{value:"sqlite",label:"SQLite",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'docker run -d --name nocodb \\\n-v "$(pwd)"/nocodb:/usr/app/data/ \\\n-p 8080:8080 \\\nnocodb/nocodb:latest\n'})})}),(0,o.jsx)(n,{value:"postgres",label:"Postgres",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'docker run -d --name nocodb-postgres \\\n-v "$(pwd)"/nocodb:/usr/app/data/ \\\n-p 8080:8080 \\\n-e NC_DB="pg://host.docker.internal:5432?u=root&p=password&d=d1" \\\n-e NC_AUTH_JWT_SECRET="569a1821-0a93-45e8-87ab-eb857f20a010" \\\nnocodb/nocodb:latest\n'})})})]}),"\n",(0,o.jsxs)(t.ol,{start:"2",children:["\n",(0,o.jsxs)(t.li,{children:["Once the container is running, you can access NocoDB by opening ",(0,o.jsx)(t.a,{href:"http://localhost:8080",children:"http://localhost:8080"})," in your web browser."]}),"\n"]}),"\n",(0,o.jsxs)(t.admonition,{type:"tip",children:[(0,o.jsxs)(t.p,{children:["To persist data, always mount a volume at ",(0,o.jsx)(t.code,{children:"/usr/app/data/"}),". Without this, your data will be lost when the container is removed."]}),(0,o.jsx)(t.p,{children:"For versions prior to 0.10.6, mount the volume at /usr/src/app."})]}),"\n",(0,o.jsx)(t.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"If you can't access NocoDB after installation, check if the Docker container is running:"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"docker ps\n"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"If the container is not running, check the logs for any errors:"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"docker logs nocodb\n"})}),"\n",(0,o.jsx)(t.h2,{id:"installation-video",children:"Installation Video"}),"\n",(0,o.jsx)("iframe",{width:"100%",height:"500",src:"https://www.youtube.com/embed/K-UEecQyiOk",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}function p(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var o=n(96540);const s={},i=o.createContext(s);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);