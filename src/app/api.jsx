import axios from 'axios';

const api = axios.create({
  baseURL: 'https://yourdomain.com/wp-json/wc/v3',
  auth: {
    username: 'your_consumer_key',
    password: 'your_consumer_secret',
  },
});

export default api;