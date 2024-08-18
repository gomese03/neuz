require('dotenv').config();
const apiKey = process.env.API_KEY;

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(apiKey);

const getSources = require('./API/sources');
const getEverything = require('./API/everything');
const getTopHeadlines = require('./API/topHeadlines');

// IIFE
(async () => {
    try {
      const sources = await getTopHeadlines(newsapi);
      console.log(sources);
    } catch (error) {
      console.error('Error fetching sources:', error);
    }
})();
