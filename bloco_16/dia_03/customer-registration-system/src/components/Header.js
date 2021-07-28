import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { className } = this.props;
    return (
      <header className={ className }>
        <h1>Paturso Corporation</h1>
      </header>
    );
  }
}

Header.propTypes = {
  className: PropTypes.string,
};

Header.defaultProps = {
  className: '',
};

export default Header;
