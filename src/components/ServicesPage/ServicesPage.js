import React, { Component } from 'react';
import SplashPage from '../SplashPage/SplashPage';
import ServicesProvided from '../ServicesProvided/ServicesProvided';
import { Helmet } from 'react-helmet';

class ServicesPage extends Component {
	componentDidMount () {
		window.scrollTo(0, 0);
	}
	
	render () {
		return (
			<div>
				<Helmet>
					<title>Audio, Video, Home Automation Services  - Sound Insight</title>
					<meta name="description" content="We provide our clients with a complete range of audio-video solutions, smart home automation, security solutions, phone systems, and IT solutions." />
				</Helmet>
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
