import "./App.css";
import Item from "./components/Item/Item.jsx";
import Container from "./components/ui/Container.jsx";

function App() {
  const items = [
    {
      name: "Watch",
      description: "This is an example item.",
      price: 19.99,
    },
    {
      name: "Keyboard",
      description: "This is an example item.",
      price: 30.0,
    },
    {
      name: "Monitor",
      description: "This is an example item.",
      price: 150.0,
    },
    {
      name: "Mouse",
      description: "Wireless ergonomic mouse.",
      price: 25.5,
    },
    {
      name: "Headphones",
      description: "Over-ear noise-cancelling headphones.",
      price: 89.99,
    },
    {
      name: "Laptop Stand",
      description: "Adjustable aluminum laptop stand.",
      price: 34.0,
    },
    {
      name: "Webcam",
      description: "1080p HD webcam with built-in mic.",
      price: 49.99,
    },
  ];

  return (
    <div className="page">
      <Container className="bg-linear-to-br from-white/20 via-white/10 to-transparent">
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                Shopping Hub
              </p>
              <h2 className="text-2xl font-semibold text-white">
                Buy items, save favorites, and revisit anytime
              </h2>
            </div>
            <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white/80">
              {items.length} ready to explore
            </div>
          </div>
          <p className="text-sm text-white/80">
            Discover useful picks, keep your favorites close, and come back when
            you are ready to shop.
          </p>
        </div>
      </Container>

      <Container>
        {items.map((item) => {
          return <Item key={item.name} item={item} />;
        })}
      </Container>

      <Container className="mt-4">{/* <Cart /> */}</Container>
    </div>
  );
}

export default App;
