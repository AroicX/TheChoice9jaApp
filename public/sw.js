<<<<<<< HEAD
/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-327c579b'], (function (workbox) { 'use strict';

  importScripts();
  self.skipWaiting();
  workbox.clientsClaim();
  workbox.registerRoute("/", new workbox.NetworkFirst({
    "cacheName": "start-url",
    plugins: [{
      cacheWillUpdate: async ({
        request,
        response,
        event,
        state
      }) => {
        if (response && response.type === 'opaqueredirect') {
          return new Response(response.body, {
            status: 200,
            statusText: 'OK',
            headers: response.headers
          });
        }
        return response;
      }
    }]
  }), 'GET');
  workbox.registerRoute(/.*/i, new workbox.NetworkOnly({
    "cacheName": "dev",
    plugins: []
  }), 'GET');

}));
//# sourceMappingURL=sw.js.map
=======
if(!self.define){let e,s={};const c=(c,i)=>(c=new URL(c+".js",i).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(i,a)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>c(e,n),d={module:{uri:n},exports:t,require:r};s[n]=Promise.all(i.map((e=>d[e]||r(e)))).then((e=>(a(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/6TDQ2jOmV2iOr-XfCULq5/_buildManifest.js",revision:"0568357527567142993ee5c57af3f7a8"},{url:"/_next/static/6TDQ2jOmV2iOr-XfCULq5/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/21-d43b5384c285f800.js",revision:"d43b5384c285f800"},{url:"/_next/static/chunks/254-d9fdda247d1f6c24.js",revision:"d9fdda247d1f6c24"},{url:"/_next/static/chunks/305-292b36729319f339.js",revision:"292b36729319f339"},{url:"/_next/static/chunks/447-781add9213dee0e8.js",revision:"781add9213dee0e8"},{url:"/_next/static/chunks/63-7bc9dad82bdb7b40.js",revision:"7bc9dad82bdb7b40"},{url:"/_next/static/chunks/756-20bc17164b140610.js",revision:"20bc17164b140610"},{url:"/_next/static/chunks/801-b2da1dc917122a78.js",revision:"b2da1dc917122a78"},{url:"/_next/static/chunks/866-1af7a4dc78831e7f.js",revision:"1af7a4dc78831e7f"},{url:"/_next/static/chunks/927-bef3a0d6418617db.js",revision:"bef3a0d6418617db"},{url:"/_next/static/chunks/framework-7751730b10fa0f74.js",revision:"7751730b10fa0f74"},{url:"/_next/static/chunks/main-b6582f245bf11510.js",revision:"b6582f245bf11510"},{url:"/_next/static/chunks/pages/_app-2b0ea56f20cb1cc6.js",revision:"2b0ea56f20cb1cc6"},{url:"/_next/static/chunks/pages/_error-e4f561a102d9bb14.js",revision:"e4f561a102d9bb14"},{url:"/_next/static/chunks/pages/analytics-7c5668d58b2f5b4e.js",revision:"7c5668d58b2f5b4e"},{url:"/_next/static/chunks/pages/candidates-1c159cb7e732aac1.js",revision:"1c159cb7e732aac1"},{url:"/_next/static/chunks/pages/candidates/presidential-7ff04098a3d9e020.js",revision:"7ff04098a3d9e020"},{url:"/_next/static/chunks/pages/candidates/presidential/%5Bslug%5D-75e894be0210d14b.js",revision:"75e894be0210d14b"},{url:"/_next/static/chunks/pages/comment/%5Bslug%5D-ab64128ae370b75b.js",revision:"ab64128ae370b75b"},{url:"/_next/static/chunks/pages/create-295b990eb313e4ee.js",revision:"295b990eb313e4ee"},{url:"/_next/static/chunks/pages/discourse-796f9ba7a6acb82d.js",revision:"796f9ba7a6acb82d"},{url:"/_next/static/chunks/pages/discourse/%5Bslug%5D-ffcf47dd77d456a0.js",revision:"ffcf47dd77d456a0"},{url:"/_next/static/chunks/pages/home-51059f1906ffd159.js",revision:"51059f1906ffd159"},{url:"/_next/static/chunks/pages/index-8c63323adff85c1b.js",revision:"8c63323adff85c1b"},{url:"/_next/static/chunks/pages/login-48fc6bafbbc77030.js",revision:"48fc6bafbbc77030"},{url:"/_next/static/chunks/pages/notifications-150f6df8b88f4164.js",revision:"150f6df8b88f4164"},{url:"/_next/static/chunks/pages/poll/%5Bslug%5D-14c27bf8fa69e52b.js",revision:"14c27bf8fa69e52b"},{url:"/_next/static/chunks/pages/post/%5Bid%5D-9f9c2d225db797cc.js",revision:"9f9c2d225db797cc"},{url:"/_next/static/chunks/pages/profile-8d4e4ba1f1ee9456.js",revision:"8d4e4ba1f1ee9456"},{url:"/_next/static/chunks/pages/profile/edit-f2b2d18094c556c7.js",revision:"f2b2d18094c556c7"},{url:"/_next/static/chunks/pages/profile/view-352392ca47e045c3.js",revision:"352392ca47e045c3"},{url:"/_next/static/chunks/pages/reports-d7fec317f9e6610a.js",revision:"d7fec317f9e6610a"},{url:"/_next/static/chunks/pages/results/results-601609136fb4bf79.js",revision:"601609136fb4bf79"},{url:"/_next/static/chunks/pages/signup-7ce0a1ef18c40459.js",revision:"7ce0a1ef18c40459"},{url:"/_next/static/chunks/pages/verification-119bcbc1cab3aca0.js",revision:"119bcbc1cab3aca0"},{url:"/_next/static/chunks/pages/voting-0cc718d39c9a8b23.js",revision:"0cc718d39c9a8b23"},{url:"/_next/static/chunks/pages/voting/%5Bid%5D-e937d45c36eb51ec.js",revision:"e937d45c36eb51ec"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-59c5c889f52620d6.js",revision:"59c5c889f52620d6"},{url:"/_next/static/css/c774bba13b11c385.css",revision:"c774bba13b11c385"},{url:"/arrow_back.svg",revision:"943c9e62629b5a807e36ed7c753300bc"},{url:"/arrow_outward.svg",revision:"699e482c8d2920d7f37df1bcb8ba79ce"},{url:"/caret.svg",revision:"4dfe9263045925b01224d26bdde8f866"},{url:"/check.svg",revision:"4cd41e3cde29fc37c80b9a23292b7735"},{url:"/close.svg",revision:"141e946a42f5a0182d14ea24019b8b58"},{url:"/eye-off.svg",revision:"2552921f3fc1fed364fa22bd45635921"},{url:"/eye.svg",revision:"282f632e62c88a13eab3aca9c0676b14"},{url:"/favicon.ico",revision:"b686a937b1fed50c68f2fe49c42cb221"},{url:"/icon-192x192.png",revision:"e72d4061c41deed22f78765807e48b8c"},{url:"/icon-256x256.png",revision:"4e36cc176c279e58345627bd2e7f33db"},{url:"/icon-384x384.png",revision:"7cab30c6cb45b28d9c8c109d4501d9ab"},{url:"/icon-512x512.png",revision:"d8b7a453a00aef6e76ef6b78f37bd321"},{url:"/icon.png",revision:"d8b7a453a00aef6e76ef6b78f37bd321"},{url:"/logo.png",revision:"afc024be32cf9ba276b1ebb3da98b756"},{url:"/manifest.json",revision:"376997f6eb0de81e8de333d3271e8fcd"},{url:"/map.png",revision:"ee93b0d50b446d3beda07549286d933a"},{url:"/nuhu.png",revision:"7905ce660fdb9c8c17e72532d46e1086"},{url:"/parties.svg",revision:"6a295fdb499284b1a3bd8eb3d9bd917e"},{url:"/profile.svg",revision:"84504432eea40c35d413c668910480d2"},{url:"/results.svg",revision:"56b983664060a8d4907d17e8837184b0"},{url:"/rotimi.png",revision:"821fc06666b6a4a5398cb7638d961253"},{url:"/search.svg",revision:"effe57a071eca7d92679fcd235a19818"},{url:"/service-worker.js",revision:"7c92de806787e3c655c8b8af475e209d"},{url:"/settings.svg",revision:"5b0bdbe469df52366f7c8a6bc6a3f11f"},{url:"/svgs/caret-down-dark.svg",revision:"2fb6b5e139cdb6a9a3a2504308378ed9"},{url:"/svgs/comment.svg",revision:"cf4d459b045c52979b766e7fc768e145"},{url:"/svgs/discourse.svg",revision:"d77101a31622556633e3ded895e2fd7c"},{url:"/svgs/dots-horizontal.svg",revision:"ab595d3e40907e6c76b47b73ef00be16"},{url:"/svgs/home.svg",revision:"c71ad75de6c8f918ecf9708687b690ee"},{url:"/svgs/loading.svg",revision:"464dd3755b1c028efe5a8ec33af97e66"},{url:"/svgs/notifications.svg",revision:"0a546c330e7dd2a8353fc87c2759e0c8"},{url:"/svgs/profile.svg",revision:"2115bdbd9b1829decba2418645bc13b9"},{url:"/svgs/reply.svg",revision:"4b7a6897462c3c66d956bc49229ec11d"},{url:"/svgs/show-password.svg",revision:"50b0fc1073be1338168802375cb49631"},{url:"/svgs/thumbs-down.svg",revision:"a920d76bd314d4cb1ec0b2f99dc6f088"},{url:"/svgs/thumbs-up.svg",revision:"84ca71294c3a9155ec3b39625e28e39b"},{url:"/svgs/user.svg",revision:"ed24e6365148806a5e1d014913645670"},{url:"/svgs/vote.svg",revision:"9e45c01c74a1f8a37d87db1edb7f328e"},{url:"/users.svg",revision:"d9190ee4ca32a9ad4f13a996ebbc714b"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"},{url:"/verified.svg",revision:"258b4dee650b3365b7212113c04b8cbb"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
>>>>>>> 5455c6bc02f03755fa51e7067de523976703d5bf
