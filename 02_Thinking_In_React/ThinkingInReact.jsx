import { useMemo, useState } from "react";

const PRODUCTS = [
  { id: 1, name: "Phone", category: "electronics" },
  { id: 2, name: "Shirt", category: "fashion" },
  { id: 3, name: "Laptop", category: "electronics" },
];

// Use this pattern when you want to split a UI into a filter input and a filtered list.
export default function ThinkingInReact() {
  const [query, setQuery] = useState("");

  const visibleProducts = useMemo(() => {
    return PRODUCTS.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query]);

  return (
    <section>
      <h1>Thinking in React</h1>
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search products"
      />
      <ul>
        {visibleProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </section>
  );
}
