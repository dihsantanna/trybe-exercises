import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import '../App.css';

class InputName extends Component {
  render() {
    const { inptValue, inptFuncChange, inptName } = this.props;

    return (
      <Input
        inptTitle="Nome : "
        inptName={ inptName }
        inptClass="input-name"
        inptId="input-name"
        inptValue={ inptValue }
        inptFuncChange={ inptFuncChange }
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
