import React, { Component } from 'react';
import classes from './Blog.module.css';
import Post from '../../components/Post/Post';
import Teaser from '../../components/Teaser/Teaser';
import NewPost from '../../components/NewPost/NewPost';

import axios from 'axios';

class Blog extends Component {
  state = {
    posts: [],
    selectedPost: null,
  }

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/posts')
      .then(response => {
        const posts = response.data.slice(0, 6);

        this.setState({ posts });
      });

  }

  postSelectedHandler = id => {
    this.setState({
      selectedPost: id
    })
  }

  render() {
    let posts = <p>No posts</p>;
    
    if (this.state.posts.length > 0) {
      posts = this.state.posts.map(
        post => <Teaser
          key={post.id}
          title={post.title}
          body={post.body}
          clickHandler={() => this.postSelectedHandler(post.id)} />
      );
    }

    return (
      <div className={classes.Blog}>
        <div className={classes.Posts}>
          {posts}
        </div>
        <div className={classes.Post}>
          <Post postId={this.state.selectedPost} />
        </div>
        <div className={classes.NewPost}>
          <NewPost />
        </div>
      </div>
    );
  }
}

export default Blog;