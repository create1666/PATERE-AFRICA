import { useEffect, useState } from 'react';

const useFetch = (urlApiEndpoint: any) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(urlApiEndpoint);
        const json = await res.json();
        setData(json);
        setLoading(false);
      } catch (err) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [urlApiEndpoint]);
  return { loading, data, error };
};

export default useFetch;
