import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faMugSaucer } from '@fortawesome/free-solid-svg-icons'


function NavBar({ }) {

  function handleClick() {
    
  }

  return (
    <nav>
      {/* <FontAwesomeIcon 
        icon={ faCode }
        color="white"
      /> */}
      <span>    </span>
      <FontAwesomeIcon
        onClick={handleClick}
        icon={ faMugSaucer }
        color="white"
      />
      {/* <span className="logo">{ icon }</span> */}
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/coffee">Coffee</NavLink>
      <NavLink to="/interact">Interact</NavLink>

    </nav>
  )
}

export default NavBar