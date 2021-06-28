import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { paymentAction } from '../redux/productSlice';
import { cartAction } from '../redux/productSlice';

const Payment = () => {
	const cartState = useSelector((state) => state.cart);

	const dispatch = useDispatch();
	const paymentState = useSelector((state) => state.payment);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(paymentAction.handleTrue());
		dispatch(cartAction.emptyCart());
	};
	console.log(paymentState);

	if (paymentState === false) {
		return (
			<div className="payment-container">
				<form className="form-container" onSubmit={handleSubmit}>
					<label htmlFor="">First Name: </label>
					<input type="text" />
					<label htmlFor="">Last Name: </label>
					<input type="text" />
					<label htmlFor="">Email: </label>
					<input type="email" />
					<label htmlFor="">Street: </label>
					<input type="text" />
					<label htmlFor="">Street number: </label>
					<input type="numbers" />
					<label htmlFor="">Country: </label>
					<input type="text" />
					<label htmlFor="">City: </label>
					<input type="text" />
					<label htmlFor="">Postal Code: </label>
					<input type="numbers" />
					<div className="total">
						<h3>
							{' '}
							Total price: <span className="dollar">$</span>
							{cartState.cartItems
								.reduce((a, c) => a + c.price * c.count, 0)
								.toFixed(1)}
							{/* {!checked
					? cartState.cartItems
							.reduce((a, c) => a + c.price * c.count, 0)
							.toFixed(1)
					: cartState.cartItems
							.reduce((a, c) => a + c.price * c.count, 7)
							.toFixed(1)} */}
						</h3>
					</div>

					<div className="confirm">
						<button type="submit" className="confirm-payment checkout">
							Confirm payment
						</button>
					</div>
				</form>
			</div>
		);
	} else {
		return (
			<div className="order">
				<h2>
					Thank you for your order. Your order has been received and is now
					being processed.
					<p>( don't worry, this is a just demo :) )</p>
				</h2>
			</div>
		);
	}
};

export default Payment;
