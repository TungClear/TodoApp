import React, {Component} from 'react';
import './Title.css';
class Title extends React.Component{

    render(){
        return(
            <div className="titles">
                <h1 className="title">React To-Do App</h1>
                <h2 className="subtitle">Enhance Your Productivity</h2>
            </div>
        )
    }
}

export default Title;