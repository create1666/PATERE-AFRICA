import { useState } from 'react';

import useAxios from './useAxios';

const useApi = (baseUrl: string) => {
  const [apiError, setApiError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { axios, loading: isLoading, error } = useAxios(baseUrl);

  const get = async (url: string) => {
    try {
      const response = await axios.get(url);
      setLoading(isLoading);
      return response;
    } catch (err) {
      setApiError(error);
      throw err;
    }
  };

  const post = async (url: string, body: any) => {
    try {
      const response = await axios.post(url, body);
      setLoading(isLoading);
      return response;
    } catch (err) {
      setApiError(error);
      throw err;
    }
  };

  const put = async (url: string, body: any) => {
    try {
      const response = await axios.put(url, body);
      setLoading(isLoading);
      return response;
    } catch (err) {
      setApiError(error);
      throw err;
    }
  };

  const del = async (url: string) => {
    try {
      const response = await axios.delete(url);
      setLoading(isLoading);
      return response;
    } catch (err) {
      setApiError(error);
      throw err;
    }
  };

  return {
    loading,
    error: apiError,
    get,
    post,
    put,
    remove: del,
  };
};

export default useApi;
