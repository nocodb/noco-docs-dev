__NUXT_JSONP__("/developer-resources/sdk", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai){return {data:[{document:{slug:"sdk",description:"NocoDB SDK Overview",title:J,position:1400,category:"Developer Resources",menuTitle:J,toc:[{id:K,depth:2,text:L},{id:M,depth:z,text:N},{id:O,depth:z,text:P},{id:Q,depth:z,text:R},{id:S,depth:z,text:T}],body:{type:"root",children:[{type:b,tag:D,props:{},children:[{type:a,value:"We provide SDK for users to integrate with their applications. Currently only SDK for Javascript is supported."}]},{type:a,value:e},{type:b,tag:U,props:{},children:[{type:a,value:"\nNote: The NocoDB SDK requires authorization token. If you haven't created one, please check out "},{type:b,tag:h,props:{href:".\u002Faccessing-apis",target:V},children:[{type:a,value:"Accessing APIs"}]},{type:a,value:" for details.\n"}]},{type:a,value:e},{type:b,tag:"h2",props:{id:K},children:[{type:b,tag:h,props:{ariaHidden:i,href:"#sdk-for-javascript",tabIndex:j},children:[{type:b,tag:c,props:{className:[k,l]},children:[]}]},{type:a,value:L}]},{type:a,value:e},{type:b,tag:A,props:{id:M},children:[{type:b,tag:h,props:{ariaHidden:i,href:"#install-nocodb-sdk",tabIndex:j},children:[{type:b,tag:c,props:{className:[k,l]},children:[]}]},{type:a,value:N}]},{type:a,value:e},{type:b,tag:s,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,"language-bash"]},children:[{type:b,tag:n,props:{},children:[{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:"npm"}]},{type:a,value:" i nocodb-sdk\n"}]}]}]},{type:a,value:e},{type:b,tag:A,props:{id:O},children:[{type:b,tag:h,props:{ariaHidden:i,href:"#import-api",tabIndex:j},children:[{type:b,tag:c,props:{className:[k,l]},children:[]}]},{type:a,value:P}]},{type:a,value:e},{type:b,tag:s,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,B]},children:[{type:b,tag:n,props:{},children:[{type:b,tag:c,props:{className:[d,o,X]},children:[{type:a,value:"import"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"imports"]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"maybe-class-name"]},children:[{type:a,value:E}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o,X]},children:[{type:a,value:"from"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:"'nocodb-sdk'"}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:A,props:{id:Q},children:[{type:b,tag:h,props:{ariaHidden:i,href:"#configure-api",tabIndex:j},children:[{type:b,tag:c,props:{className:[k,l]},children:[]}]},{type:a,value:R}]},{type:a,value:e},{type:b,tag:D,props:{},children:[{type:a,value:"The Api can be authorizated by either Auth Token or API Token."}]},{type:a,value:e},{type:b,tag:F,props:{id:"example-auth-token"},children:[{type:b,tag:h,props:{ariaHidden:i,href:"#example-auth-token",tabIndex:j},children:[{type:b,tag:c,props:{className:[k,l]},children:[]}]},{type:a,value:"Example: Auth Token"}]},{type:a,value:e},{type:b,tag:s,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,B]},children:[{type:b,tag:n,props:{},children:[{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:Y}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:_}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:$}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,aa]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,C,q]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ad}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,C,q]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,ag,q]},children:[{type:a,value:"'xc-auth'"}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:"'\u003CAUTH_TOKEN\u003E'"}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:H}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:F,props:{id:"example-api-token"},children:[{type:b,tag:h,props:{ariaHidden:i,href:"#example-api-token",tabIndex:j},children:[{type:b,tag:c,props:{className:[k,l]},children:[]}]},{type:a,value:"Example: API Token"}]},{type:a,value:e},{type:b,tag:s,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,B]},children:[{type:b,tag:n,props:{},children:[{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:Y}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:_}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:$}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,aa]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,C,q]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ad}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,C,q]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,ag,q]},children:[{type:a,value:"'xc-token'"}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:"'\u003CAPI_TOKEN\u003E'"}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:H}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:A,props:{id:S},children:[{type:b,tag:h,props:{ariaHidden:i,href:"#call-functions",tabIndex:j},children:[{type:b,tag:c,props:{className:[k,l]},children:[]}]},{type:a,value:T}]},{type:a,value:e},{type:b,tag:D,props:{},children:[{type:a,value:"Once you have configured "},{type:b,tag:n,props:{},children:[{type:a,value:"api"}]},{type:a,value:", you can call different types of APIs by "},{type:b,tag:n,props:{},children:[{type:a,value:"api.\u003CTag\u003E.\u003CFunctionName\u003E"}]},{type:a,value:I}]},{type:a,value:e},{type:b,tag:U,props:{},children:[{type:a,value:"\nFor Tag and FunctionName, please check out the API table "},{type:b,tag:h,props:{href:".\u002Frest-apis",target:V},children:[{type:a,value:"here"}]},{type:a,value:".\n"}]},{type:a,value:e},{type:b,tag:F,props:{id:"example-calling-api---apiv1dbmetaprojectsprojectidtables"},children:[{type:b,tag:h,props:{ariaHidden:i,href:"#example-calling-api---apiv1dbmetaprojectsprojectidtables",tabIndex:j},children:[{type:b,tag:c,props:{className:[k,l]},children:[]}]},{type:a,value:"Example: Calling API - \u002Fapi\u002Fv1\u002Fdb\u002Fmeta\u002Fprojects\u002F{projectId}\u002Ftables"}]},{type:a,value:e},{type:b,tag:s,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,B]},children:[{type:b,tag:n,props:{},children:[{type:b,tag:c,props:{className:[d,o,"control-flow"]},children:[{type:a,value:"await"}]},{type:a,value:" api"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,ah]},children:[{type:a,value:"dbTable"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,"method",W,ah]},children:[{type:a,value:"create"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:G}]},{type:a,value:"params"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:H}]},{type:a,value:e}]}]}]}]},dir:"\u002Fen\u002Fdeveloper-resources",path:"\u002Fen\u002Fdeveloper-resources\u002Fsdk",extension:".md",createdAt:ai,updatedAt:ai,to:"\u002Fdeveloper-resources\u002Fsdk"},prev:{slug:"usage-information",title:"Usage Information",to:"\u002Fsetup-and-usages\u002Fusage-information"},next:{slug:"webhooks",title:"Webhooks",to:"\u002Fdeveloper-resources\u002Fwebhooks"}}],fetch:{},mutations:[]}}("text","element","span","token","\n","punctuation"," ","a","true",-1,"icon","icon-link","operator","code","keyword","\n  ","property",":","div","nuxt-content-highlight","pre","line-numbers","{","}","string",3,"h3","language-js","literal-property","p","Api","h4","(",")",".","NocoDB SDK","sdk-for-javascript","SDK For Javascript","install-nocodb-sdk","Install nocodb-sdk","import-api","Import Api","configure-api","Configure Api","call-functions","Call Functions","alert","_blank","function","module","const"," api ","=","new","class-name","baseURL","'https:\u002F\u002F\u003CHOST\u003E:\u003CPORT\u003E'",",","headers","\n    ","string-property","property-access","2022-12-29T10:16:13.788Z")));