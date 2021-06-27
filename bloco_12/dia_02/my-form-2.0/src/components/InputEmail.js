import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import '../App.css';

class InputEmail extends Component {
  render() {
    const { inptValue, inptFuncChange, inptName } = this.props;

    return (
      <Input
        inptTitle="Email : "
        inptName={ inptName }
        inptClass="input-email"
        inptId="input-email"
        inptValue={ inptValue }
        inptFuncChange={ inptFuncChange }
      />
    );
  }
}

InputEmail.propTypes = {
  inptName: PropTypes.string.isRequired,
  inptValue: PropTypes.string,
  inptFuncChange: PropTypes.func.isRequired,
};

InputEmail.defaultProps = {
  inptValue: '',
};

export default InputEmail;
