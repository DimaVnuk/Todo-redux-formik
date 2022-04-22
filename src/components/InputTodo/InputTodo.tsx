import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import './InputTodo.css';
import { useDispatch } from 'react-redux';
import { addTodo, deleteTodo, renameTodo, toggleEditing } from '../../redux/actions/actionTodo';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { ITodo } from '../../interfaces/TodoState';

const InputTodo = () => {
  const initialValues = { task: '' };
  const [valueInput, setValueInput] = useState('');
  const todo = useTypeSelector<any>((state) => state.todos);
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    setValueInput(e.target.value);
  };
  const item: ITodo = {
    text: valueInput,
    id: Date.now(),
    isEdit: false,
  };

  console.log(todo);
  const handleAddTodo = (e: any) => {
    e.preventDefault();

    if (!!valueInput) {
      dispatch(addTodo(item));
    }

    setValueInput('');
  };

  const handleDeleteTodo = (id: number) => () => {
    dispatch(deleteTodo(id));
  };

  const handleUpdateTodo = (id: number) => () => {
    dispatch(toggleEditing(id));
  };

  const handleRenameTodo = (id: number) => (e: any) => {
    dispatch(renameTodo(id, e));
  };
  return (
    <div className='input-cont'>
      <h1>Todo-Redux</h1>
      <Formik initialValues={initialValues} onSubmit={handleAddTodo}>
        <Form>
          <Field id='task' name='task' placeholder='Add task' onChange={handleChange} value={valueInput} />
          <button type='submit' onClick={handleAddTodo}>
            Submit
          </button>
        </Form>
      </Formik>
      <div>
        {todo.map(({ id, text, isEdit }: ITodo) => {
          return (
            <p key={id}>
              {!isEdit ? (
                text
              ) : (
                <>
                  <input type='text' value={text} onChange={handleRenameTodo(id)} />
                </>
              )}
              {!isEdit ? <button onClick={handleUpdateTodo(id)}>Change</button> : <button onClick={handleUpdateTodo(id)}>Save</button>}

              <button onClick={handleDeleteTodo(id)}>X</button>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default InputTodo;
