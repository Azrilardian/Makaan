/* eslint-disable no-restricted-globals */
import 'regenerator-runtime';
import { cachingAppShell, deleteOldCache, revalidateCache } from './utils/cache-helper';

const { assets } = global.serviceWorkerOption;

self.addEventListener('install', (event) => event.waitUntil(cachingAppShell([...assets, './'])));

self.addEventListener('activate', (event) => event.waitUntil(deleteOldCache()));

self.addEventListener('fetch', (event) => {
  if (!(event.request.url.indexOf('http') === 0)) return;
  event.respondWith(revalidateCache(event.request));
});
