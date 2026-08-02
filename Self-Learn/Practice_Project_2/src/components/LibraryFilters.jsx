import { useDispatch, useSelector } from "react-redux";
import {
  clearFilters,
  selectFilters,
  setCategory,
  setSearchTerm,
  setSortBy,
  setStatus,
  toggleFavoritesOnly,
} from "../features/filters/filtersSlice";
import { selectCategories } from "../features/books/booksSlice";

export default function LibraryFilters() {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const categories = useSelector(selectCategories);

  return (
    <section className="panel controls-panel">
      <div className="field-row">
        <label className="field">
          <span>Search</span>
          <input
            onChange={(event) => dispatch(setSearchTerm(event.target.value))}
            placeholder="Search by title or author"
            type="text"
            value={filters.searchTerm}
          />
        </label>

        <label className="field">
          <span>Category</span>
          <select
            onChange={(event) => dispatch(setCategory(event.target.value))}
            value={filters.category}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>

        <label className="field">
          <span>Status</span>
          <select
            onChange={(event) => dispatch(setStatus(event.target.value))}
            value={filters.status}
          >
            <option value="all">all</option>
            <option value="planned">planned</option>
            <option value="reading">reading</option>
            <option value="completed">completed</option>
          </select>
        </label>

        <label className="field">
          <span>Sort by</span>
          <select
            onChange={(event) => dispatch(setSortBy(event.target.value))}
            value={filters.sortBy}
          >
            <option value="updated">Recently updated</option>
            <option value="title">Title</option>
            <option value="progress">Progress</option>
            <option value="rating">Rating</option>
          </select>
        </label>
      </div>

      <div className="action-row">
        <button
          className={`toggle-chip${filters.favoritesOnly ? " active" : ""}`}
          onClick={() => dispatch(toggleFavoritesOnly())}
          type="button"
        >
          {filters.favoritesOnly ? "Showing favorites" : "Favorites only"}
        </button>
        <button
          className="ghost-button"
          onClick={() => dispatch(clearFilters())}
          type="button"
        >
          Reset filters
        </button>
      </div>
    </section>
  );
}
