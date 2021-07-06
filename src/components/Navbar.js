import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
	const cartState = useSelector((state) => state.cart);
	return (
		<div className="nav-container">
			<div className="logo">
				<Link to="/">SneakerShop</Link>{' '}
			</div>
			<div className="nav">
				<Link to="/products">Products</Link>

				{cartState.cartItems && cartState.cartItems.length > 0 ? (
					<Link to="/cart">
						<i className="fas fa-shopping-cart">
							<span className="font">({cartState.cartItems.length})</span>
						</i>
					</Link>
				) : (
					<Link to="/cart">
						<i className="fas fa-shopping-cart"></i>
					</Link>
				)}
			</div>
		</div>
	);
};

export default Navbar;
