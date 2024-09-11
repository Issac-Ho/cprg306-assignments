import React from 'react';
import ItemList from './item-list';

const Page = () => {
  return (
    <main className="p-2 min-h-screen ">
      <h1 className="text-3xl font-bold text-left mb-4">Shopping List</h1>
      
      <ItemList />
    </main>
  );
};

export default Page;
