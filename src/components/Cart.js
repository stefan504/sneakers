import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartAction } from '../redux/productSlice';
import { Link } from 'react-router-dom';
const Cart = () => {
	const cartState = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const removeFromCart = (item) => {
		console.log(cartState.cartItems);
		dispatch(cartAction.removeFromCarts(item));
	};

	const total = () => {
		return cartState.cartItems
			.reduce((a, c) => a + c.price * c.count, 0)
			.toFixed(1);
	};

	if (cartState.cartItems === [] && cartState.cartItems === undefined)
		return null;

	return cartState.cartItems.length > 0 ? (
		<div className="article-container">
			{' '}
			{cartState.cartItems.map((item) => {
				return (
					<div key={item.id} className="article">
						<div className="article-img">
							{' '}
							<img src={item.image} alt="" />
						</div>
						<div className="article-title">{item.title}</div>
						<div className="article-price">
							<span className="dollar">$</span>
							{item.price}
						</div>
						<div className="amount">{item.count}</div>

						<h2 className="remove" onClick={() => removeFromCart(item)}>
							🗑
						</h2>
					</div>
				);
			})}
			<div className="checkout-container">
				<h2 className="total">
					Total: <span className="dollar">$</span>
					{total()}
				</h2>
				{cartState.cartItems.length > 0 ? (
					<Link to="/checkout" className="checkout">
						To Checkout
					</Link>
				) : (
					''
				)}
			</div>
		</div>
	) : (
		<h4 className="empty">Your cart is empty.</h4>
	);
};

export default Cart;

// ADD TOTAL IN CART AOIFNA{SOCNZ{XUNCZX}}
