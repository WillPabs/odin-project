import { getWeatherData, get5DayForecastData } from './api';
import Content from './components/Content';
import CurrentWeather from './components/CurrentWeather';
import DailyForecast from './components/DailyForecast';
import Header from './components/Header';
import './style.css';

const header = Header();
document.body.appendChild(header);

const main = document.createElement('main');
document.body.appendChild(main);

const search = document.querySelector('#search');
search.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    try {
      const name = search.value;
      const data = getWeatherData(name);
      data.then((weatherData) => {
        get5DayForecastData(weatherData.coord.lat, weatherData.coord.lon).then((wData) => {
          const content = document.createElement('div');
          content.classList.add('content');
          const current = CurrentWeather(wData);
          const daily = DailyForecast(wData);
          content.appendChild(current);
          content.appendChild(daily);
          Content(content);
        });
      });
    } catch (err) {
      document.body.textContent = 'City not found. Enter another city.';
      console.log(err);
    }
  }
});
