import React from 'react';
import Todo from './Todo.js';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

function ToDoList(props) {
  return (
    <Paper>
      <List>
        {props.todos.map(todo => (
          <>
            <Todo task={todo.task} key={todo.id} completed={todo.completed}/>
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
}

export default ToDoList;