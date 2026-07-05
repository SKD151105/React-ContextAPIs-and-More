import { useState } from "react";

// Use this pattern when you want to explain how clicks update state and trigger rerenders.
export default function StateEventsAndRendering() {
  const [count, setCount] = useState(0);
  const [showMessage, setShowMessage] = useState(true);

  function handleIncrement() {
    setCount((previousCount) => previousCount + 1);
  }

  return (
    <section>
      <h1>State, Events, and Rendering</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={() => setShowMessage((value) => !value)}>Toggle</button>
      {showMessage ? <p>React re-renders when state changes.</p> : null}
    </section>
  );
}
