import CONFIG from '../globals/config';

const openCache = async () => caches.open(CONFIG.CACHE_NAME);

const addCache = async (request) => {
  const cache = await openCache();
  cache.add(request);
};

const fetchRequest = async (request) => {
  const response = await fetch(request);
  if (!response || response.status !== 200) return response;

  await addCache(request);
  return response;
};

const cachingAppShell = async (requests) => {
  const cache = await openCache();
  cache.addAll(requests);
};

const deleteOldCache = async () => {
  const cacheNames = await caches.keys();
  cacheNames
    .filter((name) => name !== CONFIG.CACHE_NAME)
    .map((filteredName) => caches.delete(filteredName));
};

const revalidateCache = async (request) => {
  const response = await caches.match(request);
  return response || fetchRequest(request);
};

export { cachingAppShell, deleteOldCache, revalidateCache };
