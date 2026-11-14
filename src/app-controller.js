import {fetchWeather, processWeather} from './app-model.js';
import {displayWeather, displayError} from './app-view.js';

export async function handleSubmit(location) {
  const rawData = await fetchWeather(location);
  if (rawData === undefined) {
    displayError('API Error');
    return;
  }
  const processedData = processWeather(rawData);
  displayWeather(processedData);
}
