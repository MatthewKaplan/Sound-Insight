import React, { Component } from 'react';

class AutomationPage extends Component {
	componentDidMount () {
		window.scrollTo(0, 0);
	}

	render () {
		return (
			<div className="automation-page">
				<div className="header" />
				<div className="automation-info">
					<section className="page-heading">
						<h1>Home Automation</h1>
						<p>
							From projects small to large, new and old, we create systems with the power and performance to transform
							your lifestyle into complete and brilliant experiences that fit your needs and are easy for your family to
							enjoy. With one touch dim the lights, stream high-resolution music, turn up the heat, lock the doors and
							arm the security system. Or, check in on your home no matter where you are. It’s a smarter living
							experience that you’ll wonder how you ever lived without.
						</p>
					</section>
					<section className="home-automation">
						<img src="https://i.imgur.com/Ie1cGUK.jpg" alt="home automation" className="automation-img" />
						<h2>SMART HOME</h2>
						<p>
							From scheduling your home to wake up before you do, to creating the perfect atmosphere for a dinner party,
							or turning on the lights and your favorite music to welcome you home at night, modern Smart Home
							technologies make it easy to have everything exactly the way you like it.
						</p>
						<p>
							Our systems are crafted to be so simple, and so enjoyable, that once you've turned your home into a Smart
							Home, you'll never want to live any other way. Fortunately there are lots of technologies at our disposal
							to meet your specific needs.
						</p>
					</section>
					<div className="bottom-services">
						<section className="control-four">
							<img src="https://i.imgur.com/iyE5pfZ.jpg" alt="Control 4 system" className="control-four-img" />
							<h2>CONTROL4</h2>
							<p>
								The Control4® platform is an operating system for smart home systems. By connecting to and managing the
								many devices in your home, this robust and reliable platform enables your favorite products to work
								together in orchestration, personalized to the way you live.
							</p>
							<p>
								Founded in 2003, the company mission is to deliver an elegant and more affordable way to control and
								automate lighting, music, video, security and energy in a single room or throughout the entire home.
								Control4 solutions interoperate with nearly 10,000 third-party consumer electronics devices—and that
								number is rapidly growing. By partnering with the biggest brands in consumer electronics, appliances,
								energy, lighting and home security, Control4 leads the industry in interoperability, ensuring an
								ever-expanding eco-system of devices will work together in the home or business.
							</p>
						</section>
						<section className="elan">
							<img src="https://i.imgur.com/z4yypaN.jpg" alt="Elan system" className="elan-system-img" />
							<h2>ELAN</h2>
							<p>
								Since 1989, ELAN has been dedicated to simplifying and enhancing the connected home. Their award-winning
								smart home entertainment and control system seamlessly combines music, TV, climate, lighting and other
								home systems with an easy-to-use interface that puts you in control, from anywhere in the home or
								anywhere in the world.
							</p>
							<p>
								The new ELAN 8 – with enhanced interface, powerful new user managed features and voice control through
								Amazon Alexa – was recognized at CES 2017 with the “2017 Human Interface Product of the Year” award from
								the Consumer Technology Association’s Mark of Excellence Award Program Committee. The ELAN 8 software
								eliminates the need to have multiple apps and control switches for managing lighting, security, audio,
								video and other aspects of the connected home. All these components can now be controlled by the
								intuitive ELAN system.
							</p>
						</section>
					</div>
				</div>
			</div>
		);
	}
}

export default AutomationPage;
