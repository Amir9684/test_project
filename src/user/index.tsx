import { useIsAuthenticated } from "@/lib/hooks/useIsAuthenticated";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar";

export const UserPage = () => {
  useIsAuthenticated();
  return (
    <div className="h-full flex items-center justify-center">
      <div className="border w-full sm:flex-row max-w-5xl border-gray-200 rounded-md flex flex-col items-start justify-between px-10 sm:pl-10">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};
