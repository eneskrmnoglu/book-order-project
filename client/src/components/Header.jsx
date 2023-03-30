import React from "react";
import useAuth from "../hooks/useAuth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const navigation = [
  { name: "Ana Sayfa", href: "/" },
  { name: "İletişim", href: "/contact" },
  { name: "SSS", href: "/sss" },
];

function Header() {
  const { isLoggedIn, user } = useAuth();
  const cart = useSelector((state) => state.book.cart);

  return (
    <div>
      <header className="bg-indigo-400">
        <nav
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Top"
        >
          <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
            <div className="flex items-center">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-12 "
                  src="https://i.hizliresim.com/gjlxxun.png"
                  alt=""
                />
              </a>
              <div className="hidden ml-10 space-x-8 lg:block">
                {navigation.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-base font-medium text-white hover:text-indigo-50"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="ml-10 space-x-4">
              {!isLoggedIn && (
                <Link
                  to="/signin"
                  className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
                >
                  Üye Girişi
                </Link>
              )}
              {isLoggedIn && (
                <>
                  <a
                    onClick={() => auth.signOut()}
                    className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
                  >
                    Çıkış Yap
                  </a>
                </>
              )}
              <Link
                type="button"
                to="/cart"
                className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sepetim
                <span className="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                  {cart.length}
                </span>
              </Link>
              <Link
                to="/admin"
                className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
              >
                Admin Paneli
              </Link>
            </div>
          </div>
          <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
            {navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-white hover:text-indigo-50"
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
