import React from 'react'
import Products from './products'
import { fetchProducts } from '@/app/api/apiproducts'

const page = async () => {
  const products= await fetchProducts()
  return (
    <>
    <Products products={products}/>
    </>
  )
}

export default page