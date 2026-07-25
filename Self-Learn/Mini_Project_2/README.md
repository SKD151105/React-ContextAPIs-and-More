# Mini Project 2 - Password Generator

Mini Project 2 is a small React + Vite password generator built with Tailwind CSS. It focuses on core React concepts, simple state-driven UI updates, and a practical utility you can extend for real-world use.

## Features

- Generate a random password instantly.
- Control password length with a slider.
- Include or exclude numbers.
- Include or exclude special characters.
- Copy the generated password to the clipboard with one click.
- Automatically regenerate the password whenever the settings change.

## Concepts Implemented

- `useState` for managing password length, character options, and the generated output.
- `useEffect` for regenerating the password when dependencies change.
- `useCallback` for stable handler functions and password generation logic.
- `useRef` for selecting the password field before copying.
- Controlled rendering with React state instead of manual DOM updates.
- Tailwind utility classes for fast, consistent styling.

## Best Practices Followed

- Keep the password logic isolated in a dedicated component.
- Derive the generated password from current settings instead of storing extra UI state.
- Use a read-only input for display so users can copy the password without editing it accidentally.
- Keep the UI minimal and focused on one task.
- Trigger updates from state changes instead of wiring manual refresh logic.
- Use semantic labels and form controls so the interface stays accessible and predictable.

## Practical Tips

- Increase the length and enable special characters for stronger passwords.
- Copy the password immediately after generation to avoid losing it.
- If you want to reuse this project, consider adding a strength meter and a password history panel.
- For a production version, store user preferences in local storage so the selected options persist between visits.
- If you expand the app later, split generation logic into a helper function to keep the component easier to test.

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```
