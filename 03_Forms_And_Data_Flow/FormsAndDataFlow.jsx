import { useState } from "react";

function Field({ label, name, value, onChange, type = "text" }) {
  return (
    <label>
      {label}
      <input name={name} type={type} value={value} onChange={onChange} />
    </label>
  );
}

// Use this pattern when a form needs a single source of truth and predictable updates.
export default function FormsAndDataFlow() {
  const [form, setForm] = useState({ email: "", password: "" });

  function handleChange(event) {
    setForm((currentForm) => ({
      ...currentForm,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(form);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Field
        label="Email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <Field
        label="Password"
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
