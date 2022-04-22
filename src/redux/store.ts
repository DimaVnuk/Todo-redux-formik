import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducerTodo } from './reducers/reducerTodo';


declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  todos: reducerTodo,
});

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))