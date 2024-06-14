"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[6646],{26672:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var t=n(74848),r=n(28453);const s={title:"Writing docs",description:"Overview to writing docs",tags:["Engineering"]},o=void 0,l={id:"engineering/writing-docs",title:"Writing docs",description:"Overview to writing docs",source:"@site/docs/150.engineering/080.writing-docs.md",sourceDirName:"150.engineering",slug:"/engineering/writing-docs",permalink:"/engineering/writing-docs",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/150.engineering/080.writing-docs.md",tags:[{label:"Engineering",permalink:"/tags/engineering"}],version:"current",sidebarPosition:80,frontMatter:{title:"Writing docs",description:"Overview to writing docs",tags:["Engineering"]},sidebar:"tutorialSidebar",previous:{title:"i18n translation",permalink:"/engineering/translation"},next:{title:"Developer resources",permalink:"/category/developer-resources"}},c={},d=[{value:"Folder Structure",id:"folder-structure",level:2},{value:"File Structure",id:"file-structure",level:2},{value:"Nomenclature",id:"nomenclature",level:2},{value:"Tags",id:"tags",level:2},{value:"Active Tags",id:"active-tags",level:3},{value:"Description",id:"description",level:2},{value:"Images",id:"images",level:2},{value:"Before you commit",id:"before-you-commit",level:2}];function a(e){const i={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"This article discusses some of the protocol and conventions to be followed while writing docs."}),"\n",(0,t.jsx)(i.h2,{id:"folder-structure",children:"Folder Structure"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Docs follow object-oriented approach. Each folder represents an object and each file represents procedures associated with that object."}),"\n",(0,t.jsxs)(i.li,{children:["Each folder contains an ",(0,t.jsx)(i.code,{children:"_category_.json"})," file which contains the metadata for that object."]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:'{\n  "label": "Engineering",\n  "collapsible": true,\n  "collapsed": true\n}\n'})}),"\n",(0,t.jsx)(i.h2,{id:"file-structure",children:"File Structure"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Add following metadata to the top of each file."}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"---\ntitle: \"Writing docs\"\ndescription: \"Overview to writing docs\"\ntags: ['Engineering']\nkeywords: ['Engineering', Writing docs', 'Docs conventions']\n---\n"})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"title"})," is the title of the article that appears on the sidebar and on the top of the article."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"description"})," is the description of the article that appears in search results."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"tags"})," are the tags associated with the article. Tags are used to group articles together. For example, all articles with the tag ",(0,t.jsx)(i.code,{children:"Workspaces"})," will be grouped together."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"keywords"})," are the keywords associated with the article. Keywords are used to improve search results. For example, if the user searches for ",(0,t.jsx)(i.code,{children:"Create workspace"}),", then the article with the keyword ",(0,t.jsx)(i.code,{children:"Create workspace"})," will be displayed in the search results."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"nomenclature",children:"Nomenclature"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Folder names & file name are","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"in kebab-case."}),"\n",(0,t.jsx)(i.li,{children:"prefix with a number that represents the order in which the folder/file should be displayed in the sidebar."}),"\n",(0,t.jsx)(i.li,{children:"prefix number is always a 3-digit number."}),"\n",(0,t.jsxs)(i.li,{children:["For example, ",(0,t.jsx)(i.code,{children:"010.account-settings"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.li,{children:"Only first letter of the folder/file name is capitalized. Second letter onwards, first letter is capitalized only if it is a proper noun."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"tags",children:"Tags"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"First letter of each tag is capitalized."}),"\n",(0,t.jsxs)(i.li,{children:["Tags usually are Objects or Actions. Add a tag only if we are sure that the tag will be used in multiple places. Example: 'Create' - we can have ",(0,t.jsx)(i.code,{children:"Create project"}),", ",(0,t.jsx)(i.code,{children:"Create user"}),", ",(0,t.jsx)(i.code,{children:"Create API token"})," etc."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"active-tags",children:"Active Tags"}),"\n",(0,t.jsx)(i.p,{children:"Tags that are currently being used in the docs are listed below. See if you can reuse any of these tags before adding a new tag."}),"\n",(0,t.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Description should be crisp and to the point. Preferably one line."}),"\n",(0,t.jsx)(i.li,{children:"Refer to the description associated with the tag to get an idea of how the description should be."}),"\n",(0,t.jsx)(i.li,{children:"Descriptions appear in the search results (when searched by tags). So, it should be descriptive enough to give the user an idea of what the article is about."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Search by tags",src:n(11600).A+"",width:"2850",height:"1796"})}),"\n",(0,t.jsx)(i.h2,{id:"images",children:"Images"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Annotated images should be placed in ",(0,t.jsx)(i.code,{children:"img/v2"})," folder."]}),"\n",(0,t.jsxs)(i.li,{children:["For every annotated image, there should be a corresponding unannotated image in the ",(0,t.jsx)(i.code,{children:"img/v2-unannotated"})," folder."]}),"\n",(0,t.jsx)(i.li,{children:"Images are kept in the same folder structure as the docs."}),"\n",(0,t.jsxs)(i.li,{children:["Use ",(0,t.jsx)(i.code,{children:"Skitch"})," for annotations."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"before-you-commit",children:"Before you commit"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Use ",(0,t.jsx)(i.code,{children:"npm run build"})," to build the docs."]}),"\n",(0,t.jsx)(i.li,{children:"Ensure that the build is successful & there are no errors/warnings related to missing links, images, etc."}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},11600:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/engineering-search-by-tags-9453d5cf2d1534c2f812c7aee697fe43.png"},28453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>l});var t=n(96540);const r={},s=t.createContext(r);function o(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);