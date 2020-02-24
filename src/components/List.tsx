import React, { useEffect } from 'react';
import { Item } from './Item';
import { LIST } from '../Constants/constants';
import { InterfaceInitialState, ItemType } from '../store/rootReducer';

type Props = {
    list: InterfaceInitialState | any
    removeTask: (t: number) => void
    doneTask: (t: number) => void
}

export const List = ({ list, removeTask, doneTask }: Props) => {
  useEffect(() => {
    localStorage.setItem(LIST, JSON.stringify(list))
  }, [list]);
  return (
    <div className="container wrapper-list">
      {list.length ? <p className="list-length">All tasks: {list.length}</p> : void 0}
      <ul>
        {
          list.length ?
            list.map( (item: ItemType, i: number) =>
                <Item key={item.id}
                      index={i + 1}
                      {...item}
                      removeTask={removeTask}
                      doneTask={doneTask}
                />) :
            <p className="warning">Список дел пуст!</p>
        }
      </ul>
    </div>
  )
};