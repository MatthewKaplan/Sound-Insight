import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ServicesPage from './components/ServicesPage/ServicesPage';
import Footer from './components/Footer/Footer';
import { Route, Switch, Redirect } from 'react-router-dom';
import BrandsPage from './components/BrandsPage/BrandsPage';
import VideoPage from './components/VideoPage/VideoPage';
import AudioPage from './components/AudioPage/AudioPage';
import AutomationPage from './components/AutomationPage/AutomationPage';
import SecurityPage from './components/SecurityPage/SecurityPage';
import AboutPage from './components/AboutPage/AboutPage';
import ContactPage from './components/ContactPage/ContactPage';
import GalleryPage from './components/GalleryPage/GalleryPage';
import PhonePage from './components/PhonePage/PhonePage';
import CareersPage from './components/CareersPage/CareersPage';
import ProductsPage from './components/ProductsPage/ProductsPage';

var noScroll = require('no-scroll');

function App (props){
	return (
		<div className="App">
			{props.isActive || props.popUp ? noScroll.on() : noScroll.off()}
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/index.html">
            <Redirect to="/" />
          </Route>
				<Route path="/services" component={ServicesPage} />
				<Route path="/brands" component={BrandsPage} />
				<Route path="/video" component={VideoPage} />
				<Route path="/audio" component={AudioPage} />
				<Route path="/automation" component={AutomationPage} />
				<Route path="/security" component={SecurityPage} />
				<Route path="/about" component={AboutPage} />
				<Route path="/contact" component={ContactPage} />
				<Route path="/gallery" component={GalleryPage} />
				<Route path="/phone-systems" component={PhonePage} />
				<Route path="/careers" component={CareersPage} />
				<Route path="/products" component={ProductsPage} />
			</Switch>
			<Footer />
		</div>
	);
}

export const mapStateToProps = state => ({
	isActive: state.isActive,
	popUp: state.popUp
});

export default connect(mapStateToProps)(App);
