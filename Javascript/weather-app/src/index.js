import config from './config';

const key = config.API_KEY;

// REQUEST BY CITY NAME
const getCityData = async (cityName) => {
  const outputDiv = document.querySelector('#search-output');
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`;
    console.log('Searching');
    const response = await fetch(url, { mode: 'cors' });
    const json = await response.json();
    outputDiv.textContent = JSON.stringify(json);
  } catch (err) {
    outputDiv.textContent = err;
  }
};

const searchButton = document.querySelector('#search-button');
searchButton.addEventListener('click', () => {
  const cityName = document.querySelector('#search').value;
  getCityData(cityName);
});
