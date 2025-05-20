import React from 'react'
import { NavLink } from 'react-router'
import logo from '../assets/logo.svg'

function Header() {
  return (
    <nav>
      <ul>
        <li>list</li>
        <li><NavLink to="/">
            <img src={logo} alt="Camtac Hotel Logo" />
          </NavLink></li>
        <li><NavLink>
          Login
          </NavLink></li>
      </ul>
    </nav>
  )
}

export default Header