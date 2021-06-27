import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import '../App.css';

class InputCPF extends Component {
  cpfCheck({ target }) {
    const check = target.value.match(/\d{0,11}/)[0];
    target.value = check;
  }

  render() {
    const { inptValue, inptFuncChange, inptName } = this.props;

    return (
      <Input
        inptTitle="CPF : "
        inptName={ inptName }
        inptClass="input-cpf"
        inptId="input-cpf"
        inptValue={ inptValue }
        inptFuncChange={ (e) => {
          this.cpfCheck(e);
          inptFuncChange(e);
        } }
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
