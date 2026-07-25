# Mini Project 2 - Password Generator and Currency Converter

Mini Project 2 is a small React + Vite collection of two practical mini-apps built with Tailwind CSS: a password generator and a currency converter. Both parts focus on core React concepts, state-driven UI updates, and reusable component structure.

## Password Generator

### Features

- Generate a random password instantly.
- Control password length with a slider.
- Include or exclude numbers.
- Include or exclude special characters.
- Copy the generated password to the clipboard with one click.
- Automatically regenerate the password whenever the settings change.

### Concepts Implemented

- `useState` for managing password length, character options, and the generated output.
- `useEffect` for regenerating the password when dependencies change.
- `useCallback` for stable handler functions and password generation logic.
- `useRef` for selecting the password field before copying.
- Controlled rendering with React state instead of manual DOM updates.
- Tailwind utility classes for fast, consistent styling.

## Currency Converter

### Features

- Convert one currency into another using live exchange data.
- Change the source and target currencies from dropdowns.
- Update the amount before conversion.
- Swap the selected currencies quickly.
- Show the converted value in a clean, card-based layout.

### Concepts Implemented

- `useState` for storing amount, selected currencies, and converted output.
- Custom hooks with `useCurrencyInfo` to keep API logic separate from the UI.
- `useEffect` inside the hook to fetch exchange-rate data when the base currency changes.
- `useId` in the shared input component for accessible form labeling.
- Form submission handling with `preventDefault` to control conversion manually.
- Component composition through a reusable input component.

## Best Practices Followed

- Keep each feature in a dedicated component so the app stays easy to understand.
- Separate data-fetching logic into a custom hook instead of mixing it into the UI component.
- Reuse the same input layout for both currency fields to avoid duplicated markup.
- Use readable labels and form controls so the interface stays accessible and predictable.
- Keep conversion and password generation logic tied to state, not manual DOM manipulation.
- Favor small, focused components that can be extended independently.

## Practical Tips

- For the password generator, increase the length and enable special characters for stronger passwords.
- Copy the password immediately after generation to avoid losing it.
- For the currency converter, use the swap button to reverse conversions faster.
- If you want more accurate or production-ready rates, add error handling and loading states around the exchange-rate fetch.
- If you reuse this project, store common preferences in local storage so the selected options persist between visits.
- If you expand either feature later, split logic into helper functions and hooks to keep components easier to test.

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
