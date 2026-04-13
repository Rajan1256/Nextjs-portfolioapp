import { useTheme } from "./ThemeProvider";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed right-6 top-6 z-50 rounded-full border border-white/10 bg-white/10 backdrop-blur-lg p-3 shadow-neon hover:scale-105 transition"
      aria-label="Toggle theme"
    >
      <motion.div
        key={theme}
        initial={{ rotate: -45, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="w-5 h-5 text-white"
      >
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </motion.div>
    </button>
  );
}
