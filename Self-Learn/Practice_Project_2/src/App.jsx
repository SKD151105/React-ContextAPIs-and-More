import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BookLayout from "./pages/BookLayout";
import Book from "./pages/Book";
import NewBook from "./pages/NewBook";
import "./App.css";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "violet" : "#cd4bf0",
              })}
              to="/"
            >
              {({ isActive }) => {
                return isActive ? "Current" : "Home";
              }}
            </NavLink>
          </li>
          <li>
            <Link to="/book">Book</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/book" element={<BookLayout />}>
          <Route index element={<Book />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
