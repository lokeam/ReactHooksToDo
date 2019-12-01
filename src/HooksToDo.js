import React, { useState } from 'react';
import ToDoList from './ToDoList';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

function HooksToDo() {
  const initialTodos = [
    {id: 1, task: 'Exercise', completed: 'false'},
    {id: 2, task: 'Push code to Github', completed: 'false'},
    {id: 3, task: 'Purchase groceries', completed: 'false'},
    {id: 4, task: 'Pay bills', completed: 'false'},
    {id: 5, task: 'Call parents', completed: 'false'},

  ]
  const [todos, setTodos] = useState(initialTodos);
  return (
      <Paper style={{
          padding: 0,
          margin: 0,
          height: `100vh`,
          backgroundColor: `#fafafa`
        }}
        elevation={0}
      >
        <AppBar
          color={`primary`}
          position={`static`}
          style={{
            height: `64px`
          }}>
            <ToolBar>
              <Typography color="inherit">Todo App using Hooks</Typography>
            </ToolBar>
        </AppBar>
        <ToDoList todos={todos} />
      </Paper>
  );
}

export default HooksToDo;