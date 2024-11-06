import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../components/pages/Home/Home";
import GadgetsCards from "../components/GadgetsCards/GadgetsCards";
import Statistic from "../components/pages/Statistics/Statistic";
import Dashboard from "../components/pages/Dashboard/Dashboard";
import GadgetDetails from "../components/pages/GadgetDetails.jsx/GadgetDetails";
import Cart from "../components/Cart/Cart";
import Wishlist from "../components/Wishlist/Wishlist";
import ErrorPage from "../components/ErrorPage/ErrorPage";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: <Statistic></Statistic>,
        loader: () => fetch('../gadgets.json'),
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: '/dashboard/cart',
            element: <Cart></Cart>
          },
          {
            path: '/dashboard',
            element: <Cart></Cart>
          },
          {
            path: '/dashboard/wishlist',
            element: <Wishlist></Wishlist>
          },
        ]
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