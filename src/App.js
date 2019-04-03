import React, { Component } from 'react';
import './App.css';
import Blog from './containers/Blog/Blog';

import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Blog />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
