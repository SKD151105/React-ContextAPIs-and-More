import { createSelector, createSlice, nanoid } from "@reduxjs/toolkit";
import { selectFilters } from "../filters/filtersSlice";
import { loadBooksFromStorage } from "../../lib/storage";
import { starterBooks } from "./booksData";

function normalizeProgress(status, progress) {
  const safeProgress = Math.max(0, Math.min(100, Number(progress) || 0));

  if (status === "completed") {
    return 100;
  }

  if (status === "planned") {
    return 0;
  }

  return safeProgress === 0 ? 10 : safeProgress;
}

function normalizeBookInput(bookData, fallbackBook = {}) {
  const status = bookData.status || fallbackBook.status || "planned";
  const progress = normalizeProgress(
    status,
    bookData.progress ?? fallbackBook.progress,
  );
  const rating = Math.max(0, Math.min(5, Number(bookData.rating) || 0));
  const pageCount = Math.max(1, Number(bookData.pageCount) || 1);

  return {
    title: bookData.title.trim(),
    author: bookData.author.trim(),
    category: bookData.category.trim(),
    description: bookData.description.trim(),
    notes: bookData.notes.trim(),
    pageCount,
    progress,
    status,
    rating,
    isFavorite: Boolean(bookData.isFavorite ?? fallbackBook.isFavorite ?? false),
  };
}

function getInitialBooks() {
  const storedBooks = loadBooksFromStorage();
  return storedBooks !== null ? storedBooks : starterBooks;
}

const initialState = {
  items: getInitialBooks(),
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: {
      reducer: (state, action) => {
        state.items.unshift(action.payload);
      },
      prepare: (bookData) => {
        const normalized = normalizeBookInput(bookData);
        const timestamp = new Date().toISOString();

        return {
          payload: {
            id: nanoid(),
            ...normalized,
            createdAt: timestamp,
            updatedAt: timestamp,
          },
        };
      },
    },
    updateBook: (state, action) => {
      const { id, changes } = action.payload;
      const existingBook = state.items.find((book) => book.id === id);

      if (!existingBook) {
        return;
      }

      Object.assign(
        existingBook,
        normalizeBookInput(changes, existingBook),
        { updatedAt: new Date().toISOString() },
      );
    },
    deleteBook: (state, action) => {
      state.items = state.items.filter((book) => book.id !== action.payload);
    },
    toggleFavorite: (state, action) => {
      const book = state.items.find((item) => item.id === action.payload);

      if (book) {
        book.isFavorite = !book.isFavorite;
        book.updatedAt = new Date().toISOString();
      }
    },
    setReadingStatus: (state, action) => {
      const { bookId, status } = action.payload;
      const book = state.items.find((item) => item.id === bookId);

      if (!book) {
        return;
      }

      book.status = status;
      book.progress = normalizeProgress(status, book.progress);
      book.updatedAt = new Date().toISOString();
    },
    updateProgress: (state, action) => {
      const { bookId, progress } = action.payload;
      const book = state.items.find((item) => item.id === bookId);

      if (!book) {
        return;
      }

      const safeProgress = Math.max(0, Math.min(100, Number(progress) || 0));

      book.progress = safeProgress;
      book.status =
        safeProgress === 0 ? "planned" : safeProgress === 100 ? "completed" : "reading";
      book.updatedAt = new Date().toISOString();
    },
    rateBook: (state, action) => {
      const { bookId, rating } = action.payload;
      const book = state.items.find((item) => item.id === bookId);

      if (!book) {
        return;
      }

      book.rating = Math.max(0, Math.min(5, Number(rating) || 0));
      book.updatedAt = new Date().toISOString();
    },
  },
});

export const {
  addBook,
  updateBook,
  deleteBook,
  toggleFavorite,
  setReadingStatus,
  updateProgress,
  rateBook,
} = booksSlice.actions;

export const selectAllBooks = (state) => state.books.items;
export const selectBookById = (state, bookId) =>
  state.books.items.find((book) => book.id === bookId);

export const selectCategories = createSelector([selectAllBooks], (books) => [
  "all",
  ...new Set(books.map((book) => book.category).filter(Boolean)),
]);

export const selectDashboardStats = createSelector([selectAllBooks], (books) => {
  const completedBooks = books.filter((book) => book.status === "completed");
  const totalProgress = books.reduce((sum, book) => sum + book.progress, 0);

  return {
    total: books.length,
    reading: books.filter((book) => book.status === "reading").length,
    planned: books.filter((book) => book.status === "planned").length,
    completed: completedBooks.length,
    favorites: books.filter((book) => book.isFavorite).length,
    averageProgress: books.length === 0 ? 0 : Math.round(totalProgress / books.length),
    averageRating:
      completedBooks.length === 0
        ? 0
        : (
            completedBooks.reduce((sum, book) => sum + book.rating, 0) /
            completedBooks.length
          ).toFixed(1),
  };
});

export const selectCurrentlyReading = createSelector([selectAllBooks], (books) =>
  books
    .filter((book) => book.status === "reading")
    .sort((firstBook, secondBook) => secondBook.progress - firstBook.progress),
);

export const selectRecentBooks = createSelector([selectAllBooks], (books) =>
  [...books]
    .sort(
      (firstBook, secondBook) =>
        new Date(secondBook.updatedAt).getTime() -
        new Date(firstBook.updatedAt).getTime(),
    )
    .slice(0, 4),
);

export const selectTopRatedBooks = createSelector([selectAllBooks], (books) =>
  [...books]
    .filter((book) => book.rating > 0)
    .sort((firstBook, secondBook) => secondBook.rating - firstBook.rating)
    .slice(0, 5),
);

export const selectCategoryBreakdown = createSelector([selectAllBooks], (books) =>
  Object.entries(
    books.reduce((counts, book) => {
      counts[book.category] = (counts[book.category] || 0) + 1;
      return counts;
    }, {}),
  ).sort((firstEntry, secondEntry) => secondEntry[1] - firstEntry[1]),
);

export const selectVisibleBooks = createSelector(
  [selectAllBooks, selectFilters],
  (books, filters) => {
    const searchValue = filters.searchTerm.trim().toLowerCase();

    const filteredBooks = books.filter((book) => {
      const matchesSearch =
        searchValue.length === 0 ||
        book.title.toLowerCase().includes(searchValue) ||
        book.author.toLowerCase().includes(searchValue);
      const matchesCategory =
        filters.category === "all" || book.category === filters.category;
      const matchesStatus =
        filters.status === "all" || book.status === filters.status;
      const matchesFavorite = !filters.favoritesOnly || book.isFavorite;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesStatus &&
        matchesFavorite
      );
    });

    return [...filteredBooks].sort((firstBook, secondBook) => {
      if (filters.sortBy === "updated") {
        return (
          new Date(secondBook.updatedAt).getTime() -
          new Date(firstBook.updatedAt).getTime()
        );
      }

      if (filters.sortBy === "progress") {
        return secondBook.progress - firstBook.progress;
      }

      if (filters.sortBy === "rating") {
        return secondBook.rating - firstBook.rating;
      }

      return firstBook.title.localeCompare(secondBook.title);
    });
  },
);

export default booksSlice.reducer;
