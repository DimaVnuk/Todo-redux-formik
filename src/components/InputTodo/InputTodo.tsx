import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import './InputTodo.css';
import { useDispatch } from 'react-redux';
import { addTodo, deleteTodo, toggleEditing } from '../../redux/actions/actionTodo';
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

  const onUpdateTodo = (id: number) => () => {
    dispatch(toggleEditing(id));
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
            <ul key={id}>
              <li>
                {!isEdit ? (
                  text
                ) : (
                  <>
                    <input type='text' />
                  </>
                )}
                {!isEdit ? <button onClick={handleDeleteTodo(id)}>X</button> : <button>Save</button>}
                <button onClick={onUpdateTodo(id)}>Change</button>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default InputTodo;
