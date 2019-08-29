import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
	render () {
		return (
			<div className="footer-component">
				<div className="footer-info">
					<section className="mapouter">
						<div className="gmap_canvas">
							<iframe
								width="650"
								height="350"
								id="gmap_canvas"
								src="https://maps.google.com/maps?q=382%20New%20York%20Ave%2C%20Huntington%2C%20NY%2011743&t=&z=15&ie=UTF8&iwloc=&output=embed"
								frameBorder="0"
								scrolling="no"
								marginHeight="0"
								marginWidth="0"
							/>Google Maps Generator by <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
						</div>
					</section>
					<section className="store-info">
						<h3>
							<a target="_blank" href="tel:6312714434" rel="noopener noreferrer">
								631.271.4434
							</a>
						</h3>
						<h3>
							<a href="mailto:sales@sound-insight.com">sales@sound-insight.com</a>
						</h3>
						<h3>
							<strong>ADDRESS:</strong>
						</h3>
						<h3>382 New York Ave</h3>
						<h3>Huntington, NY 11743</h3>
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
				</div>
			</div>
		);
	}
}

export default Footer;
