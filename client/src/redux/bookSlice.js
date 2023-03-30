import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  cart: [],
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    axiosBooksSuccess: (state, action) => {
      state.books = action.payload;
    },
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
    updateBook: (state, action) => {
      const index = state.books.findIndex(
        (book) => book.id === action.payload.id
      );
      if (index !== -1) {
        state.books[index] = action.payload;
      }
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((book) => book.id !== action.payload);
    },
    clearCart: (state) => {
      state.cart = []; // Sepeti temizle
    },
  },
});

export const {
  axiosBooksSuccess,
  addToCart,
  removeFromCart,
  addBook,
  deleteBook,
  updateBook,
  clearCart,
} = bookSlice.actions;

export default bookSlice.reducer;
