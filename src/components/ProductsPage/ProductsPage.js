import React, { Component } from 'react';
import './ProductsPage.scss';
import SplashPage from '../SplashPage/SplashPage';
import Logo from '../Logo/Logo';
import { logos, links, manufacturers } from '../../assets/helper';

class ProductsPage extends Component {
	renderLogos = () => {
		return manufacturers.map(manufacturer => {
			return <Logo image={manufacturer.logo} link={manufacturer.link} />;
		});
	};

	render () {
		return (
			<div>
				<SplashPage
					image="store.jpeg"
					altText="Living room"
					subtitle="We carry top of the line brands guarenteed to excite the senses."
					title="PRODUCTS"
				/>
				<section className="logo-container">{this.renderLogos()}</section>
			</div>
		);
	}
}

export default ProductsPage;
