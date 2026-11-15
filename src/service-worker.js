import {registerRoute} from 'workbox-routing';
import {CacheFirst} from 'workbox-strategies';
import {ExpirationPlugin} from 'workbox-expiration';
import {CacheableResponsePlugin} from 'workbox-cacheable-response';
import {precacheAndRoute} from 'workbox-precaching';
import {API_ORIGIN, API_PATH} from './api-config.js';

const CACHE_NAME = 'visual-crossing';

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  ({url, request}) =>
    url.origin === API_ORIGIN &&
    url.pathname.startsWith(API_PATH) &&
    request.method === 'GET',
  new CacheFirst({
    cacheName: CACHE_NAME,
    plugins: [
      new CacheableResponsePlugin({statuses: [200]}),
      new ExpirationPlugin({maxEntries: 100, maxAgeSeconds: 60 * 60}),
    ],
  }),
);
