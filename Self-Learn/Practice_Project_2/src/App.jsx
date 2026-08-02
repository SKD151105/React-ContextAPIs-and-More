import { NavLink, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LibraryPage from "./pages/LibraryPage";
import BookDetailsPage from "./pages/BookDetailsPage";
import BookEditorPage from "./pages/BookEditorPage";
import InsightsPage from "./pages/InsightsPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.css";

function getNavClassName({ isActive }) {
  return `nav-link${isActive ? " active" : ""}`;
}

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand-block">
          <p className="eyebrow">Mini project</p>
          <div>
            <h1 className="app-title">ShelfTrack</h1>
            <p className="page-copy">
              A focused reading tracker powered by Redux Toolkit.
            </p>
          </div>
        </div>

        <nav>
          <ul className="nav-list">
            <li>
              <NavLink className={getNavClassName} to="/">
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink className={getNavClassName} to="/library">
                Library
              </NavLink>
            </li>
            <li>
              <NavLink className={getNavClassName} to="/books/new">
                Add Book
              </NavLink>
            </li>
            <li>
              <NavLink className={getNavClassName} to="/insights">
                Insights
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="header-meta">
          <span className="pill">Saved locally in your browser</span>
        </div>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/books/new" element={<BookEditorPage mode="create" />} />
          <Route path="/books/:bookId" element={<BookDetailsPage />} />
          <Route
            path="/books/:bookId/edit"
            element={<BookEditorPage mode="edit" />}
          />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
