import React, { Component } from 'react';
import SplashPage from '../SplashPage/SplashPage';
import DemoRequest from '../DemoRequest/DemoRequest';
import SurveyRequest from '../SurveyRequest/SurveyRequest';
import ContactForm from '../ContactForm/ContactForm';

class ContactPage extends Component {
	state = { demoRequest: false, estimateRequest: false, contactUs: false };

	componentDidMount () {
		window.scrollTo(0, 0);
	}
	
	closeForms = () => {
		this.setState({
			demoRequest: false,
			estimateRequest: false,
			contactUs: false
		});
	};

	render () {
		const { demoRequest, estimateRequest, contactUs } = this.state;

		return (
			<div className="contact-page">
				<SplashPage image="store.jpg" altText="Sound Insight store front" subtitle="" title="We're here for you!" />
				<section className="contact-page-contents">
					<h1>Please let us know how we can help...</h1>
					<div className="break-line">
						<hr className="page-break" />
					</div>
					<div className="button-container">
						<input
							type="submit"
							value="REQUEST A DEMO"
							className="contact-btn"
							onClick={() => this.setState({ demoRequest: true })}
						/>
						<input
							type="submit"
							value="REQUEST A FREE ESTIMATE"
							className="contact-btn"
							onClick={() => this.setState({ estimateRequest: true })}
						/>
						<input
							type="submit"
							value="CONTACT US"
							className="contact-btn"
							onClick={() => this.setState({ contactUs: true })}
						/>
					</div>
					<div className="break-line">
						<hr className="page-break" />
					</div>
					<div className="store-info">
						<section className="store-address">
							<section className="address">
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
						<h3 className="phone-number">
							<a target="_blank" href="tel:6312714434" rel="noopener noreferrer">
								631.271.4434
							</a>
						</h3>
						<h3 className="email">
							<a href="mailto:sales@sound-insight.com">sales@sound-insight.com</a>
						</h3>
					</div>
					{demoRequest === true && <DemoRequest closeForm={this.closeForms} />}
					{estimateRequest === true && <SurveyRequest closeForm={this.closeForms} />}
					{contactUs === true && <ContactForm closeForm={this.closeForms} />}
				</section>
			</div>
		);
	}
}

export default ContactPage;
