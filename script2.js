// OpenWeatherMap API key (replace with your actual API key)
const apiKey = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={959f1be765432e48ab78d04a59305e37}"; // Replace with your OpenWeatherMap API key
const apiBaseUrl = "https://api.openweathermap.org/data/2.5/weather";

// DOM elements
const cityInput = document.getElementById("city-input");
const fetchWeatherBtn = document.getElementById("fetch-weather-btn");
const weatherContainer = document.getElementById("weather-container");
const weatherData = document.getElementById("weather-data");

// Fetch weather data for a given city
async function fetchWeather(city) {
  try {
    // Construct the URL with the city name and API key
    const url = `${apiBaseUrl}?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`City not found or API error: ${response.status}`);
    }

    // Parse the response data
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.error("Error fetching weather:", error.message);
    weatherData.textContent = `Error: ${error.message}`;
    weatherData.classList.add("error");
  }
}

// Display weather data on the webpage
function displayWeather(data) {
  const { name, main, weather } = data;
  const temperature = main.temp;
  const condition = weather[0].description;

  weatherData.classList.remove("error");
  weatherData.innerHTML = `
    <h2>Weather in ${name}</h2>
    <p>Temperature: ${temperature}°C</p>
    <p>Condition: ${condition}</p>
  `;
}

// Add event listener to the button
fetchWeatherBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    weatherData.textContent = "Loading...";
    fetchWeather(city);
  } else {
    weatherData.textContent = "Please enter a valid city name.";
    weatherData.classList.add("error");
  }
});







