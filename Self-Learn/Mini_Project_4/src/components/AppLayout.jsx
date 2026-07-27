import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function AppLayout() {
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0),
  );

  return (
    <div className="app-shell">
      <header className="site-header">
        <div>
          <p className="site-header__eyebrow">Mini Project 4</p>
          <h1>Cart with Router and Redux Toolkit</h1>
          <p className="site-header__text">
            Products and cart are separated into routes, while Redux keeps the
            cart state available everywhere.
          </p>
        </div>

        <nav className="nav-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link--active' : 'nav-link'
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link--active' : 'nav-link'
            }
          >
            Cart ({cartCount})
          </NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
