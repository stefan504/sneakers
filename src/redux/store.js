import { configureStore } from '@reduxjs/toolkit';
import { paymentReducer, productReducer } from './productSlice';
import { cartReducer } from './productSlice';

const store = configureStore({
	reducer: {
		products: productReducer,
		cart: cartReducer,
		payment: paymentReducer,
	},
});

export { store };
