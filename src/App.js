import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ServicesPage from './components/ServicesPage/ServicesPage';
import Footer from './components/Footer/Footer';
import { Route, Switch } from 'react-router-dom';
import ProductsPage from './components/ProductsPage/ProductsPage';
import VideoPage from './components/VideoPage/VideoPage';
import AudioPage from './components/AudioPage/AudioPage';
import AutomationPage from './components/AutomationPage/AutomationPage';
import SecurityPage from './components/SecurityPage/SecurityPage';
import AboutPage from './components/AboutPage/AboutPage';
import ContactPage from './components/ContactPage/ContactPage';
import GalleryPage from './components/GalleryPage/GalleryPage';

function App (){
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/services" component={ServicesPage} />
				<Route path="/products" component={ProductsPage} />
				<Route path="/video" component={VideoPage} />
				<Route path="/audio" component={AudioPage} />
				<Route path="/automation" component={AutomationPage} />
				<Route path="/security" component={SecurityPage} />
				<Route path="/about" component={AboutPage} />
				<Route path="/contact" component={ContactPage} />
				<Route path="/gallery" component={GalleryPage} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
