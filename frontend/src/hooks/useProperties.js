// hooks/useProperties.js
import { useState, useEffect } from 'react';
import { fetchProperties } from '../services/propertyService';

const useProperties = () => {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProperties = async () => {
      try {
        const data = await fetchProperties();
        setProperties(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadProperties();
  }, []);

  return { properties, error, isLoading };
};

export default useProperties;
