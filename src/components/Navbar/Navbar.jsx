import React from 'react'
import logo from './logo.svg'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

  function show() {
    document.querySelector("ul").style.top = "600px"
  }

  function hide() {
    document.querySelector("ul").style.top = "-600px"
  }

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt='logo' />
      </div>
      <ul className='navbarul'>
        <li> <Link className='lilink ' to="/profile">Profile</Link></li>
        <li> <Link className='lilink ' to="/home">Home</Link></li>
        <li> <Link className='lilink' to="/Bookparking">Book Parking</Link></li>
        <li> <Link className='lilink' to="/Yourbooking">Your Booking</Link></li>
        <li> <Link className='lilink' to="/About">About</Link></li>
        <Link className='lilink' to="/Subscribe">
          <button className="Btn"></button>
        </Link>
        <Link className='logout' to="/signup">Logout</Link>
        <div onClick={hide} className="closebtn">
          <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <g id="Menu / Close_LG">
                <path id="Vector" d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
                  stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </g>
            </g>
          </svg>
        </div>
      </ul>
      <div onClick={show} className="hamburger">
        <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <g id="Menu / Hamburger_MD">
              <path id="Vector" d="M5 17H19M5 12H19M5 7H19" stroke="#000000" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round"></path>
            </g>
          </g>
        </svg>
      </div>
    </div>
  )
}

export default Navbar;