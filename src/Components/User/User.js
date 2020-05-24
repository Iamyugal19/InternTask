import React, { Component } from 'react';
import classes from './User.module.css';


class User extends Component {
    state 
    render() {
        return (
            <div className = {classes.User}>
            
                <div className = {classes.Id}><strong>UserId: </strong>{this.props.id}</div>
                <div className = {classes.UserName}>{this.props.name}</div>
            </div>
        )
    }
}
export default User;
