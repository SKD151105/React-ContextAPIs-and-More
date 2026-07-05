import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

// Use this pattern when multiple nested components need the same app-level value.
export default function ContextAPIExample() {
  const theme = useTheme();

  return (
    <button
      onClick={() =>
        theme?.setTheme(theme.theme === "light" ? "dark" : "light")
      }
    >
      Theme: {theme?.theme}
    </button>
  );
}
