import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutAction } from '../../../redux/actions';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import './privateHome.css';
import Loading from '../../../components/Loading';

class PrivateHome extends React.Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
      loading: false,
    };
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    const { logout } = this.props;
    const time = 2000;
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, redirect: true }, () => logout());
    }, time);
  }

  render() {
    const { redirect, loading } = this.state;
    if (redirect) return <Redirect to="/" />;
    return (
      <div className="homePriv">

        <Header className="header-homePriv" />

        {loading ? <Loading /> : (
          <main className="main-homePriv">
            <nav className="nav-home">
              <Link
                className="btn-customers-home"
                to="/private/customers"
              >
                Clientes Cadastrados
              </Link>
              <Link
                className="btn-register-home"
                to="/private/register"
              >
                Registrar Clientes
              </Link>
            </nav>

            <div className="logout-content">

              <button
                className="btn-logout-home"
                type="button"
                onClick={ this.handleLogout }
              >
                Logout
              </button>

            </div>
          </main>
        )}

        <Footer className="footer-homePriv" />

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutAction()),
});

PrivateHome.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(PrivateHome);
