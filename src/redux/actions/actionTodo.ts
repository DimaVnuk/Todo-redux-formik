import { ITodo } from './../../interfaces/TodoState';
import { TodoOptionType } from '../../interfaces/TodoState';


export function setTodo(payload: ITodo) {
  return { type: TodoOptionType.SET_TODO, payload };
}

export const addTodo = (todo: ITodo) =>{
  return { type: TodoOptionType.ADD_TODO, payload: todo };
};




export const deleteTodo = (id: number) => {
  return { type: TodoOptionType.DELETE_TODO, payload: id };
}

export function toggleEditing(id: number) {
  return { type: TodoOptionType.IS_EDIT, payload: id };
}
