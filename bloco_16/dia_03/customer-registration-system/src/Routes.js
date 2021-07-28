import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Customers, Register } from './private/pages';
import { Home, Login, NotLogged } from './public/pages';
import { PrivateRoute } from './private';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/login" component={ Login } />
        <PrivateRoute path="/customers" component={ Customers } />
        <PrivateRoute path="/register" component={ Register } />
        <Route path="/not-logged" component={ NotLogged } />
      </Switch>
    );
  }
}

export default Routes;
