import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const Layout = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Header />
            <Outlet />
        </div>
    );
};

export default Layout;