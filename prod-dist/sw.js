if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const d=e=>n(e,t),l={module:{uri:t},exports:o,require:d};i[t]=Promise.all(s.map((e=>l[e]||d(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-Bn9KvwGn.css",revision:null},{url:"assets/index-wCehtpmI.js",revision:null},{url:"index.html",revision:"db22d77df285c7f5eab477d7b46b99b9"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"pwa-64x64.png",revision:"efdccf05fee79b5eb5df014d515487a1"},{url:"pwa-192x192.png",revision:"ef4a6b5d3305ad0d0e19b106e7b1b12e"},{url:"pwa-512x512.png",revision:"4567fa868eebf8f57b14fc41c3766af1"},{url:"maskable-icon-512x512.png",revision:"ae2848a97aec4b48640d8ca1d40d7992"},{url:"manifest.webmanifest",revision:"51d2509773660c7d401739f111c618b7"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
