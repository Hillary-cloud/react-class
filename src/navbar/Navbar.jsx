import React from 'react'
import './Navbar.css'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div>
      <nav>
        <h1>Logo</h1>
        <ul>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/about'}>About</NavLink></li>
            <li><NavLink to={'contact'}>Contact</NavLink></li>
            <li><NavLink to={'services'}>Services</NavLink></li>
        </ul>
        <button onClick={() => navigate('contact')}>Get Started</button>
      </nav>
      
    </div>
  )
}

export default Navbar
