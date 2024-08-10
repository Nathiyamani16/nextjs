import { fetchProductById } from '@/app/api/apiproducts';
import Singleproduct from './singleproduct';

import { fetchProductById } from '@/app/api/apiproducts';
import Singleproduct from '@/components/singleproduct';

const Page = async ({ params }) => {
  const product = await fetchProductById(params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Singleproduct product={product} />
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const product = await fetchProductById(params.id);

  return {
    props: {
      product,
    },
  };
}

export default Page;



// export async function getServerSideProps(context) {
//   const { id } = context.params; 
//   const product = await fetchProductById(id);

//   // Return the product data as props
//   return {
//     props: {
//       product,
//     },
//   };
// }

// // pages/singleproduct/[id].js

// import { fetchProductById } from '@/app/api/apiproducts';
// import SingleProduct from '@/components/SingleProduct'; // Adjust the import path as necessary

// const SingleProductPage = ({ product }) => {
//   return (
//     <div>
//       <SingleProduct product={product} />
//     </div>
//   );
// };

// // Fetch data for the page at request time
// export async function getServerSideProps(context) {
//   const { id } = context.params; // Extract the product ID from the URL parameters
//   const product = await fetchProductById(id);

//   // Return the product data as props
//   return {
//     props: {
//       product,
//     },
//   };
// }

// export default SingleProductPage;



