"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4024],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(i,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8596:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],c={},i="@Bot",s={unversionedId:"decorators/general/bot",id:"decorators/general/bot",title:"@Bot",description:"bot decorator help you manage multiple bot's in single node instance",source:"@site/docs/decorators/general/bot.md",sourceDirName:"decorators/general",slug:"/decorators/general/bot",permalink:"/docs/decorators/general/bot",editUrl:"https://github.com/oceanroleplay/discord.ts/edit/main/docs/docs/decorators/general/bot.md",tags:[],version:"current",lastUpdatedBy:"Kayo",lastUpdatedAt:1644135047,formattedLastUpdatedAt:"2/6/2022",frontMatter:{},sidebar:"docSidebar",previous:{title:"@SimpleCommandOption",permalink:"/docs/decorators/commands/simplecommandoption"},next:{title:"@Discord",permalink:"/docs/decorators/general/discord"}},d=[{value:"Signature",id:"signature",children:[],level:2},{value:"Parameters",id:"parameters",children:[{value:"botID",id:"botid",children:[],level:3}],level:2},{value:"Make changes to",id:"make-changes-to",children:[],level:2}],p={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bot"},"@Bot"),(0,a.kt)("p",null,"bot decorator help you manage multiple bot's in single node instance"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'@Discord()\n@Bot("alexa", "cortana") // Define which bot can run the following commands or events\nclass simpleCommandExample {\n  @SimpleCommand("hello")\n  command(command: SimpleCommandMessage) {\n    command.message.reply(`\ud83d\udc4b ${message.member}`);\n  }\n}\n\nconst alexa = new Client({\n  botId: "alexa", // define botid\n});\n\nconst cortana = new Client({\n  botId: "cortana", // define botidF\n});\n\n// We will now build our application to load all the commands/events for both bots.\nMetadataStorage.instance.build().then(() => {\n  // Now that the app is ready, we can login to both bots\n  alexa.login("alexa token");\n  cortana.login("cortana token");\n});\n')),(0,a.kt)("h2",{id:"signature"},"Signature"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"Bot(...botIDs: string[]): ClassMethodDecorator;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("h3",{id:"botid"},"botID"),(0,a.kt)("p",null,"Array of bot ids, for which only the below statement will be executed."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"default"),(0,a.kt)("th",{parentName:"tr",align:null},"required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"string","[ ]"),(0,a.kt)("td",{parentName:"tr",align:null},"[ ]"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,a.kt)("h2",{id:"make-changes-to"},"Make changes to"),(0,a.kt)("p",null,"It either extends or overwrites data configured in below decorators, however, the order of decorators matters."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/decorators/gui/buttoncomponent"},"@ButtonComponent")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/decorators/gui/selectmenucomponent"},"@SelectMenuComponent")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/decorators/gui/contextmenu"},"@ContextMenu")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/decorators/general/discord"},"@Discord")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/decorators/general/on"},"@On")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/decorators/general/once"},"@Once")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/decorators/commands/simplecommand"},"@SimpleCommand")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/decorators/commands/slash"},"@Slash")))}u.isMDXComponent=!0}}]);