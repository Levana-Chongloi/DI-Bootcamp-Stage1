const apiKey = "6bc236fa8bd5e7e03f83fd8cea3eac74";
const form = document.getElementById("weatherForm");
const cityInput = document.getElementById("cityInput");
const weatherContainer = document.getElementById("weatherContainer");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const city = cityInput.value.trim();
  if (city === "") {
    alert("Please enter a city name.");
    return;
  }
  getWeather(city);
  cityInput.value = "";
});

function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === "404") {
        alert("City not found. Please enter a valid city name.");
        return;
      }
      const weatherInfo = {
        city: data.name,
        country: data.sys.country,
        weather: data.weather[0].description,
        icon: data.weather[0].icon,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        sunrise: new Date(data.sys.sunrise * 1000),
        sunset: new Date(data.sys.sunset * 1000)
      };
      createWeatherCard(weatherInfo);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

function createWeatherCard(weatherInfo) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <h2>${weatherInfo.city}, ${weatherInfo.country}</h2>
    <p>Weather: ${weatherInfo.weather}</p>
    <img src="https://openweathermap.org/img/w/${weatherInfo.icon}.png" alt="Weather Icon">
    <p>Temperature: ${kelvinToCelsius(weatherInfo.temperature)}°C</p>
    <p>Humidity: ${weatherInfo.humidity}%</p>
    <p>Wind: ${weatherInfo.wind} m/s</p>
    <p>Sunrise: ${formatTime(weatherInfo.sunrise)}</p>
    <p>Sunset: ${formatTime(weatherInfo.sunset)}</p>
  `;
  weatherContainer.appendChild(card);
}

function kelvinToCelsius(kelvin) {
  return Math.round(kelvin - 273.15);
}

function formatTime(date) {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
