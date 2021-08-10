import React from 'react';
import classes from './Quiz.module.css';
import Back from './UI/Back';
import Button from './UI/Button';
import Question from './UI/Question';

export const Quiz = (props) => {
  const onBackClicked = () => {
    props.toggleAngle();
    props.toggleHome();
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
        <div className={classes.questions}>
          <Question>
            <div>
              <h4>This is Question 1</h4>
              <div className={classes.options}>
                <label htmlFor="">
                  <input type="radio" name="question1" />
                  Option 1
                </label>
                <label htmlFor="">
                  <input type="radio" name="question1" />
                  Option 2
                </label>
                <label htmlFor="">
                  <input type="radio" name="question1" />
                  Option 3
                </label>
                <label htmlFor="">
                  <input type="radio" name="question1" />
                  Option 4
                </label>
              </div>
            </div>
          </Question>
          <Question>
            <div>
              <h4>This is Question 1</h4>
              <div className={classes.options}>
                <label htmlFor="">
                  <input type="radio" name="question2" />
                  Option 1
                </label>
                <label htmlFor="">
                  <input type="radio" name="question2" />
                  Option 2
                </label>
                <label htmlFor="">
                  <input type="radio" name="question2" />
                  Option 3
                </label>
                <label htmlFor="">
                  <input type="radio" name="question2" />
                  Option 4
                </label>
              </div>
            </div>
          </Question>
          <Question>
            <div>
              <h4>This is Question 1</h4>
              <div className={classes.options}>
                <label htmlFor="">
                  <input type="radio" name="question3" />
                  Option 1
                </label>
                <label htmlFor="">
                  <input type="radio" name="question3" />
                  Option 2
                </label>
                <label htmlFor="">
                  <input type="radio" name="question3" />
                  Option 3
                </label>
                <label htmlFor="">
                  <input type="radio" name="question3" />
                  Option 4
                </label>
              </div>
            </div>
          </Question>
          <Question>
            <div>
              <h4>This is Question 1</h4>
              <div className={classes.options}>
                <label htmlFor="">
                  <input type="radio" name="question4" />
                  Option 1
                </label>
                <label htmlFor="">
                  <input type="radio" name="question4" />
                  Option 2
                </label>
                <label htmlFor="">
                  <input type="radio" name="question4" />
                  Option 3
                </label>
                <label htmlFor="">
                  <input type="radio" name="question4" />
                  Option 4
                </label>
              </div>
            </div>
          </Question>
          <Question>
            <div>
              <h4>This is Question 1</h4>
              <div className={classes.options}>
                <label htmlFor="">
                  <input type="radio" name="question5" />
                  Option 1
                </label>
                <label htmlFor="">
                  <input type="radio" name="question5" />
                  Option 2
                </label>
                <label htmlFor="">
                  <input type="radio" name="question5" />
                  Option 3
                </label>
                <label htmlFor="">
                  <input type="radio" name="question5" />
                  Option 4
                </label>
              </div>
            </div>
          </Question>
          <Question>
            <div>
              <h4>This is Question 1</h4>
              <div className={classes.options}>
                <label htmlFor="">
                  <input type="radio" name="question6" />
                  Option 1
                </label>
                <label htmlFor="">
                  <input type="radio" name="question6" />
                  Option 2
                </label>
                <label htmlFor="">
                  <input type="radio" name="question6" />
                  Option 3
                </label>
                <label htmlFor="">
                  <input type="radio" name="question6" />
                  Option 4
                </label>
              </div>
            </div>
          </Question>
          <Question>
            <div>
              <h4>This is Question 1</h4>
              <div className={classes.options}>
                <label htmlFor="">
                  <input type="radio" name="question7" />
                  Option 1
                </label>
                <label htmlFor="">
                  <input type="radio" name="question7" />
                  Option 2
                </label>
                <label htmlFor="">
                  <input type="radio" name="question7" />
                  Option 3
                </label>
                <label htmlFor="">
                  <input type="radio" name="question7" />
                  Option 4
                </label>
              </div>
            </div>
          </Question>
          <Question>
            <div>
              <h4>This is Question 1</h4>
              <div className={classes.options}>
                <label htmlFor="">
                  <input type="radio" name="question8" />
                  Option 1
                </label>
                <label htmlFor="">
                  <input type="radio" name="question8" />
                  Option 2
                </label>
                <label htmlFor="">
                  <input type="radio" name="question8" />
                  Option 3
                </label>
                <label htmlFor="">
                  <input type="radio" name="question8" />
                  Option 4
                </label>
              </div>
            </div>
          </Question>
          <Question>
            <div>
              <h4>This is Question 1</h4>
              <div className={classes.options}>
                <label htmlFor="">
                  <input type="radio" name="question9" />
                  Option 1
                </label>
                <label htmlFor="">
                  <input type="radio" name="question9" />
                  Option 2
                </label>
                <label htmlFor="">
                  <input type="radio" name="question9" />
                  Option 3
                </label>
                <label htmlFor="">
                  <input type="radio" name="question9" />
                  Option 4
                </label>
              </div>
            </div>
          </Question>
          <Question>
            <div>
              <h4>This is Question 1</h4>
              <div className={classes.options}>
                <label htmlFor="">
                  <input type="radio" name="question10" />
                  Option 1
                </label>
                <label htmlFor="">
                  <input type="radio" name="question10" />
                  Option 2
                </label>
                <label htmlFor="">
                  <input type="radio" name="question10" />
                  Option 3
                </label>
                <label htmlFor="">
                  <input type="radio" name="question10" />
                  Option 4
                </label>
              </div>
            </div>
          </Question>
        </div>
      </div>
    </div>
  );
};
