import React, { Component } from 'react';
import './MapPopUp.scss';

class MapPopUp extends Component {
	render () {
		return (
			<div className="map-popup">
      <img src="https://i.imgur.com/nA0azY8.png" alt="" className="close-popup" onClick={this.props.closeMap} />
				<section className="map">
					<div className="mapouter">
						<div className="gmap_canvas">
							<iframe
								width="350"
								height="800"
								id="gmap_canvas"
								src="https://maps.google.com/maps?q=382%20New%20York%20Ave%20Huntington%2C%20NY%2011743&t=&z=13&ie=UTF8&iwloc=&output=embed"
								frameborder="0"
								scrolling="no"
								marginheight="0"
								marginwidth="0"
							/>Google Maps Generator by <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default MapPopUp;
