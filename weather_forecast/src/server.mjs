//server.mjs
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/weather/:city', async (req, res) => {
  try {
    const { city } = req.params;
    
    // Dynamically import node-fetch
    const fetchModule = await import('node-fetch');
    const fetch = fetchModule.default;

    const API_KEY = '35d06d3088920271778592b5bea6faf5';
    
    const currentResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    const currentData = await currentResponse.json();

    const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`);
    const forecastData = await forecastResponse.json();

    // Process forecast data for the next 5 days
    const forecastEntries = forecastData.list.slice(0, 40).filter(entry => entry.dt_txt.includes('12:00:00')).map(entry => ({
      date: entry.dt_txt,
      temperature: entry.main.temp - 273.15, // Convert temperature to Celsius
      description: entry.weather[0].description
    }));

    // Combine current weather and forecast data
    const weatherData = {
      current: currentData,
      forecast: forecastEntries
    };

    res.json(weatherData);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ error: 'Unable to fetch weather data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
