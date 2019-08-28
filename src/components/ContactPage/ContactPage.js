import React, { Component } from 'react';
import SplashPage from '../SplashPage/SplashPage';
import './ContactPage.scss';

class ContactPage extends Component {
	render () {
		return (
			<div className="contact-page">
				<SplashPage image="store.jpeg" altText="Sound Insight store front" subtitle="" title="We're here for you!" />
				<h1>Please let us know how we can help...</h1>
				<div className="break-line">
					<hr className="page-break" />
				</div>
				<div className="button-container">
					<input type="submit" value="REQUEST A DEMO" className="contact-btn" />
					<input type="submit" value="REQUEST A SURVEY" className="contact-btn" />
					<input type="submit" value="CONTACT US" className="contact-btn" />
				</div>
				<div className="break-line">
					<hr className="page-break" />
				</div>
				<div className="store-info">
					<section className="store-address">
						<section className="adress">
							<h3>
								<strong>ADDRESS:</strong>
							</h3>
							<h3>382 New York Ave</h3>
							<h3>Huntington, NY 11743</h3>
						</section>
						<section className="hours">
							<h3>
								<strong>Showroom Hours:</strong>
							</h3>
							<h3>
								<strong>MON - SAT:</strong> 10:00 AM - 6:00 PM
							</h3>
							<h3>
								<strong>SUN:</strong> By Appointment Only
							</h3>
						</section>
					</section>
					<h3>
						<a target="_blank" href="tel:6312714434" rel="noopener noreferrer">
							631.271.4434
						</a>
					</h3>
					<h3>
						<a href="mailto:sales@sound-insight.com">sales@sound-insight.com</a>
					</h3>
				</div>
			</div>
		);
	}
}

export default ContactPage;
