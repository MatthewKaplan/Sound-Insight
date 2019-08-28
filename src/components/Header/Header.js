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
							<li>
								<NavLink to="/gallery" activeClassName="active" className="link">
									GALLERY
								</NavLink>
							</li>
							<li>
								<NavLink to="/about" activeClassName="active" className="link">
									ABOUT
								</NavLink>
							</li>
							<li>
								<NavLink to="/contact" activeClassName="active" className="link">
									CONTACT
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		);
	}
}

export default Header;
