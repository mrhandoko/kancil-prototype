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
      const filteredPhone = state.allPhone.filter((item, index) => {
        let pattern = new RegExp(action.payload, 'gi')
        return pattern.test(item.model)
      })
      return Object.assign({}, state, { filteredPhone })
    case 'SELECT_PHONE':
      return Object.assign({}, state, {
        selectedPhone: [action.payload],
      });
    default:
      return state;
  };
}
