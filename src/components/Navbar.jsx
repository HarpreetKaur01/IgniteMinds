import React from 'react'
import { NavLink } from 'react-router-dom'
import siteLogo from "../assets/site-logo.jpg";
function Navbar() {
  return (
     <nav className="navbar fixed-top ">
      <div className='main-wrapper container' >
        <img src={siteLogo} alt="" />
          
          <ul className="nav-navLinks">
            <li><NavLink to="/" className={({ isActive }) => isActive ? "nav-links active" : "nav-links"}>Home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "nav-links active" : "nav-links"}>About</NavLink></li>
            <li><NavLink to="/courses" className={({ isActive }) => isActive ? "nav-links active" : "nav-links"}>Courses</NavLink></li>
             <li><NavLink to="/testimonials" className={({ isActive }) => isActive ? "nav-links active" : "nav-links"}>Testimonials</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "nav-links active" : "nav-links"}>Contact</NavLink></li>
            
          </ul>
           </div>
        </nav>
       
  )
}

export default Navbar

