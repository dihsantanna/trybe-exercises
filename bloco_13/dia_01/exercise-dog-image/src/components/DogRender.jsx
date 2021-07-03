import React from 'react';

class DogRender extends React.Component {
	render() {
		const { srcDog, loading, dogName, race } = this.props;
		return (
			<div className="board-image">

				<div className="image-container">

					{ loading
						? <span className="loading">Loading ...</span>
						: <img src={ srcDog } className="img-dog" alt="imagem-dog"/>}

				</div>

				<div className="dog-data">

				<div>Nome: { dogName }</div>

				<div>Raça: { race }</div>

				</div>
			</div>
		);
	}
}

export default DogRender;
