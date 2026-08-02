import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../features/books/booksSlice";
import filtersReducer from "../features/filters/filtersSlice";
import { saveBooksToStorage } from "../lib/storage";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    filters: filtersReducer,
  },
});

store.subscribe(() => {
  const { books } = store.getState();
  saveBooksToStorage(books.items);
});
