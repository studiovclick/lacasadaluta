/**
 * SERVICE WORKER
 * Arquivo sw.js para suporte PWA (Progressive Web App)
 * Implementa caching para offline e performance
 */

const CACHE_NAME = 'lacasadaluta-v1';
const CACHE_FILES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/robots.txt',
  '/assets/css/variables.css',
  '/assets/css/animations.css',
  '/assets/css/style.css',
  '/assets/css/responsive.css',
  '/assets/js/config.js',
  '/assets/js/main.js',
  '/assets/js/menu.js',
  '/assets/js/animations.js',
  '/assets/js/carrousel.js',
  '/assets/js/whatsapp.js',
  '/assets/img/logo.png',
  'https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;700&family=Roboto:wght@300;400;500;700&display=swap',
  'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css',
  'https://unpkg.com/aos@2.3.1/dist/aos.css'
];

/**
 * EVENTO: Install
 * Cria o cache quando o Service Worker é instalado
 */
self.addEventListener('install', (event) => {
  console.log('🔧 Service Worker instalando...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('💾 Cacheando arquivos...');
        return cache.addAll(CACHE_FILES);
      })
      .then(() => self.skipWaiting())
      .catch(err => console.error('❌ Erro ao cachear:', err))
  );
});

/**
 * EVENTO: Activate
 * Limpa caches antigos
 */
self.addEventListener('activate', (event) => {
  console.log('🚀 Service Worker ativando...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log('🗑️ Removendo cache antigo:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

/**
 * EVENTO: Fetch
 * Intercepts requests - Cache First strategy
 */
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Skip CORS requests, POST, etc
  if (request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(request)
      .then((cached) => {
        // Return cached version if available
        if (cached) {
          return cached;
        }

        // Otherwise fetch from network
        return fetch(request)
          .then((response) => {
            // Cache successful responses
            if (response && response.status === 200) {
              const cloned = response.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(request, cloned);
              });
            }
            return response;
          })
          .catch(() => {
            // Return offline page or cached version
            console.warn('📡 Offline - usando cache:', request.url);
            // Opcionalmente retorna uma página offline
            // return caches.match('/offline.html');
          });
      })
  );
});

/**
 * EVENTO: Message
 * Para comunicação com a página principal
 */
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

console.log('✓ Service Worker carregado');
