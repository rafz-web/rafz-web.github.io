self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("fakta-v4").then(cache => {
      return cache.addAll([
        "index.html",
        "style.css",
        "app.js"
      ]);
    })
  );
});