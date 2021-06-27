import React, { Component } from 'react';
import PropTypes from 'prop-types';
import states from '../optionsState';
import '../App.css';

class ComboBoxStates extends Component {
  renderStates() {
    return states.map((state) => (
      <option className="state" value={ state } key={ state }>
        { state }
      </option>
    ));
  }

  render() {
    const { onChange, name, value } = this.props;
    return (
      <label htmlFor="states">

        { 'Estado : ' }

        <select
          id="states"
          onChange={ onChange }
          name={ name }
          value={ value }
        >

          { this.renderStates() }

        </select>

      </label>
    );
  }
}

ComboBoxStates.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default ComboBoxStates;
