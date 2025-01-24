import axios from 'axios';

import { useAuthStore } from '@/global-state/auth-store';

export const client = axios.create({
  baseURL: import.meta.env.VITE_API_HOST,
  headers: {
    'Content-Type': 'application/json',
  },
});

client.interceptors.request.use((config) => {
  const accessToken = useAuthStore.getState().accessToken;
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

client.interceptors.response.use(
  (value) => {
    return value;
  },
  (error) => {
    const errorCode = error.response?.status;

    if (errorCode === 401) {
      location.href = '/';
    }

    return Promise.reject(error);
  },
);
