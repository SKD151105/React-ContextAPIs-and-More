import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { AppLayout } from './components/AppLayout';
import { CartPage } from './pages/CartPage';
import { ProductsPage } from './pages/ProductsPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<ProductsPage />} />
      <Route path="cart" element={<CartPage />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
