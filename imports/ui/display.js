import React, { Component } from 'react';
import User from './user';
export default class Display extends Component {
    
    render() {
        return (
            <div id="display">
            {
                (this.props.data.items)? (
                        this.props.data.items.map((user)=>{
                            return <User userData = { user } key = {user.login}/>
                        })
                ): " "
            }
            </div>
        );
    }
}