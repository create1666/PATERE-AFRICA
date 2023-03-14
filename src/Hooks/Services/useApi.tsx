import { useState } from 'react';

import useAxios from './useAxios';

const useApi = (baseUrl: any) => {
  const [data, setData] = useState(null);
  const [apiError, setApiError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { axios, loading: isLoading, error } = useAxios(baseUrl);

  const get = async (url: string) => {
    try {
      const response = await axios.get(url);
      setData(response.data);
      setLoading(isLoading);
    } catch (err) {
      setApiError(error);
    }
  };

  const post = async (url: string, body: any) => {
    try {
      const response = await axios.post(url, body);
      setData(response.data);
      setLoading(isLoading);
    } catch (err) {
      setApiError(error);
    }
  };

  const put = async (url: string, body: any) => {
    try {
      const response = await axios.put(url, body);
      setData(response.data);
      setLoading(isLoading);
    } catch (err) {
      setApiError(error);
    }
  };

  const del = async (url: string) => {
    try {
      await axios.delete(url);
      setData(null);
      setLoading(isLoading);
    } catch (err) {
      setApiError(error);
    }
  };

  return {
    data,
    loading,
    error: apiError,
    get,
    post,
    put,
    remove: del,
  };
};

export default useApi;
