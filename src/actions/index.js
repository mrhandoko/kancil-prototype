import axios from 'axios'
const BASE_URL = 'http://kancil-dev.ap-southeast-1.elasticbeanstalk.com/'

export const loginRequest = (email, password) => dispatch => {
  axios.post(BASE_URL + 'auth/login/', {email, password})
  .then(response => {
    console.log(email, password)
    if (response.data.user.email === email) {
      response.data['isSucceed'] = true
      response.data['isLogin'] = true
      console.log(response.data);
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
