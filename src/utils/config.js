const BASE_URL = 'https://news-explorer-back.herokuapp.com';
const newsApiProxi = 'https://nomoreparties.co/news/v2/';
// const newsApiUrl = 'https://newsapi.org/v2/';

const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const PAGE_SIZE = 100;
const DAYS_INTERVAL = 7;

const newsApiConfig = {
  // KEY: process.env.API_KEY,
  KEY: '68277cb3c12a4fb7b2a10b5ebfc04a34',
  BASE_URL: newsApiProxi,
  PAGE_SIZE,
};

export {
  newsApiConfig,
  DAYS_INTERVAL,
  BASE_URL,
  HEADERS,
};
