import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout.jsx";
import CatalogPage from "./pages/CatalogPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ItemDetailsPage from "./pages/ItemDetailsPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import SavedPage from "./pages/SavedPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<HomePage />} />
      <Route path="catalog" element={<CatalogPage />} />
      <Route path="items/:itemId" element={<ItemDetailsPage />} />
      <Route path="saved" element={<SavedPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export default router;
