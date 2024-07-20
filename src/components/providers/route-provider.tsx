import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { routers } from "../../constants";

const router = createBrowserRouter(routers);

function RouteProvider() {
  return <RouterProvider router={router} />;
}

export { RouteProvider };
