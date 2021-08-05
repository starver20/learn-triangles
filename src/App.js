import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import classes from './App.module.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <div className={classes.container}>
            <div className={classes['top-arrow']}>
              <Link to="/top">
                <div className={classes.top}></div>
              </Link>
            </div>

            <div className={classes['bottom-arrows']}>
              <Link to="/left">
                <div className={classes.left}></div>
              </Link>
              <Link to="/center">
                <div className={classes.center}></div>
              </Link>
              <Link to="/right">
                <div className={classes.right}></div>
              </Link>
            </div>
          </div>
        </nav>

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
