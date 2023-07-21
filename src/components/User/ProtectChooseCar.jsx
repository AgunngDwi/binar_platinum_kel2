import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedChooseCar = ({children}) => {
    const token = localStorage.getItem("token")

    if (!token ) {
        return <Navigate to={'/login'} />
    } 
    

    

  return <> {children || <Outlet/>}</>
}

export default ProtectedChooseCar