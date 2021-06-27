import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class Input extends Component {
  render() {
    const {
      inptName,
      inptClass,
      inptId,
      inptValue,
      inptCheck,
      inptType,
      inptFuncChange,
      inptFuncBlur,
    } = this.props;

    return (
      <label htmlFor={ inptId }>
        <input
          name={ inptName }
          className={ inptClass }
          id={ inptId }
          value={ inptValue }
          checked={ inptCheck }
          type={ inptType }
          onChange={ inptFuncChange }
          onBlur={ inptFuncBlur }
        />
      </label>
    );
  }
}

Input.propTypes = {
  inptName: PropTypes.string.isRequired,
  inptClass: PropTypes.string,
  inptId: PropTypes.string.isRequired,
  inptValue: PropTypes.string,
  inptCheck: PropTypes.bool,
  inptType: PropTypes.string,
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
