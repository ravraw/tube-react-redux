//require('dotenv').config();
import axios from 'axios';
const KEY = 'AIzaSyDBRTeVHnH5T3Irmx7oHTYpJdbF0zUoTi8';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: KEY
  }
});
