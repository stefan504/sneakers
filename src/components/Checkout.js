import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { paymentAction } from '../redux/productSlice';

const Checkout = () => {
	const cartState = useSelector((state) => state.cart);
	const [checked, setChecked] = useState(true);
	const handleChange = (e) => {
		setChecked(e.target.checked);
	};
	const dispatch = useDispatch();

	return (
		<div className="checkout-all">
			{' '}
			<div className="checkout-content">
				<div className="your-cart">
					<h2>Your cart:</h2>
					<div className="in-cart">
						{cartState.cartItems.map((item) => {
							return (
								<div className="cart-content">
									<div className="cart-img">
										<img src={item.image} alt="" />
									</div>
									<div className="cart-title">
										<h2>{item.title}</h2>
										<p>{item.count}x</p>
									</div>
									<div className="cart-price">
										<h4>
											<span className="dollar">$</span>
											{item.price}
										</h4>
									</div>
								</div>
							);
						})}
					</div>
					<div className="total">
						<h2>
							Total: <span className="dollar">$</span>
							{cartState.cartItems
								.reduce((a, c) => a + c.price * c.count, 7)
								.toFixed(1)}
						</h2>
						<p>(including shipping $7)</p>
					</div>
				</div>
				<div className="link-checkout">
					{' '}
					{cartState.cartItems.length > 0 ? (
						<Link
							onClick={() => {
								dispatch(paymentAction.handleFalse());
							}}
							className="checkout-btn"
							to="/payment"
						>
							To Payment
						</Link>
					) : (
						''
					)}
				</div>
			</div>
			<div className="shipping">
				<h5>Shipping:</h5>
				<ul>
					<li>
						{' '}
						<input
							checked
							type="checkbox"
							id="dhl"
							name="dhl"
							value={checked}
							onChange={handleChange}
						/>{' '}
						DHL Express Worldwide - Zone 4{' '}
						<div className="shipping-price">
							<span className="dollar">$</span>7
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Checkout;
