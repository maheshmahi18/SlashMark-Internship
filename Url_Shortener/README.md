# URL Shortener Project

This project is a simple URL shortener application. It allows users to enter a long URL, which is then shortened to a more manageable form. The backend is built with Node.js, Express, and MongoDB, while the frontend uses HTML, CSS, and JavaScript.

## Table of Contents

1. Features
2. Prerequisites
3. Installation and Setup
4. Usage
5. Contributing
6. License


## Features

- Shorten long URLs to more compact ones.
- Redirect to the original URL when a shortened link is accessed.
- Store shortened URLs in MongoDB.
- Serve the frontend at `http://localhost:3000`.


## Prerequisites

Before you start, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)


## Installation and Setup

1. Clone the Repository:
 
   git clone https://github.com/maheshmahi18/SlashMark-Internship.git
   cd your-repo-name

2. Install Dependencies:

    npm install

3. Configure MongoDB:
    
    Make sure MongoDB is installed and running.
    You may need to configure your MongoDB connection string in a .env file.

    Example .env:

    MONGO_URI=mongodb://localhost:27017/url-shortener
    PORT=3000

4. Start the Server:
    
    npm start (run from project location)

5. Access the Application:

    Open a web browser and go to http://localhost:3000.  


## Usage

1.Shortening a URL:
    
    Enter the URL you want to shorten in the input box and click "Shorten URL."

    The shortened URL will be displayed on the screen.

2.Accessing a Shortened URL:
    
    Paste the shortened URL in a browser to be redirected to the original URL.


## Contributing

Contributions are welcome! If you want to contribute to this project:

    1. Fork the repository.
    2. Create a new branch for your feature or fix.
    3. Make your changes and commit them.
    4. Push to your forked repository.
    5. Create a Pull Request to the main repository.


## License

[MIT License](LICENSE)
This project is licensed under the MIT License. See the LICENSE file for more information.
