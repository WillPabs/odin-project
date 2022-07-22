import config from './config';
import City from './components/City';

const key = config.API_KEY;

// OPTIONAL PARAMETERS
const mode = 'JSON';
const units = 'imperial';

// TODO
// Switch to using geocoding api instead of current weather

// REQUEST BY CITY NAME
const outputDiv = document.querySelector('#search-output');
const getCityData = async (cityName) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${units}&appid=${key}`;
    console.log('Searching');
    const response = await fetch(url, { mode: 'cors' });
    const json = await response.json();

    const cityComponent = City(json);
    outputDiv.appendChild(cityComponent);
  } catch (err) {
    outputDiv.textContent = `City not found. Enter another city.`;
  }
};

const searchButton = document.querySelector('#search-button');
searchButton.addEventListener('click', () => {
  if (outputDiv.textContent.length > 0) outputDiv.textContent = '';
  const cityName = document.querySelector('#search').value;
  getCityData(cityName);
});
