import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

function HooksToDo() {
  const initialTodos = [
    {id: 1, task: 'Exercise', completed: true},
    {id: 2, task: 'Push code to Github', completed: true},
    {id: 3, task: 'Purchase groceries', completed: true},
    {id: 4, task: 'Pay bills', completed: false},
    {id: 5, task: 'Call parents', completed: false}
  ]
  const [ todos, setTodos ] = useState(initialTodos);
  const addTodo = newTodoText => {
    setTodos( [...todos, {id: 6, task: newTodoText, completed: false}] );
  }
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
        <Grid container justify={'center'} style={{marginTop: '1rem'}}> 
          <Grid item xs={11} md={8} lg={4}>
            <ToDoForm addTodo={addTodo} />
            <ToDoList todos={todos} />
          </Grid>
        </Grid>
      </Paper>
  );
}

export default HooksToDo;