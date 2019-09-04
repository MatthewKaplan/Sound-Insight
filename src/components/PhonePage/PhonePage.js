import React, { Component } from 'react';
import './PhonePage.scss';

class PhonePage extends Component {
	componentDidMount () {
		window.scrollTo(0, 0);
	}

	render () {
		return (
			<div className="phone-page">
				<div className="header" />
				<div className="security-info">
					<section className="page-heading">
						<h1>Phone Systems</h1>
						<p>
							Technology is evolving at a faster pace than ever before. To keep up, desktop telephones need to evolve to
							meet the ever-changing demands of today's workforce. Sound Insight offers a one-stop solution for your
							business and residential communication needs.
						</p>
					</section>
					<section className="security-systems">
						<img src="https://i.imgur.com/C3v3osV.jpg" alt="honeywell security" className="honeywell-img" />
						<h2>NEC SYSTEMS</h2>
						<p>
							NEC has been a Information and Communications Technology (ICT) leader in operation for 120 years, NEC is
							committed to bringing together and integrating its technology and expertise to create the ICT-enabled
							society of tomorrow. NEC is enabling new approaches in how Communications and IT services are delivered
							and managed so organizations can operate more safely and efficiently including delivering more engaging
							customer experiences.
						</p>
					</section>
					<div className="bottom-services">
						<section className="desktop-phones">
							<img src="https://i.imgur.com/rO1vQaz.jpg" alt="camera security system" className="camera-img" />
							<h2>DESKTOP PHONES</h2>
							<p>
								Despite the increased reliance on mobile devices, desktop telephones remain at the hub of business
								communications. But to stay relevant the traditional desktop telephone must integrate and evolve to meet
								the ever-changing demands of today's workforce. This means maximum deployment flexibility that supports
								a wide range of applications to improve employee overall performance and be customizable to specific
								communication needs, including access to desktop and mobile functionality.
							</p>
						</section>
						<section className="wireless-phones">
							<img src="https://i.imgur.com/lfHNrM3.png" alt="tablet security" className="tablet-img" />
							<h2>WIRELESS PHONES</h2>
							<p>
								With our mobile handsets and on-site phones employees no longer need to remain at their desk to respond
								to requests and to get their work done. Regarding of where they are on-site employees have total control
								over how, when and where to be reached for improved responsiveness to colleagues and customers alike.
							</p>
						</section>
					</div>
				</div>
			</div>
		);
	}
}

export default PhonePage;
