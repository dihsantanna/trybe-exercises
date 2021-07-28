import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginAction } from '../../../redux/actions';
import { checkLogin } from '../../../private';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import Input from '../../../components/Input';
import Loading from '../../../components/Loading';
import './login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirect: false,
      failed: false,
      loading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    const { logIn } = this.props;
    this.setState({ loading: true });
    const check = await checkLogin({ email, password });
    if (check) {
      logIn();
      return this.setState({
        redirect: true,
        failed: false,
        loading: false,
      });
    }
    this.setState({ failed: true, loading: false });
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { email, password, redirect, failed, loading } = this.state;
    if (redirect) return <Redirect to="/private/customers" />;
    return (
      <div className="login">
        <Header className="header-login" />
        {loading ? <Loading /> : (
          <form className="form-login" method="get">
            <fieldset>
              <legend className="login-title">
                <h3>SingIn</h3>
              </legend>
              <Input
                className="email"
                id="email "
                name="email"
                placeholder="Email"
                value={ email }
                onChange={ this.handleChange }
              />
              <Input
                className="password"
                id="password"
                name="password"
                placeholder="Senha"
                value={ password }
                onChange={ this.handleChange }
              />
              <button
                type="submit"
                className="btn-login"
                onClick={ this.handleSubmit }
              >
                Entrar
              </button>
            </fieldset>
            {failed
              ? (
                <span
                  style={ { color: 'red', fontSize: '14px' } }
                >
                  E-mail ou Senha incorretos.
                </span>
              )
              : ''}
          </form>
        )}
        <Footer className="footer-login" />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  logIn: () => dispatch(loginAction()),
});

Login.propTypes = {
  logIn: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
