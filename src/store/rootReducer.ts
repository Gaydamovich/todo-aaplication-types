import { LIST } from '../Constants/constants';

type Action = {
  type: string,
  text?: string,
  id?: number,
}

export type ItemType = {
  id: number,
  text: string | undefined,
  done: boolean,
}

export interface InterfaceInitialState {
  list: Array<ItemType>;
}

export type Reducer = (s: InterfaceInitialState, a: Action) => InterfaceInitialState;

const initialState: InterfaceInitialState = {
  list: JSON.parse(<string>localStorage.getItem(LIST)) || [],
};

export const rootReducer = (state = initialState, action: Action): InterfaceInitialState => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        list: [
          {
            id: Date.now(),
            text: action.text,
            done: false,
          },
          ...state.list,
        ]
      };
    case 'REMOVE_TASK':
      return {
        ...state,
        list: state.list.filter(i => i.id !== action.id),
      };
    case 'DONE_TASK':
      return {
        ...state,
        list: state.list.map(i => {
          if (i.id === action.id) {
            i.done = !i.done;
          }
          return i;
        }),
      };
    default:
      return state;
  }
};