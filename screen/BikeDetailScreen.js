import React from 'react';
import BikeDetail from '../components/BikeDetail';

export default function BikeDetailScreen({ route }) {
  const { name, price, images } = route.params;
  return (
    <BikeDetail
      {...{
        name,
        price,
        images
      }}
    />
  );
}
