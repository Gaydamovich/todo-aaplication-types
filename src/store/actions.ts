export interface IAddTask {
  type: string
  text: string
}

export interface IRemoveTask {
  type: string
  id: number
}

export interface IDoneTask {
  type: string
  id: number
}

export const addTaskToOrganizer = (text: string): IAddTask => ({
  type: 'ADD_TASK',
  text,
});

export const removeTask = (id: number): IRemoveTask => ({
  type: 'REMOVE_TASK',
  id,
});

export const doneTask = (id: number): IDoneTask => ({
  type: 'DONE_TASK',
  id,
});
