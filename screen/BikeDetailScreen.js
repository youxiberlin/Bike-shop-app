import React from 'react';
import { ScrollView } from 'react-native';
import BikeDetail from '../components/BikeDetail';

export default function BikeDetailScreen({ route }) {
  const { name, price, images, category, size } = route.params;
  return (
    <ScrollView>
      <BikeDetail
        {...{
          name,
          price,
          category,
          images,
          size
        }}
      />
    </ScrollView>
  );
}
