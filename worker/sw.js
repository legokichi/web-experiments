importScripts("./getGlobals.js");

self.onmessage = function(ev){
    console.log(ev);
    ev.source.postMessage(JSON.stringify(getGlobals.call(this),['*']));
};