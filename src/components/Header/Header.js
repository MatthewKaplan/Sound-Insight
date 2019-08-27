import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';

class Header extends Component {
	render () {
		return (
			<header>
				<div className="container">
					<nav className="main-nav">
						<Link to="/" className="link logo-link">
							<img src={require('../../assets/images/soundInsight.png')} alt="company logo" className="logo" />
						</Link>
						<ul>
							<li>
								<NavLink to="/" activeClassName="active" className="link">
									HOME
								</NavLink>
							</li>
							<li>
								<NavLink to="/services" activeClassName="active" className="link">
									SERVICES
								</NavLink>
							</li>
							<li>
								<NavLink to="/products" activeClassName="active" className="link">
									PRODUCTS
								</NavLink>
							</li>
							<li>GALLERY</li>
							<li>ABOUT</li>
							<li>CONTACT</li>
						</ul>
					</nav>
				</div>
			</header>
		);
	}
}

export default Header;
