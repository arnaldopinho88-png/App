self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("vistoria-stamp-v2").then(cache => cache.addAll([
      "./",
      "./index.html",
      "./manifest.webmanifest",
      "./sw.js",
    ]))
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(caches.match(e.request).then(resp => resp || fetch(e.request)));
});
