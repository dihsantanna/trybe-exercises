import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class PrivateRoute extends React.Component {
  render() {
    const { isLogged } = this.props;
    return (
      isLogged ? <Route /> : <Redirect to="/not-logged" />
    );
  }
}

const mapStateToProps = (state) => ({
  isLogged: state.loginReducer.loggedIn,
});

PrivateRoute.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(PrivateRoute);
