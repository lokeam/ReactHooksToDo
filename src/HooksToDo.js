import React, { useEffect } from 'react';
import useToDoState from './hooks/useToDoState';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

import { TodosProvider } from './context/todos.context';

function HooksToDo() {
  const initialTodos = [{id: 1, task: "Learn React Hooks", completed: false}];
  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useToDoState(initialTodos);

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
            <TodosProvider>
              <ToDoForm addTodo={addTodo} />
              <ToDoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo}/>
            </TodosProvider>
          </Grid>
        </Grid>
      </Paper>
  );
}

export default HooksToDo;