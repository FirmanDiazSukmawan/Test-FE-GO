import axios from 'axios';


export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept-Language': 'en',
  },
});

console.log('Base URL:', process.env.NEXT_PUBLIC_BASE_URL);


axiosInstance.interceptors.response.use(
  response => {
    if (response.data.responseStatus === 403) {
      Promise.resolve();
    }
    return response;
  },
  error => {
    if (error?.response?.status === 404) {
      Promise.resolve();
    }
    if (error?.response?.status === 401) {
      Promise.resolve();
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;