import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../components/pages/Home/Home";
import GadgetsCards from "../components/GadgetsCards/GadgetsCards";
import Statistic from "../components/pages/Statistics/Statistic";
import Dashboard from "../components/pages/Dashboard/Dashboard";
import GadgetDetails from "../components/pages/GadgetDetails.jsx/GadgetDetails";
// import Categories from "../components/Categories/Categories";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: '/',
            element: <GadgetsCards></GadgetsCards>,
            loader: () => fetch('../gadgets.json'),
          },
          {
            path: '/category/:category',
            element: <GadgetsCards></GadgetsCards>,
            loader: () => fetch('../gadgets.json'),
          }
        ]
      },
      {
        path: '/statistics',
        element: <Statistic></Statistic>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/gadget/:product_id',
        element: <GadgetDetails></GadgetDetails>,
        loader: () => fetch('../gadgets.json'),
      },
    ]
  },
]);

export default routes;