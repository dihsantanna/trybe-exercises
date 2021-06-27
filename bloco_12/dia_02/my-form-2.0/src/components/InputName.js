import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import '../App.css';

class InputName extends Component {
  render() {
    const { inptValue, inptFuncChange, inptName } = this.props;

    return (
      <Input
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
  inptFuncChange: PropTypes.func,
};

InputName.defaultProps = {
  inptValue: '',
  inptFuncChange: () => {},
};

export default InputName;
