import React, { Component } from 'react';

class Logo extends Component {
	render () {
		console.log(this.props.image);
		return (
			<div>
				<img
					src={this.props.image}
					// src={require(`../../assets/images/${this.props.image.toLowerCase()}`)}
					className="logo-img"
					alt="hello"
					// alt={this.props.altText}
				/>
			</div>
		);
	}
}

export default Logo;