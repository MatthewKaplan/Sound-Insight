import React, { Component } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './DemoRequest.scss';

class DemoRequest extends Component {
	state = { phone: '', firstName: '', lastName: '', email: '', desiredDemo: '', dateRequested: '', timeRequested: '' };

	render () {
		return (
			<div className="demo-request-form">
				<div className="form-information">
					<img
						src="https://i.imgur.com/FvyNCGT.png"
						alt="close button"
						className="close-form"
						onClick={() => this.props.closeForm()}
					/>
					<h1>Request Demo</h1>
					<h3 className="name-label">Name*</h3>
					<div className="name-forms">
						<section className="fist-name-form">
							<input type="text" className="first-name form-input" /> <br />
							<label className="name-label">First Name</label>
						</section>
						<section className="last-name-form">
							<input type="text" className="last-name form-input" /> <br />
							<label className="name-label">Last Name</label>
						</section>
					</div>
					<div className="desired-demo">
						<h3>Desired Demo*</h3>
						<textarea
							name=""
							id=""
							cols="60"
							rows="10"
							placeholder="Please let us know what equipment you would like to experience."
						/>
					</div>
					<div className="requested-date">
						<h3>Date Requested*</h3>
						<div className="date-input">
							<input type="date" id="start" name="trip-start" min="2019-09-01" max="2022-12-31" className="date-form" />
						</div>
					</div>
					<div className="requested-time">
						<h3>Time*</h3>
						<select id="pet-select" className="time-form">
							<option value="" className="placeholder-text">
								--Please choose a Time--
							</option>
							<optgroup label="Morning">
								<option value="9:00 AM - 10:00 AM">9:00 AM - 10:00 AM</option>
								<option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
								<option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
							</optgroup>
							<optgroup label="Afternoon">
								<option value="12:00 PM - 1:00 PM">12:00 PM - 1:00 PM</option>
								<option value="1:00 PM - 2:00 PM">1:00 PM - 2:00 PM</option>
								<option value="3:00 PM - 4:00 PM">3:00 PM - 4:00 PM</option>
								<option value="5:00 PM - 6:00 PM">5:00 PM - 6:00 PM</option>
							</optgroup>
						</select>
					</div>
					<div className="email">
						<h3>Email Address*</h3>
						<input type="text" className="email-address form-input" required />
					</div>
					<div className="phone-number">
						<h3>Phone*</h3>
						<PhoneInput
							placeholder="Enter phone number"
							value={this.state.phone}
							onChange={phone => this.setState({ phone })}
							country="US"
							className="phone-input"
						/>
					</div>
					<input type="submit" value="Submit" className="submit-btn" />
				</div>
			</div>
		);
	}
}

export default DemoRequest;
