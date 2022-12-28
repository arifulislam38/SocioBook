import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/Main/HomeLayout";
import About from "../Pages/About/About";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Home from "../Pages/Home/Home";
import Media from "../Pages/Media/Media";
import Message from "../Pages/Message/Message";
import PostDetails from "../Pages/PostDetails/PostDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/media',
                element: <Media></Media>
            },
            {
                path: '/message',
                element: <Message></Message>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/media/postdetails',
                element: <PostDetails></PostDetails>
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