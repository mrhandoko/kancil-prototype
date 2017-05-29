const initialState = {};

export const userDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_DETAIL':
      return action.payload;
    default:
      return state;
  }
};
