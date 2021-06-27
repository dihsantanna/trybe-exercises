import React, { Component } from 'react';
import InputName from './InputName';
import InputEmail from './InputEmail';
import InputCPF from './InputCPF';
import '../App.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      cpf: '',
      formWithError: true,
    };
    this.handleChange = this.handleChange.bind(this);

    this.checkAll = {
      fieldCheck: {
        nameCheck: (name) => name.match(/(\s|[A-Za-z]|[áãéêíóôõú]|'){0,40}/gi)[0],
        emailCheck: (email) => email.match(/(\w|\d|\.|@|-){0,50}/gi)[0],
        cpfCheck: (cpf) => cpf.match(/\d{0,11}/gi)[0],
      },
      checkForm: () => {
        const { name, email, cpf } = this.state;

        const nameMin = 7;
        const cpfLength = 11;

        const errorCheck = [
          name.length <= nameMin,
          !email.match(/\b[a-z]+(\.|-|\w|\d)*?@[a-z]+\.[a-z]{2,3}(\.br)?$/i),
          cpf.length < cpfLength,
        ];

        const isOk = errorCheck.every((error) => error !== true);

        this.setState({ formWithError: !isOk });
      },
    };
  }

  handleChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({ [name]: value }, () => this.checkAll.checkForm());
  }

  render() {
    const { name, email, cpf, formWithError } = this.state;
    const { nameCheck, emailCheck, cpfCheck } = this.checkAll.fieldCheck;
    return (
      <form className="form">
        <legend className="legend-form">Currículo</legend>
        <fieldset>

          <InputName
            inptName="name"
            inptValue={ !name ? name : nameCheck(name).toUpperCase() }
            inptFuncChange={ this.handleChange }
          />

          <InputEmail
            inptName="email"
            inptValue={ !email ? email : emailCheck(email).toLowerCase() }
            inptFuncChange={ this.handleChange }
          />

          <InputCPF
            inptName="cpf"
            inptValue={ !cpf ? cpf : cpfCheck(cpf) }
            inptFuncChange={ this.handleChange }
          />
        </fieldset>
        { formWithError
          ? <span>Preencha todos os campos !</span>
          : <span>Todos os campos foram preenchidos !!</span> }
      </form>
    );
  }
}

export default Form;
