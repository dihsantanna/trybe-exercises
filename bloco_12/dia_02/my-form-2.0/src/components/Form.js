import React, { Component } from 'react';
import InputName from './InputName';
import '../App.css';

class Form extends Component {
  render() {
    return (
      <form className="form">
        <legend className="legend-form">Currículo</legend>
        <fieldset>
          <InputName inptName="name" />
        </fieldset>
      </form>
    );
  }
}

export default Form;
