import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './notLogged.css';

class NotLogged extends React.Component {
  render() {
    return (
      <div className="notLogged">
        <Header className="header-notLog" />
        <div className="info-notLog">
          <h2>
            Login não efetuado!!!
          </h2>
        </div>
        <div className="singIn-content">
          <span>
            Clique em
            <strong>{' SingIn '}</strong>
            para continuar.
          </span>
          <Link
            className="btn-notLog"
            to="/login"
          >
            SingIn
          </Link>
        </div>
        <Footer className="footer-notLog" />
      </div>
    );
  }
}

export default NotLogged;
