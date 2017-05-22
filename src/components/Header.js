import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import axios from 'axios'

import { setUserData } from '../actions'

class Header extends React.Component {
  componentWillMount() {
    let setUser = window.localStorage.getItem('userDetail')
    if (setUser !== null) {
      let userJson = JSON.parse(setUser)
      axios
        .post('http://localhost:8000/auth/verify', { token: userJson.token })
        .then(result => {
          if (result.data.token === userJson.token) {
            this.props.setUserData(result.data)
          } else {
            console.log('something wong', result)
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
  render() {
    return (
      <header className="sticky">
        <div className="row">
          <div className="col-sm-7 col-md-3 col-md-offset-1 col-lg-4 col-lg-offset-2">
            <img
              src={require('../assets/images/logo/top_logo.png')}
              className="top-logo"
              alt=""
            />
          </div>
          <div className="align-right col-sm-5 col-md-7 col-lg-4">
            <nav className="hidden-sm">
              <Link to="/">Home</Link>
              <Link to="/phone">Phones</Link>
              <a href="#">FAQ</a>
              <a href="#">Contact</a>
              <Link to="/daftar"><b>Daftar</b></Link>
              <Link to="/daftar"><b>Login</b></Link>
            </nav>
          </div>
        </div>
      </header>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setUserData }, dispatch)
}

export default connect(null, mapDispatchToProps)(Header)
