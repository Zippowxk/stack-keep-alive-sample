(function(e){function t(t){for(var r,a,l=t[0],i=t[1],u=t[2],s=0,b=[];s<l.length;s++)a=l[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&b.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(b.length)b.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function l(e){return i.p+"js/"+({Info:"Info",List:"List"}[e]||e)+"."+{Info:"972f5427",List:"235bfb11"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={Info:1,List:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({Info:"Info",List:"List"}[e]||e)+"."+{Info:"ebd14878",List:"ee26ed62"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),l=0;l<c.length;l++){var u=c[l],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===r||s===o))return t()}var b=document.getElementsByTagName("style");for(l=0;l<b.length;l++){u=b[l],s=u.getAttribute("data-href");if(s===r||s===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],d.parentNode.removeChild(d),n(c)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=l(e);var b=new Error;u=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",b.name="ChunkLoadError",b.type=r,b.request=a,n[1](b)}o[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/stack-keep-alive-sample/dist/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var b=0;b<u.length;b++)t(u[b]);var d=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0916":function(e,t,n){},"548b":function(e,t,n){"use strict";n("0916")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={class:"root-container"};function o(e,t){var n=Object(r["resolveComponent"])("stack-keep-alive"),o=Object(r["resolveComponent"])("sk-transition"),c=Object(r["resolveComponent"])("router-view");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",a,[Object(r["createVNode"])(c,null,{default:Object(r["withCtx"])((function(e){var t=e.Component;return[Object(r["createVNode"])(o,{name:"slide-left",back_name:"slide-right"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(n,{singleton:["/cart"]},{default:Object(r["withCtx"])((function(e){var n=e.key;return[(Object(r["openBlock"])(),Object(r["createBlock"])(Object(r["resolveDynamicComponent"])(t),{key:n}))]})),_:2},1024)]})),_:2},1024)]})),_:1})])}n("7048");var c=n("6b0d"),l=n.n(c);const i={},u=l()(i,[["render",o]]);var s=u,b=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),d={class:"home"},p=Object(r["createElementVNode"])("p",null," this is home page ",-1),v=Object(r["createTextVNode"])("go to List");function f(e,t,n,a,o,c){var l=Object(r["resolveComponent"])("router-link");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",d,[p,Object(r["createVNode"])(l,{to:"/list"},{default:Object(r["withCtx"])((function(){return[v]})),_:1})])}var h={class:"hello"},m=Object(r["createStaticVNode"])('<p data-v-ebbc34ee> For a guide and recipes on how to configure / customize this project,<br data-v-ebbc34ee> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-ebbc34ee>vue-cli documentation</a>. </p><h3 data-v-ebbc34ee>Installed CLI Plugins</h3><ul data-v-ebbc34ee><li data-v-ebbc34ee><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-ebbc34ee>babel</a></li><li data-v-ebbc34ee><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-ebbc34ee>router</a></li></ul><h3 data-v-ebbc34ee>Essential Links</h3><ul data-v-ebbc34ee><li data-v-ebbc34ee><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-ebbc34ee>Core Docs</a></li><li data-v-ebbc34ee><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-ebbc34ee>Forum</a></li><li data-v-ebbc34ee><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-ebbc34ee>Community Chat</a></li><li data-v-ebbc34ee><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-ebbc34ee>Twitter</a></li><li data-v-ebbc34ee><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-ebbc34ee>News</a></li></ul><h3 data-v-ebbc34ee>Ecosystem</h3><ul data-v-ebbc34ee><li data-v-ebbc34ee><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-ebbc34ee>vue-router</a></li><li data-v-ebbc34ee><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-ebbc34ee>vuex</a></li><li data-v-ebbc34ee><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-ebbc34ee>vue-devtools</a></li><li data-v-ebbc34ee><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-ebbc34ee>vue-loader</a></li><li data-v-ebbc34ee><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-ebbc34ee>awesome-vue</a></li></ul>',7);function g(e,t,n,a,o,c){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",h,[Object(r["createElementVNode"])("h1",null,Object(r["toDisplayString"])(n.msg),1),m])}var j={name:"HelloWorld",props:{msg:String}};n("8734");const k=l()(j,[["render",g],["__scopeId","data-v-ebbc34ee"]]);var O=k,y={name:"Home",data:function(){return{}},components:{HelloWorld:O},activated:function(){console.log("home activated")}};n("548b");const _=l()(y,[["render",f]]);var w=_,C=[{path:"/",name:"Home",component:w},{path:"/list",name:"List",component:function(){return n.e("List").then(n.bind(null,"1a33"))}},{path:"/info",name:"Info",component:function(){return n.e("Info").then(n.bind(null,"2469"))}},{path:"/cart",name:"Cart",component:function(){return n.e("Info").then(n.bind(null,"b789"))}}],L=Object(b["createRouter"])({history:Object(b["createWebHistory"])("/stack-keep-alive-sample/dist"),routes:C}),E=L,x=n("60be"),I=n.n(x),N=Object(r["createApp"])(s);N.use(E).use(I.a).mount("#app")},7048:function(e,t,n){"use strict";n("8696")},8696:function(e,t,n){},8734:function(e,t,n){"use strict";n("902f")},"902f":function(e,t,n){}});
//# sourceMappingURL=app.da7263c8.js.map