import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Pages/Error";



const Router = createBrowserRouter([
    {
        path: "/",	
        element: <MainLayout></MainLayout>,
        
    },
    {
        path: '/*',
        element: <Error></Error>,
    }
])

export default Router;