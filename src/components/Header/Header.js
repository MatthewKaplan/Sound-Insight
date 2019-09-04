import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import HoursPopUp from '../HoursPopUp/HoursPopUp';
import MapPopUp from '../MapPopUp/MapPopUp';
import './Header.scss';

class Header extends Component {
	state = { sidebarActive: false, hoursPopUp: false, mapPopUp: false };

	toggleSidebar = () => {
		this.setState({
			sidebarActive: !this.state.sidebarActive
		});
	};

	toggleHours = () => {
		this.setState({
			hoursPopUp: !this.state.hoursPopUp
		});
	};

	toggleMap = () => {
		this.setState({
			mapPopUp: !this.state.mapPopUp
		});
	};

	render () {
		const { sidebarActive, hoursPopUp, mapPopUp } = this.state;
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
								{/*<li>
									<NavLink to="/gallery" activeClassName="active" className="link">
										GALLERY
									</NavLink>
								</li>*/}
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
							<Link to="/" className="link logo-link">
								<img src={require('../../assets/images/small-logo.png')} alt="company logo" className="header-logo" />
							</Link>
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
								{/*<li>
									<NavLink to="/gallery" activeClassName="active" className="link" onClick={() => this.toggleSidebar()}>
										GALLERY
									</NavLink>
								</li>*/}
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
				{hoursPopUp && <HoursPopUp closeHours={this.toggleHours} />}
				{mapPopUp && <MapPopUp closeMap={this.toggleMap} />}
				<div className="contact-menu">
					<section className="contact-menu-options">
						<div className="email">
							<a href="mailto:sales@sound-insight.com" className="menu-option">
								<img src="https://i.imgur.com/SUphJ4h.png" alt="" className="contact-icon" />
								<span>EMAIL</span>
							</a>
						</div>
						<div className="phone">
							<a target="_blank" href="tel:6312714434" rel="noopener noreferrer" className="menu-option">
								<img src="https://i.imgur.com/eAxtt3I.png" alt="" className="contact-icon" />
								<span>CALL</span>
							</a>
						</div>
						<div className="map menu-option" onClick={() => this.toggleMap()}>
							<img src="https://i.imgur.com/oj6o3TY.png" alt="" className="contact-icon" />
							<span>MAP</span>
						</div>
						<div className="hours menu-option" onClick={() => this.toggleHours()}>
							<img src="https://i.imgur.com/rx2GiBJ.png" alt="" className="contact-icon" />
							<span>HOURS</span>
						</div>
					</section>
				</div>
			</React.Fragment>
		);
	}
}

export default Header;
