import React, { useState } from 'react';
import classes from './Angles.module.css';
import Back from './UI/Back';
import Button from './UI/Button';

export const Angles = (props) => {
  const [angleA, setAngleA] = useState(0);
  const [angleB, setAngleB] = useState(0);
  const [angleC, setAngleC] = useState(0);
  const [msg, setMsg] = useState('');
  const [fontColor, setFontColor] = useState({});

  const onBackClicked = () => {
    props.toggleAngles();
    props.toggleHome();
  };

  const onSubmitClicked = (e) => {
    e.preventDefault();
    if (Number(angleA) + Number(angleB) + Number(angleC) === 180) {
      setMsg('Yess! These angles can form a triangle.');
      setFontColor({ color: 'green' });
      return;
    }

    setMsg("Nope! These angles won't form a triangle.");
    setFontColor({ color: 'red' });
    console.log(angleA + angleB + angleC);
  };

  const onChangeAngleA = (e) => {
    if (e.target.value === '') {
      setAngleA(0);
      return;
    }
    setAngleA(e.target.value);
  };
  const onChangeAngleB = (e) => {
    if (e.target.value === '') {
      setAngleB(0);
      return;
    }
    setAngleB(e.target.value);
  };
  const onChangeAngleC = (e) => {
    if (e.target.value === '') {
      setAngleC(0);
      return;
    }
    setAngleC(e.target.value);
  };

  return (
    <div>
      <Back onBackClicked={onBackClicked} />

      <div className={classes.container}>
        <div className={classes.triangle}>
          <div className={classes['angle-a']}>
            <p style={fontColor}>{angleA}</p>
          </div>
          <div className={classes['angle-b']}>
            <p style={fontColor}>{angleB}</p>
          </div>
          <div className={classes['angle-c']}>
            <p style={fontColor}>{angleC}</p>
          </div>
        </div>
        <div className={classes['angles-inp-form']}>
          <form action="" onSubmit={onSubmitClicked}>
            <input
              type="number"
              id="angle_a"
              placeholder="Angle A"
              max="9999"
              min="0"
              onChange={onChangeAngleA}
            />
            <input
              type="number"
              id="angle_b"
              placeholder="Angle B"
              max="9999"
              min="0"
              onChange={onChangeAngleB}
            />
            <input
              type="number"
              id="angle_c"
              placeholder="Angle C"
              max="9999"
              min="0"
              onChange={onChangeAngleC}
            />
            <Button>Check</Button>
            <p className={classes.msg} style={fontColor}>
              {msg}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
