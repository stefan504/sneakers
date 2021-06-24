import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from './productSlice';
import { cartReducer } from './productSlice';

const store = configureStore({
	reducer: {
		products: productReducer,
		cart: cartReducer,
	},
});

export { store };
