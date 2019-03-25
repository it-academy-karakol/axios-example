import React from 'react';
import classes from './Teaser.module.css';

function Teaser(props) {
  return (
    <div className={classes.Teaser}>
      <h3>{props.title}</h3>
      <p>{props.body}</p>
    </div>
  );
}

export default Teaser;