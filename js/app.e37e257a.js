(()=>{"use strict";var e={262:(e,t,n)=>{var r=n(1957),o=n(3890),a=n(499),i=n(9835);function l(e,t,n,r,o,a){const l=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(l,{style:{"background-image":"url('https://r2.blog.young-4.com/backround.png')","background-size":"cover"}})}const u=(0,i.aZ)({name:"App"});var s=n(1639);const c=(0,s.Z)(u,[["render",l]]),d=c;var h=n(3340),m=n(8339);const p=[{path:"/",component:()=>Promise.all([n.e(736),n.e(992)]).then(n.bind(n,7992)),redirect:{name:"index"},children:[{path:"index",name:"index",component:()=>Promise.all([n.e(736),n.e(92)]).then(n.bind(n,1092))},{path:"about",name:"about",component:()=>Promise.all([n.e(736),n.e(697)]).then(n.bind(n,1697))},{path:"directory",name:"directory",component:()=>Promise.all([n.e(736),n.e(665)]).then(n.bind(n,3271))},{path:"friends",name:"friends",component:()=>Promise.all([n.e(736),n.e(294)]).then(n.bind(n,9294))},{path:"blog/:id",name:"blog",component:()=>Promise.all([n.e(736),n.e(809)]).then(n.bind(n,4809))},{path:"/survey",name:"survey",component:()=>Promise.all([n.e(736),n.e(582)]).then(n.bind(n,9582))}]},{path:"/:catchAll(.*)*",component:()=>n.e(995).then(n.bind(n,995))}],f=p,g=(0,h.BC)((function(){const e=m.r5,t=(0,m.p7)({scrollBehavior:()=>({left:0,top:0}),routes:f,history:e("")});return t}));async function b(e,t){const n=e(d);n.use(o.Z,t);const r=(0,a.Xl)("function"===typeof g?await g({}):g);return{app:n,router:r}}const v={config:{}},y="";async function k({app:e,router:t},n){let r=!1;const o=e=>{try{return t.resolve(e).href}catch(n){}return Object(e)===e?null:e},a=e=>{if(r=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=o(e);null!==t&&(window.location.href=t,window.location.reload())},i=window.location.href.replace(window.location.origin,"");for(let u=0;!1===r&&u<n.length;u++)try{await n[u]({app:e,router:t,ssrContext:null,redirect:a,urlPath:i,publicPath:y})}catch(l){return l&&l.url?void a(l.url):void console.error("[Quasar] boot error:",l)}!0!==r&&(e.use(t),e.mount("#q-app"))}b(r.ri,v).then((e=>{const[t,r]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(n.bind(n,1343))]).then((t=>{const n=r(t).filter((e=>"function"===typeof e));k(e,n)}))}))},1343:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(6647);const o={title:"yOung-4's Blog",home:"home",about:"about",blog:"blog",link_exchange:"link exchange",name:"yOung-4",index:{motto:"Eventually, we will meet again on Betelgeuse, although it's a long journey ahead",introduction:"Grade 12 student/Living in Toronto/Learning vue/osu! & Euro Truck 2 beginner/…"},about:{label_survey:"Participate in the survey"},directory:{contents:"Contents",total_article_num:"total number of articles: "},link:{link_mengguyi:"Meng Guyi's Blog",link_mtfwiki:"MtF wiki"}},a={title:"负4价的yOung元素的博客",home:"主页",about:"关于",blog:"博客",link_exchange:"友链",name:"负4价的yOung元素",index:{motto:"我们终将在 #参宿四 重逢，尽管前路漫漫……",introduction:"12年级就读中/现居多伦多/正在试图学习vue/osu! & Euro Truck 2萌新/…"},about:{label_survey:"参与问卷调查"},directory:{contents:"目录",total_article_num:"文章总数："},link:{link_mengguyi:"孟古一的博客",link_mtfwiki:"MtF wiki"}},i={title:"負4價的yOung元素的部落格",home:"首頁",about:"關於",blog:"部落格",link_exchange:"友鏈",name:"负4价的yOung元素",index:{motto:"我們終將在參宿四重逢，儘管前路漫漫…",introduction:"12年級就讀中/現居多倫多/正在試圖學習vue/osu! & Euro Truck 2萌新/…"},about:{label_survey:"參與問卷調查"},directory:{contents:"目錄",total_article_num:"文章總數："},link:{link_mengguyi:"孟古一的博客",link_mtfwiki:"MtF wiki"}},l={"en-US":o,"zh-CN":a,"zh-TW":i};var u=n(3890);const s=({app:e})=>{const t=(0,r.o)({locale:u.Z.lang.getLocale(),messages:l});e.use(t)}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,(()=>{var e=[];n.O=(t,r,o,a)=>{if(!r){var i=1/0;for(c=0;c<e.length;c++){for(var[r,o,a]=e[c],l=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](r[u])))?r.splice(u--,1):(l=!1,a<i&&(i=a));if(l){e.splice(c--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,o,a]}})(),(()=>{n.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return n.d(t,{a:t}),t}})(),(()=>{n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[]))})(),(()=>{n.u=e=>"js/"+e+"."+{92:"75adba60",294:"a7c9b580",582:"6efe258f",665:"827fd299",697:"f79db06e",809:"0ec47454",992:"9c931925",995:"e56a654b"}[e]+".js"})(),(()=>{n.miniCssF=e=>"css/"+e+".31d6cfe0.css"})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="blog:";n.l=(r,o,a,i)=>{if(e[r])e[r].push(o);else{var l,u;if(void 0!==a)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var d=s[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){l=d;break}}l||(u=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+a),l.src=r),e[r]=[o];var h=(t,n)=>{l.onerror=l.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(n))),t)return t(n)},m=setTimeout(h.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=h.bind(null,l.onerror),l.onload=h.bind(null,l.onload),u&&document.head.appendChild(l)}}})(),(()=>{n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{n.p=""})(),(()=>{if("undefined"!==typeof document){var e=(e,t,n,r,o)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=n=>{if(a.onerror=a.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=l,a.parentNode.removeChild(a),o(u)}};return a.onerror=a.onload=i,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=(e,t)=>{for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=r=>new Promise(((o,a)=>{var i=n.miniCssF(r),l=n.p+i;if(t(i,l))return o();e(r,l,null,o,a)})),o={143:0};n.f.miniCss=(e,t)=>{var n={809:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}}})(),(()=>{var e={143:0};n.f.j=(t,r)=>{var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise(((n,r)=>o=e[t]=[n,r]));r.push(o[2]=a);var i=n.p+n.u(t),l=new Error,u=r=>{if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,o[1](l)}};n.l(i,u,"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[i,l,u]=r,s=0;if(i.some((t=>0!==e[t]))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(u)var c=u(n)}for(t&&t(r);s<i.length;s++)a=i[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},r=globalThis["webpackChunkblog"]=globalThis["webpackChunkblog"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[736],(()=>n(262)));r=n.O(r)})();