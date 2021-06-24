import React from 'react';
import { Link } from 'react-router-dom';
import './landing2.jpg';

const Landing = () => {
	return (
		<div className="landing-page-container">
			<div className="text-holder">
				<div className="text">
					<h1>
						SNEAKER SHOPPING. <br /> MADE EASY.
					</h1>
				</div>
				<Link to="/products" className="landing-button">
					Shop Now
				</Link>
			</div>
		</div>
	);
};

export default Landing;
