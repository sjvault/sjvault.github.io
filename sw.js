// ตัวช่วยติดตั้งแอป (Android) — ไม่เก็บข้อมูลใด ๆ ในเครื่อง แค่ส่งต่อคำขอตามปกติ
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
