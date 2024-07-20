import { Link, useLocation } from "react-router-dom";

import { useTheme } from "@/components/providers/theme-provider";
import { routes } from "@/constants/routes";
import { cn } from "@/lib/utils";

export const Sidebar = () => {
  const { pathname } = useLocation();
  const { isDarkTheme } = useTheme();
  return (
    <div className="w-full sm:max-w-fit border-b sm:border-r border-gray-200 py-8 sm:pr-10 space-y-4 flex flex-col items-center justify-center">
      {routes.map((route) => (
        <Link
          key={route.id}
          to={route.path}
          className={cn(
            "text-center w-full font-semibold border-2 border-gray-100 dark:border-gray-300 dark:text-gray-300 dark:hover:text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-300 px-6 py-4 rounded-xl cursor-pointer transition",
            pathname === route.path &&
              "border-blue-500 dark:border-blue-700 bg-blue-500 hover:bg-blue-500 dark:bg-blue-700 text-white dark:text-white dark:hover:bg-blue-700"
          )}
        >
          {route.label}
        </Link>
      ))}
    </div>
  );
};
