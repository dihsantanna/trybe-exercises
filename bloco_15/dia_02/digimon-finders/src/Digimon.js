import React from 'react';
import PropTypes from 'prop-types';

class Digimon extends React.Component {
  render() {
    const { digimon } = this.props;
    return (
      <div>
        <h2 data-testid="digimonName">{ digimon.name }</h2>
        <p data-testid="digimonLevel">{ `level: ${digimon.level}` }</p>
        <img src={ digimon.img } alt={ digimon.name } />
      </div>
    );
  }
}

Digimon.propTypes = {
  digimon: PropTypes.shape({
    name: PropTypes.string,
    level: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
};

export default Digimon;
