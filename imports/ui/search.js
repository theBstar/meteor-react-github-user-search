import React, { Component } from 'react';

export default class Search extends Component {
    
    render() {
        return (
            <div id="search">
                    <input
                        onChange = { this.props.handleChange }
                        value = { this.props.input }
                        onKeyPress= { this.props.onKey }
                        placeholder = "Search new User"
                    />
                    <button 
                        onClick = {this.props.formSubmit}
                    >
                    Search
                    </button>
            </div>
        );
    }
}