import React from 'react';
import Cart from '../components/Cart';

export default function CartScreen({ route }) {
  console.log('cart params', route.params)
  const { items } = route.params;
  return (
      <Cart
        {...{
          items
        }}
      />
  );
}
