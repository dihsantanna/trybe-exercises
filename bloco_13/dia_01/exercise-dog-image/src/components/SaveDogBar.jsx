import React from 'react';
import PropTypes from 'prop-types';

class SaveDogBar extends React.Component {
	constructor() {
		super();
		this.state = {
			setName: '',
			setSrc: '',
		}
		this.saveDogList = this.saveDogList.bind(this);
		this.getMyDog = this.getMyDog.bind(this);
	}
	getMyDog({ target }) {
		const { alt, src } = target;
		const { onClick } = this.props;
		this.setState((state) => ({
			...state,
			setName: alt,
			setSrc: src,
		}), () => onClick(this.state))
		
	}

	saveDogList() {
		const { myDogsList } = this.props;
		return myDogsList.map((dog) => {
				return (
					<li
						key={ dog.src }
						className="dog"
						onClickCapture={ this.getMyDog }
					>
						<img
							src={ dog.src }
							alt={ dog.name }
						/>
						<span>{ dog.name }</span>
					</li>
				);
			})
	}
	render() {
			return(
					<div className="dog-list">
						<ul>
							{ this.saveDogList() }
					</ul>
					</div>
			);
	};
};

SaveDogBar.propTypes = {
	onClick: PropTypes.func.isRequired,
	myDogsList: PropTypes.arrayOf(PropTypes.exact(
		{
			src: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		}
	)).isRequired,
}

export default SaveDogBar;
