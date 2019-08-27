import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
	render () {
		return (
			<div className="footer-component">
				<div className="mapouter">
					<div className="gmap_canvas">
						<iframe
							width="1056"
							height="300"
							id="gmap_canvas"
							src="https://maps.google.com/maps?q=382%20New%20York%20Ave%2C%20Huntington%2C%20NY%2011743&t=&z=15&ie=UTF8&iwloc=&output=embed"
							frameborder="0"
							scrolling="no"
							marginheight="0"
							marginwidth="0"
						/>Google Maps Generator by <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;
