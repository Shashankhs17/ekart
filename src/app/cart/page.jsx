"use client";

import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { removeFromCart } from "@/store/cartSlice";

export default function CartPage() {
	const cartItems = useSelector((state) => state.cart.items);
	const dispatch = useDispatch();

	const totalPrice = cartItems.reduce(
		(total, product) => total + product.price,
		0
	);

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-3xl font-bold mb-4">Your Cart</h1>
			{cartItems.length === 0 ? (
				<p>Your cart is empty.</p>
			) : (
				<div>
					{cartItems.map((product) => (
						<div
							key={product.id}
							className="border p-4 mb-2 flex justify-between"
						>
							<span>
								{product.name} - ${product.price}
							</span>
							<button
								onClick={() =>
									dispatch(removeFromCart(product.id))
								}
								className="bg-red-500 text-white px-4 py-2"
							>
								Remove
							</button>
						</div>
					))}
					<h2 className="text-xl font-bold">Total: ${totalPrice}</h2>
					<Link
						href="/checkout"
						className="bg-green-500 text-white px-4 py-2 mt-4 inline-block"
					>
						Proceed to Checkout
					</Link>
				</div>
			)}
		</div>
	);
}
