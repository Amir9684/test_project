import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { Sidebar } from "./sidebar";
import { cn } from "@/lib/utils";
import { useIsAuthenticated } from "@/lib/hooks/useIsAuthenticated";

export const UserPage = () => {
  useIsAuthenticated();
  const user = useSelector((state: any) => state.user);

  return (
    <div
      className={cn(
        "h-full flex items-center justify-center",
        user.theme === "default" && "theme-default",
        user.theme === "red" && "theme-red",
        user.theme === "orange" && "theme-orange",
        user.theme === "purple" && "theme-purple"
      )}
    >
      <div className="relative border dark:border-gray-600 dark:shadow-sm dark:shadow-white w-full min-h-[550px] sm:flex-row max-w-5xl border-testSecondary rounded-md flex flex-col items-start justify-between px-10 sm:pl-10">
        <Sidebar />
        <div className="mt-[500px] sm:ml-48 sm:mt-0 w-full ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
