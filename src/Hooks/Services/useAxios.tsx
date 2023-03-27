// useAxios.js
import axios from 'axios';
import { useEffect, useState } from 'react';

const useAxios = (baseUrl: any) => {
  const [loading, setLoading] = useState(false);
  // const [data, setData] = useState({});
  const [error, setError] = useState(null);

  const instance = axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  instance.interceptors.request.use(
    (config) => {
      setLoading(true);
      return config;
    },
    (err) => {
      setLoading(false);
      setError(err);
      return Promise.reject(err);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      setLoading(false);
      return response;
    },
    (err) => {
      setLoading(false);
      setError(err);
      return Promise.reject(err);
    }
  );

  useEffect(() => {
    return () => {
      setLoading(false);
      setError(null);
    };
  }, [instance]);

  return {
    axios: instance,
    loading,
    error,
  };
};

export default useAxios;
