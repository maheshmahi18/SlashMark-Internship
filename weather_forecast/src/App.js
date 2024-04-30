import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await fetch(`http://localhost:5000/weather/${city}`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    // Fetch weather data when the component mounts
    fetchWeather();
  }, []);

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <input 
        type="text" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
        placeholder="Enter city name" 
      />
      <button onClick={fetchWeather}>Get Weather</button>
      {weatherData && (
        <div className="weather-box">
          <h2>Current Weather</h2>
          <div className="current-weather">
            <p>Temperature: {(weatherData.current.main.temp - 273.15).toFixed(2)} °C</p>
            <p>Description: {weatherData.current.weather[0].description}</p>
          </div>
          <h2>Forecast for the Next 5 Days</h2>
          <ul className="forecast">
            {weatherData.forecast.map((entry) => (
              <li key={entry.date}>
                Date: {entry.date}, Temperature: {entry.temperature.toFixed(2)} °C, Description: {entry.description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
