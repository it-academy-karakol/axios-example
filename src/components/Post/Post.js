import React from 'react';
import classes from './Post.module.css';

function Post(props) {
  return (
    <div className={classes.Post}>
      <h1>{props.title}</h1>
      <strong>{props.author}</strong>
      <p>{props.body}</p>

      <button>Delete</button>
    </div>
  );
}

export default Post;