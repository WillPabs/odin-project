import { getWeatherData, get5DayForecastData } from './api';
import CurrentWeather from './components/CurrentWeather';

const outputDiv = document.querySelector('#search-output');
const searchButton = document.querySelector('#search-button');
searchButton.addEventListener('click', () => {
  if (outputDiv.textContent.length > 0) outputDiv.textContent = '';
  try {
    const name = document.querySelector('#search').value;
    const data = getWeatherData(name);
    data.then((weatherData) => {
      get5DayForecastData(weatherData.coord.lat, weatherData.coord.lon).then((wData) => {
        outputDiv.appendChild(CurrentWeather(wData));
      });
    });
  } catch (err) {
    outputDiv.textContent = 'City not found. Enter another city.';
    console.log(err);
  }
});
