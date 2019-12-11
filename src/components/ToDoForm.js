import React, { useContext } from 'react';
import useInputState from '../hooks/useInputState';
import { DispatchContext } from '../context/todos.context';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

function ToDoForm() {
  const [ value, handleChange, reset ] = useInputState('');
  const dispatch = useContext(DispatchContext);
  return (
    <Paper style={{margin: '1rem 0', padding: '0 1rem'}}>
      <form onSubmit={ event => {
        event.preventDefault();
        dispatch( {type: 'ADD', task: value} );
        reset();
      }}>
      <TextField value={ value} onChange={handleChange} margin='normal' label='Add something to do' fullWidth/>
      </form>
    </Paper>
  );
}

export default ToDoForm;