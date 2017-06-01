import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from './Header';
import Footer from './Footer';
import { loginRequest, getUserDetail } from '../actions';

class Login extends Component {
  constructor () {
    super()
    this.state = {
      email: '',
      password: '',
      isRegistered: false,
      isSucceed: true,
      isLogin: false,
      validEmail: true,
      validPassword: true
    }
  }
  setEmailField (event) {
    let email = event.target.value
		const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regexEmail.test(email)) {
			this.setState({
				email: email,
				validEmail: true
			})
		} else {
			this.setState({ validEmail: false })
		}
  }
  setPasswordField (event) {
    const regex = /(?=.*\d)(?=.*[a-z]).{6,}/g;
    if(regex.test(event.target.value)) {
			this.setState({
        password: event.target.value,
        validPassword: true
       })
		} else {
			this.setState({
				validPassword: false
			})
		}
  }

  clickLogin (event) {
    event.preventDefault()
    let {email, password} = this.state
    this.props.loginRequest(email, password)
    console.log(this.props.loginRequest);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.isLogin && !this.props.user.isLogin) {
      window.localStorage.setItem('userDetail', JSON.stringify(nextProps.user))
      console.log(nextProps.user);
      this.props.getUserDetail(nextProps.user)
      this.setState({ isSucceed: true, isLogin: true })
    }
    else
      this.setState({isSucceed: false})
  }

  render () {
    if (this.state.isLogin) {
      return <Redirect to="/phone" />
    } else {
      return (
		<div>
		<Header />
        <div className="container" style={{margin: '25px 0'}}>
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
            <div className="panel-top">
              <h4 className="fnt-blue">Login</h4>
            </div>
            <div className="panel-bottom">
              <form className="clean-form">
                <h5 className="fnt-grey">Email</h5>
                <input type="text" name className="input-full" onChange={event => this.setEmailField(event)} />
                { !this.state.validEmail && <span style={{ color: 'red' }}>Format Email salah</span>}
                <div className="form-spacer" />
                <h5 className="fnt-grey">Password</h5>
                <input type="password" className="input-full" onChange={event => this.setPasswordField(event)} />
                { !this.state.validPassword && <span style={{ color: 'red' }}>Password masih salah</span>}
                <div className="row" style={{borderTop: '1px solid #eaeaea', margin: '1rem 0', paddingTop: '1rem'}}>
                  <div className="col-sm-12 col-md-12 col-lg-12">
                    <button className="tertiary input-full" onClick={event => this.clickLogin(event)}>Login</button>
                    { this.state.isSucceed === false && <span style={{ color: 'red' }}>Anda tidak bisa melakukan login. Silakan daftar/Sign Up terlebih dahulu</span>}
                  </div>
                </div>
              </form>
              {/* <div className="row" style={{borderTop: '1px solid #eaeaea', margin: '1rem 0', paddingTop: '1rem'}}>
                <div className="col-sm-12 col-md-12 col-lg-12 text-center">
                  <img src="img/facebook_login.png" />
                </div>
              </div> */}
              <div className="row" style={{borderTop: '1px solid #eaeaea', padding: '1rem', backgroundColor: '#eee'}}>
                {/* <div className="col-sm-3 col-md-6 col-lg-6">
                  <a href className="forgot-password fnt-sz-s1">Sign Up</a>
                </div>
                <div className="col-sm-9 col-md-6 col-lg-6 text-right">
                  <a href className="forgot-password fnt-sz-s1">Forgot your Password?</a>
                </div> */}
                <div className="col-sm-12 col-md-12 col-lg-12 text-center">
                  <Link to='signup' className="forgot-password fnt-sz-s1">Sign Up</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
		<Footer />
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({ loginRequest, getUserDetail }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Login)
