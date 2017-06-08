const initialState = {
  allPhone: [],
  filteredPhone: [],
  selectedPhone: [],
};

export const productReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_DATA_PHONE':
      return Object.assign({}, state, {
        allPhone: action.payload,
        filteredPhone: action.payload,
      })
    case 'SEARCH_PHONE':
      return state;
    case 'SELECT_PHONE':
      return Object.assign({}, state, {
        selectedPhone: [action.payload],
      });
    default:
      return state;
  };
}
