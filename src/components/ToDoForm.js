import React from 'react';
import useInputState from '../hooks/useInputState';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

function ToDoForm( {addTodo} ) {
  const [ value, handleChange, reset ] = useInputState('');
  return (
    <Paper>
      <form onSubmit={ event => {
        event.preventDefault();
        addTodo(value);
        reset();
      }}>
      <TextField value={ value} onChange={handleChange} />
      </form>
    </Paper>
  );
}

export default ToDoForm;