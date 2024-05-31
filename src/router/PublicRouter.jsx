import { Children } from "react";
import Layout from "../components/Layouts/Layout";
import Public from "../Pages/Public";

export const PublicRouter = [
  {
    element: <Layout />,
    children: [{ path: "/public", element: <Public /> }],
  },
];
