import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Login, Customers, Register } from './pages';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/login" component={ Login } />
        <Route path="/customers" component={ Customers } />
        <Route path="/register" component={ Register } />
      </Switch>
    );
  }
}

export default Routes;
