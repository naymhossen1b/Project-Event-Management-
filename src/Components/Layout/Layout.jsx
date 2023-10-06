import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { createContext, useEffect, useState } from "react";

export const Createdata = createContext([]);


const Layout = () => {

    const [event, setEvent] = useState({});

    useEffect( () => {
        fetch('events.json')
        .then(res => res.json())
        .then(data => setEvent(data))
        .catch( (error) => {
            console.log("Error fetching data:", error);
        })
    }, [])

    return (
        <div className="w-11/12 mx-auto">
            <Header />
            <Createdata.Provider value={event}>
                <Outlet />
            </Createdata.Provider>

        </div>
    );
};

export default Layout;