__NUXT_JSONP__("/engineering/builds-and-releases", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa){return {data:[{document:{slug:"builds-and-releases",description:H,title:"NocoDB : Builds & Releases",position:3250,category:"Engineering",menuTitle:H,toc:[{id:I,depth:x,text:J},{id:K,depth:m,text:L},{id:M,depth:m,text:N},{id:O,depth:x,text:P},{id:y,depth:m,text:y},{id:z,depth:m,text:z},{id:A,depth:m,text:A},{id:B,depth:m,text:B},{id:p,depth:m,text:p},{id:q,depth:m,text:q},{id:C,depth:m,text:C},{id:D,depth:m,text:D},{id:E,depth:m,text:E},{id:F,depth:m,text:F},{id:Q,depth:x,text:R},{id:S,depth:x,text:T},{id:U,depth:m,text:V},{id:W,depth:m,text:X}],body:{type:"root",children:[{type:b,tag:G,props:{id:I},children:[{type:b,tag:g,props:{href:"#how-to-make-a-nocodb-release-build-",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:J}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Click "},{type:b,tag:g,props:{href:"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Factions\u002Fworkflows\u002Frelease-nocodb.yml",rel:[r,s,t],target:u},children:[{type:a,value:"NocoDB release action"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You should see the below screen"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:v,props:{alt:w,src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F35857179\u002F167240353-a02f690f-c865-4ade-8645-64382405c9ea.png"},children:[]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Change "},{type:b,tag:f,props:{},children:[{type:a,value:"Use workflow from"}]},{type:a,value:" to "},{type:b,tag:f,props:{},children:[{type:a,value:"Branch: master"}]},{type:a,value:". If you choose the wrong branch, the workflow will be ended."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:v,props:{alt:w,src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F35857179\u002F167240383-dda05f76-8323-4f4a-b3e7-9db886dbd68d.png"},children:[]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Then there would be two cases - you can either leave target tag and pervious tag blank or manually input some values"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:Y,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Target Tag means the target deployment version, while Previous Tag means the latest version as of now. Previous Tag is used for Release Note only - showing the file \u002F commit differences between two tags."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:n,props:{id:K},children:[{type:b,tag:g,props:{href:"#case-1-leaving-inputs-blank",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:L}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"If Previous Tag is blank, then the value will be fetched from "},{type:b,tag:g,props:{href:"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Freleases\u002Flatest",rel:[r,s,t],target:u},children:[{type:a,value:"latest"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"If Target Tag is blank, then the value will be Previous Tag plus one. Example: 0.90.11 (Previous Tag) + 1 = 0.90.12 (Target Tag)"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:n,props:{id:M},children:[{type:b,tag:g,props:{href:"#case-2-manually-input",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:N}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Why? Sometimes we may mess up in NPM deployment. As NPM doesn't allow us to redeploy to the same tag again, in this case we cannot just use the previous tag + 1. Therefore, we need to use previous tag + 2 instead and we manually configure it."}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"After that, click "},{type:b,tag:f,props:{},children:[{type:a,value:"Run workflow"}]},{type:a,value:" to start"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"You can see Summary for the overall job status."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:Z},{type:b,tag:f,props:{},children:[{type:a,value:p}]},{type:a,value:_},{type:b,tag:f,props:{},children:[{type:a,value:"release-executables"}]},{type:a,value:" is finished, then go to "},{type:b,tag:g,props:{href:"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Freleases",rel:[r,s,t],target:u},children:[{type:a,value:"releases"}]},{type:a,value:", edit the draft note and save as draft for time being.\n"},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Example: Adding header, update content if necessary, and click "},{type:b,tag:f,props:{},children:[{type:a,value:"Auto-generate release notes"}]},{type:a,value:" to include more info."}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:Z},{type:b,tag:f,props:{},children:[{type:a,value:q}]},{type:a,value:" is finished, then test it locally first. You'll be expected to see "},{type:b,tag:f,props:{},children:[{type:a,value:"Upgrade Available"}]},{type:a,value:" notification in UI as we haven't published the release note. (the version is retrieved from there)"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Once everything is finished, then publish the release note and the deployment is considered as DONE."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:G,props:{id:O},children:[{type:b,tag:g,props:{href:"#release-action-explained",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:P}]},{type:a,value:c},{type:b,tag:n,props:{id:y},children:[{type:b,tag:g,props:{href:"#validate-branch",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:y}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"To check if "},{type:b,tag:f,props:{},children:[{type:a,value:"github.ref"}]},{type:a,value:" is master. Otherwise, other branches will be not accepted."}]},{type:a,value:c},{type:b,tag:n,props:{id:z},children:[{type:b,tag:g,props:{href:"#process-input",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"To enrich target tag or previous tag if necessary."}]},{type:a,value:c},{type:b,tag:n,props:{id:A},children:[{type:b,tag:g,props:{href:"#pr-to-master",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:A}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Automate a PR from develop to master branch so that we know the actual differences between the previous tag and the current tag. We choose master branch for a deployment base."}]},{type:a,value:c},{type:b,tag:n,props:{id:B},children:[{type:b,tag:g,props:{href:"#release-npm",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Build frontend and backend and release them to NPM. The changes during built such as version bumping will be committed and pushed to a temporary branch and an automated PR will be created and merged to master branch."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Note that once you publish with a certain tag, you cannot publish with the same tag again."}]},{type:a,value:c},{type:b,tag:n,props:{id:p},children:[{type:b,tag:g,props:{href:"#release-draft-note",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:p}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Generate a draft release note. Some actions need to be done after this step."}]},{type:a,value:c},{type:b,tag:n,props:{id:q},children:[{type:b,tag:g,props:{href:"#release-docker",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:q}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Build docker image and publish it to Docker Hub. It may take around 15 - 30 mins."}]},{type:a,value:c},{type:b,tag:n,props:{id:C},children:[{type:b,tag:g,props:{href:"#close-issues",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:C}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Open issues marked with label "},{type:b,tag:f,props:{},children:[{type:a,value:"Status: Fixed"}]},{type:a,value:_},{type:b,tag:f,props:{},children:[{type:a,value:"Status: Resolved"}]},{type:a,value:" will be closed by bot automatically with comment mentioning the fix is included in which version."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Example:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:v,props:{alt:w,src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F35857179\u002F167241574-f8f7061f-c689-444a-b761-0a727974c53f.png"},children:[]}]},{type:a,value:c},{type:b,tag:n,props:{id:D},children:[{type:b,tag:g,props:{href:"#publish-docs",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:D}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Publish Documentations"}]},{type:a,value:c},{type:b,tag:n,props:{id:E},children:[{type:b,tag:g,props:{href:"#update-sdk-path",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"nocodb-sdk"}]},{type:a,value:" is used in frontend and backend. However, in develop branch, the value would be "},{type:b,tag:f,props:{},children:[{type:a,value:"file:..\u002Fnocodb-sdk"}]},{type:a,value:" for development purpose (so that the changes done in nocodb-sdk in develop will be included in frontend and backend). During the deployment, the value will be changed to the target tag. This job is to update them back."}]},{type:a,value:c},{type:b,tag:n,props:{id:F},children:[{type:b,tag:g,props:{href:"#sync-to-develop",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Once the deployment is finished, there would be some new changes being pushed to master branch. This job is to sync the changes back to develop so that both branch won't have any difference."}]},{type:a,value:c},{type:b,tag:G,props:{id:Q},children:[{type:b,tag:g,props:{href:"#what-are-daily-builds--how-are-they-built-",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:R}]},{type:a,value:c},{type:b,tag:Y,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"TODO"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:G,props:{id:S},children:[{type:b,tag:g,props:{href:"#what-are-prtimely-builds--how-are-they-built-",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:T}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"NocoDB creates docker and binaries for each PR."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This is to"}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"reduce pull request cycle time"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"allow issue reporters \u002F reviewers to verify the fix without setting up their local machines"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:n,props:{id:U},children:[{type:b,tag:g,props:{href:"#docker-images",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:V}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"When a non-draft Pull Request is created, reopened or synchronized, a timely build for Docker would be triggered for the changes only included in the following paths."}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"packages\u002Fnocodb-sdk\u002F**"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"packages\u002Fnc-gui\u002F**"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"packages\u002Fnc-plugin\u002F**"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"packages\u002Fnocodb\u002F**"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The docker images will be built and pushed to Docker Hub (See "},{type:b,tag:g,props:{href:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Fnocodb\u002Fnocodb-timely\u002Ftags",rel:[r,s,t],target:u},children:[{type:a,value:$}]},{type:a,value:" for the full list). Once the image is ready, Github bot will add a comment with the command in the pull request. The tag would be "},{type:b,tag:f,props:{},children:[{type:a,value:"\u003CNOCODB_CURRENT_VERSION\u003E-pr-\u003CPR_NUMBER\u003E-\u003CYYYYMMDD\u003E-\u003CHHMM\u003E"}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:v,props:{alt:w,src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F35857179\u002F175012097-240dab05-da93-4c4e-87c1-1c36fb1350bd.png"},children:[]}]},{type:a,value:c},{type:b,tag:n,props:{id:W},children:[{type:b,tag:g,props:{href:"#executables",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:X}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Similarly, we provide a timely build for executables for non-docker users. The source code will be built, packaged as binary files, and pushed to Github (See "},{type:b,tag:g,props:{href:"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb-timely\u002Freleases",rel:[r,s,t],target:u},children:[{type:a,value:$}]},{type:a,value:" for the full list)."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Currently, we only support the following targets:"}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"node16-linux-arm64"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"node16-macos-arm64"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"node16-win-arm64"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"node16-linux-x64"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"node16-macos-x64"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"node16-win-x64"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Once the executables are ready, Github bot will add a comment with the commands in the pull request."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:v,props:{alt:w,src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F35857179\u002F175012070-f5f3e7b8-6dc5-4d1c-9f7e-654bc5039521.png"},children:[]}]}]},dir:"\u002Fen\u002Fengineering",path:"\u002Fen\u002Fengineering\u002Fbuilds-and-releases",extension:".md",createdAt:aa,updatedAt:aa,to:"\u002Fengineering\u002Fbuilds-and-releases"},prev:{slug:"development-setup",title:"Development setup",to:"\u002Fengineering\u002Fdevelopment-setup"},next:{slug:"translation",title:"i18n translation",to:"\u002Fengineering\u002Ftranslation"}}],fetch:{},mutations:[]}}("text","element","\n","p","li","code","a","true",-1,"span","icon","icon-link",3,"h3","ul","release-draft-note","release-docker","nofollow","noopener","noreferrer","_blank","img","image",2,"validate-branch","process-input","pr-to-master","release-npm","close-issues","publish-docs","update-sdk-path","sync-to-develop","h2","Builds & Releases","how-to-make-a-nocodb-release-build-","How to make a NocoDB release build ?","case-1-leaving-inputs-blank","Case 1: Leaving inputs blank","case-2-manually-input","Case 2: Manually Input","release-action-explained","Release action explained","what-are-daily-builds--how-are-they-built-","What are daily builds & how are they built ?","what-are-prtimely-builds--how-are-they-built-","What are PR\u002Ftimely builds & how are they built ?","docker-images","Docker images","executables","Executables","blockquote","Once "," and ","nocodb\u002Fnocodb-timely","2022-07-03T23:11:23.661Z")));