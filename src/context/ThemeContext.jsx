import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("portfolio-theme") || "dark";
  });

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
    const root = document.documentElement;
    root.classList.remove("theme-cyber-dark", "theme-cyber-light");
    root.classList.add(theme === "dark" ? "theme-cyber-dark" : "theme-cyber-light");
  }, [theme]);

  const toggleTheme = () => setThemeState((t) => (t === "dark" ? "light" : "dark"));
  const setTheme = (t) => setThemeState(t === "light" ? "light" : "dark");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
