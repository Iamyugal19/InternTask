import React, { Component } from 'react';
import {apiUsers} from '../../api/api';
import classes from './Users.module.css';
import User from '../User/User';
import {Link} from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';


class Users extends Component{

  state = {
    users: []
  }

  async componentDidMount() {
    this.apiData();
  }

 apiData = async () => {
    const data = await apiUsers();
    this.setState({users: data.data});
    console.log(this.state.users);  
  }
  
  

  render(){
    const users = this.state.users.map(user => {
      return (
      <Link to = {'/' + user.id} key = {user.id} className = {classes.Link}><User name = {user.name} email = {user.email} id = {user.id} /></Link>);
    });
    return(
        <div className = {classes.Blog}>
        <SearchBar data = {this.state.users} />
        <div className = {classes.Users}>
        {users}
      </div>
        </div>
    );
  }
}

export default Users;