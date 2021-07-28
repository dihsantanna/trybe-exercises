import React from 'react';
import PropTypes from 'prop-types';

class Footer extends React.Component {
  render() {
    const { className } = this.props;
    return (
      <footer className={ className }>
        <h5>Todos os direitos reservados a Paturso Corporation.</h5>
      </footer>
    );
  }
}

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: '',
};

export default Footer;
