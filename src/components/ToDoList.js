import React from 'react';
import ToDoListItem from './ToDoListItem.js';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

function ToDoList( {todos, removeTodo, toggleTodo, editTodo} ) {
  if (todos.length) {
    return (
      <Paper>
        <List>
          {todos.map( (todo, i) => (
            <>
              <ToDoListItem
                    {...todo}
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
  return null;
}

export default ToDoList;