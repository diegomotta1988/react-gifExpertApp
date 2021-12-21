import React from 'react';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from './../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);
  const { images, loading } = useFetchGifs(category);
  // Al pasarle las dependencias como [] sólo se ejecuta al renderizarse por primera vez el componente

  const API_KEY = 'jK8GqN6qzwSVhjjH1UwKaRNVqJijd5Ig';

  return (
    <>
      <h3 className='animate__animated animate__fadeIn'>{category}</h3>
      {loading && <p className='animate__animated animate__flash'>Loading</p>}
      <div className='card-grid'>
        {images.map((img) => (
          <GifGridItem {...img} key={img.id} />
        ))}
      </div>
    </>
  );
};
