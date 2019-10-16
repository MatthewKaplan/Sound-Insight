import React, { Component } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

class ApplicationForm extends Component {
  state = { phone: '', firstName: '', lastName: '', email: '', message: '', resume: '' };

	inputHandler = e => {
		let value = e.target.value;
		let key = e.target.classList;
		this.setState({
			[key]: value
		});
  };
  
  render() {
    const { phone, firstName, lastName, email, message, resume } = this.state;
    return (
      <div className="contact-form">
				<div className="form-information">
					<img
						src="https://i.imgur.com/FvyNCGT.png"
						alt="close button"
						className="close-form"
						onClick={() => this.props.closeForm()}
					/>
					<form action={`https://formspree.io/sales@sound-insight.com`} method="POST">
						<h1>Application</h1>
						<h3 className="name-label">Name*</h3>
						<div className="name-forms">
							<section className="fist-name-form">
								<input
									type="text"
									name="firstName"
									className="firstName"
									id="form-input"
									required
									value={firstName}
									onChange={this.inputHandler}
								/>
								<br />
								<label className="name-label">First Name</label>
							</section>
							<section className="last-name-form">
								<input
									type="text"
									name="lastName"
									className="lastName"
									id="form-input"
									required
									value={lastName}
									onChange={this.inputHandler}
								/>
								<br />
								<label className="name-label">Last Name</label>
							</section>
						</div>
						<div>
							<h3>Resume*</h3>
							<input
								type="file"
								name="resume"
								className="resume"
								required
								value={resume}
								onChange={this.inputHandler}
							/>
						</div>
						<div>
							<h3>Email Address*</h3>
							<input
								type="text"
								name="email"
								className="email"
								required
								value={email}
								onChange={this.inputHandler}
							/>
						</div>
						<div className="phone-number">
							<h3>Phone*</h3>
							<PhoneInput
								placeholder="Enter phone number"
								name={phone}
								value={phone}
								onChange={phone => this.setState({ phone })}
								country="US"
								className="phone"
							/>
						</div>
						<div className="desired-demo">
							<h3>Message*</h3>
							<textarea
								name="message"
								className="message"
								id=""
								cols="60"
								rows="10"
								value={message}
								onChange={this.inputHandler}
							/>
						</div>
						<input type="submit" value="Submit" className="submit-btn" />
					</form>
				</div>
			</div>
    )
  }
}

export default ApplicationForm;