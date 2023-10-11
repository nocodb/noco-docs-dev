"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[6325],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},s="mdxType",N={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=p(a),u=r,k=s["".concat(d,".").concat(u)]||s[u]||N[u]||l;return a?n.createElement(k,i(i({ref:e},m),{},{components:a})):n.createElement(k,i({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[s]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},74653:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>N,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={title:"Environment variables",description:"Environment Variables for NocoDB!",hide_table_of_contents:!0,tags:["Open Source"],keywords:["NocoDB environment variables","NocoDB env variables","NocoDB envs","NocoDB env"]},i=void 0,o={unversionedId:"getting-started/self-hosted/environment-variables",id:"getting-started/self-hosted/environment-variables",title:"Environment variables",description:"Environment Variables for NocoDB!",source:"@site/docs/020.getting-started/050.self-hosted/020.environment-variables.md",sourceDirName:"020.getting-started/050.self-hosted",slug:"/getting-started/self-hosted/environment-variables",permalink:"/getting-started/self-hosted/environment-variables",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/020.getting-started/050.self-hosted/020.environment-variables.md",tags:[{label:"Open Source",permalink:"/tags/open-source"}],version:"current",sidebarPosition:20,frontMatter:{title:"Environment variables",description:"Environment Variables for NocoDB!",hide_table_of_contents:!0,tags:["Open Source"],keywords:["NocoDB environment variables","NocoDB env variables","NocoDB envs","NocoDB env"]},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/getting-started/self-hosted/installation"},next:{title:"Upgrading",permalink:"/getting-started/self-hosted/upgrading"}},d={},p=[],m={toc:p},s="wrapper";function N(t){let{components:e,...a}=t;return(0,r.kt)(s,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"For production use-cases, it is ",(0,r.kt)("strong",{parentName:"p"},"recommended")," to configure "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NC_DB"),", "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NC_AUTH_JWT_SECRET"),", "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NC_PUBLIC_URL"),", "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NC_REDIS_URL"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"),(0,r.kt)("th",{parentName:"tr",align:null},"If absent"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_DB"),(0,r.kt)("td",{parentName:"tr",align:null},"See our example database URLs ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/nocodb/nocodb#docker"},"here"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"A local SQLite will be created in root folder if ",(0,r.kt)("inlineCode",{parentName:"td"},"NC_DB")," is not provided")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_DB_JSON"),(0,r.kt)("td",{parentName:"tr",align:null},"Can be used instead of ",(0,r.kt)("inlineCode",{parentName:"td"},"NC_DB")," and value should be valid knex connection JSON"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_DB_JSON_FILE"),(0,r.kt)("td",{parentName:"tr",align:null},"Can be used instead of ",(0,r.kt)("inlineCode",{parentName:"td"},"NC_DB")," and value should be a valid path to knex connection JSON"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATABASE_URL"),(0,r.kt)("td",{parentName:"tr",align:null},"Can be used instead of ",(0,r.kt)("inlineCode",{parentName:"td"},"NC_DB")," and value should be in JDBC URL format"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATABASE_URL_FILE"),(0,r.kt)("td",{parentName:"tr",align:null},"Can be used instead of ",(0,r.kt)("inlineCode",{parentName:"td"},"DATABASE_URL")," and value should be a valid path to file containing JDBC URL format."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_AUTH_JWT_SECRET"),(0,r.kt)("td",{parentName:"tr",align:null},"JWT secret used for auth and storing other secrets"),(0,r.kt)("td",{parentName:"tr",align:null},"A random secret will be generated")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PORT"),(0,r.kt)("td",{parentName:"tr",align:null},"For setting app running port"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"8080"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DB_QUERY_LIMIT_DEFAULT"),(0,r.kt)("td",{parentName:"tr",align:null},"Pagination limit"),(0,r.kt)("td",{parentName:"tr",align:null},"25")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DB_QUERY_LIMIT_MAX"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum allowed pagination limit"),(0,r.kt)("td",{parentName:"tr",align:null},"1000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DB_QUERY_LIMIT_MIN"),(0,r.kt)("td",{parentName:"tr",align:null},"Minimum allowed pagination limit"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_TOOL_DIR"),(0,r.kt)("td",{parentName:"tr",align:null},"App directory to keep metadata and app related files"),(0,r.kt)("td",{parentName:"tr",align:null},"Defaults to current working directory. In docker maps to ",(0,r.kt)("inlineCode",{parentName:"td"},"/usr/app/data/")," for mounting volume.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_PUBLIC_URL"),(0,r.kt)("td",{parentName:"tr",align:null},"Used for sending Email invitations"),(0,r.kt)("td",{parentName:"tr",align:null},"Best guess from http request params")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_JWT_EXPIRES_IN"),(0,r.kt)("td",{parentName:"tr",align:null},"JWT token expiry time"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"10h"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_CONNECT_TO_EXTERNAL_DB_DISABLED"),(0,r.kt)("td",{parentName:"tr",align:null},"Disable Project creation with external database"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_INVITE_ONLY_SIGNUP"),(0,r.kt)("td",{parentName:"tr",align:null},"Removed since version 0.99.0 and now it's recommended to use ",(0,r.kt)("a",{parentName:"td",href:"/account-settings/oss-specific-details#enable--disable-signup"},"super admin settings menu"),".   Allow users to signup only via invite URL, value should be any non-empty string."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NUXT_PUBLIC_NC_BACKEND_URL"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom Backend URL"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"http://localhost:8080")," will be used")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_REQUEST_BODY_SIZE"),(0,r.kt)("td",{parentName:"tr",align:null},"Request body size ",(0,r.kt)("a",{parentName:"td",href:"https://expressjs.com/en/resources/middleware/body-parser.html#limit"},"limit")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1048576"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_EXPORT_MAX_TIMEOUT"),(0,r.kt)("td",{parentName:"tr",align:null},"After NC_EXPORT_MAX_TIMEOUT, CSV gets downloaded in batches"),(0,r.kt)("td",{parentName:"tr",align:null},"Default value 5000(in millisecond) will be used")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_DISABLE_TELE"),(0,r.kt)("td",{parentName:"tr",align:null},"Disable telemetry"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_DASHBOARD_URL"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom dashboard URL path"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/dashboard"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_GOOGLE_CLIENT_ID"),(0,r.kt)("td",{parentName:"tr",align:null},"Google client ID to enable Google authentication"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_GOOGLE_CLIENT_SECRET"),(0,r.kt)("td",{parentName:"tr",align:null},"Google client secret to enable Google authentication"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_MIGRATIONS_DISABLED"),(0,r.kt)("td",{parentName:"tr",align:null},"Disable NocoDB migration"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_MIN"),(0,r.kt)("td",{parentName:"tr",align:null},"If set to any non-empty string the default splash screen(initial welcome animation) and matrix screensaver will disable"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_SENTRY_DSN"),(0,r.kt)("td",{parentName:"tr",align:null},"For Sentry monitoring"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_REDIS_URL"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom Redis URL. Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"redis://:authpassword@127.0.0.1:6380/4")),(0,r.kt)("td",{parentName:"tr",align:null},"Meta data will be stored in memory")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_DISABLE_ERR_REPORT"),(0,r.kt)("td",{parentName:"tr",align:null},"Disable error reporting"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_DISABLE_CACHE"),(0,r.kt)("td",{parentName:"tr",align:null},"To be used only while debugging. On setting this to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," - meta data be fetched from db instead of redis/cache."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AWS_ACCESS_KEY_ID"),(0,r.kt)("td",{parentName:"tr",align:null},"For Litestream - S3 access key id"),(0,r.kt)("td",{parentName:"tr",align:null},"If Litestream is configured and ",(0,r.kt)("inlineCode",{parentName:"td"},"NC_DB")," is not present. SQLite gets backed up to S3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AWS_SECRET_ACCESS_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"For Litestream - S3 secret access key"),(0,r.kt)("td",{parentName:"tr",align:null},"If Litestream is configured and ",(0,r.kt)("inlineCode",{parentName:"td"},"NC_DB")," is not present. SQLite gets backed up to S3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AWS_BUCKET"),(0,r.kt)("td",{parentName:"tr",align:null},"For Litestream - S3 bucket"),(0,r.kt)("td",{parentName:"tr",align:null},"If Litestream is configured and ",(0,r.kt)("inlineCode",{parentName:"td"},"NC_DB")," is not present. SQLite gets backed up to S3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AWS_BUCKET_PATH"),(0,r.kt)("td",{parentName:"tr",align:null},"For Litestream - S3 bucket path (like folder within S3 bucket)"),(0,r.kt)("td",{parentName:"tr",align:null},"If Litestream is configured and ",(0,r.kt)("inlineCode",{parentName:"td"},"NC_DB")," is not present. SQLite gets backed up to S3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_SMTP_FROM"),(0,r.kt)("td",{parentName:"tr",align:null},"For SMTP plugin - Email sender address"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_SMTP_HOST"),(0,r.kt)("td",{parentName:"tr",align:null},"For SMTP plugin - SMTP host value"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_SMTP_PORT"),(0,r.kt)("td",{parentName:"tr",align:null},"For SMTP plugin - SMTP port value"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_SMTP_USERNAME"),(0,r.kt)("td",{parentName:"tr",align:null},"For SMTP plugin (Optional) - SMTP username value for authentication"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_SMTP_PASSWORD"),(0,r.kt)("td",{parentName:"tr",align:null},"For SMTP plugin (Optional) - SMTP password value for authentication"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_SMTP_SECURE"),(0,r.kt)("td",{parentName:"tr",align:null},"For SMTP plugin (Optional) - To enable secure set value as ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," any other value treated as false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_SMTP_IGNORE_TLS"),(0,r.kt)("td",{parentName:"tr",align:null},"For SMTP plugin (Optional) - To ignore tls set value as ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," any other value treated as false. For more info visit ",(0,r.kt)("a",{parentName:"td",href:"https://nodemailer.com/smtp/"},"https://nodemailer.com/smtp/")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_S3_BUCKET_NAME"),(0,r.kt)("td",{parentName:"tr",align:null},"For S3 storage plugin - AWS S3 bucket name"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_S3_REGION"),(0,r.kt)("td",{parentName:"tr",align:null},"For S3 storage plugin - AWS S3 region"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_S3_ACCESS_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"For S3 storage plugin - AWS access key credential for accessing resource"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_S3_ACCESS_SECRET"),(0,r.kt)("td",{parentName:"tr",align:null},"For S3 storage plugin - AWS access secret credential for accessing resource"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_ADMIN_EMAIL"),(0,r.kt)("td",{parentName:"tr",align:null},"For updating/creating super admin with provided email and password"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_ATTACHMENT_FIELD_SIZE"),(0,r.kt)("td",{parentName:"tr",align:null},"For setting the attachment field size(in Bytes)"),(0,r.kt)("td",{parentName:"tr",align:null},"Defaults to 20MB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_ADMIN_PASSWORD"),(0,r.kt)("td",{parentName:"tr",align:null},"For updating/creating super admin with provided email and password. Your password should have at least 8 letters with one uppercase, one number and one special letter(Allowed special chars $&+,:;=?@#","|","'.^*()%!_-\" )"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NODE_OPTIONS"),(0,r.kt)("td",{parentName:"tr",align:null},"For passing Node.js ",(0,r.kt)("a",{parentName:"td",href:"https://nodejs.org/api/cli.html#node_optionsoptions"},"options")," to instance"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_MINIMAL_DBS"),(0,r.kt)("td",{parentName:"tr",align:null},"Create a new SQLite file for each project. All the db files are stored in ",(0,r.kt)("inlineCode",{parentName:"td"},"nc_minimal_dbs")," folder in current working directory. (This option restricts project creation on external sources)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_DISABLE_AUDIT"),(0,r.kt)("td",{parentName:"tr",align:null},"Disable Audit Log"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_AUTOMATION_LOG_LEVEL"),(0,r.kt)("td",{parentName:"tr",align:null},"Possible Values: ",(0,r.kt)("inlineCode",{parentName:"td"},"OFF"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ERROR"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ALL"),". See ",(0,r.kt)("a",{parentName:"td",href:"/automation/webhook/create-webhook#call-log"},"Webhooks")," for details."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OFF"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_SECURE_ATTACHMENTS"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow accessing attachments only through presigned urls. To enable set value as ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," any other value treated as false. (\u26a0 this will make existing links inaccessible \u26a0)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_ATTACHMENT_EXPIRE_SECONDS"),(0,r.kt)("td",{parentName:"tr",align:null},"How many seconds before expiring presigned attachment urls. (Attachments will expire in at least set seconds and at most 10mins after set time)"),(0,r.kt)("td",{parentName:"tr",align:null},"7200 (2 hours)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_ALLOW_LOCAL_HOOKS"),(0,r.kt)("td",{parentName:"tr",align:null},"To enable set value as ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," any other value treated as false. (\u26a0 this will allow webhooks to call local links which can raise security issues \u26a0)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))))}N.isMDXComponent=!0}}]);