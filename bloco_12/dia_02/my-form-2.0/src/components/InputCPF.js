import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import '../App.css';

class InputCPF extends Component {
  render() {
    const { inptValue, inptFuncChange, inptName } = this.props;

    return (
      <Input
        inptTitle="CPF : "
        inptName={ inptName }
        inptClass="input-cpf"
        inptId="input-cpf"
        inptValue={ inptValue }
        inptFuncChange={ inptFuncChange }
      />
    );
  }
}

InputCPF.propTypes = {
  inptName: PropTypes.string.isRequired,
  inptValue: PropTypes.string,
  inptFuncChange: PropTypes.func.isRequired,
};

InputCPF.defaultProps = {
  inptValue: '',
};

export default InputCPF;
