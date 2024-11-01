"use client";

import React, { useState } from 'react';
import NewItem from './new-item'; 
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import itemsData from './items.json'; 


const Page = () => {
  const [items, setItems] = useState(itemsData); 
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]); 
  };

  const handleItemSelect = (itemName) => {
    const cleanedName = itemName
      .split(',')[0]
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, '') 
      .trim();

    setSelectedItemName(cleanedName); 
  };

  return (
    <main className="bg-slate-950 p-2 m-2">
      <h2 className="text-3xl font-bold mb-4">Shopping List</h2>
      <div className="flex">
        <div className="flex-1 max-w-sm m-2">

          <NewItem onAddItem={handleAddItem} />

          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div className="flex-1 max-w-sm m-2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
};

export default Page;
