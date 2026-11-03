// 작은나귀커피 바리스타 심사 타이머
// 온라인 전용 설정: 오프라인 캐시는 사용하지 않습니다.
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});
