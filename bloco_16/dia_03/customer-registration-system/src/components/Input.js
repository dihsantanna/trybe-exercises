import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      className,
      id,
      name,
      type,
      placeholder,
      value,
      onChange,
      onBlur,
      text,
    } = this.props;
    return (
      <label className={ className } htmlFor={ id }>
        {text}
        <input
          name={ name }
          type={ type }
          id={ id }
          placeholder={ placeholder }
          value={ value }
          onChange={ onChange }
          onBlur={ onBlur }
        />
      </label>
    );
  }
}

Input.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.node,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  text: PropTypes.string,
};

Input.defaultProps = {
  className: '',
  id: '',
  name: '',
  type: 'text',
  placeholder: '',
  value: '',
  onChange: () => {},
  onBlur: () => {},
  text: '',
};

export default Input;
