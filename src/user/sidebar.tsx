import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import { routes } from "@/constants";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { logoutUser } from "@/redux/user";
import { ThemeToggle } from "@/components/theme-toggle";

export const Sidebar = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate(`/?lang=${lang}`, { replace: true });
  };
  return (
    <div className="absolute top-0 left-0 right-0 w-full sm:max-w-fit sm:h-full border-b sm:border-r sm:border-b-0 border-testSecondary py-8 px-10 sm:pr-10 space-y-4 flex flex-col items-start justify-start">
      <div className="flex items-center justify-center w-full">
        <ThemeToggle />
      </div>

      {routes.map((route) => (
        <Link
          key={route.id}
          to={`${route.path}/?lng=${lang}`}
          className={cn(
            "text-center w-full font-semibold max-w-xs mx-auto border-2 border-testSecondary dark:border-gray-300 dark:text-gray-300 dark:hover:text-gray-700 hover:bg-testSecondary dark:hover:bg-gray-300 px-6 py-4 rounded-xl cursor-pointer transition",
            pathname?.split("?")?.[0].slice(0, pathname.length - 1) ===
              route.path &&
              "border-testPrimary dark:border-testPrimary-dark bg-testPrimary hover:bg-testPrimary dark:bg-testborder-testPrimary-dark text-white dark:text-white dark:hover:bg-testborder-testPrimary-dark"
          )}
        >
          {t(`${route.label}`)}
        </Link>
      ))}
      <Button
        variant="ghost"
        className="text-center w-full font-semibold max-w-xs mx-auto border-2 border-testSecondary dark:border-gray-300 dark:text-gray-300 dark:hover:text-gray-700 hover:bg-testSecondary dark:hover:bg-gray-300 px-6 py-7 rounded-xl cursor-pointer transition"
        onClick={handleLogout}
      >
        {t("Logout")}
      </Button>
    </div>
  );
};
