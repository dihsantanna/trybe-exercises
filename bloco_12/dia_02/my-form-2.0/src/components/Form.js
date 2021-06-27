import React, { Component } from 'react';
import InputName from './InputName';
import InputEmail from './InputEmail';
import InputCPF from './InputCPF';
import InputAddress from './InputAddress';
import InputCity from './InputCity';
import '../App.css';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      formWithError: true,
    };

    this.handleChange = this.handleChange.bind(this);

    this.startsWithNumber = this.startsWithNumber.bind(this);

    this.checkAllErrors = {
      fieldCheck: {
        nameCheck: (name) => name.match(/(\s|[a-záãéêíóôõúç]|'){0,40}/gi)[0],

        emailCheck: (email) => email.match(/(\w|\d|\.|@|-){0,50}/gi)[0],

        cpfCheck: (cpf) => cpf.match(/\d{0,11}/gi)[0],

        addressCheck: (address) => address.match(/(\s|[a-záãéêíóôõúç]){0,200}/gi)[0],

        cityCheck: (city) => city.match(/(\S|\s){0,28}/gi)[0],
      },

      checkForm: () => {
        const { name, email, cpf, address, city } = this.state;

        const nameMin = 7;
        const cpfLength = 11;

        const errorCheck = [
          name.length <= nameMin,
          !email.match(/\b[a-z]+(\.|-|\w|\d)*?@[a-z]+\.[a-z]{2,3}(\.br)?$/i),
          cpf.length < cpfLength,
          !address.length,
          !city.length,
        ];

        const isOk = errorCheck.every((error) => error !== true);

        this.setState({ formWithError: !isOk });
      },
    };
  }

  handleChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({ [name]: value }, () => this.checkAllErrors.checkForm());
  }

  startsWithNumber({ target }) {
    const { name } = target;
    const { value } = target;

    if (value[0].search(/\d/) === 0) {
      this.setState({
        [name]: '',
      }, () => this.checkAllErrors.checkForm());
    }
  }

  render() {
    const {
      name,
      email,
      cpf,
      address,
      city,
      formWithError,
    } = this.state;

    const {
      nameCheck,
      emailCheck,
      cpfCheck,
      addressCheck,
      cityCheck,
    } = this.checkAllErrors.fieldCheck;

    const isOk = 'Todos os campos foram preenchidos !!!';

    const isNotOk = '* Preencha todos os campos !';

    return (
      <form className="form">

        <h1 className="title-form">Currículo</h1>

        <fieldset>
          <legend className="personal-data">Dados Pessoais</legend>
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

          <InputAddress
            inptName="address"
            inptValue={ !address ? address : addressCheck(address) }
            inptFuncChange={ this.handleChange }
          />

          <InputCity
            inptName="city"
            inptValue={ !city ? city : cityCheck(city) }
            inptFuncChange={ this.handleChange }
            inptFuncBlur={ this.startsWithNumber }
          />

        </fieldset>

        { formWithError

          ? <span style={ { color: 'red' } }>{ isNotOk }</span>

          : <span style={ { color: 'lime' } }>{ isOk }</span> }

      </form>
    );
  }
}

export default Form;
