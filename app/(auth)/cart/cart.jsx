"use client";
import { useCart } from '@/app/context/cartContext';
import React from 'react';

const Cart = () => {
const {cart}=useCart()
  const totalCost = cart?.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div>

      <ul>
        {cart?.map((curr, idx) => (
          <li key={idx} className="py-2 text-center">
            <div className='flex gap-28 items-center justify-center'>
              <img src={curr.image} alt={curr.name} className='w-24 h-24'/>
              <span>{curr.category}</span>
              <span>{curr.quantity}</span>
              <span>${curr.price}</span>
            </div>
          </li>
        ))}
      </ul>
     
      <div className="py-4 text-center font-bold">
        Total: ${totalCost}
      </div>
    </div>
  );
};

export default Cart;