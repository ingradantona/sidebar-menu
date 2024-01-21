import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "../pages/NotFound/intex";
import { Home } from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);

export default router;
