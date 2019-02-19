import React, {Component} from 'react';

class FormNewTodo extends Component{

    constructor(props){
        super(props);
        this.state = {
            todo: ""
        };
    }

    handleOnchange = event => {
        const {value} = event.target;
        this.setState({
            todo: value
        });
    }

    submitForm = () => {
        if(!this.state.todo) return;
        this.props.handleSubmit(this.state.todo);
        this.setState({todo:""});
    }

    render(){
        const {todo} = this.state;

        return(
            <form>
                <input type="text" value={todo}  placeholder="create new work item" onChange={this.handleOnchange}/>
                <br />
                <button type="button" onClick={this.submitForm}>Enter New Item</button>
            </form>
        );
    }
}

export default FormNewTodo;