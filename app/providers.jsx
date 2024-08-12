import React from 'react';
import { CartProvider } from './context/cartContext';


const Providers = ({ children }) => {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  );
}

export default Providers;
