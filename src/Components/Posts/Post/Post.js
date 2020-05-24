import React from  'react';
import classes from './post.module.css';

const Post = (props) => {
    return(
        <div className = {classes.Post}>
            
        <div className = {classes.Title}><strong>{props.title}</strong></div>
        <br />
        <div className = {classes.body}>{props.body}</div>
    </div>
    );
}
export default Post;