import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class LoginContent extends React.Component {
  constructor () {
    super()
    this.state = {
      email: '',
      password: '',
      isRegistered: false,
      isSucceed: true,
      isLogin: false
    }
  }
  setUsernameField (event) {
    this.setState({ email: event.target.value })
  }
  setPasswordField (event) {
    this.setState({ password: event.target.value })
  }
  clickLogin (event) {
    event.preventDefault();
    let {email, password} = this.state
    axios.post("http://kancil-dev.ap-southeast-1.elasticbeanstalk.com/auth/login/", {email, password})
    .then(result => {
      this.setState({ isSucceed: true, isLogin: true })
      window.localStorage.setItem('userDetail', JSON.stringify(result.data))
    })
    .catch(err => {
      if (err) this.setState({ isSucceed: false })
    });
  }
  componentWillMount() {
    if (window.localStorage.getItem('userDetail') !== null) {
      if (window.localStorage.length !== 0 && JSON.parse(localStorage.getItem('userDetail')).user.username.length > 0) {
        this.setState({
          isLogin: true
        })
      }
    }
  }
  render () {
    if (this.state.isLogin) {
      return <Redirect to="/phone" />
    } else {
      return (
        <div className="container" style={{ margin: '25px 0' }}>
          <div className="row">
            <div className="col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
              <div className="panel-top">
                <h4 className="fnt-blue">Login</h4>
              </div>
              <div className="panel-bottom">
                <form className="clean-form">
                  <h5 className="fnt-grey">Email</h5>
                  <input type="text" name className="input-full" onChange={event => this.setUsernameField(event)} />
                  <div className="form-spacer" />
                  <h5 className="fnt-grey">Password</h5>
                  <input type="password" className="input-full"  onChange={event => this.setPasswordField(event)} />
                  <div className="row" style={{ borderTop: '1px solid #eaeaea', margin: '1rem 0', paddingTop: '1rem' }}>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <button className="tertiary input-full" onClick={event => this.clickLogin(event)}>Login</button>
                      { this.state.isSucceed === false && <span style={{ color: 'red' }}>Anda tidak bisa melakukan login. Silakan daftar/Sign Up terlebih dahulu</span>}
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
    }
  }
}

export default LoginContent
