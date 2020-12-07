import React, { Component } from 'react';
import SplashPage from '../SplashPage/SplashPage';
import { Helmet } from 'react-helmet';
import Slides from '../Slides/Slides';
import { audioDetails, audioImages, audioLinks, videoImages, videoDetails, videoLinks } from '../../assets/helper';

class ProductsPage extends Component {
	componentDidMount () {
		window.scrollTo(0, 0);
	}

	render () {
		return (
			<div className="products-page">
				<Helmet>
					<title>Audio & Video Products - Sound Insight</title>
					<meta name="description" content="We carry the highest quality products for all your audio and video needs. " />
				</Helmet>
				<SplashPage
					image="products-page.jpg"
					altText="Living room"
					subtitle="We always keep the best and newest products in stock."
					title="PRODUCTS"
				/>
				<section className="products">
          <h2>
						<strong>Televisions</strong>
					</h2>
          <section className="product-slides">
            <div className="top-break-line">
              <hr className="top-page-break" />
            </div>
					  <Slides icons={videoImages} iconNames={videoDetails} links={videoLinks} />
					  <div className="bottom-break-line">
						  <hr className="bottom-page-break" />
					  </div>
				  </section>
          <h2 className="speaker-header">
						<strong>Speakers</strong>
					</h2>
          <section className="product-slides">
            <div className="top-break-line">
              <hr className="top-page-break" />
            </div>
            <Slides icons={audioImages} iconNames={audioDetails} links={audioLinks} />
            <div className="bottom-break-line">
              <hr className="bottom-page-break" />
            </div>
				  </section>
				</section>
			</div>
		);
	}
}

export default ProductsPage;
