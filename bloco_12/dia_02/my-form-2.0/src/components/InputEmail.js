import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import '../App.css';

class InputEmail extends Component {
  emailCheck({ target }) {
    const check = target.value.match(/(\w|\d|\.|@|-){0,50}/gi)[0];
    target.value = check.toLowerCase();
  }

  render() {
    const { inptValue, inptFuncChange, inptName } = this.props;

    return (
      <Input
        inptTitle="Email : "
        inptName={ inptName }
        inptClass="input-email"
        inptId="input-email"
        inptValue={ inptValue }
        inptFuncChange={ (e) => {
          this.emailCheck(e);
          inptFuncChange(e);
        } }
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
