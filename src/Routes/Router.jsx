import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Loading from "../Components/Loading";
import AppDetails from "../Pages/AppDetails";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRout from "../Provider/PrivateRout";
import Blog from "../Pages/Blog";
import ProfileLayout from "../Layouts/ProfileLayout";
import ShowProfile from "../Pages/ShowProfile";
import Myprofile from "../Pages/Myprofile";




const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/appData.json'),
                hydrateFallbackElement: <Loading></Loading>,
            },
            {
                path: '/appDetails/:id',
                element: <PrivateRout>
                    <AppDetails></AppDetails>
                </PrivateRout>,
                loader: () => fetch('/appData.json'),
                hydrateFallbackElement: <Loading></Loading>,
                errorElement: <Error></Error>,
            }, 
            {
                path: '/blog',
                element: <Blog></Blog>,
                loader: () => fetch('/Blog.json'),
                hydrateFallbackElement: <Loading></Loading>,
            },
           
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>,
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/my-profile',
        element: <PrivateRout>
            <ProfileLayout></ProfileLayout>
        </PrivateRout>,
        children:[
            {
                path: '/my-profile',
                element: <ShowProfile></ShowProfile>,

            },
            {
                path: '/my-profile/update',
                element: <Myprofile></Myprofile>
            }
        ]
    },
    {
        path: '/*',
        element: <Error></Error>,
    },
])

export default Router;