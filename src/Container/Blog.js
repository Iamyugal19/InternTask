import React, { Component } from 'react';
import Users from '../Components/Users/Users';
import { Route, Redirect} from 'react-router';
import Posts from '../Components/Posts/Posts';

class Blog extends Component{
    render(){
        return(
            <div style = {{textAlign: "center",justifyContent: 'center'}}>
            <Route path = '/'  exact component = {Users} />
            <Route path = '/:id' exact component = {Posts} />
            <Redirect path = " /" />
            </div>
        );
    }
}
export default Blog;