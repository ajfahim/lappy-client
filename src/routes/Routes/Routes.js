import Main from "../../layouts/Main/Main";
import Home from "../../pages/Home/Home";
import Register from "../../pages/Register/Register";

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
            }
        ]
    }
])