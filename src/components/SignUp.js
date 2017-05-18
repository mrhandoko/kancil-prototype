import React from 'react'
import { compose, withState, withHandlers } from 'recompose'
import FBLogin from '../components/FBLogin'

const dataUser = {
  username: '',
  email: '',
  password: '',
  retypePassword: ''
}

const enhance = compose(
  withState('dataUser', 'setDataUser', dataUser),
  withHandlers({
    setUsername: ({setDataUser, dataUser}) => event => {
      setDataUser({...dataUser, username: event.target.value})
    },
    setEmail: ({setDataUser, dataUser}) => event => {
      setDataUser({...dataUser, email: event.target.value})
    },
    setPassword: ({setDataUser, dataUser}) => event => {
      setDataUser({...dataUser, password: event.target.value})
    },
    setRetypePassword: ({setDataUser, dataUser}) => event => {
      setDataUser({...dataUser, retypePassword: event.target.value})
    }
  })
)

const SignUp = enhance(({ dataUser, setUsername, setEmail, setPassword, setRetypePassword }) =>
  <div style={{ marginRight: '35%', marginLeft: '35%' }}>
    <div style={{ width: '100%', alignContent: 'center' }}><h1>Kancil Login Page {JSON.stringify(dataUser)} username={dataUser.username} | email={dataUser.email}</h1></div>
    <input type='text' style={{ width: '100%' }} placeholder='Username' onChange={setUsername} />
    <input type='text' style={{ width: '100%' }} placeholder='Email' onChange={setEmail} />
    <input type='password' style={{ width: '100%' }} placeholder='Password' onChange={setPassword} />
    <input type='password' style={{ width: '100%' }} placeholder='Re-type Password' onChange={setRetypePassword} />
    <input type='submit' style={{ width: '100%' }} value='Sign Up' onClick={() => console.log(dataUser)} />
    <FBLogin style={{ width: '100%' }} />
  </div>
)

export default SignUp
