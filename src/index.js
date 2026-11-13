import './style.css';
import {fetchWeather, processWeather} from './app-model.js';

console.log('Odin Weather App');

window.fetchWeather = fetchWeather;
window.processWeather = processWeather;
