import React, { Component } from 'react';

class HoursPopUp extends Component {
	render () {
		return (
			<div className="hours-popup">
				<div className="form-information">
					<img src="https://i.imgur.com/nA0azY8.png" alt="" className="close-popup" onClick={this.props.closeHours} />
					<table>
						<tr>
							<td className="date">MON</td>
							<td className="time">10am - 6pm</td>
						</tr>

						<tr>
							<td className="date">TUE</td>
							<td className="time">10am - 6pm</td>
						</tr>
						<tr>
							<td className="date">WED</td>
							<td className="time">10am - 6pm</td>
						</tr>
						<tr>
							<td className="date">THU</td>
							<td className="time">10am - 6pm</td>
						</tr>
						<tr>
							<td className="date">FRI</td>
							<td className="time">10am - 6pm</td>
						</tr>

						<tr>
							<td className="date">SAT</td>
							<td className="time">10am - 6pm</td>
						</tr>
						<tr>
							<td className="date">SUN</td>
							<td className="date">By Appt. Only</td>
						</tr>
					</table>
				</div>
			</div>
		);
	}
}

export default HoursPopUp;
