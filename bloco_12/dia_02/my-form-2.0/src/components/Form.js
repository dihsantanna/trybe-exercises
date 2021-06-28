import React, { Component } from 'react';
import InputName from './InputName';
import InputEmail from './InputEmail';
import InputCPF from './InputCPF';
import InputAddress from './InputAddress';
import InputCity from './InputCity';
import ComboBoxStates from './ComboBoxStates';
import TypeResidence from './TypeResidence';
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
      state: 'Selecione um estado',
      typeRes: false,
      formWithError: true,
    };

    this.handleChange = this.handleChange.bind(this);

    this.startsWithNumber = this.startsWithNumber.bind(this);

    this.checkAllErrors = this.checkAllErrors.bind(this);
  }

  handleChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({ [name]: value }, () => this.checkAllErrors());
  }

  startsWithNumber({ target }) {
    const { name } = target;
    const value = target.value.slice(0);

    if (value.search(/\d/) === 0) {
      this.setState({
        [name]: '',
      }, () => this.checkAllErrors());
    }
  }

  checkAllErrors() {
    const { name, email, cpf, address, city, state, typeRes } = this.state;

    const nameMin = 7;
    const cpfLength = 11;
    const stateOk = state !== 'Selecione um estado';

    const errorCheck = [
      name.length <= nameMin,
      !email.match(/\b[a-z]+(\.|-|\w|\d)*?@[a-z]+\.[a-z]{2,3}(\.br)?$/i),
      cpf.length < cpfLength,
      !address.length,
      !city.length,
      !stateOk,
      !typeRes,
    ];

    const isOk = errorCheck.every((error) => error !== true);

    this.setState({ formWithError: !isOk });
  }

  render() {
    const {
      name,
      email,
      cpf,
      address,
      city,
      state,
      formWithError,
    } = this.state;

    const isOk = 'Todos os campos foram preenchidos !!!';

    const isNotOk = '* Preencha todos os campos !';

    return (
      <form className="form">

        <h1 className="title-form">Currículo</h1>

        <fieldset>
          <legend className="personal-data">Dados Pessoais</legend>
          <InputName
            inptName="name"
            inptValue={ name }
            inptFuncChange={ this.handleChange }
          />

          <InputEmail
            inptName="email"
            inptValue={ email }
            inptFuncChange={ this.handleChange }
          />

          <InputCPF
            inptName="cpf"
            inptValue={ cpf }
            inptFuncChange={ this.handleChange }
          />

          <InputAddress
            inptName="address"
            inptValue={ address }
            inptFuncChange={ this.handleChange }
          />

          <InputCity
            inptName="city"
            inptValue={ city }
            inptFuncChange={ this.handleChange }
            inptFuncBlur={ this.startsWithNumber }
          />

          <ComboBoxStates
            name="state"
            onChange={ this.handleChange }
            value={ state }
          />

          <TypeResidence
            radioName="typeRes"
            onChangeHouse={ this.handleChange }
            onChangeApart={ this.handleChange }
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
