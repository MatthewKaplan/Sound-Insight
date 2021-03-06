import React, { Component } from 'react';
import SplashPage from '../SplashPage/SplashPage';
import MainServices from '../MainServices/MainServices';
import { Helmet } from 'react-helmet';

class Home extends Component {
	componentDidMount () {
		window.scrollTo(0, 0);
	}
	
	render () {
		return (
			<div>
				<Helmet>
					<title>Sound Insight: Custom AV Solution & Design</title>
					<meta name="description" content="A passion for audio and video since 2002! We design thoughtful, intuitive systems." />
				</Helmet>
				<SplashPage image="splash-img.jpg" altText="Living room" subtitle="A PASSION FOR AUDIO AND VIDEO - SINCE 2002" title="We design thoughtful, intuitive systems"/>
				<MainServices />
			</div>
		);
	}
}

export default Home;
