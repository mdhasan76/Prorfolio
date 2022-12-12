import { createBrowserRouter } from "react-router-dom";
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
                path: "/portfolio/:name",
                // loader: ({ params }) => fetch(`portfolioDetails.json/${params.name}`),
                element: <PortfolioDtails />
            }
        ]
    }
])