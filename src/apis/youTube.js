//require('dotenv').config();

import axios from 'axios';
import { YOUTUBE_KEY } from './secret';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: YOUTUBE_KEY
  }
});
