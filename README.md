# Weatherly

A clean, modern, and responsive weather web application that retrieves live weather information from the OpenWeatherMap API.

## Features

- **City & Country Input**: Users can enter a city name and country code to get weather data.
- **API Key Management**: The OpenWeatherMap API key is entered by the user through the web interface rather than being hard-coded.
- **Live Weather Data**: Fetches real-time weather information including temperature, condition, humidity, wind speed, and pressure.
- **Weather Icons**: Displays relevant weather icons based on current conditions.
- **Error Handling**: Shows clear error messages when the location cannot be found, the API key is invalid, or a request fails.
- **Responsive Design**: Works on mobile, tablet, and desktop screens.

## How It Works

1. The user enters their OpenWeatherMap API key, a city name, and a country code.
2. On clicking **"Get Weather"**, the app sends a request to the OpenWeatherMap Current Weather API.
3. The response is parsed and displayed in a clean card, showing:
   - Location name and country code
   - Current temperature (in °C)
   - Weather condition description with an icon
   - Additional details: feels-like temperature, humidity, wind speed, and pressure

## Getting an API Key

1. Go to [OpenWeatherMap](https://openweathermap.org/).
2. Sign up for a free account.
3. Navigate to the **API keys** tab in your account dashboard.
4. Copy your API key and enter it into the application when prompted.

## Running the Application

This is a static web application — no build tools or server setup are required.

### Option 1: Open Directly in a Browser

1. Download or clone all project files (`index.html`, `style.css`, `script.js`).
2. Open `index.html` in your preferred web browser.
3. Enter your API key, city, and country, then click **"Get Weather"**.

### Option 2: Serve with a Local Server (Recommended)

Some browsers may block `fetch` requests when opening files via `file://` protocol. To avoid this, serve the app locally.

Using Python:

```bash
python -m http.server 8000
```

Using Node.js (with `live-server` or `http-server`):

```bash
npx live-server
```

Then open `http://localhost:8000` in your browser.

## Project Structure

```
Weatherly/
├── index.html    # Application markup and structure
├── style.css     # Stylesheet for modern, responsive design
├── script.js     # JavaScript for API calls and UI logic
└── README.md     # This file
```

## Technologies Used

- **HTML5** — structure and content
- **CSS3** — styling with CSS variables and Grid/Flexbox
- **JavaScript (Vanilla)** — API requests and DOM manipulation

## API Reference

This application uses the [OpenWeatherMap Current Weather API](https://openweathermap.org/current):

```
GET https://api.openweathermap.org/data/2.5/weather?q={city},{country}&appid={API key}&units=metric
```

## Notes

- Temperature is displayed in Celsius (°C).
- Country code should be a 2-letter ISO 3166 country code (e.g., `US`, `GB`, `IN`).
- The free tier of OpenWeatherMap allows up to 60 calls per minute.

## License

This project is provided as-is for educational purposes.
