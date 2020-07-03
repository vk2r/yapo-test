import axios from 'axios';
import md5 from 'crypto-js/md5';

// Environments
const {
  REACT_APP_API_URL = '',
  REACT_APP_API_PUBLIC_KEY = '',
  REACT_APP_API_PRIVATE_KEY = '',
} = process.env;

// Configuration
const config = {
  baseURL: REACT_APP_API_URL,
};

// Client
const httpClient = axios.create(config);

// Token for instance
const token = axios.CancelToken;

// Add API Key in requests
httpClient.interceptors.request.use(config => {
  if (REACT_APP_API_PUBLIC_KEY && REACT_APP_API_PRIVATE_KEY) {
    const ts = +new Date();
    const hash = md5(ts + REACT_APP_API_PRIVATE_KEY + REACT_APP_API_PUBLIC_KEY).toString();
    config.params = {
      ts,
      hash,
      apikey: REACT_APP_API_PUBLIC_KEY,
    };
  }
  return config;
});

// Exports
export { httpClient, token };
