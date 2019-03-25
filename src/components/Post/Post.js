import React, { Component } from 'react';
import classes from './Post.module.css';
import axios from '../../axios';
class Post extends Component {
  state = {
    loadedPost: null,
  }

  componentDidUpdate() {
    if (this.props.postId) {
      if (this.state.loadedPost == null
        || this.state.loadedPost.id !== this.props.postId) {
        axios
          .get('posts/' + this.props.postId)
          .then(response => { // response.data
            this.setState({
              loadedPost: response.data
            });
          });
      }
    }
  }

  deletePost = () => {
    if (this.state.loadedPost) {
      axios
        .delete('posts/' + this.state.loadedPost.id)
        .then(response => { // response.data
          // TODO delete post properly
        });
    }
  }

  render() {
    let post = <p>Select a post</p>;
    if (this.state.loadedPost) {
      post = (
        <div className={classes.Post}>
          <h1>{this.state.loadedPost.title}</h1>
          <strong>{this.state.loadedPost.author}</strong>
          <p>{this.state.loadedPost.body}</p>
    
          <button onClick={this.deletePost}>Delete</button>
        </div>
      );
    }

    return post;
  }
}

export default Post;