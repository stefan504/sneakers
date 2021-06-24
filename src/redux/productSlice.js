import { createSlice } from '@reduxjs/toolkit';
import data from '../data.json';

const productSlice = createSlice({
	name: 'products',
	initialState: data.products,
	reducers: {
		filtering: (state, action) => {
			if (action.payload === '') return data.products;
			return state.filter((filter) => {
				return filter.availableSizes.indexOf(action.payload) >= 0;
			});
		},

		sorting: (state, action) => {
			if (action.payload === '') {
				return state;
			}
			if (action.payload === 'lowest') {
				state.sort((a, b) => (a.price > b.price ? 1 : -1));
			}
			if (action.payload === 'highest') {
				state.sort((a, b) => (a.price < b.price ? 1 : -1));
			}
		},
	},
});

// FOX BUG WHERE YOU CANT ADD MORE ITEMS IF PREVIOUS ITEM WAS ADDED MORE THAN ONCE
// ALREADY EXIST IS PROBLEM PROBABLY FIGURE IT OUT

const cartSlice = createSlice({
	name: 'cart',
	initialState: { cartItems: [], alreadyExist: false },
	reducers: {
		addToCart: (state, action) => {
			let alreadyExists = false;

			state.cartItems.forEach((x) => {
				if (x.id === action.payload.id) {
					alreadyExists = true;
					x.count++;
				}
			});

			if (!alreadyExists) {
				state.cartItems.push({ ...action.payload, count: 1 });
			}
		},
		removeFromCarts: (state, action) => {
			state.cartItems = state.cartItems.filter(
				(item) => item.id !== action.payload.id
			);
		},
	},
});

const { actions: productAction, reducer: productReducer } = productSlice;
const { actions: cartAction, reducer: cartReducer } = cartSlice;

export { productAction, productReducer, cartReducer, cartAction };
