self.addEventListener("install", (event) => {
  console.log(`👁️ [sw.js] installing...`);
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log(`👁️ [sw.js] activated`);
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  console.log(`👁️ [sw.js] request: ${request.url}`);
  console.log(`👁️ [sw.js] accept: ${request.headers.get("accept")}`);
  event.respondWith(fetch(request));
});
