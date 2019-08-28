import React, { Component } from 'react';
import './ServicesProvided.scss';
import { NavLink } from 'react-router-dom';

class ServicesProvided extends Component {
	render () {
		return (
			<div className="services-provided">
				<section className="header">
					<h1 className="title">Our goal is the same today as it was the first day we opened...</h1>
					<h2 className="subtitle">Provide our customers with the best Audio, Video, and Customer Experience.</h2>
				</section>
				<hr className="page-break" />
				<section className="services-info">
					<div className="automation service">
						<NavLink to="/automation">
							<img src={require('../../assets/images/homeAutomation.jpg')} alt="Speakers" className="service-img" />
							<h3>HOME AUTOMATION</h3>
						</NavLink>
						<p>
							From projects small to large, new and old, we create systems with the power and performance to transform
							your lifestyle into complete and brilliant experiences that fit your needs and are easy for your family to
							enjoy. With one touch dim the lights, stream high-resolution music, turn up the heat, lock the doors and
							arm the security system. Or, check in on your home no matter where you are. It’s a smarter living
							experience that you’ll wonder how you ever lived without.
						</p>
					</div>
					<div className="video service">
						<NavLink to="/video">
							<img src={require('../../assets/images/hometheater.jpg')} alt="Speakers" className="service-img" />
							<h3>HOME CINIMA</h3>
						</NavLink>
						<p>
							Sound Insight can plan, design, and install a custom and dedicated home-cinema solution tailored to your
							needs. From the initial conceptual stage to acoustical engineering, noise and vibration abatement, audio
							and video component selection, projector selection and configuration, screen selection, theater lighting
							consideration, and specialized seating and interior design, our experienced team is there to walk you
							through the process.
						</p>
					</div>
					<div className="audio service">
						<NavLink to="/audio">
							<img src={require('../../assets/images/homeaudio2.jpg')} alt="Speakers" className="service-img" />
							<h3>HOME AUDIO</h3>
						</NavLink>
						<p>
							A great audio system begins with a thoughtful and comprehensive design phase. Our design team will
							carefully identify each of your requirements, explore all options with you, and make the appropriate
							recommendations. Our team is also available to coordinate our work with your builder, general contractors,
							interior designer, or landscape architect.
						</p>
					</div>
					<div className="security service">
						<NavLink to="/security">
							<img src={require('../../assets/images/securitysystems.jpg')} alt="Speakers" className="service-img" />
							<h3>SECURITY</h3>
						</NavLink>
						<p>
							Sound Insight offers a turnkey solution for video surveillance and security system installation. We can
							offer you peace of mind that your business or residence is protected 24 hours a day. Security Camera and
							Video Surveillance Systems, also referred to as CCTV systems, DVR security, or IP cameras can be a great
							tool to protect your company or commercial properties from theft, damaging lawsuits, employee misconduct,
							and vandalism.
						</p>
					</div>
				</section>
			</div>
		);
	}
}

export default ServicesProvided;
