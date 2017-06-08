const initialState = [];

export const productReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_DATA_PHONE':
      return action.payload;
    case 'SEARCH_PHONE':
      return state;
    case 'SELECT_PHONE':
      return [action.payload];
    default:
      return state;
  };
}
