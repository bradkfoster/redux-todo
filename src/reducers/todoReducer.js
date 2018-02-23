import { ADD_TODO } from '../actions/todoActions';

const initialState = {
  nextId: 4,
  todos: [
    { id: 1, item: 'feed cat', completed: false },
    { id: 2, item: 'pickup food', completed: false },
    { id: 3, item: 'foo', completed: false }
  ]
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_TODO:
      action.todo.nextId = state.nextId;
      const updatedTodos = state.todos.concat(action.todo);
      // const newState =  Object.assign({}, state, { todos: updatedTodos, nextId: state.nextId + 1})
      return { ...state, todos: updatedTodos, nextId: state.nextId + 1 }
    default:
      return state;
  }
}