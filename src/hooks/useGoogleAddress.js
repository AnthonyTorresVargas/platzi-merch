import { useEffect, useState } from 'react';
import axios from 'axios';

const getCoordinates = async (api) => {
  const response = await axios(api);
  return response;
};

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyA-d2AGRbY5y2hAw82a8tYSzkgazCU9Orw`;

  useEffect(async () => {
    const res = await getCoordinates(API);
    setMap(res.data.results[0].geometry.location);
  }, []);

  return map;
};

export default useGoogleAddress;
