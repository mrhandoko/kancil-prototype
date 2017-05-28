import axios from 'axios'
const BASE_URL = 'http://kancil-dev.ap-southeast-1.elasticbeanstalk.com/'

export function setUserData (payload) {
  return {
    type: 'SET_USER_DATA',
    payload
  }
}

export const loginRequest = (email, password) => dispatch => {
  axios.post(BASE_URL + 'auth/login/', {email, password})
  .then(response => {
    if (response.data.user.email === email) {
      response.data['isSucceed'] = true
      response.data['isLogin'] = true
      setUserData(response.data)
    } else {
      return {
        type: 'LOGIN_FAILED',
        payload: response.data
      }
    }
  })
  .catch(err => {
    return {
      type: 'LOGIN_FAILED',
      payload: err
    }
  })
}
