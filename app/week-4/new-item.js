"use client";

import React, { useState } from 'react';
  const NewItem = () => {
    const [quantity, setQuantity] = useState(1);
  
    const increment = () => {
      setQuantity((prev) => Math.min(prev + 1, 10000));
    };
  
    const decrement = () => {
      setQuantity((prev) => Math.max(prev - 1, 1));
    };

  return (
    <div class="p-2 m-4 bg-white text-white w-36">
        <div class="flex justify-between">
            <span class="text-black">{quantity}</span>
            <div class="flex">
                <button 
                    type="button" 
                    onClick={decrement}
                    disabled={quantity === 1}
                    class="w-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-blue-400 focus:ring-opacity-75"
                >
                  -
                </button>
                <button 
                    type="button" 
                    onClick={increment}
                    class="w-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400  disabled:bg-gray-400 focus:ring-opacity-75 ml-1"
                >
                  +
                </button>
            </div>
        </div>
    </div>
  );
};

export default NewItem;
