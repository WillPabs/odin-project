import { getWeatherIcon } from '../api';

const DailyForecast = (data) => {
  const container = document.createElement('div');
  container.classList.add('daily-forecast-container');

  const header = document.createElement('div');
  header.classList.add('daily-forecast-header');
  header.textContent = 'Daily Forecast';

  const forecastList = createForecastList(data.list);

  container.appendChild(header);
  container.appendChild(forecastList);
  return container;
};

const createForecastList = (list) => {
  const container = document.createElement('div');
  container.classList.add('forecast-list');

  list.forEach((item) => {
    const day = document.createElement('div');
    day.classList.add('forecast-item');

    const date = document.createElement('div');
    date.classList.add('forecast-date');
    date.textContent = item.dt_txt;

    const highTemp = document.createElement('div');
    highTemp.classList.add('forecast-high-temp');
    highTemp.textContent = item.main.temp_max;

    const lowTemp = document.createElement('div');
    lowTemp.classList.add('forecast-low-temp');
    lowTemp.textContent = item.main.temp_min;

    const icon = document.createElement('img');
    icon.classList.add('forecast-icon');
    getWeatherIcon(item.weather[0].icon).then((data) => {
      console.log(data);
      icon.src = data;
    });

    const chanceRain = document.createElement('div');
    chanceRain.classList.add('forecast-chance-rain');
    chanceRain.textContent = `${item.pop}%`;

    day.appendChild(date);
    day.appendChild(highTemp);
    day.appendChild(lowTemp);
    day.appendChild(icon);
    day.appendChild(chanceRain);
    container.appendChild(day);
  });
  return container;
};

export default DailyForecast;
