"use client";

import React, { useState } from 'react';
import Item from './item'; 
import itemsData from './items.json'; 

const ItemList = () => {
  const [sortBy, setSortBy] = useState('name');
  const [grouped, setGrouped] = useState(false);

  const [active, setActive] = useState('b1'); 

  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
  });

  const groupedItems = itemsData.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const sortedGroupedItems = Object.keys(groupedItems)
    .sort()
    .reduce((acc, category) => {
      acc[category] = groupedItems[category].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      return acc;
    }, {});

  const handleSort = (sortType, buttonId) => {
    setGrouped(false); 
    setSortBy(sortType);
    setActive(buttonId);
  };

  const handleGroupByCategory = () => {
    setGrouped(true); 
    setActive('b3'); // Set the grouped category button as active
  };

  return (
      <div>
      <label for="sort">Sort by: </label>
        <button
          onClick={() => handleSort('name', 'b1')}
          class={`p-1 m-2 w-28  ${sortBy === 'name' } ${active === 'b1' ? 'bg-orange-500' : 'bg-orange-700'}`}
        >
          Name
        </button>
        <button
          onClick={() => handleSort('category', 'b2')}
          class={`p-1 m-2 w-28  ${sortBy === 'category'} ${active === 'b2' ? 'bg-orange-500' : 'bg-orange-700'}`}
        >
          Category
        </button>
        <button 
          onClick={handleGroupByCategory}
          class={`p-1 m-2 w-28 ${active === 'b3' ? 'bg-orange-500' : 'bg-orange-700'}`}
        >
          Grouped Category
        </button>

        <ul>
        {grouped
          ? Object.keys(sortedGroupedItems).map((category) => (
              <div key={category}>
                <h3 className="capitalize text-xl mb-2">{category}</h3>
                {sortedGroupedItems[category].map((item) => (
                  <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                  />
                ))}
              </div>
            ))
          : sortedItems.map((item) => (
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

