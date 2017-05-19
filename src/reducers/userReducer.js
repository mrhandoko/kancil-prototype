const initialState = {}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return action.payload
    case 'REGISTER_TOKEN':
      return action.payload
    case 'LOGOUT_TOKEN':
      return state
    default:
      return state
  }
  return state
}
