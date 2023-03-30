import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { updateBook } from "../redux/bookSlice";
import Swal from "sweetalert2";

function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [bookName, setBookName] = useState("");
  const [bookGenre, setBookGenre] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookPrice, setBookPrice] = useState(0);
  const [bookImg, setBookImg] = useState("");

  useEffect(() => {
    async function fetchBook() {
      try {
        const response = await axios.get(
          `http://localhost:5298/api/books/${id}`
        );
        const book = response.data;
        setBookName(book.name);
        setBookGenre(book.genre);
        setBookAuthor(book.author);
        setBookPrice(book.price);
        setBookImg(book.img);
      } catch (error) {
        console.error("Kitap yüklenirken hata oluştu:", error);
      }
    }

    fetchBook();
  }, [id]);

  const handleUpdateBook = async () => {
    try {
      const updatedBook = {
        id,
        name: bookName,
        genre: bookGenre,
        author: bookAuthor,
        price: bookPrice,
        img: bookImg,
      };

      await axios.put(`http://localhost:5298/api/books/${id}`, updatedBook, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch(updateBook(updatedBook));
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Update işlemi başarılı",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(`/admin/listbook`);
    } catch (error) {
      console.error("Kitap güncellenirken hata oluştu:", error);
    }
  };

  return (
    <div>
      <div className="">
        <h2 className="mt-3 display-h3 block text-sm font-semibold text-black">
          MENÜ DÜZENLE
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
            placeholder={bookName}
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
            placeholder={bookGenre}
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
            placeholder={bookAuthor}
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
            placeholder={bookPrice}
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
            placeholder={bookImg}
          />
        </div>
        <div className="mt-1">
          <button
            type="button"
            onClick={handleUpdateBook}
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            EDIT
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditBook;
