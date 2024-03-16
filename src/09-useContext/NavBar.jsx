import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export const NavBar = () => {
  return (
    <>
    
<nav className="navbar navbar-expand-lg navbar-dark bg-dark px-2 py-2">
    <a className="navbar-brand" href="#">useContext</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className={  `nav-link `} to={'/'}> Home </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className={  `nav-link  `} to={'/login'}> Login </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className={  `nav-link  `} to={'/about'}> About </NavLink>
            </li>
        </ul>
    </div>
</nav>


       

       
    </>
  )
}
