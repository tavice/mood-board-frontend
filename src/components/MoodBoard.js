// MoodBoard.js
import React from 'react';
import Item from './Item';

const MoodBoard = ({ moodBoard }) => {
  return (
    <div>
      <h2>{moodBoard.name}</h2>
      {moodBoard.items.map(item => <Item key={item._id} item={item} />)}
    </div>
  );
};

export default MoodBoard;
