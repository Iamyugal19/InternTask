import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {apiPosts} from '../../api/api';
import classes from './Posts.module.css';
import Post from './Post/Post';
import Spinner from './../Spinner/Spinner'
class Posts extends Component{

    state = {
        posts: []
    }

    async componentDidMount(){
        this.fetchPosts();
    }   
    
    fetchPosts = async  () => {
       const posts = await apiPosts(this.props.match.params.id);
        this.setState({posts: posts.data});
    }

    render(){
        let PostsData  = null;
        if(!this.state.post){
          PostsData =  <Spinner />
        }

       PostsData = this.state.posts.map(post => {
            return <Post title = {post.title} body = {post.body} key = {post.id} />
        });
        return(
            <div  className = {classes.Posts}>
                {PostsData}
            </div>
        );
    }
}

export default withRouter(Posts);