import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="panel">
      <h2>Page not found</h2>
      <p>The route you requested does not exist in ShelfTrack.</p>
      <Link className="button-link" to="/">
        Go to dashboard
      </Link>
    </section>
  );
}
