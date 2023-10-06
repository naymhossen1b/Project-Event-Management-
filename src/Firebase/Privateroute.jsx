/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Components/Authprovider/Authprovider";
import { Navigate } from "react-router-dom";


const Privateroute = ({children}) => {

    const {user, loding} = useContext(AuthContext);
    if(loding){
        return <span className="loading loading-dots loading-md"></span>

    }

    if(user){
        return children;
    }

    return <Navigate to="/login"></Navigate>
};

export default Privateroute;