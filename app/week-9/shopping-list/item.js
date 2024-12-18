import React from 'react';

const Item = ({ name, quantity, category, onSelect }) => {
  return (
    <li class="p-2 m-4 bg-slate-900 max-w-sm cursor-pointer" onClick={() => onSelect(name)}>
      <h2 class="text-xl font-bold">{name}</h2>
      <div class="text-sm ">Buy {quantity} in {category}</div>
    </li>
  );
};

export default Item;