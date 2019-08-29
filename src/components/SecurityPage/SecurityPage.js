import React, { Component } from 'react';
import './SecurityPage.scss';

class SecurityPage extends Component {
	componentDidMount () {
		window.scrollTo(0, 0);
	}

	render () {
		return (
			<div className="security-page">
				<div className="header" />
				<div className="security-info">
					<section className="page-heading">
						<h1>Security Systems</h1>
						<p>
							Security Camera and Video Surveillance Systems, also referred to as CCTV systems, DVR security, or IP
							cameras can be a great tool to protect your company or commercial properties from theft, damaging
							lawsuits, employee misconduct, and vandalism.
						</p>
					</section>
					<section className="security-systems">
						<img src="https://i.imgur.com/DHz2Z8f.jpg" alt="honeywell security" className="honeywell-img" />
						<h2>SECURITY SYSTEMS</h2>
						<p>
							Both Elk and Honeywell provide controls and multiple options - enchancing the effertiveness of your
							security system and providing you with complete, whole-house protection. Stylish and unassuming, they
							preserve the beauty of your home while protecting it. These systems offer comprehensive detection and
							state-of-the-art reporting capabilities that will let you know of a intrusion, fire, carbon monoxide leak,
							medical emergency, water leak, high/low temperatures and more.
						</p>
					</section>
					<div className="bottom-services">
						<section className="camera-systems">
							<img src="https://i.imgur.com/BYZOApt.png" alt="camera security system" className="camera-img" />
							<h2>CAMERA SYSTEMS</h2>
							<p>
								Whether you are looking for a PTZ or fixed dome camera systems, our professional security installers
								will help you select the correct surveilance system, identify the most effective configuration of
								security equipment, and offer you secure and reliable installation.
							</p>
							<p>
								Wireless Cameras-Remote Viewing Surveillance Systems-Digital Video Recorders-DVR-Network Video
								Recorders-NVR PC, Embedded, and Hybrid Wireless Video Systems Security Cameras-IP Dome
								Cameras-Multi-location Surveillance Mega pixel cameras(HD+)-Remote Viewing from PC/Phone-Infrared Night
								Cameras-IP Cameras
							</p>
						</section>
						<section className="smart-devices">
							<img src="https://i.imgur.com/mDmTLvK.jpg" alt="tablet security" className="tablet-img" />
							<h2>SMART DEVICES/CONTROLLERS</h2>
							<p>
								Hook up multiple smart devices around your home to act as remote viewing stations and security system
								remotes.
							</p>
							<p>
								From these smart devices you have the ability to recieve notifactions for system arming/disarming, alarm
								activation, unacceptable temperatures, and trouble conditions. You also have the ability to save camera
								video straight to the devices and replay at a later time and arm/disarm a security system.
							</p>
						</section>
					</div>
				</div>
			</div>
		);
	}
}

export default SecurityPage;
