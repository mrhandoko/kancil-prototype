import React from 'react'
import FacebookLogin from 'react-facebook-login'

const responseFacebook = response => {
  console.log(response)
}

const FBLogin = () => (
  <FacebookLogin
    appId='765358716970952'
    fields='name,email,picture'
    callback={responseFacebook}
  />
)

export default FBLogin
