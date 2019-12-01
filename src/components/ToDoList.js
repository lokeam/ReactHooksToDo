import React from 'react';
import Todo from './Todo.js';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

function ToDoList( {todos, removeTodo, toggleTodo} ) {
  return (
    <Paper>
      <List>
        {todos.map( todo => (
          <Todo task={todo.task}
                key={todo.id}
                id={todo.id}
                completed={todo.completed}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
          />
        ))}
      </List>
    </Paper>
  );
}

export default ToDoList;