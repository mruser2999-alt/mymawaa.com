const C='mymaawa-v118';
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(['./','index.html','app.89c4e929.js','usability-v77.css','usability-v77.js','manifest.webmanifest','icon-192.png','icon-512.png'])));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x.startsWith('mymaawa-')&&x!==C).map(x=>caches.delete(x)))));});
self.addEventListener('fetch',e=>{const r=e.request; if(r.method!=='GET') return; const u=new URL(r.url);
 if(/counter\.php$/.test(u.pathname)) return;
 if(/everyayah\.com$|verses\.quran\.com$/.test(u.hostname)){e.respondWith(caches.open('mm-audio').then(c=>c.match(u.href).then(m=>m||fetch(u.href,{mode:'cors',credentials:'omit'}).then(res=>{if(res.ok){c.put(u.href,res.clone()).catch(()=>{});}return res;}).catch(()=>fetch(r)))));return;}
 if(r.mode==='navigate'){e.respondWith(fetch(r).then(res=>{if(res.ok){const cp=res.clone();caches.open(C).then(c=>c.put('index.html',cp));}return res;}).catch(()=>caches.match('index.html')));return;}
 if(u.origin===location.origin||/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname)){e.respondWith(caches.match(r).then(m=>m||fetch(r).then(res=>{if(res.ok){const cp=res.clone();caches.open(C).then(c=>c.put(r,cp));}return res;})));}
});