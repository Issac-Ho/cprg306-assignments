"use client";

import React, { useState } from 'react';
import NewItem from './new-item'; 
import ItemList from './item-list';
import itemsData from './items.json'; 


const Page = () => {
  const [items, setItems] = useState(itemsData); 

  // Event handler to add a new item
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]); 
  };

  return (
    <main className="bg-slate-950 m-2 p-2">
      <div className="max-w-sm w-full">
        <h2 className="text-3xl font-bold mb-4 ">Shopping List</h2>

        <NewItem onAddItem={handleAddItem} />

        <ItemList items={items} />
      </div>
    </main>
  );
};

export default Page;
