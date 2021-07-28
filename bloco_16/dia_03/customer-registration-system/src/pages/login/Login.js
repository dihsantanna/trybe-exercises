import React from 'react';
import Header from '../../components/Header';
import Input from '../../components/Input';

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
        <form method="get">
          <fieldset>
            <legend className="login-title">
              <h3>SingIn</h3>
            </legend>
            <Input
              className="login"
              id="login"
              name="login"
              placeholder="Login"
              value={ login }
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
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Login;
