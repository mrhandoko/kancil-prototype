import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import FBLogin from '../components/FBLogin'
import Header from './Header'

class SignUp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      registerErr: '',
      email: '',
      password1: '',
      password2: '',
      username: '',
      registerButton: true,
      fieldDisable: false,
      redirectLoginSuccess: false
    }
  }

  setUsernameField (e) { this.setState({username: e.target.value}) }
  setPassword1Field (e) { this.setState({password1: e.target.value}) }
  setPassword2Field (e) { this.setState({password2: e.target.value}) }
  setEmailField (e) {
    let email = e.target.value
    console.log('email', email);
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)) {
      this.setState({email: email})
      return true
    } else {
      return false
    }
  }

  componentWillUpdate (nextProps, nextState) {
    nextState.registerButton = !(nextState.email && nextState.username && (nextState.password1 === nextState.password2) && nextState.password1 !== '')
  }

  registerButtonOnClick () {
    // show loading
    this.setState({ registerButton: true, disabled: true })
    axios.post('http://localhost:8080/auth/register', this.state)
    .then(result => {
      window.localStorage.setItem('userDetail', JSON.stringify(result))
    })
    .catch(err => {
      this.setState({ registerErr: err})
    })
  }

  render () {
    if (this.state.redirectRegisterSuccess) {
      return <Redirect to={{pathname: '/phone'}} />
    }
    return (
      <div>
        <Header />
        <div className='container' style={{ margin: 5 }}>
          <div className='row'>
            <div className='col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-3 col-lg-3 col-lg-offset-4'>
              <div className='panel-top'>
                <h4 className='fnt-blue'>Login</h4>
              </div>
              <div className='panel-bottom'>
                <div className='clean-form'>
                  <h5 className='fnt-grey'>User Name</h5>
                  <input
                    type='text'
                    className='input-full'
                    onChange={this.setUsernameField.bind(this)}
                    disabled={this.state.fieldDisable}
                    />
                  <div className='form-spacer'></div>
                  <h5 className='fnt-grey'>Email</h5>
                  <input type='text' className='input-full' onChange={this.setEmailField.bind(this)} disabled={this.state.fieldDisable}/>
                  <div className='form-spacer'></div>
                  <h5 className='fnt-grey'>Password</h5>
                  <input type='password' className='input-full' onChange={this.setPassword1Field.bind(this)} disabled={this.state.fieldDisable}/>
                  <div className='form-spacer'></div>
                  <h5 className='fnt-grey'>Re-type Password</h5>
                  <input type='password' className='input-full' onChange={this.setPassword2Field.bind(this)} disabled={this.state.fieldDisable}/>
                  <div className='row'>
                    <div className='col-sm-12 col-md-12 col-lg-12'>
                      <button
                        disabled={this.state.registerButton}
                        className='tertiary input-full'
                        >Sign Up</button>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-sm-12 col-md-12 col-lg-12 text-center'>
                    <img src={require('../assets/images/facebook_login.png')} alt='Facebook Login Button' />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-sm-12 col-md-12 col-lg-12 text-center'>
                    <a href='' className='forgot-password fnt-sz-s1'>Already have an account?</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// const SignUp = enhance(({ dataUser, setUsername, setEmail, setPassword, setRetypePassword }) =>
//   <div style={{ marginRight: '35%', marginLeft: '35%' }}>
//     <div style={{ width: '100%', alignContent: 'center' }}><h1>Kancil Login Page {JSON.stringify(dataUser)} username={dataUser.username} | email={dataUser.email}</h1></div>
//     <input type='text' style={{ width: '100%' }} placeholder='Username' onChange={setUsername} />
//     <input type='text' style={{ width: '100%' }} placeholder='Email' onChange={setEmail} />
//     <input type='password' style={{ width: '100%' }} placeholder='Password' onChange={setPassword} />
//     <input type='password' style={{ width: '100%' }} placeholder='Re-type Password' onChange={setRetypePassword} />
//     <input type='submit' style={{ width: '100%' }} value='Sign Up' onClick={() => console.log(dataUser)} />
//     <FBLogin style={{ width: '100%' }} />
//   </div>
// )

export default SignUp
