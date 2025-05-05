import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Loading from "../Components/Loading";
import AppDetails from "../Pages/AppDetails";



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
                element: <AppDetails></AppDetails>,
                loader: () => fetch('/appData.json'),
                hydrateFallbackElement: <Loading></Loading>,
            },
        ]
    },
    {
        path: '/*',
        element: <Error></Error>,
    },
])

export default Router;