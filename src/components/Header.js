import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <div className='sticky'>
    <div className='row'>
      <div className='col-sm-7 col-md-3 col-md-offset-1 col-lg-4 col-lg-offset-2'>
        <img src={require('../assets/images/logo/top_logo.png')} className='top-logo' />
      </div>
      <div className='align-right col-sm-5 col-md-7 col-lg-4'>
        <nav className='hidden-sm'>
          <Link to='/'>Home</Link>
          <Link to='phone-selection'>Phones</Link>
          <a href='#'>FAQ</a>
          <a href='#'>Contact</a>
          <Link to='/signup'><b>Sign Up</b></Link>
        </nav>
      </div>
    </div>
  </div>
)

export default Header
