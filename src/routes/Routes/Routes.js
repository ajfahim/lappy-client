import DisplayError from "../../components/shared/DisplayError/DisplayError";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import Main from "../../layouts/Main/Main";
import Blog from "../../pages/Blog/Blog";
import AddLaptop from "../../pages/Dashboard/AddLaptop/AddLaptop";
import AllUsers from "../../pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../pages/Dashboard/Dashboard";
import MyLaptops from "../../pages/Dashboard/MyLaptops/MyLaptops";
import Home from "../../pages/Home/Home";
import ByCategory from "../../pages/Laptops/ByCategory";
import Laptops from "../../pages/Laptops/Laptops";
import Login from "../../pages/Login/Login";
import NotFound from "../../pages/NotFound/NotFound";
import Register from "../../pages/Register/Register";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/laptops',
                element: <Laptops></Laptops>
            }
            ,
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`https://lappy-server.vercel.app/categories/${params.id}`),
                element: <PrivateRoute><ByCategory></ByCategory></PrivateRoute>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>
            },
            {
                path: "/dashboard/allusers",
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {

                path: "/dashboard/add-laptop",
                element: <SellerRoute><AddLaptop></AddLaptop></SellerRoute>
            },
            {

                path: "/dashboard/my-laptops",
                element: <SellerRoute><MyLaptops></MyLaptops></SellerRoute>
            }

        ]
    },
    {
        path: "*",
        element: <NotFound></NotFound>
    }
])