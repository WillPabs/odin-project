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
    const fullURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&limit=${limit}&appid=${key}`;
    const response = await fetch(fullURL, { mode: 'cors' });
    const json = await response.json();
    return json;
  } catch (err) {
    console.log('Unable to fetch coordinates');
    return err;
  }
};

const get5DayForecastData = async (lat, lon, count = 10, units = 'imperial') => {
  try {
    const fullURL = await `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&cnt=${count}&units=${units}`;
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

export {
  getCityData,
  getCoordsByName,
  get5DayForecastData,
  getWeatherData,
};
