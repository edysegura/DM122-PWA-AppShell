import { mockProfileAPI } from "./src/js/mock-api.js";

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
  // console.log(`👁️ [sw.js] accept: ${request.headers.get("accept")}`);
  event.respondWith(proxy(request));
});

async function proxy(request) {
  console.log(`👁️ [sw.js] proxying...`);
  const url = new URL(request.url);
  if (url.pathname === "/id/237/200/300") {
    return replaceDogByCat();
  }
  if (url.pathname.startsWith("/api/profile")) {
    return mockProfileAPI();
  }
  return fetch(request);
}

async function replaceDogByCat() {
  console.log(`👁️ [sw.js] replacing dog for a cat`);
  return fetch(
    "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg"
  );
}
