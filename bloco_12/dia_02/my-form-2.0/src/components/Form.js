import React, { Component } from 'react';
import InputName from './InputName';
import '../App.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      formWithError: true,
    };
    this.handleChange = this.handleChange.bind(this);

    this.checkAll = {
      nameCheck: (name) => name.match(/(\s|[A-Za-z]|[áãéêíóôõú]|'){0,40}/gi)[0],
      checkForm: () => {
        const { name } = this.state;

        const nameMin = 7;

        const errorCheck = [
          name.length <= nameMin,
        ];

        const isOk = errorCheck.every((error) => error !== true);
        console.log(isOk);
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
    const { name, formWithError } = this.state;
    const { nameCheck } = this.checkAll;
    return (
      <form className="form">
        <legend className="legend-form">Currículo</legend>
        <fieldset>
          <InputName
            inptName="name"
            inptValue={ !name ? name : nameCheck(name).toUpperCase() }
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
