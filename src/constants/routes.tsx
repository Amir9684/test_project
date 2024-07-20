import { UserPage } from "@/user";
import { Login } from "../login/login";
import { Dashboard } from "@/user/dashboard";
import { NotFound } from "@/components/not-found";

const routes = [
  {
    id: 1,
    path: "/user/dashboard",
    label: "Dashboard",
  },
  {
    id: 2,
    path: "/user/weather",
    label: "Weather",
  },
  {
    id: 3,
    path: "/user/todo-list",
    label: "TodoList",
  },
];

const routers = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/user",
    element: <UserPage />,
    children: [
      {
        path: "/user/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/user/weather",
        element: <Dashboard />,
      },
      {
        path: "/user/todo-list",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export { routers, routes };
