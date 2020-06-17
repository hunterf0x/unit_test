import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Login from './components/Login';


const Routes = ({ childProps }) => (
  <BrowserRouter>
    <Switch>
      <Route path="/login">
        <Login props={childProps} />
      </Route>
    </Switch>
  </BrowserRouter>
);

Routes.propTypes = {
  childProps: PropTypes.shape({}).isRequired
};

export default Routes;
