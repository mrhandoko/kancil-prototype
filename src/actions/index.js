import axios from 'axios';

const BASE_URL = 'http://kancil-dev.ap-southeast-1.elasticbeanstalk.com/';

export const loginRequest = (email, password) => dispatch => {
  axios.post(BASE_URL + 'auth/login/', { email, password })
  .then(response => {
    if (response.data.user.email === email) {
      response.data['isSucceed'] = true;
      response.data['isLogin'] = true;
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
  return {
    type: 'SELECT_PHONE',
    payload: data,
  };
}

export const getDataPhone = id => dispatch => {
  console.log('cek id', id);
  if (id === '') {
    axios.get('http://kancil-dev.ap-southeast-1.elasticbeanstalk.com/api/finance-product/3/')
    .then(response => dispatch({
      type: 'GET_DATA_PHONE',
      payload: response.data,
    }))
    .catch(error => dispatch({
      type: 'GET_DATA_PHONE_ERROR',
      payload: error,
    }));
  } else {
    axios.get('http://kancil-dev.ap-southeast-1.elasticbeanstalk.com/api/finance-product/' + id + '/')
    .then(response => dispatch({
      type: 'GET_DATA_PHONE',
      payload: response.data
    }))
    .catch(error => dispatch({
      type: 'GET_DATA_PHONE_ERROR',
      payload: error
    }));
  }
}

export const setUserDetail = data => ({
  type: 'SET_USER_DETAIL',
  payload: data,
});

export const setPartnership = id => {
  return ({
    type: 'SET_PARTNER_ID',
    payload: {id},
  });
}

export const submitLoan = (finance_product, product, user) => dispatch => {
  console.log('id', finance_product);
  console.log('product', product);
  console.log('user', user);
  dispatch({
    type: 'ADD_LOAN_REQUEST'
  })
  axios.post(BASE_URL + 'api/loan/', {finance_product, product}, {headers: { Authorization: 'JWT ' + user.token }})
  .then(response => {
    dispatch({
      type: 'ADD_LOAN_SUCCESS',
      payload: response.data
    })
  })
  .catch(err => dispatch({
    type: 'ADD_LOAN_ERROR',
    payload: err
  }))
}

export const getLoanData = user => dispatch => {
  dispatch({ type: 'FETCH_LOAN_REQUEST' });
  axios.get(BASE_URL + 'api/loan/', {headers: { Authorization: 'JWT ' + user.token }})
  .then(response => {
    dispatch({
      type: 'FETCH_LOAN_SUCCESS',
      payload: response.data
    })
  })
  .catch(err => dispatch({ type: 'FETCH_LOAN_ERROR', payload: err }));
}
