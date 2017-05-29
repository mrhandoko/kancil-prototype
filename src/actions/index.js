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

export const setUserData = user => {
  user['isLogin'] = true
  user['isSucceed'] = true
  return {
    type: 'SET_USER_DATA',
    payload: user
  }
}

export const getUserDetail = user => dispatch => {
  axios.get(BASE_URL + 'api/userdetail/', {headers: { Authorization: 'JWT ' + user.token}})
  .then(response => {
    dispatch({
      type: 'SET_USER_DETAIL',
      payload: response.data
    })
  })
  .catch(err => console.log(err))
}

export const selectPhone = data => {
  console.log('fireedd');
  return {
    type: 'SELECT_PHONE',
    payload: data
  }
}

export const setUserDetail = data => ({
  type: 'SET_USER_DETAIL',
  payload: data
})

export const setPartnership = id => {
  return ({
    type: 'SET_PARTNER_ID',
    payload: {id}
  })
}
