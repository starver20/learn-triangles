import React from 'react';
import classes from './Back.module.css';

const Back = (props) => {
  return (
    <div className={classes.icon} onClick={props.onBackClicked}>
      <div className={classes.arrow}></div>
    </div>
  );
};

export default Back;
