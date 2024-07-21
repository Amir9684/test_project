import { UserPage } from "@/user";
import { Login } from "../login/login";
import { Dashboard } from "@/user/dashboard";
import { Weather } from "@/user/weather";
import { TodoList } from "@/user/todo-list";
import { Profile } from "@/user/profile";
import { useTranslation } from "react-i18next";

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
  {
    id: 4,
    path: "/user/profile",
    label: "Profile",
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
        element: <Weather />,
      },
      {
        path: "/user/todo-list",
        element: <TodoList />,
      },
      {
        path: "/user/profile",
        element: <Profile />,
      },
    ],
  },
  // {
  //   path: "*",
  //   element: <NotFound />,
  // },
];
const provinces = [
  {
    id: 1,
    name: "East Azerbaijan",
    value: "azerbaijan",
  },
  {
    id: 2,
    name: "West Azerbaijan",
    value: "azerbaijan",
  },
  {
    id: 3,
    name: "Ardebil",
    value: "ardebil",
  },
  {
    id: 4,
    name: "Isfahan",
    value: "isfahan",
  },
  {
    id: 5,
    name: "Alborz",
    value: "alborz",
  },
  {
    id: 6,
    name: "Ilam",
    value: "ilam",
  },
  {
    id: 7,
    name: "Bushehr",
    value: "bushehr",
  },
  {
    id: 8,
    name: "Tehran",
    value: "tehran",
  },
  {
    id: 9,
    name: "South khorasan",
    value: "khorasan",
  },
  {
    id: 10,
    name: "Razavi khorasan",
    value: "khorasan",
  },
  {
    id: 11,
    name: "North khorasan",
    value: "khorasan",
  },
  {
    id: 12,
    name: "Khuzestan",
    value: "khuzestan",
  },
  {
    id: 13,
    name: "Zanjan",
    value: "zanjan",
  },
  {
    id: 14,
    name: "Semnan",
    value: "semnan",
  },
  {
    id: 15,
    name: "Sistan o Baloochestan",
    value: "sistan",
  },
  {
    id: 16,
    name: "Fars",
    value: "pharse",
  },
  {
    id: 17,
    name: "Qazvin",
    value: "qazvin",
  },
  {
    id: 18,
    name: "Qom",
    value: "qazvin",
  },
  {
    id: 19,
    name: "urdistan",
    value: "kurdistan",
  },
  {
    id: 20,
    name: "Kerman",
    value: "kerman",
  },
  {
    id: 21,
    name: "Kermanshah",
    value: "kermanshah",
  },
  {
    id: 22,
    name: "Kohkilooye va boirahmad",
    value: "kermanshah",
  },
  {
    id: 23,
    name: "Golestan",
    value: "gilan",
  },
  {
    id: 24,
    name: "Gilan",
    value: "gilan",
  },
  {
    id: 25,
    name: "Lorestan",
    value: "lorestan",
  },
  {
    id: 26,
    name: "Mazandaran",
    value: "mazandaran",
  },
  {
    id: 27,
    name: "Markazi",
    value: "markazi",
  },
  {
    id: 28,
    name: "Hormozgan",
    value: "hormozgan",
  },
  {
    id: 29,
    name: "Hamedan",
    value: "hamedan",
  },
  {
    id: 30,
    name: "Charmahal va bakhtiari",
    value: "hamedan",
  },
  {
    id: 31,
    name: "Yazd",
    value: "yazd",
  },
];

const themes = () => {
  const { t } = useTranslation();
  return [
    { label: t("Default"), value: "default", color: "#2c78ce" },
    { label: t("Orange"), value: "orange", color: "#f1813b" },
    { label: t("Purple"), value: "purple", color: "#a755e2" },
    { label: t("Red"), value: "red", color: "#e85454" },
  ];
};
const languages = () => {
  const { t } = useTranslation();

  return [
    { label: t("English"), value: "en" },
    { label: t("Persian"), value: "fa" },
  ];
};

export { routers, routes, provinces, themes, languages };
