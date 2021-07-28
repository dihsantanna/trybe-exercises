import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import './home.css';

class Home extends React.Component {
  render() {
    const { isLogged } = this.props;
    if (isLogged) return <Redirect to="/private" />;
    return (
      <div className="home">
        <Header className="header-home" />
        <div className="info-home">
          <span>
            Clique em
            <strong>{' SingIn '}</strong>
            para continuar.
          </span>
        </div>
        <div className="singIn-content">
          <Link
            className="btn-home"
            to="/login"
          >
            SingIn
          </Link>
        </div>
        <Footer className="footer-home" />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogged: state.logReducer.loggedIn,
});

Home.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Home);
