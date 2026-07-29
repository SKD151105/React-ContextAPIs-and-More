import { Link, useOutletContext } from "react-router-dom";
import Item from "../components/Item/Item.jsx";
import Card from "../components/ui/Card.jsx";
import Container from "../components/ui/Container.jsx";

export default function HomePage() {
  const { items, savedIds, toggleSaved } = useOutletContext();
  const featuredItems = items.slice(0, 3);
  const categories = [...new Set(items.map((item) => item.category))];

  return (
    <>
      <Container className="bg-linear-to-br from-cyan-300/12 via-white/9 to-transparent">
        <div className="grid gap-5 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div className="space-y-4">
            <p className="eyebrow">Start Here</p>
            <h2 className="section-title font-semibold text-white">
              Use this project to practice real navigation flows instead of only rendering a
              single component tree.
            </h2>
            <p className="body-copy">
              Jump between pages, filter the catalog with URL search params, open dynamic product
              pages, and keep saved items available across routes.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/catalog" className="surface-button primary-button">
                Explore catalog
              </Link>
              <Link to="/catalog?category=audio" className="surface-button">
                Open filtered route
              </Link>
            </div>
          </div>

          <Card className="space-y-4">
            <h3 className="subsection-title font-semibold text-white">Quick route checklist</h3>
            <div className="grid gap-3 text-sm text-white/80">
              <p>Index route: homepage content inside a shared layout.</p>
              <p>Dynamic route: each item opens at `/items/:itemId`.</p>
              <p>Search params: catalog filters stay in the URL.</p>
              <p>Wildcard route: unmatched paths land on a custom 404 page.</p>
            </div>
          </Card>
        </div>
      </Container>

      <Container>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <p className="eyebrow">Products</p>
            <h3 className="stats-number mt-3 text-white">{items.length}</h3>
            <p className="mt-2 text-sm text-white/75">
              Small dataset for practicing maps, params, and detail pages.
            </p>
          </Card>
          <Card>
            <p className="eyebrow">Categories</p>
            <h3 className="stats-number mt-3 text-white">{categories.length}</h3>
            <p className="mt-2 text-sm text-white/75">
              Category chips update the route without a full page reload.
            </p>
          </Card>
          <Card>
            <p className="eyebrow">Saved</p>
            <h3 className="stats-number mt-3 text-white">{savedIds.length}</h3>
            <p className="mt-2 text-sm text-white/75">
              Saved items remain available while you move between pages.
            </p>
          </Card>
        </div>
      </Container>

      <Container>
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="eyebrow">Featured Items</p>
            <h3 className="subsection-title mt-2 font-semibold text-white">
              Try the detail route from one of these cards
            </h3>
          </div>
          <Link to="/saved" className="inline-link">
            View saved page
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featuredItems.map((item) => (
            <Item
              key={item.id}
              item={item}
              isSaved={savedIds.includes(item.id)}
              onToggleSaved={toggleSaved}
            />
          ))}
        </div>
      </Container>
    </>
  );
}
