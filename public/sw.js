if(!self.define){let e,s={};const c=(c,i)=>(c=new URL(c+".js",i).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(i,n)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let r={};const t=e=>c(e,a),d={module:{uri:a},exports:r,require:t};s[a]=Promise.all(i.map((e=>d[e]||t(e)))).then((e=>(n(...e),r)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/BCxj5yoITHGXTuwguCYek/_buildManifest.js",revision:"1899c9443509943606abfbc6e074ed60"},{url:"/_next/static/BCxj5yoITHGXTuwguCYek/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1372-c099dcc3834939b9.js",revision:"c099dcc3834939b9"},{url:"/_next/static/chunks/1664-2bd7c0cf8e82d2c6.js",revision:"2bd7c0cf8e82d2c6"},{url:"/_next/static/chunks/1801-f2eebefef9014810.js",revision:"f2eebefef9014810"},{url:"/_next/static/chunks/1907.28114e7d1703c055.js",revision:"28114e7d1703c055"},{url:"/_next/static/chunks/2223.8c0fcfc3e8abd246.js",revision:"8c0fcfc3e8abd246"},{url:"/_next/static/chunks/2570.836fbee45399b9d5.js",revision:"836fbee45399b9d5"},{url:"/_next/static/chunks/3254-5c636fedd2d96819.js",revision:"5c636fedd2d96819"},{url:"/_next/static/chunks/333.78d00901ed4d56e5.js",revision:"78d00901ed4d56e5"},{url:"/_next/static/chunks/3475.84c82bc4117f6780.js",revision:"84c82bc4117f6780"},{url:"/_next/static/chunks/4045.b52e9c76a4338686.js",revision:"b52e9c76a4338686"},{url:"/_next/static/chunks/4201-23c48c4b56123176.js",revision:"23c48c4b56123176"},{url:"/_next/static/chunks/4250-1f5bf74b5eec1545.js",revision:"1f5bf74b5eec1545"},{url:"/_next/static/chunks/4459-b694bf308169e9be.js",revision:"b694bf308169e9be"},{url:"/_next/static/chunks/4902.0ccf432c47e6def3.js",revision:"0ccf432c47e6def3"},{url:"/_next/static/chunks/5618.47ea3a4df86f4273.js",revision:"47ea3a4df86f4273"},{url:"/_next/static/chunks/5830.bb25a4701bac7f52.js",revision:"bb25a4701bac7f52"},{url:"/_next/static/chunks/6455.acee46dcf46e5ba1.js",revision:"acee46dcf46e5ba1"},{url:"/_next/static/chunks/6732.9a79fe222f864d14.js",revision:"9a79fe222f864d14"},{url:"/_next/static/chunks/6834.6d6fc7710cb21152.js",revision:"6d6fc7710cb21152"},{url:"/_next/static/chunks/7847-bb527b476ed7bdea.js",revision:"bb527b476ed7bdea"},{url:"/_next/static/chunks/7956.dea9d6970c35fc2c.js",revision:"dea9d6970c35fc2c"},{url:"/_next/static/chunks/8283.1d6e02e62521e9ba.js",revision:"1d6e02e62521e9ba"},{url:"/_next/static/chunks/8305.bcb63ef29c0c9bd0.js",revision:"bcb63ef29c0c9bd0"},{url:"/_next/static/chunks/8985-cf08fa13b56b00d3.js",revision:"cf08fa13b56b00d3"},{url:"/_next/static/chunks/9207-498d6a6b2ad1e0b9.js",revision:"498d6a6b2ad1e0b9"},{url:"/_next/static/chunks/framework-d51ece3d757c7ed2.js",revision:"d51ece3d757c7ed2"},{url:"/_next/static/chunks/main-d7995b8181a62457.js",revision:"d7995b8181a62457"},{url:"/_next/static/chunks/pages/_app-c2b866f76a4d8e04.js",revision:"c2b866f76a4d8e04"},{url:"/_next/static/chunks/pages/_error-7891c9bfcd7b3e53.js",revision:"7891c9bfcd7b3e53"},{url:"/_next/static/chunks/pages/analytics-5ff5d70f5bcef52c.js",revision:"5ff5d70f5bcef52c"},{url:"/_next/static/chunks/pages/candidates-96f10a52eee14d16.js",revision:"96f10a52eee14d16"},{url:"/_next/static/chunks/pages/candidates/presidential-83579e628490cf11.js",revision:"83579e628490cf11"},{url:"/_next/static/chunks/pages/candidates/presidential/%5Bslug%5D-e53b70a0a19324cc.js",revision:"e53b70a0a19324cc"},{url:"/_next/static/chunks/pages/comment/%5Bslug%5D-07bf5b519df2766a.js",revision:"07bf5b519df2766a"},{url:"/_next/static/chunks/pages/create-066e9ecf2f46cb0a.js",revision:"066e9ecf2f46cb0a"},{url:"/_next/static/chunks/pages/discourse-8d4879cb21976d92.js",revision:"8d4879cb21976d92"},{url:"/_next/static/chunks/pages/discourse/%5Bslug%5D-db1522d28d7c1163.js",revision:"db1522d28d7c1163"},{url:"/_next/static/chunks/pages/forget-password-0c6c6c808099654d.js",revision:"0c6c6c808099654d"},{url:"/_next/static/chunks/pages/home-95f7363fd3223467.js",revision:"95f7363fd3223467"},{url:"/_next/static/chunks/pages/index-cd6234902ed0efd6.js",revision:"cd6234902ed0efd6"},{url:"/_next/static/chunks/pages/login-4f06e3bdd63cfb97.js",revision:"4f06e3bdd63cfb97"},{url:"/_next/static/chunks/pages/notifications-368fbb91f474662d.js",revision:"368fbb91f474662d"},{url:"/_next/static/chunks/pages/poll/%5Bslug%5D-c047486dad83f3f6.js",revision:"c047486dad83f3f6"},{url:"/_next/static/chunks/pages/poll/%5Bslug%5D/analytics-a8854eec8a8af491.js",revision:"a8854eec8a8af491"},{url:"/_next/static/chunks/pages/post/%5Bid%5D-e0a2a2155c052aa9.js",revision:"e0a2a2155c052aa9"},{url:"/_next/static/chunks/pages/profile-a33beb74c05dbad9.js",revision:"a33beb74c05dbad9"},{url:"/_next/static/chunks/pages/profile/%5Bid%5D-ab74090e2c31508e.js",revision:"ab74090e2c31508e"},{url:"/_next/static/chunks/pages/profile/edit-33270395bd4c4b51.js",revision:"33270395bd4c4b51"},{url:"/_next/static/chunks/pages/profile/view-e59eb9e276105349.js",revision:"e59eb9e276105349"},{url:"/_next/static/chunks/pages/reports-39265c007b8ff15f.js",revision:"39265c007b8ff15f"},{url:"/_next/static/chunks/pages/results/results-ca5b273a44cad43a.js",revision:"ca5b273a44cad43a"},{url:"/_next/static/chunks/pages/signup-2fa878f093de66f4.js",revision:"2fa878f093de66f4"},{url:"/_next/static/chunks/pages/verification-acda16d24eb7c5ee.js",revision:"acda16d24eb7c5ee"},{url:"/_next/static/chunks/pages/voting-16d9b929ba11edd4.js",revision:"16d9b929ba11edd4"},{url:"/_next/static/chunks/pages/voting/%5Bid%5D-95cc230ccbfa3d06.js",revision:"95cc230ccbfa3d06"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-01c0f42001b53ff0.js",revision:"01c0f42001b53ff0"},{url:"/_next/static/css/96fa251f77c406d9.css",revision:"96fa251f77c406d9"},{url:"/arrow_back.svg",revision:"943c9e62629b5a807e36ed7c753300bc"},{url:"/arrow_outward.svg",revision:"699e482c8d2920d7f37df1bcb8ba79ce"},{url:"/candidates/atiku.png",revision:"c1ec626617a2da590b18daa4d34ed538"},{url:"/candidates/bello.png",revision:"d7c5763c029dfddf29c52800dcd4e9c5"},{url:"/candidates/buhari.png",revision:"6b2d9bb7afa0429d817e0e551bac93fe"},{url:"/candidates/obi.png",revision:"dadc0630cc5e8c72bb62003c9fa96b91"},{url:"/candidates/rabiu.png",revision:"58d5bce0e85dbe754d7b8fd9368bca0e"},{url:"/candidates/ribado.png",revision:"7905ce660fdb9c8c17e72532d46e1086"},{url:"/candidates/rufai.png",revision:"5cdb971856ea1921104b6d87b2ef8819"},{url:"/candidates/tinubu.png",revision:"f8feac11f8836cc05f61e3a558410e1b"},{url:"/candidates/wole.png",revision:"9b2bc5e3de138a745b891ce257883fce"},{url:"/caret.svg",revision:"4dfe9263045925b01224d26bdde8f866"},{url:"/check.svg",revision:"4cd41e3cde29fc37c80b9a23292b7735"},{url:"/close.svg",revision:"3b4aed097e9bb03de75b1dcd832caefb"},{url:"/eye-off.svg",revision:"2552921f3fc1fed364fa22bd45635921"},{url:"/eye.svg",revision:"282f632e62c88a13eab3aca9c0676b14"},{url:"/favicon.ico",revision:"b686a937b1fed50c68f2fe49c42cb221"},{url:"/icon-192x192.png",revision:"e72d4061c41deed22f78765807e48b8c"},{url:"/icon-256x256.png",revision:"4e36cc176c279e58345627bd2e7f33db"},{url:"/icon-384x384.png",revision:"7cab30c6cb45b28d9c8c109d4501d9ab"},{url:"/icon-512x512.png",revision:"d8b7a453a00aef6e76ef6b78f37bd321"},{url:"/icon.png",revision:"d8b7a453a00aef6e76ef6b78f37bd321"},{url:"/logo.png",revision:"afc024be32cf9ba276b1ebb3da98b756"},{url:"/manifest.json",revision:"376997f6eb0de81e8de333d3271e8fcd"},{url:"/map.png",revision:"ee93b0d50b446d3beda07549286d933a"},{url:"/nuhu.png",revision:"7905ce660fdb9c8c17e72532d46e1086"},{url:"/parties/admin.png",revision:"f2d019c34b8da9a4de2681cf06d64a0b"},{url:"/parties/apc.png",revision:"4621012a05755904c12f83ccce16aaaa"},{url:"/parties/lp.png",revision:"dc06b39d28bd0b67db73270fdffb94c9"},{url:"/parties/ncp.png",revision:"ee719ec49fb1ac5c16d6681e104d4550"},{url:"/parties/nnpp.png",revision:"2077825f19d279f6e1281f968453e52f"},{url:"/parties/pdp.png",revision:"4b3d8d0127a06915c63afb786b2b2f8f"},{url:"/parties/prp.png",revision:"fbe9b357749926362cc47039b3d4a025"},{url:"/parties/sdp.png",revision:"0c7cf84c65672612c581048e64f91b45"},{url:"/results.svg",revision:"56b983664060a8d4907d17e8837184b0"},{url:"/rotimi.png",revision:"821fc06666b6a4a5398cb7638d961253"},{url:"/search.svg",revision:"effe57a071eca7d92679fcd235a19818"},{url:"/service-worker.js",revision:"7c92de806787e3c655c8b8af475e209d"},{url:"/settings.svg",revision:"5b0bdbe469df52366f7c8a6bc6a3f11f"},{url:"/svgs/caret-down-dark.svg",revision:"2fb6b5e139cdb6a9a3a2504308378ed9"},{url:"/svgs/comment.svg",revision:"cf4d459b045c52979b766e7fc768e145"},{url:"/svgs/discourse.svg",revision:"d77101a31622556633e3ded895e2fd7c"},{url:"/svgs/dots-horizontal.svg",revision:"ab595d3e40907e6c76b47b73ef00be16"},{url:"/svgs/edit.svg",revision:"ff89cd789e24d7b2dbce65f04371c588"},{url:"/svgs/home.svg",revision:"c71ad75de6c8f918ecf9708687b690ee"},{url:"/svgs/loading.svg",revision:"464dd3755b1c028efe5a8ec33af97e66"},{url:"/svgs/notifications.svg",revision:"0a546c330e7dd2a8353fc87c2759e0c8"},{url:"/svgs/profile.svg",revision:"d6c34765617d39082cadef343f4f2ebf"},{url:"/svgs/reply.svg",revision:"4b7a6897462c3c66d956bc49229ec11d"},{url:"/svgs/report.svg",revision:"968c9d729483e5b64a5a6fab37fc781b"},{url:"/svgs/show-password.svg",revision:"50b0fc1073be1338168802375cb49631"},{url:"/svgs/thumb_down.svg",revision:"a28ff8b4f6c87e3d7d29b2c5750fe571"},{url:"/svgs/thumb_up.svg",revision:"5897d23946250972185b4f854af5d79c"},{url:"/svgs/thumbs-down.svg",revision:"e7294d3827df205edde8f02a6df24d22"},{url:"/svgs/thumbs-up.svg",revision:"4197b6dcbd035db0e203d864c428fa6f"},{url:"/svgs/user.svg",revision:"ed24e6365148806a5e1d014913645670"},{url:"/svgs/vote.svg",revision:"9e45c01c74a1f8a37d87db1edb7f328e"},{url:"/users.svg",revision:"d9190ee4ca32a9ad4f13a996ebbc714b"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"},{url:"/verified.svg",revision:"258b4dee650b3365b7212113c04b8cbb"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
