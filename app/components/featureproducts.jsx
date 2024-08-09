import Link from 'next/link'
import React from 'react'

const FeatureProducts = () => {


  return (
    <div className=''>
      <div className='conatiner bg-white flex flex-wrap justify-between '>
        <h2 className='text-black mr-20 font-bold'>Top Saled</h2>
        <Link href="/products" className='text-blue-600'>view all</Link>
      </div>
        <div className=''>

        </div>

    </div>

  )
}

export default FeatureProducts