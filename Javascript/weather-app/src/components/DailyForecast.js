import { format, isToday } from 'date-fns';
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

  const data = getDailyData(list);

  for (let i = 0; i < 5; i += 1) {
    const day = document.createElement('div');
    day.classList.add('forecast-item');

    const date = document.createElement('div');
    date.classList.add('forecast-date');
    date.textContent = formatDate(data.dates[i]);

    const highTemp = document.createElement('div');
    highTemp.classList.add('forecast-high-temp');
    highTemp.textContent = `${data.highTemps[i]}°`;

    const lowTemp = document.createElement('div');
    lowTemp.classList.add('forecast-low-temp');
    lowTemp.textContent = `${data.lowTemps[i]}°`;

    const icon = document.createElement('img');
    icon.classList.add('forecast-icon');
    getWeatherIcon(data.icons[i]).then((response) => {
      icon.src = response;
    });

    const chanceRain = document.createElement('div');
    chanceRain.classList.add('forecast-chance-rain');
    chanceRain.textContent = `${data.rainChances[i]}%`;

    day.appendChild(date);
    day.appendChild(highTemp);
    day.appendChild(lowTemp);
    day.appendChild(icon);
    day.appendChild(chanceRain);
    container.appendChild(day);
  }
  return container;
};

const formatDate = (date) => {
  const newDate = new Date(date);
  return isToday(newDate) ? 'Today' : format(newDate, 'E dd');
};

const getDailyData = (list) => {
  const dates = [];
  const highTemps = [];
  const lowTemps = [];
  const icons = [];
  const rainChances = [];

  let max = list[0].main.temp_max;
  let min = list[0].main.temp_min;
  let currentDate = list[0].dt_txt.split(' ')[0];
  list.forEach((item) => {
    if (item.dt_txt.split(' ')[0] === currentDate) {
      if (max < item.main.temp_max) max = item.main.temp_max;
      if (min > item.main.temp_min) min = item.main.temp_min;
    } else {
      dates.push(item.dt_txt.split(' ')[0]);
      highTemps.push(max.toFixed(0));
      lowTemps.push(min.toFixed(0));
      icons.push(item.weather[0].icon);
      rainChances.push(item.pop);
      currentDate = item.dt_txt.split(' ')[0];
      max = item.main.temp_max;
      min = item.main.temp_min;
    }
  });
  return {
    dates, highTemps, lowTemps, icons, rainChances,
  };
};

export default DailyForecast;
