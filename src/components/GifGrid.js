import React from 'react';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from './../hooks/useFetchGifs';

import propTypes from 'prop-types';

export const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);
  const { data: images, loading } = useFetchGifs(category);
  // Al pasarle las dependencias como [] sólo se ejecuta al renderizarse por primera vez el componente

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

GifGrid.propTypes = {
  category: propTypes.string.isRequired,
};
