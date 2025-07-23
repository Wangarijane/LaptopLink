// src/api/axios.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://laptoplink-backend.onrender.com', 
  withCredentials: true,
});

export default API;
