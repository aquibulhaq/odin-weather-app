import {fetchWeather, processWeather} from './app-model.js';
import {displayWeather, displayError} from './app-view.js';

export async function handleSubmit(location) {
  let rawData;
  try {
    rawData = await fetchWeather(location);
  } catch (err) {
    displayError(err);
    return;
  }

  const processedData = processWeather(rawData);
  displayWeather(processedData);
}
