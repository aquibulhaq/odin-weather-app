import {handleSubmit, handleUnitChange} from './app-controller.js';

const mainContent = document.querySelector('main');
const form = document.querySelector('form');
const location = document.querySelector('#location');

const radioGroup = document.querySelector('.radio-group');

const table = document.querySelector('table');
const cells = {
  conditions: document.getElementById('conditions'),
  temp: document.getElementById('temp'),
  tempUnit: document.getElementById('temp-unit'),
  feelslike: document.getElementById('feels-like'),
  feelslikeUnit: document.getElementById('feels-like-unit'),
  humidity: document.getElementById('humidity'),
  windspeed: document.getElementById('wind-speed'),
  precipprob: document.getElementById('precip-prob'),
};

const overlay = document.querySelector('.loading-overlay');
let isSubmitting = false;

radioGroup.addEventListener('change', (event) => {
  console.log(event.target.value);
  handleUnitChange(event.target.value);
});

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

export function displayTemperatures(data, unit) {
  cells.temp.textContent = data.temp.toFixed(1);
  cells.tempUnit.textContent = `°${unit}`;

  cells.feelslike.textContent = data.feelslike.toFixed(1);
  cells.feelslikeUnit.textContent = `°${unit}`;
}

export function displayWeather(data, unit) {
  console.log(data);

  cells.conditions.textContent = data.conditions;

  displayTemperatures(data, unit);

  cells.humidity.textContent = data.humidity;
  cells.windspeed.textContent = data.windspeed;
  cells.precipprob.textContent = data.precipprob;

  table.hidden = false;
}

export function displayError(error) {
  console.error(error);
  alert(error.message);
}
