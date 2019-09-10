import React, { Component } from 'react';
import './CareersPage.scss';
import SplashPage from '../SplashPage/SplashPage';

class CareersPage extends Component {
	render () {
		return (
			<div className="careers-component">
				<SplashPage image="tool-pegboard.jpg" altText="Living room" subtitle="WE'RE HIRING" title="CAREERS" />
				<section className="page-heading">
					<h1>Sound Insight is always looking for new employees to add to our team.</h1>
					<p>
						Our growth has been far greater than expected and our NEED for qualified <strong>Installers</strong> and
						<strong> Sales Help</strong> grows as well.
					</p>
				</section>
			</div>
		);
	}
}

export default CareersPage;
