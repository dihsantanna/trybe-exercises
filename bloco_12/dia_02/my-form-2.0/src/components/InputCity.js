import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import '../App.css';

class InputCity extends Component {
  cityCheck({ target }) {
    const check = target.value.match(/(\S|\s){0,28}/gi)[0];
    target.value = check.toUpperCase();
  }

  render() {
    const { inptValue, inptFuncChange, inptName, inptFuncBlur } = this.props;

    return (
      <Input
        inptTitle="Cidade : "
        inptName={ inptName }
        inptClass="input-Address"
        inptId="input-Address"
        inptValue={ inptValue }
        inptFuncChange={ (e) => {
          this.cityCheck(e);
          inptFuncChange(e);
        } }
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
