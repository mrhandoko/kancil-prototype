const initialState = {}

export const productReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SELECT_PHONE':
      console.log(action.payload);
      return action.payload
    default:
      return state
  }
}
