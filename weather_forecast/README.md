# Weather Forecast App

This is a weather forecast application that provides current weather conditions and forecasts using the OpenWeatherMap API. The application is built with Node.js and uses an Express server.


## Table of Contents

1. Features
2. Installation
3. Configuration
4. Usage
5. License


## Features

Get current weather conditions for any city
Retrieve weather forecasts for multiple days (5 days only)
Responsive design for different devices


## Installation

1. Clone the repository to your local machine:

    git clone https://github.com/maheshmahi18/SlashMark-Internship.git

2. Navigate to the project directory:
    cd weather-forecast

3. Install the required dependencies:

   [Node.js](https://nodejs.org/)
   [npm](https://www.npmjs.com/)
   [Express.js](https://expressjs.com/)


## Configuration

Before starting the server, make sure you have an API key from OpenWeatherMap. You can obtain an API key by creating an account on OpenWeatherMap. Once you have your API key:

Create a .env file in the root of the project.
    Add the following line to the .env file, replacing YOUR_API_KEY with your OpenWeatherMap API key:

OPENWEATHERMAP_API_KEY=YOUR_API_KEY


## Usage

1. Start the server using npm:

    npm start

2. Alternatively, start the server directly with Node.js:

    node server.mjs

3. Open your web browser and visit http://localhost:3000 to view the weather forecast application.


## License

This project is licensed under the MIT License. Feel free to use and modify it according to the terms of the license.