"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Activate ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
      title={`Current theme is ${isDark ? "dark" : "light"}. Click to switch.`}
      className="relative w-36 h-10 rounded-full bg-white dark:bg-dark-100 border border-neutral-600 dark:border-dark-500 px-2 overflow-hidden transition-colors duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
    >
      <span
        className={`absolute top-[11px] flex items-center text-xs font-semibold text-neutral-800 dark:text-stone-300 pointer-events-none select-none transition-all duration-300
        ${isDark ? "left-4" : "right-4"}`}
      >
        {isDark ? "DARK MODE" : "LIGHT MODE"}
      </span>

      <motion.div
        className="absolute top-[3px] left-[3px] w-8 h-8 rounded-full bg-white border border-neutral-400 dark:border-dark-300 shadow-md flex items-center justify-center"
        animate={{ x: isDark ? 104 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
      >
        {isDark ? (
          <Moon size={16} className="text-dark-700" />
        ) : (
          <Sun size={16} className="text-yellow-400" />
        )}
      </motion.div>
    </button>
  );
};