import React from 'react';
import { Link } from 'react-router-dom';

function ItemList({ items, itemType }) {
  return (
    <div>
      <h2>{itemType === 'snack' ? 'Snacks' : 'Drinks'}</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Link to={`/${itemType}/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
