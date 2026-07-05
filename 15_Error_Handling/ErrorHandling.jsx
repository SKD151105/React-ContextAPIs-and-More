import { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

function RiskyWidget() {
  return <div>Safe UI</div>;
}

// Use this pattern when one broken component should not crash the whole screen.
export default function ErrorHandlingExample() {
  return (
    <ErrorBoundary>
      <RiskyWidget />
    </ErrorBoundary>
  );
}
