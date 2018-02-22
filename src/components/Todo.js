import React from 'react';

const Todo = ({ item, completed, onClick }) => {
  return (
    <li 
      onClick={onClick}
      style={{ textDecoration: completed ? 'line-through' : 'none'}}
    >{item}</li>
  )
}

export default Todo