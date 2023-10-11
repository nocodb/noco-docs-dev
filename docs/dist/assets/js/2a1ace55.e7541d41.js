"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[4829],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(a),m=n,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return a?o.createElement(g,r(r({ref:t},p),{},{components:a})):o.createElement(g,r({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:n,r[1]=i;for(var s=2;s<l;s++)r[s]=a[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},12484:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>b,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var o=a(87462),n=(a(67294),a(3905));const l={title:"Installation",description:"Simple installation - takes about three minutes!",tags:["Open Source"],keywords:["NocoDB installation","NocoDB docker installation","NocoDB nodejs installation","NocoDB quick try","NocoDB prerequisites"]},r=void 0,i={unversionedId:"getting-started/self-hosted/installation",id:"getting-started/self-hosted/installation",title:"Installation",description:"Simple installation - takes about three minutes!",source:"@site/docs/020.getting-started/050.self-hosted/010.installation.md",sourceDirName:"020.getting-started/050.self-hosted",slug:"/getting-started/self-hosted/installation",permalink:"/getting-started/self-hosted/installation",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/020.getting-started/050.self-hosted/010.installation.md",tags:[{label:"Open Source",permalink:"/tags/open-source"}],version:"current",sidebarPosition:10,frontMatter:{title:"Installation",description:"Simple installation - takes about three minutes!",tags:["Open Source"],keywords:["NocoDB installation","NocoDB docker installation","NocoDB nodejs installation","NocoDB quick try","NocoDB prerequisites"]},sidebar:"tutorialSidebar",previous:{title:"Keyboard shortcuts",permalink:"/getting-started/keyboard-shortcuts"},next:{title:"Environment variables",permalink:"/getting-started/self-hosted/environment-variables"}},c={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick try",id:"quick-try",level:2},{value:"Docker",id:"docker",level:3},{value:"Docker Compose",id:"docker-compose",level:3},{value:"NPX",id:"npx",level:3},{value:"Preview:",id:"preview",level:4},{value:"Homebrew",id:"homebrew",level:3},{value:"Executables",id:"executables",level:3},{value:"Node Application",id:"node-application",level:3},{value:"AWS ECS (Fargate)",id:"aws-ecs-fargate",level:3},{value:"Create ECS Cluster",id:"create-ecs-cluster",level:4},{value:"Create Log group",id:"create-log-group",level:4},{value:"Create ECS Task Definiton",id:"create-ecs-task-definiton",level:4},{value:"Create ECS Service",id:"create-ecs-service",level:4},{value:"GCP (Cloud Run)",id:"gcp-cloud-run",level:3},{value:"Pull NocoDB Image on Cloud Shell",id:"pull-nocodb-image-on-cloud-shell",level:4},{value:"Deploy NocoDB on Cloud Run",id:"deploy-nocodb-on-cloud-run",level:4},{value:"DigitalOcean (App)",id:"digitalocean-app",level:3},{value:"Create Apps",id:"create-apps",level:4},{value:"Choose Source: Docker Hub",id:"choose-source-docker-hub",level:4},{value:"Choose Source: Repository",id:"choose-source-repository",level:4},{value:"Optional Additional Configurations",id:"optional-additional-configurations",level:4},{value:"Name your web service",id:"name-your-web-service",level:4},{value:"Finalize and Launch",id:"finalize-and-launch",level:4},{value:"Cloudron",id:"cloudron",level:3},{value:"Navigate to App Store",id:"navigate-to-app-store",level:4},{value:"Search NocoDB",id:"search-nocodb",level:4},{value:"Click Install",id:"click-install",level:4},{value:"Configure NocoDB",id:"configure-nocodb",level:4},{value:"Go to My App and Launch NocoDB",id:"go-to-my-app-and-launch-nocodb",level:4},{value:"CapRover",id:"caprover",level:3},{value:"Login and Click One-Click Apps / Databases",id:"login-and-click-one-click-apps--databases",level:4},{value:"Search NocoDB",id:"search-nocodb-1",level:4},{value:"Configure NocoDB and Deploy",id:"configure-nocodb-and-deploy",level:4},{value:"Railway",id:"railway",level:3},{value:"Navigate to Templates",id:"navigate-to-templates",level:4},{value:"Configure NocoDB and Deploy",id:"configure-nocodb-and-deploy-1",level:4},{value:"FreeBSD / FreeNAS / TrueNAS Jail",id:"freebsd--freenas--truenas-jail",level:3},{value:"Sample Demos",id:"sample-demos",level:2},{value:"Code Sandbox",id:"code-sandbox",level:3},{value:"Docker deploying with one command",id:"docker-deploying-with-one-command",level:3},{value:"Using NPX",id:"using-npx",level:3}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},d=p("Tabs"),u=p("TabItem"),m={toc:s},g="wrapper";function b(e){let{components:t,...a}=e;return(0,n.kt)(g,(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Simple installation - takes about three minutes!"),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.docker.com/get-started"},"Docker")," or ",(0,n.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download"},"Node.js")," ( > v18.x )\n")),(0,n.kt)("h2",{id:"quick-try"},"Quick try"),(0,n.kt)("h3",{id:"docker"},"Docker"),(0,n.kt)("p",null,"If you are a Docker user, you may try this way!"),(0,n.kt)(d,{mdxType:"Tabs"},(0,n.kt)(u,{value:"sqlite",label:"SQLite",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'docker run -d --name nocodb \\\n-v "$(pwd)"/nocodb:/usr/app/data/ \\\n-p 8080:8080 \\\nnocodb/nocodb:latest\n'))),(0,n.kt)(u,{value:"mysql",label:"MySQL",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'docker run -d --name nocodb-mysql \\\n-v "$(pwd)"/nocodb:/usr/app/data/ \\\n-p 8080:8080 \\\n-e NC_DB="mysql2://host.docker.internal:3306?u=root&p=password&d=d1" \\\n-e NC_AUTH_JWT_SECRET="569a1821-0a93-45e8-87ab-eb857f20a010" \\\nnocodb/nocodb:latest\n'))),(0,n.kt)(u,{value:"postgres",label:"Postgres",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'docker run -d --name nocodb-postgres \\\n-v "$(pwd)"/nocodb:/usr/app/data/ \\\n-p 8080:8080 \\\n-e NC_DB="pg://host.docker.internal:5432?u=root&p=password&d=d1" \\\n-e NC_AUTH_JWT_SECRET="569a1821-0a93-45e8-87ab-eb857f20a010" \\\nnocodb/nocodb:latest\n'))),(0,n.kt)(u,{value:"sqlserver",label:"SQL Server",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'docker run -d --name nocodb-mssql \\\n-v "$(pwd)"/nocodb:/usr/app/data/ \\\n-p 8080:8080 \\\n-e NC_DB="mssql://host.docker.internal:1433?u=root&p=password&d=d1" \\\n-e NC_AUTH_JWT_SECRET="569a1821-0a93-45e8-87ab-eb857f20a010" \\\nnocodb/nocodb:latest\n')))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"To persist data in docker you can mount volume at ",(0,n.kt)("inlineCode",{parentName:"p"},"/usr/app/data/")," since 0.10.6. In older version mount at ",(0,n.kt)("inlineCode",{parentName:"p"},"/usr/src/app"),". Otherwise your data will be lost after recreating the container.")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If you plan to input some special characters, you may need to change the character set and collation yourself when creating the database. Please check out the examples for ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/nocodb/nocodb/issues/1340#issuecomment-1049481043"},"MySQL Docker"),".")),(0,n.kt)("h3",{id:"docker-compose"},"Docker Compose"),(0,n.kt)("p",null,"We provide different docker-compose.yml files under ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/nocodb/nocodb/tree/master/docker-compose"},"this directory"),". Here are some examples."),(0,n.kt)(d,{mdxType:"Tabs"},(0,n.kt)(u,{value:"mysql",label:"MySQL",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/nocodb/nocodb\ncd nocodb/docker-compose/mysql\ndocker-compose up -d\n"))),(0,n.kt)(u,{value:"postgres",label:"Postgres",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/nocodb/nocodb\ncd nocodb/docker-compose/pg\ndocker-compose up -d\n"))),(0,n.kt)(u,{value:"sqlserver",label:"SQL Server",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/nocodb/nocodb\ncd nocodb/docker-compose/mssql\ndocker-compose up -d\n")))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"To persist data in docker you can mount volume at ",(0,n.kt)("inlineCode",{parentName:"p"},"/usr/app/data/")," since 0.10.6. In older version mount at ",(0,n.kt)("inlineCode",{parentName:"p"},"/usr/src/app"),".\nIf you plan to input some special characters, you may need to change the character set and collation yourself when creating the database. Please check out the examples for ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/nocodb/nocodb/issues/1313#issuecomment-1046625974"},"MySQL Docker Compose"),".")),(0,n.kt)("h3",{id:"npx"},"NPX"),(0,n.kt)("p",null,"You can run below command if you need an interactive configuration."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-nocodb-app\n")),(0,n.kt)("h4",{id:"preview"},"Preview:"),(0,n.kt)("img",{width:"587",alt:"image",src:"https://user-images.githubusercontent.com/35857179/161526235-5ee0d592-0105-4a57-aa53-b1048dca6aad.png"}),(0,n.kt)("h3",{id:"homebrew"},"Homebrew"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"brew tap nocodb/nocodb\nbrew install nocodb\nnocodb\n")),(0,n.kt)("h3",{id:"executables"},"Executables"),(0,n.kt)("p",null,"You can download executables directly and run without any extra dependency. Use the right command based on your platform."),(0,n.kt)(d,{mdxType:"Tabs"},(0,n.kt)(u,{value:"MacOS (x64)",label:"MacOS (x64)",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://get.nocodb.com/macos-x64 -o nocodb -L \\\n  && chmod +x nocodb \\\n  && ./nocodb\n"))),(0,n.kt)(u,{value:"MacOS (arm64)",label:"MacOS (arm64)",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://get.nocodb.com/macos-arm64 -o nocodb -L \\\n  && chmod +x nocodb \\\n  && ./nocodb\n"))),(0,n.kt)(u,{value:"Linux (x64)",label:"Linux (x64)",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://get.nocodb.com/linux-x64 -o nocodb -L \\\n  && chmod +x nocodb \\\n  && ./nocodb\n"))),(0,n.kt)(u,{value:"Linux (arm64)",label:"Linux (arm64)",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://get.nocodb.com/linux-arm64 -o nocodb -L \\\n  && chmod +x nocodb \\\n  && ./nocodb\n"))),(0,n.kt)(u,{value:"Windows (x64)",label:"Windows (x64)",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"iwr http://get.nocodb.com/win-x64.exe\n.\\Noco-win-x64.exe\n"))),(0,n.kt)(u,{value:"Windows (arm64)",label:"Windows (arm64)",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"iwr http://get.nocodb.com/win-arm64.exe\n.\\Noco-win-arm64.exe\n")))),(0,n.kt)("h3",{id:"node-application"},"Node Application"),(0,n.kt)("p",null,"We provide a simple NodeJS Application for getting started."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/nocodb/nocodb-seed\ncd nocodb-seed\nnpm install\nnpm start\n")),(0,n.kt)("h3",{id:"aws-ecs-fargate"},"AWS ECS (Fargate)"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Click to Expand"),(0,n.kt)("h4",{id:"create-ecs-cluster"},"Create ECS Cluster"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"aws ecs create-cluster \\\n--cluster-name <YOUR_ECS_CLUSTER>\n")),(0,n.kt)("h4",{id:"create-log-group"},"Create Log group"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"aws logs create-log-group \\\n--log-group-name /ecs/<YOUR_APP_NAME>/<YOUR_CONTAINER_NAME>\n")),(0,n.kt)("h4",{id:"create-ecs-task-definiton"},"Create ECS Task Definiton"),(0,n.kt)("p",null,"  Every time you create it, it will add a new version. If it is not existing, the version will be 1. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'aws ecs register-task-definition \\\n--cli-input-json "file://./<YOUR_TASK_DEF_NAME>.json"\n')),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"This json file defines the container specification. You can define secrets such as NC_DB and environment variables here.")),(0,n.kt)("p",null,"  Here's the sample Task Definition"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "family": "nocodb-sample-task-def",\n  "networkMode": "awsvpc",\n  "containerDefinitions": [{\n    "name": "<YOUR_CONTAINER_NAME>",\n    "image": "nocodb/nocodb:latest",\n    "essential": true,\n    "logConfiguration": {\n      "logDriver": "awslogs",\n      "options": {\n        "awslogs-group": "/ecs/<YOUR_APP_NAME>/<YOUR_CONTAINER_NAME>",\n        "awslogs-region": "<YOUR_AWS_REGION>",\n        "awslogs-stream-prefix": "ecs"\n      }\n    },\n    "secrets": [{\n      "name": "<YOUR_SECRETS_NAME>",\n      "valueFrom": "<YOUR_SECRET_ARN>"\n    }],\n    "environment": [{\n      "name": "<YOUR_ENV_VARIABLE_NAME>",\n      "value": "<YOUR_ENV_VARIABLE_VALUE>"\n    }],\n    "portMappings": [{\n      "containerPort": 8080,\n      "hostPort": 8080,\n      "protocol": "tcp"\n    }]\n  }],\n  "requiresCompatibilities": [\n    "FARGATE"\n  ],\n  "cpu": "256",\n  "memory": "512",\n  "executionRoleArn": "<YOUR_ECS_EXECUTION_ROLE_ARN>",\n  "taskRoleArn": "<YOUR_ECS_TASK_ROLE_ARN>"\n}\n')),(0,n.kt)("h4",{id:"create-ecs-service"},"Create ECS Service"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'aws ecs create-service \\\n--cluster <YOUR_ECS_CLUSTER> \\\n--service-name  <YOUR_SERVICE_NAME> \\\n--task-definition <YOUR_TASK_DEF>:<YOUR_TASK_DEF_VERSION> \\\n--desired-count <DESIRED_COUNT> \\\n--launch-type "FARGATE" \\\n--platform-version <VERSION> \\\n--health-check-grace-period-seconds <GRACE_PERIOD_IN_SECOND> \\\n--network-configuration "awsvpcConfiguration={subnets=["<YOUR_SUBSETS>"], securityGroups=["<YOUR_SECURITY_GROUPS>"], assignPublicIp=ENABLED}" \\\n--load-balancer targetGroupArn=<TARGET_GROUP_ARN>,containerName=<CONTAINER_NAME>,containerPort=<YOUR_CONTAINER_PORT>\n')),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If your service fails to start, you may check the logs in ECS console or in Cloudwatch. Generally it fails due to the connection between ECS container and NC_DB. Make sure the security groups have the correct inbound and outbound rules.  "))),(0,n.kt)("h3",{id:"gcp-cloud-run"},"GCP (Cloud Run)"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Click to Expand"),(0,n.kt)("h4",{id:"pull-nocodb-image-on-cloud-shell"},"Pull NocoDB Image on Cloud Shell"),(0,n.kt)("p",null,"  Since Cloud Run only supports images from Google Container Registry (GCR) or Artifact Registry, we need to pull NocoDB image, tag it and push it in GCP using Cloud Shell. Here are some sample commands which you can execute in Cloud Shell."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# pull latest NocoDB image\ndocker pull nocodb/nocodb:latest\n\n# tag the image\ndocker tag nocodb/nocodb:latest gcr.io/<MY_PROJECT_ID>/nocodb/nocodb:latest\n\n# push the image to GCR\ndocker push gcr.io/<MY_PROJECT_ID>/nocodb/nocodb:latest\n")),(0,n.kt)("h4",{id:"deploy-nocodb-on-cloud-run"},"Deploy NocoDB on Cloud Run"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud run deploy --image=gcr.io/<MY_PROJECT_ID>/nocodb/nocodb:latest \\\n                  --region=us-central1 \\\n                  --allow-unauthenticated \\\n                  --platform=managed \n"))),(0,n.kt)("h3",{id:"digitalocean-app"},"DigitalOcean (App)"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Click to Expand"),(0,n.kt)("h4",{id:"create-apps"},"Create Apps"),(0,n.kt)("p",null,"  On Home page, Click on Create icon & Select Apps (Deploy your code)."),(0,n.kt)("p",null,"  ",(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/86527202/154790558-f8fe5580-5a58-412c-9c2e-145587712bf2.png",alt:"Screenshot 2022-02-19 at 12 17 43 PM"})),(0,n.kt)("h4",{id:"choose-source-docker-hub"},"Choose Source: Docker Hub"),(0,n.kt)("p",null,"  ",(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/86527202/154790563-b5b6d5b4-0bdc-4718-8cea-0a7ee52f283b.png",alt:"Screenshot 2022-02-19 at 12 22 01 PM"})),(0,n.kt)("h4",{id:"choose-source-repository"},"Choose Source: Repository"),(0,n.kt)("p",null,"  Configure Source Repository as ",(0,n.kt)("inlineCode",{parentName:"p"},"nocodb/nocodb"),". Optionally you can pick release tag if you are interested in specific NocoDB version."),(0,n.kt)("p",null,"  ",(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/86527202/154790564-1dcb5e33-3a57-471a-a44c-835a410a0cb7.png",alt:"Screenshot 2022-02-19 at 12 23 11 PM"})),(0,n.kt)("h4",{id:"optional-additional-configurations"},"[Optional]"," Additional Configurations"),(0,n.kt)("p",null,"  ",(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/86527202/154790565-c0234b2e-ad50-4042-90b6-4f8798f1d585.png",alt:"Screenshot 2022-02-19 at 12 24 44 PM"})),(0,n.kt)("h4",{id:"name-your-web-service"},"Name your web service"),(0,n.kt)("p",null,"  Pick a name for your NocoDB application. This name will become part of URL subsequently\nPick nearest Region for cloud hosting\n",(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/86527202/154790567-a6e65e4e-9aa0-4edb-998e-da8803ad6e23.png",alt:"Screenshot 2022-02-19 at 12 28 11 PM"})),(0,n.kt)("h4",{id:"finalize-and-launch"},"Finalize and Launch"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Select hosting plan for your NocoDB application")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Click "Launch APP"'),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/86527202/154790570-62044713-5cca-4d06-82ec-f3cc257218a1.png",alt:"Screenshot 2022-02-19 at 12 29 23 PM"})),(0,n.kt)("p",{parentName:"li"},"Application will be build & URL will be live in a minute! The URL will be something like ",(0,n.kt)("a",{parentName:"p",href:"https://simply-nocodb-rsyir.ondigitalocean.app/"},"https://simply-nocodb-rsyir.ondigitalocean.app/"))))),(0,n.kt)("h3",{id:"cloudron"},"Cloudron"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Click to Expand"),(0,n.kt)("h4",{id:"navigate-to-app-store"},"Navigate to App Store"),(0,n.kt)("p",null,"  Log into Cloudron and select App Store"),(0,n.kt)("p",null,"  ",(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/35857179/194700146-aae90503-a8fd-4bc5-8397-39f0bc279606.png",alt:"image"})),(0,n.kt)("h4",{id:"search-nocodb"},"Search NocoDB"),(0,n.kt)("p",null,"  ",(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/35857179/194700181-b5303919-70b8-4cf8-bebe-7e75aca601f3.png",alt:"image"})),(0,n.kt)("h4",{id:"click-install"},"Click Install"),(0,n.kt)("p",null,"  ",(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/35857179/194700192-d702f5c2-2afa-45c5-9823-4ebe9e141b01.png",alt:"image"})),(0,n.kt)("h4",{id:"configure-nocodb"},"Configure NocoDB"),(0,n.kt)("p",null,"  ",(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/35857179/194700230-c35e934f-bd93-4948-8f31-935483b30571.png",alt:"image"})),(0,n.kt)("h4",{id:"go-to-my-app-and-launch-nocodb"},"Go to My App and Launch NocoDB"),(0,n.kt)("p",null,"  ",(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/35857179/194700464-50098cb1-bf94-42bb-a63a-cc0aad671913.png",alt:"image"}))),(0,n.kt)("h3",{id:"caprover"},"CapRover"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Click to Expand"),(0,n.kt)("h4",{id:"login-and-click-one-click-apps--databases"},"Login and Click One-Click Apps / Databases"),(0,n.kt)("p",null,"  ",(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/35857179/194701420-7fe5c396-a488-456c-98de-6f2ee1151fc5.png",alt:"image"})),(0,n.kt)("h4",{id:"search-nocodb-1"},"Search NocoDB"),(0,n.kt)("p",null,"  ",(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/35857179/194701537-63e7efc5-013b-4ca9-8659-56e9d536e7d0.png",alt:"image"})),(0,n.kt)("h4",{id:"configure-nocodb-and-deploy"},"Configure NocoDB and Deploy"),(0,n.kt)("p",null,"  ",(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/35857179/194701576-19519df5-2aa4-435d-8fc6-7bc684b9cfe1.png",alt:"image"}))),(0,n.kt)("h3",{id:"railway"},"Railway"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Click to Expand"),(0,n.kt)("h4",{id:"navigate-to-templates"},"Navigate to Templates"),(0,n.kt)("p",null,"  Go to ",(0,n.kt)("a",{parentName:"p",href:"https://railway.app/templates"},"Templates"),", Search NocoDB and click Deploy"),(0,n.kt)("p",null,"  ",(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/35857179/194702833-1bea22ee-6dfa-4024-ac27-e33fe56e5500.png",alt:"image"})),(0,n.kt)("h4",{id:"configure-nocodb-and-deploy-1"},"Configure NocoDB and Deploy"),(0,n.kt)("p",null,"  ",(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/35857179/194702960-149393fe-b00f-4d84-9e54-22cb7616ba44.png",alt:"image"}))),(0,n.kt)("h3",{id:"freebsd--freenas--truenas-jail"},"FreeBSD / FreeNAS / TrueNAS Jail"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"https://gist.github.com/Zamana/e9281d736f9e9ce5882c6f4b140a590e"},"here")," provided by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Zamana"},"C. R. Zamana"),"."),(0,n.kt)("h2",{id:"sample-demos"},"Sample Demos"),(0,n.kt)("h3",{id:"code-sandbox"},"Code Sandbox"),(0,n.kt)("iframe",{width:"100%",height:"500",src:"https://codesandbox.io/embed/vigorous-firefly-80kq5?hidenavigation=1&theme=dark",title:"Code Sandbox",frameBorder:"0",allow:"clipboard-write"}),(0,n.kt)("h3",{id:"docker-deploying-with-one-command"},"Docker deploying with one command"),(0,n.kt)("iframe",{width:"100%",height:"500",src:"https://www.youtube.com/embed/K-UEecQyiOk",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}),(0,n.kt)("h3",{id:"using-npx"},"Using NPX"),(0,n.kt)("iframe",{width:"100%",height:"500",src:"https://www.youtube.com/embed/v6Nn75P1p7I",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}))}b.isMDXComponent=!0}}]);