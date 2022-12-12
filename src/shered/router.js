import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog";
import PortfolioDtails from "../Components/PortfolioDtails";
import Main from "../Layout/Main";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: "/portfolio/:id",
                element: <PortfolioDtails />
            },
            {
                path: '/blog',
                element: <Blog />
            }
        ]
    }
])