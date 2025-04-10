"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[3409],{22264:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>n,metadata:()=>c,toc:()=>h});var d=t(74848),i=t(28453);const n={title:"Environment variables",description:"Environment Variables for NocoDB!",tags:["Open Source"],keywords:["NocoDB Environment Variables","NocoDB env variables","NocoDB envs","NocoDB .env"]},r=void 0,c={id:"getting-started/self-hosted/environment-variables",title:"Environment variables",description:"Environment Variables for NocoDB!",source:"@site/docs/020.getting-started/050.self-hosted/020.environment-variables.md",sourceDirName:"020.getting-started/050.self-hosted",slug:"/getting-started/self-hosted/environment-variables",permalink:"/getting-started/self-hosted/environment-variables",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/020.getting-started/050.self-hosted/020.environment-variables.md",tags:[{label:"Open Source",permalink:"/tags/open-source"}],version:"current",sidebarPosition:20,frontMatter:{title:"Environment variables",description:"Environment Variables for NocoDB!",tags:["Open Source"],keywords:["NocoDB Environment Variables","NocoDB env variables","NocoDB envs","NocoDB .env"]},sidebar:"tutorialSidebar",previous:{title:"Other Installation Methods",permalink:"/getting-started/self-hosted/installation/other-installations"},next:{title:"Upgrading",permalink:"/getting-started/self-hosted/upgrading"}},l={},h=[{value:"Database",id:"database",level:2},{value:"Authentication",id:"authentication",level:2},{value:"<strong>Updating Super Admin Credentials</strong>",id:"updating-super-admin-credentials",level:3},{value:"Storage",id:"storage",level:2},{value:"Email Notifications",id:"email-notifications",level:2},{value:"Backend",id:"backend",level:2},{value:"Frontend",id:"frontend",level:2},{value:"Cache",id:"cache",level:2},{value:"Product Configuration",id:"product-configuration",level:2},{value:"Postgres Data Reflection",id:"postgres-data-reflection",level:3},{value:"Logging &amp; Monitoring",id:"logging--monitoring",level:2},{value:"Debugging Only",id:"debugging-only",level:2},{value:"Telemetry",id:"telemetry",level:2},{value:"Litestream",id:"litestream",level:2}];function o(e){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.p,{children:["For production use cases, it is crucial to set all environment variables marked as ",(0,d.jsx)(s.strong,{children:'"Mandatory"'})," to ensure optimal\nperformance, security, and functionality of NocoDB."]}),"\n",(0,d.jsx)(s.h2,{id:"database",children:"Database"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Variable"}),(0,d.jsx)(s.th,{children:"Mandatory"}),(0,d.jsx)(s.th,{children:"Description"}),(0,d.jsx)(s.th,{children:"If Not Set"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_DB"})}),(0,d.jsx)(s.td,{children:"Yes"}),(0,d.jsxs)(s.td,{children:["The primary database where all NocoDB metadata and data are stored. Example format: ",(0,d.jsx)(s.code,{children:"pg://host.docker.internal:5432?u=username&p=password&d=database_name"}),"."]}),(0,d.jsxs)(s.td,{children:["A local SQLite database will be created in the root folder if ",(0,d.jsx)(s.code,{children:"NC_DB"})," is not specified."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_DB_JSON"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsxs)(s.td,{children:["Allows setting the database connection using a valid ",(0,d.jsx)(s.a,{href:"https://knexjs.org/guide/#configuration-options",children:"knex connection JSON string"})," instead of ",(0,d.jsx)(s.code,{children:"NC_DB"}),"."]}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_DB_JSON_FILE"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsxs)(s.td,{children:["A path to a knex connection JSON file can be used to specify the database connection, as an alternative to ",(0,d.jsx)(s.code,{children:"NC_DB"}),"."]}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"DATABASE_URL"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsxs)(s.td,{children:["A ",(0,d.jsx)(s.a,{href:"https://jdbc.postgresql.org/documentation/use/#connecting-to-the-database",children:"JDBC URL string"})," can be used for the database connection instead of ",(0,d.jsx)(s.code,{children:"NC_DB"}),"."]}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"DATABASE_URL_FILE"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsxs)(s.td,{children:["A path to a file containing a JDBC URL can be specified for the database connection as an alternative to ",(0,d.jsx)(s.code,{children:"NC_DB"}),"."]}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_CONNECTION_ENCRYPT_KEY"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsxs)(s.td,{children:["The key used to encrypt the credentials of external databases. ",(0,d.jsx)("br",{})," ",(0,d.jsx)(s.strong,{children:"Warning:"})," Changing this variable may break the application. If you must change it, use the CLI as described in the ",(0,d.jsx)(s.a,{href:"/data-sources/updating-secret",children:"NocoDB Secret CLI documentation"}),"."]}),(0,d.jsx)(s.td,{children:"Keep connection credentials as plain text in the database if not set."})]})]})]}),"\n",(0,d.jsx)(s.h2,{id:"authentication",children:"Authentication"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Variable"}),(0,d.jsx)(s.th,{children:"Mandatory"}),(0,d.jsx)(s.th,{children:"Description"}),(0,d.jsx)(s.th,{children:"If Not Set"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_AUTH_JWT_SECRET"})}),(0,d.jsx)(s.td,{children:"Yes"}),(0,d.jsx)(s.td,{children:"This JWT secret is utilized for generating authentication tokens."}),(0,d.jsx)(s.td,{children:"A random secret will be generated automatically."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_JWT_EXPIRES_IN"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsx)(s.td,{children:"Specifies the expiration time for JWT tokens."}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"10h"}),"."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_GOOGLE_CLIENT_ID"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsx)(s.td,{children:"Google client ID required to activate Google authentication."}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_GOOGLE_CLIENT_SECRET"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsx)(s.td,{children:"Google client secret required to activate Google authentication."}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_ADMIN_EMAIL"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsxs)(s.td,{children:["Super admin email address. This is useful in case you need to recover your username and password. ",(0,d.jsx)(s.a,{href:"#updating-super-admin-credentials",children:"See update requirements"}),"."]}),(0,d.jsx)(s.td,{children:"An initial prompt for email and password is required when accessing the UI for the first time."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_ADMIN_PASSWORD"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsxs)(s.td,{children:["Super admin password. Must be at least 8 characters long, including one uppercase letter, one number, and one special character from ",(0,d.jsx)(s.code,{children:"$&+,:;=?@#'.^*()%!_-\\\""}),". This is useful for username and password recovery. ",(0,d.jsx)(s.a,{href:"#updating-super-admin-credentials",children:"See update requirements"}),"."]}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_DISABLE_EMAIL_AUTH"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsx)(s.td,{children:"Disables email and password-based authentication, intended for use when Google authentication variables are configured."}),(0,d.jsx)(s.td,{})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"updating-super-admin-credentials",children:(0,d.jsx)(s.strong,{children:"Updating Super Admin Credentials"})}),"\n",(0,d.jsxs)(s.p,{children:["To update ",(0,d.jsx)(s.strong,{children:"either"})," ",(0,d.jsx)(s.code,{children:"NC_ADMIN_EMAIL"})," or ",(0,d.jsx)(s.code,{children:"NC_ADMIN_PASSWORD"}),", you must set ",(0,d.jsx)(s.strong,{children:"both"})," variables together."]}),"\n",(0,d.jsx)(s.h2,{id:"storage",children:"Storage"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Variable"}),(0,d.jsx)(s.th,{children:"Mandatory"}),(0,d.jsx)(s.th,{children:"Description"}),(0,d.jsx)(s.th,{children:"If Not Set"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_S3_BUCKET_NAME"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsx)(s.td,{children:"The name of the AWS S3 bucket used for the S3 storage plugin."}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_S3_REGION"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsxs)(s.td,{children:["The AWS S3 region where the S3 storage plugin bucket is located. Note that ",(0,d.jsx)(s.code,{children:"NC_S3_ENDPOINT"})," takes precedence if set (the endpoint URL includes the region)."]}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_S3_ENDPOINT"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsx)(s.td,{children:"S3 endpoint for S3 storage plugin."}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"s3.<region>.amazonaws.com"})]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_S3_ACCESS_KEY"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsx)(s.td,{children:"The AWS access key ID for the S3 storage plugin. Required if no role access in use."}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_S3_ACCESS_SECRET"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsx)(s.td,{children:"The AWS access secret associated with the S3 storage plugin. Required if no role access in use."}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_S3_FORCE_PATH_STYLE"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsxs)(s.td,{children:["Whether to force ",(0,d.jsx)(s.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/VirtualHosting.html#path-style-access",children:"path-style requests"})," for the S3 storage plugin."]}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_S3_ACL"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsxs)(s.td,{children:["The ",(0,d.jsx)(s.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html",children:"ACL"})," for the objects in S3"]}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_ATTACHMENT_FIELD_SIZE"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsxs)(s.td,{children:["Maximum file size allowed for ",(0,d.jsx)(s.a,{href:"/fields/field-types/custom-types/attachment/",children:"attachments"})," in bytes."]}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"20971520"})," (20 MiB)."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_NON_ATTACHMENT_FIELD_SIZE"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsx)(s.td,{children:"Sets the maximum size in bytes for individual non-attachment form fields during multipart uploads. Useful for increasing limit for large text or JSON fields to prevent 'Field value too long' errors."}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"1MB"})," (based on ",(0,d.jsx)(s.code,{children:"multer"}),"'s default field size limit)."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_MAX_ATTACHMENTS_ALLOWED"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsx)(s.td,{children:"Maximum number of attachments allowed per cell."}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"10"}),"."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_ATTACHMENT_RETENTION_DAYS"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsx)(s.td,{children:"Number of days to retain attachment on storage after all references deleted. (Set 0 to keep forever)"}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"10"}),"."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_SECURE_ATTACHMENTS"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsxs)(s.td,{children:["Enables access to attachments only through pre-signed URLs. Set to ",(0,d.jsx)(s.code,{children:"true"})," to activate; all other values are treated as ",(0,d.jsx)(s.code,{children:"false"}),". \u26a0 Note: Enabling this will make existing links inaccessible."]}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"false"}),"."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_ATTACHMENT_EXPIRE_SECONDS"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsxs)(s.td,{children:["Time in seconds after which pre-signed URLs for attachments start to expire. The actual expiration will occur after this time plus an additional 10 minutes. Only applicable if ",(0,d.jsx)(s.code,{children:"NC_SECURE_ATTACHMENTS"})," is enabled."]}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"7200"})," (2 hours)."]})]})]})]}),"\n",(0,d.jsx)(s.h2,{id:"email-notifications",children:"Email Notifications"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:"The following SMTP variables are used to send email notifications to users, e.g., invites."}),"\n"]}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Variable"}),(0,d.jsx)(s.th,{children:"Mandatory"}),(0,d.jsx)(s.th,{children:"Description"}),(0,d.jsx)(s.th,{children:"If Not Set"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_SMTP_FROM"})}),(0,d.jsx)(s.td,{children:"Yes"}),(0,d.jsx)(s.td,{children:"The email address used as the sender for the SMTP plugin."}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_SMTP_HOST"})}),(0,d.jsx)(s.td,{children:"Yes"}),(0,d.jsx)(s.td,{children:"The hostname of the email server for the SMTP plugin."}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_SMTP_PORT"})}),(0,d.jsx)(s.td,{children:"Yes"}),(0,d.jsx)(s.td,{children:"The network port of the email server for the SMTP plugin."}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_SMTP_USERNAME"})}),(0,d.jsx)(s.td,{children:"Yes"}),(0,d.jsx)(s.td,{children:"The username for authentication with the SMTP plugin."}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_SMTP_PASSWORD"})}),(0,d.jsx)(s.td,{children:"Yes"}),(0,d.jsx)(s.td,{children:"The password for authentication with the SMTP plugin."}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_SMTP_SECURE"})}),(0,d.jsx)(s.td,{children:"Yes"}),(0,d.jsxs)(s.td,{children:["Enables secure authentication for the SMTP plugin. Set to ",(0,d.jsx)(s.code,{children:"true"})," to enable; all other values are considered ",(0,d.jsx)(s.code,{children:"false"}),"."]}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_SMTP_IGNORE_TLS"})}),(0,d.jsx)(s.td,{children:"Yes"}),(0,d.jsxs)(s.td,{children:["Ignores TLS for the SMTP plugin. Set to ",(0,d.jsx)(s.code,{children:"true"})," to ignore TLS; all other values are considered ",(0,d.jsx)(s.code,{children:"false"}),". For more details, see ",(0,d.jsx)(s.a,{href:"https://nodemailer.com/smtp/",children:"Nodemailer's SMTP documentation"}),"."]}),(0,d.jsx)(s.td,{})]})]})]}),"\n",(0,d.jsx)(s.h2,{id:"backend",children:"Backend"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Variable"}),(0,d.jsx)(s.th,{children:"Mandatory"}),(0,d.jsx)(s.th,{children:"Description"}),(0,d.jsx)(s.th,{children:"If Not Set"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"PORT"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsx)(s.td,{children:"Specifies the network port on which NocoDB will run."}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"8080"}),"."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NODE_OPTIONS"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsxs)(s.td,{children:["Node.js ",(0,d.jsx)(s.a,{href:"https://nodejs.org/api/cli.html#node_optionsoptions",children:"options"})," to pass to the instance."]}),(0,d.jsx)(s.td,{})]})]})]}),"\n",(0,d.jsx)(s.h2,{id:"frontend",children:"Frontend"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Variable"}),(0,d.jsx)(s.th,{children:"Mandatory"}),(0,d.jsx)(s.th,{children:"Description"}),(0,d.jsx)(s.th,{children:"If Not Set"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_PUBLIC_URL"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsx)(s.td,{children:"This is the base URL used for constructing URLs in email templates, generating the Swagger documentation URL, and handling backend URL requirements. It should be set to your public-facing NocoDB URL to ensure consistency across the application."}),(0,d.jsx)(s.td,{children:"By default, it infers the URL from the incoming request on the backend. If the server is behind a proxy, this may result in incorrect URLs."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_DASHBOARD_URL"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsx)(s.td,{children:"Defines a custom dashboard URL path."}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"/dashboard"}),"."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NUXT_PUBLIC_NC_BACKEND_URL"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsx)(s.td,{children:"Specifies a custom backend URL."}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"http://localhost:8080"}),"."]})]})]})]}),"\n",(0,d.jsx)(s.h2,{id:"cache",children:"Cache"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Variable"}),(0,d.jsx)(s.th,{children:"Mandatory"}),(0,d.jsx)(s.th,{children:"Description"}),(0,d.jsx)(s.th,{children:"If Not Set"})]})}),(0,d.jsx)(s.tbody,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_REDIS_URL"})}),(0,d.jsx)(s.td,{children:"Yes"}),(0,d.jsxs)(s.td,{children:["Specifies the Redis URL used for caching. ",(0,d.jsx)("br",{})," Eg: ",(0,d.jsx)(s.code,{children:"redis://:authpassword@127.0.0.1:6380/4"})]}),(0,d.jsx)(s.td,{children:"Caching layer of backend"})]})})]}),"\n",(0,d.jsx)(s.h2,{id:"product-configuration",children:"Product Configuration"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Variable"}),(0,d.jsx)(s.th,{children:"Mandatory"}),(0,d.jsx)(s.th,{children:"Description"}),(0,d.jsx)(s.th,{children:"If Not Set"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"DB_QUERY_LIMIT_DEFAULT"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsx)(s.td,{children:"Default pagination limit for data tables."}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"25"}),". Maximum is ",(0,d.jsx)(s.code,{children:"100"})]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"DB_QUERY_LIMIT_GROUP_BY_GROUP"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsx)(s.td,{children:"Number of groups per page."}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"10"}),"."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"DB_QUERY_LIMIT_GROUP_BY_RECORD"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsx)(s.td,{children:"Number of records per group."}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"10"}),"."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"DB_QUERY_LIMIT_MAX"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsx)(s.td,{children:"Maximum allowable pagination limit."}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"1000"}),"."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"DB_QUERY_LIMIT_MIN"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsx)(s.td,{children:"Minimum allowable pagination limit."}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"10"})]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_CONNECT_TO_EXTERNAL_DB_DISABLED"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsx)(s.td,{children:"Disables the ability to create bases on external databases."}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_INVITE_ONLY_SIGNUP"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsxs)(s.td,{children:["Disables public signup; signup is possible only via invitations. Integrated into the ",(0,d.jsx)(s.a,{href:"/account-settings/oss-specific-details#enable--disable-signup",children:"super admin settings menu"})," as of version 0.99.0."]}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_REQUEST_BODY_SIZE"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsxs)(s.td,{children:["Maximum bytes allowed in the request body, based on ",(0,d.jsx)(s.a,{href:"https://expressjs.com/en/resources/middleware/body-parser.html#limit",children:"ExpressJS limits"}),"."]}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"1048576"})," (1 MB)."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_EXPORT_MAX_TIMEOUT"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsx)(s.td,{children:"Sets a timeout in milliseconds for downloading CSVs in batches if not completed within this period."}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"5000"})," (5 seconds)."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_ALLOW_LOCAL_HOOKS"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsxs)(s.td,{children:["Allows webhooks to call local network links, posing potential security risks. Set to ",(0,d.jsx)(s.code,{children:"true"})," to enable; all other values are considered ",(0,d.jsx)(s.code,{children:"false"}),"."]}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"false"}),"."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_SANITIZE_COLUMN_NAME"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsx)(s.td,{children:"Enables sanitization of column names during their creation to prevent SQL injection and other security issues."}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"true"}),"."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_TOOL_DIR"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsxs)(s.td,{children:["Specifies the directory to store metadata and app-related files. In Docker setups, this maps to ",(0,d.jsx)(s.code,{children:"/usr/app/data/"})," for mounting volumes."]}),(0,d.jsx)(s.td,{children:"Defaults to the current working directory."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_DISABLE_PG_DATA_REFLECTION"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsxs)(s.td,{children:["Disables the creation of a schema for each base in PostgreSQL.  ",(0,d.jsx)(s.a,{href:"#postgres-data-reflection",children:"Click here for more detail"})]}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_MIGRATIONS_DISABLED"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsx)(s.td,{children:"Disables NocoDB migrations."}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_DISABLE_AUDIT"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsx)(s.td,{children:"Disables the audit log feature."}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"false"}),"."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_AUTOMATION_LOG_LEVEL"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsxs)(s.td,{children:["Configures logging levels for automation features. Possible values: ",(0,d.jsx)(s.code,{children:"OFF"}),", ",(0,d.jsx)(s.code,{children:"ERROR"}),", ",(0,d.jsx)(s.code,{children:"ALL"}),". More details can be found under ",(0,d.jsx)(s.a,{href:"/automation/webhook/create-webhook",children:"Webhooks"}),"."]}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"OFF"}),"."]})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"postgres-data-reflection",children:"Postgres Data Reflection"}),"\n",(0,d.jsxs)(s.p,{children:["NocoDB UI is exactly what's in your Postgres database schema. Same tables, same columns\u2014everything is perfectly\nmirrored. This is done by creating a schema for each base in PostgreSQL. This feature is enabled by default if the user\nhas the required permissions. To disable it, set the ",(0,d.jsx)(s.code,{children:"NC_DISABLE_PG_DATA_REFLECTION"})," environment variable to ",(0,d.jsx)(s.code,{children:"false"}),"."]}),"\n",(0,d.jsx)(s.h2,{id:"logging--monitoring",children:"Logging & Monitoring"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Variable"}),(0,d.jsx)(s.th,{children:"Mandatory"}),(0,d.jsx)(s.th,{children:"Description"}),(0,d.jsx)(s.th,{children:"If Not Set"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_SENTRY_DSN"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsx)(s.td,{children:"Data Source Name (DSN) for integrating with Sentry for monitoring and error tracking."}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_DISABLE_ERR_REPORTS"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsx)(s.td,{children:"Disable default Sentry error reporting."}),(0,d.jsx)(s.td,{children:"TRUE"})]})]})]}),"\n",(0,d.jsx)(s.h2,{id:"debugging-only",children:"Debugging Only"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Variable"}),(0,d.jsx)(s.th,{children:"Mandatory"}),(0,d.jsx)(s.th,{children:"Description"}),(0,d.jsx)(s.th,{children:"If Not Set"})]})}),(0,d.jsx)(s.tbody,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_DISABLE_CACHE"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsx)(s.td,{children:"Disables caching to force metadata fetching directly from the database instead of Redis/cache. Recommended only during debugging."}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"false"}),"."]})]})})]}),"\n",(0,d.jsx)(s.h2,{id:"telemetry",children:"Telemetry"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Variable"}),(0,d.jsx)(s.th,{children:"Mandatory"}),(0,d.jsx)(s.th,{children:"Description"}),(0,d.jsx)(s.th,{children:"If Not Set"})]})}),(0,d.jsx)(s.tbody,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"NC_DISABLE_TELE"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsx)(s.td,{children:"Disables the telemetry to prevent sending anonymous usage data. Please keep it enabled to help us understand the usage of the product and the impact that any new breaking change can cause."}),(0,d.jsx)(s.td,{})]})})]}),"\n",(0,d.jsx)(s.h2,{id:"litestream",children:"Litestream"}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsxs)(s.p,{children:["Litestream is used ",(0,d.jsx)(s.strong,{children:"only"})," when ",(0,d.jsx)(s.code,{children:"NC_DB"})," is set to SQLite. It backs up the SQLite database and stores it in S3."]}),"\n"]}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Variable"}),(0,d.jsx)(s.th,{children:"Mandatory"}),(0,d.jsx)(s.th,{children:"Description"}),(0,d.jsx)(s.th,{children:"If Not Set"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"LITESTREAM_S3_ENDPOINT"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsxs)(s.td,{children:["URL of an S3-compatible object storage service endpoint for ",(0,d.jsx)(s.a,{href:"https://litestream.io/",children:"Litestream"})," replication of NocoDB's default SQLite database. Example: ",(0,d.jsx)(s.code,{children:"s3.eu-central-1.amazonaws.com"}),"."]}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.a,{href:"https://aws.amazon.com/s3/",children:"AWS S3"}),"."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"LITESTREAM_S3_REGION"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsxs)(s.td,{children:["AWS region of the Litestream replication object storage bucket. Note that ",(0,d.jsx)(s.code,{children:"LITESTREAM_S3_ENDPOINT"})," takes precedence if configured (the endpoint URL includes the region)."]}),(0,d.jsxs)(s.td,{children:["Defaults to the ",(0,d.jsx)(s.a,{href:"https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-region.html",children:"default region configured in AWS"}),"."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"LITESTREAM_S3_BUCKET"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsx)(s.td,{children:"Name of the object storage bucket to store the Litestream replication in."}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.em,{children:"Litestream replication is disabled if this variable is not set."})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"LITESTREAM_S3_PATH"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsx)(s.td,{children:"Directory path to use within the Litestream replication object storage bucket."}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"nocodb"}),"."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"LITESTREAM_S3_ACCESS_KEY_ID"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsx)(s.td,{children:"Authentication key ID for the Litestream replication object storage bucket."}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.em,{children:"Litestream replication is disabled if this variable is not set."})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"LITESTREAM_S3_SECRET_ACCESS_KEY"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsx)(s.td,{children:"Authentication secret for the Litestream replication object storage bucket."}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.em,{children:"Litestream replication is disabled if this variable is not set."})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"LITESTREAM_S3_SKIP_VERIFY"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsx)(s.td,{children:"Whether to disable TLS verification for the Litestream replication object storage service. Useful when testing against a local node such as MinIO and you are using self-signed certificates."}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"false"}),"."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"LITESTREAM_RETENTION"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsx)(s.td,{children:"Amount of time Litestream snapshot and WAL files are kept. After the retention period, a new snapshot is created and the old one is removed. WAL files that exist before the oldest snapshot will also be removed."}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"1440h"})," (60 days)."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"LITESTREAM_RETENTION_CHECK_INTERVAL"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsx)(s.td,{children:"Frequency in which Litestream will check if retention needs to be enforced."}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"72h"})," (3 days)."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"LITESTREAM_SNAPSHOT_INTERVAL"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsx)(s.td,{children:"Frequency in which new Litestream snapshots are created. A higher frequency reduces the time to restore since newer snapshots will have fewer WAL frames to apply. Retention still applies to these snapshots."}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"24h"})," (1 day)."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"LITESTREAM_SYNC_INTERVAL"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsx)(s.td,{children:"Frequency in which frames are pushed to the Litestream replica. Increasing this frequency can increase object storage costs significantly."}),(0,d.jsxs)(s.td,{children:["Defaults to ",(0,d.jsx)(s.code,{children:"60s"})," (1 minute)."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"LITESTREAM_AGE_PUBLIC_KEY"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.a,{href:"https://age-encryption.org/",children:"age"})," public key generated by ",(0,d.jsx)(s.code,{children:"age-keygen"})," (",(0,d.jsx)(s.code,{children:"age1..."}),") or SSH public key (",(0,d.jsx)(s.code,{children:"ssh-ed25519 AAAA..."}),", ",(0,d.jsx)(s.code,{children:"ssh-rsa AAAA..."}),") used to encrypt the Litestream replication for. Refer to the relevant ",(0,d.jsx)(s.a,{href:"https://litestream.io/reference/config/#encryption",children:"Litestream documentation"})," for details."]}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.em,{children:"Litestream replication is unencrypted if this variable is not set."})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"LITESTREAM_AGE_SECRET_KEY"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.a,{href:"https://age-encryption.org/",children:"age"})," secret key (",(0,d.jsx)(s.code,{children:"AGE-SECRET-KEY-1..."}),") used to encrypt the Litestream replication with. Refer to the relevant ",(0,d.jsx)(s.a,{href:"https://litestream.io/reference/config/#encryption",children:"Litestream documentation"})," for details."]}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.em,{children:"Litestream replication is unencrypted if this variable is not set."})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"AWS_ACCESS_KEY_ID"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.em,{children:(0,d.jsx)(s.strong,{children:"Deprecated"})}),". Please use ",(0,d.jsx)(s.code,{children:"LITESTREAM_S3_ACCESS_KEY_ID"})," instead."]}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"AWS_SECRET_ACCESS_KEY"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.em,{children:(0,d.jsx)(s.strong,{children:"Deprecated"})}),". Please use ",(0,d.jsx)(s.code,{children:"LITESTREAM_S3_SECRET_ACCESS_KEY"})," instead."]}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"AWS_BUCKET"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.em,{children:(0,d.jsx)(s.strong,{children:"Deprecated"})}),". Please use ",(0,d.jsx)(s.code,{children:"LITESTREAM_S3_BUCKET"})," instead."]}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"AWS_BUCKET_PATH"})}),(0,d.jsx)(s.td,{children:"No"}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.em,{children:(0,d.jsx)(s.strong,{children:"Deprecated"})}),". Please use ",(0,d.jsx)(s.code,{children:"LITESTREAM_S3_PATH"})," instead."]}),(0,d.jsx)(s.td,{})]})]})]})]})}function a(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>c});var d=t(96540);const i={},n=d.createContext(i);function r(e){const s=d.useContext(n);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),d.createElement(n.Provider,{value:s},e.children)}}}]);