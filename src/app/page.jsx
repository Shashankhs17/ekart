"use client";

import { addToCart, updateQuantity, removeFromCart } from "@/store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, X } from "lucide-react";

// import { XIcon, ShoppingCartIcon } from "@heroicons/react/outline";

const products = [
	{
		id: 1,
		name: "Product 1",
		price: 100,
		image: "/images/product.jpg",
	},
	{
		id: 2,
		name: "Product 2",
		price: 150,
		image: "/images/product.jpg",
	},
	{
		id: 3,
		name: "Product 3",
		price: 200,
		image: "/images/product.jpg",
	},
	{
		id: 4,
		name: "Product 4",
		price: 250,
		image: "/images/product.jpg",
	},
	{
		id: 5,
		name: "Product 5",
		price: 300,
		image: "/images/product.jpg",
	},
	{
		id: 6,
		name: "Product 6",
		price: 350,
		image: "/images/product.jpg",
	},
	{
		id: 7,
		name: "Product 7",
		price: 400,
		image: "/images/product.jpg",
	},
	{
		id: 8,
		name: "Product 8",
		price: 450,
		image: "/images/product.jpg",
	},
	{
		id: 9,
		name: "Product 9",
		price: 500,
		image: "/images/product.jpg",
	},
	{
		id: 10,
		name: "Product 10",
		price: 550,
		image: "/images/product.jpg",
	},
];

// export default function HomePage() {
// 	const dispatch = useDispatch();
// 	const cartItems = useSelector((state) => state.cart.items);
// 	const [cartVisible, setCartVisible] = useState(false);

// 	const handleAddToCart = (product) => {
// 		dispatch(addToCart(product));
// 		setCartVisible(true);
// 	};

// 	return (
// 		<div className="flex">
// 			{/* Product Grid */}
// 			<div
// 				className={`grid grid-cols-4 gap-4 p-4 ${
// 					cartVisible ? "w-2/3" : "w-full"
// 				}`}
// 			>
// 				{products.map((product) => (
// 					<div
// 						key={product.id}
// 						className="border p-4 rounded-md shadow-sm"
// 					>
// 						<Image
// 							src={product.image}
// 							alt={product.name}
// 							width={200}
// 							height={200}
// 						/>
// 						<h2 className="text-xl font-bold">{product.name}</h2>
// 						<p className="text-gray-500">${product.price}</p>
// 						<button
// 							onClick={() => handleAddToCart(product)}
// 							className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
// 						>
// 							Add to Cart
// 						</button>
// 					</div>
// 				))}
// 			</div>

// 			{/* Cart Section */}
// 			{cartVisible && cartItems.length > 0 && (
// 				<div className="w-1/3 p-4 bg-gray-100 shadow-md border-l border-gray-200">
// 					<h2 className="text-2xl font-bold mb-4">Your Cart</h2>
// 					{cartItems.map((item) => (
// 						<div
// 							key={item.id}
// 							className="flex justify-between items-center mb-2"
// 						>
// 							<span>{item.name}</span>
// 							<span>${item.price}</span>
// 						</div>
// 					))}
// 					<Link
// 						href="/checkout"
// 						className="bg-green-500 text-white px-4 py-2 rounded mt-4 inline-block"
// 					>
// 						Proceed to Checkout
// 					</Link>
// 				</div>
// 			)}
// 		</div>
// 	);
// }

const Alert = ({ children, variant = "info" }) => {
	const baseStyles = "p-4 rounded-md mb-4";
	const variantStyles = {
		info: "bg-blue-100 text-blue-800 border border-blue-200",
		success: "bg-green-100 text-green-800 border border-green-200",
		warning: "bg-yellow-100 text-yellow-800 border border-yellow-200",
		error: "bg-red-100 text-red-800 border border-red-200",
	};

	return (
		<div
			className={`${baseStyles} ${variantStyles[variant]}`}
			role="alert"
		>
			{children}
		</div>
	);
};

const AlertTitle = ({ children }) => (
	<h3 className="font-bold mb-1">{children}</h3>
);

const AlertDescription = ({ children }) => (
	<div className="text-sm">{children}</div>
);

// export default function HomePage() {
// 	const [cartItems, setCartItems] = useState([]);
// 	const [cartVisible, setCartVisible] = useState(false);
// 	const [showNotification, setShowNotification] = useState(false);

// 	const handleAddToCart = (product) => {
// 		setCartItems((prevItems) => {
// 			const existingItem = prevItems.find(
// 				(item) => item.id === product.id
// 			);
// 			if (existingItem) {
// 				return prevItems.map((item) =>
// 					item.id === product.id
// 						? { ...item, quantity: item.quantity + 1 }
// 						: item
// 				);
// 			}
// 			return [...prevItems, { ...product, quantity: 1 }];
// 		});
// 		setShowNotification(true);
// 	};

// 	useEffect(() => {
// 		if (showNotification) {
// 			const timer = setTimeout(() => setShowNotification(false), 3000);
// 			return () => clearTimeout(timer);
// 		}
// 	}, [showNotification]);

// 	const totalCartItems = cartItems.reduce(
// 		(sum, item) => sum + item.quantity,
// 		0
// 	);
// 	const totalPrice = cartItems.reduce(
// 		(sum, item) => sum + item.price * item.quantity,
// 		0
// 	);

// 	return (
// 		<div className="min-h-screen bg-gray-100">
// 			{/* Banner */}
// 			<div className="bg-blue-600 text-white py-20 px-4 text-center">
// 				<h1 className="text-4xl font-bold mb-4">
// 					Welcome to Our Store
// 				</h1>
// 				<p className="text-xl mb-8">
// 					Discover amazing products at great prices!
// 				</p>
// 				<a
// 					href="#products"
// 					className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
// 				>
// 					Shop Now
// 				</a>
// 			</div>

// 			{/* Main Content */}
// 			<div className="container mx-auto px-4 py-8">
// 				<h2
// 					id="products"
// 					className="text-3xl font-bold mb-8 text-center"
// 				>
// 					Our Products
// 				</h2>
// 				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// 					{products.map((product) => (
// 						<div
// 							key={product.id}
// 							className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg"
// 						>
// 							<img
// 								src={product.image}
// 								alt={product.name}
// 								className="w-full h-64 object-cover"
// 							/>
// 							<div className="p-6">
// 								<h3 className="text-xl font-semibold mb-2">
// 									{product.name}
// 								</h3>
// 								<p className="text-gray-600 mb-4">
// 									${product.price.toFixed(2)}
// 								</p>
// 								<button
// 									onClick={() => handleAddToCart(product)}
// 									className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 flex items-center justify-center"
// 								>
// 									<ShoppingCart
// 										className="mr-2"
// 										size={20}
// 									/>
// 									Add to Cart
// 								</button>
// 							</div>
// 						</div>
// 					))}
// 				</div>
// 			</div>

// 			{/* Floating Cart Button */}
// 			<button
// 				onClick={() => setCartVisible(true)}
// 				className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
// 			>
// 				<ShoppingCart size={24} />
// 				{totalCartItems > 0 && (
// 					<span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
// 						{totalCartItems}
// 					</span>
// 				)}
// 			</button>

// 			{/* Cart Sidebar */}
// 			{cartVisible && (
// 				<div className="fixed inset-0 bg-black bg-opacity-50 z-50">
// 					<div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl p-6 overflow-y-auto">
// 						<div className="flex justify-between items-center mb-6">
// 							<h2 className="text-2xl font-bold">Your Cart</h2>
// 							<button
// 								onClick={() => setCartVisible(false)}
// 								className="text-gray-500 hover:text-gray-700"
// 							>
// 								<X size={24} />
// 							</button>
// 						</div>
// 						{cartItems.length === 0 ? (
// 							<p className="text-gray-500">Your cart is empty.</p>
// 						) : (
// 							<>
// 								{cartItems.map((item) => (
// 									<div
// 										key={item.id}
// 										className="flex justify-between items-center mb-4 pb-4 border-b"
// 									>
// 										<div>
// 											<h3 className="font-semibold">
// 												{item.name}
// 											</h3>
// 											<p className="text-gray-600">
// 												${item.price.toFixed(2)}
// 											</p>
// 										</div>
// 										<span className="text-gray-500">
// 											Qty: {item.quantity}
// 										</span>
// 									</div>
// 								))}
// 								<div className="mt-6">
// 									<div className="flex justify-between mb-4">
// 										<span className="font-semibold">
// 											Total:
// 										</span>
// 										<span className="font-semibold">
// 											${totalPrice.toFixed(2)}
// 										</span>
// 									</div>
// 									<button
// 										onClick={() =>
// 											alert("Proceeding to checkout...")
// 										}
// 										className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300 text-center block"
// 									>
// 										Proceed to Checkout
// 									</button>
// 								</div>
// 							</>
// 						)}
// 					</div>
// 				</div>
// 			)}

// 			{/* Notification */}
// 			{showNotification && (
// 				<div className="fixed bottom-4 right-4 z-50">
// 					<Alert>
// 						<AlertTitle>Success</AlertTitle>
// 						<AlertDescription>
// 							Item added to your cart!
// 						</AlertDescription>
// 					</Alert>
// 				</div>
// 			)}
// 		</div>
// 	);
// }

export default function HomePage() {
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cart.items);
	const [cartVisible, setCartVisible] = useState(false);

	const handleAddToCart = (product) => {
		dispatch(addToCart(product));
	};

	const handleQuantityChange = (product, quantity) => {
		if (quantity < 1) {
			dispatch(removeFromCart(product.id));
		} else {
			dispatch(updateQuantity({ id: product.id, quantity }));
		}
	};

	const getProductQuantity = (productId) => {
		const cartItem = cartItems.find((item) => item.id === productId);
		return cartItem ? cartItem.quantity : 0;
	};

	return (
		<div className="bg-gray-50">
			{/* Landing Banner */}
			<div className="bg-blue-600 text-white p-20 text-center mb-8">
				<h1 className="text-5xl font-bold">Welcome to Our Store</h1>
				<p className="mt-4 text-lg">
					Discover amazing products at great prices!
				</p>
			</div>

			<div className="container mx-auto">
				<h2 className="text-3xl font-bold text-center mb-8">
					Our Products
				</h2>
				<div className="grid grid-cols-3 gap-6 p-4">
					{products.map((product) => {
						const quantity = getProductQuantity(product.id);
						return (
							<div
								key={product.id}
								className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-200 hover:shadow-xl"
							>
								<Image
									src={product.image}
									alt={product.name}
									width={400}
									height={400}
									className="w-full h-64 object-cover transform transition-transform duration-200 hover:scale-105"
								/>
								<div className="p-4">
									<h3 className="text-xl font-semibold text-gray-800 mb-2">
										{product.name}
									</h3>
									<p className="text-lg font-medium text-gray-600 mb-4">
										${product.price.toFixed(2)}
									</p>
									{quantity > 0 ? (
										<div className="flex items-center space-x-4">
											<button
												onClick={() =>
													handleQuantityChange(
														product,
														quantity - 1
													)
												}
												className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors"
											>
												-
											</button>
											<span className="text-lg font-semibold">
												{quantity}
											</span>
											<button
												onClick={() =>
													handleQuantityChange(
														product,
														quantity + 1
													)
												}
												className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition-colors"
											>
												+
											</button>
										</div>
									) : (
										<button
											onClick={() =>
												handleAddToCart(product)
											}
											className="mt-4 w-full bg-green-500 text-white text-center py-2 rounded-md hover:bg-green-600 transition-colors"
										>
											Add to Cart
										</button>
									)}
								</div>
							</div>
						);
					})}
				</div>
			</div>

			{/* Floating Cart Button */}
			<button
				onClick={() => setCartVisible(!cartVisible)}
				className="fixed bottom-8 right-8 bg-blue-500 text-white p-4 rounded-full shadow-lg focus:outline-none"
			>
				<ShoppingCart className="w-8 h-8" />
				{cartItems.length > 0 && (
					<span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 text-xs flex items-center justify-center">
						{cartItems.length}
					</span>
				)}
			</button>

			{/* Cart Overlay */}
			{cartVisible && (
				<div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40 flex justify-end">
					<div className="w-1/3 bg-white shadow-lg p-6">
						<div className="flex justify-between items-center mb-6">
							<h2 className="text-2xl font-bold">Your Cart</h2>
							<button
								onClick={() => setCartVisible(false)}
								className="focus:outline-none hover:bg-transparent"
							>
								<X className="w-6 h-6 text-gray-600" />
							</button>
						</div>

						{cartItems.length > 0 ? (
							<div>
								<div className="flex justify-between items-center mb-6">
									<span className="text-lg font-medium">
										Total Items:{" "}
										{cartItems.reduce(
											(acc, item) => acc + item.quantity,
											0
										)}
									</span>
									<span className="text-lg font-medium">
										Cart value: $
										{cartItems
											.reduce(
												(acc, item) =>
													acc +
													item.price * item.quantity,
												0
											)
											.toFixed(2)}
									</span>
								</div>

								{cartItems.map((item) => (
									<div
										key={item.id}
										className="flex justify-between items-center mb-4"
									>
										<div className="flex items-center">
											<Image
												src={item.image}
												alt={item.name}
												width={64}
												height={64}
												className="w-16 h-16 object-cover mr-4"
											/>
											<div>
												<span>{item.name}</span>
												<div className="flex items-center mt-2">
													<button
														onClick={() =>
															handleQuantityChange(
																item,
																item.quantity -
																	1
															)
														}
														className="bg-red-500 text-white px-4 py-1 rounded-md"
													>
														-
													</button>
													<span className="mx-2">
														{item.quantity}
													</span>
													<button
														onClick={() =>
															handleQuantityChange(
																item,
																item.quantity +
																	1
															)
														}
														className="bg-blue-500 text-white px-4 py-1 rounded-md"
													>
														+
													</button>
												</div>
											</div>
										</div>
										<div className="text-right">
											<span className="block">
												${item.price.toFixed(2)} *{" "}
												{item.quantity} = $
												{(
													item.price * item.quantity
												).toFixed(2)}
											</span>
										</div>
										<button
											onClick={() =>
												dispatch(
													removeFromCart(item.id)
												)
											}
											className="text-red-500 focus:outline-none ml-4"
										>
											<X className="w-5 h-5" />
										</button>
									</div>
								))}

								<Link
									href="/checkout"
									className="bg-green-500 text-white px-4 py-2 rounded-md block text-center"
								>
									Proceed to Checkout
								</Link>
							</div>
						) : (
							<p>Your cart is empty.</p>
						)}
					</div>
				</div>
			)}
		</div>
	);
}
