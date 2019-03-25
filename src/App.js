import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Blog />
      </div>
    );
  }
}

export default App;
