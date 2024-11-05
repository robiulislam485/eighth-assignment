import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../components/pages/Home/Home";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
    },
  ]);

export default routes;