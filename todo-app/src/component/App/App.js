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

  char="";

  constructor(props) {
    super(props);
    this.state = {
      todoList: this.todoList,
      clearListFlag: false,
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
    if (!this.state.clearListFlag) { this.todoList.push(todo) }


    // this.handleSearch(this.char);
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
    // this.handleSearch(this.char);
  }
  
  handleSearch = char => {
    const todoList = this.state.tempList;
    this.char = char;
    this.setState({
      todoList: todoList.filter(todo => todo.indexOf(char) > -1 || todo.indexOf(char.toUpperCase())> -1)
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if (this.state.todoList !== prevState.todoList) {
      console.log(`this.state.todoList: ${this.state.todoList.length}`);
      console.log(`prevState.todoList: ${prevState.todoList.length}`) 
    }
  }

  // getSnapshotBeforeUpdate(prevProps, prevState){
  //      this.handleSearch(this.char);
  //      return
  // }

  render() {
    const { todoList } = this.state;
    console.log(todoList);
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
