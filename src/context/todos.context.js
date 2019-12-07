import React, { createContext } from 'react';
import useToDoState from '../hooks/useToDoState';

const defaultTodos = [
  { id: 1, task: 'Code every day', completed: false },
  { id: 2, task: 'Hit the sauna, sweat a lot', completed: false }
];

export const TodosContext = createContext();

export function TodosProvider(props) {
  const todoMethods = useToDoState( defaultTodos);

  return (
    <TodosContext.Provider value={ todoMethods }>
      { props.children }
    </TodosContext.Provider>
  );
}