(function(e){function t(t){for(var n,a,u=t[0],l=t[1],c=t[2],s=0,d=[];s<u.length;s++)a=u[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var u=r[a];0!==o[u]&&(n=!1)}n&&(i.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},a={app:0},o={app:0},i=[];function u(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"63367db2"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(e){var t=[],r={about:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"9a8af54f"}[e]+".css",o=l.p+n,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var c=i[u],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===n||s===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){c=d[u],s=c.getAttribute("data-href");if(s===n||s===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[e],p.parentNode.removeChild(p),r(i)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=i);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=u(e);var d=new Error;c=function(t){s.onerror=s.onload=null,clearTimeout(p);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}o[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var p=s;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},3504:function(e){e.exports=JSON.parse('{"system":{"title":"卡牌生成器"},"form":{"exportScale":"导出分辨率","low":"低","medium":"中","high":"高","cardTitle":"卡牌名","uploadImageFile":"上传更改自定义图像 (左侧拖拽调整)","cardSubtitle":"卡面描述","cardType":"卡牌类型（页脚）","cardColor":"背景色","cardFontColor":"字体颜色","syncFontColor":"统一字体颜色","cardFont":"英文字体（支持本地字体，只需手动输入本地已安装字体名）","show3D":"3D预览卡牌","export":"生成"},"sample":{"title":"龙骑士","detail":"对抗龙系单位或与龙系单位协同作战时造成双倍伤害","type":"职业"}}')},"49f8":function(e,t,r){var n={"./en.json":"edd4","./zh.json":"3504"};function a(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id="49f8"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("the-app-bar"),r("v-main",[r("router-view")],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[r("div",{staticClass:"d-flex align-center"},[r("div",{staticClass:"text-h5"},[e._v(e._s(e.$t("system.title")))])]),r("v-spacer"),r("v-btn",{attrs:{text:""},on:{click:e.changeLang}},[r("v-icon",[e._v("mdi-translate")])],1),r("v-btn",{attrs:{href:"https://github.com/monoglo/card-creator",target:"_blank",text:""}},[r("span",{staticClass:"mr-2"},[e._v("github")]),r("v-icon",[e._v("mdi-github")])],1)],1)},u=[],l={methods:{changeLang:function(){"zh-CN"==this.$i18n.locale||"zh"==this.$i18n.locale?this.$i18n.locale="en":this.$i18n.locale="zh"}}},c=l,s=r("2877"),d=r("6544"),p=r.n(d),f=r("40dc"),h=r("8336"),m=r("132d"),g=r("2fa4"),v=Object(s["a"])(c,i,u,!1,null,null,null),b=v.exports;p()(v,{VAppBar:f["a"],VBtn:h["a"],VIcon:m["a"],VSpacer:g["a"]});var y={name:"App",components:{"the-app-bar":b},data:function(){return{}}},w=y,C=r("7496"),x=r("f6c4"),_=Object(s["a"])(w,a,o,!1,null,null,null),O=_.exports;p()(_,{VApp:C["a"],VMain:x["a"]});r("d3b7"),r("3ca3"),r("ddb0");var j=r("8c4f");n["a"].use(j["a"]);var S=[{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/",name:"CardCreator",component:function(){return r.e("about").then(r.bind(null,"7a87"))}}],k=new j["a"]({mode:"history",base:"/",routes:S}),E=k,F=r("2f62");n["a"].use(F["a"]);var T=new F["a"].Store({state:{},mutations:{},actions:{},modules:{}}),D=r("f309");n["a"].use(D["a"]);var A=new D["a"]({}),P=(r("159b"),r("ac1f"),r("466d"),r("a925"));function L(){var e=r("49f8"),t={};return e.keys().forEach((function(r){var n=r.match(/([A-Za-z0-9-_]+)\./i);if(n&&n.length>1){var a=n[1];t[a]=e(r)}})),t}n["a"].use(P["a"]);var N=new P["a"]({locale:navigator.language||"en",fallbackLocale:"en",messages:L()});n["a"].config.productionTip=!1,new n["a"]({router:E,store:T,vuetify:A,i18n:N,render:function(e){return e(O)}}).$mount("#app")},edd4:function(e){e.exports=JSON.parse('{"system":{"title":"Card Creator"},"form":{"exportScale":"Export Image Resolution","low":"Low","medium":"Medium","high":"High","cardTitle":"Card Title","uploadImageFile":"Upload Image File (Drag image in left to justify)","cardSubtitle":"Card Detail","cardType":"Card Footer","cardColor":"Background Color","cardFontColor":"Font Color","syncFontColor":"Synchronize font color","cardFont":"Font (support local font, just enter font name)","show3D":"3D Preview","export":"Export"},"sample":{"title":"Dragon Knight","detail":"Deal double damage when fighting against dragon units or cooperating with dragon units","type":"Class"}}')}});
//# sourceMappingURL=app.cd6e0404.js.map