import { AnyAction } from 'redux';

import { TodoOptionType } from '../../interfaces/TodoState';

export function reducerTodo(state = [], action: AnyAction) {
  const edit = state.map((i: any) => (i.id === action.payload ? { ...i, isEdit: !i.isEdit } : i));

  switch (action.type) {
    case TodoOptionType.SET_TODO: {
      return [...state, ...action.payload];
    }
    case TodoOptionType.ADD_TODO: {
      return [...state, action.payload];
    }
    case TodoOptionType.DELETE_TODO: {
      return [...state.filter((i: any) => i.id !== action.payload)];
    }
    case TodoOptionType.IS_EDIT: {
      return edit;
    }
		case TodoOptionType.RENAME_TODO: {
      return state.map((i: any) =>
        i.id === action.payload ? { ...i, text: action.text } : i
      );
    }
    default:
      return state;
  }
}
