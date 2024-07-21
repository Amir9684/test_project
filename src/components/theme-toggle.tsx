import { Sun, Moon } from "lucide-react";

import { useTheme } from "./providers/theme-provider";

import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const { isDarkTheme, toggleThemeHandler } = useTheme();

  const handleTheme = () => {
    toggleThemeHandler();
  };

  return (
    <button
      onClick={handleTheme}
      className="group relative flex items-center justify-center cursor-pointer"
    >
      <div
        className={cn(
          "text-gray-200 dark:group-hover:text-gray-300/80 transition",
          !isDarkTheme && "hidden"
        )}
      >
        <Moon className="w-8 h-8" />
      </div>
      <div
        className={cn(
          "text-yellow-400 group-hover:text-yellow-500/80 transition",
          isDarkTheme && "hidden"
        )}
      >
        <Sun className="w-8 h-8" />
      </div>
    </button>
  );
};
