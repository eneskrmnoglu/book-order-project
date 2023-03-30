import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../redux/bookSlice";
import useAuth from "../hooks/useAuth";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

function CartPage() {
  const { isLoggedIn, user } = useAuth();
  const cart = useSelector((state) => state.book.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((total, book) => total + book.price, 0);

  const handleRemoveFromCart = (bookId) => {
    dispatch(removeFromCart(bookId));
  };

  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
          Shopping Cart
        </h1>

        <div>
          <h2 className="sr-only">Items in your shopping cart</h2>

          <ul
            role="list"
            className="border-t border-b border-gray-200 divide-y divide-gray-200"
          >
            {cart.map((product, productIdx) => (
              <li key={product.id} className="flex py-6 sm:py-10">
                <div className="flex-shrink-0">
                  <img
                    src={product.img}
                    className="w-24 h-24 rounded-lg object-center object-cover sm:w-32 sm:h-32"
                  />
                </div>

                <div className="relative ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                  <div>
                    <div className="flex justify-between sm:grid sm:grid-cols-2">
                      <div className="pr-6">
                        <h3 className="text-sm">
                          <a
                            href=""
                            className="font-medium text-gray-700 hover:text-gray-800"
                          >
                            {product.name}
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.genre}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.author}
                        </p>
                      </div>

                      <p className="text-sm font-medium text-gray-900 text-right">
                        {product.price} ₺
                      </p>
                    </div>

                    <div className="mt-4 flex items-center sm:block sm:absolute sm:top-0 sm:left-1/2 sm:mt-0">
                      <label
                        htmlFor={`quantity-${productIdx}`}
                        className="sr-only"
                      >
                        Quantity, {product.name}
                      </label>

                      <button
                        type="button"
                        onClick={() => handleRemoveFromCart(product.id)}
                        className="ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:ml-0 sm:mt-3"
                      >
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Order summary */}
        <div className="mt-10 sm:ml-32 sm:pl-6">
          <div className="bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8">
            <h2 className="sr-only">Order summary</h2>

            <div className="flow-root">
              <dl className="-my-4 text-sm divide-y divide-gray-200">
                <div className="py-4 flex items-center justify-between">
                  <dt className="text-base font-medium text-gray-900">
                    Order total
                  </dt>
                  <dd className="text-base font-medium text-gray-900">
                    {totalPrice} ₺
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          {isLoggedIn && (
            <div className="mt-10">
              <Elements stripe={stripePromise}>
                <CheckoutForm amount={totalPrice} />
              </Elements>
            </div>
          )}
          <div className="mt-6 text-sm text-center text-gray-500">
            <p>
              or{" "}
              <Link
                to="/bookslist"
                className="text-indigo-600 font-medium hover:text-indigo-500"
              >
                Continue Shopping<span aria-hidden="true"> &rarr;</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
