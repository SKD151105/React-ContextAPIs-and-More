import { Link } from "react-router-dom";
import Card from "../components/ui/Card.jsx";
import Container from "../components/ui/Container.jsx";

export default function NotFoundPage() {
  return (
    <Container>
      <Card className="space-y-4 text-center">
        <p className="eyebrow">404 Route</p>
        <h2 className="section-title mx-auto font-semibold text-white">Page not found</h2>
        <p className="mx-auto max-w-xl text-sm leading-6 text-white/75">
          This wildcard route catches URLs that are not mapped in the router configuration.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/" className="surface-button primary-button">
            Go home
          </Link>
          <Link to="/catalog" className="surface-button">
            Open catalog
          </Link>
        </div>
      </Card>
    </Container>
  );
}
