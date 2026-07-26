import './App.css';
import { Cart } from './components/Cart';
import { ProductList } from './components/ProductList';
import { CartProvider } from './context/CartProvider';

function App() {
  return (
    <CartProvider>
      <div className="app-shell">
        <header className="hero">
          <p className="hero__eyebrow">Mini Project 3</p>
          <h1>Simple Cart Application</h1>
          <p className="hero__text">
            Add products to the cart, review the selected items, and remove them
            when needed.
          </p>
        </header>

        <main className="content-grid">
          <ProductList />
          <Cart />
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
