import React, { Component } from 'react';
import './MainServices.scss';
import { NavLink } from 'react-router-dom';

class MainServices extends Component {
	render () {
		return (
			<div className="main-services">
				<h1>QUALITY, INTEGRITY, EXCELLENCE</h1>
				<p className="mission">
					Sound Insight starts with quality, taking to heart the needs of the customer first.
				</p>
				<p className="mission">
					We have built a reputation on being the very best on Long Island.
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
						<NavLink to="/audio">
							{/*<img src={require('../../assets/images/audio.jpeg')} alt="Speakers" className="service-img" />*/}
							<img src='https://i.imgur.com/iZ7e76p.jpg?1' alt="Speakers" className="service-img" />
							<h3>AUDIO</h3>
						</NavLink>
						<p className="service-desc">The best in both Analog and Digital Home Audio Systems</p>
					</section>
					<section className="service">
						<NavLink to="/video">
							<img src={require('../../assets/images/video.jpeg')} alt="Home theater" className="service-img" />
							<h3>VIDEO</h3>
						</NavLink>
						<p className="service-desc">
							We work with all manufactures to insure the optimal video solution to fit your needs
						</p>
					</section>
					<section className="service">
						<NavLink to="/automation">
							<img src={require('../../assets/images/automation.jpg')} alt="iPad" className="service-img" />
							<h3>AUTOMATION</h3>
						</NavLink>
						<p className="service-desc">Intuitive and efficient Smart Home Solutions for any scale project</p>
					</section>
				</div>
				<section className="store-image">
					<div className="image-overlay" />
					<img
						src={require('../../assets/images/store-front.jpg')}
						alt="Sound Insight store front"
						className="store-front-img"
					/>
					<div className="splash-desc">
						<p>
							<strong>Our Showroom</strong>
						</p>
						<p>Huntington, NY</p>
					</div>
				</section>
				<section className="store-info">
					<h1>Explore what is possible.</h1>
					<p className="showroom-info">
						Our showroom was built so that you can explore what is possible in Home Entertainment Technologies. We have
						dedicated Stereo and Home Cinema rooms, with an assortment of the newest technologies.
					</p>
					<div className="top-images">
						<img src="https://i.imgur.com/9CUZNiH.jpg" alt="inside store" className="store2" />
						<img src="https://i.imgur.com/p3UDEkt.jpg" alt="inside store" className="store1" />
					</div>
					<img src="https://i.imgur.com/LwDrhsN.jpg" alt="inside store" className="store3" />
					<img src="https://i.imgur.com/ZystdQI.jpg" alt="inside store" className="store4" />
				</section>
			</div>
		);
	}
}
export default MainServices;
