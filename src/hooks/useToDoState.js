import { useState } from 'react';
import uniqueID from 'uuid/v4';

export default initialTodos => {
  /* Behold, React hooks */
  const [ todos, setTodos ] = useState(initialTodos);

  const addTodo = newTodoText => {
    setTodos( [...todos, {id: uniqueID(), task: newTodoText, completed: false}] );
  };
  const removeTodo = todoId => {
    /* filer out removed to do item */
    const updatedTodos = todos.filter( todo => todo.id !== todoId );
    setTodos(updatedTodos);
  };
  const toggleTodo = todoId => {
    const updatedTodos = todos.map( todo =>
      todo.id === todoId ? {...todo, completed: !todo.completed} : todo
    );
    setTodos(updatedTodos);
  };
  const editTodo = ( todoId, newTask ) => {
    const updatedTodos = todos.map( todo =>
      todo.id === todoId ? {...todo, task: newTask } : todo
    );
    setTodos(updatedTodos);
  }

  return {
    todos, addTodo, removeTodo, toggleTodo, editTodo
  };
};
