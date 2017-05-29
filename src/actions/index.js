import axios from 'axios'
// const BASE_URL = 'http://kancil-dev.ap-southeast-1.elasticbeanstalk.com/'
const BASE_URL = 'http://localhost:8000/'

export const loginRequest = (email, password) => dispatch => {
  axios.post(BASE_URL + 'auth/login/', {email, password})
  .then(response => {
    if (response.data.user.email === email) {
      response.data['isSucceed'] = true
      response.data['isLogin'] = true
      dispatch({
        type: 'SET_USER_DATA',
        payload: response.data
      })
    } else {
      dispatch({
        type: 'LOGIN_FAILED',
        payload: response.data
      })
    }
  })
  .catch(err => {
    dispatch({
      type: 'LOGIN_FAILED',
      payload: err
    })
  })
}

export const setPartnership = id => {
  return ({
    type: 'SET_PARTNER_ID',
    payload: {id}
  })
}
