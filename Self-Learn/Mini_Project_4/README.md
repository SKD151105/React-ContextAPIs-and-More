# Mini Project 4 - Cart with React Router and Redux Toolkit

Mini Project 4 is a small React + Vite cart app that uses React Router for page navigation and Redux Toolkit for shared cart state. It keeps the product listing and cart view on separate routes while allowing quantity updates from both places.

## Features

- Show a fixed list of products on the products route.
- Navigate between a products page and a dedicated cart page.
- Add items to the cart and adjust quantities with `-` and `+` controls.
- Display per-item subtotal, total item count, and full cart total.
- Keep cart state globally available through Redux Toolkit.

## Concepts Implemented

- `react-router-dom` with a layout route, index route, and cart route.
- Redux Toolkit with `configureStore` and `createSlice`.
- `react-redux` with `Provider`, `useDispatch`, and `useSelector`.
- Component composition with separate layout, product card, cart page, and quantity control components.
- Derived totals calculated from the current Redux state.

## Project Structure

- `src/app/store.js` creates the Redux store.
- `src/features/cart/cartSlice.js` manages add, decrease, and remove cart actions.
- `src/components/AppLayout.jsx` renders the shared header and navigation.
- `src/pages/ProductsPage.jsx` shows the available products.
- `src/pages/CartPage.jsx` shows cart items, quantities, and totals.
- `src/components/ProductCard.jsx` renders each product with cart controls.
- `src/components/QuantityControl.jsx` handles quantity updates.
- `src/data/products.js` stores the product catalog.

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```
