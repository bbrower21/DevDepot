import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import RegistrationPage from './components/RegistrationPage';
import LoginPage from './components/LoginPage'
import DeveloperSignup from './components/DeveloperSignup';
import EmployerSignup from './components/EmployerSignup';
import history from './components/history';
import Homepage from './components/Homepage';
import DeveloperAboutMe from './components/DeveloperAboutMe';

const App = () => {
  const [isLoggedIn, setLogin] = useState(false);
  const [isDevUser, setUser] = useState(false);
  const [devs, setDevs] = useState([]);
  const [inCart, setCart] = useState([]);
  const [devSelected, setSelection] = useState(false);
  const [filterOptions, setFilterOptions] = useState([]);

  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={RegistrationPage}>
            <RegistrationPage isLoggedIn={isLoggedIn} isDevUser={isDevUser} />
          </Route>
          <Route exact path="/dev-signup" component={DeveloperSignup}>
            <DeveloperSignup isLoggedin={isLoggedIn} isDevUser={isDevUser} />
          </Route>
          <Route exact path="/employer-signup" component={EmployerSignup}>
            <EmployerSignup isLoggedin={isLoggedIn} isDevUser={isDevUser} />
          </Route>
          //TODO: Determine which pieces of state passed here
          <Route exact path="/homepage" component={Homepage}>
            <Homepage />
          </Route>
          //TODO: Determine which pieces of state passed here
          <Route exact path="/dev-aboutme" component={DeveloperAboutMe}>
            <DeveloperAboutMe />
          </Route>
          <Route exact path="/login" component={LoginPage}>
            <LoginPage isLoggedIn={isLoggedIn} isDevUser={isDevUser} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
