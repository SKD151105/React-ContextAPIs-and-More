function Navbar() {
  return <header>Navbar</header>;
}

function HomePage() {
  return <main>Home page</main>;
}

function AppShell({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

// Use this pattern when you want a small app skeleton with clear component boundaries.
export default function ClassicTemplateApp() {
  return (
    <AppShell>
      <HomePage />
    </AppShell>
  );
}
