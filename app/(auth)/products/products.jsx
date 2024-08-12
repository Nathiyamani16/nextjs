import Link from 'next/link';
import React from 'react';

const Products = ({ products }) => {
  console.log(products)

  return (
    <div className='ml-32 mr-32'>
      <div className='ml-7 font-bold'>Newly</div>
      <div className='flex flex-wrap justify-between cursor-pointer'>
        {products?.map((product) => (

          <div key={product.id} className='w-1/3 p-4'>
            <div className=' h-full w-full '>

              <div className='bg-gray-100 shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-95'>
                <Link href={`/singleproduct/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className='w-20 h-20 object-fit' />
                  <h3 className='text-black mt-2 font-semibold w-full'>{product.title}</h3>
                  <p className='text-gray-700'>${product.price}</p>
                </Link>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Products;







// import React from 'react';
// import { fetchProducts } from '../lib/api';
// import Link from 'next/link';

// export async function getServerSideProps() {
//   const products = await fetchProducts();
//   return {
//     props: { products },
//   };
// }

// const HomePage = ({ products }) => {
//   return (
//     <div>
//       <h1 className="text-2xl font-bold p-4">Products List</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
//         {products.map(product => (
//           <div key={product.id} className="border p-4 rounded-lg shadow-md">
//             <Link href={`/products/${product.id}`}>
//               <a>
//                 <img src={product.image} alt={product.title} className="w-full h-40 object-cover mb-4" />
//                 <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
//                 <p className="text-gray-700">${product.price}</p>
//               </a>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;
