import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'


const WithAuth = ({ children }) => {
    const location = useLocation();
    const auth = localStorage.getItem('user');
    if (!auth) { 
        return <Navigate to={'/signin'} state={{ from: location }} />
    }
    return children;
}

export default WithAuth