import React, { useState } from 'react';
import classes from './Hypotenuse.module.css';

export const Hypotenuse = (props) => {
  const [height, setHeight] = useState(0);
  const [base, setBase] = useState(0);
  const [hypo, setHypo] = useState(0);
  const [msg, setMsg] = useState('');

  const onChangeHeight = (e) => {
    if (e.target.value === '') {
      setHeight(0);
      return;
    }
    setHeight(e.target.value);
  };

  const onChangeBase = (e) => {
    if (e.target.value === '') {
      setBase(0);
      return;
    }
    setBase(e.target.value);
  };

  const onSubmitClicked = (e) => {
    e.preventDefault();

    setMsg('');

    if (height === 0 || base === 0) {
      setMsg('Please enter non-zero positive numbers.');
      return;
    }

    let hyp = Math.sqrt(height * height + base * base).toFixed(2);
    setHypo(hyp);
  };

  const onBackClicked = () => {
    props.toggleHypotenuse();
    props.toggleHome();
  };
  return (
    <div>
      <div onClick={onBackClicked}>Back</div>
      <div className={classes.container}>
        <div className={classes.triangle}>
          <div className={classes.height}>
            <p>{height}</p>
          </div>
          <div className={classes.hypo}>
            <p>{hypo}</p>
          </div>
          <div className={classes.base}>
            <p>{base}</p>
          </div>
        </div>
        <div className={classes.form}>
          <form action="" onSubmit={onSubmitClicked}>
            <input type="number" id="height" onChange={onChangeHeight} />
            <input type="number" id="base" onChange={onChangeBase} />
            <p>{msg}</p>
            <button>Check</button>
          </form>
        </div>
      </div>
    </div>
  );
};
