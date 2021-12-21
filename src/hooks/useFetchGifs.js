import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  const API_KEY = 'jK8GqN6qzwSVhjjH1UwKaRNVqJijd5Ig';
  const [state, setState] = useState({ images: [], loading: true });

  useEffect(() => {
    getGifs(category, API_KEY).then((images) => {
      setState({ images, loading: false });
    });
  }, [category]);

  return state;
};
