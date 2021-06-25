import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
    render() {
        const props = this.props;
        return (
            <button type={props.btnType} className={props.btnClass} onClick={props.btnFunc} value={props.btnValue}>{props.btnText}</button>
        )
    }
}

Button.propTypes = {
    btnType: PropTypes.string.isRequired,
    btnClass: PropTypes.string,
    btnFunc: PropTypes.func,
    btnValue: PropTypes.string,
    btnText: PropTypes.string.isRequired,
}

Button.defaultProps = {
    btnClass: '',
    btnFunc: '',
    btnValue: '',
}

export default Button;
