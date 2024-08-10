import React from 'react'

const Singleproduct = ({product}) => {


  return (
    <>

<div className='w-1/2 p-4'>
      <img 
        src={product.images}
        alt={product.title} 
      />
      <div>{product.description}</div>
    </div>
    </>
  )
}

export default Singleproduct

import React from 'react'

const Singleproduct = ({ products }) => {
  console.log(products);
  return (
    <>

      <div className='w-1/2 p-4'>
        <img className='w-8 h-8'
          src={products?.image}
          alt={products?.title}
        />
       <div>{products.price}</div>
        <div>{products.description}</div>
      </div>
    </>
  )
}

export default Singleproduct
