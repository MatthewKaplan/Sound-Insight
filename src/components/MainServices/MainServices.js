import React, { Component } from 'react';
import './MainServices.scss';

class MainServices extends Component {
	render () {
		return (
			<div className="main-services">
				<h1>QUALITY, INTEGRITY, EXCELLENCE</h1>
				<p className="mission">
					Sound Insight starts with quality, taking to heart the needs of the customer first. We have built a reputation
					on being the very best on Long Island.
				</p>
				<p className="service-desc contact-info">
					Call us at{' '}
					<strong>
						<a target="_blank" href="tel:6312714434" rel="noopener noreferrer">
							631.271.4434
						</a>
					</strong>{' '}
					or visit our showroom in{' '}
					<strong>
						<a
							target="_blank"
							href="https://maps.google.com?daddr=382+New+York+Avenue+Huntington+NY+11743"
							rel="noopener noreferrer">
							Huntington, NY.
						</a>
					</strong>
				</p>
				<div className="services-wrapper">
					<section className="service">
						<img src={require('../../assets/images/audio.jpeg')} alt="Speakers" className="service-img" />
						<h3>AUDIO</h3>
						<p className="service-desc">The best in both Analog and Digital Home Audio Systems</p>
					</section>
					<section className="service">
						<img src={require('../../assets/images/video.jpeg')} alt="Home theater" className="service-img" />
						<h3>VIDEO</h3>
						<p className="service-desc">
							We work with all manufactures to insure the optimal video solution to fit your needs
						</p>
					</section>
					<section className="service">
						<img src={require('../../assets/images/automation.jpg')} alt="iPad" className="service-img" />
						<h3>AUTOMATION</h3>
						<p className="service-desc">Intuitive and efficient Smart Home Solutions for any scale project</p>
					</section>
				</div>
			</div>
		);
	}
}
export default MainServices;
