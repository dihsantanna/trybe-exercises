import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import '../App.css';

class InputAddress extends Component {
  addressCheck({ target }) {
    const check = target.value.match(/(\s|[a-záãéêíóôõúç\d]){0,200}/gi)[0];
    target.value = check.toUpperCase();
  }

  render() {
    const { inptValue, inptFuncChange, inptName } = this.props;

    return (
      <Input
        inptTitle="Endereço : "
        inptName={ inptName }
        inptClass="input-Address"
        inptId="input-Address"
        inptValue={ inptValue }
        inptFuncChange={ (e) => {
          this.addressCheck(e);
          inptFuncChange(e);
        } }
      />
    );
  }
}

InputAddress.propTypes = {
  inptName: PropTypes.string.isRequired,
  inptValue: PropTypes.string,
  inptFuncChange: PropTypes.func.isRequired,
};

InputAddress.defaultProps = {
  inptValue: '',
};

export default InputAddress;
