import React from 'react';

const LoginContent = () => (
  <div className="container" style={{ margin: '25px 0' }}>
    <div className="row">
      <div className="col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
        <div className="panel-top">
          <h4 className="fnt-blue">Login</h4>
        </div>
        <div className="panel-bottom">
          <form className="clean-form">
            <h5 className="fnt-grey">User Name</h5>
            <input type="text" name className="input-full" />
            <div className="form-spacer" />
            <h5 className="fnt-grey">Password</h5>
            <input type="text" className="input-full" />
            <div className="row" style={{ borderTop: '1px solid #eaeaea', margin: '1rem 0', paddingTop: '1rem' }}>
              <div className="col-sm-12 col-md-12 col-lg-12">
                <button className="tertiary input-full">Login</button>
              </div>
            </div>
          </form>
          <div className="row" style={{ borderTop: '1px solid #eaeaea', margin: '1rem 0', paddingTop: '1rem' }}>
            <div className="col-sm-12 col-md-12 col-lg-12 text-center">
              <img src="img/facebook_login.png" alt="" />
            </div>
          </div>
          <div className="row" style={{ borderTop: '1px solid #eaeaea', padding: '1rem', backgroundColor: '#eee' }}>
            <div className="col-sm-3 col-md-6 col-lg-6">
              <a href className="forgot-password fnt-sz-s1">Sign Up</a>
            </div>
            <div className="col-sm-9 col-md-6 col-lg-6 text-right">
              <a href className="forgot-password fnt-sz-s1">
                Forgot your Password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default LoginContent
