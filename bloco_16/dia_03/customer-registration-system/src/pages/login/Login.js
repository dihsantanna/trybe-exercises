import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Input from '../../components/Input';
import './login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { login, password } = this.state;
    return (
      <div className="login">
        <Header className="header-login" />
        <form className="form-login" method="get">
          <fieldset>
            <legend className="login-title">
              <h3>SingIn</h3>
            </legend>
            <Input
              className="login-contain"
              id="login"
              name="login"
              placeholder="Login"
              value={ login }
              onChange={ this.handleChange }
            />
            <Input
              className="password-contain"
              id="password"
              name="password"
              placeholder="Senha"
              value={ password }
              onChange={ this.handleChange }
            />
            <button
              type="submit"
              className="btn-login"
              onClick={ () => {} }
            >
              Entrar
            </button>
          </fieldset>
        </form>
        <Footer className="footer-login" />
      </div>
    );
  }
}

export default Login;
