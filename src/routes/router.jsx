import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home/Home";
import Layout from "../Layouts/Layout";
import Login from "../pages/Login/Login";
import Registar from "../pages/Registar/Registar";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/signup",
                element:<Registar></Registar>
            },
           
        ]
    },
]);
export default router