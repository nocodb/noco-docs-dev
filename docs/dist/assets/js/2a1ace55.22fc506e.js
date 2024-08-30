"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[7152],{39140:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>r});var i=o(74848),a=o(28453);const s={title:"Installation",description:"Simple installation - takes about three minutes!",tags:["Open Source"],keywords:["NocoDB installation","NocoDB docker installation","NocoDB nodejs installation","NocoDB quick try","NocoDB prerequisites"]},c=void 0,l={id:"getting-started/self-hosted/installation",title:"Installation",description:"Simple installation - takes about three minutes!",source:"@site/docs/020.getting-started/050.self-hosted/010.installation.md",sourceDirName:"020.getting-started/050.self-hosted",slug:"/getting-started/self-hosted/installation",permalink:"/getting-started/self-hosted/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/020.getting-started/050.self-hosted/010.installation.md",tags:[{label:"Open Source",permalink:"/tags/open-source"}],version:"current",sidebarPosition:10,frontMatter:{title:"Installation",description:"Simple installation - takes about three minutes!",tags:["Open Source"],keywords:["NocoDB installation","NocoDB docker installation","NocoDB nodejs installation","NocoDB quick try","NocoDB prerequisites"]},sidebar:"tutorialSidebar",previous:{title:"In Open Source",permalink:"/category/in-open-source"},next:{title:"Environment variables",permalink:"/getting-started/self-hosted/environment-variables"}},t={},r=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick try",id:"quick-try",level:2},{value:"Docker",id:"docker",level:3},{value:"Docker Compose",id:"docker-compose",level:3},{value:"Homebrew",id:"homebrew",level:3},{value:"Executables",id:"executables",level:3},{value:"Node Application",id:"node-application",level:3},{value:"AWS ECS (Fargate)",id:"aws-ecs-fargate",level:3},{value:"Create ECS Cluster",id:"create-ecs-cluster",level:4},{value:"Create Log group",id:"create-log-group",level:4},{value:"Create ECS Task Definiton",id:"create-ecs-task-definiton",level:4},{value:"Create ECS Service",id:"create-ecs-service",level:4},{value:"GCP (Cloud Run)",id:"gcp-cloud-run",level:3},{value:"Pull NocoDB Image on Cloud Shell",id:"pull-nocodb-image-on-cloud-shell",level:4},{value:"Deploy NocoDB on Cloud Run",id:"deploy-nocodb-on-cloud-run",level:4},{value:"DigitalOcean (App)",id:"digitalocean-app",level:3},{value:"Create Apps",id:"create-apps",level:4},{value:"Choose Source: Docker Hub",id:"choose-source-docker-hub",level:4},{value:"Choose Source: Repository",id:"choose-source-repository",level:4},{value:"[Optional] Additional Configurations",id:"optional-additional-configurations",level:4},{value:"Name your web service",id:"name-your-web-service",level:4},{value:"Finalize and Launch",id:"finalize-and-launch",level:4},{value:"Cloudron",id:"cloudron",level:3},{value:"Navigate to App Store",id:"navigate-to-app-store",level:4},{value:"Search NocoDB",id:"search-nocodb",level:4},{value:"Click Install",id:"click-install",level:4},{value:"Configure NocoDB",id:"configure-nocodb",level:4},{value:"Go to My App and Launch NocoDB",id:"go-to-my-app-and-launch-nocodb",level:4},{value:"CapRover",id:"caprover",level:3},{value:"Login and Click One-Click Apps / Databases",id:"login-and-click-one-click-apps--databases",level:4},{value:"Search NocoDB",id:"search-nocodb-1",level:4},{value:"Configure NocoDB and Deploy",id:"configure-nocodb-and-deploy",level:4},{value:"Railway",id:"railway",level:3},{value:"Navigate to Templates",id:"navigate-to-templates",level:4},{value:"Configure NocoDB and Deploy",id:"configure-nocodb-and-deploy-1",level:4},{value:"FreeBSD / FreeNAS / TrueNAS Jail",id:"freebsd--freenas--truenas-jail",level:3},{value:"Sealos",id:"sealos",level:3},{value:"Sample Demos",id:"sample-demos",level:2},{value:"Code Sandbox",id:"code-sandbox",level:3},{value:"Docker deploying with one command",id:"docker-deploying-with-one-command",level:3},{value:"Using NPX",id:"using-npx",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components},{Details:o,TabItem:s,Tabs:c}=n;return o||u("Details",!0),s||u("TabItem",!0),c||u("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Simple installation - takes about three minutes!"}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://www.docker.com/get-started",children:"Docker"})," or ",(0,i.jsx)(n.a,{href:"https://nodejs.org/en/download",children:"Node.js"})," ( > v18.x )"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"quick-try",children:"Quick try"}),"\n",(0,i.jsx)(n.h3,{id:"docker",children:"Docker"}),"\n",(0,i.jsx)(n.p,{children:"If you are a Docker user, you may try this way!"}),"\n",(0,i.jsxs)(c,{children:[(0,i.jsx)(s,{value:"sqlite",label:"SQLite",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'docker run -d --name nocodb \\\n-v "$(pwd)"/nocodb:/usr/app/data/ \\\n-p 8080:8080 \\\nnocodb/nocodb:latest\n'})})}),(0,i.jsx)(s,{value:"postgres",label:"Postgres",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'docker run -d --name nocodb-postgres \\\n-v "$(pwd)"/nocodb:/usr/app/data/ \\\n-p 8080:8080 \\\n-e NC_DB="pg://host.docker.internal:5432?u=root&p=password&d=d1" \\\n-e NC_AUTH_JWT_SECRET="569a1821-0a93-45e8-87ab-eb857f20a010" \\\nnocodb/nocodb:latest\n'})})})]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["To persist data in docker you can mount volume at ",(0,i.jsx)(n.code,{children:"/usr/app/data/"})," since 0.10.6. In older version mount at ",(0,i.jsx)(n.code,{children:"/usr/src/app"}),". Otherwise your data will be lost after recreating the container."]})}),"\n",(0,i.jsx)(n.h3,{id:"docker-compose",children:"Docker Compose"}),"\n",(0,i.jsxs)(n.p,{children:["We provide different docker-compose.yml files under ",(0,i.jsx)(n.a,{href:"https://github.com/nocodb/nocodb/tree/master/docker-compose",children:"this directory"}),". Here are some examples."]}),"\n",(0,i.jsx)(c,{children:(0,i.jsx)(s,{value:"postgres",label:"Postgres",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/nocodb/nocodb\ncd nocodb/docker-compose/pg\ndocker-compose up -d\n"})})})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.code,{children:"/usr/app/data/"})," is not mounted, there will be data loss."]})}),"\n",(0,i.jsx)(n.h3,{id:"homebrew",children:"Homebrew"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"brew tap nocodb/nocodb\nbrew install nocodb\nnocodb\n"})}),"\n",(0,i.jsx)(n.h3,{id:"executables",children:"Executables"}),"\n",(0,i.jsx)(n.p,{children:"You can download executables directly and run without any extra dependency. Use the right command based on your platform."}),"\n",(0,i.jsxs)(c,{children:[(0,i.jsx)(s,{value:"MacOS (x64)",label:"MacOS (x64)",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl http://get.nocodb.com/macos-x64 -o nocodb -L \\\n  && chmod +x nocodb \\\n  && ./nocodb\n"})})}),(0,i.jsx)(s,{value:"MacOS (arm64)",label:"MacOS (arm64)",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl http://get.nocodb.com/macos-arm64 -o nocodb -L \\\n  && chmod +x nocodb \\\n  && ./nocodb\n"})})}),(0,i.jsx)(s,{value:"Linux (x64)",label:"Linux (x64)",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl http://get.nocodb.com/linux-x64 -o nocodb -L \\\n  && chmod +x nocodb \\\n  && ./nocodb\n"})})}),(0,i.jsx)(s,{value:"Linux (arm64)",label:"Linux (arm64)",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl http://get.nocodb.com/linux-arm64 -o nocodb -L \\\n  && chmod +x nocodb \\\n  && ./nocodb\n"})})}),(0,i.jsx)(s,{value:"Windows (x64)",label:"Windows (x64)",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'iwr http://get.nocodb.com/win-x64.exe -OutFile "Noco-win-x64.exe"\n.\\Noco-win-x64.exe\n'})})}),(0,i.jsx)(s,{value:"Windows (arm64)",label:"Windows (arm64)",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'iwr http://get.nocodb.com/win-arm64.exe -OutFile "Noco-win-arm64.exe"\n.\\Noco-win-arm64.exe\n'})})})]}),"\n",(0,i.jsx)(n.h3,{id:"node-application",children:"Node Application"}),"\n",(0,i.jsx)(n.p,{children:"We provide a simple NodeJS Application for getting started."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/nocodb/nocodb-seed\ncd nocodb-seed\nnpm install\nnpm start\n"})}),"\n",(0,i.jsx)(n.h3,{id:"aws-ecs-fargate",children:"AWS ECS (Fargate)"}),"\n",(0,i.jsxs)(o,{children:[(0,i.jsx)("summary",{children:"Click to Expand"}),(0,i.jsx)(n.h4,{id:"create-ecs-cluster",children:"Create ECS Cluster"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"aws ecs create-cluster \\\n--cluster-name <YOUR_ECS_CLUSTER>\n"})}),(0,i.jsx)(n.h4,{id:"create-log-group",children:"Create Log group"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"aws logs create-log-group \\\n--log-group-name /ecs/<YOUR_APP_NAME>/<YOUR_CONTAINER_NAME>\n"})}),(0,i.jsx)(n.h4,{id:"create-ecs-task-definiton",children:"Create ECS Task Definiton"}),(0,i.jsx)(n.p,{children:"Every time you create it, it will add a new version. If it is not existing, the version will be 1."}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'aws ecs register-task-definition \\\n--cli-input-json "file://./<YOUR_TASK_DEF_NAME>.json"\n'})}),(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"This json file defines the container specification. You can define secrets such as NC_DB and environment variables here."})}),(0,i.jsx)(n.p,{children:"Here's the sample Task Definition"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "family": "nocodb-sample-task-def",\n  "networkMode": "awsvpc",\n  "containerDefinitions": [{\n    "name": "<YOUR_CONTAINER_NAME>",\n    "image": "nocodb/nocodb:latest",\n    "essential": true,\n    "logConfiguration": {\n      "logDriver": "awslogs",\n      "options": {\n        "awslogs-group": "/ecs/<YOUR_APP_NAME>/<YOUR_CONTAINER_NAME>",\n        "awslogs-region": "<YOUR_AWS_REGION>",\n        "awslogs-stream-prefix": "ecs"\n      }\n    },\n    "secrets": [{\n      "name": "<YOUR_SECRETS_NAME>",\n      "valueFrom": "<YOUR_SECRET_ARN>"\n    }],\n    "environment": [{\n      "name": "<YOUR_ENV_VARIABLE_NAME>",\n      "value": "<YOUR_ENV_VARIABLE_VALUE>"\n    }],\n    "portMappings": [{\n      "containerPort": 8080,\n      "hostPort": 8080,\n      "protocol": "tcp"\n    }]\n  }],\n  "requiresCompatibilities": [\n    "FARGATE"\n  ],\n  "cpu": "256",\n  "memory": "512",\n  "executionRoleArn": "<YOUR_ECS_EXECUTION_ROLE_ARN>",\n  "taskRoleArn": "<YOUR_ECS_TASK_ROLE_ARN>"\n}\n'})}),(0,i.jsx)(n.h4,{id:"create-ecs-service",children:"Create ECS Service"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'aws ecs create-service \\\n--cluster <YOUR_ECS_CLUSTER> \\\n--service-name  <YOUR_SERVICE_NAME> \\\n--task-definition <YOUR_TASK_DEF>:<YOUR_TASK_DEF_VERSION> \\\n--desired-count <DESIRED_COUNT> \\\n--launch-type "FARGATE" \\\n--platform-version <VERSION> \\\n--health-check-grace-period-seconds <GRACE_PERIOD_IN_SECOND> \\\n--network-configuration "awsvpcConfiguration={subnets=["<YOUR_SUBSETS>"], securityGroups=["<YOUR_SECURITY_GROUPS>"], assignPublicIp=ENABLED}" \\\n--load-balancer targetGroupArn=<TARGET_GROUP_ARN>,containerName=<CONTAINER_NAME>,containerPort=<YOUR_CONTAINER_PORT>\n'})}),(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"If your service fails to start, you may check the logs in ECS console or in Cloudwatch. Generally it fails due to the connection between ECS container and NC_DB. Make sure the security groups have the correct inbound and outbound rules."})})]}),"\n",(0,i.jsx)(n.h3,{id:"gcp-cloud-run",children:"GCP (Cloud Run)"}),"\n",(0,i.jsxs)(o,{children:[(0,i.jsx)("summary",{children:"Click to Expand"}),(0,i.jsx)(n.h4,{id:"pull-nocodb-image-on-cloud-shell",children:"Pull NocoDB Image on Cloud Shell"}),(0,i.jsx)(n.p,{children:"Since Cloud Run only supports images from Google Container Registry (GCR) or Artifact Registry, we need to pull NocoDB image, tag it and push it in GCP using Cloud Shell. Here are some sample commands which you can execute in Cloud Shell."}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# pull latest NocoDB image\ndocker pull nocodb/nocodb:latest\n\n# tag the image\ndocker tag nocodb/nocodb:latest gcr.io/<MY_PROJECT_ID>/nocodb/nocodb:latest\n\n# push the image to GCR\ndocker push gcr.io/<MY_PROJECT_ID>/nocodb/nocodb:latest\n"})}),(0,i.jsx)(n.h4,{id:"deploy-nocodb-on-cloud-run",children:"Deploy NocoDB on Cloud Run"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"gcloud run deploy --image=gcr.io/<MY_PROJECT_ID>/nocodb/nocodb:latest \\\n                  --region=us-central1 \\\n                  --allow-unauthenticated \\\n                  --platform=managed \n"})})]}),"\n",(0,i.jsx)(n.h3,{id:"digitalocean-app",children:"DigitalOcean (App)"}),"\n",(0,i.jsxs)(o,{children:[(0,i.jsx)("summary",{children:"Click to Expand"}),(0,i.jsx)(n.h4,{id:"create-apps",children:"Create Apps"}),(0,i.jsx)(n.p,{children:"On Home page, Click on Create icon & Select Apps (Deploy your code)."}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://user-images.githubusercontent.com/86527202/154790558-f8fe5580-5a58-412c-9c2e-145587712bf2.png",alt:"Screenshot 2022-02-19 at 12 17 43 PM"})}),(0,i.jsx)(n.h4,{id:"choose-source-docker-hub",children:"Choose Source: Docker Hub"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://user-images.githubusercontent.com/86527202/154790563-b5b6d5b4-0bdc-4718-8cea-0a7ee52f283b.png",alt:"Screenshot 2022-02-19 at 12 22 01 PM"})}),(0,i.jsx)(n.h4,{id:"choose-source-repository",children:"Choose Source: Repository"}),(0,i.jsxs)(n.p,{children:["Configure Source Repository as ",(0,i.jsx)(n.code,{children:"nocodb/nocodb"}),". Optionally you can pick release tag if you are interested in specific NocoDB version."]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://user-images.githubusercontent.com/86527202/154790564-1dcb5e33-3a57-471a-a44c-835a410a0cb7.png",alt:"Screenshot 2022-02-19 at 12 23 11 PM"})}),(0,i.jsx)(n.h4,{id:"optional-additional-configurations",children:"[Optional] Additional Configurations"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://user-images.githubusercontent.com/86527202/154790565-c0234b2e-ad50-4042-90b6-4f8798f1d585.png",alt:"Screenshot 2022-02-19 at 12 24 44 PM"})}),(0,i.jsx)(n.h4,{id:"name-your-web-service",children:"Name your web service"}),(0,i.jsxs)(n.p,{children:["Pick a name for your NocoDB application. This name will become part of URL subsequently\nPick nearest Region for cloud hosting\n",(0,i.jsx)(n.img,{src:"https://user-images.githubusercontent.com/86527202/154790567-a6e65e4e-9aa0-4edb-998e-da8803ad6e23.png",alt:"Screenshot 2022-02-19 at 12 28 11 PM"})]}),(0,i.jsx)(n.h4,{id:"finalize-and-launch",children:"Finalize and Launch"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Select hosting plan for your NocoDB application"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Click "Launch APP"'}),"\n"]}),"\n"]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://user-images.githubusercontent.com/86527202/154790570-62044713-5cca-4d06-82ec-f3cc257218a1.png",alt:"Screenshot 2022-02-19 at 12 29 23 PM"})}),(0,i.jsxs)(n.p,{children:["Application will be build & URL will be live in a minute! The URL will be something like ",(0,i.jsx)(n.a,{href:"https://simply-nocodb-rsyir.ondigitalocean.app/",children:"https://simply-nocodb-rsyir.ondigitalocean.app/"})]})]}),"\n",(0,i.jsx)(n.h3,{id:"cloudron",children:"Cloudron"}),"\n",(0,i.jsxs)(o,{children:[(0,i.jsx)("summary",{children:"Click to Expand"}),(0,i.jsx)(n.h4,{id:"navigate-to-app-store",children:"Navigate to App Store"}),(0,i.jsx)(n.p,{children:"Log into Cloudron and select App Store"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://user-images.githubusercontent.com/35857179/194700146-aae90503-a8fd-4bc5-8397-39f0bc279606.png",alt:"image"})}),(0,i.jsx)(n.h4,{id:"search-nocodb",children:"Search NocoDB"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://user-images.githubusercontent.com/35857179/194700181-b5303919-70b8-4cf8-bebe-7e75aca601f3.png",alt:"image"})}),(0,i.jsx)(n.h4,{id:"click-install",children:"Click Install"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://user-images.githubusercontent.com/35857179/194700192-d702f5c2-2afa-45c5-9823-4ebe9e141b01.png",alt:"image"})}),(0,i.jsx)(n.h4,{id:"configure-nocodb",children:"Configure NocoDB"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://user-images.githubusercontent.com/35857179/194700230-c35e934f-bd93-4948-8f31-935483b30571.png",alt:"image"})}),(0,i.jsx)(n.h4,{id:"go-to-my-app-and-launch-nocodb",children:"Go to My App and Launch NocoDB"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://user-images.githubusercontent.com/35857179/194700464-50098cb1-bf94-42bb-a63a-cc0aad671913.png",alt:"image"})})]}),"\n",(0,i.jsx)(n.h3,{id:"caprover",children:"CapRover"}),"\n",(0,i.jsxs)(o,{children:[(0,i.jsx)("summary",{children:"Click to Expand"}),(0,i.jsx)(n.h4,{id:"login-and-click-one-click-apps--databases",children:"Login and Click One-Click Apps / Databases"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://user-images.githubusercontent.com/35857179/194701420-7fe5c396-a488-456c-98de-6f2ee1151fc5.png",alt:"image"})}),(0,i.jsx)(n.h4,{id:"search-nocodb-1",children:"Search NocoDB"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://user-images.githubusercontent.com/35857179/194701537-63e7efc5-013b-4ca9-8659-56e9d536e7d0.png",alt:"image"})}),(0,i.jsx)(n.h4,{id:"configure-nocodb-and-deploy",children:"Configure NocoDB and Deploy"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://user-images.githubusercontent.com/35857179/194701576-19519df5-2aa4-435d-8fc6-7bc684b9cfe1.png",alt:"image"})})]}),"\n",(0,i.jsx)(n.h3,{id:"railway",children:"Railway"}),"\n",(0,i.jsxs)(o,{children:[(0,i.jsx)("summary",{children:"Click to Expand"}),(0,i.jsx)(n.h4,{id:"navigate-to-templates",children:"Navigate to Templates"}),(0,i.jsxs)(n.p,{children:["Go to ",(0,i.jsx)(n.a,{href:"https://railway.app/templates",children:"Templates"}),", Search NocoDB and click Deploy"]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://user-images.githubusercontent.com/35857179/194702833-1bea22ee-6dfa-4024-ac27-e33fe56e5500.png",alt:"image"})}),(0,i.jsx)(n.h4,{id:"configure-nocodb-and-deploy-1",children:"Configure NocoDB and Deploy"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://user-images.githubusercontent.com/35857179/194702960-149393fe-b00f-4d84-9e54-22cb7616ba44.png",alt:"image"})})]}),"\n",(0,i.jsx)(n.h3,{id:"freebsd--freenas--truenas-jail",children:"FreeBSD / FreeNAS / TrueNAS Jail"}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://gist.github.com/Zamana/e9281d736f9e9ce5882c6f4b140a590e",children:"here"})," provided by ",(0,i.jsx)(n.a,{href:"https://github.com/Zamana",children:"C. R. Zamana"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"sealos",children:"Sealos"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://cloud.sealos.io/?openapp=system-template%3FtemplateName%3Dnocodb",children:(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/labring-actions/templates/main/Deploy-on-Sealos.svg",alt:""})})}),"\n",(0,i.jsx)(n.h2,{id:"sample-demos",children:"Sample Demos"}),"\n",(0,i.jsx)(n.h3,{id:"code-sandbox",children:"Code Sandbox"}),"\n",(0,i.jsx)("iframe",{width:"100%",height:"500",src:"https://codesandbox.io/embed/vigorous-firefly-80kq5?hidenavigation=1&theme=dark",title:"Code Sandbox",frameBorder:"0",allow:"clipboard-write"}),"\n",(0,i.jsx)(n.h3,{id:"docker-deploying-with-one-command",children:"Docker deploying with one command"}),"\n",(0,i.jsx)("iframe",{width:"100%",height:"500",src:"https://www.youtube.com/embed/K-UEecQyiOk",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}),"\n",(0,i.jsx)(n.h3,{id:"using-npx",children:"Using NPX"}),"\n",(0,i.jsx)("iframe",{width:"100%",height:"500",src:"https://www.youtube.com/embed/v6Nn75P1p7I",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>l});var i=o(96540);const a={},s=i.createContext(a);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);