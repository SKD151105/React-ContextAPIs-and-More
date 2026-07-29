import { Link, useOutletContext } from "react-router-dom";
import Item from "../components/Item/Item.jsx";
import Card from "../components/ui/Card.jsx";
import Container from "../components/ui/Container.jsx";

export default function SavedPage() {
  const { savedIds, savedItems, toggleSaved } = useOutletContext();

  return (
    <>
      <Container className="bg-linear-to-br from-white/15 via-white/10 to-transparent">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Saved Route</p>
            <h2 className="section-title mt-2 font-semibold text-white">Your saved items</h2>
            <p className="body-copy mt-3">
              This route reads the shared state from the layout and shows how one page can reuse
              data gathered while browsing another page.
            </p>
          </div>
          <div className="surface-button pointer-events-none text-white/80">
            {savedIds.length} saved
          </div>
        </div>
      </Container>

      <Container>
        {savedItems.length === 0 ? (
          <Card className="space-y-4 text-center">
            <h3 className="subsection-title font-semibold text-white">No saved items yet</h3>
            <p className="text-sm text-white/75">
              Visit the catalog or any item page, then save a product to see it listed here.
            </p>
            <div>
              <Link to="/catalog" className="surface-button primary-button">
                Browse catalog
              </Link>
            </div>
          </Card>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {savedItems.map((item) => (
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
