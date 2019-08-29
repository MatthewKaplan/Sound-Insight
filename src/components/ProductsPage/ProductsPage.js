import React, { Component } from 'react';
import './ProductsPage.scss';
import SplashPage from '../SplashPage/SplashPage';
import Logo from '../Logo/Logo';
import { manufacturers } from '../../assets/helper';

class ProductsPage extends Component {
	renderLogos = () => {
		return manufacturers.map(manufacturer => {
			return <Logo image={manufacturer.logo} link={manufacturer.link} />;
		});
	};

	render () {
		return (
			<div className="products-page">
				<SplashPage
					image="store.jpeg"
					altText="Living room"
					subtitle="We carry top of the line brands guarenteed to excite the senses."
					title="PRODUCTS"
				/>
				<section className="brands">
					<div className="brand-heading">
						<h2>
							<strong>Featured Brands</strong>
						</h2>
						<h2 className="brand-subtitle">
							Below is a list of some of our top manufacturers. If you can't find what you've been searching for,{' '}
							<a href="mailto:sales@sound-insight.com">please contact us.</a>
						</h2>
					</div>
					<div className="hr-line">
						<hr className="page-break" />
					</div>
					<section className="logo-container">{this.renderLogos()}</section>
				</section>
			</div>
		);
	}
}

export default ProductsPage;
