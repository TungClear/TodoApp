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
      clearList: false,
      tempList: this.todoList
    };
  }

  removeTodo = index => {
    const { todoList } = this.state;
    const { tempList } = this.state;
    this.setState({
      todoList: todoList.filter(
        (todo, i) => i !== index
      ),
      tempList: tempList.filter(
        (todo, i) => i !== index
      )
    })
  }

  handleSubmit = todo => {
    this.setState({ 
      todoList: [...this.state.todoList, todo],
      tempList: [...this.state.tempList, todo]
    });
    if (!this.state.clearList) { this.todoList.push(todo) }
  }

  clearList = () => {
    this.setState({
      todoList: [],
      tempList: [],
      clearList: true
    })

  }

  resetList = () => {
    this.setState({
      todoList: this.todoList,
      tempList: this.todoList,
      clearList: false
    })
  }
  
  handleSearch = char => {
    const todoList = this.state.tempList;
    this.setState({
      todoList: todoList.filter(todo => todo.indexOf(char) > -1 || todo.indexOf(char.toUpperCase())> -1)
    })
  }

  render() {
    const { todoList } = this.state;
    return (
      <div>
        <FormNewTodo handleSubmit={this.handleSubmit} />
        <FormSearch handleSearch={this.handleSearch} />
        <ListTodo todoList={todoList} removeTodo={this.removeTodo} />
        <button onClick={this.clearList} className="clear">Clear the List</button>
        <button onClick={this.resetList} className="reset">Reset the List</button>
      </div>
    )
  }
}

export default App;
