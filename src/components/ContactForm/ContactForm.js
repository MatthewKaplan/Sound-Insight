import React, { Component } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './ContactForm.scss';

class ContactForm extends Component {
	state = { phone: '', firstName: '', lastName: '', email: '', message: '' };

	render () {
		return (
			<div className="contact-form">
				<div className="form-information">
					<img src="https://i.imgur.com/FvyNCGT.png" alt="close button" className="close-form" onClick={() => this.props.closeForm()} />
					<h1>Contact Form</h1>
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
					<div className="desired-demo">
						<h3>Message*</h3>
						<textarea name="" id="" cols="60" rows="10" />
					</div>
					<input type="submit" value="Submit" className="submit-btn" />
				</div>
			</div>
		);
	}
}

export default ContactForm;
