import React from 'react'
import { Outlet } from 'react-router-dom'

import { NavBar } from './NavBar'
import {UserProvider} from './context/UserProvider'
export const MainApp = () => {
  return (
    <UserProvider>
        <div className="col-12 text-center">
            <h1>MAIN APP</h1>
                <NavBar/>
            <hr />
        </div>
        
        <div className="col-12">
            <Outlet/>
        </div>
    </UserProvider>
    )
}
