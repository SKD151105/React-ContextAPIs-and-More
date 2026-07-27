import "./App.css";
import Item from "./components/Item/Item.jsx";

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
      <div className="items-container bg-white/10 backdrop-blur-md backdrop-saturate-125 border border-white/20 rounded-xl p-3 shadow-lg max-w-3xl m-3 flex flex-col gap-3">
        {items.map((item) => {
          return <Item key={item.name} item={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
