import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { paymentAction } from '../redux/productSlice';
import { cartAction } from '../redux/productSlice';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

const Payment = () => {
	const cartState = useSelector((state) => state.cart);

	const dispatch = useDispatch();
	const paymentState = useSelector((state) => state.payment);

	const handleSubmit = () => {
		dispatch(paymentAction.handleTrue());
		dispatch(cartAction.emptyCart());
	};

	const validate = Yup.object({
		firstName: Yup.string()
			.max(15, 'Must be 15 characters or less')
			.required('First Name Required'),
		lastName: Yup.string()
			.max(20, 'Must be 20 characters or less')
			.required('Last Name Required'),
		email: Yup.string().email('Email is invalid').required('Email Required'),
		street: Yup.string().required('Street Required'),
		number: Yup.number().required('Street number Required'),
		country: Yup.string().required('Country is Required'),
		city: Yup.string().required('City is Required'),
		postalCode: Yup.number().required('Postal code is Required'),
	});

	if (paymentState === false) {
		return (
			<div className="payment-container">
				<Formik
					onSubmit={() => handleSubmit()}
					initialValues={{
						firstName: '',
						lastName: '',
						email: '',
						street: '',
						number: '',
						country: '',
						city: '',
						postalCode: '',
					}}
					validationSchema={validate}
				>
					{(formik) => (
						<>
							<Form className="form-container">
								<TextField label="First name: " name="firstName" type="text" />
								<TextField label="Last name: " name="lastName" type="text" />
								<TextField label="Email: " name="email" type="email" />
								<TextField label="Street: " name="street" type="text" />
								<TextField
									label="Street number: "
									name="number"
									type="number"
								/>
								<TextField label="Country: " name="country" type="text" />
								<TextField label="City: " name="city" type="text" />
								<TextField
									label="Postal Code: "
									name="postalCode"
									type="number"
								/>
								<div className="total">
									<h3>
										{' '}
										Total price: <span className="dollar">$</span>
										{cartState.cartItems
											.reduce((a, c) => a + c.price * c.count, 7)
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
							</Form>
						</>
					)}
				</Formik>
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
