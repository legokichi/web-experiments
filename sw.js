const CACHE_NAME = "v0.0.6";
const urlsToCache = [
  "/mathtodon.html",
  '/xypic.js',
  "https://cdnjs.cloudflare.com/ajax/libs/zepto/1.2.0/zepto.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.5.0-alpha1/html2canvas.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-AMS_HTML",
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/config/TeX-AMS_HTML.js?V=2.7.0",
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/jax/output/HTML-CSS/jax.js?V=2.7.0",
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/jax/output/HTML-CSS/fonts/TeX/fontdata.js?V=2.7.0",
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/fonts/HTML-CSS/TeX/woff/MathJax_Main-Regular.woff?V=2.7.0",
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/fonts/HTML-CSS/TeX/woff/MathJax_Math-Italic.woff?V=2.7.0",
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/fonts/HTML-CSS/TeX/woff/MathJax_Size1-Regular.woff?V=2.7.0",
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/fonts/HTML-CSS/TeX/woff/MathJax_AMS-Regular.woff?V=2.7.0",
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/jax/output/HTML-CSS/fonts/TeX/AMS/Regular/Main.js?V=2.7.0",
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/jax/output/HTML-CSS/fonts/TeX/AMS/Regular/BBBold.js?V=2.7.0",
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/jax/output/HTML-CSS/fonts/TeX/Fraktur/Regular/Main.js?V=2.7.0",
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/jax/output/HTML-CSS/fonts/TeX/Fraktur/Regular/BasicLatin.js?V=2.7.0",
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/fonts/HTML-CSS/TeX/woff/MathJax_Fraktur-Regular.woff?V=2.7.0",
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/jax/output/HTML-CSS/fonts/TeX/Script/Regular/Main.js?V=2.7.0",
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/jax/output/HTML-CSS/fonts/TeX/Script/Regular/BasicLatin.js?V=2.7.0",
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/fonts/HTML-CSS/TeX/woff/MathJax_Script-Regular.woff?V=2.7.0",
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/fonts/HTML-CSS/TeX/woff/MathJax_Main-Bold.woff?V=2.7.0",
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/jax/output/HTML-CSS/fonts/TeX/Math/BoldItalic/Main.js?V=2.7.0",
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/fonts/HTML-CSS/TeX/woff/MathJax_Math-BoldItalic.woff?V=2.7.0",
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/jax/output/HTML-CSS/fonts/TeX/SansSerif/Regular/Main.js?V=2.7.0",
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/jax/output/HTML-CSS/fonts/TeX/SansSerif/Regular/BasicLatin.js?V=2.7.0",
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/fonts/HTML-CSS/TeX/woff/MathJax_SansSerif-Regular.woff?V=2.7.0",
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/jax/output/HTML-CSS/fonts/TeX/Typewriter/Regular/Main.js?V=2.7.0",
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/jax/output/HTML-CSS/fonts/TeX/Typewriter/Regular/BasicLatin.js?V=2.7.0",
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/fonts/HTML-CSS/TeX/woff/MathJax_Typewriter-Regular.woff?V=2.7.0",
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/jax/output/HTML-CSS/fonts/TeX/AMS/Regular/MathOperators.js?V=2.7.0",
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/jax/output/HTML-CSS/fonts/TeX/Main/Regular/GeometricShapes.js?V=2.7.0",
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/jax/output/HTML-CSS/fonts/TeX/AMS/Regular/GeometricShapes.js?V=2.7.0",
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/jax/output/HTML-CSS/fonts/TeX/AMS/Regular/Arrows.js?V=2.7.0",
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/jax/output/HTML-CSS/fonts/TeX/Main/Regular/CombDiacritMarks.js?V=2.7.0",
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/fonts/HTML-CSS/TeX/woff/MathJax_Size2-Regular.woff?V=2.7.0",
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/jax/output/HTML-CSS/autoload/mtable.js?V=2.7.0",
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/fonts/HTML-CSS/TeX/woff/MathJax_Size4-Regular.woff?V=2.7.0",
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/jax/output/HTML-CSS/autoload/multiline.js?V=2.7.0",
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/fonts/HTML-CSS/TeX/woff/MathJax_Size3-Regular.woff?V=2.7.0",
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/jax/output/HTML-CSS/fonts/TeX/AMS/Regular/GeneralPunctuation.js?V=2.7.0",
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/jax/output/HTML-CSS/fonts/TeX/AMS/Regular/MiscTechnical.js?V=2.7.0",
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/extensions/TeX/boldsymbol.js?V=2.7.0",
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/jax/element/mml/optable/BasicLatin.js?V=2.7.0",
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/jax/element/mml/optable/MathOperators.js?V=2.7.0",
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/fonts/HTML-CSS/TeX/woff/MathJax_Caligraphic-Regular.woff?V=2.7.0",
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/fonts/HTML-CSS/TeX/woff/MathJax_Main-Italic.woff?V=2.7.0",
  "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/jax/element/mml/optable/Arrows.js?V=2.7.0",
];


self.addEventListener('install',(ev)=>{
  console.info("install");
  ev.waitUntil(self.skipWaiting());
  /*ev.waitUntil(
    caches.open(CACHE_NAME).then((cache)=>
      cache.addAll(urlsToCache)
    )
  );*/
});

self.addEventListener('fetch', (ev)=>{
  const evReq = ev.request;
  ev.respondWith(
    caches.match(evReq).then((res)=>{
      if(res instanceof Response){
        //console.log("use cache", evReq.url);
        return res;
      }
      const reqCache = evReq.clone();
      return fetch(evReq).then((res)=>{
        if(!res || res.status !== 200 || res.type !== 'basic'){
          console.log("cannot cache", evReq.url);
          return res;
        }
        const resCache = res.clone();
        caches.open(CACHE_NAME).then((cache)=>{
          // async task
          console.log("cached", reqCache.url);
          cache.put(reqCache, resCache);
        });
        return res;
      });
    })
  );
});

self.addEventListener('activate', (ev)=>{
  console.info("activate");
  ev.waitUntil(
    caches.keys().then((keys)=>
      Promise.all(keys.map((key)=>
        caches.delete(key) ) ) )
    .then(()=> self.clients.claim())
  );
});
/*
caches.keys().then((keys)=>{
  console.log("CacheStorage", keys);
});

caches.open(CACHE_NAME).then((cache)=>{
  cache.keys().then((keys)=>{
    console.log("cache", keys);
  });
});
*/
console.log(self);
