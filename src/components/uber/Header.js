import React from 'react'

const Header = () => (
  <header className="sticky">
    <div className="row">
      <div className="col-sm-7 col-md-3 col-md-offset-1 col-lg-4 col-lg-offset-2">
        <img src="img/top_logo.png" className="top-logo" alt="" />
      </div>
      <div className="text-right col-sm-5 col-md-7 col-lg-4">
        <nav className="hidden-sm">
          <a href="#">Home</a>
          <a href="#" className="active">Phones</a>
          <a href="#">FAQ</a>
          <a href="#">Contact</a>
          <a href="#"><b>Sign Up</b></a>
        </nav>
      </div>
    </div>
  </header>
)

export default Header;
