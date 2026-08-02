import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import LibraryFilters from "../components/LibraryFilters";
import { selectVisibleBooks } from "../features/books/booksSlice";

export default function LibraryPage() {
  const books = useSelector(selectVisibleBooks);

  return (
    <section className="page">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Your full library</p>
          <h2>Browse, filter, and manage your reading list.</h2>
        </div>
        <Link className="button-link" to="/books/new">
          Add new book
        </Link>
      </div>

      <LibraryFilters />

      {books.length === 0 ? (
        <section className="panel empty-panel">
          <h2>No books found</h2>
          <p>Try changing the filters or add a new title to the library.</p>
        </section>
      ) : (
        <section className="card-grid">
          {books.map((book) => (
            <BookCard book={book} key={book.id} />
          ))}
        </section>
      )}
    </section>
  );
}
