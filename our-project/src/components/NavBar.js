import React from 'react'
import { NavLink } from 'react-router-dom'



function NavBar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/coffee">Coffee</NavLink>
      <NavLink to="/interact">Interact</NavLink>
    </nav>
  )
}

export default NavBar