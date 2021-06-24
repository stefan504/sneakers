import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Products from './components/Products';
import Landing from './components/Landing';
import Footer from './components/Footer';
import Filter from './components/Filter';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import data from './data.json';

function App() {
	const [productData, setproductData] = useState(data.products);
	const [cartItems, setCartItems] = useState([]);
	const [size, setSize] = useState('');
	const [value, setValue] = useState('');
	const [product, setProduct] = useState(null);
	return (
		<BrowserRouter>
			<Navbar cartItems={cartItems} />
			<Switch>
				<Route exact path="/">
					<Landing />
				</Route>
				<Route exact path="/cart">
					<Cart cartItems={cartItems} setCartItems={setCartItems} />
				</Route>
				<Route exact path="/products">
					<Filter
						productData={productData}
						setproductData={setproductData}
						setSize={setSize}
						size={size}
						value={value}
						setValue={setValue}
						data={data}
					></Filter>
					<Products
						cartItems={cartItems}
						setCartItems={setCartItems}
						productData={productData}
						setproductData={setproductData}
						// filterProducts={filterProducts}

						product={product}
						setProduct={setProduct}
					/>
				</Route>
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
