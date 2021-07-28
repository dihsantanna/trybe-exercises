import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class PrivateRoute extends React.Component {
  render() {
    const { isLogged, path, component, render } = this.props;
    return (
      isLogged ? <Route
        path={ path }
        component={ component }
        render={ render }
      /> : <Redirect to="/not-logged" />
    );
  }
}

const mapStateToProps = (state) => ({
  isLogged: state.loginReducer.loggedIn,
});

PrivateRoute.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  path: PropTypes.string,
  component: PropTypes.node,
  render: PropTypes.node,
};

PrivateRoute.defaultProps = {
  path: '',
  component: null,
  render: null,
};

export default connect(mapStateToProps)(PrivateRoute);
