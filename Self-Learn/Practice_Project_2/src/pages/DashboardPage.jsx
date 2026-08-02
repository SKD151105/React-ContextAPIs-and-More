import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import StatGrid from "../components/StatGrid";
import {
  selectCurrentlyReading,
  selectDashboardStats,
  selectRecentBooks,
} from "../features/books/booksSlice";

export default function DashboardPage() {
  const stats = useSelector(selectDashboardStats);
  const currentlyReading = useSelector(selectCurrentlyReading);
  const recentBooks = useSelector(selectRecentBooks);

  return (
    <section className="page">
      <section className="panel hero-panel">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Your reading dashboard</p>
            <h2>Track what you are reading and keep momentum visible.</h2>
          </div>
          <Link className="button-link" to="/books/new">
            Add a book
          </Link>
        </div>
        <p className="page-copy">
          ShelfTrack keeps your library, reading status, notes, and progress in
          one small app with local persistence.
        </p>
      </section>

      <StatGrid stats={stats} />

      <section className="card-grid">
        <article className="panel">
          <div className="section-heading section-heading-small">
            <h2>Currently reading</h2>
            <Link className="button-link" to="/library">
              Open library
            </Link>
          </div>

          {currentlyReading.length === 0 ? (
            <p>No active reads right now. Add a book and start reading.</p>
          ) : (
            <div className="list-stack">
              {currentlyReading.slice(0, 3).map((book) => (
                <Link className="list-link" key={book.id} to={`/books/${book.id}`}>
                  <div>
                    <strong>{book.title}</strong>
                    <span>{book.author}</span>
                  </div>
                  <span>{book.progress}%</span>
                </Link>
              ))}
            </div>
          )}
        </article>

        <article className="panel">
          <h2>Recently updated</h2>
          {recentBooks.length === 0 ? (
            <p>Your recent activity will appear here.</p>
          ) : (
            <div className="list-stack">
              {recentBooks.map((book) => (
                <Link className="list-link" key={book.id} to={`/books/${book.id}`}>
                  <div>
                    <strong>{book.title}</strong>
                    <span>{book.category}</span>
                  </div>
                  <span>{book.status}</span>
                </Link>
              ))}
            </div>
          )}
        </article>
      </section>
    </section>
  );
}
