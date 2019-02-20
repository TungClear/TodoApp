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
      clearListFlag: false,
      tempList: this.todoList,
      searchText: ''
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
    if (!this.state.clearListFlag) { this.todoList.push(todo) }
  }

  clearList = () => {
    this.setState({
      todoList: [],
      tempList: [],
      clearListFlag: true
    })
  }

  resetList = () => {
    this.setState({
      todoList: this.todoList,
      tempList: this.todoList,
      clearListFlag: false
    });
  }

  handleSearch = searchText => {
    this.setState({ searchText });
  }

  getListToDo = () => {
    const { todoList, searchText } = this.state;
    return todoList.filter(
      todo =>
        todo.indexOf(searchText) > -1 ||
        todo.indexOf(searchText.toUpperCase()) > -1
    );
  };

  render() {
    const { todoList } = this.state;
    return (
      <React.Fragment>
        <FormNewTodo handleSubmit={this.handleSubmit} />
        <FormSearch handleSearch={this.handleSearch} />
        <ListTodo todoList={this.getListToDo()} removeTodo={this.removeTodo} />
        <button onClick={this.clearList} className="clear">Clear the List</button>
        <button onClick={this.resetList} className="reset">Reset the List</button>
      </React.Fragment>
    )
  }
}

export default App;
