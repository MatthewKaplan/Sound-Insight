import React, { Component } from 'react';
import './CareersPage.scss';
import SplashPage from '../SplashPage/SplashPage';
import ApplicationForm from '../ApplicationForm/ApplicationForm';

class CareersPage extends Component {
	state = { application: false };
	componentDidMount () {
		window.scrollTo(0, 0);
	}

	closeForm = () => {
		this.setState({
			application: false
		});
	};

	render () {
		const { application } = this.state;
		return (
			<div className="careers-component">
				<SplashPage image="tool-pegboard.jpg" altText="Living room" subtitle="WE'RE HIRING" title="CAREERS" />
				<section className="page-heading">
					<h1>Sound Insight is always looking for new employees to add to our team.</h1>
					<p>
						Our growth has been far greater than expected and our NEED for qualified <strong>Installers</strong> and
						<strong> Sales Help</strong> grows as well.
					</p>
					<p>
						If you have an Interest and the Experience, please apply below and we will get back to you as soon as
						possible.
					</p>
				</section>
				<section className="application-btn-container">
					<div className="break-line">
						<hr className="page-break" />
					</div>
					<input
						type="submit"
						value="APPLY"
						className="contact-btn"
						onClick={() => this.setState({ application: true })}
					/>
					<div className="break-line">
						<hr className="page-break" />
					</div>
				</section>
				{application === true && <ApplicationForm closeForm={this.closeForm} />}
			</div>
		);
	}
}

export default CareersPage;
