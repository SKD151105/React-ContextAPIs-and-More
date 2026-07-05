import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";

function Home() {
  return <h1>Home</h1>;
}

function Login() {
  return <h1>Login</h1>;
}

function Dashboard() {
  return <h1>Dashboard</h1>;
}

function ProtectedRoute({ children }) {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

// Use this pattern when you want to show page navigation and protected routes.
export default function RoutingAndAuthorization() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> <Link to="/login">Login</Link>{" "}
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
