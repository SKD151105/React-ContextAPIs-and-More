import { NavLink, Outlet } from "react-router-dom";
import Container from "../components/ui/Container.jsx";
import items from "../data/items.js";
import useSavedItems from "../hooks/useSavedItems.js";

function getNavClassName({ isActive }) {
  return `surface-button px-4 ${
    isActive
      ? "primary-button"
      : "text-white/85"
  }`;
}

export default function AppLayout() {
  const { savedIds, toggleSaved } = useSavedItems();
  const savedItems = items.filter((item) => savedIds.includes(item.id));

  return (
    <div className="page">
      <Container className="overflow-hidden bg-linear-to-r from-sky-100/14 via-white/8 to-white/4">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <p className="eyebrow">React Router Practice</p>
            <div>
              <h1 className="hero-title font-semibold text-white">Route Lab Storefront</h1>
              <p className="body-copy mt-3">
                Practice shared layouts, nested pages, dynamic URLs, and search-parameter
                filtering inside one small React app.
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap gap-3">
            <NavLink to="/" end className={getNavClassName}>
              Home
            </NavLink>
            <NavLink to="/catalog" className={getNavClassName}>
              Catalog
            </NavLink>
            <NavLink to="/saved" className={getNavClassName}>
              Saved ({savedItems.length})
            </NavLink>
          </nav>
        </div>
      </Container>

      <Outlet context={{ items, savedIds, savedItems, toggleSaved }} />

      <Container className="bg-white/5">
        <div className="flex flex-col gap-3 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
          <p>
            Router patterns included: layout route, index route, params route, wildcard route,
            and query-string filters.
          </p>
          <p>{items.length} demo products available</p>
        </div>
      </Container>
    </div>
  );
}
