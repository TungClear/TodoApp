import React, { Component } from 'react';
import './FormSearch.css';

class FormSearch extends Component {

    handleSearch = event => {
        const { value } = event.target;
        this.props.handleSearch(value);
    }

    render() {
        return (
            <form>
                <input type="text" className="search" placeholder="filter list" onChange={this.handleSearch} />
            </form>
        );
    }
}

export default FormSearch;