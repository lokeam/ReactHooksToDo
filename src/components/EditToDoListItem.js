import React from 'react';
import useInputState from '../hooks/useInputState';
import TextField from '@material-ui/core/TextField';

function EditToDoListItem( {id, task, editTodo, toggleEditItem} ) {
  const [ value, handleChange, reset ] = useInputState(task);
  return (
    <form
      style={{marginLeft: `1rem`, width: `50%`}}
      onSubmit={ (event) =>  {
      event.preventDefault();
      editTodo(id, value);
      reset();
      toggleEditItem();
    }}>
      <TextField 
      margin="normal"
      value={value}
      onChange={handleChange}
      fullWidth
    />
    </form>
  );
}

export default EditToDoListItem;
