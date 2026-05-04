const CACHE_NAME = "extensive-games-quiz-v2";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./questions.js",
  "./app.js",
  "./manifest.webmanifest",
  "./icon.svg",
  "./assets/figures/ps31-figure-1.png",
  "./assets/figures/ps31-figure-2.png",
  "./assets/figures/ps31-figure-3.png",
  "./assets/figures/ps31-figure-4.png",
  "./assets/figures/ps32-game-1.png",
  "./assets/figures/ps32-game-2.png",
  "./assets/figures/ps32-game-3.png",
  "./assets/figures/ps32-game-4b.png",
  "./assets/figures/ps34-figure-5.png",
  "./assets/figures/ps35-figure-6.png",
  "./assets/figures/ps35-figure-6-2.png",
  "./assets/figures/ps36-figure-7.png",
  "./assets/figures/ps37-figures-10-v1-v2.png",
  "./assets/figures/ps38-chip-game.png",
  "./assets/figures/ps310-figure-11.png",
  "./assets/figures/ps311-car-game.png",
  "./assets/figures/ps312-apple-game.png",
  "./assets/figures/ps313-figure-8.png",
  "./assets/figures/ps313-figure-9.png",
  "./assets/figures/ps313-figure-10.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
