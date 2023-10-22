import axios from 'axios';

export const CustomInstance = axios.create({
  baseURL: `http://localhost:8080/`,
});
