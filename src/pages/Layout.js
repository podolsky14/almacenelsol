import React from 'react'
import sol from "../images/sol.png"
import { NavLink, Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div>
       <nav className=" navbar navbar-expand-lg navbar-light bg-primary  ">
  <div className="container-fluid ">
   <NavLink to="/"> <img src={sol} alt="sol"/> </NavLink>
    <div className='bg-light'>
    <button className="navbar-toggler btn-light" type="button btn-light" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
      <span className="navbar-toggler-icon "></span>
    </button></div>
    <div className="collapse navbar-collapse px-3 layoutcabecera  " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item ">
        <NavLink to="/"> <h1 className='nav-link text-light fs-3 layoutcabecera  '>Home</h1> </NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="nosotros"> <h1 className='nav-link text-light fs-3 layoutcabecera '>Nosotros</h1> </NavLink>
        </li>
       
        <li className="nav-item">
        <NavLink to="contacto"> <h1 className='nav-link text-light fs-3 layoutcabecera '>Contacto</h1> </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
            
  <section>
      <Outlet/>
  </section>
        </div>
    )
}

