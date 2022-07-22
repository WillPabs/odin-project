import { getWeatherData } from './api';

const outputDiv = document.querySelector('#search-output');
const searchButton = document.querySelector('#search-button');
searchButton.addEventListener('click', () => {
  if (outputDiv.textContent.length > 0) outputDiv.textContent = '';
  try {
    const name = document.querySelector('#search').value;
    const data = getWeatherData(name);
    data.then((weatherData) => {
      outputDiv.textContent = JSON.stringify(weatherData);
    });
  } catch (err) {
    outputDiv.textContent = 'City not found. Enter another city.';
    console.log(err);
  }
});
