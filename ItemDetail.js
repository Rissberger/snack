// ItemDetail.jsx
import React from 'react';

function ItemDetail({ item }) {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      {/* Display more item details here */}
    </div>
  );
}

export default ItemDetail;
