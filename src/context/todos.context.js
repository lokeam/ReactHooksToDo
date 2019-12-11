import React, { createContext, useReducer } from 'react';
import todoReducer from '../reducers/todo.reducer';

const defaultTodos = [
  { id: 1, task: 'Code every day', completed: false },
  { id: 2, task: 'Hit the sauna, sweat a lot', completed: false }
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [ todos, dispatch ] = useReducer(todoReducer, defaultTodos)
  return (
    <TodosContext.Provider value={ todos }>
      <DispatchContext.Provider value={ dispatch }>
      { props.children }
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}