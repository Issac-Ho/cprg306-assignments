import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="p-2 shadow-md mb-4 ml-2 bg-blue-950 w-96 h-16">
      <h2 className="text-xl font-bold text-white-800">{name}</h2>
      <p className="text-s text-white-600">Buy {quantity} in {category}</p>
    </li>
  );
};

export default Item;