import { useSelector } from "react-redux";
import {
  selectCategoryBreakdown,
  selectDashboardStats,
  selectTopRatedBooks,
} from "../features/books/booksSlice";

export default function InsightsPage() {
  const stats = useSelector(selectDashboardStats);
  const topRatedBooks = useSelector(selectTopRatedBooks);
  const categoryBreakdown = useSelector(selectCategoryBreakdown);

  return (
    <section className="page">
      <div>
        <p className="eyebrow">Library insights</p>
        <h2>See where your reading habit is heading.</h2>
      </div>

      <section className="card-grid">
        <article className="panel">
          <h2>Reading mix</h2>
          <div className="list-stack">
            <div className="list-row">
              <span>Planned</span>
              <strong>{stats.planned}</strong>
            </div>
            <div className="list-row">
              <span>Reading</span>
              <strong>{stats.reading}</strong>
            </div>
            <div className="list-row">
              <span>Completed</span>
              <strong>{stats.completed}</strong>
            </div>
            <div className="list-row">
              <span>Favorites</span>
              <strong>{stats.favorites}</strong>
            </div>
          </div>
        </article>

        <article className="panel">
          <h2>Quality snapshot</h2>
          <div className="list-stack">
            <div className="list-row">
              <span>Average progress</span>
              <strong>{stats.averageProgress}%</strong>
            </div>
            <div className="list-row">
              <span>Average completed-book rating</span>
              <strong>{stats.averageRating}</strong>
            </div>
          </div>
        </article>
      </section>

      <section className="card-grid">
        <article className="panel">
          <h2>Categories</h2>
          {categoryBreakdown.length === 0 ? (
            <p>No category data yet.</p>
          ) : (
            <div className="list-stack">
              {categoryBreakdown.map(([category, count]) => (
                <div className="list-row" key={category}>
                  <span>{category}</span>
                  <strong>{count}</strong>
                </div>
              ))}
            </div>
          )}
        </article>

        <article className="panel">
          <h2>Top rated books</h2>
          {topRatedBooks.length === 0 ? (
            <p>Rate a few books and the top list will show up here.</p>
          ) : (
            <div className="list-stack">
              {topRatedBooks.map((book) => (
                <div className="list-row" key={book.id}>
                  <span>{book.title}</span>
                  <strong>{book.rating}/5</strong>
                </div>
              ))}
            </div>
          )}
        </article>
      </section>
    </section>
  );
}
