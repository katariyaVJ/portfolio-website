import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] shadow-lg backdrop-blur-md transition-shadow hover:border-[var(--accent)] hover:shadow-[0_0_28px_var(--accent-glow)]"
    >
      <motion.span
        key={isDark ? "moon" : "sun"}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
        className="text-lg"
      >
        <FontAwesomeIcon
          icon={isDark ? faMoon : faSun}
          className={isDark ? "text-[var(--accent)]" : "text-amber-500"}
        />
      </motion.span>
    </motion.button>
  );
};

export default ThemeToggle;
