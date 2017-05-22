import React from 'react'
import { Link } from 'react-router-dom'

const MobileMenu = () => (
  <div>
    <div className="button_container_ham">
      <div className="top" />
      <div className="middle" />
      <div className="bottom" />
    </div>
    <div className="overlay">
      <div className="mobilemenu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="phone-selection">Phones</Link></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Contact</a></li>
          <li><Link to="/signup"><b>Sign Up</b></Link></li>
        </ul>
      </div>
    </div>
  </div>
)

export default MobileMenu
