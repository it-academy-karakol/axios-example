import React from 'react';
import classes from './Nav.module.css';

import { NavLink } from 'react-router-dom';

function Nav(props) {
  return (
    <div className={classes.Nav}>
      <ul>
        <li><NavLink exact activeClassName={classes.Active} to="/">Home</NavLink></li>
        <li><NavLink activeClassName={classes.Active} to="/new">New</NavLink></li>
      </ul>
    </div>
  );
}

export default Nav;