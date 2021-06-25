import React from 'react';

class Button extends React.Component {
    render() {
        const props = this.props;
        return (
            <button type={props.btnType} className={props.btnClass} onClick={props.btnFunc}>{props.btnText}</button>
        )
    }
}

export default Button;
