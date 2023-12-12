import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Resume from "./pages/Resume";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Home />,
    },
    {
      path: "resume", 
      element: <Resume/>
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};
export default Router;
