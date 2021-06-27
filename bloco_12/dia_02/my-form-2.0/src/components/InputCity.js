import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import '../App.css';

class InputCity extends Component {
  render() {
    const { inptValue, inptFuncChange, inptName, inptFuncBlur } = this.props;

    return (
      <Input
        inptTitle="Cidade : "
        inptName={ inptName }
        inptClass="input-Address"
        inptId="input-Address"
        inptValue={ inptValue }
        inptFuncChange={ inptFuncChange }
        inptFuncBlur={ inptFuncBlur }
      />
    );
  }
}

InputCity.propTypes = {
  inptName: PropTypes.string.isRequired,
  inptValue: PropTypes.string,
  inptFuncChange: PropTypes.func.isRequired,
  inptFuncBlur: PropTypes.func.isRequired,
};

InputCity.defaultProps = {
  inptValue: '',
};

export default InputCity;
