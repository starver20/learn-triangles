import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import classes from './App.module.css';

function App() {
  return (
    <Router>
      <div className={classes.container}>
        <div className={classes['top-arrow']}>
          <Link to="/top" className={classes.link}>
            <div className={classes.top}>
              <p>Is it a triangle?(sum of angles)</p>
            </div>
          </Link>
        </div>

        <div className={classes['bottom-arrows']}>
          <Link to="/left" className={classes.link}>
            <div className={classes.left}>
              <p>Find area of triangles.</p>
            </div>
          </Link>
          <Link to="/center" className={classes.link}>
            <div className={classes.center}>
              <p>Find hypotenuse.</p>
            </div>
          </Link>
          <Link to="/right" className={classes.link}>
            <div className={classes.right}>
              <p>Find the third angle.</p>
            </div>
          </Link>
        </div>

        {/* <Link to="/">Home</Link> */}
        {/* <Switch>
          <Route path="/right">
            <Right />
          </Route>
          <Route path="/top">
            <Top />
          </Route>
          <Route path="/center">
            <Center />
          </Route>
          <Route path="/left">
            <Left />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch> */}
      </div>
    </Router>
  );
}

export default App;
