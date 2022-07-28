import { getWeatherIcon } from '../api';
import { capitalizeFirstLetterOfString } from '../utils';

const CurrentWeather = (cityData) => {
  const container = document.createElement('div');
  container.classList.add('current-weather-container');

  const header = document.createElement('div');
  header.classList.add('current-weather-header');

  const locationAndTime = document.createElement('div');
  locationAndTime.textContent = `${cityData.city.name}, ${cityData.city.country}`;

  const content = document.createElement('div');
  content.classList.add('current-weather-content');

  const today = cityData.list[0];

  const currentTemp = document.createElement('div');
  currentTemp.classList.add('current-temp');
  currentTemp.textContent = `${Math.floor(today.main.temp)}°`;

  const feelsLike = document.createElement('div');
  feelsLike.classList.add('feels-like');
  feelsLike.textContent = `Feels like ${Math.floor(today.main.feels_like)}°`;

  const weatherDescription = document.createElement('div');
  weatherDescription.classList.add('current-weather-description');
  weatherDescription.textContent = capitalizeFirstLetterOfString(today.weather[0].description);

  const dayAndNight = document.createElement('div');
  dayAndNight.classList.add('day-night-temp');
  const dayTemp = `${Math.floor(today.main.temp_max)}°`;
  const nightTemp = `${Math.floor(today.main.temp_min)}°`;
  dayAndNight.textContent = `Day ${dayTemp} - Night ${nightTemp}`;

  const weatherDescriptionIcon = document.createElement('img');
  weatherDescriptionIcon.classList.add('weather-description-icon');
  getWeatherIcon(today.weather[0].icon).then(((data) => {
    weatherDescriptionIcon.src = data;
  }));

  const left = document.createElement('div');
  left.classList.add('current-weather-left');
  const right = document.createElement('div');
  right.classList.add('current-weather-right');

  header.appendChild(locationAndTime);

  left.appendChild(currentTemp);
  left.appendChild(feelsLike);
  left.appendChild(weatherDescription);
  left.appendChild(dayAndNight);

  right.appendChild(weatherDescriptionIcon);

  content.appendChild(left);
  content.appendChild(right);

  container.appendChild(header);
  container.appendChild(content);

  return container;
};

export default CurrentWeather;
