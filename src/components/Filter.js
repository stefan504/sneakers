import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { productAction } from '../redux/productSlice';
const Filter = ({
	size,
	value,
	setValue,
	setSize,
	productData,
	setproductData,
}) => {
	const productState = useSelector((state) => state.products);
	const dispatch = useDispatch();
	const filter = (size) => {
		dispatch(productAction.filtering(size));

		// setproductData(
		// 	data.products.filter((filter) => {
		// 		return filter.availableSizes.indexOf(s) >= 0;
		// 	})
		// );
	};
	useEffect(() => {
		filter(size);
		// eslint-disable-next-line
	}, [size]);

	////////////////////////////////////////////////////////////////

	const sorting = () => {
		dispatch(productAction.sorting(value));

		// if (value === '') {
		// 	setproductData(productData);
		// }
		// if (value === 'lowest') {
		// 	setproductData(productData.sort((a, b) => (a.price > b.price ? 1 : -1)));
		// }
		// if (value === 'highest') {
		// 	setproductData(productData.sort((a, b) => (a.price < b.price ? 1 : -1)));
		// }
	};

	useEffect(() => {
		sorting();
		// eslint-disable-next-line
	}, [value]);

	return (
		<div className="sort">
			<h3>Products: {productState.length} </h3>
			<div className="sort-by">
				<h3>Sort by: </h3>
				<form>
					<select onChange={(e) => setValue(e.target.value)}>
						<option value="">Select</option>
						<option value="lowest">Lowest Price First</option>
						<option value="highest">Highest Price First</option>
					</select>
				</form>
			</div>
			<div className="sort-by">
				<h3>Filter by size:</h3>
				<form>
					<select onChange={(e) => setSize(e.target.value)}>
						<option value="">All</option>
						<option value="XS">XS</option>
						<option value="S">S</option>
						<option value="M">M</option>
						<option value="L">L</option>
						<option value="XL">XL</option>
						<option value="XXL">XXL</option>
					</select>
				</form>
			</div>
		</div>
	);
};

export default Filter;
