import React, { Component } from 'react';
import SplashPage from '../SplashPage/SplashPage';
import Logo from '../Logo/Logo';
import logos from '../../assets/helper';

class ProductsPage extends Component {
	renderLogos = () => {
		return logos.map(logo => {
			return <Logo image={logo} />;
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
				{this.renderLogos()}
			</div>
		);
	}
}

export default ProductsPage;
