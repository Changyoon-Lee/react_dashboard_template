import { useEffect, useState } from "react";

function Header() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleToggleBtn = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.theme = newTheme;
    setTheme(newTheme);
  };
  return (
    <header className="flex justify-around items-center p-3 bg-gray-200 dark:bg-gray-600 text-lg text-gray-800 dark:text-white font-bold">
      <span>menu1</span>
      <span>menu2</span>
      <span>menu3</span>
      <button onClick={handleToggleBtn}>toggle</button>
    </header>
  );
}

export default Header;
