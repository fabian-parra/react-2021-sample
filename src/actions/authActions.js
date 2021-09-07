const siginDispatch = (dispatch) => ({username, name, token}) => {
  const action = {
    type: 'sigin',
    token,
    name,
    username
  }
  return dispatch(action)
}

export const actions = (dispatch) => ({
  siginDispatch: siginDispatch(dispatch)
})
