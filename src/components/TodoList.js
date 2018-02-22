import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

const TodoList = ({ todos, handleTodoClick }) => (
  <ul>
    {todos.map((todo, idx) => {
      return (
        <Todo 
          key={todo.id} 
          item={todo.item} 
          completed={todo.completed}
          onClick={() => handleTodoClick(todo.id)}
        />
      )
    })}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleTodoClick: PropTypes.func.isRequired
}

export default TodoList;