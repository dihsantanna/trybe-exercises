import React, { Component } from 'react';
import Input from './Input';
import '../App.css';

class Form extends Component {
  render() {
    return (
      <form className="form">
        <legend className="legend-form">Currículo</legend>
        <Input />
      </form>
    );
  }
}

export default Form;
