import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import '../App.css';

class InputAddress extends Component {
  render() {
    const { inptValue, inptFuncChange, inptName } = this.props;

    return (
      <Input
        inptTitle="Endereço : "
        inptName={ inptName }
        inptClass="input-Address"
        inptId="input-Address"
        inptValue={ inptValue }
        inptFuncChange={ inptFuncChange }
      />
    );
  }
}

InputAddress.propTypes = {
  inptName: PropTypes.string.isRequired,
  inptValue: PropTypes.string,
  inptFuncChange: PropTypes.func,
};

InputAddress.defaultProps = {
  inptValue: '',
  inptFuncChange: () => {},
};

export default InputAddress;
