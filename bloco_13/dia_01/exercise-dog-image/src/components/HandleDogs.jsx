import React from 'react';
import PropTypes from 'prop-types';

class HandleDogs extends React.Component {
  constructor() {
    super();
    this.state = {
      inputName: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleChange({ target }) {
    const value = target.value;
    this.setState({ [target.name]: value })
  }

  onClick() {
    const { onClickSave } = this.props
    onClickSave(this.state);
    this.setState({ inputName: '' });
  }

  render() {
    const { onClickRefresh } = this.props;
    const { inputName } = this.state;
    return (
      <div className="handleDogs">
        <button
          type="button"
          onClick={ onClickRefresh }
          className="refresh"
        >

          Refresh
          
        </button>

        <input
          className='input-dogName'
          type="text"
          onChange={ this.handleChange }
          value={ inputName }
          name='inputName'
          placeholder="Dê um novo nome ao doguinho"
        />
        <button
          className="save-dog"
          onClick={ this.onClick }
          type="button"
        >
          Salvar Dog
        </button>

      </div>
    );
  }
}

HandleDogs.propTypes = {
  onClickRefresh: PropTypes.func.isRequired,
}

export default HandleDogs;
