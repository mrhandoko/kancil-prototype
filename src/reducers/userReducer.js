const initialState = { isLogin: false };

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return action.payload;
    case 'SET_USER_DETAIL':
      return action.payload;
    case 'REGISTER_TOKEN':
      return action.payload;
    case 'LOGOUT_TOKEN':
      return state;
    case 'LOGIN_FAILED':
      return action.payload;
    default:
      return state;
  }
};
