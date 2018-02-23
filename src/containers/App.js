import React, { Component } from 'react';
import '../App.css';

import TodoList from '../components/TodoList';
import AddTodo from './AddTodo';
// import { addTodo } from '../actions/todoActions';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleTodoClick = this.handleTodoClick.bind(this);
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
        <AddTodo />
        <TodoList 
          todos={this.props.todos}
          handleTodoClick={this.handleTodoClick}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos.todos,
    nextId: state.todos.nextId
  }
}

const mapDispatchToProps = dispatch => {
  return { }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
export default ConnectedApp