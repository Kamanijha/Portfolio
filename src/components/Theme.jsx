import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button onClick={toggleTheme} className="absolute top-2 right-4 p-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 transition"
    >
      {theme === "light" ? "🌙 " : "☀️ "}
    </button>
  );
};

export default ThemeToggle;
