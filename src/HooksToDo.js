import React, { useState, useEffect } from 'react';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import uniqueID from 'uuid/v4';

function HooksToDo() {
  const initialTodos = JSON.parse(window.localStorage.getItem('todos')) || '[]';

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

  /* local storage all the things */
  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

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
            <ToDoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo}/>
          </Grid>
        </Grid>
      </Paper>
  );
}

export default HooksToDo;