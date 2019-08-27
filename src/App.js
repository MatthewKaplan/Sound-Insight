import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ServicesPage from './components/ServicesPage/ServicesPage'
import Footer from './components/Footer/Footer';
import { Route, Switch } from 'react-router-dom';
import ProductsPage from './components/ProductsPage/ProductsPage';

function App (){
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/services" component={ServicesPage} />
				<Route path="/products" component={ProductsPage} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
