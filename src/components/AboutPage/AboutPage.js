import React, { Component } from 'react';
import SplashPage from '../SplashPage/SplashPage';

class AboutPage extends Component {
	componentDidMount () {
		window.scrollTo(0, 0);
	}
	
	render () {
		return (
			<div className="about-page">
				<SplashPage image="store-front.jpg" altText="Sound Insight store front" subtitle="" title="ABOUT" />
				<div className="about-info">
					<h1>Sound Insight - New York, Since 2002</h1>
					<section className="about-section">
						<img src="https://i.imgur.com/wCfZK5X.jpg" alt="Living room" className="about1-img about-img" />
						<p>
							Since our beginning in 2002, traditional two-channel stereo music has been a big part of our business.
							Sound Insight today, remains as dedicated as ever to presenting its clients with quality audio electronics
							that provide the most accurate audio reproduction available for their music enjoyment and listening
							pleasure. The manufacturers, whose products we carry, share this passion with us. Whether you wish to spin
							vinyl records or play digital music media, it sounds better on Sound Insight's carefully selected products
							and custom designed audio systems.
						</p>
					</section>
					<section className="about-section">
						<img src="https://i.imgur.com/sxYeMXe.jpg" alt="Home theater" className="about2-img about-img" />
						<p>
							With the merging of Ultra High Definition Video and Advanced Audio capabilities, Sound Insight has evolved
							and remains at the forefront of home cinema, home automation, and control systems integration. Home
							networking, automated lighting, heating and air conditioning, security systems, and other automated tasks
							are now routinely integrated within the control systems and entertainment design work we do for our
							clients today.
						</p>
					</section>
					<section className="about-section about-section3">
						<img src="https://i.imgur.com/kkON32q.jpg" alt="Office" className="about3-img about-img" />
						<p>
							Our team of professional consultants and our in-house installation team are available to design and
							install a new or upgraded entertainment system that will best meet your needs, while delivering
							exceptional quality, value and performance, with the purest entertainment reproduction that can be had for
							your budget.
						</p>
					</section>
				</div>
			</div>
		);
	}
}

export default AboutPage;
