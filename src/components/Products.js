import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { cartAction } from '../redux/productSlice';

const Products = (props) => {
	const { product, setProduct, setAdded } = props;
	const productState = useSelector((state) => state.products);

	const dispatch = useDispatch();

	const addToCarts = (prod) => {
		dispatch(cartAction.addToCart(prod));
		setAdded(true);
		setTimeout(() => {
			setAdded(false);
		}, 2500);
	};

	const openModal = (product) => {
		setProduct({ product });
	};

	const closeModal = () => {
		setProduct(null);
	};

	return (
		<>
			<div className="product-container">
				<ul className="products">
					{productState.map((product) => {
						return (
							<li key={product.id}>
								<div className="product">
									<div
										onClick={() => openModal(product)}
										className="image-container"
									>
										<img src={product.image} alt=""></img>
									</div>
									<h3 className="title">{product.title}</h3>
									<div className="desc-holder">
										<p className="description">{product.description}</p>
									</div>
									<h2 className="price">
										<span className="dollar">$</span>
										{product.price}
									</h2>
									<button
										onClick={() => addToCarts(product)}
										className="cart-button"
									>
										Add to Cart
									</button>
								</div>
							</li>
						);
					})}
				</ul>
				{product && (
					<Modal
						onRequestClose={closeModal}
						isOpen={true}
						style={{ background: 'gray' }}
					>
						<button className="close-modal" onClick={closeModal}>
							X
						</button>
						<div className="modal-container">
							<div className="image-modal">
								<img src={product.product.image} alt="" />
							</div>
							<div className="modal-title">
								<div className="info">
									<h1>{product.product.title}</h1>
									<p>{product.product.description}</p>
									<div>
										{product.product.availableSizes.map((size) => {
											return (
												<button
													key={product.product.id}
													className="button-size"
												>
													{size}
												</button>
											);
										})}
									</div>
									<div className="modal-price">
										<span className="dollar">$</span>
										{product.product.price}
									</div>
								</div>
								<div className="modal-button">
									<button
										onClick={() => addToCarts(product.product)}
										className="modal-cart"
									>
										Add To Cart
									</button>
								</div>
							</div>
						</div>
					</Modal>
				)}
			</div>
		</>
	);
};
Modal.setAppElement('body');
export default Products;
