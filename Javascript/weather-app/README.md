## Weather App

This app will allow the user to search for a specific location's weather data. 

The app will fetch data from openweathermap's geocoding api, process the request into JSON data, and return an object. It will then display the data to the browser.

Search 
- when a user searches for a city, it will send a request to openweathermap geocoding api, to look for the most closely related cities to the current input value. The top 5 will be display as a dropdown below the input element. 
- When a city is selected or matched. The coordinates will be sent to OWM's current weather api to request the weather of that specific city.

Homepage
- homepage will display the current weather for top 5 cities 

Components
- Current Weather
    - display city name, country and current time
    - current temp
    - what temp feels like
    - current weather description
    - temp at day and temp at night
    - image of weather description
- Daily Forecast
    - fetches data from forecast5 api
    - displays a list of 5 days with respective weather info
        - date
        - high temp
        - low temp
        - weather description icon
        - chance of rain
