import React, { Component } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

class SurveyRequest extends Component {
	state = { phone: '', firstName: '', lastName: '', email: '', jobDetail: '', dateRequested: '' };

	inputHandler = e => {
		let value = e.target.value;
		let key = e.target.classList;
		this.setState({
			[key]: value
		});
	};

	render () {
		const { phone, firstName, lastName, email, jobDetail, dateRequested } = this.state;
		return (
			<div className="survey-request-form">
				<div className="form-information">
					<img
						src="https://i.imgur.com/FvyNCGT.png"
						alt="close button"
						className="close-form"
						onClick={() => this.props.closeForm()}
					/>
					<form action={`https://formspree.io/kaplan.matthew.p@gmail.com`} method="POST">
					<h1>Request Free Estimate</h1>
					<h3 className="name-label">Name*</h3>
					<div className="name-forms">
						<section className="fist-name-form">
							<input type="text" className="firstName" name="firstName" value={firstName} id="form-input" onChange={this.inputHandler} /> <br />
							<label className="name-label">First Name</label>
						</section>
						<section className="last-name-form">
							<input type="text" className="lastName" name="lastName" value={lastName} id="form-input" onChange={this.inputHandler} /> <br />
							<label className="name-label">Last Name</label>
						</section>
					</div>
					<div className="desired-demo">
						<h3>Job Detail*</h3>
						<textarea
							name="jobDetail"
							value={jobDetail}
							className="jobDetail"
							id=""
							cols="60"
							rows="10"
							placeholder="In as much detail as possible, tell us about your job."
							onChange={this.inputHandler}
						/>
					</div>
					<div className="requested-date">
						<h3>Date Requested*</h3>
						<div className="date-input">
							<input type="date" id="start" name="dateRequested" min="2019-09-01" max="2022-12-31" className="dateRequested" value={dateRequested} onChange={this.inputHandler} />
						</div>
					</div>
					<div>
						<h3>Email Address*</h3>
						<input type="text" className="email" name="email" value={email} required onChange={this.inputHandler} />
					</div>
					<div className="phone-number">
						<h3>Phone*</h3>
						<PhoneInput
							placeholder="Enter phone number"
							value={phone}
							onChange={phone => this.setState({ phone })}
							country="US"
							className="phone"
							name="phone"
						/>
					</div>
					<input type="submit" value="Submit" className="submit-btn" />
					</form>
				</div>
			</div>
		);
	}
}

export default SurveyRequest;
