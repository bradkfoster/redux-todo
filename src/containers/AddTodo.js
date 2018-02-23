import React, { Component } from 'react';

import { addTodo } from '../actions/todoActions';
import { connect } from 'react-redux';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      todoInput: ''
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.focusTextInput = this.focusTextInput.bind(this);
  }
  
  handleChange(event) {
    this.setState({ todoInput: event.target.value });
  }

  focusTextInput() {
    this.textInput.focus();
  }

  handleSubmit(event) {
    event.preventDefault();
    const todo = this.state.todoInput.trim();

    if(todo) {
      this.props.addTodo(todo);
    }
    this.setState({ todoInput: '' });
    this.focusTextInput()
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          id="todoInput"
          ref={(input) => { this.textInput = input; }}
          value={this.state.todoInput} 
          onChange={this.handleChange} 
          placeholder="new todo..."
        />
        <button type="submit">Add Todo</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos.todos,
    nextId: state.todos.nextId
  }
}

const mapDispatchToProps = {
  addTodo
}

const ConnectedAddTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo)
export default ConnectedAddTodo 