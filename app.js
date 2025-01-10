// Map weather codes to descriptions
const weatherCodeMap = {
    0: 'Clear sky',
    1: 'Mainly clear',
    2: 'Partly cloudy',
    3: 'Overcast',
    45: 'Fog',
    48: 'Depositing rime fog',
    51: 'Light drizzle',
    53: 'Moderate drizzle',
    55: 'Dense drizzle',
    56: 'Light freezing drizzle',
    57: 'Dense freezing drizzle',
    61: "Light rain",
    63: 'Moderate rain',
    65: 'Heavy rain',
    71: 'Light snow',
    73: 'Moderate snow',
    75: 'Heavy snow',
    77: 'Snow grains',
    80: 'Slight rain showers',
    81: 'Moderate rain showers',
    82: 'Violent rain showers',
    85: 'Slight snow showers',
    86: 'Heavy snow showers',
    95: 'Thunderstorm',
    96: 'Thunderstorm with slight hail',
    99: 'Thunderstorm with heavy hail'
    
};

// Map weather codes to icons
const weatherIconMap = {
    0: 'fa-sun',
    1: 'fa-cloud-sun',
    2: 'fa-cloud-sun',
    3: 'fa-cloud-sun',
    45: 'fa-cloud',
    48: 'fa-cloud',
    51: 'fa-cloud-rain',
    53: 'fa-cloud-rain',
    55: 'fa-cloud-rain',
    56: 'fa-cloud-rain',
    57: 'fa-cloud-rain',
    61: "fa-cloud-rain",
    63: 'fa-cloud-rain',
    65: 'fa-cloud-rain',
    71: 'fa-snowflake',
    73: 'fa-snowflake',
    75: 'fa-snowflake',
    77: 'fa-snowflake',
    80: 'fa-cloud-rain',
    81: 'fa-cloud-rain',
    82: 'fa-cloud-rain',
    85: 'fa-snowflake',
    86: 'fa-snowflake',
    95: 'fa-bolt-lightning',
    96: 'fa-cloud-lightning',
    99: 'fa-cloud-lightning'
    
};

// Searoutes API to get coordinates
const apiKeySR = 'kJAxcR9XEu4VRZobiLwBd6mUMNk34Aqy7fEBalNZ';

const iataCode = 'LHR';

// Fetch coordinates from Searoutes API
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'x-api-key': 'kJAxcR9XEu4VRZobiLwBd6mUMNk34Aqy7fEBalNZ'
    }
  };
  
  fetch(`https://api.searoutes.com/geocoding/v2/all?iataCode=${iataCode}`, options)

    .then(response => response.json())
    .then(data => {
        console.log(data);
        
        const coordinates = data.features[0].geometry.coordinates;
        const longitude = coordinates[0];
        const latitude = coordinates[1];

            // Now fetch the weather from Open Meteo using the coordinates
            fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
                .then(response => response.json())
                .then(weatherData => {
                    // Extract the data
                    const temperature = weatherData.current_weather.temperature; // Temperature in Celsius
                    const weatherCode = weatherData.current_weather.weathercode; // Weather condition code
                    const weatherDescription = weatherCodeMap[weatherCode] // Map weather code to description
                    const weatherIcon = weatherIconMap[weatherCode] // Map weather code to icon

                    // Update the HTML with the fetched data
                    document.getElementById('location').textContent = `${iataCode}`;
                    document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
                    document.getElementById('weather-description').textContent = `Weather: ${weatherDescription}`;
                    
                    const iconElement = document.getElementById('weather-icon');
                    iconElement.classList.add('fas', weatherIcon);
                })
                .catch(error => console.error('Error fetching weather data:', error));
    })
    .catch(error => console.error('Error fetching coordinates:', error));