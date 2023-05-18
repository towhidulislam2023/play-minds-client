import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home/Home";
import Layout from "../Layouts/Layout";
import Login from "../pages/Login/Login";
import Registar from "../pages/Registar/Registar";
import ViewProductDetails from "../pages/ViewProductDetails/ViewProductDetails";
import PrivateRoute from "./PrivateRoute";
import Alltoys from "../pages/Alltoys/Alltoys";

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
            {
                path:"/viewProductDetails/:id",
                element: <PrivateRoute><ViewProductDetails></ViewProductDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://play-minds-server.vercel.app/viewdetails/${params.id}`)
            },
            {
                path: "/alltoys",
                element: <Alltoys></Alltoys>
            },
           
        ]
    },
]);
export default router