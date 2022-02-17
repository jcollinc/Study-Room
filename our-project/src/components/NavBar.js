import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
      <span className="logo">{"///"}</span> 
      <NavLink exact to="/">Study Room</NavLink>
      <NavLink to="/orders">Orders</NavLink>
      <NavLink to="/discussions">Discussions</NavLink>
    </nav>
  )
}

export default NavBar