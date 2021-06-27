import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import '../App.css';

class InputName extends Component {
  nameCheck({ target }) {
    const check = target.value.match(/(\s|[a-záãéêíóôõúç]|'){0,40}/gi)[0];
    target.value = check.toUpperCase();
  }

  render() {
    const { inptValue, inptFuncChange, inptName } = this.props;

    return (
      <Input
        inptTitle="Nome : "
        inptName={ inptName }
        inptClass="input-name"
        inptId="input-name"
        inptValue={ inptValue }
        inptFuncChange={ (e) => {
          this.nameCheck(e);
          inptFuncChange(e);
        } }
      />
    );
  }
}

InputName.propTypes = {
  inptName: PropTypes.string.isRequired,
  inptValue: PropTypes.string,
  inptFuncChange: PropTypes.func.isRequired,
};

InputName.defaultProps = {
  inptValue: '',
};

export default InputName;
