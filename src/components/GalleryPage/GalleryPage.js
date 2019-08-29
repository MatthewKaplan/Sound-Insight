import React, { Component } from 'react';
import './GalleryPage.scss';

class GalleryPage extends Component {
	componentDidMount () {
		window.scrollTo(0, 0);
	}
	
	render () {
		return (
			<div className="gallery-page">
				<div className="header" />
				<h1>GALLERY</h1>
			</div>
		);
	}
}

export default GalleryPage;
