import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Footer extends Component {
	render () {
		return (
			<div className="footer-component">
				<ul className="footer-nav-options">
					<li>
						<NavLink exact to="/audio" activeClassName="active" className="link">
							AUDIO
						</NavLink>
					</li>
					<img src="https://i.imgur.com/o6AzO0S.png" alt="circle" className="dot" />
					<li>
						<NavLink to="/video" activeClassName="active" className="link">
							VIDEO
						</NavLink>
					</li>
					<img src="https://i.imgur.com/o6AzO0S.png" alt="circle" className="dot" />
					<li>
						<NavLink to="/automation" activeClassName="active" className="link">
							AUTOMATION
						</NavLink>
					</li>
					<img src="https://i.imgur.com/o6AzO0S.png" alt="circle" className="dot" />
					<li>
						<NavLink to="/phone-systems" activeClassName="active" className="link">
							PHONES
						</NavLink>
					</li>
					<img src="https://i.imgur.com/o6AzO0S.png" alt="circle" className="dot" />
					<li>
						<NavLink to="/security" activeClassName="active" className="link">
							SECURITY
						</NavLink>
					</li>
					<img src="https://i.imgur.com/o6AzO0S.png" alt="circle" className="dot" />
					<li>
						<NavLink to="/careers" activeClassName="active" className="link">
							CAREERS
						</NavLink>
					</li>
				</ul>
				<div className="footer-info">
					<div className="mapouter">
						<div className="gmap_canvas">
							<iframe
								title="Google map"
								width="550"
								height="350"
								id="gmap_canvas"
								src="https://maps.google.com/maps?q=382%20New%20York%20Ave%20Huntington%2C%20NY%2011743&t=&z=15&ie=UTF8&iwloc=&output=embed"
								frameBorder="0"
								scrolling="no"
								marginHeight="0"
								marginWidth="0"
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
