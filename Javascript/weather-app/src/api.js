import config from './config';

const key = config.API_KEY;

const getCityData = async (lat, lon, units = 'imperial') => {
  try {
    const fullURL = await `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=${units}`;
    const response = await fetch(fullURL, { mode: 'cors' });
    const json = await response.json();
    return json;
  } catch (err) {
    console.log('Unable to fetch cityData');
    return err;
  }
};

const getCoordsByName = async (cityName, stateCode = 0, countryCode = 0, limit = 0) => {
  try {
    const fullURL = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&limit=${limit}&appid=${key}`;
    const response = await fetch(fullURL, { mode: 'cors' });
    const json = await response.json();
    return json;
  } catch (err) {
    console.log('Unable to fetch coordinates');
    return err;
  }
};

const get5DayForecastData = async (lat, lon, units = 'imperial') => {
  try {
    const fullURL = await `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=${units}`;
    const response = await fetch(fullURL, { mode: 'cors' });
    const json = await response.json();
    return json;
  } catch (err) {
    console.log('Unable to fetch 5 Day forecast data.');
    return err;
  }
};

const getWeatherData = async (cityName) => {
  const coords = await getCoordsByName(cityName);
  const lat = await coords[0].lat;
  const lon = await coords[0].lon;
  const weatherData = await getCityData(lat, lon);
  return weatherData;
};

const getWeatherIcon = async (text) => {
  try {
    const url = `http://openweathermap.org/img/wn/${text}.png`;
    const icon = await fetch(url, { mode: 'cors' });
    return icon.url;
  } catch (err) {
    console.log('Unable to fetch weather icon');
    return err;
  }
};

export {
  getCityData,
  getCoordsByName,
  get5DayForecastData,
  getWeatherData,
  getWeatherIcon,
};
