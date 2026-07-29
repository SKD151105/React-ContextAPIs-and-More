import { Link, useNavigate, useOutletContext, useParams } from "react-router-dom";
import Card from "../components/ui/Card.jsx";
import Container from "../components/ui/Container.jsx";

export default function ItemDetailsPage() {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const { items, savedIds, toggleSaved } = useOutletContext();
  const item = items.find((entry) => entry.id === itemId);

  if (!item) {
    return (
      <Container>
        <Card className="space-y-4 text-center">
          <p className="eyebrow">Missing Item</p>
          <h2 className="section-title mx-auto font-semibold text-white">
            This product does not exist
          </h2>
          <p className="text-sm text-white/75">
            The route param was valid, but it does not match any current demo item.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/catalog" className="surface-button primary-button">
              Back to catalog
            </Link>
            <Link to="/" className="surface-button">
              Go home
            </Link>
          </div>
        </Card>
      </Container>
    );
  }

  const relatedItems = items.filter(
    (entry) => entry.category === item.category && entry.id !== item.id
  );
  const isSaved = savedIds.includes(item.id);

  return (
    <>
      <Container className="bg-linear-to-br from-cyan-300/15 via-white/10 to-transparent">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="space-y-2">
            <p className="eyebrow">Dynamic Route</p>
            <h2 className="section-title font-semibold text-white">{item.name}</h2>
            <p className="text-sm text-white/75">
              Opened from `/items/{item.id}` using `useParams`.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="surface-button"
          >
            Go back
          </button>
        </div>
      </Container>

      <Container>
        <Card className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-cyan-200/25 bg-cyan-200/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-cyan-100">
                {item.category}
              </span>
              <span className="rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-100">
                {item.shipping}
              </span>
            </div>

            <p className="text-base leading-7 text-white/80">{item.overview}</p>

            <div className="grid gap-3 sm:grid-cols-3">
              {item.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-xl border border-white/12 bg-white/5 p-4 text-sm text-white/75"
                >
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 rounded-2xl border border-white/12 bg-slate-950/20 p-5">
            <div>
              <p className="eyebrow">Order Snapshot</p>
              <h3 className="stats-number mt-2 text-white">${item.price.toFixed(2)}</h3>
            </div>
            <p className="text-sm text-white/75">Community rating: {item.rating}</p>
            <p className="text-sm text-white/75">{item.description}</p>
            <div className="flex flex-wrap gap-3">
              <button type="button" onClick={() => toggleSaved(item.id)} className="surface-button primary-button">
                {isSaved ? "Remove from saved" : "Save this item"}
              </button>
              <Link to={`/catalog?category=${item.category}`} className="surface-button">
                More in {item.category}
              </Link>
            </div>
          </div>
        </Card>
      </Container>

      <Container>
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="eyebrow">Related Route Ideas</p>
            <h3 className="subsection-title mt-2 font-semibold text-white">Continue exploring</h3>
          </div>
          <Link to="/saved" className="inline-link">
            Open saved page
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {relatedItems.length === 0 ? (
            <Card>
              <p className="text-sm text-white/75">
                No sibling items yet. Add more products to this category if you want to practice
                related links and richer nested flows.
              </p>
            </Card>
          ) : (
            relatedItems.map((relatedItem) => (
              <Card key={relatedItem.id} className="space-y-3">
                <p className="eyebrow">{relatedItem.category}</p>
                <h4 className="subsection-title font-semibold text-white">{relatedItem.name}</h4>
                <p className="text-sm text-white/75">{relatedItem.description}</p>
                <Link to={`/items/${relatedItem.id}`} className="surface-button w-fit">
                  Open details
                </Link>
              </Card>
            ))
          )}
        </div>
      </Container>
    </>
  );
}
