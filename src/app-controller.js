import {fetchWeather, processWeather, convertTemperature} from './app-model.js';
import {displayWeather, displayError} from './app-view.js';

let weatherData;
let currentUnit = 'C';

function convertWeather() {
  const {temp, feelslike} = weatherData;
  return {
    ...weatherData,
    temp: convertTemperature(temp, currentUnit),
    feelslike: convertTemperature(feelslike, currentUnit),
  };
}

export async function handleSubmit(location) {
  let rawData;
  try {
    rawData = await fetchWeather(location);
  } catch (err) {
    displayError(err);
    return;
  }

  weatherData = processWeather(rawData);
  displayWeather(convertWeather(), currentUnit);
}

export function handleUnitChange(unit) {
  currentUnit = unit;
  if (weatherData !== undefined) {
    displayWeather(convertWeather(), currentUnit);
  }
}
