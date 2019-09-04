import React, { Component } from 'react';
import SplashPage from '../SplashPage/SplashPage';
import MainServices from '../MainServices/MainServices';
import './Home.scss';

class Home extends Component {
	componentDidMount () {
		window.scrollTo(0, 0);
	}
	
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
