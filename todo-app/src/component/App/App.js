import React, { Component } from 'react';
import './App.css';
import FormSearch from './Form-Search/FormSearch';
import FormNewTodo from './Form-New-Todo/FormNewTodo';
import ListTodo from './List-Todo/ListTodo';

class App extends Component {

  todoList = [
    "Finish Redux Tutorials",
    "Learn more about Relay",
    "Build 5 more React apps",
    "Review React Component Lifecycle",
    "Obtain Data Visualization Certificate",
    "Review Algorithms",
    "Tweet Progress",
    "Get a coffee!",
    "Browse Google Fonts",
    "Learn more about React Native"
  ]

  constructor(props) {
    super(props);
    this.state = {
      todoList: this.todoList,
      clearList: false
    };
  }

  removeTodo = index => {
    const { todoList } = this.state;

    this.setState({
      todoList: todoList.filter(
        (todo, i) => i !== index
      )
    })
  }

  handleSubmit = todo => {
    this.setState(
      { todoList: [...this.state.todoList, todo] }
    );
      this.todoList.push(todo);
  }

  clearList = () => {
    this.setState({
      todoList: []
    })
  }

  resetList = () => {
    this.setState({
      todoList: this.todoList
    })
  }

  render() {
    const { todoList } = this.state;
    return (
      <div>
        <FormNewTodo handleSubmit={this.handleSubmit} />
        <FormSearch />
        <ListTodo todoList={todoList} removeTodo={this.removeTodo} />
        <button onClick={this.clearList}>Clear the List</button>
        <button onClick={this.resetList}>Reset the List</button>
      </div>
    )
  }
}

export default App;
