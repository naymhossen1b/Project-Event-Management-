import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Home from "../Pages/Home";
import Login from "../Firebase/Login";
import Registar from "../Firebase/Registar";
import Error from "../Components/Error/Error";
import Privateroute from "../Firebase/Privateroute";
import Career from "../Pages/Career";

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
                path: "/career",
                element: <Privateroute> <Career /> </Privateroute>
            }
        ]
    }
])


export default myRouter ;