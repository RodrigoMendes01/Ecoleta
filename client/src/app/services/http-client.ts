import axios from 'axios';
import { localStorageKeys } from '../config/local-storage-keys';

export const httpClient = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    'Content-Type': 'application/json'
  }
});

httpClient.interceptors.request.use(config => {
  const acessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

  if(acessToken) {
    config.headers.Authorization = `Bearer ${acessToken}`;
  }

  return config;
});
