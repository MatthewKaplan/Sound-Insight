import React from 'react';

function Logo (props){
	return (
		<div className="logo-container">
			<a href={props.link} target="_blank" rel="noopener noreferrer" className="logo-link">
				<img src={props.image} className="logo-img" alt={props.altText} />
			</a>
		</div>
	);
}

export default Logo;
