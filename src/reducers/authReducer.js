export const authInitialState = {
  auth: false,
  siginTimestamp: null,
  name: null,
  username: null,
  token: null,
}

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'sigin':
      return {
        ...state,
        auth: true,
        siginTimestamp: Date.now(),
        name: action.name,
        username: action.username,
        token: action.token,
      }
    case 'sigout':
      return {
        ...state,
        auth: false,
        siginTimestamp: null,
        name: null,
        username: null,
        token: null,
      }
    default:
      return { ...state }
  }
}
