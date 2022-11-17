import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
    const isAuth=window.sessionStorage.getItem('TokenValue')
    console.log("Value of isAuth: ", isAuth)
  return isAuth ? <Outlet/> : <Navigate to = '/login'/>;
};
export default ProtectedRoute;
