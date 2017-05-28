const initialState = {partnership: 0};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return action.payload;
    default:
      return state;
  }
};
