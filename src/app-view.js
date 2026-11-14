import {handleSubmit} from './app-controller.js';

const mainContent = document.querySelector('main');
const form = document.querySelector('form');
const location = document.querySelector('#location');
const overlay = document.querySelector('.loading-overlay');
let isSubmitting = false;

function setPageLocked(locked) {
  isSubmitting = locked;
  overlay.hidden = !locked;
  mainContent.inert = locked;
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (isSubmitting) {
    return;
  }

  location.value = location.value.trim();
  if (!form.reportValidity()) {
    return;
  }

  setPageLocked(true);
  await handleSubmit(location.value);
  setPageLocked(false);
});

export function displayWeather(data) {
  console.log(data);
}

export function displayError(error) {
  console.error(error);
  alert(error.message);
}
