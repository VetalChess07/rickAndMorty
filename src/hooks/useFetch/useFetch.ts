import { useState, useEffect } from 'react';
import axios from 'axios';
import { useFetchType } from './type';

const useFetch = ({url, page }: useFetchType) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${url}?page=${page}`);
        setData(response.data);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    
    return () => {
    
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
