const initialState = {};

export const productReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_DATA_PHONE':
      return action.payload;
    case 'SELECT_PHONE':
      return action.payload;
    default:
      return state;
  }
}
