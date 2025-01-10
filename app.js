// Hard code coordinates for LHR (London Heathrow airport)
const latitude = 51.470020;
const longitude = -0.454295;

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

// URL for weather data
const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

// Fetch data from Open Meteo API
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Extract the data
        const temperature = data.current_weather.temperature; // Temperature in Celsius
        const weatherCode = data.current_weather.weathercode; // Weather condition code
        const weatherDescription = weatherCodeMap[weatherCode] // Map weather code to description

        // Update the HTML with the fetched data
        document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
        document.getElementById('weather-description').textContent = `Weather: ${weatherDescription}`;
        document.getElementById('coordinates').textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
    })
    .catch(error => console.error('Error:', error));  // Log any errors that occur




