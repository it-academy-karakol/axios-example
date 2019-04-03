import React, { Component } from 'react';
import classes from './Blog.module.css';
import Post from '../../components/Post/Post';
import Teaser from '../../components/Teaser/Teaser';
import NewPost from '../../components/NewPost/NewPost';

import axios from '../../axios';
import { Redirect, Switch, Link, Route } from 'react-router-dom';
import Page404 from '../../components/Page404';
import Page403 from '../../components/Page403';

class Blog extends Component {
  state = {
    posts: [],
    selectedPost: null,
    authenticated: false
  }

  componentDidMount() {
    axios.get('posts')
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
        post => (
          <Link to={'/posts/' + post.id} key={post.id}>
            <Teaser
              title={post.title}
              body={post.body}
              clickHandler={() => this.postSelectedHandler(post.id)} />
          </Link>
        )
      );
    }

    return (
      <div className={classes.Blog}>
        <Switch>
          <Route path="/" exact render={() => (
            <div className={classes.Posts}>
                {posts}
              </div>
            )} />

          {this.state.authenticated
            ? <Route path="/new" component={NewPost} />
            : <Redirect from="/new" to="/access-denied" /> }
          
          <Route path="/posts/:id" component={Post} />

          <Route path="/access-denied" component={Page403} />
          <Route path="/" component={Page404} />
        </Switch>
      </div>
    );
  }
}

export default Blog;