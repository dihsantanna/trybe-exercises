import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class Input extends Component {
  render() {
    const {
      inptName,
      inptValue,
      inptCheck,
      inptType,
      inptClass,
      inptFuncChange,
      inptFuncBlur,
    } = this.props;

    return (
      <input
        name={ inptName }
        className={ inptClass }
        value={ inptValue }
        checked={ inptCheck }
        type={ inptType }
        onChange={ inptFuncChange }
        onBlur={ inptFuncBlur }
      />
    );
  }
}

Input.propTypes = {
  inptName: PropTypes.string.isRequired,
  inptValue: PropTypes.string,
  inptCheck: PropTypes.bool,
  inptType: PropTypes.string,
  inptClass: PropTypes.string,
  inptFuncChange: PropTypes.func,
  inptFuncBlur: PropTypes.func,
};

Input.defaultProps = {
  inptValue: '',
  inptCheck: false,
  inptType: 'text',
  inptClass: '',
  inptFuncChange: () => {},
  inptFuncBlur: () => {},
};

export default Input;
