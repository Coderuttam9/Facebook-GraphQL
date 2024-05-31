import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return <RouterProvider router={router} />;
}

export default App;