// "use client"

// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import axios from 'axios';

// const FeatureProducts = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {

//     axios.get('https://api.escuelajs.co/api/v1/products')
//       .then(response => {
//         setProducts(response.data);
//       })
//   }, []);

//   return (
//     <div className=''>
//       <div className='container bg-white flex justify-between items-center py-4'>
//         <h2 className='text-black font-bold'>Top Saled</h2>
//         <Link href="/products" className='text-blue-600'>
//           View All
//         </Link>
//       </div>
//       <div className='flex flex-wrap justify-between'>
//         {products?.map((curr,idx) => (
//           <div key={idx} className='w-1/3 p-4'>
//             <img
//               src={curr.images}
//               alt={curr.name}
//               className='w-full h-auto object-cover'
//             />
//             <h3 className='text-black mt-2 font-semibold'>{curr.title}</h3>
//             <p className='text-gray-700'>${curr.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeatureProducts;


import React from 'react';
import Link from 'next/link';

const FeatureProducts = ({ products }) => {
  return (
    <div>
      <div className='container bg-white flex justify-between items-center py-4'>
        <h2 className='text-black font-bold'>Top Saled</h2>
        <Link href="/products" className='text-blue-600'>
          View All
        </Link>
      </div>
      <div className='flex flex-wrap justify-between'>
        {products?.map((curr,idx) => (
          <div key={idx} className='w-1/3 p-4'>
            <img
              src={curr.images}
              alt={curr.title}
              className='w-full h-auto object-cover'
            />
            <h3 className='text-black mt-2 font-semibold'>{curr.title}</h3>
            <p className='text-gray-700'>${curr.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureProducts;
