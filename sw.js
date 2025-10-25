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
  if (url.pathname === "/api/generated/json") {
    return generatedJson();
  }
  return fetch(request);
}

async function replaceDogByCat() {
  console.log(`👁️ [sw.js] replacing dog for a cat`);
  return fetch(
    "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg"
  );
}

async function generatedJson() {
  console.log(`👁️ [sw.js] generating a json from service worker`);

  const names = [
    "Alice Johnson",
    "Bob Smith",
    "Carlos Rivera",
    "Dana Lee",
    "Eve Thompson",
    "Frank Martin",
    "Grace Kim",
    "Hugo Alvarez",
    "Ivy Chen",
    "Jack O'Neil",
  ];

  const name = names[Math.floor(Math.random() * names.length)];
  const email =
    name
      .toLowerCase()
      .replace(/[^a-z\s]/g, "")
      .trim()
      .replace(/\s+/g, ".") + "@example.com";

  // Use pravatar for a simple profile picture placeholder
  const avatarId = Math.floor(Math.random() * 70) + 1; // pravatar supports many ids
  const profilePicture = `https://i.pravatar.cc/150?img=${avatarId}`;

  const body = {
    name,
    email,
    profilePicture,
  };

  return new Response(JSON.stringify(body), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
