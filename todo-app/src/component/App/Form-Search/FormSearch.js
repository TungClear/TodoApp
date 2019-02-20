import React, {Component} from 'react';

class FormSearch extends Component{

    constructor(props){
        super(props);
        this.state = {
            search: ""
        }
    }

    handleSearch = event =>{
        const {value} = event.target;
        this.props.handleSearch(value);
        console.log(`value: ${value}`);
        this.setState({search:value});
        console.log(`value in state: ${this.state.search}`)
    }
    
    render(){
        return(
            <form>
                <input type="text" placeholder="filter list" onChange={this.handleSearch}/>
            </form>
        );
    }
}

export default FormSearch;