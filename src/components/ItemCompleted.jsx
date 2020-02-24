import React from 'react';

export const ItemCompleted = ({ idx, text }) => {
  return (
    <li className="collection-item item">
      <div>
        <span className="counter">{idx}</span>
        <span>{text}</span>
      </div>
      <span>Задача выполненна</span>
    </li>
  )
};