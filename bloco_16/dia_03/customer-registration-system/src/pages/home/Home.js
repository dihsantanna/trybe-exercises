import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './home.css';

class Home extends React.Component {
  render() {
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

export default Home;
