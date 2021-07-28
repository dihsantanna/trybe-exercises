import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Customers, Register, PrivateHome } from './private/pages';
import { Home, Login, NotLogged } from './public';
import { PrivateRoute } from './private';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/login" component={ Login } />
        <PrivateRoute path="/private/customers" component={ Customers } />
        <PrivateRoute path="/private/register" component={ Register } />
        <PrivateRoute exact path="/private" component={ PrivateHome } />
        <Route exact path="/not-logged" component={ NotLogged } />
      </Switch>
    );
  }
}

export default Routes;
