import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/Main/HomeLayout";
import About from "../Pages/About/About";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Media from "../Pages/Media/Media";
import Message from "../Pages/Message/Message";
import PostDetails from "../Pages/PostDetails/PostDetails";
import PrivateAccess from "../Pages/ProtectedPage/PrivateAccess";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/media',
                element: <PrivateAccess><Media></Media></PrivateAccess>
            },
            {
                path: '/message',
                element: <Message></Message>
            },
            {
                path: '/about',
                element: <PrivateAccess><About></About></PrivateAccess>
            },
            {
                path: '/postdetails/:id',
                element: <PrivateAccess><PostDetails></PostDetails></PrivateAccess>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
]);

export default router;