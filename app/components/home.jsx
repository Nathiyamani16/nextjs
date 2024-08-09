import React from 'react'

const Home = () => {
  return (
    <>
   <div className=' container bg-gray-100 '>
   <div className='flex flex-grow justify-center py-10 '>
      <h1 className='text-6xl text-black-600 font-black'>Digital Ecommerce</h1>
    </div>
   <span className='flex flex-grow justify-center mt-2 text-6xl font-black text-black-800 '>Website.</span>
   <span className='flex flex-grow justify-center mt-2 text-4xl font-black text-blue-700'>Using Next.js</span>
   <p className='flex flex-grow justify-center text-center mt-2 text-base  text-black-800'>It is a long established fact that a reader will be distracted 
    by the <br/> readable content of a page when looking at its layout.</p>
    <div className='flex flex-grow justify-center mt-4 gap-3' >
    <button style={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px", cursor:"pointer"}} type="button" className=" text-white bg-blue-700focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 focus:outline-none">Products</button>
    <button style={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px"}}  type="button" className=" text-blue-500 bg-blue-700focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 me-2 mb-2 dark:bg-white-600 focus:outline-none">Learn More</button>
    </div>
   </div>
          </>
  )
}

export default Home