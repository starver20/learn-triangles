import React, { useState } from 'react';
import classes from './Quiz.module.css';
import Back from './UI/Back';
import Button from './UI/Button';
import Question from './UI/Question';

export const Quiz = (props) => {
  const [msg, setMsg] = useState('');

  const answers = {
    question1: '180',
    question2: 'scalene',
    question3: 'isoceles',
    question4: 'hypotenuse',
    question5: 'pythogoras',
    question6: 'trigonometry',
    question7: '3',
    question8: 'reflex',
    question9: '43',
    question10: '7',
  };

  const onBackClicked = () => {
    props.toggleAngle();
    props.toggleHome();
  };

  const onSubmitClicked = (e) => {
    e.preventDefault();
    let score = 0;

    console.log('Here');

    const data = new FormData(e.target);

    for (let item in answers) {
      if (answers[`${item}`] === data.get(`${item}`)) {
        score++;
      }
    }
    if (score === 10) {
      setMsg(`Yay!! you scored a perfect ${score}`);
      return;
    }
    setMsg(`Your score is ${score}`);
  };

  return (
    <div>
      <Back onBackClicked={onBackClicked}></Back>
      <div className={classes['quiz-container']}>
        <div className={classes.instructions}>
          <h1>Instructions</h1>
          <ul>
            <li>1 point for every correct answer.</li>
            <li>No negative points</li>
          </ul>
        </div>
        <form className={classes.questions} onSubmit={onSubmitClicked}>
          <Question>
            <div>
              <h4>What is the sum of internal angles of triangle?</h4>
              <div className={classes.options}>
                <label htmlFor="">
                  <input
                    type="radio"
                    name="question1"
                    value="120"
                    required="true"
                  />
                  120
                </label>
                <label htmlFor="">
                  <input type="radio" name="question1" value="80" />
                  80
                </label>
                <label htmlFor="">
                  <input type="radio" name="question1" value="60" />
                  60
                </label>
                <label htmlFor="">
                  <input type="radio" name="question1" value="180" />
                  180
                </label>
              </div>
            </div>
          </Question>
          <Question>
            <div>
              <h4>A triangle with all three sides different is called?</h4>
              <div className={classes.options}>
                <label htmlFor="">
                  <input
                    type="radio"
                    name="question2"
                    value="scalene"
                    required="true"
                  />
                  Scalene
                </label>
                <label htmlFor="">
                  <input type="radio" name="question2" value="equilateral" />
                  Equilateral
                </label>
                <label htmlFor="">
                  <input type="radio" name="question2" value="isoceles" />
                  Isoceles
                </label>
                <label htmlFor="">
                  <input type="radio" name="question2" value="right-triangle" />
                  Right angled triangle
                </label>
              </div>
            </div>
          </Question>
          <Question>
            <div>
              <h4>A triangle with only 2 sides equal is called?</h4>
              <div className={classes.options}>
                <label htmlFor="">
                  <input
                    type="radio"
                    name="question3"
                    value="scalene"
                    required="true"
                  />
                  Scalene
                </label>
                <label htmlFor="">
                  <input type="radio" name="question3" value="isoceles" />
                  Isoceles
                </label>
                <label htmlFor="">
                  <input type="radio" name="question3" value="equilateral" />
                  Equilateral
                </label>
                <label htmlFor="">
                  <input type="radio" name="question3" value="obtuse" />
                  Obtuse
                </label>
              </div>
            </div>
          </Question>
          <Question>
            <div>
              <h4>Which is the longest side in a right angled triangle?</h4>
              <div className={classes.options}>
                <label htmlFor="">
                  <input
                    type="radio"
                    name="question4"
                    value="altitude"
                    required="true"
                  />
                  Altitude
                </label>
                <label htmlFor="">
                  <input type="radio" name="question4" value="base" />
                  Base
                </label>
                <label htmlFor="">
                  <input type="radio" name="question4" value="hypotenuse" />
                  Hypotenuse
                </label>
                <label htmlFor="">
                  <input type="radio" name="question4" value="none" />
                  None of the above
                </label>
              </div>
            </div>
          </Question>
          <Question>
            <div>
              <h4>Which ancient Greek philosopher studied triangles?</h4>
              <div className={classes.options}>
                <label htmlFor="">
                  <input
                    type="radio"
                    name="question5"
                    value="plato"
                    required="true"
                  />
                  Plato
                </label>
                <label htmlFor="">
                  <input type="radio" name="question5" value="socrates" />
                  Socrates
                </label>
                <label htmlFor="">
                  <input type="radio" name="question5" value="aristotle" />
                  Aristotle
                </label>
                <label htmlFor="">
                  <input type="radio" name="question5" value="pythogoras" />
                  Pythogoras
                </label>
              </div>
            </div>
          </Question>
          <Question>
            <div>
              <h4>
                The type of maths that studies sides and angels of trianle is
              </h4>
              <div className={classes.options}>
                <label htmlFor="">
                  <input
                    type="radio"
                    name="question6"
                    value="geometry"
                    required="true"
                  />
                  Geometry
                </label>
                <label htmlFor="">
                  <input type="radio" name="question6" value="geography" />
                  Geography
                </label>
                <label htmlFor="">
                  <input type="radio" name="question6" value="trigonometry" />
                  Trigonometry
                </label>
                <label htmlFor="">
                  <input type="radio" name="question6" value="trilogy" />
                  Trilogy
                </label>
              </div>
            </div>
          </Question>
          <Question>
            <div>
              <h4>How many medians can a triangle have?</h4>
              <div className={classes.options}>
                <label htmlFor="">
                  <input
                    type="radio"
                    name="question7"
                    value="4"
                    required="true"
                  />
                  4
                </label>
                <label htmlFor="">
                  <input type="radio" name="question7" value="3" />3
                </label>
                <label htmlFor="">
                  <input type="radio" name="question7" value="2" />2
                </label>
                <label htmlFor="">
                  <input type="radio" name="question7" value="1" />1
                </label>
              </div>
            </div>
          </Question>
          <Question>
            <div>
              <h4>
                Which of the following angle cannot be present in a triangle?
              </h4>
              <div className={classes.options}>
                <label htmlFor="">
                  <input
                    type="radio"
                    name="question8"
                    value="acute"
                    required="true"
                  />
                  Acute
                </label>
                <label htmlFor="">
                  <input type="radio" name="question8" value="right" />
                  Right
                </label>
                <label htmlFor="">
                  <input type="radio" name="question8" value="obtuse" />
                  Obtuse
                </label>
                <label htmlFor="">
                  <input type="radio" name="question8" value="reflex" />
                  Reflex
                </label>
              </div>
            </div>
          </Question>
          <Question>
            <div>
              <h4>
                If a triangle has angles 72° and 65° what will be the third
                angle
              </h4>
              <div className={classes.options}>
                <label htmlFor="">
                  <input
                    type="radio"
                    name="question9"
                    value="54"
                    required="true"
                  />
                  54
                </label>
                <label htmlFor="">
                  <input type="radio" name="question9" value="43" />
                  43
                </label>
                <label htmlFor="">
                  <input type="radio" name="question9" value="62" />
                  62
                </label>
                <label htmlFor="">
                  <input type="radio" name="question9" value="37" />
                  37
                </label>
              </div>
            </div>
          </Question>
          <Question>
            <div>
              <h4>
                If an equilateral triangle has perimeter 21cm, what is the
                length of one side?
              </h4>
              <div className={classes.options}>
                <label htmlFor="">
                  <input
                    type="radio"
                    name="question10"
                    value="3"
                    required="true"
                  />
                  3
                </label>
                <label htmlFor="">
                  <input type="radio" name="question10" value="4" />4
                </label>
                <label htmlFor="">
                  <input type="radio" name="question10" value="6" />6
                </label>
                <label htmlFor="">
                  <input type="radio" name="question10" value="7" />7
                </label>
              </div>
            </div>
          </Question>
          <Button>Submit</Button>
        </form>
        <p>{msg}</p>
      </div>
    </div>
  );
};
