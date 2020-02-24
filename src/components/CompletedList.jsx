import React from 'react';
import { ItemCompleted } from './ItemCompleted';

export const CompletedList = ({ list }) => {
  const emptyList = <li className="empty">У вас нет выполеннных задач</li>;
  const completedTasks = list
    .filter(item => item.done === true)
    .map((elem, i) => <ItemCompleted key={elem.id} text={elem.text} idx={i + 1}/>);
  return (
    <div className="container">
      <ul className="collection">
        { completedTasks.length ? completedTasks : emptyList }
      </ul>
    </div>
  )
};