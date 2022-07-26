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
  currentTemp.textContent = today.main.temp;

  const feelsLike = document.createElement('div');
  feelsLike.classList.add('feels-like');
  feelsLike.textContent = today.main.feels_like;

  const weatherDescription = document.createElement('div');
  weatherDescription.classList.add('current-weather-description');
  weatherDescription.textContent = today.weather[0].description;

  const day = document.createElement('div');
  day.classList.add('temp-high');
  day.textContent = today.main.temp_max;

  const night = document.createElement('div');
  night.classList.add('temp-low');
  night.textContent = today.main.temp_min;

  const weatherDescriptionIcon = document.createElement('img');
  weatherDescriptionIcon.classList.add('weather-description-icon');
  weatherDescriptionIcon.src = '#';

  header.appendChild(locationAndTime);

  content.appendChild(currentTemp);
  content.appendChild(feelsLike);
  content.appendChild(weatherDescription);
  content.appendChild(day);
  content.appendChild(night);
  content.appendChild(weatherDescriptionIcon);

  container.appendChild(header);
  container.appendChild(content);

  return container;
};

export default CurrentWeather;
