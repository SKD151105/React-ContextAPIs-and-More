import { Link } from "react-router-dom";
import Card from "../ui/Card.jsx";

export default function Item({ item, isSaved, onToggleSaved }) {
  return (
    <Card className="flex h-full flex-col justify-between gap-4">
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="eyebrow">{item.category}</p>
            <h2 className="mt-2 text-[1.35rem] font-semibold text-white">{item.name}</h2>
          </div>
          <span className="rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-100">
            {item.shipping}
          </span>
        </div>

        <p className="text-sm leading-6 text-white/80">{item.description}</p>

        <div className="flex flex-wrap gap-2">
          {item.highlights.map((highlight) => (
            <span
              key={highlight}
              className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-white/75"
            >
              {highlight}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between gap-3">
          <p className="text-lg font-semibold text-white">${item.price.toFixed(2)}</p>
          <p className="text-sm text-white/70">{item.rating} rating</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link to={`/items/${item.id}`} className="surface-button primary-button">
            View details
          </Link>
          <button
            type="button"
            onClick={() => onToggleSaved(item.id)}
            className="surface-button"
          >
            {isSaved ? "Remove saved" : "Save item"}
          </button>
        </div>
      </div>
    </Card>
  );
}
