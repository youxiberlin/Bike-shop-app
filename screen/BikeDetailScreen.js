import React from 'react';
import BikeDetail from '../components/BikeDetail';

export default function BikeDetailScreen({ route }) {
  const { name, price, images, category } = route.params;
  return (
    <BikeDetail
      {...{
        name,
        price,
        category,
        images
      }}
    />
  );
}
