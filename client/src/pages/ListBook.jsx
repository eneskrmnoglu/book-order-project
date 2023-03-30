import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { axiosBooksSuccess, deleteBook } from "../redux/bookSlice";
import axios from "axios";
import Swal from "sweetalert2";

function ListBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const books = useSelector((state) => state.book.books);

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
  }, [dispatch]);

  const handleDelete = async (bookId) => {
    try {
      await axios.delete(`http://localhost:5298/api/books/${bookId}`);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Silme işlemi başarılı.",
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch(deleteBook(bookId));
    } catch (error) {
      console.error("Kitap silinirken hata oluştu:", error);
    }
  };

  const handleEdit = (bookId) => {
    navigate(`/admin/edit-book/${bookId}`);
  };

  return (
    <div className="h-full w-full overflow-x-auto rounded-xl bg-layer-2 px-11 py-6 scrollbar bg-white">
      <table className="w-full divide-y divide-muted-1">
        <thead className="text-xs font-semibold uppercase text-text text-red-500">
          <tr>
            <th className="whitespace-nowrap bg-layer-2 py-3 px-4 text-center font-semibold text-text">
              Book Name
            </th>
            <th className="whitespace-nowrap bg-layer-2 py-3 px-4 text-center font-semibold text-text">
              Book Genre
            </th>
            <th className="whitespace-nowrap bg-layer-2 py-3 px-4 text-center font-semibold text-text">
              Book Author
            </th>
            <th className="whitespace-nowrap bg-layer-2 py-3 px-4 text-center font-semibold text-text">
              Operations
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-muted-1 text-sm font-medium">
          {books.map((book) => {
            return (
              <tr key={book.id}>
                <td className="whitespace-nowrap bg-layer-2 py-3 px-4 text-heading">
                  <span>{book.name}</span>
                </td>
                <td className="whitespace-nowrap bg-layer-2 py-3 px-4 text-heading">
                  {book.genre}
                </td>
                <td className="whitespace-nowrap bg-layer-2 py-3 px-4 text-heading">
                  {book.author}
                </td>
                <td className="whitespace-nowrap bg-layer-2 py-3 px-4 text-heading">
                  <i
                    class="bi bi-pen-fill text-blue-500"
                    onClick={() => handleEdit(book.id)}
                  ></i>
                  <i
                    class="bi bi-trash-fill ml-2 text-red-500"
                    onClick={() => handleDelete(book.id)}
                  ></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ListBook;
