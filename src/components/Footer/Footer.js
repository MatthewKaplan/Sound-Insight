import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
	render () {
		return (
			<div className="footer-component">
				<div className="footer-info">
					<div class="mapouter">
						<div class="gmap_canvas">
							<iframe
								width="550"
								height="350"
								id="gmap_canvas"
								src="https://maps.google.com/maps?q=382%20New%20York%20Ave%20Huntington%2C%20NY%2011743&t=&z=15&ie=UTF8&iwloc=&output=embed"
								frameborder="0"
								scrolling="no"
								marginheight="0"
								marginwidth="0"
							/>
							<a href="https://www.utilitysavingexpert.com">Utility Saving Expert</a>
						</div>
					</div>
					<section className="store-info">
						<div className="store-contact-info">
							<h3>
								<a target="_blank" href="tel:6312714434" rel="noopener noreferrer">
									631.271.4434
								</a>
							</h3>
							<h3 className="email">
								<a href="mailto:sales@sound-insight.com">sales@sound-insight.com</a>
							</h3>
						</div>
						<section className="store-information">
							<section className="store-address">
								<h3>
									<strong>ADDRESS:</strong>
								</h3>
								<h3>382 New York Ave</h3>
								<h3>Huntington, NY 11743</h3>
							</section>
							<section className="store-hours">
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
					</section>
				</div>
			</div>
		);
	}
}

export default Footer;
