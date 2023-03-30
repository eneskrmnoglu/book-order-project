import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBook } from "../redux/bookSlice";
import axios from "axios";
import Swal from "sweetalert2";

function AddBook() {
  const dispatch = useDispatch();
  const [bookName, setBookName] = useState("");
  const [bookGenre, setBookGenre] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookPrice, setBookPrice] = useState(0);
  const [bookImg, setBookImg] = useState("");

  async function handleAddBook() {
    try {
      const response = await axios.post("http://localhost:5298/api/books", {
        name: bookName,
        genre: bookGenre,
        author: bookAuthor,
        price: parseFloat(bookPrice),
        img: bookImg,
      });

      dispatch(addBook(response.data));

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Kitap ekleme işlemi başarılı.",
        showConfirmButton: false,
        timer: 1500,
      });

      setBookName("");
      setBookGenre("");
      setBookAuthor("");
      setBookPrice(0);
      setBookImg("");
    } catch (error) {
      console.error("Kitap eklenirken hata oluştu:", error);
    }
  }
  return (
    <div className="">
      <h2 className="mt-3 display-h3 block text-sm font-semibold text-black">
        MENÜ EKLE
      </h2>
      <label
        htmlFor="email"
        className="mt-2 block text-sm font-medium text-gray-700"
      >
        Book Name
      </label>
      <div className="mt-1">
        <input
          type="text"
          className="text-black mb-2 mt-2 block w-2/3 mx-auto rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
          onChange={(e) => setBookName(e.target.value)}
        />
      </div>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        Book Genre
      </label>
      <div className="mt-1">
        <input
          type="text"
          className="text-black mb-2 mt-2 block w-2/3 mx-auto rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
          onChange={(e) => setBookGenre(e.target.value)}
        />
      </div>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        Book Author
      </label>
      <div className="mt-1">
        <input
          type="text"
          className="text-black mb-2 mt-2 block w-2/3 mx-auto rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
          onChange={(e) => setBookAuthor(e.target.value)}
        />
      </div>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        Book Price
      </label>
      <div className="mt-1">
        <input
          type="text"
          className="text-black mb-2 mt-2 block w-2/3 mx-auto rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
          onChange={(e) => setBookPrice(e.target.value)}
        />
      </div>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        Book IMG
      </label>
      <div className="mt-1">
        <input
          type="text"
          className="text-black mb-2 mt-2 block w-2/3 mx-auto rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
          onChange={(e) => setBookImg(e.target.value)}
        />
      </div>
      <div className="mt-1">
        <button
          type="button"
          onClick={handleAddBook}
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          ADD
        </button>
      </div>
    </div>
  );
}

export default AddBook;
