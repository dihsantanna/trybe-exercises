import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class Input extends Component {
  render() {
    const {
      inptTitle,
      inptName,
      inptClass,
      inptId,
      inptValue,
      inptCheck,
      inptType,
      inptPlaceholder,
      inptFuncChange,
      inptFuncBlur,
    } = this.props;

    return (
      <label htmlFor={ inptId }>
        { inptTitle }
        <input
          name={ inptName }
          className={ inptClass }
          id={ inptId }
          value={ inptValue }
          checked={ inptCheck }
          type={ inptType }
          placeholder={ inptPlaceholder }
          onChange={ inptFuncChange }
          onBlur={ inptFuncBlur }
        />
      </label>
    );
  }
}

Input.propTypes = {
  inptTitle: PropTypes.string,
  inptName: PropTypes.string.isRequired,
  inptClass: PropTypes.string,
  inptId: PropTypes.string.isRequired,
  inptValue: PropTypes.string,
  inptCheck: PropTypes.bool,
  inptType: PropTypes.string,
  inptPlaceholder: PropTypes.string,
  inptFuncChange: PropTypes.func,
  inptFuncBlur: PropTypes.func,
};

Input.defaultProps = {
  inptTitle: '',
  inptValue: '',
  inptCheck: false,
  inptType: 'text',
  inptPlaceholder: '',
  inptClass: '',
  inptFuncChange: () => {},
  inptFuncBlur: () => {},
};

export default Input;
