import React from 'react';
import { Form } from './Form';
import { List } from './List';
import { InterfaceInitialState } from '../store/rootReducer';

interface Props {
    addTaskToOrganizer: (t: string) => void
    list: InterfaceInitialState | any
    removeTask: (t: number) => void
    doneTask: (t: number) => void
}

export const Main = ({ addTaskToOrganizer, list, removeTask, doneTask }: Props) => (
  <>
    <Form
      addTaskToOrganizer={addTaskToOrganizer}
    />
    <List
      list={list}
      removeTask={removeTask}
      doneTask={doneTask}
    />
  </>
);