const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const apiKeyInput = document.getElementById('api-key');
const cityInput = document.getElementById('city');
const countryInput = document.getElementById('country');
const getWeatherBtn = document.getElementById('get-weather-btn');
const weatherResult = document.getElementById('weather-result');
const errorMessage = document.getElementById('error-message');
const errorText = document.getElementById('error-text');

const locationName = document.getElementById('location-name');
const countryCode = document.getElementById('country-code');
const temperature = document.getElementById('temperature');
const weatherIcon = document.getElementById('weather-icon');
const weatherCondition = document.getElementById('weather-condition');
const feelsLike = document.getElementById('feels-like');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const pressure = document.getElementById('pressure');

getWeatherBtn.addEventListener('click', fetchWeather);

async function fetchWeather() {
  const apiKey = apiKeyInput.value.trim();
  const city = cityInput.value.trim();
  const country = countryInput.value.trim();

  hideError();

  if (!apiKey) {
    showError('Please enter your OpenWeatherMap API key.');
    return;
  }

  if (!city) {
    showError('Please enter a city name.');
    return;
  }

  if (!country) {
    showError('Please enter a country code.');
    return;
  }

  getWeatherBtn.disabled = true;
  getWeatherBtn.textContent = 'Loading...';

  try {
    const url = new URL(API_BASE_URL);
    url.searchParams.set('q', `${city},${country}`);
    url.searchParams.set('appid', apiKey);
    url.searchParams.set('units', 'metric');

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(parseApiError(data, response.status));
    }

    displayWeather(data);
    weatherResult.classList.remove('hidden');
  } catch (error) {
    showError(error.message);
  } finally {
    getWeatherBtn.disabled = false;
    getWeatherBtn.textContent = 'Get Weather';
  }
}

function parseApiError(data, status) {
  if (status === 401) {
    return 'Invalid API key. Please check your OpenWeatherMap API key and try again.';
  }
  if (status === 404) {
    return `Location not found. Please check that "${cityInput.value}, ${countryInput.value}" is correct and try again.`;
  }
  if (data && data.message) {
    return `Error: ${data.message}`;
  }
  return 'An unexpected error occurred. Please try again.';
}

function displayWeather(data) {
  locationName.textContent = data.name;
  countryCode.textContent = data.sys.country;
  temperature.textContent = Math.round(data.main.temp);

  const conditionText = data.weather[0].description;
  weatherCondition.textContent = conditionText;

  const iconCode = data.weather[0].icon;
  weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  weatherIcon.alt = conditionText;

  feelsLike.textContent = `${Math.round(data.main.feels_like)} °C`;
  humidity.textContent = `${data.main.humidity} %`;
  windSpeed.textContent = `${data.wind.speed} m/s`;
  pressure.textContent = `${data.main.pressure} hPa`;
}

function showError(message) {
  errorText.textContent = message;
  errorMessage.classList.remove('hidden');
  weatherResult.classList.add('hidden');
}

function hideError() {
  errorMessage.classList.add('hidden');
}
