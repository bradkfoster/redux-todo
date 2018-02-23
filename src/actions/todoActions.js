export const ADD_TODO = 'ADD_TODO';
export const INCREMENT_NEXT_ID = 'INCREMENT_NEXT_ID';

export const addTodo = (todo) => {

  const newTodo = {
    item: todo,
    completed: false
  }
  return {
    type: ADD_TODO,
    todo: newTodo
  }
}