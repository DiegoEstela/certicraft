import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import CompanyData from './modules/CompanyData';
import AllStandards from './modules/AllStandards';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" render={() => <div>Login Page</div>} />
        <PrivateRoute exact path="/company-data" component={CompanyData} />
        <PrivateRoute exact path="/all-standards" component={AllStandards} />
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
};

export default Routes;