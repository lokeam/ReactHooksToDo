import React from 'react';
import ToDo from './ToDo.js';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

function ToDoList( {todos, removeTodo, toggleTodo, editTodo} ) {
  return (
    <Paper>
      <List>
        {todos.map( (todo, i) => (
          <>
            <ToDo task={todo.task}
                  key={todo.id}
                  id={todo.id}
                  completed={todo.completed}
                  removeTodo={removeTodo}
                  toggleTodo={toggleTodo}
                  editTodo={editTodo}
            />
           { i < todos.length - 1 && <Divider /> }
          </>
        ))}
      </List>
    </Paper>
  );
}

export default ToDoList;