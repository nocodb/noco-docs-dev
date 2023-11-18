"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[1305],{52581:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>t});var s=i(85893),l=i(11151);const o={title:"Releases & builds",description:"NocoDB creates Docker and Binaries for each PR",tags:["Engineering"]},d=void 0,r={id:"engineering/builds-and-releases",title:"Releases & builds",description:"NocoDB creates Docker and Binaries for each PR",source:"@site/docs/150.engineering/060.builds-and-releases.md",sourceDirName:"150.engineering",slug:"/engineering/builds-and-releases",permalink:"/engineering/builds-and-releases",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/150.engineering/060.builds-and-releases.md",tags:[{label:"Engineering",permalink:"/tags/engineering"}],version:"current",sidebarPosition:60,frontMatter:{title:"Releases & builds",description:"NocoDB creates Docker and Binaries for each PR",tags:["Engineering"]},sidebar:"tutorialSidebar",previous:{title:"Playwright E2E testing",permalink:"/engineering/playwright"},next:{title:"i18n translation",permalink:"/engineering/translation"}},a={},t=[{value:"Builds of NocoDB",id:"builds-of-nocodb",level:2},{value:"Release builds",id:"release-builds",level:2},{value:"How to make a release build  ?",id:"how-to-make-a-release-build--",level:3},{value:"Tagging",id:"tagging",level:3},{value:"Case 1: Leaving inputs blank",id:"case-1-leaving-inputs-blank",level:3},{value:"Case 2: Manually Input",id:"case-2-manually-input",level:3},{value:"How does release action work ?",id:"how-does-release-action-work-",level:3},{value:"validate-branch",id:"validate-branch",level:4},{value:"process-input",id:"process-input",level:4},{value:"pr-to-master",id:"pr-to-master",level:4},{value:"release-npm",id:"release-npm",level:4},{value:"release-draft-note",id:"release-draft-note",level:4},{value:"release-docker",id:"release-docker",level:4},{value:"close-issues",id:"close-issues",level:4},{value:"publish-docs",id:"publish-docs",level:4},{value:"update-sdk-path",id:"update-sdk-path",level:4},{value:"sync-to-develop",id:"sync-to-develop",level:4},{value:"Daily builds",id:"daily-builds",level:2},{value:"What are daily builds ?",id:"what-are-daily-builds-",level:3},{value:"Docker images",id:"docker-images",level:3},{value:"Timely builds",id:"timely-builds",level:2},{value:"What are timely builds ?",id:"what-are-timely-builds-",level:3},{value:"Docker images",id:"docker-images-1",level:3},{value:"Executables or Binaries",id:"executables-or-binaries",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"builds-of-nocodb",children:"Builds of NocoDB"}),"\n",(0,s.jsx)(n.p,{children:"There are 3 kinds of docker builds in NocoDB"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Release builds ",(0,s.jsx)(n.a,{href:"https://hub.docker.com/r/nocodb/nocodb",children:"nocodb/nocodb"})," : built during NocoDB release."]}),"\n",(0,s.jsxs)(n.li,{children:["Daily builds ",(0,s.jsx)(n.a,{href:"https://hub.docker.com/r/nocodb/nocodb-daily",children:"nocodb/nocodb-daily"})," : built every 6 hours from Develop branch."]}),"\n",(0,s.jsxs)(n.li,{children:["Timely builds ",(0,s.jsx)(n.a,{href:"https://hub.docker.com/r/nocodb/nocodb-timely",children:"nocodb/nocodb-timely"}),": built for every PR and manually triggered PRs."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Below is an overview of how to make these builds and what happens behind the scenes."}),"\n",(0,s.jsx)(n.h2,{id:"release-builds",children:"Release builds"}),"\n",(0,s.jsx)(n.h3,{id:"how-to-make-a-release-build--",children:"How to make a release build  ?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.a,{href:"https://github.com/nocodb/nocodb/actions/workflows/release-nocodb.yml",children:"NocoDB release action"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"You should see the below screen"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/35857179/167240353-a02f690f-c865-4ade-8645-64382405c9ea.png",alt:"image"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Change ",(0,s.jsx)(n.code,{children:"Use workflow from"})," to ",(0,s.jsx)(n.code,{children:"Branch: master"}),". If you choose the wrong branch, the workflow will be ended."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/35857179/167240383-dda05f76-8323-4f4a-b3e7-9db886dbd68d.png",alt:"image"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Then there would be two cases - you can either leave target tag and pervious tag blank or manually input some values"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Target Tag means the target deployment version, while Previous Tag means the latest version as of now. Previous Tag is used for Release Note only - showing the file / commit differences between two tags."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"tagging",children:"Tagging"}),"\n",(0,s.jsxs)(n.p,{children:["The naming convention would be following given the actual release tag is ",(0,s.jsx)(n.code,{children:"0.100.0"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"0.100.0-beta.0"})," (first version of pre-release)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"0.100.0-beta.1"})," (include bug fix changes on top of the previous version)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"0.100.0-beta.2"}),"(include bug fix changes on top of the previous version)"]}),"\n",(0,s.jsx)(n.li,{children:"and so on ..."}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"0.100.0"})," (actual release)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"0.100.1"})," (minor bug fix release)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"0.100.2"})," (minor bug fix release)"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"case-1-leaving-inputs-blank",children:"Case 1: Leaving inputs blank"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If Previous Tag is blank, then the value will be fetched from ",(0,s.jsx)(n.a,{href:"https://github.com/nocodb/nocodb/releases/latest",children:"latest"})]}),"\n",(0,s.jsx)(n.li,{children:"If Target Tag is blank, then the value will be Previous Tag plus one. Example: 0.90.11 (Previous Tag) + 0.0.1 = 0.90.12 (Target Tag)"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"case-2-manually-input",children:"Case 2: Manually Input"}),"\n",(0,s.jsx)(n.p,{children:"Why? Sometimes we may mess up in NPM deployment. As NPM doesn't allow us to redeploy to the same tag again, in this case we cannot just use the previous tag + 1. Therefore, we need to use previous tag + 2 instead and we manually configure it."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["After that, click ",(0,s.jsx)(n.code,{children:"Run workflow"})," to start"]}),"\n",(0,s.jsx)(n.li,{children:"You can see Summary for the overall job status."}),"\n",(0,s.jsxs)(n.li,{children:["Once ",(0,s.jsx)(n.code,{children:"release-draft-note"})," and ",(0,s.jsx)(n.code,{children:"release-executables"})," is finished, then go to ",(0,s.jsx)(n.a,{href:"https://github.com/nocodb/nocodb/releases",children:"releases"}),", edit the draft note and save as draft for time being.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Example: Adding header, update content if necessary, and click ",(0,s.jsx)(n.code,{children:"Auto-generate release notes"})," to include more info."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Once ",(0,s.jsx)(n.code,{children:"release-docker"})," is finished, then test it locally first. You'll be expected to see ",(0,s.jsx)(n.code,{children:"Upgrade Available"})," notification in UI as we haven't published the release note. (the version is retrieved from there)"]}),"\n",(0,s.jsx)(n.li,{children:"Once everything is finished, then publish the release note and the deployment is considered as DONE."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"how-does-release-action-work-",children:"How does release action work ?"}),"\n",(0,s.jsx)(n.h4,{id:"validate-branch",children:"validate-branch"}),"\n",(0,s.jsxs)(n.p,{children:["To check if ",(0,s.jsx)(n.code,{children:"github.ref"})," is master. Otherwise, other branches will be not accepted."]}),"\n",(0,s.jsx)(n.h4,{id:"process-input",children:"process-input"}),"\n",(0,s.jsx)(n.p,{children:"To enrich target tag or previous tag if necessary."}),"\n",(0,s.jsx)(n.h4,{id:"pr-to-master",children:"pr-to-master"}),"\n",(0,s.jsx)(n.p,{children:"Automate a PR from develop to master branch so that we know the actual differences between the previous tag and the current tag. We choose master branch for a deployment base."}),"\n",(0,s.jsx)(n.h4,{id:"release-npm",children:"release-npm"}),"\n",(0,s.jsx)(n.p,{children:"Build frontend and backend and release them to NPM. The changes during built such as version bumping will be committed and pushed to a temporary branch and an automated PR will be created and merged to master branch."}),"\n",(0,s.jsx)(n.p,{children:"Note that once you publish with a certain tag, you cannot publish with the same tag again."}),"\n",(0,s.jsx)(n.h4,{id:"release-draft-note",children:"release-draft-note"}),"\n",(0,s.jsx)(n.p,{children:"Generate a draft release note. Some actions need to be done after this step."}),"\n",(0,s.jsx)(n.h4,{id:"release-docker",children:"release-docker"}),"\n",(0,s.jsx)(n.p,{children:"Build docker image and publish it to Docker Hub. It may take around 15 - 30 mins."}),"\n",(0,s.jsx)(n.h4,{id:"close-issues",children:"close-issues"}),"\n",(0,s.jsxs)(n.p,{children:["Open issues marked with label ",(0,s.jsx)(n.code,{children:"Status: Fixed"})," and ",(0,s.jsx)(n.code,{children:"Status: Resolved"})," will be closed by bot automatically with comment mentioning the fix is included in which version."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/35857179/167241574-f8f7061f-c689-444a-b761-0a727974c53f.png",alt:"image"})}),"\n",(0,s.jsx)(n.h4,{id:"publish-docs",children:"publish-docs"}),"\n",(0,s.jsx)(n.p,{children:"Publish Documentations"}),"\n",(0,s.jsx)(n.h4,{id:"update-sdk-path",children:"update-sdk-path"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"nocodb-sdk"})," is used in frontend and backend. However, in develop branch, the value would be ",(0,s.jsx)(n.code,{children:"file:../nocodb-sdk"})," for development purpose (so that the changes done in nocodb-sdk in develop will be included in frontend and backend). During the deployment, the value will be changed to the target tag. This job is to update them back."]}),"\n",(0,s.jsx)(n.h4,{id:"sync-to-develop",children:"sync-to-develop"}),"\n",(0,s.jsx)(n.p,{children:"Once the deployment is finished, there would be some new changes being pushed to master branch. This job is to sync the changes back to develop so that both branch won't have any difference."}),"\n",(0,s.jsx)(n.h2,{id:"daily-builds",children:"Daily builds"}),"\n",(0,s.jsx)(n.h3,{id:"what-are-daily-builds-",children:"What are daily builds ?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"NocoDB creates every 6 hours from develop branches and publishes as nocodb/nocodb-daily"}),"\n",(0,s.jsx)(n.li,{children:"This is so that we can easily try what is in the develop branch easily."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"docker-images",children:"Docker images"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The docker images will be built and pushed to Docker Hub (See ",(0,s.jsx)(n.a,{href:"https://hub.docker.com/r/nocodb/nocodb-daily/tags",children:"nocodb/nocodb-daily"})," for the full list)."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"timely-builds",children:"Timely builds"}),"\n",(0,s.jsx)(n.h3,{id:"what-are-timely-builds-",children:"What are timely builds ?"}),"\n",(0,s.jsxs)(n.p,{children:["NocoDB has github actions which creates docker and binaries for each PR! And these can be found as a ",(0,s.jsx)(n.strong,{children:"comment on the last commit"})," of the PR."]}),"\n",(0,s.jsx)(n.p,{children:"Example shown below"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Go to a PR and click on the comment."}),"\n"]}),"\n",(0,s.jsx)("img",{width:"1111",alt:"Screenshot 2023-01-23 at 15 46 36",src:"https://user-images.githubusercontent.com/5435402/214083736-80062398-3712-430f-9865-86b110090c91.png"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Click on the link to copy the docker image and run it locally."}),"\n"]}),"\n",(0,s.jsx)("img",{width:"1231",alt:"Screenshot 2023-01-23 at 15 46 55",src:"https://user-images.githubusercontent.com/5435402/214083755-945d9485-2b9e-4739-8408-068bdf4a84b7.png"}),"\n",(0,s.jsx)(n.p,{children:"This is to"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"reduce pull request cycle time"}),"\n",(0,s.jsx)(n.li,{children:"allow issue reporters / reviewers to verify the fix without setting up their local machines"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"docker-images-1",children:"Docker images"}),"\n",(0,s.jsx)(n.p,{children:"When a non-draft Pull Request is created, reopened or synchronized, a timely build for Docker would be triggered for the changes only included in the following paths."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"packages/nocodb-sdk/**"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"packages/nc-gui/**"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"packages/nc-plugin/**"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"packages/nocodb/**"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The docker images will be built and pushed to Docker Hub (See ",(0,s.jsx)(n.a,{href:"https://hub.docker.com/r/nocodb/nocodb-timely/tags",children:"nocodb/nocodb-timely"})," for the full list). Once the image is ready, GitHub bot will add a comment with the command in the pull request. The tag would be ",(0,s.jsx)(n.code,{children:"<NOCODB_CURRENT_VERSION>-pr-<PR_NUMBER>-<YYYYMMDD>-<HHMM>"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/35857179/175012097-240dab05-da93-4c4e-87c1-1c36fb1350bd.png",alt:"image"})}),"\n",(0,s.jsx)(n.h2,{id:"executables-or-binaries",children:"Executables or Binaries"}),"\n",(0,s.jsxs)(n.p,{children:["Similarly, we provide a timely build for executables for non-docker users. The source code will be built, packaged as binary files, and pushed to GitHub (See ",(0,s.jsx)(n.a,{href:"https://github.com/nocodb/nocodb-timely/releases",children:"nocodb/nocodb-timely"})," for the full list)."]}),"\n",(0,s.jsx)(n.p,{children:"Currently, we only support the following targets:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"node16-linux-arm64"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"node16-macos-arm64"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"node16-win-arm64"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"node16-linux-x64"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"node16-macos-x64"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"node16-win-x64"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Once the executables are ready, GitHub bot will add a comment with the commands in the pull request."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/35857179/175012070-f5f3e7b8-6dc5-4d1c-9f7e-654bc5039521.png",alt:"image"})}),"\n",(0,s.jsx)(n.p,{children:"NocoDB creates Docker and Binaries for each PR."}),"\n",(0,s.jsx)(n.p,{children:"This is to"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"reduce pull request cycle time"}),"\n",(0,s.jsx)(n.li,{children:"allow issue reporters / reviewers to verify the fix without setting up their local machines"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>d});var s=i(67294);const l={},o=s.createContext(l);function d(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);