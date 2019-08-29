import React, { Component } from 'react';
import './Logo.scss';

class Logo extends Component {
	render () {
		return (
			<div className="logo-container">
				<a href={this.props.link} target="_blank" rel="noopener noreferrer" className="logo-link">
					<img src={this.props.image} className="logo-img" alt="hello" />
				</a>
			</div>
		);
	}
}

export default Logo;
