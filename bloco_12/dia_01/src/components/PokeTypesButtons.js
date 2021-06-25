import React from 'react';
import Button from './Button';
import './css/pokeTypesButtons.css';

class PokeTypesButtons extends React.Component {
    render() {
        const props = this.props;
        return (
            <div className="poke-type">
                <Button btnType='button' btnClass='btn-psychic btn-type' btnFunc={props.btnFunc} btnText='Psychic'/>
                <Button btnType='button' btnClass='btn-fire btn-type' btnFunc={props.btnFunc} btnText='Fire'/>
            </div>
        )
    }
}

export default PokeTypesButtons;
