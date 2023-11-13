import React from 'react'
import './styles.scss'
import logo from './../assets/icons/logo.svg'

export default function Nav() {
  return (
    <nav className="nav">
        <img src={logo} alt="logo" className="nav__logo" />
        <ul className="nav__links">
            <li><a href="#" className="nav__links item">Home</a></li>
            <li><a href="#" className="nav__links item">Episodes</a></li>
            <li><a href="#" className="nav__links item">About</a></li>
            <li><a href="#" className="nav__links item">Contact</a></li>
        </ul>
    </nav>
  )
}
