import './app-view.js';

console.log('Odin Weather App');

async function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) {
    console.log('Service workers are not supported');
    return;
  }

  try {
    const registration = await navigator.serviceWorker.register(
      './service-worker.js',
    );
    console.log('Service worker is registered');

    if (registration.installing) {
      console.log('Service worker is installing');
    } else if (registration.waiting) {
      console.log('Service worker is installed');
    } else if (registration.active) {
      console.log('Service worker is active');
    }
  } catch (err) {
    console.error(err);
  }
}

if (process.env.NODE_ENV === 'production') {
  registerServiceWorker();
}
