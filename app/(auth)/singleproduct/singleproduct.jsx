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
