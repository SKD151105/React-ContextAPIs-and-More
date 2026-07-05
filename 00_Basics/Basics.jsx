export function GreetingCard({ name }) {
  // Use this pattern when you want to show how a prop becomes visible UI.
  return (
    <article className="card">
      <h1>Hello, {name}</h1>
      <p>Props move data from parent to child.</p>
    </article>
  );
}

export default function BasicsApp() {
  return <GreetingCard name="React learner" />;
}
