import React from 'react'
import logo from './logo.svg'
import './Navbar.css'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <img src={logo} alt='logo' />

      </div>
      <ul>
        <li> <Link to="/">Home</Link></li>
        <li> <Link to="/Bookparking">Book Parking</Link></li>
        <li> <Link to="/Yourbooking">Your Booking</Link></li>
        <li> <Link to="/About">About</Link></li>
      </ul>
      <button>Logout</button>
    </div>
  )
}

export default Navbar;