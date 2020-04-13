import React, { Component } from 'react';
import "./CovidUpdate.scss";

class CovidUpdate extends Component {
  render() {
    return (
      <div className="covid-popup">
        <div className="form-information">
          <div className="covid-popup-banner"></div>
          <img src="https://i.imgur.com/nA0azY8.png" alt="" className="close-popup" onClick={this.props.closeUpdate} />
          <h1>COVID-19 UPDATE</h1>
          <p>In order to continue to serve you, we are still open at our Huntington, NY location during the following hours.</p>
          <table>
						<tr>
							<td className="date">MON</td>
							<td className="time">10am - 6pm</td>
						</tr>

						<tr>
							<td className="date">TUE</td>
							<td className="time">10am - 2pm</td>
						</tr>
						<tr>
							<td className="date">WED</td>
							<td className="time">10am - 2pm</td>
						</tr>
						<tr>
							<td className="date">THU</td>
							<td className="time">10am - 2pm</td>
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
          <p>For installations and service calls, our technicians are still available 5 days a week and practicing proper precautions to keep you and your family safe.</p>
          <p>Your safety and well-being is our top priority which is why we are also offering curbside pickup and/or delivery on available items. Please call ahead to check the availability of items.</p>
          <p>Our best wishes to you and your family as we navigate the days ahead together.</p>
          <p>Fred Kaplan, Chief Executive Officer</p>
          <div className="covid-popup-logo"></div>
				</div>
			</div>
    )
  }
}

export default CovidUpdate;
