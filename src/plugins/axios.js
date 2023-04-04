import axios from 'axios';

const axiosInstance = axios.create({
  apiBaseURL: import.meta.env.VITE_API_BASE_URL,
});

export default axiosInstance;
