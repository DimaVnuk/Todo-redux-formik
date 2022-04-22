export interface TodoState {
  list: any;
}

export enum TodoOptionType {
  ADD_TODO = 'ADD_TODO',
  DELETE_TODO = 'DELETE_TODO',
	SET_TODO = 'SET_TODO',
	IS_EDIT = 'IS_EDIT'
}


export interface ITodo {
  text: string;
  id: number;
  isEdit?: boolean;
	completed?: boolean;
}
