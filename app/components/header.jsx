"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import image from "../img/images.png";
import Link from 'next/link';

const Header = () => {
   
    return (
        <div className="container bg-gray-50  h-16 flex items-center justify-between px-4">

            <div className='flex'>
                <Image src={image} alt='logo' style={{ width: "100px", height: "50px" }} />
            </div>


            <div className='flex flex-grow justify-center'>
                <ul className='flex gap-4'>


                    <li className='mr-4 ' ><Link href="/" className='hover:scale-105 hover:border-b-2 transition-transform hover:border-blue-500'>Home</Link></li>
                    <li className='mr-4'><Link href="/products" className='hover:scale-105 hover:border-b-2 transition-transform hover:border-blue-500'>Products</Link></li>
                    <li className='mr-4'><Link href='/cart' className='hover:scale-105 hover:border-b-2 transition-transform hover:border-blue-500'>Cart</Link></li>
                </ul>
            </div>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</button>
            <button type="button" className="text-blue-500 focus:ring-4 focus:ring-blue-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-200 focus:outline-none">Register</button>
        </div>
    );
};

export default Header;
