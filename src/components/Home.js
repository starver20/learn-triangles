import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import classes from './Home.module.css';
import { Angles } from './Angles';
import { Angle } from './Angle';
import { Area } from './Area';
import { Hypotenuse } from './Hypotenuse';

export const Home = () => {
  const [showHome, setShowHome] = useState(true);
  const [showAngles, setShowAngles] = useState(false);
  const [showAngle, setShowAngle] = useState(false);
  const [showArea, setShowArea] = useState(false);
  const [showHypotenuse, setShowHypotenuse] = useState(false);
  const toggleShowHome = () => {
    setShowHome((prevState) => {
      return !prevState;
    });
  };
  const toggleShowAngles = () => {
    setShowAngles((prevState) => {
      return !prevState;
    });
    console.log(showAngles);
  };
  const toggleShowAngle = () => {
    setShowAngle((prevState) => {
      return !prevState;
    });
  };
  const toggleShowArea = () => {
    setShowArea((prevState) => {
      return !prevState;
    });
  };
  const toggleShowHypotenuse = () => {
    setShowHypotenuse((prevState) => {
      return !prevState;
    });
  };

  return (
    <div>
      {showHome && (
        <div className={classes.container}>
          <div className={classes['top-arrow']}>
            <div
              className={classes.link}
              onClick={() => {
                toggleShowHome();
                toggleShowAngles();
              }}
            >
              <div className={classes.top}>
                <p>Is it a triangle?(sum of angles)</p>
              </div>
            </div>
          </div>

          <div className={classes['bottom-arrows']}>
            <div
              className={classes.link}
              onClick={() => {
                toggleShowHome();
                toggleShowArea();
              }}
            >
              <div className={classes.left}>
                <p>Find area of triangles</p>
              </div>
            </div>
            <div
              className={classes.link}
              onClick={() => {
                toggleShowHome();
                toggleShowHypotenuse();
              }}
            >
              <div className={classes.center}>
                <p>Find hypotenuse</p>
              </div>
            </div>
            <div
              className={classes.link}
              onClick={() => {
                toggleShowHome();
                toggleShowAngle();
              }}
            >
              <div className={classes.right}>
                <p>Find the third angle</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {!showHome && showAngles && (
        <Angles toggleHome={toggleShowHome} toggleAngles={toggleShowAngles} />
      )}
      {!showHome && showAngle && (
        <Angle toggleHome={toggleShowHome} toggleAngle={toggleShowAngle} />
      )}
      {!showHome && showArea && (
        <Area toggleHome={toggleShowHome} toggleArea={toggleShowArea} />
      )}
      {!showHome && showHypotenuse && (
        <Hypotenuse
          toggleHome={toggleShowHome}
          toggleHypotenuse={toggleShowHypotenuse}
        />
      )}
    </div>
  );
};
