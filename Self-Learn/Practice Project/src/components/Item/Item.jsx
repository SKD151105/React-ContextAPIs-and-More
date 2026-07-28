import Card from "../ui/Card.jsx";

export default function Item({ item }) {
  return (
    <Card>
      <h1 className="text-xl font-medium mb-2">{item.name}</h1>
      <p className="text-sm text-white/80 mt-1">{item.description}</p>
      <p className="text-bold text-md text-white mt-2">
        Price: ${item.price}
      </p>
    </Card>
  );
}
