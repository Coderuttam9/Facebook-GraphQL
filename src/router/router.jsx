import { createBrowserRouter } from "react-router-dom";
import { PrivateRoute } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

const router = createBrowserRouter([...PrivateRoute, ...PublicRouter]);

export default router;
