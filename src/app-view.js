import {handleSubmit} from './app-controller.js';

const form = document.querySelector('form');
const location = document.querySelector('#location');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  location.value = location.value.trim();
  if (!form.reportValidity()) {
    return;
  }

  handleSubmit(location.value);
});

export function displayWeather(data) {
  console.log(data);
}

export function displayError(error) {
  console.error(error);
  alert(error.message);
}
