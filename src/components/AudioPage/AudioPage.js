import React, { Component } from 'react';
import { audioDetails, audioImages, audioLinks } from '../../assets/helper';
import Slides from '../Slides/Slides';
import './AudioPage.scss';

class AudioPage extends Component {
	componentDidMount () {
		window.scrollTo(0, 0);
	}

	render () {
		return (
			<div className="audio-page">
				<div className="header" />
				<div className="audio-info">
					<section className="page-heading">
						<h1>Audio Systems</h1>
						<p>
							Whether you wish to spin vinyl or play digital music media it sounds better on Sound Insight's carefully
							selected products and custom designed systems. Since our beginning in 2002, traditional two-channel stereo
							music has been a big part of our business. Sound Insight's today, remains as dedicated as ever to
							presenting its clients with quality audio electronics that provide the most accurate audio reproduction
							available for their music enjoyment and listening pleasure. The manufacturers, whose products we carry,
							share this passion with us.
						</p>
					</section>
					<section className="home-audio">
						<img src="https://i.imgur.com/USdqlCQ.jpg" alt="Living room" className="home-audio-img" />
						<h2>HOME AUDIO</h2>
						<p>
							From stand alone systems to fully integrated audio systems, there are no limitations as to what we can
							provide. The capabilities of modern audio equipment are truly remarkable and we can easily design systems
							that would bring you into a state of "being there". And, with modern technologies there is no need to
							sacrifice lifestyle to achieve superb performance wether the system is Analog, Digital, or both.
						</p>
					</section>
					<div className="bottom-services">
						<section className="analog">
							<img src="https://i.imgur.com/UKaKg4Z.jpg?1" alt="Analog system" className="analog-img" />
							<h2>ANALOG</h2>
							<p>
								The word "Analog" oftentimes refers to the style of source component being used (i.e.. a turntable or
								tape machine), however with the advent of truly digital systems it may also refer to the style
								amplification system as well. Sound Insight has a tremendous amount of experience in both and we will be
								happy to help you determine which is a better fit for you.
							</p>
							<p>
								Our showroom has a full display of turntable, amplification, and preampfification technologies for you
								to explore. We also offer expert turntable and component repair services if your existing components are
								in need of some TLC.
							</p>
						</section>
						<section className="digital">
							<img src="https://i.imgur.com/y0AAGPv.jpg" alt="digital system" />
							<h2>DIGITAL</h2>
							<p>
								Now that digital media is almost as established as your record collection, the audio industry has been
								able to take a fresh look at what is capable in the digital realm. There have also been major
								advancements in completely digital systems. Sound Insight sees the benefits in these systems and has
								many on display.
							</p>
						</section>
					</div>
				</div>
				<h1>Some of the Products on Display</h1>
				<section className="product-slides">
					<div className="top-break-line">
						<hr className="top-page-break" />
					</div>
					<Slides icons={audioImages} iconNames={audioDetails} links={audioLinks} />
					<div className="bottom-break-line">
						<hr className="bottom-page-break" />
					</div>
				</section>
			</div>
		);
	}
}

export default AudioPage;
