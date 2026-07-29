import { startTransition, useDeferredValue } from "react";
import { Link, useOutletContext, useSearchParams } from "react-router-dom";
import Item from "../components/Item/Item.jsx";
import Card from "../components/ui/Card.jsx";
import Container from "../components/ui/Container.jsx";

export default function CatalogPage() {
  const { items, savedIds, toggleSaved } = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const activeCategory = searchParams.get("category") ?? "all";
  const activeSort = searchParams.get("sort") ?? "featured";
  const searchValue = searchParams.get("search") ?? "";
  const deferredSearch = useDeferredValue(searchValue);
  const categories = ["all", ...new Set(items.map((item) => item.category))];

  const filteredItems = items.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const normalizedSearch = deferredSearch.trim().toLowerCase();
    const matchesSearch =
      normalizedSearch.length === 0 ||
      item.name.toLowerCase().includes(normalizedSearch) ||
      item.description.toLowerCase().includes(normalizedSearch);

    return matchesCategory && matchesSearch;
  });

  const visibleItems = [...filteredItems].sort((firstItem, secondItem) => {
    if (activeSort === "price-low") {
      return firstItem.price - secondItem.price;
    }

    if (activeSort === "price-high") {
      return secondItem.price - firstItem.price;
    }

    return 0;
  });

  function updateParams(updates) {
    const nextParams = new URLSearchParams(searchParams);

    Object.entries(updates).forEach(([key, value]) => {
      const shouldRemove =
        value === "" ||
        value === null ||
        value === undefined ||
        (key === "category" && value === "all") ||
        (key === "sort" && value === "featured");

      if (shouldRemove) {
        nextParams.delete(key);
      } else {
        nextParams.set(key, value);
      }
    });

    startTransition(() => {
      setSearchParams(nextParams);
    });
  }

  return (
    <>
      <Container className="bg-linear-to-br from-white/14 to-transparent">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-2">
            <p className="eyebrow">Catalog Route</p>
            <h2 className="section-title font-semibold text-white">Filter items using the URL</h2>
            <p className="body-copy">
              This page uses `useSearchParams` so category, sort, and search values stay shareable
              in the address bar.
            </p>
          </div>

          <Link to="/catalog" className="surface-button">
            Reset filters
          </Link>
        </div>
      </Container>

      <Container>
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="space-y-3">
            <label className="text-sm font-medium text-white/80" htmlFor="catalog-search">
              Search by name or description
            </label>
            <input
              id="catalog-search"
              type="text"
              value={searchValue}
              onChange={(event) => updateParams({ search: event.target.value })}
              placeholder="Try webcam or keyboard"
              className="field-control"
            />
          </Card>

          <Card className="space-y-3">
            <label className="text-sm font-medium text-white/80" htmlFor="catalog-sort">
              Sort products
            </label>
            <select
              id="catalog-sort"
              value={activeSort}
              onChange={(event) => updateParams({ sort: event.target.value })}
              className="field-control"
            >
              <option value="featured">Featured order</option>
              <option value="price-low">Price: low to high</option>
              <option value="price-high">Price: high to low</option>
            </select>
          </Card>
        </div>

        <div className="flex flex-wrap gap-3">
          {categories.map((category) => {
            const isActive = category === activeCategory;

            return (
              <button
                key={category}
                type="button"
                onClick={() => updateParams({ category })}
                className={`surface-button px-4 capitalize ${
                  isActive
                    ? "primary-button"
                    : "text-white/82"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </Container>

      <Container>
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow">Results</p>
            <h3 className="subsection-title mt-2 font-semibold text-white">
              {visibleItems.length} item{visibleItems.length === 1 ? "" : "s"} found
            </h3>
          </div>
          <p className="text-sm text-white/70">
            Active route: /catalog
            {searchParams.toString() ? `?${searchParams.toString()}` : ""}
          </p>
        </div>

        {visibleItems.length === 0 ? (
          <Card className="space-y-3 text-center">
            <h4 className="subsection-title font-semibold text-white">No items match this filter</h4>
            <p className="text-sm text-white/75">
              Try clearing the search box or switching to another category.
            </p>
            <div>
              <Link to="/catalog" className="surface-button primary-button">
                View all items
              </Link>
            </div>
          </Card>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {visibleItems.map((item) => (
              <Item
                key={item.id}
                item={item}
                isSaved={savedIds.includes(item.id)}
                onToggleSaved={toggleSaved}
              />
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
