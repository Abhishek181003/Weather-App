
const APIKey = "7a51ce59284f8360730383dbb5aa9311";
const weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather';


// Function to fetch weather data for a given city
function fetchWeather(city) {
    fetch(`${weatherApiUrl}?q=${city}&appid=${APIKey}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            updateWeatherUI(data);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            alert("City not found or an error occurred. Please try again.");
        });
}

// Function to update the UI with weather data
function updateWeatherUI(data) {
    const temp = data.main.temp;
    const weather = data.weather[0].description;
    const location = data.name + ', ' + data.sys.country;
    const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();
    // const uvIndex = data.current.uvi; // Assuming the API provides UV index
    const windStatus = `${data.wind.speed}`;
    const humidity = `${data.main.humidity}`;
    const visibility = `${(data.visibility / 1000).toFixed(1)}`; // Convert visibility to km
    console.log(data)

    document.querySelector('.temp').innerText = `${temp}°C`;
    document.querySelector('.weather').innerText = weather.charAt(0).toUpperCase() + weather.slice(1);
    document.getElementById('location-text').innerText = location;
    document.getElementById('main-weather-logo').src = getWeatherIcon(weather);
    document.getElementById('sunrise-timecard').innerText = sunrise;
    document.getElementById('sunset-timecard').innerText = sunset;
    // document.getElementById('uv-index').innerText = uvIndex;
    document.getElementById('wind-text-box').innerText = windStatus;
    document.getElementById('humidity-text-box').innerText = humidity;
    document.getElementById('visibility-text-box').innerText = visibility;
}

// Function to get the appropriate weather icon based on the weather description
function getWeatherIcon(weather) {
    console.log(weather);
    
    if (weather.includes("rain")) {
        return "Animations/Rainy_Cloudy.gif";
    } else if (weather.includes("clear")) {
        return "Animations/Sunny.gif";
    } else if (weather.includes("cloud")) {
        return "Animations/Rainy_Cloudy.gif";
    } else {
        return "Animations/Default.gif"; // Default icon
    }
}

// Event listener for the search icon
document.getElementById('main-search').addEventListener('click', function () {
    const city = prompt("Enter city name:");
    if (city) {
        fetchWeather(city);
    }
});
// Event listener for the search icon
// document.getElementsByClassName('change').addEventListener('click', function () {
//     console.log(document.getElementsByClassName('change'));
    
// });

// Fetch weather for Greater Noida on page load
window.onload = function () {
    fetchWeather("Greater Noida");
};
