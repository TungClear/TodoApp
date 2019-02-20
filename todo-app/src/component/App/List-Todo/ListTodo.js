import React, { Component } from 'react';
import './ListTodo.css';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th className="todoNumber">#</th>
                <th className="todoItem">Task</th>
                <th>(X)</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {

    const rows = props.todoList.map((row, index) => {
        return (
            <tr key={index}>
                <td className="todoNumber">Task {index+1}</td>
                <td className="todoItem">{row}</td>
                <td><button className="remove" onClick={() => props.removeTodo(index)}>X</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}


class ListTodo extends React.Component {

    render() {
        const { todoList, removeTodo } = this.props; 

        return (
            <table className="todoTable">
                <TableHeader />
                <TableBody 
                    todoList={todoList} 
                    removeTodo={removeTodo} 
                />
            </table>
        );
    }
}

export default ListTodo;