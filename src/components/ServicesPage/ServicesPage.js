import React, { Component } from 'react';
import SplashPage from '../SplashPage/SplashPage';
import ServicesProvided from '../ServicesProvided/ServicesProvided';

class ServicesPage extends Component {
	render () {
		return (
			<div>
				<SplashPage
					image="services2.jpg"
					altText="Living room"
					subtitle="We understand what is really needed to bring the full joy of entertainment technologies into our customer's environment."
					title="SERVICES"
				/>
				<ServicesProvided />
			</div>
		);
	}
}

export default ServicesPage;
