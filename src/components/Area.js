import React, { useState } from 'react';
import classes from './Area.module.css';
import Back from './UI/Back';
import Button from './UI/Button';

export const Area = (props) => {
  const [sideA, setSideA] = useState(0);
  const [sideB, setSideB] = useState(0);
  const [sideC, setSideC] = useState(0);
  const [msg, setMsg] = useState('');
  const [fontColor, setFontColor] = useState({});

  const onCalculateClicked = (e) => {
    e.preventDefault();
    let a = Number(sideA);
    let b = Number(sideB);
    let c = Number(sideC);
    let s = (a + b + c) / 2;

    if (s - a <= 0 || s - b <= 0 || s - c <= 0) {
      setMsg("This triangle ain't possible");
      setFontColor({ color: 'red' });
      return;
    }

    let triArea = Number(Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2));

    setFontColor({ color: 'green' });
    setMsg(`The area of the triangle is ${triArea} sq units`);
  };

  const onSideAChange = (e) => {
    if (e.target.value === '') {
      setSideA(0);
      return;
    }
    setSideA(e.target.value);
  };

  const onSideBChange = (e) => {
    if (e.target.value === '') {
      setSideB(0);
      return;
    }
    setSideB(e.target.value);
  };

  const onSideCChange = (e) => {
    if (e.target.value === '') {
      setSideC(0);
      return;
    }
    setSideC(e.target.value);
  };

  const onBackClicked = () => {
    props.toggleArea();
    props.toggleHome();
  };
  return (
    <div>
      <Back onBackClicked={onBackClicked} />
      <div className={classes.container}>
        <div className={classes.triangle}>
          <div className={classes['side-a']}>
            <p style={fontColor}>{sideA}</p>
          </div>
          <div className={classes['side-b']}>
            <p style={fontColor}>{sideB}</p>
          </div>
          <div className={classes['side-c']}>
            <p style={fontColor}>{sideC}</p>
          </div>
        </div>
        <div className={classes['side-form']}>
          <form action="" onSubmit={onCalculateClicked}>
            <input
              type="number"
              id="side-a"
              placeholder="Side A"
              max="9999"
              min="1"
              onChange={onSideAChange}
            />
            <input
              type="number"
              id="side_b"
              placeholder="Side B"
              max="9999"
              min="1"
              onChange={onSideBChange}
            />
            <input
              type="number"
              id="side_c"
              placeholder="Side C"
              max="9999"
              min="1"
              onChange={onSideCChange}
            />
            <Button>Calculate</Button>
            <p className={classes.area}>{msg}</p>
          </form>
        </div>
      </div>
    </div>
  );
};
