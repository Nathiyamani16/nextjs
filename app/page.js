// app/page.js
import React from 'react';
import Home from './components/home';
import FeatureProducts from './components/featureproducts';
import { fetchProducts } from './api/apiproducts';

const Page = async () => {
  const products = await fetchProducts();

  return (
    <div className='mr-32 ml-32'>
      <Home />
      <FeatureProducts products={products} />
    </div>
  );
};

export default Page;




