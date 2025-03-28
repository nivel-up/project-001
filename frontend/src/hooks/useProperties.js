// hooks/useProperties.js
import { useState, useEffect } from 'react';
import { fetchProperties } from '../services/propertyService';

const useProperties = ({searchParams}) => {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProperties = async () => {
        setIsLoading(true);
      try {
        const data = await fetchProperties({searchParams});
        setProperties(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadProperties();
  }, [searchParams]);

  return { properties, error, isLoading };
};

export default useProperties;
