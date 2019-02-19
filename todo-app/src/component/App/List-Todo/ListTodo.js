import React, { Component } from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>#</th>
                <th>Task</th>
                <th>(X)</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {

    const rows = props.todoList.map((row, index) => {
        return (
            <tr key={index}>
                <td>Task {index+1}</td>
                <td>{row}</td>
                <td><button onClick={() => props.removeTodo(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}


class ListTodo extends React.Component {

    render() {
        const { todoList, removeTodo } = this.props; 

        return (
            <table>
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