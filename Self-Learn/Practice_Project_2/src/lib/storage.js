const STORAGE_KEY = "shelftrack-library";

export function loadBooksFromStorage() {
  try {
    const serializedBooks = window.localStorage.getItem(STORAGE_KEY);

    if (!serializedBooks) {
      return null;
    }

    const parsedBooks = JSON.parse(serializedBooks);
    return Array.isArray(parsedBooks) ? parsedBooks : null;
  } catch {
    return null;
  }
}

export function saveBooksToStorage(books) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
  } catch {
    return null;
  }

  return true;
}
