import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home/Home";
import Layout from "../Layouts/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
        ]
    },
]);
export default router