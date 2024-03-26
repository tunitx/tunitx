import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { NavBar } from "./Common/NavBar";
import { Banner } from "./components/Banner";
import { Home } from "./pages/Home";
 const router = createBrowserRouter([
{
    path: '/',
    element: <Home/>,
}
   
])
export default router;