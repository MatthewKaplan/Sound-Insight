import React, { Component } from 'react';
import './VideoPage.scss';
import Slides from '../Slides/Slides';
import { videoImages, videoDetails, videoLinks } from '../../assets/helper';

class VideoPage extends Component {
	componentDidMount () {
		window.scrollTo(0, 0);
	}

	render () {
		return (
			<div className="video-page">
				<div className="header" />
				<section className="video-info">
					<section className="page-heading">
						<h1>VIDEO SYSTEMS</h1>
						<p>
							Home Cinema has never been better than its capable of being today and it happens to be one of our most
							popular services here at Sound Insight. With new technologies just recently introduced like 4K (UHD)
							resolutions and High Dynamic Range (HDR) color and contrast capabilities, todays screens and projectors
							are absolutely incredible.
						</p>
					</section>
					<section className="home-cinema">
						<img src="https://i.imgur.com/jL1eEj9.jpg" alt="home theater" className="home-theater" />
						<h2>HOME CINEMA</h2>
						<p>
							A truly cinematic experience happens when the system design is aware of all the conditions of the space
							and is able to tailor the componentry to fit your needs with the limitations of the environment. We have
							the capabilities to design a home cinema from the ground up, implement one into an existing space, or to
							create one as intimate as one for your bedroom or living room. And with wide selection in both television,
							projection, and screen technologies available today, Sound Insight can help you find the best possible fit
							for your "dream system"
						</p>
					</section>
					<div className="bottom-services">
						<section className="television-systems">
							<img src="https://i.imgur.com/Jv6yEG1.jpg" alt="Sony television" className="sony-img" />
							<h2>TELEVISION SYSTEMS</h2>
							<p>
								With the introductory of 4K UHD technologies and UHD colorspace enhancements, today's televisions are
								bigger and better than ever before.
							</p>
							<p>
								OLED and Fully Active Backlit LED (FALD) sets are at the forefront of today's television technologies.
								We are here to walk you through the benefits of each.
							</p>
						</section>
						<section className="projection-systems">
							<img src="https://i.imgur.com/9aXMjIT.jpg" alt="Sony projector" className="projector-img" />
							<h2>PROJECTION SYSTEMS</h2>
							<p>
								For the best possible cinematic experience, projection systems are the way to go. With over 30 years of
								experience, we know what questions to ask to make sure the system you end up with is the best possible
								fit for your space.
							</p>
							<p>
								We have on display some of the finest projection systems in the world by Sony, JVC, Digital Projection,
								and Epson showcasing the finest in 4K HDR technologies.
							</p>
						</section>
					</div>
				</section>
				<h1>Some of the Products on Display</h1>
				<section className="product-slides">
					<div className="top-break-line">
						<hr className="top-page-break" />
					</div>
					<Slides icons={videoImages} iconNames={videoDetails} links={videoLinks} />
					<div className="bottom-break-line">
						<hr className="bottom-page-break" />
					</div>
				</section>
			</div>
		);
	}
}

export default VideoPage;
