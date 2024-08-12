"use client";
import { useCart } from '@/app/context/cartContext';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';



const Singleproduct = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const router=useRouter()
  const { addToCart } = useCart();

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity }); 
    router.push('/cart')
  };

  return (
    <div className="container flex mx-auto p-4 items-center justify-center ">
      <div className="w-full md:w-1/2 p-4 flex flex-col items-center">
        <img
          className="w-32 h-full object-cover" 
          src={product.image}
          alt={product.title}
        />
        <div className="mt-4 text-lg font-semibold">{product.price}</div>
        <div className="mt-2 text-gray-700">{product.description}</div>

      <div className="flex flex-wrap justify-center gap-4 mt-4 items-center">
      <button
          aria-label="Decrease quantity"
          className="flex items-center px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={decreaseQuantity}
        >
          <FaMinus />
        </button>
        <span className="text-lg">{quantity}</span>
        <button
          aria-label="Increase quantity"
          className="flex items-center px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={increaseQuantity}
        >
          <FaPlus />
        </button>
        
      </div>
      <button
        aria-label="Add to cart"
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 flex items-center justify-center mt-4"
        onClick={handleAddToCart}
      >
        ADD
      </button>
    </div>
    </div>
  );
};

export default Singleproduct;
