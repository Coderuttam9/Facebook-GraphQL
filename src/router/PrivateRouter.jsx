import { Children } from "react";
import Layout from "../components/Layouts/Layout";
import Home from "../Pages/home/Home";
import Login from "../Pages/Login";

export const PrivateRoute = [
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
];
