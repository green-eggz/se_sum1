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

// Restructure into functions to allow for easier testing
function validateIataCode(iataCode) {
    const iataCodePattern = /^[A-Z]{3}$/;
    return iataCodePattern.test(iataCode.toUpperCase());
}

// User can now type in airport code
// Wrapped in a function so it can be read by HTML file button
function getWeather() {
    const iataCode = document.getElementById('airport-code').value.toUpperCase();

    if (!validateIataCode(iataCode)) {
        // Display an error message if the input is not a valid airport code
        document.getElementById('error-message').textContent = `Please enter a valid 3-letter IATA airport code.`;
        document.getElementById('error-message').style.display = 'block';
        return; 
    }

    // Fetch coordinates from LocationIQ API
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
        }
    };

    fetch(`https://us1.locationiq.com/v1/search?q=${iataCode}&key=pk.7888b0670eb6596351a70be6dc050408&format=json`, options)
    .then(response => response.json())
    .then(data => {
        const airport = data.find(place => place.class === 'aeroway' && place.type === 'aerodrome'); //Limit search to airports only
        if (airport) {
            const latitude = airport.lat;
            const longitude = airport.lon;
        
            // Now fetch the weather from Open Meteo using the coordinates
            fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
                .then(response => response.json())
                .then(weatherData => {
                    // Extract the data
                    const temperature = weatherData.current_weather.temperature; // Temperature in Celsius
                    const weatherCode = weatherData.current_weather.weathercode; // Weather condition code
                    const weatherDescription = weatherCodeMap[weatherCode] // Map weather code to description
                    const weatherIcon = weatherIconMap[weatherCode] // Map weather code to icon
                    

                    // Show the boxesn now
                    document.getElementById('weather-box').classList.add('show');
                    document.getElementById('search-box').classList.add('show');

                    // Update the HTML with the fetched data
                    document.getElementById('location').textContent = `${iataCode}`;
                    document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
                    document.getElementById('weather-description').textContent = `Weather: ${weatherDescription}`;
                    document.getElementById('weather-icon').className = ''; 
                    document.getElementById('weather-icon').classList.add('fas', weatherIcon); // Changed formatting of this to match the other elements
                })
                .catch(error => console.error('Error fetching weather data:', error));
                document.getElementById('error-message').style.display = 'none';
        
            } else {
                console.log('No airport found for the provided code.');
                 // Show the error message on the screen
                 document.getElementById('error-message').textContent = `No airport found for the provided code: '${iataCode}'.`;
                 document.getElementById('error-message').style.display = 'block';
              }
    })
    .catch(error => console.error('Error fetching coordinates:', error));
}

module.exports = {validateIataCode};