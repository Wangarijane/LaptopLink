// src/api/axios.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Change to your backend URL if hosted
  withCredentials: true,
});

export default API;
