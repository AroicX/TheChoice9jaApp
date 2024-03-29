import axios from 'axios';
import { getToken } from './cookies';
import toast, { Toaster } from 'react-hot-toast';

const environment =
  process.env.NODE_ENV === 'development'
    ? process.env.NEXT_PUBLIC_DEV_URL
    : process.env.NEXT_PUBLIC_BASE_URL;

console.log('environment', environment);

const requests = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

requests.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (401 === error.response.status) {
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem('user-data');
        return window.location.replace('/login');
      }
    } else if (error.response.status > 400 && error.response.status < 500) {
      toast.error(`${error.response.data.message}`);
      // Swal.fire({
      //   title: 'Bad Request',
      //   text: error.response.data.message,
      //   type: 'error',
      //   timerProgressBar: true,
      //   timer: 2000,
      //   allowOutsideClick: true,
      //   showConfirmButton: false,
      // });
    } else {
      return Promise.reject(error.response);
    }
  }
);

requests.interceptors.request.use(
  function (config) {
    config.headers = {
      ...config.headers,
    };
    const token = getToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default requests;

export const useAxiosInterceptors = () => {
  requests.interceptors.request.use(
    function (config) {
      config.headers = {
        ...config.headers,
      };
      const token = getToken();
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
};

export const _protectedRequest = async (url) => {
  useAxiosInterceptors();
  const res = await requests.get(url);
  return res.data;
};
