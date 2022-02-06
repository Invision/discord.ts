"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5575],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),o=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=o(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=o(a),m=n,k=c["".concat(d,".").concat(m)]||c[m]||u[m]||l;return a?r.createElement(k,i(i({ref:t},s),{},{components:a})):r.createElement(k,i({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6465:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return o},toc:function(){return s},default:function(){return c}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),i=["components"],p={id:"Player",title:"Class: Player",sidebar_label:"Player",sidebar_position:0,custom_edit_url:null},d=void 0,o={unversionedId:"packages/music/api/classes/Player",id:"packages/music/api/classes/Player",title:"Class: Player",description:"Music player",source:"@site/docs/packages/music/api/classes/Player.md",sourceDirName:"packages/music/api/classes",slug:"/packages/music/api/classes/Player",permalink:"/docs/packages/music/api/classes/Player",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Player",title:"Class: Player",sidebar_label:"Player",sidebar_position:0,custom_edit_url:null},sidebar:"packagesSidebar",previous:{title:"CustomTrack",permalink:"/docs/packages/music/api/classes/CustomTrack"},next:{title:"Queue",permalink:"/docs/packages/music/api/classes/Queue"}},s=[{value:"Hierarchy",id:"hierarchy",children:[],level:2},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[{value:"Overrides",id:"overrides",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2},{value:"Properties",id:"properties",children:[{value:"queues",id:"queues",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"on",id:"on",children:[{value:"Type parameters",id:"type-parameters",children:[],level:4},{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Overrides",id:"overrides-1",children:[],level:4},{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"queue",id:"queue",children:[{value:"Type parameters",id:"type-parameters-1",children:[],level:4},{value:"Parameters",id:"parameters-1",children:[],level:4},{value:"Returns",id:"returns-1",children:[],level:4},{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3}],level:2}],u={toc:s};function c(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Music player"),(0,l.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"EventEmitter")),(0,l.kt)("p",{parentName:"li"},"\u21b3 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Player"))))),(0,l.kt)("h2",{id:"constructors"},"Constructors"),(0,l.kt)("h3",{id:"constructor"},"constructor"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"new Player"),"()"),(0,l.kt)("h4",{id:"overrides"},"Overrides"),(0,l.kt)("p",null,"EventEmitter.constructor"),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/oceanroleplay/discord.ts/blob/d310c62/packages/music/src/core/Player.ts#L17"},"core/Player.ts:17")),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"queues"},"queues"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"queues"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Collection"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,l.kt)("a",{parentName:"p",href:"Queue"},(0,l.kt)("inlineCode",{parentName:"a"},"Queue")),"<",(0,l.kt)("a",{parentName:"p",href:"Player"},(0,l.kt)("inlineCode",{parentName:"a"},"Player")),">",">"),(0,l.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/oceanroleplay/discord.ts/blob/d310c62/packages/music/src/core/Player.ts#L15"},"core/Player.ts:15")),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"on"},"on"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"on"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"Q"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,l.kt)("inlineCode",{parentName:"p"},"event"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"handler"),"): ",(0,l.kt)("a",{parentName:"p",href:"Player"},(0,l.kt)("inlineCode",{parentName:"a"},"Player"))),(0,l.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Q")),(0,l.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,l.kt)("a",{parentName:"td",href:"Queue"},(0,l.kt)("inlineCode",{parentName:"a"},"Queue")),"<",(0,l.kt)("a",{parentName:"td",href:"Player"},(0,l.kt)("inlineCode",{parentName:"a"},"Player")),", ",(0,l.kt)("inlineCode",{parentName:"td"},"Q"),">")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"T")),(0,l.kt)("td",{parentName:"tr",align:"left"},"extends keyof ",(0,l.kt)("a",{parentName:"td",href:"../interfaces/PlayerEvents"},(0,l.kt)("inlineCode",{parentName:"a"},"PlayerEvents")),"<",(0,l.kt)("inlineCode",{parentName:"td"},"Q"),">")))),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"event")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"T"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"handler")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"../#playereventargof"},(0,l.kt)("inlineCode",{parentName:"a"},"PlayerEventArgOf")),"<",(0,l.kt)("inlineCode",{parentName:"td"},"Q"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"T"),">")))),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"Player"},(0,l.kt)("inlineCode",{parentName:"a"},"Player"))),(0,l.kt)("h4",{id:"overrides-1"},"Overrides"),(0,l.kt)("p",null,"EventEmitter.on"),(0,l.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/oceanroleplay/discord.ts/blob/d310c62/packages/music/src/core/Player.ts#L21"},"core/Player.ts:21")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"queue"},"queue"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"queue"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,l.kt)("inlineCode",{parentName:"p"},"guild"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"customQueue?"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"T")),(0,l.kt)("p",null,"get guild queue"),(0,l.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"T")),(0,l.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,l.kt)("a",{parentName:"td",href:"Queue"},(0,l.kt)("inlineCode",{parentName:"a"},"Queue")),"<",(0,l.kt)("a",{parentName:"td",href:"Player"},(0,l.kt)("inlineCode",{parentName:"a"},"Player")),", ",(0,l.kt)("inlineCode",{parentName:"td"},"T"),">"," = ",(0,l.kt)("a",{parentName:"td",href:"Queue"},(0,l.kt)("inlineCode",{parentName:"a"},"Queue")),"<",(0,l.kt)("a",{parentName:"td",href:"Player"},(0,l.kt)("inlineCode",{parentName:"a"},"Player")),">")))),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"guild")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Guild"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"customQueue?")),(0,l.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,l.kt)("inlineCode",{parentName:"td"},"T"))))),(0,l.kt)("h4",{id:"returns-1"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"T")),(0,l.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/oceanroleplay/discord.ts/blob/d310c62/packages/music/src/core/Player.ts#L33"},"core/Player.ts:33")))}c.isMDXComponent=!0}}]);