import React from 'react';
import useToggleState from '../hooks/useToggleState';
import EditToDoListItem from './EditToDoListItem';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

function ToDoListItem( { task, completed, removeTodo, id , toggleTodo, editTodo } ) {
  const [ isEditing, toggle ] = useToggleState(false);
  return (
    <ListItem style={{height: `65px`}}>
      { isEditing ? (<EditToDoListItem editTodo={editTodo} id={id} task={task} toggleEditItem={toggle} />) : (
        <>
          <Checkbox tabIndex={-1} checked={completed} onClick={ () => toggleTodo(id) }/>
          <ListItemText style={{textDecoration: completed ? 'line-through' : 'none'}} >{task}</ListItemText>
          <ListItemSecondaryAction>
          <IconButton aria-label="Edit Item" onClick={ toggle }>
              <EditIcon />
            </IconButton>
            <IconButton aria-label="Delete Item" onClick={ () => removeTodo(id) }>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default ToDoListItem;
