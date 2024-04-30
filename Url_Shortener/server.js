const express = require('express');
const mongoose = require('mongoose');
const shortid = require('shortid');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public')); // Serving static files from the 'public' directory

// MongoDB connection
mongoose.connect('mongodb://localhost/url_shortener', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define URL model
const UrlSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
    unique: true
  },
  shortUrl: {
    type: String,
    required: true,
    unique: true
  }
});

const Url = mongoose.model('Url', UrlSchema);

// Route to serve index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Route to shorten URL
app.post('/shorten', async (req, res) => {
  const { originalUrl } = req.body;

  try {
    let url = await Url.findOne({ originalUrl });
    if (!url) {
      const shortCode = shortid.generate();
      const shortUrl = `${req.protocol}://${req.get('host')}/${shortCode}`;
      url = await Url.create({ originalUrl, shortUrl });
    }
    res.json({ shortUrl: url.shortUrl });
  } catch (error) {
    console.error('Error shortening URL:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to redirect short URL to original URL
app.get('/:shortCode', async (req, res) => {
  const { shortCode } = req.params;

  try {
    const url = await Url.findOne({ shortUrl: `${req.protocol}://${req.get('host')}/${shortCode}` }).lean();
    if (url) {
      res.redirect(url.originalUrl);
    } else {
      res.status(404).json({ error: 'URL not found' });
    }
  } catch (error) {
    console.error('Error redirecting:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
