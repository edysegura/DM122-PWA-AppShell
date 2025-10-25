self.addEventListener("install", (event) => {
  console.log(`👁️ [sw.js] installing...`);
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log(`👁️ [sw.js] activated`);
  self.clients.claim();
});
