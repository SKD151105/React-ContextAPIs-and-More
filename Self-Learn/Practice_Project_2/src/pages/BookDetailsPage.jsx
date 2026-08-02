import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  deleteBook,
  rateBook,
  selectBookById,
  setReadingStatus,
  toggleFavorite,
  updateProgress,
} from "../features/books/booksSlice";

export default function BookDetailsPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { bookId } = useParams();
  const book = useSelector((state) => selectBookById(state, bookId));

  if (!book) {
    return (
      <section className="panel">
        <h2>Book not found</h2>
        <p>The selected book does not exist in your library.</p>
        <Link className="button-link" to="/library">
          Back to library
        </Link>
      </section>
    );
  }

  function handleDelete() {
    dispatch(deleteBook(book.id));
    navigate("/library");
  }

  return (
    <section className="page">
      <section className="panel">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{book.category}</p>
            <h2>{book.title}</h2>
            <p className="page-copy">{book.author}</p>
          </div>

          <div className="meta-row">
            <span className="badge-outline">{book.status}</span>
            <span className="badge-outline">
              {book.rating > 0 ? `${book.rating}/5 rating` : "No rating"}
            </span>
            <span className="badge-outline">{book.pageCount} pages</span>
          </div>
        </div>

        <p>{book.description}</p>

        <div className="progress-block">
          <div className="progress-row">
            <span>Reading progress</span>
            <strong>{book.progress}%</strong>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${book.progress}%` }} />
          </div>
        </div>

        <label className="field">
          <span>Update progress</span>
          <input
            max="100"
            min="0"
            onChange={(event) =>
              dispatch(
                updateProgress({
                  bookId: book.id,
                  progress: event.target.value,
                }),
              )
            }
            type="range"
            value={book.progress}
          />
        </label>

        <div className="field-row">
          <label className="field">
            <span>Status</span>
            <select
              onChange={(event) =>
                dispatch(
                  setReadingStatus({
                    bookId: book.id,
                    status: event.target.value,
                  }),
                )
              }
              value={book.status}
            >
              <option value="planned">planned</option>
              <option value="reading">reading</option>
              <option value="completed">completed</option>
            </select>
          </label>

          <label className="field">
            <span>Rating</span>
            <select
              onChange={(event) =>
                dispatch(rateBook({ bookId: book.id, rating: event.target.value }))
              }
              value={book.rating}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
        </div>

        <div className="action-row">
          <button
            className="ghost-button"
            onClick={() => dispatch(toggleFavorite(book.id))}
            type="button"
          >
            {book.isFavorite ? "Remove favorite" : "Add to favorites"}
          </button>
          <Link className="button-link" to={`/books/${book.id}/edit`}>
            Edit book
          </Link>
          <button className="ghost-button danger-button" onClick={handleDelete} type="button">
            Delete
          </button>
        </div>
      </section>

      <section className="panel">
        <h2>Notes</h2>
        <p>{book.notes || "No notes added yet."}</p>
      </section>
    </section>
  );
}
