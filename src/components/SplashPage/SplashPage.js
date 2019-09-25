import React, { Component } from 'react';

class SplashPage extends Component {
	render () {
		return (
			<div className="splash-page">
				<div className="color-overlay" />
				<img
					src={require(`../../assets/images/${this.props.image.toLowerCase()}`)}
					className="splash-img"
					alt={this.props.altText}
				/>
				<div className="splash-desc">
					<p>{this.props.subtitle}</p>
					<p>
						<strong>{this.props.title}</strong>
					</p>
				</div>
			</div>
		);
	}
}

export default SplashPage;
