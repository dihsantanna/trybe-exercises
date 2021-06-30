import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import '../App.css';

class TypeResidence extends Component {
  render() {
    const { radioName, onChangeHouse, onChangeApart, typeRes } = this.props;
    return (
      <div>
        {'Tipo : '}
        <Input
          inptTitle="Casa"
          inptName={ radioName }
          inptId="house"
          inptClass="type-res"
          inptValue="Casa"
          inptType="radio"
          inptFuncChange={ onChangeHouse }
          typeRes={ typeRes }
        />

        <Input
          inptTitle="Apartamento"
          inptName={ radioName }
          inptId="apart"
          inptClass="type-res"
          inptValue="Apartamento"
          inptType="radio"
          inptFuncChange={ onChangeApart }
        />
        <div>{ typeRes ? '' : '* Campo Obrigatório' }</div>
      </div>
    );
  }
}

TypeResidence.propTypes = {
  radioName: PropTypes.string.isRequired,
  onChangeHouse: PropTypes.func.isRequired,
  onChangeApart: PropTypes.func.isRequired,
  typeRes: PropTypes.string,
};

TypeResidence.defaultProps = {
  typeRes: '',
};

export default TypeResidence;
