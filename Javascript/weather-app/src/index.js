import { getWeatherData, get5DayForecastData } from './api';
import City from './components/City';

const outputDiv = document.querySelector('#search-output');
const searchButton = document.querySelector('#search-button');
searchButton.addEventListener('click', () => {
  if (outputDiv.textContent.length > 0) outputDiv.textContent = '';
  try {
    const name = document.querySelector('#search').value;
    const data = getWeatherData(name);
    data.then((weatherData) => {
      console.log(weatherData);
      get5DayForecastData(weatherData.coord.lat, weatherData.coord.lon).then((wData) => {
        console.log(wData);
      });
      outputDiv.appendChild(City(weatherData));
    });
  } catch (err) {
    outputDiv.textContent = 'City not found. Enter another city.';
    console.log(err);
  }
});
