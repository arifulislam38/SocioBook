import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/Main/HomeLayout";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
]);

export default router;