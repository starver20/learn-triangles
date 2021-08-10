import React from 'react';
import classes from './Question.module.css';

const Question = (props) => {
  return <div className={classes.question}>{props.children}</div>;
};

export default Question;
