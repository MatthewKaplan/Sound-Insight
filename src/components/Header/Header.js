import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';

class Header extends Component {
	state = { sidebarActive: false };

	toggleSidebar = () => {
		this.setState({
			sidebarActive: !this.state.sidebarActive
		});
	};

	render () {
		const { sidebarActive } = this.state;
		return (
			<React.Fragment>
				<header>
					<div className="container">
						<nav className="main-nav">
							<Link to="/" className="link logo-link">
								<img src={require('../../assets/images/soundInsight.png')} alt="company logo" className="logo" />
							</Link>
							<ul className="main-nav-options">
								<li>
									<NavLink exact to="/" activeClassName="active" className="link">
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
									<NavLink to="/contact" activeClassName="active" className="link contact-link">
										CONTACT
									</NavLink>
								</li>
							</ul>
						</nav>
					</div>
				</header>
				<div className="sidebar-navigation">
					<div className={sidebarActive ? 'sidebarActive sidebar' : 'sidebar'}>
						<section className="nav-header">
							<div className={sidebarActive ? 'iconActive icon' : 'icon'} onClick={() => this.toggleSidebar()}>
								<div className="hamburger" />
							</div>
							<img src={require('../../assets/images/small-logo.png')} alt="company logo" className="header-logo" />
						</section>
						<section className="side-nav">
							<ul className="sidebar-menu">
								<li>
									<NavLink exact to="/" activeClassName="active" className="link" onClick={() => this.toggleSidebar()}>
										HOME
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/services"
										activeClassName="active"
										className="link"
										onClick={() => this.toggleSidebar()}>
										SERVICES
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/products"
										activeClassName="active"
										className="link"
										onClick={() => this.toggleSidebar()}>
										PRODUCTS
									</NavLink>
								</li>
								<li>
									<NavLink to="/gallery" activeClassName="active" className="link" onClick={() => this.toggleSidebar()}>
										GALLERY
									</NavLink>
								</li>
								<li>
									<NavLink to="/about" activeClassName="active" className="link" onClick={() => this.toggleSidebar()}>
										ABOUT
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/contact"
										activeClassName="active"
										className="link contact-link"
										onClick={() => this.toggleSidebar()}>
										CONTACT
									</NavLink>
								</li>
							</ul>
						</section>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Header;
