# Mini Project 3 - Simple Cart Application

Mini Project 3 is a small React + Vite cart app that lets you browse a few products, add them to a shared cart, adjust quantities, and see the total update in real time.

## Features

- Show a fixed list of available products.
- Add items to the cart from the product list.
- Increase or decrease item quantities from the cart.
- Display subtotal per item and a live cart total.
- Keep product and cart logic separated with a custom hook and context provider.

## Concepts Implemented

- `useContext` with a cart provider for shared cart state.
- A custom `useCart` hook for cleaner access to cart actions and values.
- Component composition with separate product, cart, and quantity controls.
- Derived values such as item subtotals and cart totals from the current state.
- Utility formatting for prices to keep display logic consistent.

## Project Structure

- `src/data/products.js` stores the product catalog.
- `src/context/CartProvider.jsx` and `src/context/cartContext.js` manage shared cart state.
- `src/hooks/useCart.js` exposes the cart context to components.
- `src/components/ProductList.jsx` renders the products and add-to-cart actions.
- `src/components/Cart.jsx` renders the current cart contents and totals.
- `src/components/QuantityControl.jsx` handles quantity changes.

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
