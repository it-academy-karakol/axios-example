import React, { Component } from 'react';
import classes from './Blog.module.css';
import Post from '../../components/Post/Post';
import Teaser from '../../components/Teaser/Teaser';
import NewPost from '../../components/NewPost/NewPost';

class Blog extends Component {
  render() {
    return (
      <div className={classes.Blog}>
        <div className={classes.Posts}>
          <Teaser title="test1" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet praesentium deserunt ipsam voluptas id quisquam velit, in tenetur tempora, neque facilis iure. Voluptates asperiores itaque nulla reiciendis consequuntur, qui debitis." />
          <Teaser title="test2" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet praesentium deserunt ipsam voluptas id quisquam velit, in tenetur tempora, neque facilis iure. Voluptates asperiores itaque nulla reiciendis consequuntur, qui debitis." />
          <Teaser title="test3" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet praesentium deserunt ipsam voluptas id quisquam velit, in tenetur tempora, neque facilis iure. Voluptates asperiores itaque nulla reiciendis consequuntur, qui debitis." />
        </div>
        <div className={classes.Post}>
          <Post title="test3" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet praesentium deserunt ipsam voluptas id quisquam velit, in tenetur tempora, neque facilis iure. Voluptates asperiores itaque nulla reiciendis consequuntur, qui debitis." />
        </div>
        <div className={classes.NewPost}>
          <NewPost />
        </div>
      </div>
    );
  }
}

export default Blog;