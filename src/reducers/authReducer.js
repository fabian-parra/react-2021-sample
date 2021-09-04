export const authInitialState = {
  auth: false,
  siginTimestamp: null
}

export const authReducer = (state, action) => {
  switch(action.type) {
    case 'sigin':
      return {
        ...state,
        auth: true,
        siginTimestamp: Date.now()
      }
  }
}
