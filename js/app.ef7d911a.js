(function(e){function t(t){for(var n,a,i=t[0],l=t[1],c=t[2],s=0,p=[];s<i.length;s++)a=i[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(p.length)p.shift()();return u.push.apply(u,c||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==o[i]&&(n=!1)}n&&(u.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},a={app:0},o={app:0},u=[];function i(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"2f29af23"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(e){var t=[],r={about:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"11b957e6"}[e]+".css",o=l.p+n,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var c=u[i],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===n||s===o))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){c=p[i],s=c.getAttribute("data-href");if(s===n||s===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete a[e],d.parentNode.removeChild(d),r(u)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=u);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=i(e);var p=new Error;c=function(t){s.onerror=s.onload=null,clearTimeout(d);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",p.name="ChunkLoadError",p.type=n,p.request=a,r[1](p)}o[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var d=s;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},3504:function(e){e.exports=JSON.parse('{"system":{"title":"卡牌生成器"},"form":{"exportScale":"导出分辨率","low":"低","medium":"中","high":"高","cardTitle":"卡牌名","uploadImageFile":"上传更改自定义图像","cardSubtitle":"卡面描述","cardType":"卡牌类型（页脚）","export":"生成"},"sample":{"title":"龙骑士","detail":"对抗龙系单位或与龙系单位协同作战时造成双倍伤害","type":"职业"}}')},"49f8":function(e,t,r){var n={"./en.json":"edd4","./zh.json":"3504"};function a(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id="49f8"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("the-app-bar"),r("v-main",[r("router-view")],1)],1)},o=[],u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[r("div",{staticClass:"d-flex align-center"},[r("div",{staticClass:"text-h5"},[e._v(e._s(e.$t("system.title")))])]),r("v-spacer"),r("v-btn",{attrs:{href:"https://github.com/monoglo/card-creator",target:"_blank",text:""}},[r("span",{staticClass:"mr-2"},[e._v("github")]),r("v-icon",[e._v("mdi-github")])],1)],1)},i=[],l={},c=l,s=r("2877"),p=r("6544"),d=r.n(p),f=r("40dc"),m=r("8336"),h=r("132d"),v=r("2fa4"),g=Object(s["a"])(c,u,i,!1,null,null,null),b=g.exports;d()(g,{VAppBar:f["a"],VBtn:m["a"],VIcon:h["a"],VSpacer:v["a"]});var y={name:"App",components:{"the-app-bar":b},data:function(){return{}}},w=y,x=r("7496"),_=r("f6c4"),O=Object(s["a"])(w,a,o,!1,null,null,null),C=O.exports;d()(O,{VApp:x["a"],VMain:_["a"]});r("d3b7"),r("3ca3"),r("ddb0");var S=r("8c4f");n["a"].use(S["a"]);var j=[{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/",name:"CardCreator",component:function(){return r.e("about").then(r.bind(null,"7a87"))}}],E=new S["a"]({mode:"history",base:"/",routes:j}),k=E,T=r("2f62");n["a"].use(T["a"]);var A=new T["a"].Store({state:{},mutations:{},actions:{},modules:{}}),P=r("f309");n["a"].use(P["a"]);var N=new P["a"]({}),L=(r("159b"),r("ac1f"),r("466d"),r("a925"));function D(){var e=r("49f8"),t={};return e.keys().forEach((function(r){var n=r.match(/([A-Za-z0-9-_]+)\./i);if(n&&n.length>1){var a=n[1];t[a]=e(r)}})),t}n["a"].use(L["a"]);var M=new L["a"]({locale:navigator.language||"en",fallbackLocale:"en",messages:D()});n["a"].config.productionTip=!1,new n["a"]({router:k,store:A,vuetify:N,i18n:M,render:function(e){return e(C)}}).$mount("#app")},edd4:function(e){e.exports=JSON.parse('{"system":{"title":"Card Creator"},"form":{"exportScale":"Export Image Resolution","low":"Low","medium":"Medium","high":"High","cardTitle":"Card Title","uploadImageFile":"Upload Image File","cardSubtitle":"Card Detail","cardType":"Card Footer","export":"Export"},"sample":{"title":"Dragon Knight","detail":"Deal double damage when fighting against dragon units or cooperating with dragon units","type":"Class"}}')}});
//# sourceMappingURL=app.ef7d911a.js.map