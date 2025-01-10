// Hard code coordinates for LHR (London Heathrow airport)
const latitude = 51.470020;
const longitude = -0.454295;

// URL for weather data
const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

// Fetch data from Open Meteo API
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Extract the data
        const temperature = data.current_weather.temperature; // Temperature in Celsius
        const weatherCode = data.current_weather.weathercode; // Weather condition code

        // Update the HTML with the fetched data
        document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
        document.getElementById('weather-description').textContent = `Weather: ${weatherCode}`
    })
    .catch(error => console.error('Error:', error));  // Log any errors that occur