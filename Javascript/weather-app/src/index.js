import config from './config';

const key = config.API_KEY;

const searchValue = document.querySelector('#search').value;

// REQUEST BY CITY NAME
const cityName = searchValue;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`;

const getCityData = async () => {
  console.log('Searching');
  const response = await fetch(url, { mode: 'cors' });
  const json = await response.json();
  const outputDiv = document.querySelector('#search-output');
  outputDiv.textContent = json.data;
};

const searchButton = document.querySelector('#search-button');
searchButton.addEventListener('submit', () => {
  getCityData();
});
