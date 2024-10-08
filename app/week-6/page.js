import React from 'react';
import ItemList from './item-list';

const Page = () => {
  return (
    <main className="bg-slate-950">
      <div class="m-4">
      <h2 class="text-3xl font-bold m-2">Shopping List</h2>
      <ItemList />
      </div>
    </main>
  );
};

export default Page;
