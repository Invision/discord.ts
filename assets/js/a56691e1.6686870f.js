"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3598],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,y=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return t?r.createElement(y,i(i({ref:n},d),{},{components:t})):r.createElement(y,i({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},565:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={},c="TSyringe",l={unversionedId:"general/tsyringe",id:"general/tsyringe",title:"TSyringe",description:"TSyringe is A lightweight dependency injection container for TypeScript/JavaScript for constructor injection.",source:"@site/docs/general/tsyringe.md",sourceDirName:"general",slug:"/general/tsyringe",permalink:"/docs/general/tsyringe",editUrl:"https://github.com/oceanroleplay/discord.ts/edit/main/docs/docs/general/tsyringe.md",tags:[],version:"current",lastUpdatedBy:"Kayo",lastUpdatedAt:1644135047,formattedLastUpdatedAt:"2/6/2022",frontMatter:{},sidebar:"docSidebar",previous:{title:"Sharding",permalink:"/docs/general/sharding"},next:{title:"@Slash - Discord commands",permalink:"/docs/decorators/commands/slash"}},d=[{value:"Configuration",id:"configuration",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Getting all @Discord classes",id:"getting-all-discord-classes",children:[],level:2}],u={toc:d};function p(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tsyringe"},"TSyringe"),(0,a.kt)("p",null,"TSyringe is A lightweight dependency injection container for TypeScript/JavaScript for constructor injection."),(0,a.kt)("p",null,"If you have a large codebase and are using Tsyringe to inject dependency, Discordx can now utilise the container\nto register each annotated ",(0,a.kt)("inlineCode",{parentName:"p"},"@Discord()")," class!"),(0,a.kt)("p",null,"In order to use your container, there is some small configuration to do in your code"),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"before you call your ",(0,a.kt)("inlineCode",{parentName:"p"},"client.login()")," method, you must tell Discordx to use your container for its internal Di solution,\nin order to do this, just add the following code anywhere before ",(0,a.kt)("inlineCode",{parentName:"p"},"client.login()"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { container } from "tsyringe";\nimport { DIService } from "discordx";\n\nDIService.container = container;\n')),(0,a.kt)("p",null,"It is recommended to do this in your main class where you define your ",(0,a.kt)("inlineCode",{parentName:"p"},"new Client()")," code; for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import "reflect-metadata";\nimport { Intents } from "discord.js";\nimport { container } from "tsyringe";\nimport { Client, DIService } from "discordx";\n\nasync function start() {\n  DIService.container = container;\n  const client = new Client({\n    botId: "test",\n    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],\n    silent: false,\n  });\n\n  await client.login("YOUR_TOKEN");\n}\n\nstart();\n')),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Once you have told Discordx to use your container for DI, it will then register all of your defined ",(0,a.kt)("inlineCode",{parentName:"p"},"@Discord()")," classes\nwith the container as singletons. This is the same as declaring a class in tsyringe as ",(0,a.kt)("inlineCode",{parentName:"p"},"@singleton()")," with one SMALL\ncaveat; in tsyringe classes declared with ",(0,a.kt)("inlineCode",{parentName:"p"},"@singleton()")," are automatically ",(0,a.kt)("inlineCode",{parentName:"p"},"@injectable()")," but in Discordx you must add\nthis annotation too if you wish your classes to receive constructor injection."),(0,a.kt)("p",null,"For example, say you have a Database class you wish to inject into your declared ",(0,a.kt)("inlineCode",{parentName:"p"},"@Discord()")," class:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'@singleton()\nclass Database {\n  database: string;\n\n  constructor() {\n    console.log("I am database");\n    this.database = "connected";\n  }\n\n  query() {\n    return this.database;\n  }\n}\n')),(0,a.kt)("p",null,"In order to get this class injected into your ",(0,a.kt)("inlineCode",{parentName:"p"},"@Discord()")," instance at runtime, you must define your class as\nboth ",(0,a.kt)("inlineCode",{parentName:"p"},"@Discord()")," ",(0,a.kt)("strong",{parentName:"p"},"AND")," ",(0,a.kt)("inlineCode",{parentName:"p"},"@injectable()"),": (the order is important)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'@Discord()\n@injectable()\nclass AppDiscord {\n  constructor(private _database: Database) {\n    console.log("constructed me as a singleton and injected _database");\n  }\n\n  @Slash("tsyringe")\n  private tsyringe(interaction: CommandInteraction): void {\n    if (DIService.container) {\n      // resolve class\n      const myClass = container.resolve(AppDiscord);\n\n      // respond with class test\n      interaction.reply(\n        `${myClass._database.query()}, same class: ${myClass === this}`\n      );\n    } else {\n      // warn: TSyringe is not used\n      interaction.reply("Not using TSyringe");\n    }\n  }\n}\n')),(0,a.kt)("p",null,"when running the above code, your ",(0,a.kt)("inlineCode",{parentName:"p"},"database")," will be injected into your ",(0,a.kt)("inlineCode",{parentName:"p"},"AppDiscord")," class and when you ask your\ncontainer for ",(0,a.kt)("inlineCode",{parentName:"p"},"AppDiscord")," you always receive the same instance of the class ",(0,a.kt)("inlineCode",{parentName:"p"},"container.resolve(AppDiscord);")),(0,a.kt)("p",null,"If you do not mark the class as ",(0,a.kt)("inlineCode",{parentName:"p"},"@injectable()")," you will get an error thrown from tsyringe telling you where is no\ntypeinfo for your class."),(0,a.kt)("h2",{id:"getting-all-discord-classes"},"Getting all @Discord classes"),(0,a.kt)("p",null,"If for some reason, you wish to get all instances of the ",(0,a.kt)("inlineCode",{parentName:"p"},"@Discord")," classes in your bot, then you can do so with the\nfollowing code example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { container, singleton } from "tsyringe";\nimport { DIService } from "discordx";\n\nfunction getAllDiscordClasses(): unknown[] {\n  const appClasses = DIService.allServices;\n\n  // store resolved classes from TSyringe resolve\n  const commandClasses = [];\n\n  // resolve all classes\n  for (const classRef of appClasses) {\n    const instance = container.resolve(classRef as constructor<unknown>);\n    commandClasses.push(instance);\n  }\n\n  return commandClasses;\n}\n')),(0,a.kt)("p",null,"Because your container has been populated with all the ",(0,a.kt)("inlineCode",{parentName:"p"},"@Discord()")," instances on startup, you can use\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"MetadataStorage")," object to get all the class refs for all the components and use a unique set of said classes to\nresolve them from your container"),(0,a.kt)("p",null,"Unfortunately, we can not use ",(0,a.kt)("inlineCode",{parentName:"p"},"@injectall()")," with tokanised dependencies, this is due to the fact that ",(0,a.kt)("inlineCode",{parentName:"p"},"@Discord()")," is\nproxying your container and can not dynamically create a registry."))}p.isMDXComponent=!0}}]);