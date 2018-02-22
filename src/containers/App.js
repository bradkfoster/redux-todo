import React, { Component } from 'react';
import '../App.css';

import TodoList from '../components/TodoList';
import AddTodo from './AddTodo';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nextId: 4,
      todos: [
        { id: 1, item: 'feed cat', completed: false },
        { id: 2, item: 'pickup food', completed: false },
        { id: 3, item: 'foo', completed: false }
      ]
    };

    this.handleTodoClick = this.handleTodoClick.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(todoItem) {
    this.setState({
      todos: this.state.todos.concat({ id: this.state.nextId, item: todoItem, completed: false }),
      nextId: this.state.nextId + 1
    });
  }

  handleTodoClick(id) {
    const updatedTodos = this.state.todos.map( todo => {
      if(todo.id === id) {
        return Object.assign({}, todo, { completed: !todo.completed });
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }
 
  render() {
    return (
      <div>
        <AddTodo 
          addTodo={this.handleAddTodo}
        />
        <TodoList 
          todos={this.state.todos}
          handleTodoClick={this.handleTodoClick}
        />
      </div>
    );
  }
}

export default App