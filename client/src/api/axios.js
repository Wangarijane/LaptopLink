import axios from 'axios';

const baseURL =
  import.meta.env.MODE === 'development'
    ? 'http://localhost:5000' // local backend
    : 'https://laptoplink-backend.onrender.com'; // production backend

const API = axios.create({
  baseURL,
  withCredentials: true,
});

export default API;

