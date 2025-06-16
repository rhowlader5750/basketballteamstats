import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // Change this to your actual backend URL
  // You can also add headers, timeout, etc.
});

export default api;