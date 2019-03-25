import React, { Component } from 'react';
import classes from './NewPost.module.css';

import axios from '../../axios';

class NewPost extends Component {
  state = {
    title: '',
    body: '',
    author: '',
  }

  titleChangeHandler = event => {
    this.setState({
      title: event.target.value
    });
  }

  bodyChangeHandler = event => {
    this.setState({
      body: event.target.value
    });
  }

  authorChangeHandler = event => {
    this.setState({
      author: event.target.value
    });
  }

  submitHandler = () => {
    axios
      .post('posts', this.state)
      .then(response => { // response.data
        
      });
  }

  render() {
    return (
      <div className={classes.NewPost}>
        <h2>New post</h2>
        <label>
          Title
          <input type="text" onChange={this.titleChangeHandler} value={this.state.title} />
        </label>
        <label>
          Body
          <textarea onChange={this.bodyChangeHandler} value={this.state.body}></textarea>
        </label>
        <label>
          Author
          <input type="text" onChange={this.authorChangeHandler} value={this.state.author} />
        </label>
        <button onClick={this.submitHandler}>Submit</button>
      </div>
    );
  }
}

export default NewPost;