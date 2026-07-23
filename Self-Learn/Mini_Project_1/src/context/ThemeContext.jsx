import { createContext, useState, useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("my_theme");
    if (savedTheme) {
      return savedTheme;
    }
    return "dark";
  });

  useEffect(() => {
    localStorage.setItem("my_theme", theme);
    // document.body.className = theme === "dark" ? "bg-gray-950 text-white" : "bg-gray-100 text-black";
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
