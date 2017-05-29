const initialState = {id: 1};

export const partnerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PARTNER_ID':
      return action.payload;
    default:
      return state;
  }
};
