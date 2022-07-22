const City = (cityData) => {
    const container = document.createElement('div');
    container.classList.add('city-container');

    const nameDiv = document.createElement('div');
    nameDiv.classList.add('city-name');

    const tempDiv = document.createElement('div');
    tempDiv.classList.add('city-current-temp');

    const cityName = cityData.name;
    const country = cityData.sys.country;
    const currentTemp = cityData.main.temp;

    nameDiv.textContent = `${cityName}, ${country}`;
    tempDiv.textContent = currentTemp;

    console.log(cityData);
    container.appendChild(nameDiv);
    container.appendChild(tempDiv);
    return container;
}

export default City;