import React from 'react';
import { NavLink } from 'react-router-dom'

function Footer() {

    return (
        <footer>
            <NavLink exact to="/interact">Contact Us</NavLink>
            <NavLink to="">About</NavLink>
        </footer>
    )
}

export default Footer