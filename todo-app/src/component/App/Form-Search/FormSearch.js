import React, {Component} from 'react';

class FormSearch extends Component{

    constructor(props){
        super(props);
    }

    handleSearch = event =>{
        const {value} = event.target;
        this.props.handleSearch(value)
        this.setState({})
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