import React from 'react';
import classes from './NewPost.module.css';

function NewPost(props) {
  return (
    <div className={classes.NewPost}>
      <h2>New post</h2>
      <label>
        Title
        <input type="text" />
      </label>
      <label>
        Body
        <textarea></textarea>
      </label>
      <label>
        Author
        <input type="text" />
      </label>
      <button>Submit</button>
    </div>
  );
}

export default NewPost;