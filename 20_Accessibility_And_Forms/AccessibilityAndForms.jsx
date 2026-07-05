import { useId } from "react";

// Use this pattern when you want forms that work well with keyboards and screen readers.
export default function AccessibilityAndForms() {
  const inputId = useId();
  const errorId = `${inputId}-error`;

  return (
    <form>
      <label htmlFor={inputId}>Email</label>
      <input
        id={inputId}
        name="email"
        type="email"
        aria-describedby={errorId}
        aria-invalid="false"
      />
      <p id={errorId}>Enter a valid email address.</p>
      <button type="submit">Submit</button>
    </form>
  );
}
