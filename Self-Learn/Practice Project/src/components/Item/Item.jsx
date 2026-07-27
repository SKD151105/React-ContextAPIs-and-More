import Card from "../ui/Card.jsx";

export default function Item({ item }) {
  return (
    <Card>
      <h2 className="text-lg font-medium">{item.name}</h2>
      <p className="text-sm text-white/80 mt-1">{item.description}</p>
      <p className="text-bold text-md text-white/90 mt-2">
        Price: ${item.price}
      </p>
    </Card>
  );
}
