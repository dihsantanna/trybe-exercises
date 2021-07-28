import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Login, Customers, Register, NotLogged } from './pages';
import PrivateRoute from './private/PrivateRoute';

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
