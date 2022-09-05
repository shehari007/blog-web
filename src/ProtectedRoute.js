import React from "react";
import { Navigate, Outlet } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage";
function ProtectedRoute({ component: Component, ...restOfProps }) {

    const isAuthenticated = secureLocalStorage.getItem("setAuthentication");
    //console.log("this", isAuthenticated);
    return (

        isAuthenticated !== null ? <Outlet /> : <Navigate to="/login" />


    );
}

export default ProtectedRoute;