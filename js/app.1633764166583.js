(function(e){function t(t){for(var o,r,u=t[0],p=t[1],l=t[2],c=0,s=[];c<u.length;c++)r=u[c],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&s.push(a[r][0]),a[r]=0;for(o in p)Object.prototype.hasOwnProperty.call(p,o)&&(e[o]=p[o]);m&&m(t);while(s.length)s.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var u=n[r];0!==a[u]&&(o=!1)}o&&(i.splice(t--,1),e=p(p.s=n[0]))}return e}var o={},r={app:0},a={app:0},i=[];function u(e){return p.p+"js/"+({"base~form~index~popup":"base~form~index~popup","base~form":"base~form","base~login":"base~login",base:"base","form~index~popup":"form~index~popup","form~popup":"form~popup",form:"form",popup:"popup",index:"index",login:"login"}[e]||e)+".1633764166583.js"}function p(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,p),n.l=!0,n.exports}p.e=function(e){var t=[],n={"base~form~index~popup":1,"base~form":1,"base~login":1,base:1,"form~popup":1,form:1,popup:1,index:1,login:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({"base~form~index~popup":"base~form~index~popup","base~form":"base~form","base~login":"base~login",base:"base","form~index~popup":"form~index~popup","form~popup":"form~popup",form:"form",popup:"popup",index:"index",login:"login"}[e]||e)+"."+{"base~form~index~popup":"0f8f4beb","base~form":"befc8025","base~login":"f46205ec",base:"081e31b7","form~index~popup":"31d6cfe0","form~popup":"33d01079",form:"61bf0966",popup:"93cb6944",index:"54005822",login:"24ca97b9"}[e]+".css",a=p.p+o,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var l=i[u],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===o||c===a))return t()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){l=s[u],c=l.getAttribute("data-href");if(c===o||c===a)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],m.parentNode.removeChild(m),n(i)},m.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=i);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,p.nc&&c.setAttribute("nonce",p.nc),c.src=u(e);var s=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(m);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",s.name="ChunkLoadError",s.type=o,s.request=r,n[1](s)}a[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},p.m=e,p.c=o,p.d=function(e,t,n){p.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},p.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.t=function(e,t){if(1&t&&(e=p(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(p.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)p.d(n,o,function(t){return e[t]}.bind(null,o));return n},p.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return p.d(t,"a",t),t},p.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},p.p="/vant-encapsulation/",p.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var m=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"065f":function(e,t,n){},"25d6":function(e,t,n){"use strict";n.r(t);var o,r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("div",{staticClass:"page-body scroll-hidden",style:{height:e.footerNavVisible?"calc(100% - 50px)":"100%"}},[n("transition",{attrs:{name:"page-transition"}},[n("keep-alive",[n("router-view")],1)],1)],1),n("footerNavbar")],1)},a=[],i=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),u=(n("7f7f"),n("c3a6"),n("ad06")),p=(n("e7e5"),n("d399")),l=n("2b0e"),c=n("2f62"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.visible?n("van-tabbar",{staticClass:"footer-navbar",on:{change:e.navBarChange},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[e._l(e.menus,(function(t){return[n("van-tabbar-item",{key:t.name,attrs:{name:t.name,icon:t.meta.icon,info:"message"==t.name&&e.count>0?e.count:""}},[e._v(e._s(t.meta.title))])]}))],2):e._e()},m=[],f=(n("7514"),n("a52c"),n("2ed4")),d=(n("537a"),n("ac28")),b=n("f23b");function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g={name:"footerNavBar",components:(o={},Object(i["a"])(o,d["a"].name,d["a"]),Object(i["a"])(o,f["a"].name,f["a"]),o),data:function(){return{active:"",menus:[],visible:!0}},computed:v({},Object(c["c"])({navActive:function(e){return e.app.navActive},count:function(e){return e.user.messageCount}})),watch:{$route:{handler:function(e){var t=e.meta,n=e.matched;this.visible=!(!t||!t.footerNavShow);var o="workplace";n.length>1&&(o=n[1].name),this.active=o,this.setNavActive(o)},immediate:!0}},created:function(){var e=b["a"].find((function(e){return"/"===e.path})).children;this.menus=this.filterMenus(e)},methods:v(v({},Object(c["b"])(["setNavActive"])),{},{navBarChange:function(e){this.$router.push({name:e})},filterMenus:function(e){var t=e.filter((function(e){return!(!e.meta||!e.meta.footerNavShow)}));return t}})},x=g,y=(n("68a4"),n("2877")),P=Object(y["a"])(x,s,m,!1,null,"27cdbd40",null),w=P.exports,O=w;function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}l["a"].use(p["a"]);var E={name:"BasicLayout",components:Object(i["a"])({footerNavbar:O},u["a"].name,u["a"]),data:function(){return{toastIndex:0,footerNavVisible:!1}},watch:{$route:{handler:function(e){var t=e.meta;this.footerNavVisible=!(!t||!t.footerNavShow)},immediate:!0}},computed:j({},Object(c["c"])({user:function(e){return e.user.info}})),created:function(){},mounted:function(){},methods:{}},T=E,N=(n("6692"),Object(y["a"])(T,r,a,!1,null,null,null));t["default"]=N.exports},2776:function(e,t,n){},"2f0b":function(e,t,n){"use strict";n("3481")},3481:function(e,t,n){},4360:function(e,t,n){"use strict";var o=n("2b0e"),r=n("2f62"),a=(n("6762"),n("2fdb"),n("f23b"));function i(e,t){if(t.meta&&t.meta.permission){for(var n=!1,o=0,r=e.length;o<r;o++)if(n=t.meta.permission.includes(e[o].code),n)return e[o];return!1}return!0}function u(e,t){var n=e.filter((function(e){var n=i(t,e);return!0===n?(e.children&&e.children.length&&(e.children=u(e.children,t)),!0):!1!==n&&(e.children&&e.children.length&&(e.children=u(e.children,n.children)),!0)}));return n}var p={state:{menus:[],routers:[],addRouters:[],navActive:"workplace"},mutations:{SET_MENUS:function(e,t){e.menus=t,e.routers=a["b"].concat(t)},SET_THEME:function(e,t){e.theme=t},SET_ROUTERS:function(e,t){e.addRouters=t},SET_NAVACTIVE:function(e,t){e.navActive=t}},actions:{generateRoutes:function(e,t){var n=e.commit;return new Promise((function(e){var o=u(a["a"],t);n("SET_ROUTERS",o),e()}))},setAddRouters:function(e,t){var n=e.commit;n("SET_ROUTERS",t)},setMenus:function(e,t){var n=e.commit;n("SET_MENUS",t)},setTheme:function(e,t){var n=e.commit;n("SET_THEME",t)},setNavActive:function(e,t){var n=e.commit;n("SET_NAVACTIVE",t)}}},l=p,c=n("6b43"),s=n("9fb0"),m=n("cf45"),f={state:{info:{},messageCount:0},mutations:{SET_INFO:function(e,t){e.info=t},SET_MESSAGECOUNT:function(e,t){e.messageCount=t}},actions:{setUserInfo:function(e,t){var n=e.commit;c["a"].set(s["b"],t),n("SET_INFO",t)},logout:function(e){var t=e.commit;t("SET_INFO",{}),c["a"].set(s["b"],{}),Object(m["routeTo"])("Login")}}},d=f,b={menus:function(e){return e.app.menus},addRouters:function(e){return e.app.addRouters},userInfo:function(e){return e.user.info},roomInfo:function(e){return e.room.info}},h=b;o["a"].use(r["a"]);t["a"]=new r["a"].Store({modules:{app:l,user:d},state:{},mutations:{},actions:{},getters:h})},4942:function(e,t){function n(){var e=document.documentElement.clientWidth/10;document.documentElement.style.fontSize=(e>54?54:e<32?32:e)+"px"}n(),window.onresize=n},"56d7":function(e,t,n){"use strict";n.r(t);n("9a83");var o=n("f564"),r=(n("e7e5"),n("d399")),a=(n("cadf"),n("551c"),n("f751"),n("097d"),n("2b0e")),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._v("\n  1233366222556634534523423423345345345435134534523423432123123\n  "),n("keep-alive",[n("router-view")],1)],1)},u=[],p=n("2877"),l={},c=Object(p["a"])(l,i,u,!1,null,null,null),s=c.exports,m=n("a18c"),f=n("4360"),d=n("c17a"),b=(n("adf6"),n("ad07"),n("4942"),n("c16e")),h=n.n(b),v=(n("7f7f"),n("f65d")),g={install:function(e){e.component(v["a"].name,v["a"])}},x=g,y=(n("6762"),n("6b43")),P=n("9fb0"),w=["Login","WeChat"];function O(){var e=y["a"].get(P["b"]);f["a"].commit("SET_INFO",e)}m["a"].beforeEach((function(e,t,n){var o=y["a"].get(P["b"]);o&&o.token||w.includes(e.name)?n():f["a"].dispatch("logout"),e.meta.title&&(document.title=e.meta.title)})),m["a"].afterEach((function(){}));var S=n("cf45");a["a"].use(x),a["a"].config.productionTip=!1,a["a"].prototype.$config=d["a"],a["a"].prototype.$common=S;var j={namespace:"mobile_",name:"ls",storage:"local"};a["a"].use(h.a,j),a["a"].use(r["a"],o["a"]),new a["a"]({router:m["a"],store:f["a"],created:function(){O()},render:function(e){return e(s)}}).$mount("#app")},6692:function(e,t,n){"use strict";n("2776")},"68a4":function(e,t,n){"use strict";n("065f")},"6b43":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n("2b0e"),r={set:function(e,t,n){return n?o["a"].ls.set(e,t,n):o["a"].ls.set(e,t)},get:function(e){return o["a"].ls.get(e)},remove:function(e){return o["a"].ls.remove(e)}}},"9fb0":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}));var o="userInfo",r="user"},a18c:function(e,t,n){"use strict";var o=n("2b0e"),r=n("8c4f"),a=n("c17a"),i=n("f23b");o["a"].use(r["a"]);var u=a["a"].permission.router?i["b"]:i["b"].concat(i["a"]);t["a"]=new r["a"]({mode:"history",base:"/vant-encapsulation/",scrollBehavior:function(){return{y:0}},routes:u})},ad07:function(e,t,n){},adf6:function(e,t,n){},c17a:function(e,t,n){"use strict";t["a"]={permission:{router:!1,action:!0}}},cf45:function(e,t,n){"use strict";n.r(t),n.d(t,"routeTo",(function(){return i})),n.d(t,"routeReplace",(function(){return u})),n.d(t,"getUrlParam",(function(){return p})),n.d(t,"urlDeleteParam",(function(){return l})),n.d(t,"findData",(function(){return c})),n.d(t,"treeTransArray",(function(){return s})),n.d(t,"getAvatarUrl",(function(){return m})),n.d(t,"hasClass",(function(){return f})),n.d(t,"addClass",(function(){return d})),n.d(t,"removeClass",(function(){return b})),n.d(t,"checkPhone",(function(){return h})),n.d(t,"debounce",(function(){return v})),n.d(t,"throttle",(function(){return g}));var o=n("75fc"),r=(n("28a5"),n("386d"),n("4917"),n("3b2b"),n("a481"),n("a18c")),a=n("c17a"),i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};r["a"].push({name:e,query:t,params:n})},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};r["a"].replace({name:e,query:t,params:n})},p=function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),n=window.location.search.substr(1).match(t);return null!=n?decodeURI(n[2]):null},l=function(e,t){var n=e.split("?");if(n.length>1&&n[1].indexOf(t)>-1){for(var o=n[1],r={},a=o.split("&"),i=0;i<a.length;i++)a[i]=a[i].split("="),r[a[i][0]]=a[i][1];delete r[t];var u=JSON.stringify(r).replace(/[\"\{\}]/g,"").replace(/\:/g,"=").replace(/\,/g,"&"),p=n[0];return u&&(p+="?"+u),p}return e},c=function(e,t){t=t.split(".");for(var n=0;n<t.length;n++){if(!t[n])return e;e=e[t[n]]}return e},s=function e(t,n){var r;return(r=[]).concat.apply(r,Object(o["a"])(t.map((function(t){var r;return t[n]&&t[n].length?(r=[]).concat.apply(r,[t].concat(Object(o["a"])(e(t[n])),[n])):t}))))},m=function(e){return e?a["a"].fileUrl+e:"/images/avatar.jpg"},f=function(e,t){return!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))},d=function(e,t){f(e,t)||(e.className+=" "+t)},b=function(e,t){f(e,t)&&(e.className=e.className.replace(new RegExp("(\\s|^)"+t+"(\\s|$)")," "))},h=function(e){return!!/^1(3|4|5|7|8)\d{9}$/.test(e)},v=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;return function(){for(var o=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];t&&clearTimeout(t),t=setTimeout((function(){e.apply(o,a)}),n)}},g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=!0;return function(){for(var o=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];n&&(n=!1,setTimeout((function(){e.apply(o,a),n=!0}),t))}}},f23b:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var o,r,a={name:"RouteView",data:function(){return{}},render:function(){var e=arguments[0],t=e("router-view");return t}},i=a,u=n("2877"),p=Object(u["a"])(i,o,r,!1,null,null,null),l=p.exports,c=(n("25d6"),{path:"/form",name:"Form",redirect:"/form/index",component:l,meta:{title:"表单组件",icon:"orders-o",footerNavShow:!0},children:[{path:"/form/index",name:"FormIndex",component:function(){return Promise.all([n.e("base~form~index~popup"),n.e("form~index~popup"),n.e("base~form"),n.e("form~popup"),n.e("form")]).then(n.bind(null,"2941"))},meta:{title:"表单组件",footerNavShow:!0}},{path:"/form/form",name:"FormForm",component:function(){return Promise.all([n.e("base~form~index~popup"),n.e("form~index~popup"),n.e("base~form"),n.e("form~popup"),n.e("form")]).then(n.bind(null,"1dfb"))},meta:{title:"form 表单"}},{path:"/form/dataForm",name:"FormDataForm",component:function(){return Promise.all([n.e("base~form~index~popup"),n.e("form~index~popup"),n.e("base~form"),n.e("form~popup"),n.e("form")]).then(n.bind(null,"a9ab"))},meta:{title:"dataForm 数据配置表单"}},{path:"/form/input",name:"FormInput",component:function(){return Promise.all([n.e("base~form~index~popup"),n.e("form~index~popup"),n.e("base~form"),n.e("form~popup"),n.e("form")]).then(n.bind(null,"dec6"))},meta:{title:"input 输入框"}},{path:"/form/textarea",name:"FormTextarea",component:function(){return Promise.all([n.e("base~form~index~popup"),n.e("form~index~popup"),n.e("base~form"),n.e("form~popup"),n.e("form")]).then(n.bind(null,"3763"))},meta:{title:"textarea 多行文本"}},{path:"/form/select",name:"FormSelect",component:function(){return Promise.all([n.e("base~form~index~popup"),n.e("form~index~popup"),n.e("base~form"),n.e("form~popup"),n.e("form")]).then(n.bind(null,"4e08"))},meta:{title:"select 下拉选择单选"}},{path:"/form/date",name:"FormDate",component:function(){return Promise.all([n.e("base~form~index~popup"),n.e("form~index~popup"),n.e("base~form"),n.e("form~popup"),n.e("form")]).then(n.bind(null,"ef6b"))},meta:{title:"date 时间下拉选择"}},{path:"/form/multiple",name:"FormMultiple",component:function(){return Promise.all([n.e("base~form~index~popup"),n.e("form~index~popup"),n.e("base~form"),n.e("form~popup"),n.e("form")]).then(n.bind(null,"cd3e"))},meta:{title:"multiple 下拉选择多选"}},{path:"/form/switch",name:"FormSwitch",component:function(){return Promise.all([n.e("base~form~index~popup"),n.e("form~index~popup"),n.e("base~form"),n.e("form~popup"),n.e("form")]).then(n.bind(null,"777c"))},meta:{title:"switch 开关"}},{path:"/form/calendar",name:"FormCalendar",component:function(){return Promise.all([n.e("base~form~index~popup"),n.e("form~index~popup"),n.e("base~form"),n.e("form~popup"),n.e("form")]).then(n.bind(null,"85cb"))},meta:{title:"calendar 日期范围"}},{path:"/form/searchList",name:"FormSearchList",component:function(){return Promise.all([n.e("base~form~index~popup"),n.e("form~index~popup"),n.e("base~form"),n.e("form~popup"),n.e("form")]).then(n.bind(null,"9dda"))},meta:{title:"searchList 搜索弹窗"}},{path:"/form/radio",name:"FormRadio",component:function(){return Promise.all([n.e("base~form~index~popup"),n.e("form~index~popup"),n.e("base~form"),n.e("form~popup"),n.e("form")]).then(n.bind(null,"c76c"))},meta:{title:"radio 单选"}},{path:"/form/checkBox",name:"FormCheckbox",component:function(){return Promise.all([n.e("base~form~index~popup"),n.e("form~index~popup"),n.e("base~form"),n.e("form~popup"),n.e("form")]).then(n.bind(null,"cf7c"))},meta:{title:"checkbox 复选"}},{path:"/form/autoComplete",name:"FormAutoComplete",component:function(){return Promise.all([n.e("base~form~index~popup"),n.e("form~index~popup"),n.e("base~form"),n.e("form~popup"),n.e("form")]).then(n.bind(null,"77be"))},meta:{title:"autoComplete 自动补全"}},{path:"/form/uploader",name:"FormAutoComplete",component:function(){return Promise.all([n.e("base~form~index~popup"),n.e("form~index~popup"),n.e("base~form"),n.e("form~popup"),n.e("form")]).then(n.bind(null,"b356"))},meta:{title:"uploader 上传"}},{path:"/form/formUploader",name:"FormUploader",component:function(){return Promise.all([n.e("base~form~index~popup"),n.e("form~index~popup"),n.e("base~form"),n.e("form~popup"),n.e("form")]).then(n.bind(null,"b262"))},meta:{title:"formUploader 表单上传"}}]}),s={path:"/popup",name:"Popup",redirect:"/popup/index",component:l,meta:{title:"弹窗组件",footerNavShow:!0},children:[{path:"/popup/index",name:"PopupIndex",component:function(){return Promise.all([n.e("base~form~index~popup"),n.e("form~index~popup"),n.e("form~popup"),n.e("popup")]).then(n.bind(null,"9d93"))},meta:{title:"弹窗组件",footerNavShow:!0}},{path:"/popup/passwordNumber",name:"PopupPasswordNumber",component:function(){return Promise.all([n.e("base~form~index~popup"),n.e("form~index~popup"),n.e("form~popup"),n.e("popup")]).then(n.bind(null,"4c77"))},meta:{title:"passwordNumber 输入密码"}},{path:"/popup/passwordInput",name:"PopupPasswordInput",component:function(){return Promise.all([n.e("base~form~index~popup"),n.e("form~index~popup"),n.e("form~popup"),n.e("popup")]).then(n.bind(null,"85e2"))},meta:{title:"passwordInput 输入密码input"}},{path:"/popup/popupSelect",name:"PopupSelect",component:function(){return Promise.all([n.e("base~form~index~popup"),n.e("form~index~popup"),n.e("form~popup"),n.e("popup")]).then(n.bind(null,"d9a7"))},meta:{title:"popupSelect 单选"}},{path:"/popup/popupMultiple",name:"PopupMultiple",component:function(){return Promise.all([n.e("base~form~index~popup"),n.e("form~index~popup"),n.e("form~popup"),n.e("popup")]).then(n.bind(null,"18b5"))},meta:{title:"popupMultiple 多选"}}]},m={path:"/base",name:"Base",redirect:"/base/index",component:l,meta:{title:"基础组件"},children:[{path:"/base/test",name:"test",meta:{title:"测试专用"},component:function(){return Promise.all([n.e("base~form~index~popup"),n.e("base~form"),n.e("base~login"),n.e("base")]).then(n.bind(null,"c0e1"))}},{path:"/base/copyTest",name:"copyTest",meta:{title:"测试复制"},component:function(){return Promise.all([n.e("base~form~index~popup"),n.e("base~form"),n.e("base~login"),n.e("base")]).then(n.bind(null,"28a3"))}},{path:"/base/changePwd",name:"ChangePwd",component:function(){return Promise.all([n.e("base~form~index~popup"),n.e("base~form"),n.e("base~login"),n.e("base")]).then(n.bind(null,"9d7c"))},meta:{title:"修改密码"}},{path:"/base/dataList",name:"BaseDataList",component:function(){return Promise.all([n.e("base~form~index~popup"),n.e("base~form"),n.e("base~login"),n.e("base")]).then(n.bind(null,"2c66"))},meta:{title:"上拉加载下拉刷新"}},{path:"/base/tabDataList",name:"BaseTabDataList",component:function(){return Promise.all([n.e("base~form~index~popup"),n.e("base~form"),n.e("base~login"),n.e("base")]).then(n.bind(null,"2d03"))},meta:{title:"dataList tab带搜索示例"}},{path:"/base/noData",name:"BaseNoData",component:function(){return Promise.all([n.e("base~form~index~popup"),n.e("base~form"),n.e("base~login"),n.e("base")]).then(n.bind(null,"fd1d"))},meta:{title:"暂无数据"}},{path:"/base/payPrice",name:"BasePayPrice",component:function(){return Promise.all([n.e("base~form~index~popup"),n.e("base~form"),n.e("base~login"),n.e("base")]).then(n.bind(null,"5ed9"))},meta:{title:"payPrice 输入金额"}},{path:"/base/cell",name:"BaseCell",component:function(){return Promise.all([n.e("base~form~index~popup"),n.e("base~form"),n.e("base~login"),n.e("base")]).then(n.bind(null,"0a4b"))},meta:{title:"cell 单元格"}},{path:"/base/swiper",name:"BaseSwiper",component:function(){return Promise.all([n.e("base~form~index~popup"),n.e("base~form"),n.e("base~login"),n.e("base")]).then(n.bind(null,"5b5e"))},meta:{title:"swiper 轮播图"}},{path:"/base/navToolbar",name:"BaseNavToolbar",component:function(){return Promise.all([n.e("base~form~index~popup"),n.e("base~form"),n.e("base~login"),n.e("base")]).then(n.bind(null,"7323"))},meta:{title:"navToolbar 导航工具栏"}},{path:"/base/navbar",name:"BaseNavbar",component:function(){return Promise.all([n.e("base~form~index~popup"),n.e("base~form"),n.e("base~login"),n.e("base")]).then(n.bind(null,"7e21"))},meta:{title:"navbar 导航栏"}},{path:"/base/result",name:"BaseResult",component:function(){return Promise.all([n.e("base~form~index~popup"),n.e("base~form"),n.e("base~login"),n.e("base")]).then(n.bind(null,"c1f8"))},meta:{title:"操作提示"}}]},f=[{path:"/workplace",name:"Workplace",redirect:"/base/index",component:l,meta:{title:"工作台",icon:"wap-home-o",footerNavShow:!0},children:[{path:"/base/index",name:"MyIndex",component:function(){return Promise.all([n.e("base~form~index~popup"),n.e("form~index~popup"),n.e("index")]).then(n.bind(null,"9535"))},meta:{title:"工作台",footerNavShow:!0,headerNavHidden:!0}}]},{path:"/blank",name:"Blank",component:function(){return Promise.all([n.e("base~form~index~popup"),n.e("form~index~popup"),n.e("index")]).then(n.bind(null,"9de2"))},meta:{title:""}}],d=f.concat(c,s,m,[{path:"/demo",name:"Demo",component:function(){return Promise.all([n.e("base~form~index~popup"),n.e("form~index~popup"),n.e("index")]).then(n.bind(null,"680c"))},meta:{title:"测试"}}]),b=[{path:"/",name:"Index",component:function(){return Promise.all([n.e("base~form~index~popup"),n.e("form~index~popup"),n.e("index")]).then(n.bind(null,"25d6"))},meta:{title:"首页"},redirect:"/workplace",children:d},{path:"*",name:"404",component:function(){return Promise.all([n.e("base~form~index~popup"),n.e("form~index~popup"),n.e("index")]).then(n.bind(null,"8cdb"))},meta:{title:"404"}}],h=[{path:"/login",name:"Login",meta:{title:"登录"},component:function(){return Promise.all([n.e("base~login"),n.e("login")]).then(n.bind(null,"a55b"))}},{path:"/weChat",name:"WeChat",meta:{title:"微信授权登录"},component:function(){return Promise.all([n.e("base~login"),n.e("login")]).then(n.bind(null,"8a1a"))}}]},f65d:function(e,t,n){"use strict";n("d263"),n("c5f6");var o,r,a=n("bd86"),i=(n("7f7f"),n("c3a6"),n("ad06")),u={data:function(){return{}},methods:{slots:function(e,t){void 0===e&&(e="default");var n=this.$slots,o=this.$scopedSlots,r=o[e];return r?r(t):n[e]}}},p={name:"navbar",components:Object(a["a"])({},i["a"].name,i["a"]),mixins:[u],props:{type:{type:String,default:"normal"},title:{type:String,default:""},fixed:{type:Boolean,default:!0},leftArrow:{type:Boolean,default:!0},leftText:{type:String,default:""},rightText:{type:String,default:null},border:{type:Boolean,default:!0},zIndex:{type:[String,Number],default:""}},data:function(){return{}},created:function(){},methods:{leftRender:function(e){var t=this,n=this.slots,o=this.leftArrow,r=this.leftText,a=n("left"),i=a||r;if(o||i)return e("div",{class:"left",on:{click:function(){t.$listeners["click-left"]?t.$emit("click-left"):t.$router.go(-1)}}},[o?e("van-icon",{props:{name:"arrow-left"},class:"arrow-left"}):"",e("span",{class:"text"},[i])])},rightRender:function(e){var t=this,n=this.slots,o=this.rightText,r=n("right"),a=r||o;if(a)return e("div",{class:"right",on:{click:function(){t.$emit("click-right")}}},[e("span",{class:"text"},[a])])},titleRender:function(e){var t=this,n=this.slots,o=this.title,r=n("title"),a=r||(o||this.$route.meta.title);if(a)return e("div",{class:"title ellipsis",on:{click:function(){t.$emit("click-title")}}},[a])}},render:function(e){var t=this.type,n=this.fixed,o=this.border,r=this.zIndex,a=this.leftRender,i=this.titleRender,u=this.rightRender,p={navbar:!0,"navbar-border-bottom":o,fixed:n};return p[t]=t,e("div",{class:p,style:{"z-index":r}},[a(e),i(e),u(e)])}},l=p,c=(n("2f0b"),n("2877")),s=Object(c["a"])(l,o,r,!1,null,"7d4cfa96",null);t["a"]=s.exports}});
//# sourceMappingURL=app.1633764166583.js.map