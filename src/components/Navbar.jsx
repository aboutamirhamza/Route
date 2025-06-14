import React from 'react'
import { Link } from 'react-router'

function Navbar() {

  return (
    <div style={{
      display: "flex",
      gap: "16px",
      marginBottom: "60px",
      fontSize: "30px",
      color: "white",
    }}>
      <Link to="/">Home</Link>|
      <Link to="/about">About</Link>|
      <Link to="/contact">Contact</Link>|
      <Link to="/member">Member</Link>|
      <Link to="/member/member-details/123456/AmirHamza">Member Details</Link>|
    </div>
  )
}

export default Navbar;