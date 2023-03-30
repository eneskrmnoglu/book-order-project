import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { axiosBooksSuccess, addToCart } from "../redux/bookSlice";

import axios from "axios";

function BooksList() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book.books);
  const [nameFilter, setNameFilter] = React.useState("");
  const [genreFilter, setGenreFilter] = React.useState("Tümü");

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await axios.get("http://localhost:5298/api/books");
        console.log(response);
        dispatch(axiosBooksSuccess(response.data));
      } catch (error) {
        console.error("Kitaplar yüklenirken hata oluştu:", error);
      }
    }

    fetchBooks();
  }, []);

  function filterBooks(books) {
    return books.filter(
      (book) =>
        (nameFilter === "" ||
          book.name.toLowerCase().includes(nameFilter.toLowerCase())) &&
        (genreFilter === "Tümü" || book.genre === genreFilter)
    );
  }
  return (
    <div>
      <label
        htmlFor="email"
        className="mt-2 block text-sm font-medium text-gray-700"
      >
        Filtrele
      </label>
      <div className="block">
        <div className="mt-1">
          <input
            type="text"
            className="text-black mb-2 mt-2 w-2/4  rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
          />
        </div>
        <select
          id="location"
          name="location"
          className="text-black w-1/4 mx-auto rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
          value={genreFilter}
          onChange={(e) => setGenreFilter(e.target.value)}
        >
          <option>Tümü</option>
          <option>Science</option>
          <option>Literature</option>
          <option>Comic</option>
          <option>Novel</option>
          <option>Fear</option>
        </select>
      </div>
      <div className="bg-white">
        <div className="max-w-2xl  mx-auto py-4 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-xl font-bold text-gray-900">Kitap Listesi</h2>

          <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {filterBooks(books).map((product) => (
              <div key={product.id}>
                <div className="relative">
                  <div className="relative w-full h-72 rounded-lg overflow-hidden">
                    <img
                      src={product.img}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="relative mt-4">
                    <p className="mt-1 text-sm text-gray-500">
                      {product.genre}
                    </p>
                    <h3 className="text-sm font-medium text-gray-900">
                      {product.name}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {product.author}
                    </p>
                  </div>
                  <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    <p className="relative text-lg font-semibold text-white">
                      {product.price} ₺
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    type="button"
                    onClick={() => dispatch(addToCart(product))}
                    className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"
                  >
                    Add to bag<span className="sr-only">, {product.name}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BooksList;
