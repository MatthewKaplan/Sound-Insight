import React, { Component } from 'react';
import SplashPage from '../SplashPage/SplashPage';
import MainServices from '../MainServices/MainServices';

class Home extends Component {
	render () {
		return (
			<div>
				<SplashPage image="splash-img.jpg" altText="Living room" subtitle="A PASSION FOR AUDIO AND VIDEO - SINCE 2002" title="We design thoughtful, intuitive systems"/>
				<MainServices />
			</div>
		);
	}
}

export default Home;
