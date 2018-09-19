import React, { Component } from 'react';

export default class User extends Component {
    
    render() {
        return (
            <div className="user">
                <a href={ this.props.userData.html_url } target="_blank">
                    <img className="profile-pic" src = { this.props.userData.avatar_url } alt="user profile" />
                    <div className="profile-text">
                       <p className="profile-name">
                            { this.props.userData.login }
                        </p>
                        <p>
                            { this.props.userData.score }
                        </p>
                    </div>
                </a>    
            </div>
        );
    }
}