import { Component } from 'react';
import './App.css';

class Pokemon extends Component {
    render() {
        const { name, type, averageWeight, image } = this.props;

        return (
            <div className="poke-contain">

                <div className="poke-info">
                    <span>{name}</span>
                    <span>{type}</span>
                    <span>Average Weight: {averageWeight.value} {averageWeight.measurementUnit}</span>
                </div>

                <img className="image-poke" src={image} alt={`image-${name}`}/>
                
            </div>
        )
    }
}

export default Pokemon;