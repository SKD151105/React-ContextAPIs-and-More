import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  setReadingStatus,
  toggleFavorite,
  updateProgress,
} from "../features/books/booksSlice";

const statusActions = {
  planned: "Start reading",
  reading: "Mark completed",
  completed: "Move to planned",
};

const nextStatus = {
  planned: "reading",
  reading: "completed",
  completed: "planned",
};

export default function BookCard({ book }) {
  const dispatch = useDispatch();

  function handleStatusAdvance() {
    dispatch(
      setReadingStatus({
        bookId: book.id,
        status: nextStatus[book.status],
      }),
    );
  }

  function handleQuickProgress() {
    const nextProgress =
      book.status === "planned"
        ? 10
        : book.status === "completed"
          ? 100
          : Math.min(book.progress + 10, 100);

    dispatch(updateProgress({ bookId: book.id, progress: nextProgress }));
  }

  return (
    <article className="panel book-card">
      <div className="book-card-top">
        <div>
          <h2>{book.title}</h2>
          <p className="page-copy">
            {book.author} · {book.category}
          </p>
        </div>
        <button
          className="ghost-button"
          onClick={() => dispatch(toggleFavorite(book.id))}
          type="button"
        >
          {book.isFavorite ? "Favorited" : "Favorite"}
        </button>
      </div>

      <p>{book.description}</p>

      <div className="meta-row">
        <span className="badge-outline">{book.status}</span>
        <span className="badge-outline">{book.pageCount} pages</span>
        <span className="badge-outline">
          {book.rating > 0 ? `${book.rating}/5` : "Unrated"}
        </span>
      </div>

      <div className="progress-block">
        <div className="progress-row">
          <span>Progress</span>
          <strong>{book.progress}%</strong>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${book.progress}%` }} />
        </div>
      </div>

      <div className="action-row">
        <Link className="button-link" to={`/books/${book.id}`}>
          Details
        </Link>
        <button className="ghost-button" onClick={handleQuickProgress} type="button">
          Update progress
        </button>
        <button className="ghost-button" onClick={handleStatusAdvance} type="button">
          {statusActions[book.status]}
        </button>
      </div>
    </article>
  );
}
