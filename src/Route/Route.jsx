import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Home from "../Pages/Home";
import Login from "../Firebase/Login";
import Registar from "../Firebase/Registar";
import Error from "../Components/Error/Error";
import Events from "../Pages/Events";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contact";
import Eventdetails from "../Components/EventCard/Eventdetails";
import Privateroute from "../Firebase/Privateroute";

const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Registar />
            },
            {
                path: '/events',
                element: <Events />
            },
            {
                path: '/blog',
                element: <Privateroute> <Blog /> </Privateroute>
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/card/:id',
                element: <Privateroute> <Eventdetails /> </Privateroute>
            }
        ]
    }
])


export default myRouter ;