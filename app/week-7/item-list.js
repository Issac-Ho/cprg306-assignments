"use client";

import React, { useState } from 'react';
import Item from './item'; 

const ItemList = ({ items }) => {
  const [sortBy, setSortBy] = useState('name');
  const [active, setActive] = useState('b1'); 

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const handleSort = (sortType, buttonId) => {
    setSortBy(sortType);
    setActive(buttonId);
  };

  return (
      <div class="mt-8">
      <label htmlFor="sort">Sort by: </label>
        <button
          onClick={() => handleSort('name', 'b1')}
          class={`p-1 m-2 w-28 ${active === 'b1' ? 'bg-orange-500' : 'bg-orange-700'}`}
        >
          Name
        </button>
        <button
          onClick={() => handleSort('category', 'b2')}
          class={`p-1 m-2 w-28 ${active === 'b2' ? 'bg-orange-500' : 'bg-orange-700'}`}
        >
          Category
        </button>

        <ul>
        { sortedItems.map((item) => (
              <Item
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
              />
            ))}
      </ul>
    </div>
  );
};

export default ItemList;

