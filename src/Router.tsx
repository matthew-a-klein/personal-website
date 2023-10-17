import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Home />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};
export default Router;
