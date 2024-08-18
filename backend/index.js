const express = require('express');
const cors = require('cors');
const NewsAPI = require('newsapi');
require('dotenv').config();

const apiKey = process.env.API_KEY;
const newsapi = new NewsAPI(apiKey);

const getSources = require('./API/sources');
const getEverything = require('./API/everything');
const getTopHeadlines = require('./API/topHeadlines');

const app = express();
const port = process.env.PORT || 3001;

// Enable CORS for all routes
app.use(cors());

app.get('/api/sources', async (req, res) => {
  try {
    const sources = await getSources(newsapi);
    res.json(sources);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/everything', async (req, res) => {
  try {
    const everything = await getEverything(newsapi);
    res.json(everything);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/top-headlines', async (req, res) => {
  try {
    const topHeadlines = await getTopHeadlines(newsapi);
    res.json(topHeadlines);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
