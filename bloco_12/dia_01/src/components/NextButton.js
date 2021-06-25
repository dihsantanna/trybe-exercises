import React from 'react';
import Button from './Button';
import './css/nextButton.css';

class NextButton extends React.Component {
    render() {
        const props = this.props;
        return (
            <Button btnType={props.btnType} btnClass={'btn-next'} btnFunc={props.btnFunc} btnText={'Next Pokemon'} />
        )
    }
}

export default NextButton;
