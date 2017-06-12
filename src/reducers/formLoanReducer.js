const initialState = {
  persistedState: {}
}

export const formLoanReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE':
      return { ...state, persistedState: action.payload }
    default:
      return state;
  }
}
