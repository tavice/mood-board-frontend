// Item.js
import React from 'react';

const Item = ({ item }) => {
  return (
    <div>
      <p>Type: {item.type}</p>
      <p>Content: {item.content}</p>
      <p>Position: x:{item.position.x}, y:{item.position.y} </p>
      <p>Rotation: {item.rotation} </p>
      <p>
        size: width:{item.size.width}, height:{item.size.height}
      </p>
    </div>
  );
};

export default Item;
