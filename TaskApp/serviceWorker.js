const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "/Tasker.html",
  "/style.css",
  "/app.js"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})