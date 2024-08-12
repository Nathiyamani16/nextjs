import { fetchProductById } from '@/app/api/apiproducts';
import Singleproduct from '../singleproduct';

const Page = async ({ params }) => {
  const product = await fetchProductById(params.id);

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div>
      <Singleproduct product={product} />
    </div>
  );
};

export default Page;


