import './App.css';
import HomePage from './Components/HomePage/HomePage';
import Tempreture from './Components/Temperature/Temperature'
import Time from './Components/Time/Time'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Age from './Components/Age/Age';
import Distance from './Components/Speed/Speed';
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path={'/'} exact>
            <HomePage />
          </Route>
          <Route path={'/age'} exact>
            <Age />
          </Route>
          <Route path={'/speed'} exact>
            <Distance />
          </Route>
          <Route path={'/temp'} exact>
            <Tempreture />
          </Route>
          <Route path={'/time'} exact>
            <Time />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
