if(!self.define){let e,s={};const a=(a,r)=>(a=new URL(a+".js",r).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(r,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let n={};const t=e=>a(e,c),u={module:{uri:c},exports:n,require:t};s[c]=Promise.all(r.map((e=>u[e]||t(e)))).then((e=>(i(...e),n)))}}define(["./workbox-d72b399d"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"b6bf229f8dc03fdc4a18de06d2c6dd29"},{url:"/_next/static/-6yJuBrFmH0uHX6bWobrv/_buildManifest.js",revision:"6310079bf1ae7bebeb6a2135896e4564"},{url:"/_next/static/-6yJuBrFmH0uHX6bWobrv/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1211.1e7b5998277ba938.js",revision:"1e7b5998277ba938"},{url:"/_next/static/chunks/13b76428-e1bf383848c17260.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/153.8b9229822ea874de.js",revision:"8b9229822ea874de"},{url:"/_next/static/chunks/1551.6a42878a34fa2fb9.js",revision:"6a42878a34fa2fb9"},{url:"/_next/static/chunks/1901-55c9c3121c1d2a63.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/2117-4926b55520881e83.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/2972-213e07f870542cd2.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/3145-bc0605e7c22bb9c1.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/3982.d0326927587a8067.js",revision:"d0326927587a8067"},{url:"/_next/static/chunks/3baf5dbb-f1579f29eaebcf31.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/404.59a5bb8c5a7d34b6.js",revision:"59a5bb8c5a7d34b6"},{url:"/_next/static/chunks/4384-c434372d8fe32afb.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/472.7251b02f6307b32a.js",revision:"7251b02f6307b32a"},{url:"/_next/static/chunks/4771-5b7c79dcff6b9620.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/4868.53c2b14e5016d925.js",revision:"53c2b14e5016d925"},{url:"/_next/static/chunks/4894-2797b12a17a7dbed.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/5858-0f82ee2a72a8be4b.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/5973-9a7794c4ce61aa8d.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/6273.9cffdd3f373556be.js",revision:"9cffdd3f373556be"},{url:"/_next/static/chunks/6434-f1ba83ef6f4d8ff1.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/6583.2c6e3ebef2f94c69.js",revision:"2c6e3ebef2f94c69"},{url:"/_next/static/chunks/6663.a7ceef1fef05c42d.js",revision:"a7ceef1fef05c42d"},{url:"/_next/static/chunks/7573.8d9c1d4289968cc7.js",revision:"8d9c1d4289968cc7"},{url:"/_next/static/chunks/7624-d15938fa9f662423.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/76567b6f.880ee71f7e2d9558.js",revision:"880ee71f7e2d9558"},{url:"/_next/static/chunks/77-731f020668111574.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/772.f55417e186fe9f06.js",revision:"f55417e186fe9f06"},{url:"/_next/static/chunks/7767-6ab2dd0a4c4c958d.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/8178-eda13a93e6bbc61e.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/8414.01d2289044a4be57.js",revision:"01d2289044a4be57"},{url:"/_next/static/chunks/8667-f70016726149ff97.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/8892.b7f057a38954143f.js",revision:"b7f057a38954143f"},{url:"/_next/static/chunks/9750-723c3e30263ac2d0.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/9c4e2130-3dda7e5cd8c92ac5.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/app/%5B%5B...sign-in%5D%5D/page-b8a5dd9978701c25.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/app/(dashboard)/admin/page-84062208aef77cc4.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/app/(dashboard)/chat/page-5528b927174c7dd1.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/app/(dashboard)/layout-bf71e4898ffef642.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/app/(dashboard)/list/announcements/page-afdda93bf0780b61.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/app/(dashboard)/list/assignments/page-2d59d2aba3e72e98.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/app/(dashboard)/list/chapters/page-82f2d65f6ef0d9ef.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/app/(dashboard)/list/classes/page-6f802aae53dd0daf.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/app/(dashboard)/list/courses/page-bf8deb5f713fa2e9.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/app/(dashboard)/list/events/page-a60789e86efc192d.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/app/(dashboard)/list/exams/page-90ecf20419ff2308.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/app/(dashboard)/list/loading-039247ce527c090a.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/app/(dashboard)/list/results/page-4c6c7f3457e0dc1c.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/app/(dashboard)/list/students/%5Bid%5D/page-38b5a7005fce9ec1.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/app/(dashboard)/list/students/page-bacd4224d8349e6e.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/app/(dashboard)/list/teachers/%5Bid%5D/page-eb8db1d92f9f83f1.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/app/(dashboard)/list/teachers/page-7a13484f3294b285.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/app/(dashboard)/student/page-0e312efb20f85146.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/app/(dashboard)/teacher/page-7b6ffa543e0635eb.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/app/_not-found/page-986f3cf2ba642bd2.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/app/layout-7357ed5f411b9ee4.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/c0e397d0-0536b0787e38b9fa.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/d362c049.0228315947f1cb1c.js",revision:"0228315947f1cb1c"},{url:"/_next/static/chunks/e80c4f76-aab33eeae83e29a5.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/fd9d1056-f80ec083959ec9c3.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/framework-8e0e0f4a6b83a956.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/main-52ed1137a67d42c7.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/main-app-c602124ff5c2e036.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/pages/_app-3c9ca398d360b709.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/pages/_error-cf5ca766ac8f493f.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-44f2b1c7bee475b8.js",revision:"-6yJuBrFmH0uHX6bWobrv"},{url:"/_next/static/css/20fc84e825709a2d.css",revision:"20fc84e825709a2d"},{url:"/_next/static/css/2a00ea451edbe5f3.css",revision:"2a00ea451edbe5f3"},{url:"/_next/static/css/65f1c5747b869b1e.css",revision:"65f1c5747b869b1e"},{url:"/_next/static/css/74f6c073aa114065.css",revision:"74f6c073aa114065"},{url:"/_next/static/css/7e3f70070f485352.css",revision:"7e3f70070f485352"},{url:"/_next/static/css/f9d1a77dc467d36c.css",revision:"f9d1a77dc467d36c"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/_next/static/media/stream-chat-icons.056e44af.ttf",revision:"056e44af"},{url:"/_next/static/media/stream-chat-icons.73284475.eot",revision:"73284475"},{url:"/_next/static/media/stream-chat-icons.e9ed4f03.svg",revision:"e9ed4f03"},{url:"/_next/static/media/stream-chat-icons.f0e1ef22.woff",revision:"f0e1ef22"},{url:"/announcement.png",revision:"cce9d326e4407278ae1b1209f6717686"},{url:"/assignment.png",revision:"89895c3d86af28dddf83c1a8079a82b0"},{url:"/attendance.png",revision:"83980ad112428dccf58a85f6b165e118"},{url:"/avatar.png",revision:"f8e05a791156910c708862eab3572f7b"},{url:"/blood.png",revision:"ce67f94f8fae505f45ec67e9e8c0c920"},{url:"/calendar.png",revision:"9357ae753c74c6d2dd75ed6379ced40f"},{url:"/class.png",revision:"e4235d09cf0e37dd9af8b900a81316a4"},{url:"/close.png",revision:"09e0c59ba2e32cfc7a9021ed5b236d2f"},{url:"/cpu-logo.jpg",revision:"a896516e378437221ab9132c26747d45"},{url:"/create.png",revision:"050edf7f85a49f8f6aa2b4b8114865a2"},{url:"/date.png",revision:"7ceff2fc45aedf75392ddcbf482aa36d"},{url:"/delete.png",revision:"edd6977d330b23905997c70c5774b20b"},{url:"/exam.png",revision:"3f838c726e2a779ce85f6bce688e81f8"},{url:"/filter.png",revision:"154b6715882e2767a114c98deaf9611c"},{url:"/finance.png",revision:"bf77b03998b01d5afabed3254789e8a6"},{url:"/home.png",revision:"c9be52cad40c9f6b11519106e7615128"},{url:"/icons/cpu-logo-128.png",revision:"721d102e6f1e00da6fca62d7c15e59df"},{url:"/icons/cpu-logo-144.png",revision:"db9f839f1efc6388c8491bfe8a81b7d1"},{url:"/icons/cpu-logo-152.png",revision:"96189f6e73b99b98df32867da17ba664"},{url:"/icons/cpu-logo-192.png",revision:"e2612ab4c7dbf97b48a208781b71c98f"},{url:"/icons/cpu-logo-384.png",revision:"3a170ef8cb2a1342724183199f4591bd"},{url:"/icons/cpu-logo-400.png",revision:"06ed27825d75012b4fc90f01507cb12f"},{url:"/icons/cpu-logo-512.png",revision:"4bfb56f3d506e0a990924ea975173aaa"},{url:"/icons/cpu-logo-72.png",revision:"5285ddaeb0b2475d79d233e4fd396ffd"},{url:"/icons/cpu-logo-96.png",revision:"e5a5ba23f22d2ef64b07d848756e9d6d"},{url:"/lesson.png",revision:"37aeff5ea84af79eebc7f93c8ef0442f"},{url:"/logo.png",revision:"225d04feaa522e73294bdd0d386e512b"},{url:"/logout.png",revision:"799a7ee5004dc172e9cc4ef51f439def"},{url:"/mail.png",revision:"944d3bf0799e4853a8cbeef64c4e23d1"},{url:"/maleFemale.png",revision:"cbbda58f7c8182295b2fcebc03da4613"},{url:"/manifest.json",revision:"8b3b969db86f9c7e3585f120eee7927a"},{url:"/message.png",revision:"f517c2d087cf316c781e5eb5fdecaf55"},{url:"/more.png",revision:"d402677d46467aac4eabc0cacc40efa4"},{url:"/moreDark.png",revision:"567838fc3ecfd2dd167c1719b39e088d"},{url:"/noAvatar.png",revision:"beb79e85d3f4d69bd4447eb358d93324"},{url:"/parent.png",revision:"2aa65b014e31774f56ac25607d5f87e9"},{url:"/phone.png",revision:"e789519847f894356c0ce78401917a6e"},{url:"/profile.png",revision:"07a6e090eb8267bebbd3b1b5d5563ee0"},{url:"/result.png",revision:"2afd5dc10b330037baf303854418e9ce"},{url:"/search.png",revision:"37e52ef2b40d05dec99a36a90da2fabf"},{url:"/setting.png",revision:"9625a2d20ea0bf1235365f7a4ec0146d"},{url:"/singleAttendance.png",revision:"aabf29dc8a8b0f05e3e0a2f6d519b8d1"},{url:"/singleBranch.png",revision:"c603ebcfb0a3bf0b0698a9f0ccd191dd"},{url:"/singleClass.png",revision:"f58bfe48fadcdd53b06509c6f8d5b221"},{url:"/singleLesson.png",revision:"8d5f6735b77f642eb080197e296a952e"},{url:"/sort.png",revision:"e5139253456714c926e81e5cacd1330b"},{url:"/student.png",revision:"189acb2cd043cfa8c2bf59ad2cca83d6"},{url:"/subject.png",revision:"56d2b0dfff6417938920b7de5aabc40f"},{url:"/teacher.png",revision:"419e566ff75e6be430a17451e99aad3c"},{url:"/update.png",revision:"a3632c6992a855563f8a8f9a8541db57"},{url:"/upload.png",revision:"af217e530839422529d1aaca333eb213"},{url:"/view.png",revision:"5beeea8c8006641291c17697b1550949"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:r})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https?.*/,new e.NetworkFirst({cacheName:"offlineCache",plugins:[new e.ExpirationPlugin({maxEntries:200,maxAgeSeconds:86400}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));