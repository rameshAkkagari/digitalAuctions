import React from 'react'
import { useLocation,Outlet,Navigate } from 'react-router-dom'
function ReqiuedAuth() {
    const token = localStorage.getItem("token")
    const location = useLocation()
  return (
    <div>
    {!token ? (
      <Navigate to='/signup' state={{ from: location }} replace />
    ) : (
      <Outlet />
    )}
  </div>
  )
}

export default ReqiuedAuth