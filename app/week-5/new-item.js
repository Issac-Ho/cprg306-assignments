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
    <form class="p-2 m-4 bg-slate-900 text-black max-w-sm w-full">
      <div class="mb-2">
        <input type="text" placeholder="Item name" required="" class="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans" value=""/>
      </div>
      <div class="flex justify-between">
        <div class="p-2 mt-1 mb-1 rounded-md  bg-white text-white w-36">
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
        <select class="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans">
          <option value="" selected="true" disabled="disabled">Category</option>
          <option value="produce" selected="true">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button 
        type="submit" 
        class="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
    >
      +
      </button>
    </form>

  );
};

export default NewItem;
